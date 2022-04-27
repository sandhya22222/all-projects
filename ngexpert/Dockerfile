FROM node 

WORKDIR /thbs-app

COPY . .

RUN npm install

RUN npm run build  #generating prod build

FROM nginx:alpine
COPY --from=node /app/dist/demo-app /usr/share/nginx/html