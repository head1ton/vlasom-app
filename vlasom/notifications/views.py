from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers

class Notification(APIView):
    def get(self, request, format = None):
        user = request.user

        notifications = models.Notification.objects.filter(to_user = user).order_by('-created_at')

        serializer = serializers.NotificationSerializer(notifications, many = True)

        return Response(data = serializer.data, status = status.HTTP_200_OK)

def create_notification(from_user, to_user, notification_type, image = None, comment = None, category = None):
    notification = models.Notification.objects.create(from_user = from_user, to_user = to_user, notification_type = notification_type, image = image, comment = comment, category = category)
    notification.save()


class UpdateNotification(APIView):
    def put(self, request, format = None):
        user = request.user

        notifications = models.Notification.objects.filter(to_user = user)

        notifications.update(is_viewed = True)

        return Response(status = status.HTTP_200_OK)