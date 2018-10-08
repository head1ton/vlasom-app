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
        fields = ['username', 'name', 'nickname', 'profile_image', 'description', 'post_count', 'follower_count', 'following_count', 'images']


class ListUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'profile_image', 'username', 'nickname', 'name']


class SignUpSerializer(RegisterSerializer):
    
    name = serializers.CharField(required=True, write_only=True)
    nickname = serializers.CharField(required=True, write_only=True)
    birth_year = serializers.CharField(required=True, write_only=True)
    birth_month = serializers.CharField(required=True, write_only=True)
    birth_day = serializers.CharField(required=True, write_only=True)

    def get_cleaned_data(self):
        return {
            'name': self.validated_data.get('name', ''),
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'nickname': self.validated_data.get('nickname', ''),
            'birth_year': int(self.validated_data.get('birthYear', '')),
            'birth_month': int(self.validated_data.get('birthMonth', '')),
            'birth_day': int(self.validated_data.get('birthDay', '')),
        }
    
    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        setup_user_email(request, user, [])
        user.name = self.get_cleand_data['name']
        user.email = self.get_cleand_data['email']
        user.nickname = self.get_cleand_data['nickname']
        user.birth_year = self.get_cleand_data['birth_year']
        user.birth_month = self.get_cleand_data['birth_month']
        user.birth_day = self.get_cleand_data['birth_day']
        user.save()
        return user