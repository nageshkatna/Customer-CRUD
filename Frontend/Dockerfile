FROM node
WORKDIR /app
RUN npm install -g typescript
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]