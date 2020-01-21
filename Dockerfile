FROM timbru31/node-alpine-git
RUN apk --no-cache add curl
RUN npm install -g heroku pm2
COPY package.json package.json
#COPY package-lock.json package-lock.json
RUN npm install

COPY . .
CMD ["npm","start"]
