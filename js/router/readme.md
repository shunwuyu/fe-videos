VUE REACT  SPA Single Page Application 应用体验更好， 页面会白一下
传统网页 链接把网站组织起来的 重新加载新的页面， 新的http请求
/about  req,  res 过程 
req  /about   
时间  网路传输时间, 01二进制， 电频信号 光速 + node/java/python 后端代码， 查数据库执行的时间, 把html 返回回去  = 白屏时间 100- 200
1.5s 用户就会离开， 0.1S 1000W 
res /about  about.html
路由是独立的 
- 网站MVC  =>  应用(Vue App)体验产生路由  白屏问题
VueRouter 就来了
- hashRouter 
  #/shop  #/
  优点是 ie8以上都支持
  缺点： 路由不纯粹，   /shop  
  HistoryRouter  history 历史的 /shop  访问历史， 纪录
  VUERouter 两种实现方式 = HashRouter(兼容性) + HistoryRouter(长的好,移动端兼容性还是没有问题的)
  
