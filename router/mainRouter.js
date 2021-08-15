//router 에서는 주소만 다룸.

const express = require('express');
const router = express.Router(); //주소용 도구를 사용하는 변수 선언

//서버 주소
// router.get("/", function(req,res){
//     res.send('Hello World :)');
// })

//2-5 get방식 서버주소(보통의 데이터를 주고 받을때 ex 그림, 혹은 텍스트 등)
router.get("/", function(req,res){

    let page = req.query.page;
    console.log("[QUERY]")
    console.log(page)

    res.send({"key":"value"});
})
/* 
    get방식에서는 주소뒤에 ? 혹은 & 연산자로 데이터를 받을수 있음
    ex) localhost:3000/?page=3&name=2
    frontend 개발자가 넘긴 데이터가 query에 담겨져 있음
*/

router.get("/about", function(req,res){
    res.send('about page');
})
/*
    app.js 에서 router폴더의 mainRouter.js로 옮겨서 관리
    때문에 app.get이 아닌 router.get으로 변경
*/

//post방식 서버주소 (민감한 데이터를 주고 받을때)
router.post("/postapi", function(req,res){
    let body = req.body;
    console.log(body)
    res.send('POST API');
})
/*
    post방식의 api는 code단에서만 쓸수 있음 > 인터넷 브라우저에서는 사용불가
    post방식의 경우 body에 넣어야함
    frontend 개발자가 넘긴 데이터가 body에 객체형태로 담겨져 있음. req.body.name식으로 꺼내쓰면 됌
    ex) ajax, java script code등
*/

module.exports = router 
/* 
    중요함
    기본문법이라고 생각하면 편함
    app.js에서 사용하기 위해 router변수를 내보냄
    app.js에서 받기위한 변수를 선언해야함(app.js에서 선언)
*/

