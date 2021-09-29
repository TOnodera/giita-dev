
from django.urls import path
from .views import CodezineRssAPIView

urlpatterns = [
    path('codezine/', CodezineRssAPIView.as_view())
]
