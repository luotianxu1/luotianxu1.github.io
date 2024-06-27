import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as r,a as n,e as d,b as c,d as a}from"./app-75fed8c6.js";const t="/img/study/nginx/nginx.png",o="/img/study/nginx/nginx1.png",p={},v=a('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="源码安装" tabindex="-1"><a class="header-anchor" href="#源码安装" aria-hidden="true">#</a> 源码安装</h3><h4 id="官网" tabindex="-1"><a class="header-anchor" href="#官网" aria-hidden="true">#</a> 官网</h4>',3),u={href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},m=a('<figure><img src="'+t+`" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="解压-nginx-包" tabindex="-1"><a class="header-anchor" href="#解压-nginx-包" aria-hidden="true">#</a> 解压 Nginx 包</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span>  nginx-1.21.6.tar.gz <span class="token comment">#解压到当前目录</span>

<span class="token builtin class-name">cd</span> nginx-1.21.6 <span class="token comment">#进入解压后的文件夹</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装依赖库" tabindex="-1"><a class="header-anchor" href="#安装依赖库" aria-hidden="true">#</a> 安装依赖库</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> gcc pcre pcre-devel zlib zlib-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="编译安装" tabindex="-1"><a class="header-anchor" href="#编译安装" aria-hidden="true">#</a> 编译安装</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx <span class="token comment"># 指定编译选项，--prefix选项指定安装的目录</span>

<span class="token function">make</span> <span class="token comment"># 编译</span>

<span class="token function">make</span> <span class="token function">install</span> <span class="token comment"># 安装编译结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/nginx/sbin

<span class="token function">ls</span> <span class="token comment"># 里面是一个nginx的可执行文件</span>

./nginx <span class="token comment">#   启动这个就是nginx的可执行文件</span>
./nginx <span class="token parameter variable">-s</span> stop     <span class="token comment">#快速停止</span>
./nginx <span class="token parameter variable">-s</span> quit    <span class="token comment">#优雅关闭，在退出前完成已经接受的连接请求</span>
./nginx <span class="token parameter variable">-s</span> reload    <span class="token comment">#重新加载配置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关闭防火墙" tabindex="-1"><a class="header-anchor" href="#关闭防火墙" aria-hidden="true">#</a> 关闭防火墙</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl stop firewalld <span class="token comment"># 关闭防火墙</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="注册为系统服务" tabindex="-1"><a class="header-anchor" href="#注册为系统服务" aria-hidden="true">#</a> 注册为系统服务</h4><p>注册为系统服务后，可以以系统服务的方式启动 nginx</p><p>在如下位置创建服务脚本 nginx.service</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /usr/lib/systemd/system/nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>服务脚本内容如下(注意路径要对应，这里的路径是/usr/local/nginx/sbin)：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx - web server
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target remote-fs.target nss-lookup.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/usr/local/nginx/logs/nginx.pid
<span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-t</span> <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> stop
<span class="token assign-left variable">ExecQuit</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> quit
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新加载系统服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开机启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启 Nginx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl reload nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="访问" tabindex="-1"><a class="header-anchor" href="#访问" aria-hidden="true">#</a> 访问</h4><figure><img src="`+o+`" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="查看-nginx-状态" tabindex="-1"><a class="header-anchor" href="#查看-nginx-状态" aria-hidden="true">#</a> 查看 Nginx 状态</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="yum-安装" tabindex="-1"><a class="header-anchor" href="#yum-安装" aria-hidden="true">#</a> yum 安装</h3><h4 id="nginx-到-yum-源" tabindex="-1"><a class="header-anchor" href="#nginx-到-yum-源" aria-hidden="true">#</a> Nginx 到 yum 源</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看是否已经添加成功" tabindex="-1"><a class="header-anchor" href="#查看是否已经添加成功" aria-hidden="true">#</a> 查看是否已经添加成功</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum search nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx" aria-hidden="true">#</a> 安装 Nginx</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="验证-nginx-安装是否成功" tabindex="-1"><a class="header-anchor" href="#验证-nginx-安装是否成功" aria-hidden="true">#</a> 验证 nginx 安装是否成功</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看nginx安装版本，-V可以看到nginx的安装的文件路径</span>
nginx <span class="token parameter variable">-V</span>

<span class="token comment"># 查看安装的nginx的版本</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx启动、设置开机自启、查看运行状态、停止、重启命令" tabindex="-1"><a class="header-anchor" href="#nginx启动、设置开机自启、查看运行状态、停止、重启命令" aria-hidden="true">#</a> Nginx启动、设置开机自启、查看运行状态、停止、重启命令</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start nginx
systemctl <span class="token builtin class-name">enable</span> nginx
systemctl status nginx
systemctl stop nginx
systemctl reload nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看安装信息" tabindex="-1"><a class="header-anchor" href="#查看安装信息" aria-hidden="true">#</a> 查看安装信息</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ql</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Nginx配置文件</span>
/etc/nginx/nginx.conf <span class="token comment"># nginx 主配置文件</span>
/etc/nginx/nginx.conf.default

<span class="token comment"># 可执行程序文件</span>
/usr/bin/nginx-upgrade
/usr/sbin/nginx

<span class="token comment"># nginx库文件</span>
/usr/lib/systemd/system/nginx.service <span class="token comment"># 用于配置系统守护进程</span>
/usr/lib64/nginx/modules <span class="token comment"># Nginx模块目录</span>

<span class="token comment"># 帮助文档</span>
/usr/share/doc/nginx-1.16.1
/usr/share/doc/nginx-1.16.1/CHANGES
/usr/share/doc/nginx-1.16.1/README
/usr/share/doc/nginx-1.16.1/README.dynamic
/usr/share/doc/nginx-1.16.1/UPGRADE-NOTES-1.6-to-1.10

<span class="token comment"># 静态资源目录</span>
/usr/share/nginx/html/404.html
/usr/share/nginx/html/50x.html
/usr/share/nginx/html/index.html

<span class="token comment"># 存放Nginx日志文件</span>
/var/log/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43);function b(g,h){const s=i("ExternalLinkIcon");return l(),r("div",null,[v,n("p",null,[n("a",u,[d("https://nginx.org/en/download.html"),c(s)])]),m])}const f=e(p,[["render",b],["__file","01.安装.html.vue"]]);export{f as default};
