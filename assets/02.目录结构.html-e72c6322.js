import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-75fed8c6.js";const i={},l=e(`<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tree /usr/local/nginx</span>
/usr/local/nginx
├── client_body_temp                 <span class="token comment"># POST 大文件暂存目录</span>
├── conf                             <span class="token comment"># Nginx所有配置文件的目录</span>
│   ├── fastcgi.conf                 <span class="token comment"># fastcgi相关参数的配置文件</span>
│   ├── fastcgi.conf.default         <span class="token comment"># fastcgi.conf的原始备份文件</span>
│   ├── fastcgi_params               <span class="token comment"># fastcgi的参数文件</span>
│   ├── fastcgi_params.default
│   ├── koi-utf
│   ├── koi-win
│   ├── mime.types                   <span class="token comment"># 媒体类型</span>
│   ├── mime.types.default
│   ├── nginx.conf                   <span class="token comment">#这是Nginx默认的主配置文件，日常使用和修改的文件</span>
│   ├── nginx.conf.default
│   ├── scgi_params                  <span class="token comment"># scgi相关参数文件</span>
│   ├── scgi_params.default
│   ├── uwsgi_params                 <span class="token comment"># uwsgi相关参数文件</span>
│   ├── uwsgi_params.default
│   └── win-utf
├── fastcgi_temp                     <span class="token comment"># fastcgi临时数据目录</span>
├── html                             <span class="token comment"># Nginx默认站点目录</span>
│   ├── 50x.html                     <span class="token comment"># 错误页面优雅替代显示文件，例如出现502错误时会调用此页面</span>
│   └── index.html                   <span class="token comment"># 默认的首页文件</span>
├── logs                             <span class="token comment"># Nginx日志目录</span>
│   ├── access.log                   <span class="token comment"># 访问日志文件</span>
│   ├── error.log                    <span class="token comment"># 错误日志文件</span>
│   └── nginx.pid                    <span class="token comment"># pid文件，Nginx进程启动后，会把所有进程的ID号写到此文件</span>
├── proxy_temp                       <span class="token comment"># 临时目录</span>
├── sbin                             <span class="token comment"># Nginx 可执行文件目录</span>
│   └── nginx                        <span class="token comment"># Nginx 二进制可执行程序</span>
├── scgi_temp                        <span class="token comment"># 临时目录</span>
└── uwsgi_temp                       <span class="token comment"># 临时目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本配置文件" tabindex="-1"><a class="header-anchor" href="#基本配置文件" aria-hidden="true">#</a> 基本配置文件</h2><h3 id="默认文件" tabindex="-1"><a class="header-anchor" href="#默认文件" aria-hidden="true">#</a> 默认文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    <span class="token comment">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    <span class="token comment">#access_log  logs/access.log  main;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>

    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        location / <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    root           html;</span>
        <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
        <span class="token comment">#    fastcgi_index  index.php;</span>
        <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
        <span class="token comment">#    include        fastcgi_params;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
        <span class="token comment"># concurs with nginx&#39;s one</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ /\\.ht {</span>
        <span class="token comment">#    deny  all;</span>
        <span class="token comment">#}</span>
    <span class="token punctuation">}</span>


    <span class="token comment"># another virtual host using mix of IP-, name-, and port-based configuration</span>
    <span class="token comment">#</span>
    <span class="token comment">#server {</span>
    <span class="token comment">#    listen       8000;</span>
    <span class="token comment">#    listen       somename:8080;</span>
    <span class="token comment">#    server_name  somename  alias  another.alias;</span>

    <span class="token comment">#    location / {</span>
    <span class="token comment">#        root   html;</span>
    <span class="token comment">#        index  index.html index.htm;</span>
    <span class="token comment">#    }</span>
    <span class="token comment">#}</span>


    <span class="token comment"># HTTPS server</span>
    <span class="token comment">#</span>
    <span class="token comment">#server {</span>
    <span class="token comment">#    listen       443 ssl;</span>
    <span class="token comment">#    server_name  localhost;</span>

    <span class="token comment">#    ssl_certificate      cert.pem;</span>
    <span class="token comment">#    ssl_certificate_key  cert.key;</span>

    <span class="token comment">#    ssl_session_cache    shared:SSL:1m;</span>
    <span class="token comment">#    ssl_session_timeout  5m;</span>

    <span class="token comment">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span>
    <span class="token comment">#    ssl_prefer_server_ciphers  on;</span>

    <span class="token comment">#    location / {</span>
    <span class="token comment">#        root   html;</span>
    <span class="token comment">#        index  index.html index.htm;</span>
    <span class="token comment">#    }</span>
    <span class="token comment">#}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更多配置信息 http://nginx.org/en/docs/</span>
user nginx<span class="token punctuation">;</span>

<span class="token comment"># 工作进程：一般是 cpu有几核就写几，可以最大限度的去发挥它的性能</span>
worker_processes auto<span class="token punctuation">;</span>

<span class="token comment"># 错误日志路径</span>
error_log /var/log/nginx/error.log<span class="token punctuation">;</span>

<span class="token comment"># 千万别动这玩意，是给守护进程用的</span>
pid /var/run/nginx.pid<span class="token punctuation">;</span>

<span class="token comment"># 负载动态模块</span>
include /usr/share/nginx/modules/*.conf

<span class="token comment"># 并发连接数：最大并发数 -&gt; 一个工作进程下的最大连接【默认 1024】</span>
events <span class="token punctuation">{</span>
    worker_connections <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># http 配置</span>
http <span class="token punctuation">{</span>
    <span class="token comment"># 日志格式</span>
    log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

    <span class="token comment"># 访问日志的路径</span>
    access_log          /var/log/nginx/access.log  main<span class="token punctuation">;</span>

    <span class="token comment"># sendfile &amp; tcp_nopush &amp; tcp_nodelay的解释 https://www.jianshu.com/p/cac0a92b9530</span>
    <span class="token comment"># 是否允许上传文件</span>
    sendfile            on<span class="token punctuation">;</span>

    <span class="token comment"># 允许把http response header和文件的开始放在一个文件里发布，作用是减少网络报文段的数量</span>
    tcp_nopush          on<span class="token punctuation">;</span>

    <span class="token comment"># 内核会等待将更多的字节组成一个数据包，从而提高I/O性能</span>
    tcp_nodelay         on<span class="token punctuation">;</span>

    <span class="token comment"># gzip 压缩</span>
    <span class="token function">gzip</span>                on<span class="token punctuation">;</span>

    <span class="token comment"># 长连接多长时间没有通信自动断开</span>
    keepalive_timeout   <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment"># 为了快速处理静态数据集，例如服务器名称， 映射指令的值，MIME类型，请求头字符串的名称，nginx使用哈希表</span>
    types_hash_max_size <span class="token number">2048</span><span class="token punctuation">;</span>

    <span class="token comment"># 文件扩展名与类型映射表</span>
    include             /etc/nginx/mime.types<span class="token punctuation">;</span>

    <span class="token comment"># 默认文件类型</span>
    default_type        application/octet-stream<span class="token punctuation">;</span>

    <span class="token comment"># 定义反向代理服务器</span>
    upstream web<span class="token punctuation">{</span>
        <span class="token comment"># 设置后，后面每次访问都是定位到第一次访问到的服务器</span>
        ip_hash<span class="token punctuation">;</span>

        <span class="token comment"># 这里的 server如果只写一个就是单纯的额外网发布,如果写 n 个就是负载均衡</span>
        server <span class="token number">127.0</span>.0.1:8080<span class="token punctuation">;</span>
        server <span class="token number">127.0</span>.0.1:8888 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">#添加权重</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#-------------------------------------------------------------------------</span>
    <span class="token comment"># 加载模块化配置文件，可以把下面 server的配置写到 /etc/nginx/conf.d/ 路径下的某个文件👇</span>
    <span class="token comment"># 👆 就可以直接引入，不需要在这个文件写server的配置</span>
    include                       /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>
    <span class="token comment">#-------------------------------------------------------------------------</span>

    <span class="token comment"># 一个 server对应一个网站</span>
    server <span class="token punctuation">{</span>
        <span class="token comment"># 监听端口</span>
        listen       <span class="token number">80</span> default_server<span class="token punctuation">;</span>
        listen       <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80 default_server<span class="token punctuation">;</span>

        <span class="token comment"># server域名</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment"># 站点根目录，即网站程序存放目录</span>
        root         /usr/share/nginx/html<span class="token punctuation">;</span>

        <span class="token comment"># 默认服务器块的加载配置文件</span>
        include      /etc/nginx/default.d/*.conf<span class="token punctuation">;</span>

        <span class="token comment"># 对“/”启用反向代理</span>
        location / <span class="token punctuation">{</span>
            root     html<span class="token punctuation">;</span>
            index    index.html  index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># 对“/xxx/”启用反向代理</span>
        location /xxx/ <span class="token punctuation">{</span>
            <span class="token comment"># 过来的请求代理到哪里，web为前面upstream定义的</span>
            proxy_pass http://web<span class="token punctuation">;</span>

            <span class="token comment"># 如果需要客户端 ip,这个开关可能会重写为反向代理的 ip</span>
            proxy_redirect off<span class="token punctuation">;</span>

            <span class="token comment"># nginx 可能会改写头,用原来的值再把它改回来</span>
            proxy_set_header Hose <span class="token variable">$host</span><span class="token punctuation">;</span>

            <span class="token comment"># 代理服务器转发请求的时候用的协议版本</span>
            proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
            proxy_set_header Upgrade <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span>
            proxy_set_header Connection <span class="token string">&#39;upgrade&#39;</span><span class="token punctuation">;</span>
            proxy_cache_bypass <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span>

            <span class="token comment"># 取客户端真实 ip</span>
            proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
            proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>

            <span class="token comment"># 超时</span>
            proxy_connect_timeout <span class="token number">600</span><span class="token punctuation">;</span>
            proxy_read_timeout <span class="token number">600</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        error_page <span class="token number">404</span> /404.html<span class="token punctuation">;</span>

        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 配置 https</span>
    server <span class="token punctuation">{</span>
        <span class="token comment"># 一定要带上 ssl 标记,默认 443 端口</span>
        listen       <span class="token number">443</span> ssl<span class="token punctuation">;</span>
        server_name  work.com<span class="token punctuation">;</span>
        ssl                  on<span class="token punctuation">;</span>

        <span class="token comment"># 证书</span>
        ssl_certificate      /etc/nginx/server.crt<span class="token punctuation">;</span>

        <span class="token comment"># 密钥</span>
        ssl_certificate_key  /etc/nginx/server.key<span class="token punctuation">;</span>

        <span class="token comment"># 超时</span>
        ssl_session_timeout  5m<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
            root   /usr/local/web/<span class="token punctuation">;</span>
            add_header <span class="token string">&#39;Cache-Control&#39;</span> <span class="token string">&#39;no-store&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[l];function t(o,p){return s(),a("div",null,c)}const v=n(i,[["render",t],["__file","02.目录结构.html.vue"]]);export{v as default};
