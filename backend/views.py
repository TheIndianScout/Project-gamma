from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password
from .serializers import UserSerializer

@api_view(['POST'])
def register_user(request):
    data = request.data
    password = data.get('password')
    if not password:
        return Response({"error":"password is required"},status=status.HTTP_400_BAD_REQUEST)

    serializedData = UserSerializer(data=data)
    if serializedData.is_valid():
        user = serializedData.save()
        user.set_password(password)
        user.save()

        return Response({"success":"user created"},status=status.HTTP_201_CREATED)
    else:
        return Response(serializedData.errors,status=status.HTTP_400_BAD_REQUEST)