# ###############################
# Multi-stage build artifact
# ###############################
FROM node:14-alpine AS development

WORKDIR /src
RUN chown node:node /src

USER node
COPY --chown=node:node . /src/

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
