""" Модуль ручек для авторизации.

"""

from datetime import datetime, timedelta

import jwt
from fastapi import APIRouter
from pydantic import BaseModel, Field  # pylint: disable=no-name-in-module


class AuthRequest(BaseModel):
    """ Модель запроса авторизации.

    """

    login: str = Field(..., description="Логин пользователя")
    password: str = Field(..., description="Пароль пользователя")


class Org(BaseModel):
    """ Модель организации.

    """

    id: int = Field(..., description="Идентификатор организации")
    name: str = Field(..., description="Название организации")
    role: str = Field(..., description="Роль пользователя в организации")
    url: str = Field(..., description="URL организации")


class JwtPayload(BaseModel):
    """ Модель полезной нагрузки JWT токена.

    """

    iss: str = Field(..., description="Издатель токена")
    sub: str = Field(..., description="Пользователь")
    aud: str = Field(..., description="Аудитория")
    exp: datetime = Field(..., description="Время истечения токена")
    iat: datetime = Field(..., description="Время создания токена")
    orgs: list[Org] = Field(..., description="Список организаций")
    name: str = Field(..., description="Имя пользователя")
    login: str = Field(..., description="Логин пользователя")


class AuthResponse(BaseModel):
    """ Модель ответа авторизации.

    """

    jwt_token: JwtPayload = Field(..., description="JWT токен1")



router = APIRouter()


@router.post("/login", response_model=AuthResponse, name="auth:login")
async def login(request: AuthRequest) -> AuthResponse:
    """ Авторизация пользователя.

    """

    jwt_token = jwt.encode({
        'iss': 'api',
        'sub': request.login,
        'aud': 'api',
        'exp': datetime.utcnow() + timedelta(minutes=60),
        'iat': datetime.utcnow(),

        "orgs": [
            {
                "id": 1,
                "name": "ПрофТестиум",
                "role": "superuser",
                "url": "https://профтестиум.рф/admin"
            },
            {
                "id": 2,
                "name": 'ЗАО "РЖД"',
                "role": "admin",
                "url": "https://ржд.профтестиум.рф"
            },
            {
                "id": 3,
                "name": "ООО 'Рога и копыта'",
                "role": "manager",
                "url": "https://рогаикопыта.профтестиум.рф"
            },
            {
                "id": 4,
                "name": "Школа 79",
                "role": "user",
                "url": "https://школа79.профтестиум.рф"
            }
        ],
        "name": "Иванов Иван Иванович",
        "login": request.login,

    }, 'secret', algorithm='HS256')



    return AuthResponse(jwt_token=jwt_token)
