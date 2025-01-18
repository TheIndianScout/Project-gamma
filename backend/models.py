from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, name, username, role, password=None):
        if not email:
            raise ValueError("Please provide an email")
        if not name:
            raise ValueError("Please enter your name")
        if not username:
            raise ValueError("Please choose a username")
        if not role:
            raise ValueError("Please select your role")
        if password is None:
            raise ValueError("Please enter a password")
        
        email = self.normalize_email(email)
        
        user = self.model(email=email, name=name, username=username, role=role)
        user.set_password(password)
        user.save()

        return user

class UserAccount(AbstractBaseUser):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    age = models.PositiveIntegerField(blank=True, null=True)
    about = models.TextField(blank=True, null=True)
    profile_img = models.ImageField(upload_to='profile_images/',blank=True, null=True)
    role = models.CharField(max_length=50)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'username', 'role']

    def __str__(self):
        return self.username
