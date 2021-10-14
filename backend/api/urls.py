from django.urls import path
from .views import (
    CodezineRssAPIView,
    GizmodoRssAPIView,
)

urlpatterns = [
    path("codezine/", CodezineRssAPIView.as_view()),
    path("gizmodo/", GizmodoRssAPIView.as_view()),
]
