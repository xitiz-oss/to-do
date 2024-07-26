from rest_framework import generics
from .serializers import TaskSerializer
from .models import Task

class TaskView(generics.ListCreateAPIView, generics.UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
