""" This module contains the SettingsRepository class. """
import config as settings

from ..database import YDBSession, YdbSRW


class YDBSettingsRepository:
    """SettingsRepository class that handles the settings of the application.

    Attributes:
        table_path (str): The path of the table in the database.

    Methods:

        get(name: str) -> str:
            Returns the value of the setting with the given name.

        set(name: str, value: str) -> None:
            Sets the value of the setting with the given name.

        delete(name: str) -> None:
            Deletes the setting with the given name.

        get_all() -> dict:
            Returns all the settings.

        get_all_len() -> int:
            Returns the number of settings.

        contains(name: str) -> bool:
            Checks if the setting with the given name exists.


    """

    table_path = "settings"

    def get(self, name: str) -> str:
        """Returns the value of the setting with the given name.

        Args:
            name (str): The name of the setting.

        Returns:
            str: The value of the setting.

        """
        with YDBSession() as session:
            query = f"""
            PRAGMA TablePathPrefix("{settings.DATABASE_PATH}");
            DECLARE $key AS Utf8;
            SELECT value FROM {self.table_path} WHERE name = $key;
            """

            prepared_query = session.prepare(query)

            response = session.transaction(YdbSRW()).execute(
                prepared_query,
                {"$key": name},
                commit_tx=True,
            )

            for item in response[0].rows:
                return item.value

            return None

    def set(self, name: str, value: str) -> None:
        """Sets the value of the setting with the given name.

        Args:
            name (str): The name of the setting.
            value (str): The value of the setting.

        """
        with YDBSession() as session:
            query = f"""
            PRAGMA TablePathPrefix("{settings.DATABASE_PATH}");
            DECLARE $key AS Utf8;
            DECLARE $value AS Utf8;
            UPSERT INTO {self.table_path} (name, value) VALUES ($key, $value);
            """

            prepared_query = session.prepare(query)

            session.transaction(YdbSRW()).execute(
                prepared_query,
                {"$key": name, "$value": value},
                commit_tx=True,
            )

    def delete(self, name: str) -> None:
        """Deletes the setting with the given name.

        Args:
            name (str): The name of the setting.

        """
        with YDBSession() as session:
            query = f"""
            PRAGMA TablePathPrefix("{settings.DATABASE_PATH}");
            DECLARE $key AS Utf8;
            DELETE FROM {self.table_path} WHERE name = $key;
            """

            prepared_query = session.prepare(query)

            session.transaction(YdbSRW()).execute(
                prepared_query,
                {"$key": name},
                commit_tx=True,
            )

    def get_all(self) -> dict:
        """Returns all the settings.

        Returns:
            dict: A dictionary with all the settings.

        """
        with YDBSession() as session:
            query = f"""
            PRAGMA TablePathPrefix("{settings.DATABASE_PATH}");
            SELECT key, value FROM {self.table_path};
            """

            prepared_query = session.prepare(query)

            response = session.transaction(YdbSRW()).execute(
                prepared_query,
                commit_tx=True,
            )

            return {item.name: item.value for item in response[0].rows}

    def get_all_len(self) -> int:
        """Returns the number of settings.

        Returns:
            int: The number of settings.

        """
        with YDBSession() as session:
            query = f"""
            PRAGMA TablePathPrefix("{settings.DATABASE_PATH}");
            SELECT COUNT(*) FROM {self.table_path};
            """

            prepared_query = session.prepare(query)

            response = session.transaction(YdbSRW()).execute(
                prepared_query,
                commit_tx=True,
            )

            return response[0].rows[0].count

    def contains(self, name: str) -> bool:
        """Checks if the setting with the given name exists.

        Args:
            name (str): The name of the setting.

        Returns:
            bool: True if the setting exists, False otherwise.

        """
        with YDBSession() as session:
            query = f"""
            PRAGMA TablePathPrefix("{settings.DATABASE_PATH}");
            DECLARE $key AS Utf8;
            SELECT value FROM {self.table_path} WHERE name = $key;
            """

            prepared_query = session.prepare(query)

            response = session.transaction(YdbSRW()).execute(
                prepared_query,
                {"$key": name},
                commit_tx=True,
            )

            return len(response[0].rows) > 0
