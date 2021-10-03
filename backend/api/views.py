
from rest_framework import views
from rest_framework.request import Request
from rest_framework.response import Response
from urllib import request as httpRequest
from .dummy.dummy_rss import loadDummyRss
from .domain.behavior.dummy_behavior import DummyBehavior
from .domain.behavior.codezine_behavior import CodezineBehavior
from .domain.behavior.gizmodo_behavior import GizmodoBehavior
from .domain.item_list import ItemList
from .serializers import CodezineSerializer, GizmodoSerializer


class CodezineRssAPIView(views.APIView):
    def get(self, request: Request):
        behavior = CodezineBehavior()
        item_list = ItemList(behavior)
        serializer = CodezineSerializer(item_list.get(), many=True)
        return Response(serializer.data)


class GizmodoRssAPIView(views.APIView):
    def get(self, request: Request):
        behavior = GizmodoBehavior()
        item_list = ItemList(behavior)
        serializer = GizmodoSerializer(item_list.get(), many=True)
        return Response(serializer.data)


class DummyRssAPIView(views.APIView):
    def get(self, request: Request):
        behavior = DummyBehavior()
        item_list = ItemList(behavior)
        return Response(item_list.get())


class DummyXmlAPIView(views.APIView):

    def get(self, request: Request):
        xml = loadDummyRss()
        return Response(xml)
