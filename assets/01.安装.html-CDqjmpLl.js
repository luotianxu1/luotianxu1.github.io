import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as e}from"./app-C2aR6FVm.js";const l="/img/study/nginx/nginx.png",t="/img/study/nginx/nginx1.png",h={};function d(k,i){return a(),n("div",null,i[0]||(i[0]=[e('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><h3 id="源码安装" tabindex="-1"><a class="header-anchor" href="#源码安装"><span>源码安装</span></a></h3><h4 id="官网" tabindex="-1"><a class="header-anchor" href="#官网"><span>官网</span></a></h4><p><a href="https://nginx.org/en/download.html" target="_blank" rel="noopener noreferrer">https://nginx.org/en/download.html</a></p><figure><img src="'+l+`" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="解压-nginx-包" tabindex="-1"><a class="header-anchor" href="#解压-nginx-包"><span>解压 Nginx 包</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -zxvf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  nginx-1.21.6.tar.gz</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> #解压到当前目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx-1.21.6</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> #进入解压后的文件夹</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装依赖库" tabindex="-1"><a class="header-anchor" href="#安装依赖库"><span>安装依赖库</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pcre</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pcre-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zlib</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> zlib-devel</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="编译安装" tabindex="-1"><a class="header-anchor" href="#编译安装"><span>编译安装</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./configure</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --prefix=/usr/local/nginx</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # 指定编译选项，--prefix选项指定安装的目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # 编译</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # 安装编译结果</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动" tabindex="-1"><a class="header-anchor" href="#启动"><span>启动</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/nginx/sbin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # 里面是一个nginx的可执行文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./nginx</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> #   启动这个就是nginx的可执行文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     #快速停止</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> quit</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    #优雅关闭，在退出前完成已经接受的连接请求</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reload</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    #重新加载配置</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关闭防火墙" tabindex="-1"><a class="header-anchor" href="#关闭防火墙"><span>关闭防火墙</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> firewalld</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # 关闭防火墙</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="注册为系统服务" tabindex="-1"><a class="header-anchor" href="#注册为系统服务"><span>注册为系统服务</span></a></h4><p>注册为系统服务后，可以以系统服务的方式启动 nginx</p><p>在如下位置创建服务脚本 nginx.service</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/lib/systemd/system/nginx.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>服务脚本内容如下(注意路径要对应，这里的路径是/usr/local/nginx/sbin)：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Description</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nginx</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> web</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">After</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">network.target</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> remote-fs.target</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nss-lookup.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Type</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">forking</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PIDFile</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/nginx/logs/nginx.pid</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ExecStartPre</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -t</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ExecStart</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ExecReload</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reload</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ExecStop</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ExecQuit</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/usr/local/nginx/sbin/nginx</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> quit</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PrivateTmp</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">WantedBy</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">multi-user.target</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新加载系统服务</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> daemon-reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>启动服务</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>开机启动</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>重启 Nginx</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reload</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="访问" tabindex="-1"><a class="header-anchor" href="#访问"><span>访问</span></a></h4><figure><img src="`+t+`" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="查看-nginx-状态" tabindex="-1"><a class="header-anchor" href="#查看-nginx-状态"><span>查看 Nginx 状态</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -ef</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="yum-安装" tabindex="-1"><a class="header-anchor" href="#yum-安装"><span>yum 安装</span></a></h3><h4 id="nginx-到-yum-源" tabindex="-1"><a class="header-anchor" href="#nginx-到-yum-源"><span>Nginx 到 yum 源</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -Uvh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="查看是否已经添加成功" tabindex="-1"><a class="header-anchor" href="#查看是否已经添加成功"><span>查看是否已经添加成功</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> search</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx"><span>安装 Nginx</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="验证-nginx-安装是否成功" tabindex="-1"><a class="header-anchor" href="#验证-nginx-安装是否成功"><span>验证 nginx 安装是否成功</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#查看nginx安装版本，-V可以看到nginx的安装的文件路径</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -V</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看安装的nginx的版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -qa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx启动、设置开机自启、查看运行状态、停止、重启命令" tabindex="-1"><a class="header-anchor" href="#nginx启动、设置开机自启、查看运行状态、停止、重启命令"><span>Nginx启动、设置开机自启、查看运行状态、停止、重启命令</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reload</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看安装信息" tabindex="-1"><a class="header-anchor" href="#查看安装信息"><span>查看安装信息</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rpm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -ql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># Nginx配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/etc/nginx/nginx.conf</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # nginx 主配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/etc/nginx/nginx.conf.default</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 可执行程序文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/bin/nginx-upgrade</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/sbin/nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># nginx库文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/lib/systemd/system/nginx.service</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # 用于配置系统守护进程</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/lib64/nginx/modules</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # Nginx模块目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 帮助文档</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/share/doc/nginx-1.16.1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/share/doc/nginx-1.16.1/CHANGES</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/share/doc/nginx-1.16.1/README</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/share/doc/nginx-1.16.1/README.dynamic</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/share/doc/nginx-1.16.1/UPGRADE-NOTES-1.6-to-1.10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 静态资源目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/share/nginx/html/404.html</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/share/nginx/html/50x.html</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/share/nginx/html/index.html</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 存放Nginx日志文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/var/log/nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47)]))}const g=s(h,[["render",d],["__file","01.安装.html.vue"]]),c=JSON.parse('{"path":"/study/Nginx/01.%E5%AE%89%E8%A3%85.html","title":"安装","lang":"zh-CN","frontmatter":{"title":"安装","icon":"nginx","order":1,"date":"2024-06-05T00:00:00.000Z","category":["Nginx"],"tag":["Nginx"],"description":"安装 源码安装 官网 https://nginx.org/en/download.html 解压 Nginx 包 安装依赖库 编译安装 启动 关闭防火墙 注册为系统服务 注册为系统服务后，可以以系统服务的方式启动 nginx 在如下位置创建服务脚本 nginx.service 服务脚本内容如下(注意路径要对应，这里的路径是/usr/local/ngin...","head":[["meta",{"property":"og:url","content":"https://luotianxu1.github.io/study/Nginx/01.%E5%AE%89%E8%A3%85.html"}],["meta",{"property":"og:title","content":"安装"}],["meta",{"property":"og:description","content":"安装 源码安装 官网 https://nginx.org/en/download.html 解压 Nginx 包 安装依赖库 编译安装 启动 关闭防火墙 注册为系统服务 注册为系统服务后，可以以系统服务的方式启动 nginx 在如下位置创建服务脚本 nginx.service 服务脚本内容如下(注意路径要对应，这里的路径是/usr/local/ngin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://luotianxu1.github.io/img/study/nginx/nginx.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-11T09:24:37.000Z"}],["meta",{"property":"article:author","content":"罗天旭"}],["meta",{"property":"article:tag","content":"Nginx"}],["meta",{"property":"article:published_time","content":"2024-06-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-11T09:24:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装\\",\\"image\\":[\\"https://luotianxu1.github.io/img/study/nginx/nginx.png\\",\\"https://luotianxu1.github.io/img/study/nginx/nginx1.png\\"],\\"datePublished\\":\\"2024-06-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-11T09:24:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"罗天旭\\",\\"url\\":\\"https://luotianxu1.github.io\\",\\"email\\":\\"1265062404@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"源码安装","slug":"源码安装","link":"#源码安装","children":[]},{"level":3,"title":"yum 安装","slug":"yum-安装","link":"#yum-安装","children":[]}]}],"git":{"createdTime":1726046677000,"updatedTime":1726046677000,"contributors":[{"name":"罗天旭","email":"1265062404@qq.com","commits":1}]},"readingTime":{"minutes":1.86,"words":558},"filePathRelative":"study/Nginx/01.安装.md","localizedDate":"2024年6月5日","excerpt":"<h2>安装</h2>\\n<h3>源码安装</h3>\\n<h4>官网</h4>\\n<p><a href=\\"https://nginx.org/en/download.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://nginx.org/en/download.html</a></p>\\n<figure><img src=\\"/img/study/nginx/nginx.png\\" alt=\\" \\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption> </figcaption></figure>\\n<h4>解压 Nginx 包</h4>","autoDesc":true}');export{g as comp,c as data};
