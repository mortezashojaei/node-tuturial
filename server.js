const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

app.set("view engine", "ejs");
app.set("ejs", `${__dirname}/views`);
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

app.listen(process.env.PORT || 3000);
