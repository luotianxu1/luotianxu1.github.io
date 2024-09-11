import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as l,b as t}from"./app-C2aR6FVm.js";const e="/img/study/browser/url.png",n="/img/study/browser/url2.png",h="/img/study/browser/url3.png",p="/img/study/browser/url4.png",r="/img/study/browser/url5.png",d="/img/study/browser/url6.png",o="/img/study/browser/url7.png",c="/img/study/browser/url8.jpg",k="/img/study/browser/url9.jpg",g={};function u(m,i){return a(),l("div",null,i[0]||(i[0]=[t('<h2 id="大致流程" tabindex="-1"><a class="header-anchor" href="#大致流程"><span>大致流程</span></a></h2><ol><li>URL解析</li><li>DNS查询</li><li>TCP连接</li><li>处理请求</li><li>接受响应</li><li>渲染页面</li></ol><h2 id="一、url解析" tabindex="-1"><a class="header-anchor" href="#一、url解析"><span>一、URL解析</span></a></h2><p>URL（Uniform Resource Locator），统一资源定位符，用于定位互联网上资源，俗称网址。 比如 <a href="http://www.w3school.com.cn/html/index.asp" target="_blank" rel="noopener noreferrer">http://www.w3school.com.cn/html/index.asp</a>，遵守以下的语法规则：</p><p>scheme://host.domain:port/path/filename</p><p>各部分解释如下：</p><ul><li>scheme - 定义因特网服务的类型。常见的协议有 http、https、ftp、file，其中最常见的类型是 http，而 https 则是进行加密的网络传输。</li><li>host - 定义域主机（http 的默认主机是 www）</li><li>domain - 定义因特网域名，比如 w3school.com.cn</li><li>port - 定义主机上的端口号（http 的默认端口号是 80）</li><li>path - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）。</li><li>filename - 定义文档/资源的名称</li></ul><h3 id="_1、地址解析" tabindex="-1"><a class="header-anchor" href="#_1、地址解析"><span>1、地址解析</span></a></h3><p>首先判断输入的是一个合法的URL还是一个待搜索的关键词，并且根据你输入的内容进行自动完成、字符编码等操作。</p><h3 id="_2、hsts" tabindex="-1"><a class="header-anchor" href="#_2、hsts"><span>2、HSTS</span></a></h3><p>由于安全隐患，会使用 HSTS 强制客户端使用 HTTPS 访问页面。</p><h3 id="_3、其他操作" tabindex="-1"><a class="header-anchor" href="#_3、其他操作"><span>3、其他操作</span></a></h3><p>浏览器还会进行一些额外的操作，比如安全检查、访问限制（之前国产浏览器限制 996.icu）。</p><h3 id="_4、检查缓存" tabindex="-1"><a class="header-anchor" href="#_4、检查缓存"><span>4、检查缓存</span></a></h3><figure><img src="'+e+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="二、dns查询" tabindex="-1"><a class="header-anchor" href="#二、dns查询"><span>二、DNS查询</span></a></h2><p>基本步骤</p><figure><img src="'+n+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1、浏览器缓存" tabindex="-1"><a class="header-anchor" href="#_1、浏览器缓存"><span>1、浏览器缓存</span></a></h3><p>浏览器会先检查是否在缓存中，没有则调用系统库函数进行查询。</p><h3 id="_2、操作系统缓存" tabindex="-1"><a class="header-anchor" href="#_2、操作系统缓存"><span>2、操作系统缓存</span></a></h3><p>操作系统也有自己的 DNS缓存，但在这之前，会向检查域名是否存在本地的 Hosts 文件里，没有则向 DNS 服务器发送查询请求。</p><h3 id="_3、路由器缓存" tabindex="-1"><a class="header-anchor" href="#_3、路由器缓存"><span>3、路由器缓存</span></a></h3><p>路由器也有自己的缓存。</p><h3 id="_4、isp-dns-缓存" tabindex="-1"><a class="header-anchor" href="#_4、isp-dns-缓存"><span>4、ISP DNS 缓存</span></a></h3><p>ISP DNS 就是在客户端电脑上设置的首选 DNS 服务器，它们在大多数情况下都会有缓存。</p><h3 id="_5、根域名服务器查询" tabindex="-1"><a class="header-anchor" href="#_5、根域名服务器查询"><span>5、根域名服务器查询</span></a></h3><p>在前面所有步骤没有缓存的情况下，本地 DNS 服务器会将请求转发到互联网上的根域，下面这个图很好的诠释了整个流程：</p><figure><img src="'+h+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三、tcp连接" tabindex="-1"><a class="header-anchor" href="#三、tcp连接"><span>三、TCP连接</span></a></h2><p>TCP/IP 分为四层，在发送数据时，每层都要对数据进行封装：</p><figure><img src="'+p+`" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1、应用层-发送http请求" tabindex="-1"><a class="header-anchor" href="#_1、应用层-发送http请求"><span>1、应用层：发送HTTP请求</span></a></h3><p>在前面的步骤我们已经得到服务器的 IP 地址，浏览器会开始构造一个 HTTP 报文，其中包括：</p><ul><li>请求报头（Request Header）：请求方法、目标地址、遵循的协议等等</li><li>请求主体（其他参数）</li></ul><p>其中需要注意的点：</p><ul><li>浏览器只能发送 GET、POST 方法，而打开网页使用的是 GET 方法</li></ul><h3 id="_2、传输层-tcp传输报文" tabindex="-1"><a class="header-anchor" href="#_2、传输层-tcp传输报文"><span>2、传输层：TCP传输报文</span></a></h3><p>传输层会发起一条到达服务器的 TCP 连接，为了方便传输，会对数据进行分割（以报文段为单位），并标记编号，方便服务器接受时能够准确地还原报文信息。</p><p>在建立连接前，会先进行 TCP 三次握手。</p><h3 id="_3、网络层-ip协议查询mac地址" tabindex="-1"><a class="header-anchor" href="#_3、网络层-ip协议查询mac地址"><span>3、网络层：IP协议查询Mac地址</span></a></h3><p>将数据段打包，并加入源及目标的IP地址，并且负责寻找传输路线。</p><p>判断目标地址是否与当前地址处于同一网络中，是的话直接根据 Mac 地址发送，否则使用路由表查找下一跳地址，以及使用 ARP 协议查询它的 Mac 地址。</p><h3 id="_4、链路层-以太网协议" tabindex="-1"><a class="header-anchor" href="#_4、链路层-以太网协议"><span>4、链路层：以太网协议</span></a></h3><ul><li>以太网协议</li></ul><p>根据以太网协议将数据分为以“帧”为单位的数据包，每一帧分为两个部分：</p><pre><code>- 标头：数据包的发送者、接受者、数据类型
- 数据：数据包具体内容
</code></pre><ul><li>Mac 地址</li></ul><p>以太网规定了连入网络的所有设备都必须具备“网卡”接口，数据包都是从一块网卡传递到另一块网卡，网卡的地址就是 Mac 地址。每一个 Mac 地址都是独一无二的，具备了一对一的能力。</p><ul><li>广播</li></ul><p>发送数据的方法很原始，直接把数据通过 ARP 协议，向本网络的所有机器发送，接收方根据标头信息与自身 Mac 地址比较，一致就接受，否则丢弃。</p><h3 id="_5、服务器接受请求" tabindex="-1"><a class="header-anchor" href="#_5、服务器接受请求"><span>5、服务器接受请求</span></a></h3><p>接受过程就是把以上步骤逆转过来，参见上图。</p><h2 id="四、服务器处理请求" tabindex="-1"><a class="header-anchor" href="#四、服务器处理请求"><span>四、服务器处理请求</span></a></h2><figure><img src="`+r+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1、httpd" tabindex="-1"><a class="header-anchor" href="#_1、httpd"><span>1、HTTPD</span></a></h3><p>最常见的 HTTPD 有 Linux 上常用的 Apache 和 Nginx，以及 Windows 上的 IIS。它会监听得到的请求，然后开启一个子进程去处理这个请求。</p><h3 id="_2、处理请求" tabindex="-1"><a class="header-anchor" href="#_2、处理请求"><span>2、处理请求</span></a></h3><p>接受 TCP 报文后，会对连接进行处理，对HTTP协议进行解析（请求方法、域名、路径等），并且进行一些验证：</p><ul><li>验证是否配置虚拟主机</li><li>验证虚拟主机是否接受此方法</li><li>验证该用户可以使用该方法（根据 IP 地址、身份信息等）</li></ul><h3 id="_3、重定向" tabindex="-1"><a class="header-anchor" href="#_3、重定向"><span>3、重定向</span></a></h3><p>假如服务器配置了 HTTP 重定向，就会返回一个 301永久重定向响应，浏览器就会根据响应，重新发送 HTTP 请求（重新执行上面的过程）。</p><h3 id="_4、url重写" tabindex="-1"><a class="header-anchor" href="#_4、url重写"><span>4、URL重写</span></a></h3><p>然后会查看 URL 重写规则，如果请求的文件是真实存在的，比如图片、html、css、js文件等，则会直接把这个文件返回。否则服务器会按照规则把请求重写到一个REST风格的URL上。然后根据动态语言的脚本，来决定调用什么类型的动态文件解释器来处理这个请求。</p><h2 id="五、浏览器接受响应" tabindex="-1"><a class="header-anchor" href="#五、浏览器接受响应"><span>五、浏览器接受响应</span></a></h2><p>浏览器接收到来自服务器的响应资源后，会对资源进行分析。</p><p>首先查看 Response header，根据不同状态码做不同的事（比如上面提到的重定向）。</p><p>如果响应资源进行了压缩（比如 gzip），还需要进行解压。</p><p>然后，对响应资源做缓存。</p><p>接下来，根据响应资源里的 MIME 类型去解析响应内容（比如 HTML、Image各有不同的解析方式）。</p><h2 id="六、渲染页面" tabindex="-1"><a class="header-anchor" href="#六、渲染页面"><span>六、渲染页面</span></a></h2><figure><img src="'+d+`" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1、html解析" tabindex="-1"><a class="header-anchor" href="#_1、html解析"><span>1、HTML解析</span></a></h3><p>浏览器解析是从上往下一行一行地解析的。解析的过程可以分为四个步骤：</p><h4 id="_1-1、解码-encoding" tabindex="-1"><a class="header-anchor" href="#_1-1、解码-encoding"><span>1.1、解码（encoding）</span></a></h4><p>传输回来的其实都是一些二进制字节数据，浏览器需要根据文件指定编码（例如UTF-8）转换成字符串，也就是HTML 代码。</p><h4 id="_1-2、预解析-pre-parsing" tabindex="-1"><a class="header-anchor" href="#_1-2、预解析-pre-parsing"><span>1.2、预解析（pre-parsing）</span></a></h4><p>预解析做的事情是提前加载资源，减少处理时间，它会识别一些会请求资源的属性，比如img标签的src属性，并将这个请求加到请求队列中。</p><h4 id="_1-3、符号化-tokenization" tabindex="-1"><a class="header-anchor" href="#_1-3、符号化-tokenization"><span>1.3、符号化（Tokenization）</span></a></h4><p>符号化是词法分析的过程，将输入解析成符号，HTML 符号包括，开始标签、结束标签、属性名和属性值。</p><p>它通过一个状态机去识别符号的状态，比如遇到&lt;，&gt;状态都会产生变化。</p><h4 id="_1-4、构建树-tree-construction" tabindex="-1"><a class="header-anchor" href="#_1-4、构建树-tree-construction"><span>1.4、构建树（tree construction）</span></a></h4><p>在上一步符号化中，解析器获得这些标记，然后以合适的方法创建DOM对象并把这些符号插入到DOM对象中。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Web page parsing&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Web page parsing&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;This is an example Web page.&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>浏览器容错进制</li></ul><p>你从来没有在浏览器看过类似”语法无效”的错误，这是因为浏览器去纠正错误的语法，然后继续工作。</p><ul><li>事件</li></ul><p>当整个解析的过程完成以后，浏览器会通过DOMContentLoaded事件来通知DOM解析完成。</p><h3 id="_2、css解析" tabindex="-1"><a class="header-anchor" href="#_2、css解析"><span>2、CSS解析</span></a></h3><p>一旦浏览器下载了 CSS，CSS 解析器就会处理它遇到的任何 CSS，根据语法规范解析出所有的 CSS 并进行标记化，然后我们得到一个规则表。</p><ul><li>CSS 匹配规则</li></ul><p>在匹配一个节点对应的 CSS 规则时，是按照从右到左的顺序的，例如：<code>div p { font-size :14px }</code>会先寻找所有的p标签然后判断它的父元素是否为div。</p><p>所以我们写 CSS 时，尽量用 id 和 class，千万不要过度层叠。</p><h3 id="_3、渲染树" tabindex="-1"><a class="header-anchor" href="#_3、渲染树"><span>3、渲染树</span></a></h3><p>其实这就是一个 DOM 树和 CSS 规则树合并的过程。</p><blockquote><p>注意：渲染树会忽略那些不需要渲染的节点，比如设置了display:none的节点。</p></blockquote><figure><img src="'+c+'" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>计算</li></ul><p>通过计算让任何尺寸值都减少到三个可能之一：auto、百分比、px，比如把rem转化为px。</p><ul><li>级联</li></ul><p>浏览器需要一种方法来确定哪些样式才真正需要应用到对应元素，所以它使用一个叫做specificity的公式，这个公式会通过：</p><ol><li>!important</li><li>是否内联样式</li><li>id</li><li>class</li><li>标签名</li></ol><p>然后得出一个权重值，取最高的那个。</p><ul><li>渲染阻塞</li></ul><p>当遇到一个script标签时，DOM 构建会被暂停，直至脚本完成执行，然后继续构建 DOM 树。但如果 JS 依赖 CSS 样式，而它还没有被下载和构建时，浏览器就会延迟脚本执行，直至 CSS Rules 被构建。</p><ol><li>CSS 会阻塞 JS 执行</li><li>JS 会阻塞后面的 DOM 解析</li></ol><figure><img src="'+k+`" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>为了避免这种情况，应该以下原则：</p><ol><li>CSS 资源排在 JavaScript 资源前面</li><li>JS 放在 HTML 最底部，也就是<code>&lt;/body&gt;</code>前</li></ol><p>如果要改变阻塞模式，可以使用 defer 与 async</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;d.js&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> defer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;e.js&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> defer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>不阻止解析 document， 并行下载 d.js, e.js</li><li>即使下载完 d.js, e.js 仍继续解析 document</li><li>按照页面中出现的顺序，在其他同步脚本执行后，DOMContentLoaded 事件前 依次执行 d.js, e.js。</li></ol><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;b.js&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> async</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;c.js&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> async</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>不阻止解析 document, 并行下载 b.js, c.js</li><li>当脚本下载完后立即执行。（两者执行顺序不确定，执行阶段不确定，可能在 DOMContentLoaded 事件前或者后 ）</li></ol><blockquote><p>defer与async区别</p></blockquote><ol><li>两者都不会阻止 document 的解析</li><li>defer 会在 DOMContentLoaded 前依次执行 （可以利用这两点哦！）</li><li>async 则是下载完立即执行，不一定是在 DOMContentLoaded 前</li><li>async 因为顺序无关，所以很适合像 Google Analytics 这样的无依赖脚本</li></ol>`,117)]))}const _=s(g,[["render",u],["__file","输入URL过程.html.vue"]]),B=JSON.parse('{"path":"/study/%E6%B5%8F%E8%A7%88%E5%99%A8/%E8%BE%93%E5%85%A5URL%E8%BF%87%E7%A8%8B.html","title":"输入URL过程","lang":"zh-CN","frontmatter":{"title":"输入URL过程","icon":"liulanqi","order":1,"date":"2023-02-23T00:00:00.000Z","category":["浏览器"],"tag":["页面渲染"],"description":"大致流程 URL解析 DNS查询 TCP连接 处理请求 接受响应 渲染页面 一、URL解析 URL（Uniform Resource Locator），统一资源定位符，用于定位互联网上资源，俗称网址。 比如 http://www.w3school.com.cn/html/index.asp，遵守以下的语法规则： scheme://host.domain...","head":[["meta",{"property":"og:url","content":"https://luotianxu1.github.io/study/%E6%B5%8F%E8%A7%88%E5%99%A8/%E8%BE%93%E5%85%A5URL%E8%BF%87%E7%A8%8B.html"}],["meta",{"property":"og:title","content":"输入URL过程"}],["meta",{"property":"og:description","content":"大致流程 URL解析 DNS查询 TCP连接 处理请求 接受响应 渲染页面 一、URL解析 URL（Uniform Resource Locator），统一资源定位符，用于定位互联网上资源，俗称网址。 比如 http://www.w3school.com.cn/html/index.asp，遵守以下的语法规则： scheme://host.domain..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://luotianxu1.github.io/img/study/browser/url.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-11T09:24:37.000Z"}],["meta",{"property":"article:author","content":"罗天旭"}],["meta",{"property":"article:tag","content":"页面渲染"}],["meta",{"property":"article:published_time","content":"2023-02-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-11T09:24:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"输入URL过程\\",\\"image\\":[\\"https://luotianxu1.github.io/img/study/browser/url.png\\",\\"https://luotianxu1.github.io/img/study/browser/url2.png\\",\\"https://luotianxu1.github.io/img/study/browser/url3.png\\",\\"https://luotianxu1.github.io/img/study/browser/url4.png\\",\\"https://luotianxu1.github.io/img/study/browser/url5.png\\",\\"https://luotianxu1.github.io/img/study/browser/url6.png\\",\\"https://luotianxu1.github.io/img/study/browser/url7.png\\",\\"https://luotianxu1.github.io/img/study/browser/url8.jpg\\",\\"https://luotianxu1.github.io/img/study/browser/url9.jpg\\"],\\"datePublished\\":\\"2023-02-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-11T09:24:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"罗天旭\\",\\"url\\":\\"https://luotianxu1.github.io\\",\\"email\\":\\"1265062404@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"大致流程","slug":"大致流程","link":"#大致流程","children":[]},{"level":2,"title":"一、URL解析","slug":"一、url解析","link":"#一、url解析","children":[{"level":3,"title":"1、地址解析","slug":"_1、地址解析","link":"#_1、地址解析","children":[]},{"level":3,"title":"2、HSTS","slug":"_2、hsts","link":"#_2、hsts","children":[]},{"level":3,"title":"3、其他操作","slug":"_3、其他操作","link":"#_3、其他操作","children":[]},{"level":3,"title":"4、检查缓存","slug":"_4、检查缓存","link":"#_4、检查缓存","children":[]}]},{"level":2,"title":"二、DNS查询","slug":"二、dns查询","link":"#二、dns查询","children":[{"level":3,"title":"1、浏览器缓存","slug":"_1、浏览器缓存","link":"#_1、浏览器缓存","children":[]},{"level":3,"title":"2、操作系统缓存","slug":"_2、操作系统缓存","link":"#_2、操作系统缓存","children":[]},{"level":3,"title":"3、路由器缓存","slug":"_3、路由器缓存","link":"#_3、路由器缓存","children":[]},{"level":3,"title":"4、ISP DNS 缓存","slug":"_4、isp-dns-缓存","link":"#_4、isp-dns-缓存","children":[]},{"level":3,"title":"5、根域名服务器查询","slug":"_5、根域名服务器查询","link":"#_5、根域名服务器查询","children":[]}]},{"level":2,"title":"三、TCP连接","slug":"三、tcp连接","link":"#三、tcp连接","children":[{"level":3,"title":"1、应用层：发送HTTP请求","slug":"_1、应用层-发送http请求","link":"#_1、应用层-发送http请求","children":[]},{"level":3,"title":"2、传输层：TCP传输报文","slug":"_2、传输层-tcp传输报文","link":"#_2、传输层-tcp传输报文","children":[]},{"level":3,"title":"3、网络层：IP协议查询Mac地址","slug":"_3、网络层-ip协议查询mac地址","link":"#_3、网络层-ip协议查询mac地址","children":[]},{"level":3,"title":"4、链路层：以太网协议","slug":"_4、链路层-以太网协议","link":"#_4、链路层-以太网协议","children":[]},{"level":3,"title":"5、服务器接受请求","slug":"_5、服务器接受请求","link":"#_5、服务器接受请求","children":[]}]},{"level":2,"title":"四、服务器处理请求","slug":"四、服务器处理请求","link":"#四、服务器处理请求","children":[{"level":3,"title":"1、HTTPD","slug":"_1、httpd","link":"#_1、httpd","children":[]},{"level":3,"title":"2、处理请求","slug":"_2、处理请求","link":"#_2、处理请求","children":[]},{"level":3,"title":"3、重定向","slug":"_3、重定向","link":"#_3、重定向","children":[]},{"level":3,"title":"4、URL重写","slug":"_4、url重写","link":"#_4、url重写","children":[]}]},{"level":2,"title":"五、浏览器接受响应","slug":"五、浏览器接受响应","link":"#五、浏览器接受响应","children":[]},{"level":2,"title":"六、渲染页面","slug":"六、渲染页面","link":"#六、渲染页面","children":[{"level":3,"title":"1、HTML解析","slug":"_1、html解析","link":"#_1、html解析","children":[]},{"level":3,"title":"2、CSS解析","slug":"_2、css解析","link":"#_2、css解析","children":[]},{"level":3,"title":"3、渲染树","slug":"_3、渲染树","link":"#_3、渲染树","children":[]}]}],"git":{"createdTime":1726046677000,"updatedTime":1726046677000,"contributors":[{"name":"罗天旭","email":"1265062404@qq.com","commits":1}]},"readingTime":{"minutes":8.65,"words":2596},"filePathRelative":"study/浏览器/输入URL过程.md","localizedDate":"2023年2月23日","excerpt":"<h2>大致流程</h2>\\n<ol>\\n<li>URL解析</li>\\n<li>DNS查询</li>\\n<li>TCP连接</li>\\n<li>处理请求</li>\\n<li>接受响应</li>\\n<li>渲染页面</li>\\n</ol>\\n<h2>一、URL解析</h2>\\n<p>URL（Uniform Resource Locator），统一资源定位符，用于定位互联网上资源，俗称网址。\\n比如 <a href=\\"http://www.w3school.com.cn/html/index.asp\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">http://www.w3school.com.cn/html/index.asp</a>，遵守以下的语法规则：</p>","autoDesc":true}');export{_ as comp,B as data};
