import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,b as l}from"./app-yfkt0gmh.js";const h={};function n(t,i){return a(),e("div",null,i[0]||(i[0]=[l(`<blockquote><p>操作数据库、数据表(创建、修改、删除)</p></blockquote><h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库"><span>数据库</span></a></h2><h3 id="查询" tabindex="-1"><a class="header-anchor" href="#查询"><span>查询</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">SHOW DATABASES</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="创建" tabindex="-1"><a class="header-anchor" href="#创建"><span>创建</span></a></h3><h4 id="创建数据库" tabindex="-1"><a class="header-anchor" href="#创建数据库"><span>创建数据库</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DATABASE</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> 库名称</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="创建数据库-判断-如果不存在则创建" tabindex="-1"><a class="header-anchor" href="#创建数据库-判断-如果不存在则创建"><span>创建数据库(判断，如果不存在则创建)</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DATABASE</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> IF</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> NOT</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> EXISTS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 库名称</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除"><span>删除</span></a></h3><h4 id="删除数据库" tabindex="-1"><a class="header-anchor" href="#删除数据库"><span>删除数据库</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DROP</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DATABASE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 库名称</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="删除数据库-判断-如果存在则删除" tabindex="-1"><a class="header-anchor" href="#删除数据库-判断-如果存在则删除"><span>删除数据库(判断，如果存在则删除)</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DROP</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DATABASE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> IF</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> EXISTS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 库名称</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><h4 id="查看当前使用的数据库" tabindex="-1"><a class="header-anchor" href="#查看当前使用的数据库"><span>查看当前使用的数据库</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DATABASE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="使用数据库" tabindex="-1"><a class="header-anchor" href="#使用数据库"><span>使用数据库</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">USE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 库名称</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="数据表" tabindex="-1"><a class="header-anchor" href="#数据表"><span>数据表</span></a></h2><h3 id="查询-1" tabindex="-1"><a class="header-anchor" href="#查询-1"><span>查询</span></a></h3><h4 id="查看当前数据库下所有表" tabindex="-1"><a class="header-anchor" href="#查看当前数据库下所有表"><span>查看当前数据库下所有表</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">SHOW TABLES</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="查看表结构" tabindex="-1"><a class="header-anchor" href="#查看表结构"><span>查看表结构</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DESC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表名称</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="创建-1" tabindex="-1"><a class="header-anchor" href="#创建-1"><span>创建</span></a></h3><h4 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表"><span>创建表</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> student</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> VARCHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">), #VARCHAR属于可变长度的字符串 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VARCHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 存储</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;女&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">，就只占用1个(最多不能超过2个)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> gender </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">), #CHAR属于固定长度的字符串 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 存储</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;男&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,缺少的字符会补充空格(占用2个)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> birthday </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DATE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> source DOUBLE,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> email </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VARCHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">64</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tel </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VARCHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> status</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> INT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> #使用数字表示 0是正常 1是休学</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表"><span>删除表</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DROP</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="删除表-判断-如果存在则删除" tabindex="-1"><a class="header-anchor" href="#删除表-判断-如果存在则删除"><span>删除表(判断，如果存在则删除)</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DROP</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> IF</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> EXISTS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="修改" tabindex="-1"><a class="header-anchor" href="#修改"><span>修改</span></a></h3><h4 id="修改表名" tabindex="-1"><a class="header-anchor" href="#修改表名"><span>修改表名</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ALTER</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表名 RENAME </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">TO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 新表名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="添加一列" tabindex="-1"><a class="header-anchor" href="#添加一列"><span>添加一列</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ALTER</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表名 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ADD</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 列名 数据类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="修改数据类型" tabindex="-1"><a class="header-anchor" href="#修改数据类型"><span>修改数据类型</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ALTER</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表名 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">MODIFY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 列名 数据类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="修改列明和数据类型" tabindex="-1"><a class="header-anchor" href="#修改列明和数据类型"><span>修改列明和数据类型</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ALTER</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表名 CHANGE 列名 新列名 新数据类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="删除列" tabindex="-1"><a class="header-anchor" href="#删除列"><span>删除列</span></a></h4><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ALTER</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表名 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DROP</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 列名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,43)]))}const k=s(h,[["render",n],["__file","02.DDL语法.html.vue"]]),p=JSON.parse('{"path":"/study/mysql/02.DDL%E8%AF%AD%E6%B3%95.html","title":"DDL语法","lang":"zh-CN","frontmatter":{"title":"DDL语法","icon":"mysql","order":2,"category":["Mysql"],"tag":["Mysql"],"description":"操作数据库、数据表(创建、修改、删除) 数据库 查询 创建 创建数据库 创建数据库(判断，如果不存在则创建) 删除 删除数据库 删除数据库(判断，如果存在则删除) 使用 查看当前使用的数据库 使用数据库 数据表 查询 查看当前数据库下所有表 查看表结构 创建 创建表 删除表 删除表(判断，如果存在则删除) 修改 修改表名 添加一列 修改数据类型 修改列...","head":[["meta",{"property":"og:url","content":"https://luotianxu1.github.io/study/mysql/02.DDL%E8%AF%AD%E6%B3%95.html"}],["meta",{"property":"og:title","content":"DDL语法"}],["meta",{"property":"og:description","content":"操作数据库、数据表(创建、修改、删除) 数据库 查询 创建 创建数据库 创建数据库(判断，如果不存在则创建) 删除 删除数据库 删除数据库(判断，如果存在则删除) 使用 查看当前使用的数据库 使用数据库 数据表 查询 查看当前数据库下所有表 查看表结构 创建 创建表 删除表 删除表(判断，如果存在则删除) 修改 修改表名 添加一列 修改数据类型 修改列..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-16T07:57:53.000Z"}],["meta",{"property":"article:author","content":"罗天旭"}],["meta",{"property":"article:tag","content":"Mysql"}],["meta",{"property":"article:modified_time","content":"2025-04-16T07:57:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DDL语法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-16T07:57:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"罗天旭\\",\\"url\\":\\"https://luotianxu1.github.io\\",\\"email\\":\\"1265062404@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"数据库","slug":"数据库","link":"#数据库","children":[{"level":3,"title":"查询","slug":"查询","link":"#查询","children":[]},{"level":3,"title":"创建","slug":"创建","link":"#创建","children":[]},{"level":3,"title":"删除","slug":"删除","link":"#删除","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]},{"level":2,"title":"数据表","slug":"数据表","link":"#数据表","children":[{"level":3,"title":"查询","slug":"查询-1","link":"#查询-1","children":[]},{"level":3,"title":"创建","slug":"创建-1","link":"#创建-1","children":[]},{"level":3,"title":"修改","slug":"修改","link":"#修改","children":[]}]}],"git":{"createdTime":1744707905000,"updatedTime":1744790273000,"contributors":[{"name":"罗天旭","email":"1265062404@qq.com","commits":1}]},"readingTime":{"minutes":1.27,"words":380},"filePathRelative":"study/mysql/02.DDL语法.md","localizedDate":"2025年4月15日","excerpt":"<blockquote>\\n<p>操作数据库、数据表(创建、修改、删除)</p>\\n</blockquote>\\n<h2>数据库</h2>\\n<h3>查询</h3>\\n<div class=\\"language-sql line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sql\\" data-title=\\"sql\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">SHOW DATABASES</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{k as comp,p as data};
