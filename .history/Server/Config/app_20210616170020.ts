import { Http2ServerResponse } from "http2";
import { Http2ServerRequest } from "http2";
/*    app.ts
      Name: Muhammad Hassan 
      ID: 301178235
      Date: 03 June 2021
*/
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";

import indexRouter from "../Routes/index";

// Express Web App Configuration
const app = express();
export default app; // exports app as the default Object for this module

// DB Configuration
import * as DBConfig from "./db";
import { Console } from "console";
mongoose.connect(DBConfig.LocalURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection; // alias for mongoose connection
db.on("error", function () {
  console.error("connection error");
});
db.once("open", function () {
  console.log(`Connected to MongoDB at: ${DBConfig.HostName}`);
});

// view engine setup
app.set("views", path.join(__dirname, "../Views/"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../Client")));
app.use(express.static(path.join(__dirname, "../../node_modules")));

app.use(function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.log("before calling middle ware1");
  next();
  console.log("After calling middle ware1");
});
app.use(function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.log("before calling middle ware2");
  res.json({ abc: "123" });
  next();
  console.log("After calling middle ware2");
});
app.use(function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.log("before calling middle ware2");

  next();
  console.log("After calling middle ware2");
});
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (
  err: createError.HttpError,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//module.exports = app;
