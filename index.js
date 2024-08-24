const express = require('express');
const path = require('path');
const app = express();

// ミドルウェアの設定
app.use(express.urlencoded({ extended: false }));

// 静的ファイルの読み込み
app.use(express.static(path.join(__dirname, 'public')));

// indexページ
// app.get('/', function (req, res) {
//     console.log(req);
//     res.send('Hello World');
// });

// HTML形式
app.get('/about', function (req, res) {
    res.send("<h1>about")
});

// API
app.get('/api/get_name', function (req, res) {
    res.send({ name: 'John' });
});

// HTMLファイルを返す
app.get('/demo', function (req, res) {
    res.sendFile(__dirname + '/public/demo.html');
});
 
app.post("/api/v1/quiz", function (req, res) {
    const answer = req.body.answer;
    if (answer === "CEO") {
        res.redirect("/correct.html");
    } else {
        res.redirect("/wrong.html");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Server is running on port 3000');
});
