# Generated by Django 2.0.8 on 2018-11-03 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0019_auto_20181102_1639'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='birth_day',
            field=models.CharField(blank=True, choices=[('1', '1일'), ('2', '2일'), ('3', '3일'), ('4', '4일'), ('5', '5일'), ('6', '6일'), ('7', '7일'), ('8', '8일'), ('9', '9일'), ('10', '10일'), ('11', '11일'), ('12', '12일'), ('13', '13일'), ('14', '14일'), ('15', '15일'), ('16', '16일'), ('17', '17일'), ('18', '18일'), ('19', '19일'), ('20', '20일'), ('21', '21일'), ('22', '22일'), ('23', '23일'), ('24', '24일'), ('25', '25일'), ('26', '26일'), ('27', '27일'), ('28', '28일'), ('29', '29일'), ('30', '30일'), ('31', '31일')], default='03', max_length=10, null=True, verbose_name='Birth Day'),
        ),
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(blank=True, choices=[('male', '남성'), ('female', '여성')], max_length=6, null=True, verbose_name='Gender'),
        ),
    ]