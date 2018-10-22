from rest_framework import serializers
from django.contrib.auth import get_user_model
from . import models
from vlasom.users import serializers as user_serializers
from vlasom.images import serializers as image_serializers

User = get_user_model()

class NotificationSerializer(serializers.ModelSerializer):
    from_user = user_serializers.ListUserSerializer()
    image = image_serializers.SmallImageSerializer()
    to_user = user_serializers.ListUserSerializer()
    category = image_serializers.CategorySerializer()

    class Meta:
        model = models.Notification
        fields = ['category', 'comment', 'natural_time', 'from_user', 'id', 'image', 'is_viewed', 'notification_type', 'to_user', 'image']