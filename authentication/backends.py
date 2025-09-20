from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.models import User
import supabase

class SupabaseBackend(BaseBackend):
    def authenticate(self, request, token=None):
        try:
            # Use Supabase JS library to verify token
            client = supabase.create_client(
                "https://bxcxcctsffkzszmbfypn.supabase.co",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4Y3hjY3RzZmZrenN6bWJmeXBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMjAzNTEsImV4cCI6MjA3Mzg5NjM1MX0.65MFbh8Tc3I_11MKfg_XpBE0EjL95dRuM4MG9xS0GgM"
            )
            user_data = client.auth.get_user(token)
            
            if user_data:
                user, created = User.objects.get_or_create(
                    username=user_data.user.email,
                    defaults={'email': user_data.user.email}
                )
                return user
        except:
            return None