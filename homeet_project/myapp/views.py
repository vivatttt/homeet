from django.contrib.sessions.models import Session
from django.shortcuts import render, redirect
from django.contrib import messages


from .serializers import UserModelSerializer

from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
def page_personal(request): 

    if request.method == 'POST':
        data = request.POST.copy()
        data.update({'csrfmiddlewaretoken': request.COOKIES['csrftoken']})
        
        serializer = UserModelSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return redirect('education_information')

    return render(request, 'profile_personal.html')

def page_education(request):
    
    return render(request, 'profile_education.html')

# def page_personal(request): 

#     if request.method == 'POST':

#         serializer = UserModelSerializer(data=request.POST)
        
#         if serializer.is_valid():
#             serializer.save()
#             # user = serializer.save()
#             # request.session['user_id'] = user.id
        
#         return redirect('education_information')
     
#     return render(request, 'profile_personal.html')
    

  

# class UserModelCreateView(APIView):
#     def post(self, request, *args, **kwargs):
#         serializer = UserModelSerialier(data=request.data)
#         if serializer.is_valid():
#             serializer.save() # сохранение в бд
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

# def page_personal(request): 

#     if request.method == 'POST':

#         serializer = UserModelSerializer(data=request.POST)
        
#         if serializer.is_valid():
#             serializer.save()
#             user = serializer.save()
#             request.session['user_id'] = user.id
        
#         return redirect('education_information')
     
#     return render(request, 'profile_personal.html')
    
# def page_education(request):
#     if request.method == 'POST':
#         user_id = request.session.get('user_id')
#         if not user_id:
#             return redirect('start_page')  # перенаправляем на страницу ввода личной информации

#         user = UserModel.objects.get(id=user_id)
#         if request.method == 'POST':
#             serializer = UserModelSerializer(instance=user, data=request.POST)
#             if serializer.is_valid():
#                 serializer.save()
#                 return render(request, 'profile_education.html')
#             else:
#                 messages.error(request, "Invalid data. Please check the form.")
    
#     return render(request, 'profile_education.html')
  