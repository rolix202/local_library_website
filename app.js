import createError from 'http-errors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from "mongoose";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js"

const app = express();

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema

mongoose.set("strictQuery", false)

// Define the database URL to connect to.

const mongoDB = "mongodb://localhost:27017/local_library_DB"

// waiting for database to connect, logging an error if there is a problem

async function main() {
  const conn = await mongoose.connect(mongoDB);

  if (conn) console.log("Database connected successfully");
}

main().catch((err) => console.log(err));

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
