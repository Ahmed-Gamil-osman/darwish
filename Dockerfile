FROM node:lts-alpine AS builder

WORKDIR /app

COPY package.json .

RUN npm install 
COPY . .
RUN npm run build 

FROM nginx
# I got my container port exposed to the Cloud using docker exposer --updated 
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
