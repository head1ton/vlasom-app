from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from . import models, serializers

User = get_user_model()


class ExploreUsers(APIView):
    def get(self, request, format = None):
        last_five = User.objects.all().order_by('-date_joined')[:5] #원래는 머신러닝

        serializer = serializers.ExploreUserSerializer(last_five, many = True)

        return Response(data = serializer.data, status = status.HTTP_200_OK)