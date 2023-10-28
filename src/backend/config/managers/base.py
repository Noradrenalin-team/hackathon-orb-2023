""" Модуль базового класса менеджера конфигурации """

from .singleton import Singleton


class BaseManager(Singleton):
    """ Базовый класс для менеджеров конфигурации 
    
    ##### Функционал:
    - Позволяет получить доступ к параметрам конфигурации как к атрибутам класса
    - Позволяет получить доступ к параметрам конфигурации как к элементам словаря
    - Позволяет получить словарь параметров конфигурации
    - Позволяет получить строковое представление параметров конфигурации

    ##### ❗️  Внимание  ❗️
    Данный класс не предназначен для использования вне модуля `managers`.
    
    ⚠️ Дочерние классы должны иметь атрибуты и методы:
    - `_parms` - словарь полученых параметров конфигурации
    - `get(name: str) -> str` - получение параметра конфигурации


    ##### Использование:
    ```python
    from config import DBconfig

    # получение параметра
    print(DBconfig.HOST)
    # или
    print(DBconfig['HOST'])

    # строковое представление
    print(DBconfig)
    # или
    print(str(DBconfig))

    # итерация по параметрам
    for key, value in DBconfig:
        print(key, value)
    # или
    for key in DBconfig:
        print(key, DBconfig[key])
    
    # получение словаря параметров
    db_dict = dict(DBconfig)

    # количество параметров
    print(len(DBconfig))
    ```


    """

    def __getattr__(self, __name: str) -> str:
        if __name in self._parms:
            return self._parms[__name]
        else:
            value = self._get(__name)
            if value is not None:
                return value

    def __getitem__(self, __name: str) -> str:
        return self.__getattr__(__name)

    def __iter__(self):
        return iter(self._parms)

    def __len__(self):
        return len(self._parms)

    def __repr__(self):
        return repr(self._parms)

    def __str__(self):
        return str(self._parms)

    def asdict(self):
        return self._parms

    def items(self):
        return self._parms.items()
    
    def keys(self):
        return self._parms.keys()
    
    def values(self):
        return self._parms.values()
    
    def get(self, name: str) -> str:
        """ Получение параметра конфигурации """
        return self._parms.get(name)
