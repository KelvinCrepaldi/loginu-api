import express from "express";
import routes from "./src/routes";
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use("/user", routes);



app.listen(port, ()=>console.log(`App running: port ${port}...`));