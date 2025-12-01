from rest_framework import serializers
from .models import RoomType, Rooms, TagItem


class TagItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TagItem
        fields = ['id', 'tag', 'room']


class RoomTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomType
        fields = ['id', 'type', 'room']


class RoomSerializer(serializers.ModelSerializer):
    tags = TagItemSerializer(many=True, required=False)
    room_type = RoomTypeSerializer(required=False)

    class Meta:
        model = Rooms
        fields = ['id', 'name', 'excerpt', 'description',
                  'image', 'capacity', 'good_for', 'created_at', 'updated_at', 'tags', 'room_type']

    def create(self, validated_data):
        tags_data = validated_data.pop('tags', [])
        room_type_data = validated_data.pop('room_type', None)
        room = Rooms.objects.create(**validated_data)

        for tag_data in tags_data:
            TagItem.objects.create(room=room, **tag_data)

        if room_type_data:
            RoomType.objects.create(room=room, **room_type_data)

        return room
