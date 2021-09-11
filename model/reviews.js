const { reviews } = require("./db");

module.exports = function (sequelize, DataTypes) {
    //테이블 이름을 정의, 엑셀의 시트, MySQL에서는 field 필드라고함
    return sequelize.define('reviews', {
        //데이터베이스 테이블에는 반드시 유니크한 값이 하나 존재해야합니다.
        //테이블에 데이터가 하나씩 늘어날때마다 알아서 자동적으로 생성되는 값을 맨 처음에 이렇게 둡니다.
        idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        //컬럼 값을 정의합니다.
        //user_id라는 컬럼 이름과, 해당 컬럼에는 텍스트 값만 받겠다는 STRING을 입력합니다.
        //숫자 100은 데이터 값의 길이인데 꽤 긴 데이터를 담을 수 있는 250을 설정합니다.
        //이와 관련해서는 mysql datatype size라고 구글에 검색해보세요!
        movie_id: {
            type: DataTypes.STRING(250)
        },
        review: {
            type: DataTypes.TEXT
            //긴 데이터, 긴 장문을 넣을때는 TEXT 사용
        }
    });
    
}
