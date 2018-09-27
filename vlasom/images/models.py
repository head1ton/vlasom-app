from django.db import models
from django.contrib.auth import get_user_model

from vlasom.common.models import TimeStampedModel
from vlasom.common.utils import get_image_filename

User = get_user_model()

#user와 연결하기
class Image(TimeStampedModel):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    image = models.ImageField('Image', upload_to = get_image_filename)
    location = models.CharField('Locaction', max_length = 140)
    description = models.TextField('Description', blank = True, null = True)

#user와 연결하기
class Comment(TimeStampedModel):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    image = models.ForeignKey(Image, on_delete = models.CASCADE)
    message = models.TextField('Comment Message')


class Like(TimeStampedModel):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    image = models.ForeignKey(Image, on_delete = models.CASCADE)