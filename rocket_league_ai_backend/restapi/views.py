from django.shortcuts import render

# Create your views here.
import os
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import UserSerializer, GroupSerializer, FileSerializer
import textwrap
from django.http import HttpResponse
from django.views.generic.base import View
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .submission_manager import SubmissionManager


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class HomePageView(View):

    def dispatch(self, request, *args, **kwargs):
        response_text = textwrap.dedent('''\
            <html>
            <head>
                <title>Greetings to the world</title>
            </head>
            <body>
                <h1>Greetings to the world</h1>
                <p>Hello, world! test</p>
            </body>
            </html>
        ''')
        return HttpResponse(response_text)


class FileView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        submission_manager = SubmissionManager()
        file_serializer = FileSerializer(data=request.data)
        file = request.FILES['file']
        print("get file "+file.name)
        if file_serializer.is_valid():
            file_serializer.save()
            submission_file = os.path.abspath(file_serializer.data.get("file")[1:])
            print("file saved " + submission_manager.upload_submission(submission_file, remove=True))
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)