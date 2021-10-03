from rest_framework import serializers


class CodezineSerializer(serializers.Serializer):
    title = serializers.CharField()
    link = serializers.CharField()
    description = serializers.CharField()
    pubDate = serializers.CharField()


class GizmodoSerializer(serializers.Serializer):
    title = serializers.CharField()
    link = serializers.CharField()
    description = serializers.CharField()
    pubDate = serializers.CharField()
