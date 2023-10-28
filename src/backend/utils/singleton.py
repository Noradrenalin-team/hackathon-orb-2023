''' Singleton class (https://en.wikipedia.org/wiki/Singleton_pattern) '''

from typing import Optional


class Singleton: # pylint: disable=too-few-public-methods
    """Singleton class (https://en.wikipedia.org/wiki/Singleton_pattern)"""

    _instance: Optional["Singleton"] = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:  # if there is no instance yet
            cls._instance = super().__new__(cls, *args, **kwargs)  # create it
        return cls._instance  # return the instance

