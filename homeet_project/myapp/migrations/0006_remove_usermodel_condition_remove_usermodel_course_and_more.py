# Generated by Django 4.2.7 on 2023-11-12 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0005_usermodel_condition'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usermodel',
            name='condition',
        ),
        migrations.RemoveField(
            model_name='usermodel',
            name='course',
        ),
        migrations.RemoveField(
            model_name='usermodel',
            name='faculty',
        ),
        migrations.RemoveField(
            model_name='usermodel',
            name='op',
        ),
        migrations.RemoveField(
            model_name='usermodel',
            name='step',
        ),
        migrations.RemoveField(
            model_name='usermodel',
            name='work',
        ),
        migrations.AlterField(
            model_name='usermodel',
            name='bday',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='usermodel',
            name='bio',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='usermodel',
            name='gender',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='usermodel',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='usermodel',
            name='phone',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='usermodel',
            name='telegram',
            field=models.CharField(max_length=100),
        ),
    ]