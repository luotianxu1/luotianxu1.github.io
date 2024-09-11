import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as p,c as d,b as h,d as e,a as s,e as a,w as l}from"./app-C2aR6FVm.js";const B={};function y(g,i){const k=n("IFrame"),t=n("RouteLink");return p(),d("div",null,[i[4]||(i[4]=h(`<h2 id="wireframegeometry" tabindex="-1"><a class="header-anchor" href="#wireframegeometry"><span>WireframeGeometry</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> geometry</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> THREE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">SphereGeometry</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> );</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> wireframe</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> THREE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WireframeGeometry</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">geometry</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> );</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> line</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> THREE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">LineSegments</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">wireframe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">line</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">material</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">depthTest</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">line</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">material</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">opacity</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.25</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">line</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">material</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">transparent</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">scene</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">line</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> );</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),e(k,{url:"https://luotainxu-demo.netlify.app/#/threejs/geometry/wireframeGeometry"}),i[5]||(i[5]=h('<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器"><span>构造器</span></a></h2><h3 id="geometry-buffergeometry" tabindex="-1"><a class="header-anchor" href="#geometry-buffergeometry"><span>geometry : BufferGeometry</span></a></h3><p>任意几何体对象</p><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2>',4)),s("p",null,[i[1]||(i[1]=a("共有属性请参见其基类")),e(t,{to:"/threejs/%E5%87%A0%E4%BD%95%E4%BD%93/BufferGeometry.html"},{default:l(()=>i[0]||(i[0]=[a("BufferGeometry")])),_:1})]),i[6]||(i[6]=s("h2",{id:"方法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#方法"},[s("span",null,"方法")])],-1)),s("p",null,[i[3]||(i[3]=a("共有方法请参见其基类")),e(t,{to:"/threejs/%E5%87%A0%E4%BD%95%E4%BD%93/BufferGeometry.html"},{default:l(()=>i[2]||(i[2]=[a("BufferGeometry")])),_:1})])])}const m=r(B,[["render",y],["__file","网格几何体.html.vue"]]),c=JSON.parse('{"path":"/threejs/%E5%87%A0%E4%BD%95%E4%BD%93/%E7%BD%91%E6%A0%BC%E5%87%A0%E4%BD%95%E4%BD%93.html","title":"WireframeGeometry(网格几何体)","lang":"zh-CN","frontmatter":{"title":"WireframeGeometry(网格几何体)","icon":"markdown","order":19,"date":"2023-03-10T00:00:00.000Z","category":["threejs"],"tag":["几何体"],"description":"WireframeGeometry","head":[["meta",{"property":"og:url","content":"https://luotianxu1.github.io/threejs/%E5%87%A0%E4%BD%95%E4%BD%93/%E7%BD%91%E6%A0%BC%E5%87%A0%E4%BD%95%E4%BD%93.html"}],["meta",{"property":"og:title","content":"WireframeGeometry(网格几何体)"}],["meta",{"property":"og:description","content":"WireframeGeometry"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-11T09:24:37.000Z"}],["meta",{"property":"article:author","content":"罗天旭"}],["meta",{"property":"article:tag","content":"几何体"}],["meta",{"property":"article:published_time","content":"2023-03-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-11T09:24:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WireframeGeometry(网格几何体)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-11T09:24:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"罗天旭\\",\\"url\\":\\"https://luotianxu1.github.io\\",\\"email\\":\\"1265062404@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"WireframeGeometry","slug":"wireframegeometry","link":"#wireframegeometry","children":[]},{"level":2,"title":"构造器","slug":"构造器","link":"#构造器","children":[{"level":3,"title":"geometry : BufferGeometry","slug":"geometry-buffergeometry","link":"#geometry-buffergeometry","children":[]}]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[]}],"git":{"createdTime":1726046677000,"updatedTime":1726046677000,"contributors":[{"name":"罗天旭","email":"1265062404@qq.com","commits":1}]},"readingTime":{"minutes":0.34,"words":103},"filePathRelative":"threejs/几何体/网格几何体.md","localizedDate":"2023年3月10日","excerpt":"<h2>WireframeGeometry</h2>\\n<div class=\\"language-js line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"js\\" data-title=\\"js\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> geometry</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> new</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> THREE</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">SphereGeometry</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">( </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">100</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">100</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">100</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> );</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> wireframe</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> new</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> THREE</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">WireframeGeometry</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">( </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">geometry</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> );</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> line</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> new</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> THREE</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">LineSegments</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">( </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">wireframe</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> );</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">line</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">material</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">depthTest</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> false</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">line</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">material</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">opacity</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 0.25</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">line</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\">material</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">transparent</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> true</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">scene</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">add</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">( </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">line</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> );</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{m as comp,c as data};
