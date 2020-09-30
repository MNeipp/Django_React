from rest_framework import routers
from .api import UserViewSet
from . import views
from django.urls import path

router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'users')

urlpatterns = [
    path('', views.index)
]

urlpatterns += router.urls