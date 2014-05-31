部署到 openshift
国内的 要用自己的域名 才能访问
---------------------------------------


Error: listen EACCES
---------------------------------------
这个错误 绑定 ip能解决 
http.createServer(app).listen(port,ipaddr);


引用子模板
------------------------------------------
include common/protocol_parameters
block protocol_parameters