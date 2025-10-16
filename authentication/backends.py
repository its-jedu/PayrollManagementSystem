from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.models import User
import supabase
import os

class SupabaseBackend(BaseBackend):
    def authenticate(self, request, token=None):
        try:
            supabase_url = os.environ.get('SUPABASE_URL')
            supabase_key = os.environ.get('SUPABASE_ANON_KEY')
            
            if not supabase_url or not supabase_key:
                return None
                
            client = supabase.create_client(supabase_url, supabase_key)
            user_data = client.auth.get_user(token)
            
            if user_data:
                user, created = User.objects.get_or_create(
                    username=user_data.user.email,
                    defaults={'email': user_data.user.email}
                )
                return user
        except:
            return None