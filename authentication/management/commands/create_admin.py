from django.core.management.base import BaseCommand
import requests
from django.conf import settings

class Command(BaseCommand):
    help = 'Create admin user in Supabase'

    def handle(self, *args, **options):
        url = f"{settings.SUPABASE_URL}/auth/v1/admin/users"
        headers = {
            'apikey': settings.SUPABASE_SERVICE_KEY,
            'Authorization': f'Bearer {settings.SUPABASE_SERVICE_KEY}',
            'Content-Type': 'application/json'
        }
        
        data = {
            'email': 'olajideweb@gmail.com',
            'password': 'Jedu1122',
            'email_confirm': True,
            'user_metadata': {'role': 'admin'}
        }
        
        response = requests.post(url, json=data, headers=headers)
        
        if response.status_code == 200:
            self.stdout.write(self.style.SUCCESS('Admin user created successfully!'))
        else:
            self.stdout.write(self.style.ERROR(f'Error: {response.json()}'))