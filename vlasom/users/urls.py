from django.urls import path

from . import views

app_name = "users"
urlpatterns = [
    path("explore/", views.ExploreUsers.as_view(), name="explore_users"),
    path('<int:user_id>/follow/', views.FollowUser.as_view(), name = 'follow_user'),
    path('<int:user_id>/unfollow/', views.UnFollowUser.as_view(), name = 'unfollow_user'),
    path('<str:username>/follower/', views.UserFollower.as_view(), name = 'user_follower'),
    path('<str:username>/following/', views.UserFollowing.as_view(), name = 'user_following'),
    path('search/', views.Search.as_view(), name = 'user_search'),
    path('<str:username>/', views.UserProfile.as_view(), name = 'user_profile'),
    path('<str:username>/password/', views.ChangePassword.as_view(), name = 'change_password'),
    path('login/facebook/', views.FacebookLogin.as_view(), name = 'fb_login'),
    path('my/profile/', views.MyProfile.as_view(), name = 'my_profile'),
    path('check/nickname/', views.CheckNickname.as_view(), name = 'check_nickname'),
    path('check/email/', views.CheckEmail.as_view(), name = 'check_email'),
]
