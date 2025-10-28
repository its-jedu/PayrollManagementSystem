from .base import *
import os

DEBUG = True
ALLOWED_HOSTS = ['127.0.0.1', 'localhost']

# Database (SQLite for local dev)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Static files
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

# Media files (if any)
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
