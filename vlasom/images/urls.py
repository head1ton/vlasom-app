from django.urls import path
from . import views

app_name = 'images'

urlpatterns = [
    path('', views.Images.as_view(), name = 'feed'),
    path('<int:image_id>/', views.ImageDetail.as_view(), name = 'image_detail'),
    path('<int:image_id>/like/', views.LikeImage.as_view(), name = 'like_image'),
    path('<int:image_id>/unlike/', views.UnLikeImage.as_view(), name = 'unlike_image'),
    path('<int:image_id>/comments/', views.CommentOnImage.as_view(), name = 'comment_image'),
    path('comments/<int:comment_id>/', views.Comment.as_view(), name = 'comment'),
    path('search/', views.Search.as_view(), name = 'tag_search'),
    path('<int:image_id>/comments/<int:comment_id>/', views.ModerateComment.as_view(), name = 'moderate_comment'),
]
