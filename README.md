
[Check out Dionysus here!](https://ecstatic-easley-06cd2c.netlify.com/)

  

Related repos: [Client](https://github.com/Koblinskis/Dionysus-frontend), [Server](https://github.com/Koblinskis/Dionysus-backend)
# Dionysus Server

The Dionysus project is a web application for users to store data. The users can create an account that will be stored by an Express API backend on a MongDB Database. The application also is taking security into concern as unauthorized users cannot access the functionally of the site. Users can create a list that they can store to the database that only they can access and modify. 

  

![Screenshot](https://raw.githubusercontent.com/Koblinskis/Dionysus-frontend/master/screenshot.png)

The Dionysus backend is a NodeJS/Express API server. This server uses MongoDB Database to store users' data. The project follows an MVC structure (without the V). The Express API handles all of the HTTP requests that the client will send to the server, responding with whatever the client needs to preform the requested action. The Mongoose driver is used to allow for structured commutation between the database and Express. The passwords that users sign-up with are hashed with bcrypt before they stored on the database to provide security to the users of this site. Users are authenticated though JWTs to both allow uses to sign-in with multiple devices and prevent others from accessing personal information.

This is deployed on Heroku.

## How to run the server
Create `config/dev.env` file in the root of the project. That file needs to contain the following (if you are running MongoDB locally):
```
MONGODB_URL="mongodb://127.0.0.1:27017/blog-data"
JWT_SECRET=      //what ever you want

```
**Step to run:**

 1. `npm install`
 2. `npm run dev`
