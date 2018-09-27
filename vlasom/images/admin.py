from django.contrib import admin
from . import models


@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ['user', 'location', 'image', 'description', 'created_at', 'updated_at']
    list_display_links = ['user', 'location']
    search_fields = ['location', 'description']
    list_filter = ['location']


@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):
    list_display = ['user', 'image', 'created_at', 'updated_at']


@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ['user', 'message', 'image', 'created_at', 'updated_at']