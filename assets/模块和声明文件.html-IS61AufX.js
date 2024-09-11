import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,b as e}from"./app-C2aR6FVm.js";const l={};function n(h,i){return a(),t("div",null,i[0]||(i[0]=[e(`<h2 id="全局模块" tabindex="-1"><a class="header-anchor" href="#全局模块"><span>全局模块</span></a></h2><p>在默认情况下，当你开始在一个新的 TypeScript 文件中写下代码时，它处于全局命名空间中</p><p>使用全局变量空间是危险的，因为它会与文件内的代码命名冲突。我们推荐使用下文中将要提到的文件模块</p><p>foo.ts</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> foo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 123</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>bar.ts</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> bar</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> foo</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // allowed</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="文件模块" tabindex="-1"><a class="header-anchor" href="#文件模块"><span>文件模块</span></a></h2><ul><li>文件模块也被称为外部模块。如果在你的 TypeScript 文件的根级别位置含有 import 或者 export，那么它会在这个文件中创建一个本地的作用域</li><li>模块是 TS 中外部模块的简称，侧重于代码和复用</li><li>模块在其自身的作用域里执行，而不是在全局作用域里</li><li>一个模块里的变量、函数、类等在外部是不可见的，除非你把它导出</li><li>如果想要使用一个模块里导出的变量，则需要导入</li></ul><p>foo.ts</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> foo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 123</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>bar.ts</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> bar</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> foo</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // error</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="声明文件" tabindex="-1"><a class="header-anchor" href="#声明文件"><span>声明文件</span></a></h2><ul><li>我们可以把类型声明放在一个单独的类型声明文件中</li><li>文件命名规范为*.d.ts</li><li>查看类型声明文件有助于了解库的使用方式</li></ul><p>typings\\jquery.d.ts</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">declare</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> $</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">selector</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> void</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    width</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">length</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> void</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第三方声明文件" tabindex="-1"><a class="header-anchor" href="#第三方声明文件"><span>第三方声明文件</span></a></h2><ul><li>可以安装使用第三方的声明文件</li><li>@types 是一个约定的前缀，所有的第三方声明的类型库都会带有这样的前缀</li><li>JavaScript 中有很多内置对象，它们可以在 TypeScript 中被当做声明好了的类型</li><li>内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准</li><li>这些内置对象的类型声明文件，就包含在 TypeScript 核心库的类型声明文件中,具体可以查看ts 核心声明文件</li></ul><h2 id="查找声明文件" tabindex="-1"><a class="header-anchor" href="#查找声明文件"><span>查找声明文件</span></a></h2><ul><li>如果是手动写的声明文件，那么需要满足以下条件之一，才能被正确的识别</li><li>给 package.json 中的 types 或 typings 字段指定一个类型声明文件地址</li><li>在项目根目录下，编写一个 index.d.ts 文件</li><li>针对入口文件（package.json 中的 main 字段指定的入口文件），编写一个同名不同后缀的 .d.ts 文件</li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;myLib&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1.0.0&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;main&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;lib/index.js&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;types&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;myLib.d.ts&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找过程如下：</p><p>1.先找 myLib.d.ts</p><p>2.没有就再找 index.d.ts</p><p>3.还没有再找 lib/index.d.js</p><p>4.还找不到就认为没有类型声明了</p>`,27)]))}const k=s(l,[["render",n],["__file","模块和声明文件.html.vue"]]),d=JSON.parse('{"path":"/study/Typescript/%E6%A8%A1%E5%9D%97%E5%92%8C%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6.html","title":"模块和声明文件","lang":"zh-CN","frontmatter":{"title":"模块和声明文件","icon":"typescript","order":10,"date":"2023-12-14T00:00:00.000Z","category":["Typescript"],"tag":["模块和声明文件"],"description":"全局模块 在默认情况下，当你开始在一个新的 TypeScript 文件中写下代码时，它处于全局命名空间中 使用全局变量空间是危险的，因为它会与文件内的代码命名冲突。我们推荐使用下文中将要提到的文件模块 foo.ts bar.ts 文件模块 文件模块也被称为外部模块。如果在你的 TypeScript 文件的根级别位置含有 import 或者 export...","head":[["meta",{"property":"og:url","content":"https://luotianxu1.github.io/study/Typescript/%E6%A8%A1%E5%9D%97%E5%92%8C%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6.html"}],["meta",{"property":"og:title","content":"模块和声明文件"}],["meta",{"property":"og:description","content":"全局模块 在默认情况下，当你开始在一个新的 TypeScript 文件中写下代码时，它处于全局命名空间中 使用全局变量空间是危险的，因为它会与文件内的代码命名冲突。我们推荐使用下文中将要提到的文件模块 foo.ts bar.ts 文件模块 文件模块也被称为外部模块。如果在你的 TypeScript 文件的根级别位置含有 import 或者 export..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-11T09:24:37.000Z"}],["meta",{"property":"article:author","content":"罗天旭"}],["meta",{"property":"article:tag","content":"模块和声明文件"}],["meta",{"property":"article:published_time","content":"2023-12-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-11T09:24:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"模块和声明文件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-11T09:24:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"罗天旭\\",\\"url\\":\\"https://luotianxu1.github.io\\",\\"email\\":\\"1265062404@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"全局模块","slug":"全局模块","link":"#全局模块","children":[]},{"level":2,"title":"文件模块","slug":"文件模块","link":"#文件模块","children":[]},{"level":2,"title":"声明文件","slug":"声明文件","link":"#声明文件","children":[]},{"level":2,"title":"第三方声明文件","slug":"第三方声明文件","link":"#第三方声明文件","children":[]},{"level":2,"title":"查找声明文件","slug":"查找声明文件","link":"#查找声明文件","children":[]}],"git":{"createdTime":1726046677000,"updatedTime":1726046677000,"contributors":[{"name":"罗天旭","email":"1265062404@qq.com","commits":1}]},"readingTime":{"minutes":2.21,"words":662},"filePathRelative":"study/Typescript/模块和声明文件.md","localizedDate":"2023年12月14日","excerpt":"<h2>全局模块</h2>\\n<p>在默认情况下，当你开始在一个新的 TypeScript 文件中写下代码时，它处于全局命名空间中</p>\\n<p>使用全局变量空间是危险的，因为它会与文件内的代码命名冲突。我们推荐使用下文中将要提到的文件模块</p>\\n<p>foo.ts</p>\\n<div class=\\"language-ts line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"ts\\" data-title=\\"ts\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> foo</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 123</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{k as comp,d as data};
