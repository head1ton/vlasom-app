from django.urls import path
from . import views

app_name = 'images'

urlpatterns = [
    path('all/', views.ListAllImages.as_view(), name = 'all_images'),
    path('comments/', views.ListAllComments.as_view(), name = 'all_comments'),
    path('likes/', views.ListAllLikes.as_view(), name = 'all_likes'),
]
