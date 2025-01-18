from django.urls import path,include

urlpatterns = [
    path('backend/',include('backend.urls'))
]