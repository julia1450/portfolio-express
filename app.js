const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`Example app listenling on port ${port}`));

// 작업물 관련 API를 등록한다
const works = express();
app.use('/work', works);

works.get("/", (req, res) => {
    const start = req.query.start;
    const size = req.query.size;
    const workList = [];
    
    res.send( workList.slice(start, start + size) );
});
