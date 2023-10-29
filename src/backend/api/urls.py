from django.http import JsonResponse
from django.urls import include, path

from . import views

auth_urls = [
    path('', lambda request: JsonResponse({'success': False})),
    path('login', views.auth_login, name='login'),
    path('logout', views.auth_logout, name='logout'),
    path('register', views.auth_register, name='register'),
]

# - auth_login - авторизация пользователя
#     - auth_logout - выход пользователя
#     - auth_register - регистрация пользователя

#     - get_user - получение данных пользователя
#     - update_user - обновление данных пользователя

#     - create_organization - создание компании
#     - get_organizations - получение списка компаний
#     - get_organization - получение данных компании
#     - update_organization - обновление данных компании

users_urls = [
    path('', lambda request: JsonResponse({'success': False})),
    path('get', views.get_user, name='get_user'),
    path('update', views.update_user, name='update_user'),

]

organizations_urls = [
    path('', lambda request: JsonResponse({'success': False})),
    path('create', views.create_organization, name='create_organization'),
    path('get', views.get_organizations, name='get_organizations'),
    path('get/<int:organization_id>', views.get_organization, name='get_organization'),
    path('update', views.update_organization, name='update_organization'),

    
]

urlpatterns = [
    path('/', lambda request: JsonResponse({'success': 123})),
    path('/auth/', include(auth_urls)),
    path('/users/', include(users_urls)),
    path('/organizations/', include(organizations_urls)),

]