from django.core.management.base import BaseCommand
import requests
from django.conf import settings
import os

class Command(BaseCommand):
    help = 'Create admin user in Supabase'

    def handle(self, *args, **options):
        url = f"{settings.SUPABASE_URL}/auth/v1/admin/users"
        headers = {
            'apikey': settings.SUPABASE_SERVICE_KEY,
            'Authorization': f'Bearer {settings.SUPABASE_SERVICE_KEY}',
            'Content-Type': 'application/json'
        }
        
        admin_email = os.environ.get('SUPABASE_ADMIN_EMAIL')
        admin_password = os.environ.get('SUPABASE_ADMIN_PASSWORD')
        admin_role = os.environ.get('SUPABASE_ADMIN_ROLE', 'admin')
        
        if not admin_email or not admin_password:
            self.stdout.write(self.style.ERROR('Error: SUPABASE_ADMIN_EMAIL and SUPABASE_ADMIN_PASSWORD must be set in environment variables'))
            return
        
        data = {
            'email': admin_email,
            'password': admin_password,
            'email_confirm': True,
            'user_metadata': {'role': admin_role}
        }
        
        response = requests.post(url, json=data, headers=headers)
        
        if response.status_code == 200:
            self.stdout.write(self.style.SUCCESS('Admin user created successfully!'))
        else:
            self.stdout.write(self.style.ERROR(f'Error: {response.json()}'))