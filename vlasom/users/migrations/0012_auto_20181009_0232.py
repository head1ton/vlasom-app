# Generated by Django 2.0.8 on 2018-10-08 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_auto_20181009_0204'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='nickname',
            field=models.CharField(max_length=50, verbose_name='Nickname'),
        ),
    ]