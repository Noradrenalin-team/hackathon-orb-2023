import os

from config import views

from .credentials import *

prod = os.environ.get('PROD', False)

if prod:
    ALLOWED_HOSTS = ['*']
    DEBUG = os.environ.get('DEBUG', False)
    if DEBUG == '1':
        DEBUG_PROPAGATE_EXCEPTIONS = True
        DEBUG = False
    else:
        DEBUG = False



else:
    ALLOWED_HOSTS = ['*']
    DEBUG = True

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

# if DEBUG:
if 1:
    DATABASES = {'default': {
                    'ENGINE': 'django.db.backends.sqlite3',
                    'NAME': BASE_DIR + '/' + 'db.sqlite3',
                }}



# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'pw+*a^45kss_f(im29%4ot2472m1h7zed4w+$03_trf4)0)!l!'


ROOT_URLCONF = 'config.urls'
WSGI_APPLICATION = 'config.wsgi.application'

CSRF_USE_SESSIONS = True

LOGIN_REDIRECT_URL = '/profiles'
LOGIN_URL = '/login'


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'ru-ru'
TIME_ZONE = 'Asia/Yekaterinburg'

USE_I18N = True
USE_L10N = True
USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles4deploy")

STATICFILES_DIRS = [ os.path.join(BASE_DIR, "static"), ]

SETTINGS_PATH = os.path.dirname(os.path.dirname(__file__))
TEMPLATE_DIRS = (os.path.join(SETTINGS_PATH, 'templates'),)

# Media files TODO
MEDIA_URL = "/media/"
# MEDIA_ROOT = BASE_DIR + '/media/'

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'config',
    'api',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            'config/templates'
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {   'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',},
    {   'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',},
    {   'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',},
    {   'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',},
]

# Макросы



def csrf_failure(request, reason=""):
    views.csrf_failure(request, reason=reason)



# Кастомная модель пользователя
AUTH_USER_MODEL = "api.User"
# APPEND_SLASH=False


SESSION_COOKIE_DOMAIN=".xn--e1agmfegjgclf.xn--p1ai"
