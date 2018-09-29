from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model

from vlasom.users.forms import UserChangeForm, UserCreationForm

User = get_user_model()


@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):

    form = UserChangeForm
    add_form = UserCreationForm
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'name', 'nickname', 'birth_year', 'birth_month', 'birth_day', 'password1', 'password2', 'is_verified'),
        }),
    )
    fieldsets = [
        ('개인정보', {'fields': [
            'username',
            'name',
            'nickname',
            'description',
            'profile_image',
            'email',
            'join_channel',
            'gender',
            'birth_year',
            'birth_month',
            'birth_day',
            'is_verified',
        ]}),
        ('권한', {'fields': (
            'is_active',
            'is_staff',
            'is_superuser',
            'password'
        )}),
        ('팔로잉', {'fields': (
            'follower',
            'following'
        )})
    ]
    list_display = ['id', 'username', 'email', 'nickname', 'is_verified', 'is_staff']
    list_display_links = ['id', 'username']
    search_fields = ['username', 'email', 'nickname']
    ordering = ['-id']
    list_filter = ['is_verified', 'is_active']
    