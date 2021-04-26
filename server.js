const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
// const cors = require("cors"); //cors enables cross origin resource sharing
const routes = require("./routes");
const sequelize = require("./config/connection");
const app = express();
const session = require("express-session");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const sess = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitializes: true,
  cookie: {
    expires: 3600000,
  },
};
app.use(session(sess));
// app.use(cors());

// app.use("/login", (req, res) => {
//   res.send({
//     token: "test123",
//   });
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser("secret"));

app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log("API is running on http://localhost:3001/")
  );
});
