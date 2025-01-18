from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserAccountSerializer
from django.contrib.auth import get_user_model

UserAccount = get_user_model()

@api_view(['POST'])
def create_user(request):
    data = request.data
    password = data.get('password', None)
    
    if not password:
        return Response({"error": "Password is required"}, status=status.HTTP_400_BAD_REQUEST)
    
    serializedData = UserAccountSerializer(data=data)
    
    if serializedData.is_valid():
        user = serializedData.save()
        user.set_password(password)
        user.save()
        
        return Response("User created", status=status.HTTP_201_CREATED)
    else:
        return Response(serializedData.errors, status=status.HTTP_400_BAD_REQUEST)
