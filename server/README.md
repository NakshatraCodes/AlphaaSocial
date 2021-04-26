# Node-mongo-starter-kit
Node JS boiler plate using express JS and mongoDB created with best practices for Nodejs.

### Prerequisites
```
    node, mongoDB
```

### Usage
* Run `npm i` to install all the dependencies.
* Start mongoDB server.
* Add `.env` file to the root of this project with following configuration.
```
PORT=<Port of your choice>
ENV=<Environment development/production>
SECRET=<Some strong secret, a string>
IS_CLUSTERING_ENABLED=<Boolean true/false>
ENABLE_ACCESS_LOGS=<Boolean true/false>
ENABLE_DEBUG_LOGS=<Boolean true/false>
MONGO_URI=<Mongo DB uri>
LINKEDIN_CLIENT_ID=<Linkedin Client ID>
LINKEDIN_CLIENT_SECRET=<Linkedin Client Secret>
LINKEDIN_CALLBACK_URL=<Linkedin Callback URL>
```
* Run `npm start` to run the server.

## Built With

The app is built using the following components.

*  [MongoDB](https://www.mongodb.com/)
*  [Express](https://expressjs.com/)
*  [Node.js](https://nodejs.org/)
