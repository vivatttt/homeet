# Generated by Django 4.2.7 on 2023-11-05 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0004_usermodel_course_usermodel_faculty_usermodel_op_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='usermodel',
            name='condition',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]
