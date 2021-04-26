const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const cors = require("cors"); //cors enables cross origin resource sharing
const routes = require("./routes");
const sequelize = require("./config/connection");
const app = express();
const session = require("express-session");
require("dotenv").config();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs

// ian commented out

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

//  ian commented out

// app.listen(PORT, function () {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log("API is running on http://localhost:3001/")
  );
});
