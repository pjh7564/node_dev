var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

// 라우팅 핸들러 함수
router.get('/', (req, res) => {
    // 데이터베이스 쿼리 실행
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'nodedb'
    });

    // 연결 테스트
    connection.connect(function (err) {
        if (err) {
            // 연결 실패 시 오류 메시지 렌더링 및 연결 종료
            res.render('mysql', { connect: "연결 실패", err: err });
            console.error("데이터베이스 연결 실패:", err);
            connection.end();
        } else {
            // 연결 성공 시 성공 메시지 렌더링 및 연결 종료
            res.render('mysql', { connect: "연결 성공", err: '성공' });
            console.log("데이터베이스 연결 성공!");
            connection.end();
        }
    });
});

module.exports = router; // 라우터 객체 export