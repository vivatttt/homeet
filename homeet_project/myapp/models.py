from django.db import models

class UserModel(models.Model):
    NameField = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    bday = models.CharField(max_length=100) 
    TelegramField = models.CharField(max_length=100)
    PhoneField = models.CharField(max_length=100)
    TextField = models.CharField(max_length=1000)
    
    # condition = models.CharField(max_length=1000, blank=True, null=True) # тк у меня все равно нет страницы сотрудника, это необязательное поле (подразумевается, что ты учишься)
    # course = models.CharField(max_length=100)
    # step = models.CharField(max_length=100)
    # faculty = models.CharField(max_length=100)
    # op = models.CharField(max_length=200)
    # work = models.CharField(max_length=200)


