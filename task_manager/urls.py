# task_manager/urls.py
from django.urls import path
from .views import task_list, create_task, delete_task

urlpatterns = [
    path('tasks/', task_list, name='task_list'),
    path('tasks/create/', create_task, name='create_task'),
    path('tasks/<int:task_id>/delete/', delete_task, name='delete_task'),
]
