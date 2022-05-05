# Not use cuz aws free tier
# FROM node:14 as build-stage

# WORKDIR /app
# ADD . .
# RUN npm install
# RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

COPY  ./nginx.conf /etc/nginx/conf.d/default.conf

COPY app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
