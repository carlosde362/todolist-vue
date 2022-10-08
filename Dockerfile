FROM mhart/alpine-node:16 AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:1.23

COPY --from=builder /app/dist /usr/share/nginx/html

#RUN rm /etc/nginx/conf.d/default.conf

#COPY deploy/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
