""" Работает как Rest API для фронтенда. 


    Методы:
    - auth_login - авторизация пользователя
    - auth_logout - выход пользователя
    - auth_register - регистрация пользователя

    - get_user - получение данных пользователя
    - update_user - обновление данных пользователя

    - create_organization - создание компании
    - get_organizations - получение списка компаний
    - get_organization - получение данных компании
    - update_organization - обновление данных компании


"""

import json
import random

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.shortcuts import redirect

from .models import Organization, Profile, User


def auth_login(request):
    """ Авторизация пользователя. """

    if request.user.is_authenticated:
        user = request.user

        return JsonResponse({'success': True, 'user': {'id': user.id,
                                                              'login': user.email,
                                                              'first_name': user.first_name,
                                                              'last_name': user.last_name,
                                                              'second_name': user.second_name,
                                                              'avatar': user.avatar.url if user.avatar else None,
                }})


    if request.method == 'POST':

        data = json.loads(request.body.decode('utf-8'))

        user_login = data.get('login')
        password = data.get('password')

        print(user_login, password)

        user = authenticate(request, username=user_login, password=password)

        print(user)


        if user is not None:

            login(request, user)
            return JsonResponse({'success': True, 'user': {'id': user.id, 
                                                           'login': user.email, 
                                                           'first_name': user.first_name, 
                                                           'last_name': user.last_name, 
                                                           'second_name': user.second_name,
                                                           'avatar': user.avatar.url if user.avatar else None,
            }})
        
        return JsonResponse({'success': False, 'message': 'Неверный логин или пароль'})
    
    return JsonResponse({'success': False, 'message': 'Неверный метод запроса'})



def auth_logout(request):
    """ Выход пользователя из системы. """

    logout(request)
    return JsonResponse({'success': True})


def auth_register(request):
    """ Регистрация пользователя. 
    

    Пример запроса:
    {
        "login": "test@mail.com",
        "password": "12345678",
        "first_name": "Иван",
        "last_name": "Иванов",
        "second_name": "Иванович",
        "birthdate": "2000-01-01",
        "phone": "88005553535"
    }


    """

    if request.method == 'POST':

        data = json.loads(request.body.decode('utf-8'))

        user_login = data.get('login')
        password = data.get('password')
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        second_name = data.get('second_name')
        birthdate = data.get('birthdate')
        phone = data.get('phone')

        if User.objects.filter(email=user_login).exists():
            return JsonResponse({'success': False, 'message': 'Пользователь с таким логином уже существует'})

        user = User.objects.create_user(user_login, password)
        user.first_name = first_name
        user.last_name = last_name
        user.second_name = second_name
        user.birthdate = birthdate
        user.phone = phone
        user.avatar = f'avatar_{random.randint(1, 5)}.png'
        user.save()

        login(request, user)

        return redirect('/api/auth/login')
        # return JsonResponse({'success': True, 'user': {'id': user.id, 
        #                                                'login': user.email, 
        #                                                'first_name': user.first_name, 
        #                                                'last_name': user.last_name, 
        #                                                'second_name': user.second_name,
        #                                                'avatar': user.avatar.url if user.avatar else None,
        # }})

    return JsonResponse({'success': False, 'message': 'Неверный метод запроса'})



@login_required
def get_user(request):
    """ Получение данных пользователя. """

    user = request.user

    return JsonResponse({'success': True, 'user': {'id': user.id, 
                                                   'login': user.email, 
                                                   'first_name': user.first_name, 
                                                   'last_name': user.last_name, 
                                                   'second_name': user.second_name,
                                                   'avatar': user.avatar.url if user.avatar else None,
    }})


@login_required
def update_user(request):
    """ Обновление данных пользователя. """

    if request.method == 'POST':

        data = json.loads(request.body.decode('utf-8'))

        user = request.user

        user.first_name = data.get('first_name')
        user.last_name = data.get('last_name')
        user.second_name = data.get('second_name')
        user.birthdate = data.get('birthdate')
        user.phone = data.get('phone')
        user.avatar = data.get('avatar')
        user.save()

        return JsonResponse({'success': True, 'user': {'id': user.id, 
                                                       'login': user.email, 
                                                       'first_name': user.first_name, 
                                                       'last_name': user.last_name, 
                                                       'second_name': user.second_name,
                                                       'avatar': user.avatar.url if user.avatar else None,
        }})

    return JsonResponse({'success': False, 'message': 'Неверный метод запроса'})


# РАБОТА С КОМПАНИЯМИ

@login_required
def create_organization(request):
    """ Создание компании. 
    
    Пример запроса:
    {
        "name": "ООО Рога и копыта",
        "inn": "1234567890",
        "address": "г. Москва, ул. Ленина, д. 1"
    }

    Кука авторизации обязательна.
    
    """

    if request.method == 'POST':

        data = json.loads(request.body.decode('utf-8'))

        name = data.get('name')
        inn = data.get('inn')
        address = data.get('address')

        if Organization.objects.filter(inn=inn).exists():
            return JsonResponse({'success': False, 'message': 'Компания с таким ИНН уже существует'})
        
        org = Organization(name=name, inn=inn, address=address)
        org.save()

        profile = Profile(user=request.user, organization=org, role='admin')
        profile.save()





        return JsonResponse({'success': True, 'organization': {'id': org.id, 
                                                                'name': org.name, 
                                                                'inn': org.inn, 
                                                                'address': org.address,
        }})
    
    return JsonResponse({'success': False, 'message': 'Неверный метод запроса'})


@login_required
def get_organizations(request):
    """ Получение списка компаний. """

    profils = Profile.objects.filter(user=request.user)

    print(profils)



    organizations = []

    for profile in profils:
        org = profile.organization

        organizations.append({'id': org.id, 
                     'name': org.name, 
                     'inn': org.inn, 
                     'address': org.address,
                     'logo': org.logo.url if org.logo else '',
                     'domain': org.domain_set.first().url if org.domain_set.first() else '',
                     'role': profile.role if profile.role else '',
        })



    print(organizations)




    return JsonResponse({'success': True, 'organizations': organizations})


@login_required
def get_organization(request, organization_id):
    """ Получение данных компании. """

    organization = Organization.objects.get(id=organization_id)

    return JsonResponse({'success': True, 'organization': {'id': organization.id, 
                                                            'name': organization.name, 
                                                            'inn': organization.inn, 
                                                            'address': organization.address,
                                                            'logo': organization.logo.url if organization.logo else '',
                                                            'domain': organization.domain_set.first().url if organization.domain_set.first() else '',
    }})


@login_required
def update_organization(request, organization_id):
    """ Обновление данных компании. """

    if request.method == 'POST':

        data = json.loads(request.body.decode('utf-8'))

        organization = Organization.objects.get(id=organization_id)

        organization.name = data.get('name')
        organization.inn = data.get('inn')
        organization.address = data.get('address')
        organization.save()

        return JsonResponse({'success': True, 'organization': {'id': organization.id, 
                                                                'name': organization.name, 
                                                                'inn': organization.inn, 
                                                                'address': organization.address,
        }})

    return JsonResponse({'success': False, 'message': 'Неверный метод запроса'})
