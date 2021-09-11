const express = require("express");
const user = require("../controller/auth");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(user);

app.listen(port);
