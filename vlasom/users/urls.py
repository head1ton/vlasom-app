from django.urls import path

from . import views

app_name = "users"
urlpatterns = [
    path("explore/", views.ExploreUsers.as_view(), name="explore_users"),
    path('<int:user_id>/follow/', views.FollowUser.as_view(), name = 'follow_user'),
    path('<int:user_id>/unfollow/', views.UnFollowUser.as_view(), name = 'unfollow_user'),
    path('<str:username>/', views.UserProfile.as_view(), name = 'user_profile'),
]
