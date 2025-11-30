from datetime import datetime
from django.shortcuts import render
from rest_framework import  viewsets, permissions

from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import status

from .models import TagItem
from .models import Rooms
from .serializer import RoomSerializer, TagItemSerializer

# Create your views here.

class RoomViewSet(viewsets.ModelViewSet):
    queryset = Rooms.objects.all()
    serializer_class = RoomSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    @action(detail=False, methods=["get"], url_path="free-on")
    def get_rooms_with_date(self, request):
        query_params = request.query_params

        date_str = query_params.get("date")
        if date_str == "" or date_str == None:
            return Response({"error": "Must provide a date param"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            date_obj = datetime.fromisoformat(date_str)
        except ValueError:
            return Response({"error": "Must provide a valid date"}, status=status.HTTP_400_BAD_REQUEST)

        return Response({"Message": "To be continued", "Date": date_obj}, status=status.HTTP_200_OK)


class TagViewSet(viewsets.ModelViewSet):
    queryset = TagItem.objects.all()
    serializer_class = TagItemSerializer

