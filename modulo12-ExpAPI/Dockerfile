FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE ${PORT}

CMD [ "npm", "start" ]