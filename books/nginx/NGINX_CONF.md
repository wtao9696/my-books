# Nginx 配置

![](/books/assets/nginx_01.png)

### 个人博客nginx配置
```js
# blog 配置 dev
server {
    listen 80;
    server_name my.blog.com;
    add_header Access-Control-Allow-Origin *;
    root /Users/wangtao/Desktop/perspace/front-end/build;
    index index.html;

    location ^~ / {
        proxy_pass http://127.0.0.1:3000;
    }

    location ^~ /api {
        proxy_pass http://127.0.0.1:7878/api;
    }
    
    location ^~ /sockjs-node {
        proxy_pass http://127.0.0.1:3000/sockjs-node;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}

# blog 配置 prod
server {
    listen 80;
    server_name www.wangtao.com;
    add_header Access-Control-Allow-Origin *;
    root /Users/wangtao/Desktop/perspace/front-end/build;
    index index.html;

    location ^~ / {
        root   /Users/wangtao/Desktop/perspace/front-end/build;
        index  index.html index.htm;
    }

    location ^~ /api {
        proxy_pass http://127.0.0.1:7878/api;
    }
    
    location ^~ /sockjs-node {
        proxy_pass http://127.0.0.1:3000/sockjs-node;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```
