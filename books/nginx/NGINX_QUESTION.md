# NGINX 配置遇到的问题和解决方案

**1. nginx做代理时，浏览器报错 `net::ERR_CONTENT_LENGTH_MISMATCH`**
- 问题分析:
    - 查看log `tail -f /usr/local/var/log/nginx/error.log`
    - > "/usr/local/var/run/nginx/proxy_temp/1/01/0000000011" failed (13: Permission denied) while reading upstream, client: 127.0.0.1, server: dev.mms.com, request: "GET /windows-mms/mallOrders.js HTTP/1.1", upstream: "http://127.0.0.1:8081/windows-mms//mallOrders.js", host: "dev.mms.com", referrer: "http://dev.mms.com/windows-mms/"

    - 发现是nginx没有权限打开文件资源的原因造成的
- 解决方法
    - `brew services stop nginx`
    - `cd usr/local/var/run/nginx`
    - 运行 `chmod -R 777`
    - `brew services start nginx`
    - *如果上面的方式没有解决，可以采取以下措施*
    - `rm -rf /usr/local/var/run/nginx/*`
    - `brew uninstall nginx`
    - `brew install nginx`
    - `brew services start nginx`

