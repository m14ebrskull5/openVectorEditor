FROM nginx

COPY ./demo/dist /opt/html
RUN apt install -y curl
COPY ./nginx/nginx.conf /usr/local/nginx/conf/nginx.conf
