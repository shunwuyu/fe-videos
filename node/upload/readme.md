- express 开发框架, 
  先安装， app = express()
  app.get('/', function(req, res) {
    文件流操作
  }) 定义一个GET请求，path / 
  app.listen(3001)
- 完成表单
  action="/upload" method="post"
- 上传文件
  express 开发框架
  multer 文件上传专用的包 npm node 开发中， 开源的那些工具/包 
  npm install multer 
  - 存储地址 /upload
  - 文件名  Date.now() 时间戳

- 前端文件压缩上传
  移动时代 更快 省流量
  - onchange event.target.files
  - 将用户电脑上的图片加载入内存之中， 进行处理
    html5 API FileReader
    readAsDataURL(file)
    - 判断文件的类型
    - FileReader  event.target.result
      img.src = 
  - canvas 
    处理image