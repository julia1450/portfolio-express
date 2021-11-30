require('dotenv').config();
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const mongoose = require('mongoose');
const { swaggerUi, specs } = require('./swagger');

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const { PORT, MONGO_URI } = process.env;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

app.use(cors());
app.get("/", (req, res) => res.send("Hello World"));

app.listen(PORT, () => console.log(`Example app listenling on port ${PORT}`));

// 작업물 관련 API를 등록한다
const works = require('./modules/works')
app.use('/work', works);

const getFile = (fileName) => {
    return fs.createReadStream(path.resolve('./img', `${fileName}`));
}

app.get('/img/:fileName', (req, res) => {
    let count = 0;
    const stream = getFile(req.params.fileName);

    stream.on("data", function (data) {
        count = count + 1;
        console.log("data count =" + count);
        res.write(data);
    });

    stream.on("end", () => {
        res.end();
    });

    stream.on("error", function (err) {
        console.log(err);
        res.end("500 Internal Server " + err);
    });
});

