
//서버를 쉽게 만드는 express 도구 선언
const express = require('express');
const helmet = require('helmet'); //npmjs.com 에서 가져옴 helet >> 최소한의 보안도구 (npm install helmet으로 도구 설치)
const app = express();
const ejs = require('ejs');
const db = require('./model/db')


//css, html을 어떻게 꺼내는지(브라우저에 띄우기 위해)
app.set('view engine', 'ejs'); //ejs 다운로드 해야하는 도구(npm install ejs), 뷰엔진 옆에 ejs는 확장자를 ejs로 사용하겠다라는 뜻(확장자를 ejs로 바꿔줘야함)
app.set('views', './views');
app.use('/public', express.static(__dirname + '/public'));
//리로스파일(css와 image파일, 자바스크립트 파일 등)을 꺼낼때는 항상 public에서 꺼내라 라는 규칙을 만든것

// app.use(helmet()); //middelware() 미들웨어, 요청과 응답사이  (컨트롤 + / 주석처리)
                            //(사이트 ----> 요청 --middleware()--> Node.js = local:3000/about
                       //ex)  local:3000 ----> / --middleware()--> about)
app.use(express.json());
app.use(express.urlencoded());
/*
    post 방식을 사용하기위한 규칙
    app.js에 있어야함

*/
const mainRouter = require('./router/mainRouter');//mainRouter.js가 들어있는 폴더 주소 경로를 적어야함
app.use('/', mainRouter);
//app.use('/class101', mainRouter);  '/' 만 썼을경우 local:3000/about 창이 열림
                                  // '/class101'을 썼을경우 local:3000/about 페이지 오류창이 뜸(Cannot GET /about)
                                  // '/class101'을 썼을경우 local:3000/class101/about 창이열림 >> 이것이 미들웨어
/* 
    변수선언 중 const >> 변하지 않는 고정의 변수 선언시 사용 (let과 다름)
    require >> 내려받은 괄호 (express 도구) 사용하고자 선언할때 사용, 항상 상단에 입력
    중요! router 폴더의 주소를 사용하기위해 mainRouter 변수사용(mainRouter.js에서 내보낸 router를 가져옴)
*/

//서버 주소(app.js 에서 router폴더의 mainRouter.js로 옮겨서 관리)
/*
app.get("/", function(req,res){
    res.send('Hello World :)');
})
/*
    req >> request 약자 (요청)
    res >> respones 약자 (응답)


//2-4강의에서 추가 ex)회사 소개 페이지
app.get("/about", function(req,res){
    res.send('about page');
})

    새로운 주소를 생성(변경)시 서버를 껏다 켜야함
    끄기 : ctrl + c
    위의 수고로운 작업을 없애기 위해 도구 설치 >> npm install supervisor(변경된 코드 바로적용)
*/

//서버를 켜주는 스위치(listen) ex) pc의 전원
app.listen(3000, function(req,res){

    db.sequelize.sync({force:false})
    console.log("서버 온라인")
})
/*
    사용하려는 포트 번호 >> 3000
*/