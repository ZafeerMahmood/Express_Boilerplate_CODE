# Exprees_Boilerplate_CODE
Boilerplate code for express backend just clone and start adjusting according to your necessity

# setup
```sh
git clone https://github.com/ZafeerMahmood/Express_Boilerplate_CODE.git
```

change the pakage.json according to your needs
```json
{
  "name": "biolerplate-mern-stack",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "braintree": "^3.15.0",
    "braintree-web-drop-in-react": "^1.2.1",
    "concurrently": "^8.0.1",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-formidable": "^1.2.0",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.1.0",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.22",
    "slugify": "^1.6.6"
  }
}
```
config holds code to connect to mongo 
```js
import mongoose from "mongoose";
import color from "colors";
import { error } from "console";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to MongoDB Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`ERROR in Mongo DB ${error}`.bgRed.white);
  }
};

export default connectDB;
```
helper holdes function for the project
```js
import bcrypt from "bcrypt";

//@param password:string
//@returns:string (password hash)

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
```
models holds mongodb models used in the project

```js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
);

export default mongoose.model("user", userSchema);
```

routes hold the api endpints that use controllers 
server.js is the entry point.
