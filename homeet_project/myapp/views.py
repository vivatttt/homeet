from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import UserModel

user = UserModel()


def page_personal(request): 

    if request.method == 'POST':
        PersonalInfDict = request.POST

        user.name      = PersonalInfDict['NameField']
        #user.gender    = request.POST.get('gender') # тк обе кнропки радио имеют одно имя, в словаре лежит просто ['on'] => нужно получить именно значение по имени gender
        user.gender    = PersonalInfDict['gender']
        user.bday      = PersonalInfDict['bday']
        user.telegram  = PersonalInfDict['TelegramField']
        user.phone     = PersonalInfDict['PhoneField']
        user.bio       = PersonalInfDict['TextField']

        user.save() # сохраняем объект класса в бд

        return redirect('education_information')
     
    return render(request, 'profile_personal.html')
    
def page_education(request):
    if request.method == 'POST':
        EducationInfDict = request.POST
        
        user.condition = EducationInfDict['condition']
        user.course = EducationInfDict['number']
        user.step = EducationInfDict['EducationStepField']
        user.faculty = EducationInfDict['FacultyField']
        user.op = EducationInfDict['OPField']
        user.work = EducationInfDict['WorkField']

        user.save() # сохраняем объект класса в бд

        return render(request, 'profile_education.html')

    return render(request, 'profile_education.html')
