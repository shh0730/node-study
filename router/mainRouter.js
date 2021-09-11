//router 에서는 주소만 다룸.

const express = require('express');
const router = express.Router(); //주소용 도구를 사용하는 변수 선언
const db = require('../model/db') //라우터에서 db.js를 활용하기 위해서 불러옴

//서버 주소
// router.get("/", function(req,res){
//     res.send('Hello World :)');
// })

//2-5 get방식 서버주소(보통의 데이터를 주고 받을때 ex 그림, 혹은 텍스트 등)
/*
router.get("/", function(req,res){

    let page = req.query.page;
    console.log("[QUERY]")
    console.log(page)

    res.send({"key":"value"});
})
 
    get방식에서는 주소뒤에 ? 혹은 & 연산자로 데이터를 받을수 있음
    ex) localhost:3000/?page=3&name=2
    frontend 개발자가 넘긴 데이터가 query에 담겨져 있음
*/

//3-2
router.get("/", function(req,res){
    res.render('main',{title:"영화 리뷰 사이트"});
})

//4-5
router.post("/review/create", function(req,res){
    let movie_id = req.body.movie_id;
    let review = req.body.review;

    if(movie_id == '' || movie_id == 0){ //or 연산자 ||  >> movie_id의 값이 없거나 0일경우
        res.send({success:500}) //400 혹은 500을 보냄 >> 프론트개발자가 잘못 보내줌

    }else{ //movie_id값이 정상적으로 있을 경우

        db.reviews.create({movie_id:movie_id, review:review}).then(function(result){
            res.send({success:200})
        })
    }
})

router.get("/review/read", function(req, res){
    let movie_id = req.query.movie_id;

    db.reviews.findAll({where:{movie_id:movie_id}}).then(function(result){
        res.send({success:200, data:result}) //data에는 영화의 리뷰값이 들어있음
    })
})

//2-6
/*
router.get("/", function(req,res){
    res.render('index',{title:"ejs main page"}) // 'index'는 views 폴더 안에 있는 index.html을 뜻함. views > admin > index.html의 경우 'admin/index' 이런식으로 값 넣기
})
/*
    그림파일을 전달해줄때 render, 문자나 데이터를 전달할때는 send
    ejs 명령어 <%=  %> html과 비슷함
    <%= locals.title %> 에서
    locals는 서버개발자가 보내는 데이터가 있는 파일
    title은 우리가 명시한 'index', {title:"ejs main page"}의 title값이 들어있음
    view engine은 index처럼 그림뿐만 아니라 데이터까지 같이 보낼수 있음.

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

/*
    C : Create
    R : Read
    U : Update
    D : Delete
*/

router.get("/data/create",function(req,res){
    let user_id = parseInt(Math.random() * 10000) 
    /*
        nodejs가 제공해주는 수학관련 값에서 random함수를 사용(랜덤값으로 0.123817125 이런식으로 나옴)
        랜덤값에 10000을 곱한 후 parseInt를 이용하여 정수로 만듬
    */
    db.users.create({user_id:user_id}).then(function(result){ //이런걸 함수형 프로그래밍
       res.send({success:200})
   }) 
})

router.get("/data/read",function(req,res){
    db.users.findAll().then(function(result){
        res.send({success:200, data:result})
    })
})

router.post("/data/update", function(req,res){
    let target_id = req.body.target_id;
    db.users.update({user_id:9999},{where:{user_id:target_id}}).then(function(result){ //where는 mySQL 문법
        res.send({success:200})
    })
})

router.post("/data/delete",function(req,res){
    let target_id = req.body.target_id;
    db.users.destroy({where:{user_id:target_id}}).then(function(result){
        res.send({success:200})
    })
})

module.exports = router 
/* 
    중요함
    기본문법이라고 생각하면 편함
    app.js에서 사용하기 위해 router변수를 내보냄
    app.js에서 받기위한 변수를 선언해야함(app.js에서 선언)
*/

