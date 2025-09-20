from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.models import User
import supabase

class SupabaseBackend(BaseBackend):
    def authenticate(self, request, token=None):
        try:
            # Use Supabase JS library to verify token
            client = supabase.create_client(
                "YOUR_SUPABASE_URL",
                "YOUR_SUPABASE_ANON_KEY"
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