from rest_framework import serializers
from django.contrib.auth import get_user_model

UserAccount = get_user_model()

class UserAccountSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = UserAccount
        fields = '__all__'
        read_only_fields = ['id']
        extra_kwargs = {
            'age': {'required': False},
            'about': {'required': False},
            'profile_img': {'required': False},
            'location' : {'required': False},
        }
