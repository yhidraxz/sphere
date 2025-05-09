// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
import express from 'express'

import * as dotenv from "dotenv";
dotenv.config();


import {connectDb} from "./db/connectDb.js";
connectDb(process.env.MONGODB_URL);

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.listen(process.env.PORT, () => {
    console.log(`server running`)
})

export { app };
