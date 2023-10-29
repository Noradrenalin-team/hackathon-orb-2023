from django.shortcuts import render

# HTTP Error 404
def page_not_found(request, exception=None):
    context = {
        'error_title': '404 - Страница не найдена',
        'error_header': 'Ошибка',
        'error_code': '404',
        'errors': [
            'Страница не найдена',
        ],
    }

    return render(request, 'error.html', status=404, context=context)

# HTTP Error 500
def server_error(request):
    context = {
        'error_title': '500 - Ошибка сервера',
        'error_header': 'Ошибка',
        'error_code': '500',
        'errors': [
            'Ошибка сервера',
            'Попробуйте позже или обратитесь к администратору'
        ],
    }

    return render(request, 'error.html', status=500, context=context)

# HTTP Error 400
def bad_request(request, exception=None):
    context = {
        'error_title': '400 - Неверный запрос',
        'error_header': 'Ошибка',
        'error_code': '400',
        'errors': [
            'Неверный запрос',
            'Попробуйте позже или обратитесь к администратору'
        ],
    }

    return render(request, 'error.html', status=400, context=context)


# HTTP Error 403
def permission_denied(request, exception=None):
    context = {
        'error_title': '403 - Доступ запрещен',
        'error_header': 'Ошибка',
        'error_code': '403',
        'errors': [
            'Доступ запрещен',
            'Попробуйте позже или обратитесь к администратору'
        ],
    }

    return render(request, 'error.html', status=403, context=context)

# HTTP Error CSRF
def csrf_failure(request, reason=""):
    context = {
        'error_title': '403 - Доступ запрещен',
        'error_header': 'Ошибка CSRF',
        'error_code': '403',
        'errors': [
            'Доступ запрещен',
            'Возможно это произошло из-за того, что вы долго не были на сайте или воспользовались кнопкой назад',
            'Попробуйте ещё раз или обратитесь к администратору',
        ],
    }

    return render(request, 'error.html', status=403, context=context)
