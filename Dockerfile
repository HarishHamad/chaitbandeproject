FROM node:16
# Installing libvips-dev for sharp Compatability
RUN apt-get update && apt-get install libvips-dev -y
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json  ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm install 
RUN  npm install pg --save
WORKDIR /opt/app
COPY ./ .
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "develop"]