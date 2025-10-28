[33mcommit ec08af43f0cb3ba9ae4e0eb5ccfd3fc686dbd092[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mfeat/olajide[m[33m, [m[1;31morigin/feat/olajide[m[33m)[m
Author: its_jedu <olajideweb@gmail.com>
Date:   Tue Oct 28 01:44:40 2025 +0100

    Set STATIC_ROOT for production collectstatic

[1mdiff --git a/config/settings.py b/config/settings.py[m
[1mindex f62664f..1d16b8c 100644[m
[1m--- a/config/settings.py[m
[1m+++ b/config/settings.py[m
[36m@@ -150,6 +150,12 @@[m [mUSE_TZ = True[m
 [m
 STATIC_URL = 'static/'[m
 [m
[32m+[m[32m# Directory where collectstatic will copy static files[m
[32m+[m[32mSTATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')[m
[32m+[m
[32m+[m[32m# Optional: for Whitenoise[m
[32m+[m[32mSTATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'[m
[32m+[m
 # Default primary key field type[m
 # https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field[m
 [m
