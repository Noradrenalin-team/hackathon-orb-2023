"""Скрипт для отправки логов в канал в телеграмме."""
from . import settings
import requests

def send_log(message):
    """Отправка лога в канал в телеграмме."""
    if settings.TELEGRAM_LOGS:
        r = requests.post(f'https://api.telegram.org/bot{settings.TELEGRAM_TOKEN}/sendMessage', data={'chat_id': settings.TELEGRAM_CHAT_ID, 'text': message})
        print(r.text)

def log_new_user_reg(request, user):
    """Отправка лога о новом пользователе."""
    if settings.TELEGRAM_LOGS:
        try:
            message = 'Новый пользователь\n\n'
            message += 'Имя: ' + user.first_name + '\n'
            message += 'Фамилия: ' + user.last_name + '\n'
            message += 'Email: ' + user.email + '\n'

            #Ссылка на пользователя
            message += '\nСсылка: ' + 'eng.sch79.ru/admin/auth/user/' + str(user.id) + '/change/' + '\n'

            # Мета информация
            message += '\nМета информация:\n'
            message += 'Путь: ' + str(request.path) + '\n'
            message += 'Параметры: ' + str(request.GET) + '\n'
            message += 'Метод: ' + str(request.method) + '\n'
            message += 'IP: ' + str(request.META['REMOTE_ADDR']) + '\n'
            message += 'Хост: ' + str(request.META['HTTP_HOST']) + '\n'
            message += 'Пользовательский агент: ' + str(request.META['HTTP_USER_AGENT']) + '\n'


            send_log(message)
        except Exception as e:
            print(e)

def log_test_edit(request, test):
    """Отправка лога о изменении теста."""
    if settings.TELEGRAM_LOGS:
        try:
            message = 'Cохранение теста\n\n'
            message += 'Название: ' + test.name + '\n'
            # message += 'Количество вопросов: ' + str(test.questions.count()) + '\n'

            # Создатель теста
            message += '\nСоздатель теста:\n'
            message += 'Имя: ' + test.creator.first_name + '\n'
            message += 'Фамилия: ' + test.creator.last_name + '\n'
            message += 'Email: ' + test.creator.email + '\n'
            message += 'Username: ' + test.creator.username + '\n'


            #Ссылка на пользователя
            message += '\nСсылка: ' + 'eng.sch79.ru/admin/tests/test/' + str(test.id) + '/change/' + '\n'

            # Мета информация
            message += '\nМета информация:\n'
            message += 'Путь: ' + str(request.path) + '\n'
            message += 'Параметры: ' + str(request.GET) + '\n'
            message += 'Метод: ' + str(request.method) + '\n'
            message += 'IP: ' + str(request.META['REMOTE_ADDR']) + '\n'
            message += 'Хост: ' + str(request.META['HTTP_HOST']) + '\n'
            message += 'Пользовательский агент: ' + str(request.META['HTTP_USER_AGENT']) + '\n'

            send_log(message)
        except Exception as e:
            print(e)

def log_exercise_edit(request, exercise):
    """Отправка лога о изменении упражнения."""
    if settings.TELEGRAM_LOGS:
        try:
            message = 'Cохранение упражнения\n\n'
            message += 'Название: ' + exercise.name + '\n'

            # Создатель упражнения
            message += '\nСоздатель упражнения:\n'
            message += 'Имя: ' + exercise.creator.first_name + '\n'
            message += 'Фамилия: ' + exercise.creator.last_name + '\n'
            message += 'Email: ' + exercise.creator.email + '\n'
            message += 'Username: ' + exercise.creator.username + '\n'


            #Ссылка на пользователя
            message += '\nСсылка: ' + 'eng.sch79.ru/admin/exercises/exercise/' + str(exercise.id) + '/change/' + '\n'

            # Мета информация
            message += '\nМета информация:\n'
            message += 'Путь: ' + str(request.path) + '\n'
            message += 'Параметры: ' + str(request.GET) + '\n'
            message += 'Метод: ' + str(request.method) + '\n'
            message += 'IP: ' + str(request.META['REMOTE_ADDR']) + '\n'
            message += 'Хост: ' + str(request.META['HTTP_HOST']) + '\n'
            message += 'Пользовательский агент: ' + str(request.META['HTTP_USER_AGENT']) + '\n'

            send_log(message)
        except Exception as e:
            print(e)


def log_delete(request, object_):
    """Отправка лога о удалении объекта."""
    if settings.TELEGRAM_LOGS:
        try:
            message = 'Удаление объекта\n\n'
            message += 'Название: ' + str(object_) + '\n'

            #Пользователь
            message += '\nПользователь:\n'
            message += 'Имя: ' + request.user.first_name + '\n'
            message += 'Фамилия: ' + request.user.last_name + '\n'
            message += 'Email: ' + request.user.email + '\n'
            message += 'Username: ' + request.user.username + '\n'
        

            #Ссылка на объект
            message += '\nСсылка: ' + 'eng.sch79.ru/admin/' + str(object_._meta.app_label) + '/' + str(object_._meta.model_name) + '/' + str(object_.id) + '/change/' + '\n'

            # Мета информация
            message += '\nМета информация:\n'
            message += 'Путь: ' + str(request.path) + '\n'
            message += 'Параметры: ' + str(request.GET) + '\n'
            message += 'Метод: ' + str(request.method) + '\n'
            message += 'IP: ' + str(request.META['REMOTE_ADDR']) + '\n'
            message += 'Хост: ' + str(request.META['HTTP_HOST']) + '\n'
            message += 'Пользовательский агент: ' + str(request.META['HTTP_USER_AGENT']) + '\n'


            send_log(message)
        except Exception as e:
            print(e)

def log_new_class(request, class_):
    """Отправка лога о создании нового класса."""
    if settings.TELEGRAM_LOGS:
        try:
            message = 'Создание нового класса\n\n'
            message += 'Название: ' + class_.name + '\n'

            # Создатель класса
            message += '\nСоздатель класса:\n'
            message += 'Имя: ' + class_.teacher.first_name + '\n'
            message += 'Фамилия: ' + class_.teacher.last_name + '\n'
            message += 'Email: ' + class_.teacher.email + '\n'
            message += 'Username: ' + class_.teacher.username + '\n'


            #Ссылка на пользователя
            message += '\nСсылка: ' + 'eng.sch79.ru/admin/classes/class/' + str(class_.id) + '/change/' + '\n'

            # Мета информация
            message += '\nМета информация:\n'
            message += 'Путь: ' + str(request.path) + '\n'
            message += 'Параметры: ' + str(request.GET) + '\n'
            message += 'Метод: ' + str(request.method) + '\n'
            message += 'IP: ' + str(request.META['REMOTE_ADDR']) + '\n'
            message += 'Хост: ' + str(request.META['HTTP_HOST']) + '\n'
            message += 'Пользовательский агент: ' + str(request.META['HTTP_USER_AGENT']) + '\n'


            send_log(message)
        except Exception as e:
            print(e)

def log_passed_test(request, passed_test):
    """Отправка лога о прохождении теста."""
    if settings.TELEGRAM_LOGS:
        try:
            message = 'Прохождение теста\n\n'
            message += 'Название: ' + passed_test.test.name + '\n'

            # Пользователь
            message += '\nПользователь:\n'
            message += 'Имя: ' + request.user.first_name + '\n'
            message += 'Фамилия: ' + request.user.last_name + '\n'
            message += 'Email: ' + request.user.email + '\n'
            message += 'Username: ' + request.user.username + '\n'

            # Результат
            message += '\nРезультат:\n'
            message += 'Баллы: ' + str(passed_test.correct_answers) + ' из ' + str(passed_test.all_answers) + '\n'


            #Ссылка на тест
            message += '\nСсылка: ' + 'eng.sch79.ru/test/' + str(passed_test.id) + '\n'

            #ссылка на результат
            message += '\nСсылка на результат: ' + 'eng.sch79.ru/admin/tests/testresult/' + str(passed_test.id) + '/change/' + '\n'

            # Мета информация
            message += '\nМета информация:\n'
            message += 'Путь: ' + str(request.path) + '\n'
            message += 'Параметры: ' + str(request.GET) + '\n'
            message += 'Метод: ' + str(request.method) + '\n'
            message += 'IP: ' + str(request.META['REMOTE_ADDR']) + '\n'
            message += 'Хост: ' + str(request.META['HTTP_HOST']) + '\n'
            message += 'Пользовательский агент: ' + str(request.META['HTTP_USER_AGENT']) + '\n'


            send_log(message)
        except Exception as e:
            print(e)

def log_invite_accept(request, class_):
    """Отправка лога о принятии приглашения."""
    if settings.TELEGRAM_LOGS:
        try:
            message = 'Принятие приглашения\n\n'
            message += 'Название: ' + class_.name + '\n'

            # Пользователь
            message += '\nПользователь:\n'
            message += 'Имя: ' + request.user.first_name + '\n'
            message += 'Фамилия: ' + request.user.last_name + '\n'
            message += 'Email: ' + request.user.email + '\n'
            message += 'Username: ' + request.user.username + '\n'

            #Ссылка на класс
            message += '\nСсылка: ' + 'eng.sch79.ru/admin/lk/studentclass/' + str(class_.id) + '/change/' + '\n'

            #Ссылка на пользователя
            message += '\nСсылка на пользователя: ' + 'eng.sch79.ru/admin/auth/user/' + str(request.user.id) + '/change/' + '\n'

            # Мета информация
            message += '\nМета информация:\n'
            message += 'Путь: ' + str(request.path) + '\n'
            message += 'Параметры: ' + str(request.GET) + '\n'
            message += 'Метод: ' + str(request.method) + '\n'
            message += 'IP: ' + str(request.META['REMOTE_ADDR']) + '\n'
            message += 'Хост: ' + str(request.META['HTTP_HOST']) + '\n'
            message += 'Пользовательский агент: ' + str(request.META['HTTP_USER_AGENT']) + '\n'


            send_log(message)
        except Exception as e:
            print(e)