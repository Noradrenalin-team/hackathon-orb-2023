''' Утилиты для работы с конфигурацией '''

from typing import Optional

from .managers.config import Config


def get_from_config(key: str, section: str = None) -> str:
    """ Получение параметра конфигурации 
    
    key - ключ параметра
    section - секция конфигурации (по умолчанию - None)

    """

    config = Config()
    if section:
        return config.get(section, key)
    return config.get_by_key(key)
