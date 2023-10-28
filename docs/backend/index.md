# Бекенд проекта

## Содержание

- [Бекенд проекта](#бекенд-проекта)
  - [Содержание](#содержание)
  - [Используемые технологии](#используемые-технологии)
  - [Структура проекта](#структура-проекта)

## Используемые технологии

- [Python](https://www.python.org/)
- [FastApi](https://fastapi.tiangolo.com/)
- [YDB](https://cloud.yandex.ru/services/ydb)

## Структура проекта

```bash
├── URL-Shortener
│   ├── api 
│   │   ├── api_v1
│   │   │   ├── endpoints
│   │   │   │   ├── __init__.py
│   │   │   │   ├── auth.py
│   │   │   │   ├── users.py
│   │   │   │   └── ydb.py
│   │   │   ├── __init__.py
│   │   │   ├── deps.py
│   │   │   ├── errors.py
│   │   │   ├── models.py
│   │   │   ├── routers.py
│   │   │   └── utils.py
│   │   ├── __init__.py
│   │   ├── api.py
│   │   └── deps.py
│   ├── core
│   │   ├── domain
│   │   │   ├── models
│   │   │   │   ├── __init__.py
│   │   │   │   ├── user.py
│   │   │   │   └── ...
│   │   │   ├── repositories
│   │   │   │   ├── __init__.py
│   │   │   │   ├── user_repository.py
│   │   │   │   └── ...
│   │   │   └── services
│   │   │       ├── __init__.py
│   │   │       ├── user_service.py
│   │   │       └── ...
│   │   ├── infrastructure
│   │   │   ├── __init__.py
│   │   │   ├── database.py
│   │   │   └── repositories
│   │   │       ├── __init__.py
│   │   │       ├── user_repository.py
│   │   │       └── ...
│   │   ├── __init__.py
│   │   ├── config.py
│   │   ├── dependencies.py
│   │   ├── exceptions.py
│   │   └── logging.py
│   ├── db
│   │   ├── __init__.py
│   │   ├── base.py
│   │   ├── session.py
│   │   └── ydb.py
│   ├── main.py
│   ├── models
│   │   ├── __init__.py
│   │   ├── auth.py
│   │   ├── token.py
│   │   └── user.py
│   ├── schemas
│   │   ├── __init__.py
│   │   ├── auth.py
│   │   ├── token.py
│   │   └── user.py
│   ├── tests
│   │   ├── __init__.py
│   │   ├── conftest.py
│   │   ├── test_auth.py
│   │   ├── test_users.py
│   │   └── test_ydb.py
│   ├── utils
│   │   ├── __init__.py
│   │   ├── auth.py
│   │   ├── ydb.py
│   │   └── ydb_utils.py
│   ├── requirements.txt
│   ├── requirements.dev.txt
│   └── requirements.prod.txt
└── Makefile
```
