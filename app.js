const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// public 디렉토리에서 정적 파일 서빙
app.use(express.static('public'));

// 섹터 데이터를 제공하는 API 엔드포인트
app.get('/sectors', (req, res) => {
  fs.readFile(path.join(__dirname, 'sectors.json'), 'utf8', (err, data) => {
      if (err) {
          res.status(500).send('섹터 데이터를 읽는 중 오류 발생');
      } else {
          res.json(JSON.parse(data));
      }
  });
});

// 포인트 데이터를 제공하는 API 엔트포인트
app.get('/points', (req, res) => {
    fs.readFile(path.join(__dirname, 'points.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('포인트 데이터를 읽는 중 오류 발생');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// 서버 실행
app.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});