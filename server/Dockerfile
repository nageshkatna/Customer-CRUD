FROM node
WORKDIR /app
RUN npm install -g typescript 
COPY tsconfig.json .
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "dev"]