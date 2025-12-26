const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverRide = require("method-override");
const ejsmate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");


// Passport & User model setup
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

// Routers
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

// Session options (used by express-session)
const sessionOptions = {
  secret: "mysupersecretcode", // used to sign session ID cookies
  resave: false,               // don't resave session if not modified
  saveUninitialized: true,     // save new sessions even if they're empty
  cookie: {
    // expire in 7 days
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true, // security: JS on client side can't access the cookie
  }
};

// MongoDB connection
const dbUrl = process.env.ATLASDB_URL;
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => console.log("DB connection successful"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

// ------------------- APP CONFIG ------------------- //

// Set EJS as view engine + configure paths
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Add EJS-Mate so we can use layouts/partials
app.engine("ejs", ejsmate);

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Allow override of HTTP methods (e.g. PATCH, DELETE via ?_method=DELETE)
app.use(methodOverRide("_method"));

// Serve static files from /public (css, js, images)
app.use(express.static(path.join(__dirname, "/public")));

// ------------------- SESSION + FLASH ------------------- //
app.use(session(sessionOptions));
app.use(flash());

// ------------------- PASSPORT CONFIG ------------------- //
app.use(passport.initialize());       // initialize passport
app.use(passport.session());          // persistent login sessions

// tell passport to use LocalStrategy and User model's authentication
passport.use(new LocalStrategy(User.authenticate()));

// serialize & deserialize users (comes from passport-local-mongoose plugin)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ------------------- GLOBAL MIDDLEWARE ------------------- //
// Make flash messages & currentUser available in ALL templates
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// ------------------- ROUTES ------------------- //

// // Simple test route
// app.get("/", (req, res) => {
//   res.send("Home page");
// });

// Use routers
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter); // handles signup/login/logout routes

// ------------------- ERROR HANDLING ------------------- //

// Catch-all for 404 pages
app.all(/.*/, (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

// Custom error handler
app.use((err, req, res, next) => {
  let { statusCode = 500 } = err;
  if (!err.message) err.message = "Something went wrong!";
  res.status(statusCode).render("listings/error.ejs", { err });
});

// ------------------- SERVER START ------------------- //
app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
