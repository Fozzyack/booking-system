from rest_framework import generics

from .models import Bookings
from .serializers import BookingSerializer

# Create your views here.

class BookingList(generics.ListCreateAPIView):
    queryset = Bookings
    serializer_class = BookingSerializer

class BookingDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bookings
    serializer_class = BookingSerializer
