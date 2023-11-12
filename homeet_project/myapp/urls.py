from django.urls import path
from . import views
# from .views import UserModelCreateView

urlpatterns = [

    # path('personal_information/', views.page_personal, name='personal_informaion'),
    # path('api/formdata/', UserModelCreateView.as_view(), name='usermodel-view'),
    path('education_information/', views.page_education, name='education_information'),
    path('', views.page_personal, name='start_page'), # потом тут будет действительно стартовая страница, но сейчас, чтобы не приходилось каждый раз вводить адрес  страницы заполнения профиля, мы делаем ее основной

]