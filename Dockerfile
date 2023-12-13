FROM node:16.16.0
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install
COPY . /app
# start app
CMD [ "yarn", "run", "dev" ]