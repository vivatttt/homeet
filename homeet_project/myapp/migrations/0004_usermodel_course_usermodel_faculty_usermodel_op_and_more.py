# Generated by Django 4.2.7 on 2023-11-05 12:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_usermodel_bday_usermodel_bio_usermodel_gender_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='usermodel',
            name='course',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='usermodel',
            name='faculty',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='usermodel',
            name='op',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='usermodel',
            name='step',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='usermodel',
            name='work',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
