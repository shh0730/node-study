var Sequelize = require("sequelize");
//사용할 sequelize 라이브러리 설치
var sequelize;
/*
    대문자 Sequelize를 통해 연결한 결과를 받을 소문자 sequelize 변수를 둠
    이름은 아무거나 가능
*/

//sezuelize 변수에 연결할 정보 기입(정보또한 Sequelize 에서 제공하는 형식 그대로 사용)
sequelize = new Sequelize("class101", "root", "461352asdf",{
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    timezone: '+09:00', //한국 시간 셋팅
    define: {
    //sequelize는 기본적으로 영어 복수이름으로 테이블을 만드는데
    //그 기능을 끄는 옵션입니다.
    freezeTableName: true,
    charset: "utf8",
    collate: "utf8_general_ci",
    timestamps: true,
    }
});

var db = {}; //db 딕셔너리
db.users = sequelize.import(__dirname + "/users.js");
db.reviews = sequelize.import(__dirname + "/reviews.js");
/*
    db의 users라는 키값 생성
    users.js의 데이터 값을 불러오는 역할(sequelize의 import라는 도구 사용)
    __dirname <<<언더바2개, 상대적주소이며 db.js파일과 상대적으로 가까운 파일을 찾음


*/

db.sequelize = sequelize; //변수
db.Sequelize = Sequelize; //우리가 설치한 Sequelize5.22

module.exports = db;