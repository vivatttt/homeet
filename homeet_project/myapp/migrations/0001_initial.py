# Generated by Django 4.2.7 on 2023-11-05 11:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('gender', models.CharField(max_length=100)),
                ('bday', models.CharField(max_length=100)),
                ('telegram', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=100)),
                ('bio', models.CharField(max_length=1000)),
                ('course', models.CharField(max_length=100)),
                ('step', models.CharField(max_length=100)),
                ('faculty', models.CharField(max_length=100)),
                ('op', models.CharField(max_length=200)),
                ('work', models.CharField(max_length=200)),
            ],
        ),
    ]
