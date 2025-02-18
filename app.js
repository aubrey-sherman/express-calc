/** Simple demo Express app. */

import express from "express";
const app = express();

// useful error class to throw
import { NotFoundError } from "./expressError.js";

const MISSING = "Expected key `nums` with comma-separated list of numbers.";


/** Finds mean of nums in qs: returns {operation: "mean", result } */
app.get("/mean", function (req, res) {

  // pull out the query string
  const query = req.query; // looks like this if nums are passed - { "nums": "1,3,5,7"}
  // if no nums are passed, respond with Bad Request and message


  // handle invalid numbers

  return res.send(`You made it to this route!`);

});

/** Finds median of nums in qs: returns {operation: "median", result } */


/** Finds mode of nums in qs: returns {operation: "mean", result } */


/** 404 handler: matches unmatched routes; raises NotFoundError. */
app.use(function (req, res) {
  throw new NotFoundError();
});

/** Error handler: logs stacktrace and returns JSON error message. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});



export default app;
