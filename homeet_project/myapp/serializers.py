from rest_framework import serializers
from .models import UserModel

class UserModelSerializer(serializers.ModelSerializer):
    class Meta:              # метакласс, преобразовывающий данные в объект модели и сохраняющий его в бд
        model = UserModel
        fields = ['NameField', 'gender', 'bday', 'TelegramField', 'PhoneField', 'TextField']