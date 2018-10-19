from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from django.core.validators import validate_email
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
from . import models, serializers
from vlasom.notifications.views import create_notification

User = get_user_model()


class ExploreUsers(APIView):
    def get(self, request, format = None):
        last_five = User.objects.all().order_by('-date_joined')[:5] #원래는 머신러닝

        serializer = serializers.ListUserSerializer(last_five, many = True, context = {"request": request})

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
    def get_user(self, username):
        try:
            found_user = User.objects.get(username = username)
            return found_user
        except User.DoesNotExist:
            return None

    def get(self, request, username, format = None):
        found_user = self.get_user(username)

        if found_user is None:
            return Response(status = status.HTTP_404_NOT_FOUND)

        serializer = serializers.UserProfileSerializer(found_user)

        return Response(data = serializer.data, status = status.HTTP_200_OK)
    
    def put(self, request, username, format = None):
        user = request.user
        found_user = self.get_user(username)

        if found_user is None:
            return Response(status = status.HTTP_404_NOT_FOUND)
        elif found_user.username != user.username:
            return Response(status = status.HTTP_400_BAD_REQUEST)
        else:
            serializer = serializers.UserProfileSerializer(found_user, data = request.data, partial = True)
            if serializer.is_valid():
                serializer.save()
            
                return Response(data = serializer.data, status = status.HTTP_200_OK)
            else:
                return Response(data = serializer.errors, status = status.HTTP_400_BAD_REQUEST)


class UserFollower(APIView):
    def get(self, request, username, format = None):
        try:
            found_user = User.objects.get(username = username)
        except User.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)
        
        user_follower = found_user.follower.all()
        
        serializer = serializers.ListUserSerializer(user_follower, many = True, context = {"request": request})

        return Response(data = serializer.data, status = status.HTTP_200_OK)


class UserFollowing(APIView):
    def get(self, request, username, format = None):
        try:
            found_user = User.objects.get(username = username)
        except User.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)
        
        user_following = found_user.following.all()
        
        serializer = serializers.ListUserSerializer(user_following, many = True, context = {"request": request})

        return Response(data = serializer.data, status = status.HTTP_200_OK)


class Search(APIView):
    def get(self, request, format = None):
        username = request.query_params.get('username', None)

        if username is not None:
            users = User.objects.filter(username__icontains = username)

            serializer = serializers.ListUserSerializer(users, many = True, context = {"request": request})

            return Response(data = serializer.data, status = status.HTTP_200_OK)
        else:
            return Response(status = status.HTTP_400_BAD_REQUEST)


class ChangePassword(APIView):
    def put(self, request, username, format = None):
        user = request.user

        if user.username == username:
            current_password = request.data.get('current_password', None)

            if current_password is not None:
                password_match = user.check_password(current_password)

                if password_match:
                    new_password = request.data.get('new_password', None)
                    if new_password is not None:
                        user.set_password(new_password)
                        user.save()
                        return Response(status = status.HTTP_200_OK)
                    else:
                        return Response(status = status.HTTP_400_BAD_REQUEST)
                else:
                    return Response(status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)
            else:
                return Response(status = status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status = status.HTTP_400_BAD_REQUEST)


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter


class MyProfile(APIView):
    def get(self, request, format = None):
        user = request.user

        serializer = serializers.MyProfileSerializer(user, context={'request': request})

        return Response(data = serializer.data, status = status.HTTP_200_OK)


class CheckNickname(APIView):
    def post(self, request, format = None):
        nickname = request.data.get('nickname', None)
        if nickname:
            try:
                User.objects.get(nickname = nickname)
                return Response(status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)
            except User.DoesNotExist:
                return Response(status = status.HTTP_202_ACCEPTED)
        else:
            return Response(status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)


class CheckEmail(APIView):
    def post(self, request, format = None):
        email = request.data.get('email', None)
        if email:
            try:
                validate_email(email)
                try:
                    User.objects.get(email = email)
                    return Response(status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)
                except User.DoesNotExist:
                    return Response(status = status.HTTP_202_ACCEPTED)
            except:
                return Response(status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)
        else:
            return Response(status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)