from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_auth.registration.serializers import RegisterSerializer
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from . import models
from vlasom.images import serializers as images_serializers

User = get_user_model()


class UserProfileSerializer(serializers.ModelSerializer):
    images = images_serializers.CountImageSerializer(many = True, read_only = True)
    post_count = serializers.ReadOnlyField()
    follower_count = serializers.ReadOnlyField()
    following_count = serializers.ReadOnlyField()

    class Meta:
        model = User
        fields = ['id', 'username', 'name', 'nickname', 'email', 'profile_image', 'description', 'post_count', 'follower_count', 'following_count', 'images', 'birth_year', 'birth_month', 'birth_day']


class ListUserSerializer(serializers.ModelSerializer):
    following = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = ['id', 'profile_image', 'username', 'nickname', 'name', 'following']
    
    def get_following(self, obj):
        if 'request' in self.context:
            request = self.context['request']
            if obj in request.user.following.all():
                return True
        return False


class SignUpSerializer(RegisterSerializer):
    
    name = serializers.CharField(required=True, write_only=True)
    nickname = serializers.CharField(required=True, write_only=True)
    birthYear = serializers.CharField(required=True, write_only=True)
    birthMonth = serializers.CharField(required=True, write_only=True)
    birthDay = serializers.CharField(required=True, write_only=True)

    def get_cleaned_data(self):
        return {
            'name': self.validated_data.get('name', ''),
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'nickname': self.validated_data.get('nickname', ''),
            'birthYear': self.validated_data.get('birthYear', ''),
            'birthMonth': self.validated_data.get('birthMonth', ''),
            'birthDay': self.validated_data.get('birthDay', ''),
        }
    
    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        setup_user_email(request, user, [])
        user.name = self.cleaned_data['name']
        user.email = self.cleaned_data['email']
        user.nickname = self.cleaned_data['nickname']
        user.birth_year = self.cleaned_data['birthYear']
        user.birth_month = self.cleaned_data['birthMonth']
        user.birth_day = self.cleaned_data['birthDay']
        user.save()
        return user