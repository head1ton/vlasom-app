from django.db import models
from django.contrib.auth import get_user_model
from django.utils.encoding import python_2_unicode_compatible
from django.contrib.humanize.templatetags.humanize import naturaltime
from taggit.managers import TaggableManager

from vlasom.common.models import TimeStampedModel
from vlasom.common.utils import get_image_filename

User = get_user_model()

@python_2_unicode_compatible
class Category(models.Model):
    name = models.CharField('Category Name', max_length=100)

    def __str__(self):
        return self.name


@python_2_unicode_compatible
class Image(TimeStampedModel):
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'images')
    image = models.ImageField('Image', upload_to = 'images/')
    location = models.CharField('Locaction', max_length = 140)
    category = models.ForeignKey(Category, on_delete = models.CASCADE)
    description = models.TextField('Description', blank = True, null = True)
    tags = TaggableManager()

    @property
    def like_count(self):
        return self.likes.all().count()

    @property
    def comment_count(self):
        return self.comments.all().count()

    @property
    def natural_time(self):
        return naturaltime(self.created_at)

    def __str__(self):
        return '{}-{}'.format(self.location, self.description)
    
    class Meta:
        ordering = ['-created_at']


#user와 연결하기
@python_2_unicode_compatible
class Comment(TimeStampedModel):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    image = models.ForeignKey(Image, on_delete = models.CASCADE, related_name = 'comments')
    message = models.TextField('Comment Message')

    def __str__(self):
        return self.message


@python_2_unicode_compatible
class Like(TimeStampedModel):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    image = models.ForeignKey(Image, on_delete = models.CASCADE, related_name = 'likes')

    def __str__(self):
        return '{}-{}'.format(self.user.nickname, self.image.description)


@python_2_unicode_compatible
class Interest(TimeStampedModel):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    image = models.ForeignKey(Image, on_delete = models.CASCADE, related_name = 'interests', blank = True, null = True)
    category = models.ForeignKey(Category, on_delete = models.CASCADE, related_name = 'categorys', blank = True, null = True)

    def __str__(self):
        if self.image:
            return '{}-{}'.format(self.user.nickname, self.image.description)
        else:
            return '{}-{}'.format(self.user.nickname, self.category.name)