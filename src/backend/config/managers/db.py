""" Database config manager """
from .base import BaseManager
from .config import Config


class DBManager(BaseManager):
    """ ## Конфигурация базы данных 
    
    ### Параметры:
    - `HOST` - адрес и порт сервера базы данных (обязательный)
    - `ROOT_PATH` - корневая директория базы данных (обязательный)
    - `WORK_DIR` - рабочая директория базы данных (необязательный)
    - `PATH` - путь к базе данных (получается из `ROOT_PATH` и `WORK_DIR`)


    ### Использование:
    ```python
    from config import DBManager
    
    DB_CONFIG = DBManager()

    db(host=DB_CONFIG.HOST,
        # or
       path=DB_CONFIG['PATH'])

    # словарь настроек
    db(**DB_CONFIG)
    # или
    db_dict = dict(DB_CONFIG)
    ```

    Примечание:
    Класс наследуется от `BaseManager` и имеет те же методы и атрибуты.
    Это значит, что вы можете получить доступ к параметрам конфигурации как к атрибутам класса, #pylint: disable=line-too-long
    а также реализует все функции которые представленны в примере выше.
    [Cм. managers.base.BaseManager](/src/URL-Shortener/config/managers/base.py)


    """

    # список параметров конфигурации
    # обязательные параметры
    _required_parms = [
        'HOST',
        'ROOT_PATH',
    ]

    # необязательные параметры
    _optional_parms = [
        'WORK_DIR',
    ]

    _default_parms = _required_parms + _optional_parms

    def __init__(self, section: str = 'database'):
        self._section = section
        self._config = Config()

        self._parms = {
            'WORK_DIR': '',
        }

        self._load()
        self._check()
        self._on_init()
        print(self._parms)

    def _get(self, name: str) -> str:
        """ Получение параметра конфигурации """
        if name in self._parms:
            return self._parms[name]
        value = self._config.get(self._section, name)
        if value:
            self._parms[name] = value
        return value

    def _load(self):
        """ Загрузка конфигурации """
        for parm in self._default_parms:
            value = self._config.get(self._section, parm)
            if value:
                self._parms[parm] = value

    def _check(self):
        """ Проверка наличия всех параметров """
        _unset_required_parms = []
        for parm in self._required_parms:
            if parm not in self._parms:
                _unset_required_parms.append(parm)
        if _unset_required_parms:
            raise ValueError(
                f'Не установлены обязательные параметры: {_unset_required_parms}')
        #TODO: сделать нормальный вывод ошибки #pylint: disable=fixme

    def _on_init(self):
        """ Выполнение заключительных действий при инициализации """

        self._parms['PATH'] = self._parms['ROOT_PATH'] + self._parms['WORK_DIR']

    def __repr__(self):
        return f'<DB_CONFIG: {self._parms}>'
