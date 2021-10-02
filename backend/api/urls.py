
from django.urls import path
from .views import CodezineRssAPIView, GizmodoRssAPIView, DummyXmlAPIView, DummyRssAPIView

urlpatterns = [
    path('codezine/', CodezineRssAPIView.as_view()),
    path('gizmodo/', GizmodoRssAPIView.as_view()),
    path('dummy-xml/', DummyXmlAPIView.as_view()),
    path('test/', DummyRssAPIView.as_view()),
]
