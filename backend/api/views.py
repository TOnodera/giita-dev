from rest_framework import views
from rest_framework.request import Request
from rest_framework.response import Response
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
