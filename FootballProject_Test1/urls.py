from django.urls import path,include
from rest_framework_simplejwt import views as jwtviews

urlpatterns = [
    path('backend/',include('backend.urls')),
    #JWT Auth
    path('login/token/',jwtviews.TokenObtainPairView.as_view()),
    path('login/token/refresh/',jwtviews.TokenRefreshView.as_view())
]