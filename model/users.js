//테이블 만들기 (엑셀로치면 시트, MySQL에서는 필드)



module.exports = function (sequelize, DataTypes) {
    //테이블 이름을 정의, 엑셀의 시트, MySQL에서는 field 필드라고함
    return sequelize.define('users', {
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
        user_id: {
            type: DataTypes.STRING(250)
        }
    });
    
}

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('songs', {
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
        user_id: {
            type: DataTypes.STRING(250)
        }
    });
    
}



/*
module.exports = function(sequelize, DataTypes){
    return sequelize.define('users',{
        idx: {
            type:DataTypes.INTEGER, //정수형타입
            autoIncrement:true, //식별자별로 자동으로 생성되는 유니크한 식별값(ex) index-1, index-2 이런식으로 생성)
            primaryKey:true, //식별값이 컬럼값이다라는 명시
            allowNull:false //index값이 null이면 안된다는것을 설정
        },
        //임의로 만드는 컬럼값
        user_id: {
            type:DataTypes.STRING(250) //문자열타입, 문자의 최대길이는 250자
        }
    })
}
*/