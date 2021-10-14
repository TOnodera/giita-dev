FROM nginx:latest

RUN usermod -u 1000 -o www-data -g www-data

WORKDIR /usr/share/nginx/dist

WORKDIR /socket
RUN touch app.sock && \
    chown -R www-data:www-data /socket && \
    chown -R www-data:www-data /usr/share/nginx

WORKDIR /home/nginx

