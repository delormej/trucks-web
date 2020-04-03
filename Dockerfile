FROM node:lts AS build
COPY . /src/
WORKDIR /src/
RUN npm install && npm run build
ENTRYPOINT /usr/local/bin/serve -s build -l 8080

FROM node:lts-slim
COPY --from=build /src/build /trucks-web
RUN npm install -g serve
EXPOSE 8080
ENTRYPOINT /usr/local/bin/serve -s /trucks-web -l 8080