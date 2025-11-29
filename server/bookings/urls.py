from django.urls import path
from . import views


urlpatterns = [
        path("bookings/", views.BookingList.as_view()),
        path("bookings/<int:pk>", views.BookingDetails.as_view()),
]
