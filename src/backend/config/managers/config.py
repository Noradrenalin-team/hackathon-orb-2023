''' Менеджер для работы с конфигом 
```python
config = Config()
config.get('db', 'host')
config.get_by_key('abrakadabra')
print(config.dumps())
```
'''

import os
from configparser import ConfigParser

from rich import inspect, print

from .singleton import Singleton


class Config(Singleton):
    """ ## Класс для работы с конфигом
    
    #### Приоритеты:
    1. Переменные окружения
    2. local.ini
    3. dev.ini
    4. prod.ini
    
    ### Methods:
    ```python
    get(section, key)
    ```
        Получение значения из конфига по cекции и ключу
    ```python
    get_by_key(key)
    ```
        Получение значения из конфига по ключу
    ```python
    dumps()
    ```
        Получение конфига в виде словаря

    ### Usage:
    ```python
        config = Config()
        config.get('db', 'host')
        config.get_by_key('abrakadabra')
        print(config.dumps())
    ```

    #### Примечание:
    При использовании метода `get_by_key` сначала ищется значение в секции `default`,
    затем в секциях, указанных в конфиге.

    #### Пример конфига:
    ```ini
    [default]
    mode = prod
    
    [database]
    host = localhost
    port = 5432
    user = postgres
    password = postgres
    database = url_shortener
    ```

    #### PS
    Класс представляет собой синглтон, поэтому при создании экземпляра класса
    необходимо использовать метод `Config()`, а не `Config`


    """

    file_prod = 'configs/prod.ini'
    file_dev = 'configs/dev.ini'
    file_local = 'configs/local.ini'

    def __init__(self):
        self.parsers = {key: ConfigParser() for key in ['prod', 'dev', 'local']}


        self.parsers['prod'].read(os.path.join(os.path.dirname(os.path.dirname(__file__)), self.file_prod))
        self.parsers['dev'].read(os.path.join(os.path.dirname(os.path.dirname(__file__)), self.file_dev))
        self.parsers['local'].read(os.path.join(os.path.dirname(os.path.dirname(__file__)), self.file_local))


        # inspect(self.parsers['local'], methods=True)
        # print(self.parsers['local'].sections())
        # print(os.path.join(os.path.dirname(__file__), self.file_prod))

        all_sections = set()
        for parser in self.parsers.values():
            all_sections.update(parser.sections())

        self._sections = list(all_sections)

        self.store = {}

    def get(self, section: str, key: str) -> str or None:
        """ Получение значения из конфига по cекции и ключу
        
        Args:
        - section: Секция конфига
        - key: Ключ конфига

        Returns:
        - str or None: Значение из конфига или None, если значение не найдено

        
        """

        section = section.upper()
        key = key.upper()
        
        # если значение уже было получено, возвращаем его
        if self.store.get(f'{section}_{key}') is not None:
            return self.store[f'{section}_{key}']

        # сначала ищем значение в переменных окружения
        value = os.environ.get(f'{section}_{key}')
        if value is not None:
            self.store[f'{section}_{key}'] = value
            return value


        # если значение не найдено в переменных окружения,
        # ищем его в local.ini
        value = self.parsers['local'].get(section, key, fallback=None)
        if value is not None:
            self.store[f'{section}_{key}'] = value
            return value

        # если значение не найдено в local.ini,
        # ищем его в dev.ini
        value = self.parsers['dev'].get(section, key, fallback=None)
        if value is not None:
            self.store[f'{section}_{key}'] = value
            return value

        # если значение не найдено в dev.ini,
        # ищем его в prod.ini
        value = self.parsers['prod'].get(section, key, fallback=None)
        if value is not None:
            self.store[f'{section}_{key}'] = value
            return value

        # если значение не найдено нигде, возвращаем None
        return None

    @property
    def sections(self) -> list:
        """ Получение списка секций конфига (кроме дефолтной) """
        return self._sections

    def get_by_key(self, key: str) -> str or None:
        """ Получение значения из конфига по ключу """
        value = self.get('default', key)
        if value is not None:
            return value

        #Пробуем получить значение из переменных окружения
        value = os.environ.get(key)
        if value is not None:
            return value

        #Перебираем все секции
        for section in self.sections:
            value = self.get(section, key)
            if value is not None:
                return value

        return None

        # raise KeyError(f'Key {key} not found in config')

    def dumps(self) -> dict:
        # """ Получение конфига в виде словаря """
        # store = self.store.copy()
        # print(store)
        # sections = self.sections.copy()
        # for section in sections:
        #     section_store = {}


        #     if section in self.parsers['prod'].sections():
        #         for key, value in self.parsers['prod'][section].items():
        #             section_store[f'{section}_{key}'] = value

        #     if section in self.parsers['dev'].sections():
        #         for key, value in self.parsers['dev'][section].items():
        #             section_store[f'{section}_{key}'] = value

        #     if section in self.parsers['local'].sections():
        #         for key, value in self.parsers['local'][section].items():
        #             print(key, value)
        #             section_store[f'{section}_{key}'] = value

        #     store.update(section_store)

        # return store

        return self.store.copy()


    def __getitem__(self, key):
        """ Получение значения из конфига по ключу """
        return self.get_by_key(key)

    def __getattr__(self, key):
        """ Получение значения из конфига по ключу """
        return self.get_by_key(key)

    def __contains__(self, key):
        """ Проверка наличия ключа в конфиге """
        return self.get_by_key(key) is not None

    def __repr__(self):
        return f'<Config: {self.sections}>'

    # @property
    def __dict__(self):
        return self.dumps()

    __all__ = ['get', 'get_by_key', 'dumps', 'sections', '__getitem__', '__getattr__', '__contains__', '__repr__']
