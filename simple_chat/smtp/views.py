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
            send_mail(
                'Simple Chat ' + requestJson['subject'],
                requestJson['from'] + '\n' + requestJson['message'],
                'tommin231@gmail.com',
                ['tommin231@gmail.com'],
                fail_silently=False,
            )
            return HttpResponse(status=200)
