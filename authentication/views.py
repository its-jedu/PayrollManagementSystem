from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
import requests
from django.conf import settings

@api_view(['POST'])
@permission_classes([AllowAny])
def create_user(request):
    email = request.data.get('email')
    password = request.data.get('password')
    role = request.data.get('role', 'hr')
    
    # Using Supabase Admin API to create user
    url = f"{settings.SUPABASE_URL}/auth/v1/admin/users"
    headers = {
        'Authorization': f'Bearer {settings.SUPABASE_SERVICE_KEY}',
        'Content-Type': 'application/json'
    }
    
    data = {
        'email': email,
        'password': password,
        'email_confirm': True,
        'user_metadata': {'role': role}
    }
    
    response = requests.post(url, json=data, headers=headers)
    
    if response.status_code == 200:
        return Response({'message': 'User created successfully'})
    else:
        return Response({'error': response.json()}, status=400)