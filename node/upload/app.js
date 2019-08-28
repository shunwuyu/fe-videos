const express = require('express');
const app = express();
//上传npm包的配置
const multer = require('multer');
const fs = require('fs');
const path = require('path'); 

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'upload/')
  },
  filename: function(req, file, cb) {
    console.log(file);
    const fileHz = file.mimetype.replace('image/', '');
    console.log(fileHz);
    cb(null, Date.now() + '.' + fileHz);
  }
})

const upload = multer({
  storage: storage
})

app.get('/', function(req, res) {
  const form = fs.createReadStream(
    path.join(__dirname, 'index.html')
  );
  form.pipe(res);
})

//路由 
app.post('/upload', upload.any(), function(req, res) {
    //文件上传
    console.log('要处理表单提交了');
    res.send({
      ret_code: 0
    });
})
app.listen(3001);