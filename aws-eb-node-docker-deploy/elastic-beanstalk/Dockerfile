# eb docker 에서 빌드시 AS 문이 먹히지 않는 이슈가 있음
# eb local run 에서는 잘되는데 eb deploy시에 아래 같은 에러 발생한다
#    2021/01/01 08:04:01.295044 [ERROR] An error occurred during execution of command [app-de
#    ploy] - [Docker Specific Build Application]. Stop running the command. Error: failed to
#    pull docker image: Command /bin/sh -c docker pull node:14-alpine AS BUILD_IMAGE failed w
#    ith error exit status 1. Stderr:"docker pull" requires exactly 1 argument.
#    See 'docker pull --help'.
#FROM node:14-alpine AS BUILD_IMAGE

FROM node:14-alpine

# set working directory
WORKDIR /usr

# install pm2 as global
RUN npm install pm2 -g

# copy package.json yarn file first and install node_module for docker image layer cache
COPY ./bundle/package.json .
COPY ./bundle/yarn.lock .
RUN yarn --production

# copy other file from bundle
COPY ./bundle .

EXPOSE 3000

CMD pm2-runtime ./ecosystem.config.js --env prod
