from rest_framework import serializers
from django.contrib.auth import get_user_model
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)
from . import models

User = get_user_model()


class SmallImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Image
        fields = ['image']


class CountImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Image
        fields = ['id', 'image','comment_count', 'like_count']


class FeedUserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['username', 'profile_image']


class CommentSerializer(serializers.ModelSerializer):
    user = FeedUserSerializer(read_only = True)

    class Meta:
        model = models.Comment
        fields = ['id', 'message', 'user']


class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Like
        fields = '__all__'


class ImageSerializer(TaggitSerializer, serializers.ModelSerializer):
    comments = CommentSerializer(many = True)
    user = FeedUserSerializer()
    tags = TagListSerializerField()

    class Meta:
        model = models.Image
        fields = ['id', 'user', 'image', 'location', 'description', 'comments', 'like_count', 'comment_count', 'tags', 'natural_time']


class InputImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Image
        fields = ['image', 'location', 'description', 'tags']