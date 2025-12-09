from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # I think this is the way to setup email auth instead of username ????
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = [
        "username"
    ]
