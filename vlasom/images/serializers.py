from rest_framework import serializers
from django.contrib.auth import get_user_model
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)
from . import models

User = get_user_model()

class CategorySerializer(serializers.ModelSerializer):
    is_interested_category = serializers.SerializerMethodField()
    class Meta:
        model = models.Category
        fields = ['id', 'name', 'is_interested_category', 'interest_count_category']

    def get_is_interested_category(self, obj):
        if 'request' in self.context:
            request = self.context['request']
            try:
                models.Interest.objects.get(user__id = request.user.id, category__id = obj.id)
                return True
            except models.Interest.DoesNotExist:
                return False
        return False


class SmallImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Image
        fields = ['image', 'id']


class CountImageSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = models.Image
        fields = ['id', 'image', 'category', 'comment_count', 'like_count', 'interest_count_image']


class FeedUserSerializer(serializers.ModelSerializer):
    post_count = serializers.ReadOnlyField()
    follower_count = serializers.ReadOnlyField()
    following_count = serializers.ReadOnlyField()
    following = serializers.SerializerMethodField()
    is_self = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'nickname', 'username', 'profile_image', 'name', 'description', 'post_count', 'follower_count', 'following_count', 'following', 'is_self']
    
    def get_following(self, obj):
        if 'request' in self.context:
            request = self.context['request']
            if obj in request.user.following.all():
                return True
        return False

    def get_is_self(self, obj):
        if 'request' in self.context:
            request = self.context['request']
            if obj.id == request.user.id:
                return True
            else:
                return False
        else:
            return False


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
    is_interested_image = serializers.SerializerMethodField()
    category = CategorySerializer() 

    class Meta:
        model = models.Image
        fields = ['id', 'user', 'image', 'location', 'category', 'description', 'comments', 'like_count', 'comment_count', 'interest_count_image', 'tags', 'natural_time', 'is_liked', 'is_interested_image', 'is_vertical']

    def get_is_liked(self, obj):
        if 'request' in self.context:
            request = self.context['request']
            try:
                models.Like.objects.get(user__id = request.user.id, image__id = obj.id)
                return True
            except models.Like.DoesNotExist:
                return False
        return False

    def get_is_interested_image(self, obj):
        if 'request' in self.context:
            request = self.context['request']
            try:
                models.Interest.objects.get(user__id = request.user.id, image__id = obj.id)
                return True
            except models.Interest.DoesNotExist:
                return False
        return False

class InputImageSerializer(serializers.ModelSerializer):
    tags = TagListSerializerField()

    class Meta:
        model = models.Image
        fields = ['image', 'location', 'category', 'description', 'tags']


class InterestSerializer(serializers.ModelSerializer):
    user = FeedUserSerializer()
    image = ImageSerializer()
    category = CategorySerializer()
    class Meta:
        model = models.Interest
        fields = ['id', 'user', 'image', 'category']