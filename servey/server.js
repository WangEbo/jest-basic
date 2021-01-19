const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const db = mysql.createPool({
    host: 'localhost', 
    user: 'root', 
    password: '123456', 
    database: 'testdemo'
})

//使用跨域中间件
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

//静态资源托管
app.use(express.static('assets'))

// 请求解析
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
 
// parse application/json
app.use(bodyParser.json());

app.post('/login', function(req, res){
    let username = req.body.username,
        password = req.body.password;
    var sql = `select * from user_table where username = '${username}' and password = '${password}'`;
    db.query(sql, function(err, result){
        console.log((result));
        if(err || result.length == 0){
            res.status(200),
            res.json({
                success: 0,
                errMsg: err.message
            })
        }else{
            res.status(200),
            res.json({
                success: 1,
                message: '登录成功',
                data: result[0]
            })
        }
    })
})

app.get('/productList', function(req, res){
    var sql = `select * from product_table where product_name like '%${req.query.keywords || ''}%'`;
    db.query(sql, function(err, result){
        console.log((result));
        if(err || result.length == 0){
            res.status(200),
            res.json({
                success: 0,
                message: err.message
            })
        }else{
            res.status(200),
            res.json({
                success: 1,
                data: result
            })
        }
    })
})

app.listen('8087',()=>console.log('servey now is listening on port 8087'))