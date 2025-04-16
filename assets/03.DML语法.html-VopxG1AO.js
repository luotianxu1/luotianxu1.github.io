import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,b as l}from"./app-yfkt0gmh.js";const t={};function n(h,i){return e(),a("div",null,i[0]||(i[0]=[l(`<blockquote><p>针对数据表中的记录进行增、删、改操作</p></blockquote><h2 id="添加数据" tabindex="-1"><a class="header-anchor" href="#添加数据"><span>添加数据</span></a></h2><h3 id="给指定列添加数据" tabindex="-1"><a class="header-anchor" href="#给指定列添加数据"><span>给指定列添加数据</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表名(列名1,列名2) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (值1,值2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="给全部列添加数据" tabindex="-1"><a class="header-anchor" href="#给全部列添加数据"><span>给全部列添加数据</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表名 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (值1,值2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="批量添加数据" tabindex="-1"><a class="header-anchor" href="#批量添加数据"><span>批量添加数据</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表名(列名1,列名2) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (值1,值2),(值1,值2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="修改数据" tabindex="-1"><a class="header-anchor" href="#修改数据"><span>修改数据</span></a></h2><h3 id="不带条件的更新数据库记录" tabindex="-1"><a class="header-anchor" href="#不带条件的更新数据库记录"><span>不带条件的更新数据库记录</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">UPDATE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表名 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 字段名</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">新值</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="带条件的更新数据库记录" tabindex="-1"><a class="header-anchor" href="#带条件的更新数据库记录"><span>带条件的更新数据库记录</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">UPDATE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表名 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 字段名</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">新值 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 条件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="删除" tabindex="-1"><a class="header-anchor" href="#删除"><span>删除</span></a></h2><h3 id="删除指定记录" tabindex="-1"><a class="header-anchor" href="#删除指定记录"><span>删除指定记录</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DELETE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表名 </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[WHERE 条件]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="删除表中所有记录" tabindex="-1"><a class="header-anchor" href="#删除表中所有记录"><span>删除表中所有记录</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DELETE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表名</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">TRUNCATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 表名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>delete和truncate的区别</p><ul><li>delete是逐行删除表中的记录(删除所有的记录：一行一行删除)</li><li>truncate是先执行drop table 表，再执行create table 表(先删除表，再创建一张相同结构的表)</li></ul>`,20)]))}const k=s(t,[["render",n],["__file","03.DML语法.html.vue"]]),p=JSON.parse('{"path":"/study/mysql/03.DML%E8%AF%AD%E6%B3%95.html","title":"DML语法","lang":"zh-CN","frontmatter":{"title":"DML语法","icon":"mysql","order":3,"category":["Mysql"],"tag":["Mysql"],"description":"针对数据表中的记录进行增、删、改操作 添加数据 给指定列添加数据 给全部列添加数据 批量添加数据 修改数据 不带条件的更新数据库记录 带条件的更新数据库记录 删除 删除指定记录 删除表中所有记录 delete和truncate的区别 delete是逐行删除表中的记录(删除所有的记录：一行一行删除) truncate是先执行drop table 表，再执...","head":[["meta",{"property":"og:url","content":"https://luotianxu1.github.io/study/mysql/03.DML%E8%AF%AD%E6%B3%95.html"}],["meta",{"property":"og:title","content":"DML语法"}],["meta",{"property":"og:description","content":"针对数据表中的记录进行增、删、改操作 添加数据 给指定列添加数据 给全部列添加数据 批量添加数据 修改数据 不带条件的更新数据库记录 带条件的更新数据库记录 删除 删除指定记录 删除表中所有记录 delete和truncate的区别 delete是逐行删除表中的记录(删除所有的记录：一行一行删除) truncate是先执行drop table 表，再执..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-16T07:57:53.000Z"}],["meta",{"property":"article:author","content":"罗天旭"}],["meta",{"property":"article:tag","content":"Mysql"}],["meta",{"property":"article:modified_time","content":"2025-04-16T07:57:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DML语法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-16T07:57:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"罗天旭\\",\\"url\\":\\"https://luotianxu1.github.io\\",\\"email\\":\\"1265062404@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"添加数据","slug":"添加数据","link":"#添加数据","children":[{"level":3,"title":"给指定列添加数据","slug":"给指定列添加数据","link":"#给指定列添加数据","children":[]},{"level":3,"title":"给全部列添加数据","slug":"给全部列添加数据","link":"#给全部列添加数据","children":[]},{"level":3,"title":"批量添加数据","slug":"批量添加数据","link":"#批量添加数据","children":[]}]},{"level":2,"title":"修改数据","slug":"修改数据","link":"#修改数据","children":[{"level":3,"title":"不带条件的更新数据库记录","slug":"不带条件的更新数据库记录","link":"#不带条件的更新数据库记录","children":[]},{"level":3,"title":"带条件的更新数据库记录","slug":"带条件的更新数据库记录","link":"#带条件的更新数据库记录","children":[]}]},{"level":2,"title":"删除","slug":"删除","link":"#删除","children":[{"level":3,"title":"删除指定记录","slug":"删除指定记录","link":"#删除指定记录","children":[]},{"level":3,"title":"删除表中所有记录","slug":"删除表中所有记录","link":"#删除表中所有记录","children":[]}]}],"git":{"createdTime":1744790273000,"updatedTime":1744790273000,"contributors":[{"name":"罗天旭","email":"1265062404@qq.com","commits":1}]},"readingTime":{"minutes":0.82,"words":246},"filePathRelative":"study/mysql/03.DML语法.md","localizedDate":"2025年4月16日","excerpt":"<blockquote>\\n<p>针对数据表中的记录进行增、删、改操作</p>\\n</blockquote>\\n<h2>添加数据</h2>\\n<h3>给指定列添加数据</h3>\\n<div class=\\"language-sql line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sql\\" data-title=\\"sql\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">INSERT INTO</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> 表名(列名1,列名2) </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">VALUES</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> (值1,值2)</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{k as comp,p as data};
