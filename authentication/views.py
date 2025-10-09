from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
import requests
from django.conf import settings

@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    if not email or not password:
        return Response({'error': 'Email and password are required'}, status=400)
    
    # Authenticate with Supabase
    url = f"{settings.SUPABASE_URL}/auth/v1/token?grant_type=password"
    headers = {
        'apikey': settings.SUPABASE_ANON_KEY,
        'Content-Type': 'application/json'
    }
    
    data = {
        'email': email,
        'password': password
    }
    
    try:
        response = requests.post(url, json=data, headers=headers)
        
        if response.status_code == 200:
            auth_data = response.json()
            return Response({
                'access_token': auth_data['access_token'],
                'refresh_token': auth_data.get('refresh_token'),
                'user': {
                    'id': auth_data['user']['id'],
                    'email': auth_data['user']['email'],
                    'user_metadata': auth_data['user'].get('user_metadata', {})
                }
            })
        else:
            error_data = response.json()
            return Response({'error': error_data.get('error_description', 'Login failed')}, status=400)
            
    except requests.RequestException as e:
        return Response({'error': 'Authentication service unavailable'}, status=503)

@api_view(['POST'])
@permission_classes([AllowAny])
def create_user(request):
    email = request.data.get('email')
    password = request.data.get('password')
    role = request.data.get('role', 'hr')
    
    if not email or not password:
        return Response({'error': 'Email and password are required'}, status=400)
    
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
    
    try:
        response = requests.post(url, json=data, headers=headers)
        
        if response.status_code == 200:
            return Response({'message': 'User created successfully'})
        else:
            error_data = response.json()
            return Response({'error': error_data}, status=400)
            
    except requests.RequestException as e:
        return Response({'error': 'User creation service unavailable'}, status=503)
    

@api_view(['POST'])
@permission_classes([AllowAny])
def logout_user(request):
    """
    Logs the user out by revoking their refresh token from Supabase.
    """
    refresh_token = request.data.get('refresh_token')

    if not refresh_token:
        return Response({'error': 'Refresh token is required'}, status=400)

    url = f"{settings.SUPABASE_URL}/auth/v1/logout"
    headers = {
        'apikey': settings.SUPABASE_ANON_KEY,
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {refresh_token}',
    }

    try:
        response = requests.post(url, headers=headers)

        if response.status_code in [200, 204]:
            return Response({'message': 'User logged out successfully'})
        else:
            error_data = response.json()
            return Response(
                {'error': error_data.get('message', 'Logout failed')},
                status=response.status_code
            )
    except requests.RequestException:
        return Response({'error': 'Logout service unavailable'}, status=503)

