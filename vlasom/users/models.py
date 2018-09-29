from django.contrib.auth.models import AbstractUser
from django.db.models import CharField
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django.utils.encoding import python_2_unicode_compatible
from django.utils import timezone
from django.db import models

from vlasom.common.utils import birth_year, birth_month, birth_day, join_channel, gender_choice, profile_image_upload_to

@python_2_unicode_compatible
class User(AbstractUser):

    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = CharField(_("Name of User"), max_length=255)
    nickname = models.CharField(_('Nickname'), max_length=50, unique = True)
    description = models.CharField(_('Short Description'), max_length = 200, blank = True, null = True)
    email = models.EmailField(_('email address'), unique=True)
    gender = models.CharField(_('Gender'), max_length=2, choices = gender_choice)
    birth_year = models.PositiveIntegerField(_('Birth Year'), choices = birth_year, default = int(timezone.now().strftime("%Y")))
    birth_month = models.PositiveIntegerField(_('Birth Month'), choices = birth_month, default = int(timezone.now().strftime("%m")))
    birth_day = models.PositiveIntegerField(_('Birth Day'), choices = birth_day, default = int(timezone.now().strftime("%d")))
    is_verified = models.BooleanField(_('Is Verified'), default=False, help_text='사용자의 이메일 인증 여부를 나타냅니다.')
    profile_image = models.ImageField(_('Profile Image'), upload_to = profile_image_upload_to, blank = True, null = True)
    join_channel = models.CharField(_('Join Channel'), max_length = 10,choices = join_channel, default = 'WEB')
    follower = models.ManyToManyField('self', blank = True, null = True)
    following = models.ManyToManyField('self', blank = True, null = True)

    def __str__(self):
        return self.username

    @property
    def post_count(self):
        return self.images.all().count()
    
    @property
    def follower_count(self):
        return self.follower.all().count()

    @property
    def following_count(self):
        return self.following.all().count()
