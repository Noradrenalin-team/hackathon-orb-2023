from ..models.user import User
from ..repositories.user_repository import UserRepository


class UserService:
    # def __init__(self, user_repository: UserRepository):
    def __init__(self, user_repository=UserRepository):
        self.user_repository = user_repository()

    def create_user(self, name: str, uid: str, username: str, role: str):
        user = User(name=name, uid=uid, username=username, role=role)
        self.user_repository.create(user)

    def get_user_by_id(self, uid: str) -> User:
        return self.user_repository.get_by_uid(uid)

    def get_user_by_login(self, username: str) -> User:
        return self.user_repository.get_by_username(username)

    def update_user(self, user: User):
        self.user_repository.update(user)

    def delete_user(self, user: User):
        self.user_repository.delete(user)

    def get_all_users(self) -> list[User]:
        return self.user_repository.get_all()
