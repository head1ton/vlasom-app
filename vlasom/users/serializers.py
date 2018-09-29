from rest_framework import serializers
from django.contrib.auth import get_user_model
from . import models
from vlasom.images import serializers as images_serializers

User = get_user_model()


class UserProfileSerializer(serializers.ModelSerializer):
    images = images_serializers.UserProfileImageSerializer(many = True)

    class Meta:
        model = User
        fields = ['username', 'name', 'nickname', 'profile_image', 'description', 'post_count', 'follower_count', 'following_count', 'images']


class ListUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'profile_image', 'username', 'nickname', 'name']

