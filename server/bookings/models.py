from django.db import models
from rooms.models import Rooms

# Create your models here.

class Status(models.TextChoices):
    PENDING = "P", "Pending"
    APPROVED = "A", "Approved"
    CANCELLED = "C", "Cancelled"

class Bookings(models.Model):

    room_id = models.ForeignKey(Rooms, on_delete=models.CASCADE)
    visitor_name = models.CharField(max_length=32)
    visitor_email = models.CharField(max_length=64)
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    cancel_reason = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=1, choices=Status.choices, default=Status.PENDING)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.room_id.name} - {self.visitor_name}"
