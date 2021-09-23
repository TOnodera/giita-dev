FROM nginx:latest

RUN usermod -u 1000 -o www-data -g www-data
WORKDIR /socket
RUN touch app.sock && \
    chown -R www-data:www-data /socket