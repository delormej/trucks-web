FROM node
RUN npm install -g serve
COPY build ./build
EXPOSE 8080
ENTRYPOINT /usr/local/bin/serve -s build -l 8080
