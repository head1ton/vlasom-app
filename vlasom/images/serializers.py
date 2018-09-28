from rest_framework import serializers
from django.contrib.auth import get_user_model
from . import models

User = get_user_model()

class FeedUserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['username', 'profile_image']
        

class CommentSerializer(serializers.ModelSerializer):
    user = FeedUserSerializer()

    class Meta:
        model = models.Comment
        fields = ['id', 'message', 'user']


class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Like
        fields = '__all__'


class ImageSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many = True)
    user = FeedUserSerializer()

    class Meta:
        model = models.Image
        fields = ['id', 'user', 'image', 'location', 'description', 'comments', 'like_count']