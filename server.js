const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
