const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("node_modules"));
app.use("/static", express.static("public"));

const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

app.use("/admin", adminRoutes);
app.use(userRoutes);

app.listen(3000, function () {
  console.log("listening on port 3000");
});
