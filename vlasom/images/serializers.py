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


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = ['name']


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
    is_liked = serializers.SerializerMethodField()
    category = CategorySerializer()

    class Meta:
        model = models.Image
        fields = ['id', 'user', 'image', 'location', 'category', 'description', 'comments', 'like_count', 'comment_count', 'tags', 'natural_time', 'is_liked']

    def get_is_liked(self, obj):
        if 'request' in self.context:
            request = self.context['request']
            try:
                models.Like.objects.get(user__id = request.user.id, image__id = obj.id)
                return True
            except models.Like.DoesNotExist:
                return False
        return False

class InputImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Image
        fields = ['image', 'location', 'category', 'description', 'tags']