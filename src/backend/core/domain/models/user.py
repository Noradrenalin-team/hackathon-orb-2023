""" User model """


class User:
    """User model"""

    def __init__(self, name: str, uid: str, username: str, role: str):
        self.name = name
        self.uid = uid
        self.username = username
        self.role = role

    def __repr__(self):
        return f"<User {self.username} | {self.uid}>"

    def __str__(self):
        return f"s{self.name}#{self.uid}"
