from django.db import models
from django.contrib.auth import get_user_model
from django.utils.encoding import python_2_unicode_compatible
from vlasom.common.utils import type_choices
from vlasom.common.models import TimeStampedModel
from vlasom.images.models import Image, Category

User = get_user_model()

class Notification(TimeStampedModel):
    from_user = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'from_user')
    to_user = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'to_user')
    notification_type = models.CharField(max_length = 20, choices = type_choices)
    image = models.ForeignKey(Image, on_delete = models.CASCADE, blank = True, null = True)
    comment = models.TextField(null = True, blank = True)
    category = models.ForeignKey(Category, on_delete = models.CASCADE, blank = True, null = True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return '{}->{}: {}'.format(self.from_user, self.to_user, self.notification_type)