""" User repository """
import config as settings

from ...domain.models.user import User
from ..database import YDBSession, YdbSRW


class YDBUserRepository:
    """YDB user repository"""

    table_path = "users"

    def create(self, user: User):
        """Create user"""

        with YDBSession() as session:
            query = f"""
            PRAGMA TablePathPrefix("{settings.DATABASE_PATH}");
            DECLARE $name AS Utf8;
            DECLARE $uid AS Utf8;
            DECLARE $username AS Utf8;
            DECLARE $role AS Utf8;
            INSERT INTO {self.table_path}
            (name, uid, username, role)
            VALUES
            ($name, $uid, $username, $role);
            """

            prepared_query = session.prepare(query)

            session.transaction(YdbSRW()).execute(
                prepared_query,
                {
                    "$name": user.name,
                    "$uid": user.uid,
                    "$username": user.username,
                    "$role": user.role,
                },
                commit_tx=True,
            )

    def get_by_uid(self, uid: str) -> User:
        """Get user by uid"""
        with YDBSession() as session:
            query = f"""
            PRAGMA TablePathPrefix("{settings.DATABASE_PATH}");
            DECLARE $uid AS Utf8;
            SELECT * FROM {self.table_path} WHERE uid = $uid;
            """

            prepared_query = session.prepare(query)

            result_sets = session.transaction(YdbSRW()).execute(
                prepared_query,
                {
                    "$uid": uid,
                },
                commit_tx=True,
            )

            for result_set in result_sets:
                for row in result_set.rows:
                    return User(
                        name=row.name,
                        uid=row.uid,
                        username=row.username,
                        role=row.role,
                    )

    def get_by_username(self, username: str) -> User:
        """Get user by username"""
        with YDBSession() as session:
            query = f"""
            PRAGMA TablePathPrefix("{settings.DATABASE_PATH}");
            DECLARE $username AS Utf8;
            SELECT * FROM {self.table_path} WHERE username = $username;
            """

            prepared_query = session.prepare(query)

            result_sets = session.transaction(YdbSRW()).execute(
                prepared_query,
                {
                    "$username": username,
                },
                commit_tx=True,
            )

            for result_set in result_sets:
                for row in result_set.rows:
                    return User(
                        name=row.name,
                        uid=row.uid,
                        username=row.username,
                        role=row.role,
                    )

    def get_all(self) -> list[User]:
        """Get all users"""
        with YDBSession() as session:
            query = f"""
            PRAGMA TablePathPrefix("{settings.DATABASE_PATH}");
            SELECT * FROM {self.table_path};
            """

            prepared_query = session.prepare(query)

            result_sets = session.transaction(YdbSRW()).execute(
                prepared_query,
                commit_tx=True,
            )

            users = []

            for result_set in result_sets:
                for row in result_set.rows:
                    users.append(
                        User(
                            name=row.name,
                            uid=row.uid,
                            username=row.username,
                            role=row.role,
                        )
                    )

            return users

    def update(self, user: User):
        """Update user"""
        with YDBSession() as session:
            query = f"""
            PRAGMA TablePathPrefix("{settings.DATABASE_PATH}");
            DECLARE $name AS Utf8;
            DECLARE $uid AS Utf8;
            DECLARE $username AS Utf8;
            DECLARE $role AS Utf8;
            UPDATE {self.table_path}
            SET
            name = $name,
            username = $username,
            role = $role
            WHERE uid = $uid;
            """

            prepared_query = session.prepare(query)

            session.transaction(YdbSRW()).execute(
                prepared_query,
                {
                    "$name": user.name,
                    "$uid": user.uid,
                    "$username": user.username,
                    "$role": user.role,
                },
                commit_tx=True,
            )

    def delete(self, uid: str):
        """Delete user"""
        with YDBSession() as session:
            query = f"""
            PRAGMA TablePathPrefix("{settings.DATABASE_PATH}");
            DECLARE $uid AS Utf8;
            DELETE FROM {self.table_path} WHERE uid = $uid;
            """

            prepared_query = session.prepare(query)

            session.transaction(YdbSRW()).execute(
                prepared_query,
                {
                    "$uid": uid,
                },
                commit_tx=True,
            )
