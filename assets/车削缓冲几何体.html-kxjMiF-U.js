import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as r,c as d,b as e,d as t,a as i,e as a,w as l}from"./app-C2aR6FVm.js";const B={};function g(A,s){const k=n("IFrame"),h=n("RouteLink");return r(),d("div",null,[s[4]||(s[4]=e(`<h2 id="lathegeometry" tabindex="-1"><a class="header-anchor" href="#lathegeometry"><span>LatheGeometry</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> points</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [];</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ( </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> points</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> THREE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Vector2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Math</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, ( </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ) );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> geometry</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> THREE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">LatheGeometry</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">points</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> );</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> material</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> THREE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">MeshBasicMaterial</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">color</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0xffff00</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } );</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> lathe</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> THREE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Mesh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">geometry</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">material</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">scene</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">lathe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> );</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),t(k,{url:"https://luotainxu-demo.netlify.app/#/threejs/geometry/latheGeometry"}),s[5]||(s[5]=e('<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器"><span>构造器</span></a></h2><h3 id="points-array" tabindex="-1"><a class="header-anchor" href="#points-array"><span>points : Array</span></a></h3><p>一个Vector2对象数组。每个点的X坐标必须大于0</p><h3 id="segments-integer" tabindex="-1"><a class="header-anchor" href="#segments-integer"><span>segments : Integer</span></a></h3><p>要生成的车削几何体圆周分段的数量，默认值是12</p><h3 id="phistart-float" tabindex="-1"><a class="header-anchor" href="#phistart-float"><span>phiStart : Float</span></a></h3><p>以弧度表示的起始角度，默认值为0</p><h3 id="philength-float" tabindex="-1"><a class="header-anchor" href="#philength-float"><span>phiLength : Float</span></a></h3><p>车削部分的弧度（0-2PI）范围，2PI将是一个完全闭合的、完整的车削几何体，小于2PI是部分的车削。默认值是2PI</p><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2>',10)),i("p",null,[s[1]||(s[1]=a("共有属性请参见其基类")),t(h,{to:"/threejs/%E5%87%A0%E4%BD%95%E4%BD%93/BufferGeometry.html"},{default:l(()=>s[0]||(s[0]=[a("BufferGeometry")])),_:1})]),s[6]||(s[6]=i("h3",{id:"parameters-object",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#parameters-object"},[i("span",null,".parameters : Object")])],-1)),s[7]||(s[7]=i("p",null,"一个包含着构造函数中每个参数的对象。在对象实例化之后，对该属性的任何修改都不会改变这个几何体",-1)),s[8]||(s[8]=i("h2",{id:"方法",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#方法"},[i("span",null,"方法")])],-1)),i("p",null,[s[3]||(s[3]=a("共有方法请参见其基类")),t(h,{to:"/threejs/%E5%87%A0%E4%BD%95%E4%BD%93/BufferGeometry.html"},{default:l(()=>s[2]||(s[2]=[a("BufferGeometry")])),_:1})])])}const c=p(B,[["render",g],["__file","车削缓冲几何体.html.vue"]]),C=JSON.parse('{"path":"/threejs/%E5%87%A0%E4%BD%95%E4%BD%93/%E8%BD%A6%E5%89%8A%E7%BC%93%E5%86%B2%E5%87%A0%E4%BD%95%E4%BD%93.html","title":"LatheGeometry(车削缓冲几何体)","lang":"zh-CN","frontmatter":{"title":"LatheGeometry(车削缓冲几何体)","icon":"markdown","order":8,"date":"2023-03-10T00:00:00.000Z","category":["threejs"],"tag":["几何体"],"description":"LatheGeometry","head":[["meta",{"property":"og:url","content":"https://luotianxu1.github.io/threejs/%E5%87%A0%E4%BD%95%E4%BD%93/%E8%BD%A6%E5%89%8A%E7%BC%93%E5%86%B2%E5%87%A0%E4%BD%95%E4%BD%93.html"}],["meta",{"property":"og:title","content":"LatheGeometry(车削缓冲几何体)"}],["meta",{"property":"og:description","content":"LatheGeometry"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-11T09:24:37.000Z"}],["meta",{"property":"article:author","content":"罗天旭"}],["meta",{"property":"article:tag","content":"几何体"}],["meta",{"property":"article:published_time","content":"2023-03-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-11T09:24:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"LatheGeometry(车削缓冲几何体)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-11T09:24:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"罗天旭\\",\\"url\\":\\"https://luotianxu1.github.io\\",\\"email\\":\\"1265062404@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"LatheGeometry","slug":"lathegeometry","link":"#lathegeometry","children":[]},{"level":2,"title":"构造器","slug":"构造器","link":"#构造器","children":[{"level":3,"title":"points : Array","slug":"points-array","link":"#points-array","children":[]},{"level":3,"title":"segments : Integer","slug":"segments-integer","link":"#segments-integer","children":[]},{"level":3,"title":"phiStart : Float","slug":"phistart-float","link":"#phistart-float","children":[]},{"level":3,"title":"phiLength : Float","slug":"philength-float","link":"#philength-float","children":[]}]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[{"level":3,"title":".parameters : Object","slug":"parameters-object","link":"#parameters-object","children":[]}]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[]}],"git":{"createdTime":1726046677000,"updatedTime":1726046677000,"contributors":[{"name":"罗天旭","email":"1265062404@qq.com","commits":1}]},"readingTime":{"minutes":0.87,"words":262},"filePathRelative":"threejs/几何体/车削缓冲几何体.md","localizedDate":"2023年3月10日","excerpt":"<h2>LatheGeometry</h2>\\n<div class=\\"language-js line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"js\\" data-title=\\"js\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> points</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> [];</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">for</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> ( </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">let</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> i</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 0</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">; </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">i</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> &lt;</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 10</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">; </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">i</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> ++</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> ) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> points</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">push</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">( </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">new</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> THREE</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">Vector2</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">( </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">Math</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">sin</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">( </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">i</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> *</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 0.2</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> ) </span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">*</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 10</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> +</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 5</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, ( </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">i</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> -</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 5</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> ) </span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">*</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 2</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> ) );</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> geometry</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> new</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> THREE</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">LatheGeometry</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">( </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">points</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> );</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> material</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> new</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> THREE</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">MeshBasicMaterial</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">( { </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">color</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 0xffff00</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> } );</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> lathe</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> new</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> THREE</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">Mesh</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">( </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">geometry</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">material</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> );</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">scene</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">add</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">( </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">lathe</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> );</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{c as comp,C as data};
