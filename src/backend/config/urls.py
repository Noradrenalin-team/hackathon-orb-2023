import os

import api.urls
from config import views
from config.logs import *
from django.conf import settings
from django.conf.urls import include
from django.conf.urls.static import static
from django.contrib import admin
from django.http import HttpResponse
from django.urls import path, re_path


def error_test(request):
    1 / 0
    


handler400 = 'config.views.bad_request'
handler403 = 'config.views.permission_denied'
handler404 = 'config.views.page_not_found'
handler500 = 'config.views.server_error'
handlerCSRF = 'config.views.csrf_failure'

urlpatterns = [
    path('api', include(api.urls)),

    # path('error', error_test),
    # path('error404', views.page_not_found),
    # path('error500', views.server_error),
    # path('error400', views.bad_request),
    # path('error403', views.permission_denied),
    # path('errorCSRF', views.csrf_failure),
]

urlpatterns += [path('admin/', admin.site.urls)]

if os.environ.get('PROD', False) == False:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)