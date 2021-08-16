FROM node:14

COPY . /app

WORKDIR /app

RUN yarn ci --ignore-scripts --prefer-offline

RUN yarn build

CMD ["node", "build/index.js"]