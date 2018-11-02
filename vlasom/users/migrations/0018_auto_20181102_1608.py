# Generated by Django 2.0.8 on 2018-11-02 07:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0017_auto_20181022_1745'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='birth_day',
            field=models.CharField(choices=[('1', '1일'), ('2', '2일'), ('3', '3일'), ('4', '4일'), ('5', '5일'), ('6', '6일'), ('7', '7일'), ('8', '8일'), ('9', '9일'), ('10', '10일'), ('11', '11일'), ('12', '12일'), ('13', '13일'), ('14', '14일'), ('15', '15일'), ('16', '16일'), ('17', '17일'), ('18', '18일'), ('19', '19일'), ('20', '20일'), ('21', '21일'), ('22', '22일'), ('23', '23일'), ('24', '24일'), ('25', '25일'), ('26', '26일'), ('27', '27일'), ('28', '28일'), ('29', '29일'), ('30', '30일'), ('31', '31일')], default='02', max_length=10, verbose_name='Birth Day'),
        ),
        migrations.AlterField(
            model_name='user',
            name='birth_month',
            field=models.CharField(choices=[('1', '1월'), ('2', '2월'), ('3', '3월'), ('4', '4월'), ('5', '5월'), ('6', '6월'), ('7', '7월'), ('8', '8월'), ('9', '9월'), ('10', '10월'), ('11', '11월'), ('12', '12월')], default='11', max_length=10, verbose_name='Birth Month'),
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Name of User'),
        ),
    ]
