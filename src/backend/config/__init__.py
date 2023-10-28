"""## Package for managing the configuration of the project.

### Interface:
    - Config: Class for managing the configuration of the project.
    - DB_CONFIG: Class for managing the configuration of the database.
    - get_from_config: Function for getting a parameter from the configuration.

### Usage:

#### DB_CONFIG
```python
from config import DBManager

DB_CONFIG = DBManager()

host=DB_CONFIG.HOST,
# or
path=DB_CONFIG['PATH']

db_dict = dict(DB_CONFIG)
```

#### Config
```python
from config import Config

config = Config()

config.get('database', 'host')
config.get_by_key('abrakadabra')

print(config.dumps())
print(config.sections)

```

#### get_from_config
```python
from config import get_from_config

get_from_config('host', section='database')
get_from_config('abrakadabra')

```

"""

__all__ = ['__version__', '__annotations__', '__author__']
__version__ = '0.0.1'
__annotations__ = 'Config, DB_CONFIG, get_from_config'
__author__ = 'DevDK'


from .managers.config import Config
from .managers.db import DBManager
from .utils import get_from_config

__all__ += [
    'Config',
    'DBManager',

    'get_from_config',
]
