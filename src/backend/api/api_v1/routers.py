""" Модуль роутеров """

from fastapi import APIRouter

from .endpoints import auth

# from core.domain.services.user_service import UserService

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["auth"])

