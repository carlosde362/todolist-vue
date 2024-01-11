FROM node:18.15.0-alpine3.17@sha256:19eaf41f3b8c2ac2f609ac8103f9246a6a6d46716cdbe49103fdb116e55ff0cc AS builder

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

FROM nginx:1.23

COPY --from=builder /app/dist /usr/share/nginx/html

#RUN rm /etc/nginx/conf.d/default.conf

#COPY deploy/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
