const express = require('express');
const router = require('./routes/routes')
const path = require('path');
const app = express();


app.use(express.static(__dirname + "/public"));
// app.use("/backgrounds", express.static(__dirname + "public/content/backgrounds"));
// app.use("/css", express.static(__dirname + "public/content/css"));
// app.use("/js", express.static(__dirname + "public/content/js"));
// app.use("/img", express.static(__dirname + "public/content/img"));

app.use(router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));