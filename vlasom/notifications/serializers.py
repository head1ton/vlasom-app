from rest_framework import serializers
from django.contrib.auth import get_user_model
from . import models
from vlasom.users import serializers as user_serializers
from vlasom.images import serializers as image_serializers

User = get_user_model()

class NotificationSerializer(serializers.ModelSerializer):
    from_user = user_serializers.ListUserSerializer()
    image = image_serializers.SmallImageSerializer()

    class Meta:
        model = models.Notification
        fields = '__all__'