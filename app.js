const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`Example app listenling on port ${port}`));

// 작업물 관련 API를 등록한다
const works = express();
app.use('/work', works);

works.get("/", (req, res) => {
    const start = req.query.start;
    const size = req.query.size;
    const workList = [
        {
            workId: 1,
            workTitle: "제목입니다1",
            workDescription: "설명입니다1",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 2,
            workTitle: "제목입니다2",
            workDescription: "설명입니다2",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 3,
            workTitle: "제목입니다3",
            workDescription: "설명입니다3",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 4,
            workTitle: "제목입니다4",
            workDescription: "설명입니다4",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 5,
            workTitle: "제목입니다5",
            workDescription: "설명입니다5",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 6,
            workTitle: "제목입니다6",
            workDescription: "설명입니다6",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 7,
            workTitle: "제목입니다7",
            workDescription: "설명입니다7",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 8,
            workTitle: "제목입니다8",
            workDescription: "설명입니다8",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 9,
            workTitle: "제목입니다9",
            workDescription: "설명입니다9",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 10,
            workTitle: "제목입니다10",
            workDescription: "설명입니다10",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 11,
            workTitle: "제목입니다11",
            workDescription: "설명입니다11",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 12,
            workTitle: "제목입니다12",
            workDescription: "설명입니다12",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 13,
            workTitle: "제목입니다13",
            workDescription: "설명입니다13",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 14,
            workTitle: "제목입니다14",
            workDescription: "설명입니다14",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 15,
            workTitle: "제목입니다15",
            workDescription: "설명입니다15",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 16,
            workTitle: "제목입니다16",
            workDescription: "설명입니다16",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 17,
            workTitle: "제목입니다17",
            workDescription: "설명입니다17",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 18,
            workTitle: "제목입니다18",
            workDescription: "설명입니다18",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 19,
            workTitle: "제목입니다19",
            workDescription: "설명입니다19",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 20,
            workTitle: "제목입니다20",
            workDescription: "설명입니다20",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 21,
            workTitle: "제목입니다21",
            workDescription: "설명입니다21",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 22,
            workTitle: "제목입니다22",
            workDescription: "설명입니다22",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 23,
            workTitle: "제목입니다23",
            workDescription: "설명입니다23",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 24,
            workTitle: "제목입니다24",
            workDescription: "설명입니다24",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 25,
            workTitle: "제목입니다25",
            workDescription: "설명입니다25",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 26,
            workTitle: "제목입니다26",
            workDescription: "설명입니다26",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 27,
            workTitle: "제목입니다27",
            workDescription: "설명입니다27",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 28,
            workTitle: "제목입니다28",
            workDescription: "설명입니다28",
            workImgPath: '/src/assets/img/logo.png'
        },
        {
            workId: 29,
            workTitle: "제목입니다29",
            workDescription: "설명입니다29",
            workImgPath: '/src/assets/img/logo.png'
        }
    ];
    
    res.send( workList.slice(start, start + size) );
});
