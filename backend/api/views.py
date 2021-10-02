
from rest_framework import views
from rest_framework.request import Request
from rest_framework.response import Response
from urllib import request as httpRequest
import xmltodict


class CodezineRssAPIView(views.APIView):

    def __init__(self):
        self.url = 'https://codezine.jp/rss/new/20/index.xml'

    def get(self, request: Request):
        req = httpRequest.Request(self.url)
        with httpRequest.urlopen(req) as res:
            body = res.read()
            xml = xmltodict.parse(body)
            item = xml['rss']['channel']['item']
            return Response({'items': item})


class GizmodoRssAPIView(views.APIView):

    def __init__(self):
        self.url = 'https://www.gizmodo.jp/index.xml'

    def get(self, request: Request):
        req = httpRequest.Request(self.url)
        with httpRequest.urlopen(req) as res:
            body = res.read()
            xml = xmltodict.parse(body)
            item = xml['rss']['channel']['item']
            return Response({'items': item})
