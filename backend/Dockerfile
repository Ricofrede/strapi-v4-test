FROM node:14

WORKDIR /usr/src/app

COPY ./package.json ./
RUN npm install

COPY . ./

# Prod Env
# RUN npm run build

EXPOSE 1337

# Dev Env
CMD [ "npm", "run", "develop" ]

# Prod Env
# CMD [ "npm", "run", "start" ]