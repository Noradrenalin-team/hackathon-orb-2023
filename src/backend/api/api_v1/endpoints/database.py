""" Database module """

import os
from typing import Optional

import ydb
import ydb.iam

credentials_from_environ = ydb.construct_credentials_from_environ() #TODO: add to config
if credentials_from_environ is not None:
    credentials = credentials_from_environ
else:
    this_dir = os.path.dirname(os.path.abspath(__file__))
    credentials = ydb.iam.ServiceAccountCredentials.from_file(
        os.path.join(this_dir, "sa_ydb.json")
    )


driver_config = ydb.DriverConfig(
    "grpcs://ydb.serverless.yandexcloud.net:2135",
    "/ru-central1/b1gpldpf3veopdl8oo4c/etndcuj6u6dhnd9hocqg",
    credentials=credentials,
)


class Singleton:
    """Singleton class (https://en.wikipedia.org/wiki/Singleton_pattern)"""

    _instance: Optional["Singleton"] = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:  # if there is no instance yet
            cls._instance = super().__new__(cls, *args, **kwargs)  # create it
        return cls._instance  # return the instance


YdbSRW = ydb.SerializableReadWrite


class YDBPool(Singleton):
    """YDB pool

    How to use:
    ```
    def create_table(pool):
        def callee(session):
            session.create_table(...)
        pool.retry_operation_sync(callee)

    with YDBPool() as pool:
        create_table(pool)
    ```

    """

    def __init__(self) -> None:
        self.pool = ydb.SessionPool(YDBDriver().driver)

    def __enter__(self) -> ydb.SessionPool:
        return self.pool
        # return self.pool.acquire()

    def __exit__(self, exc_type, exc_value, traceback) -> None:
        self.pool.stop()
        # self.pool.release()


class YDBDriver(Singleton):
    """YDB driver

    How to use:
    ```
    with YDBDriver() as driver:
        driver.wait(timeout=5, fail_fast=True)
    ```
    """

    def __init__(self) -> None:
        self._driver = None

    @property
    def driver(self) -> ydb.Driver:
        """Get driver instance"""
        if self._driver is None:
            self._driver = ydb.Driver(driver_config)
            self._driver.wait(timeout=5, fail_fast=True)
        return self._driver

    @property
    def pool(self) -> YDBPool:
        """Get pool instance"""
        return YDBPool()

    def __enter__(self) -> ydb.Driver:
        return self.pool.__enter__()

    def __exit__(self, exc_type, exc_value, traceback):
        self.pool.__exit__(exc_type, exc_value, traceback)


class YDBSession(Singleton):
    """YDB session

    How to use:
    ```
    with YDBSession() as session:
        session.create_table(...)
    ```


    """

    _pool = None

    def __init__(self) -> None:
        self._pool = YDBPool().pool
        self._session = None

    def __enter__(self) -> ydb.Session:
        # return self._pool.acquire()
        self._session = self._pool.checkout()

        return self._session.__enter__()

    def __exit__(self, exc_type, exc_value, traceback) -> None:
        # self._pool.release()
        self._session.__exit__(exc_type, exc_value, traceback)


if __name__ == "__main__":
    with YDBSession() as session:
        QUERY = """SELECT * FROM key_value"""

        prepared_query = session.prepare(QUERY)

        r = session.transaction(ydb.SerializableReadWrite()).execute(
            prepared_query,
            # {
            #     "$k": "key1",
            #     "$v": "value1",
            # },
            commit_tx=True,
        )

        print(*r[0].rows, sep="\n")
