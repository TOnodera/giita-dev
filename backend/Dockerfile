FROM python:3.9.7-buster

RUN apt-get update && apt-get install -y bash git 

RUN pip install flake8 black pymysql uwsgi==2.0.19 uwsgitop mysqlclient pyyaml xmltodict \ 
    && pip install Django==3.2.* djangorestframework==3.12.* djangorestframework-xml django-environ drf-yasg

WORKDIR /home/python/app
COPY . .
RUN useradd -u 1000 -o python && \
    chown -R python:python /home/python/

RUN mkdir /socket && touch /socket/app.sock && \
    chown -R python:python /socket

USER python
EXPOSE 8000

CMD ["uwsgi","--ini","/home/python/app/uwsgi.ini"]
