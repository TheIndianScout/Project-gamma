from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self,email,username,user_type,password=None):
        if not email:
            raise ValueError("Please provide an email")
        if not username:
            raise ValueError("Please provide a username")
        if not user_type:
            raise ValueError("Please provide a user type")
        if not password:
            raise ValueError("Please provide a password")
        
        email = self.normalize_email(email)

        user = self.model(email=email,username=username,user_type=user_type)
        user.set_password(password)
        user.save()
        return user

class User(AbstractBaseUser):
    username = models.CharField(max_length=50,unique=True)
    email = models.EmailField(max_length=255,unique=True)
    user_type = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','password','user_type','created_at']
    def __str__(self):
        return self.username
