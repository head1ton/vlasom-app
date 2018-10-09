from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from . import models, serializers
from vlasom.notifications.views import create_notification
from vlasom.users.serializers import ListUserSerializer

User = get_user_model()

class Images(APIView):
    def get(self, request, format = None):
        user = request.user

        following_users = user.following.all()

        image_list = []
        #feed 노출 방식 변경 고려하기
        for following_user in following_users:
            user_images = following_user.images.all()[:2] #related_name = 'images'이므로 가능

            for image in user_images:
                image_list.append(image)
        
        my_images = user.images.all()[:2]

        for image in my_images:
            image_list.append(image)

        sorted_list = sorted(image_list,key=lambda x: x.created_at, reverse=True)
        serializer = serializers.ImageSerializer(sorted_list, many = True, context = {'request': request})
        return Response(serializer.data)
    
    def post(self, request, format = None):
        user = request.user
        serializer = serializers.InputImageSerializer(data = request.data)

        if serializer.is_valid():
            serializer.save(user = user)
            return Response(data = serializer.data, status = status.HTTP_201_CREATED)
        else:
            return Response(data = serializer.errors, status = status.HTTP_400_BAD_REQUEST)


class LikeImage(APIView):
    def get(self, request, image_id, format = None):
        likes = models.Like.objects.filter(image__id = image_id)

        like_users_ids = likes.values('user_id')

        users = User.objects.filter(id__in = like_users_ids)
        serializer = ListUserSerializer(users, many = True)

        return Response(data = serializer.data, status = status.HTTP_200_OK)

    def post(self, request, image_id, format = None):

        try:
            found_image = models.Image.objects.get(id = image_id)
        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            pre_existing_like = models.Like.objects.get(user = request.user, image = found_image)
            return Response(status=status.HTTP_304_NOT_MODIFIED)
        except models.Like.DoesNotExist:
            new_like = models.Like.objects.create(user = request.user, image = found_image)
            new_like.save()

            create_notification(request.user, found_image.user, 'like', found_image)
            return Response(status=status.HTTP_201_CREATED)


class UnLikeImage(APIView):
    def delete(self, request, image_id, format = None):

        try:
            found_image = models.Image.objects.get(id = image_id)
        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            pre_existing_like = models.Like.objects.get(user = request.user, image = found_image)
            pre_existing_like.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except models.Like.DoesNotExist:

            return Response(status=status.HTTP_304_NOT_MODIFIED)


class CommentOnImage(APIView):
    def post(self, request, image_id, format = None):
        user = request.user

        try:
            found_image = models.Image.objects.get(id = image_id)
        except models.Image.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)
        serializer = serializers.CommentSerializer(data = request.data)

        if serializer.is_valid():
            serializer.save(user = user, image = found_image)

            create_notification(user,found_image.user, 'comment', found_image, request.data['message'])
            return Response(data = serializer.data, status = status.HTTP_201_CREATED)
        else:
            return Response(data = serializer.errors, status = status.HTTP_400_BAD_REQUEST)


class Comment(APIView):
    def delete(self, request, comment_id, format = None):
        try:
            comment = models.Comment.objects.get(id = comment_id, user = request.user)
            comment.delete()
            return Response(status = status.HTTP_204_NO_CONTENT)
        except models.Comment.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)


class Search(APIView):
    def get(self, request, format = None):
        tags = request.query_params.get('tags', None)

        if tags is not None:
            tags = tags.split(',')

            iamges = models.Image.objects.filter(tags__name__in = tags).distinct()

            serializer = serializers.CountImageSerializer(iamges, many = True)

            return Response(data = serializer.data, status = status.HTTP_200_OK)
        else:
            return Response(status = status.HTTP_400_BAD_REQUEST)


class ModerateComment(APIView):
    def delete(self, request, image_id, comment_id, format = None):
        user = request.user
        
        try:
            comment_to_delete = models.Comment.objects.get(id = comment_id, image__id = image_id, image__user = user)
            comment_to_delete.delete()
        except models.Comment.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)
        
        return Response(status = status.HTTP_204_NO_CONTENT)


class ImageDetail(APIView):
    def find_own_image(self, image_id, user):
        try:
            image = models.Image.objects.get(id = image_id, user = user)
            return image
        except models.Image.DoesNotExist:
            return None

    def get(slef, request, image_id, format = None):

        try:
            image = models.Image.objects.get(id = image_id)
        except models.Image.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)
        
        serializer = serializers.ImageSerializer(image, context = {'request': request})

        return Response(data = serializer.data, status = status.HTTP_200_OK)
    
    def put(self, request, image_id, format = None):
        user = request.user
        image = self.find_own_image(image_id, user)

        if image is None:
            return Response(status = status.HTTP_400_BAD_REQUEST)
        
        serializer = serializers.InputImageSerializer(image, data = request.data, partial = True)

        if serializer.is_valid():
            serializer.save(user = user)

            return Response(data = serializer.data, status = status.HTTP_204_NO_CONTENT)
        else:
            return Response(data = serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, image_id, format = None):
        user = request.user
        image = self.find_own_image(image_id, user)

        if image is None:
            return Response(status = status.HTTP_400_BAD_REQUEST)
        
        image.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)