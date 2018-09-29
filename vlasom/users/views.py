from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from . import models, serializers
from vlasom.notifications.views import create_notification

User = get_user_model()


class ExploreUsers(APIView):
    def get(self, request, format = None):
        last_five = User.objects.all().order_by('-date_joined')[:5] #원래는 머신러닝

        serializer = serializers.ListUserSerializer(last_five, many = True)

        return Response(data = serializer.data, status = status.HTTP_200_OK)


class FollowUser(APIView):
    def post(self, request, user_id, format = None):
        user = request.user

        try:
            user_to_follow = User.objects.get(id = user_id)
        except User.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)
        
        user.following.add(user_to_follow)
        user.save()

        create_notification(user, user_to_follow, 'follow')
        return Response(status = status.HTTP_200_OK)


class UnFollowUser(APIView):
    def post(self, request, user_id, format = None):
        user = request.user

        try:
            user_to_follow = User.objects.get(id = user_id)
        except User.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)
        
        user.following.remove(user_to_follow)
        user.save()
        return Response(status = status.HTTP_200_OK)


class UserProfile(APIView):
    def get(self, request, username, format = None):
        try:
            found_user = User.objects.get(username = username)
        except User.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)

        serializer = serializers.UserProfileSerializer(found_user)

        return Response(data = serializer.data, status = status.HTTP_200_OK)


class UserFollower(APIView):
    def get(self, request, username, format = None):
        try:
            found_user = User.objects.get(username = username)
        except User.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)
        
        user_follower = found_user.follower.all()
        
        serializer = serializers.ListUserSerializer(user_follower, many = True)

        return Response(data = serializer.data, status = status.HTTP_200_OK)


class UserFollowing(APIView):
    def get(self, request, username, format = None):
        try:
            found_user = User.objects.get(username = username)
        except User.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)
        
        user_following = found_user.following.all()
        
        serializer = serializers.ListUserSerializer(user_following, many = True)

        return Response(data = serializer.data, status = status.HTTP_200_OK)


class Search(APIView):
    def get(self, request, format = None):
        username = request.query_params.get('username', None)

        if username is not None:
            users = User.objects.filter(username__icontains = username)

            serializer = serializers.ListUserSerializer(users, many = True)

            return Response(data = serializer.data, status = status.HTTP_200_OK)
        else:
            return Response(status = status.HTTP_400_BAD_REQUEST)