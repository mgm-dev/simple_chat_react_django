from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
from django.core.mail import send_mail
import json


class IndexView(View):
    def post(self, request):
        if request.META['CONTENT_TYPE'] == "application/json":
            print(request.body.decode('UTF-8'))
            requestJson = json.loads(request.body.decode('UTF-8'))
            return JsonResponse(requestJson)
