var express = require('express');
var router = express.Router();

const { BASE_URL } = process.env;

/**
   * @swagger
   * paths:
   *   /work:
   *    get:
   *      tags: [작업물]
   *      summary: 작업물 목록을 GET요청
   *      description: 작업물 목록을 메인페이지와 작업물 페이지에 랜더한다
   *      parameters:
   *        - name: start
   *          in: query
   *          description: 게시글 페이지
   *          example: 0
   *        - name: size
   *          in: query
   *          description: 한 페이지에 보여줄 작업물 개수
   *          example: 10
   *      responses:
   *        200:
   *          description: OK
   *          content:
   *            application/json:
   *              schema:
   *                type: array
   *                items:
   *                  $ref: '#/definitions/Work'
   *        400:
   *          description: Invalid request
   *        409:
   *          description: Not have that kind of work
   */
router.get("/", (req, res) => {
    
    const start = req.query.start;
    const size = req.query.size;
    const workList = [
        {
            workId: 1,
            workTitle: "제목입니다1",
            workDescription: "설명입니다1",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 2,
            workTitle: "제목입니다2",
            workDescription: "설명입니다2",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 3,
            workTitle: "제목입니다3",
            workDescription: "설명입니다3",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 4,
            workTitle: "제목입니다4",
            workDescription: "설명입니다4",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 5,
            workTitle: "제목입니다5",
            workDescription: "설명입니다5",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 6,
            workTitle: "제목입니다6",
            workDescription: "설명입니다6",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 7,
            workTitle: "제목입니다7",
            workDescription: "설명입니다7",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 8,
            workTitle: "제목입니다8",
            workDescription: "설명입니다8",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 9,
            workTitle: "제목입니다9",
            workDescription: "설명입니다9",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 10,
            workTitle: "제목입니다10",
            workDescription: "설명입니다10",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 11,
            workTitle: "제목입니다11",
            workDescription: "설명입니다11",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 12,
            workTitle: "제목입니다12",
            workDescription: "설명입니다12",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 13,
            workTitle: "제목입니다13",
            workDescription: "설명입니다13",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 14,
            workTitle: "제목입니다14",
            workDescription: "설명입니다14",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 15,
            workTitle: "제목입니다15",
            workDescription: "설명입니다15",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 16,
            workTitle: "제목입니다16",
            workDescription: "설명입니다16",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 17,
            workTitle: "제목입니다17",
            workDescription: "설명입니다17",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 18,
            workTitle: "제목입니다18",
            workDescription: "설명입니다18",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 19,
            workTitle: "제목입니다19",
            workDescription: "설명입니다19",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 20,
            workTitle: "제목입니다20",
            workDescription: "설명입니다20",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 21,
            workTitle: "제목입니다21",
            workDescription: "설명입니다21",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 22,
            workTitle: "제목입니다22",
            workDescription: "설명입니다22",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 23,
            workTitle: "제목입니다23",
            workDescription: "설명입니다23",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 24,
            workTitle: "제목입니다24",
            workDescription: "설명입니다24",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 25,
            workTitle: "제목입니다25",
            workDescription: "설명입니다25",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 26,
            workTitle: "제목입니다26",
            workDescription: "설명입니다26",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 27,
            workTitle: "제목입니다27",
            workDescription: "설명입니다27",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 28,
            workTitle: "제목입니다28",
            workDescription: "설명입니다28",
            workImgPath: `${BASE_URL}img/logo.png`
        },
        {
            workId: 29,
            workTitle: "제목입니다29",
            workDescription: "설명입니다29",
            workImgPath: `${BASE_URL}img/logo.png`
        }
    ];
    
    if (start != null && size != null) res.send(workList.slice(start, start + size));
    else res.send(workList);
});



module.exports = router;

