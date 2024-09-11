import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as h,c,a,d as n,b as l,e as t,w as p}from"./app-C2aR6FVm.js";const d={};function f(m,e){const o=i("IFrame"),r=i("RouteLink");return h(),c("div",null,[e[4]||(e[4]=a("h2",{id:"meshbasicmaterial",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#meshbasicmaterial"},[a("span",null,"MeshBasicMaterial")])],-1)),e[5]||(e[5]=a("p",null,"一个以简单着色（平面或线框）方式来绘制几何体的材质。这种材质不受光照的影响。",-1)),n(o,{url:"https://luotainxu-demo.netlify.app/#/threejs/material/meshBasicMaterial"}),e[6]||(e[6]=l('<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器"><span>构造器</span></a></h2><h3 id="parameters-object" tabindex="-1"><a class="header-anchor" href="#parameters-object"><span>parameters : Object</span></a></h3><p>parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。材质的任何属性都可以从此处传入(包括从Material继承的任何属性)</p><p>属性color例外，其可以作为十六进制字符串传递，默认情况下为 0xffffff（白色），内部调用Color.set(color)</p><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2>',5)),a("p",null,[e[1]||(e[1]=t("共有属性请参见其基类")),n(r,{to:"/threejs/%E6%9D%90%E8%B4%A8/%E6%9D%90%E8%B4%A8.html"},{default:p(()=>e[0]||(e[0]=[t("Material")])),_:1})]),e[7]||(e[7]=l('<h3 id="alphamap-texture" tabindex="-1"><a class="header-anchor" href="#alphamap-texture"><span>.alphaMap : Texture</span></a></h3><p>alpha贴图是一张灰度纹理，用于控制整个表面的不透明度。（黑色：完全透明；白色：完全不透明）。 默认值为null</p><p>仅使用纹理的颜色，忽略alpha通道（如果存在）。 对于RGB和RGBA纹理，WebGL渲染器在采样此纹理时将使用绿色通道， 因为在DXT压缩和未压缩RGB 565格式中为绿色提供了额外的精度。 Luminance-only以及luminance/alpha纹理也仍然有效</p><h3 id="aomap-texture" tabindex="-1"><a class="header-anchor" href="#aomap-texture"><span>.aoMap : Texture</span></a></h3><p>该纹理的红色通道用作环境遮挡贴图。默认值为null。aoMap需要第二组UV</p><h3 id="aomapintensity-float" tabindex="-1"><a class="header-anchor" href="#aomapintensity-float"><span>.aoMapIntensity : Float</span></a></h3><p>环境遮挡效果的强度。默认值为1。零是不遮挡效果</p><h3 id="color-color" tabindex="-1"><a class="header-anchor" href="#color-color"><span>.color : Color</span></a></h3><p>材质的颜色(Color)，默认值为白色 (0xffffff)</p><h3 id="combine-integer" tabindex="-1"><a class="header-anchor" href="#combine-integer"><span>.combine : Integer</span></a></h3><p>如何将表面颜色的结果与环境贴图（如果有）结合起来</p><p>选项为THREE.MultiplyOperation（默认值），THREE.MixOperation， THREE.AddOperation。如果选择多个，则使用.reflectivity在两种颜色之间进行混合</p><h3 id="envmap-texture" tabindex="-1"><a class="header-anchor" href="#envmap-texture"><span>.envMap : Texture</span></a></h3><p>环境贴图。默认值为null。</p><h3 id="fog-boolean" tabindex="-1"><a class="header-anchor" href="#fog-boolean"><span>.fog : Boolean</span></a></h3><p>材质是否受雾影响。默认为true。</p><h3 id="lightmap-texture" tabindex="-1"><a class="header-anchor" href="#lightmap-texture"><span>.lightMap : Texture</span></a></h3><p>光照贴图。默认值为null。lightMap需要第二组UV。</p><h3 id="lightmapintensity-float" tabindex="-1"><a class="header-anchor" href="#lightmapintensity-float"><span>.lightMapIntensity : Float</span></a></h3><p>烘焙光的强度。默认值为1。</p><h3 id="map-texture" tabindex="-1"><a class="header-anchor" href="#map-texture"><span>.map : Texture</span></a></h3><p>颜色贴图。可以选择包括一个alpha通道，通常与.transparent 或.alphaTest。默认为null。</p><h3 id="reflectivity-float" tabindex="-1"><a class="header-anchor" href="#reflectivity-float"><span>.reflectivity : Float</span></a></h3><p>环境贴图对表面的影响程度; 见.combine。默认值为1，有效范围介于0（无反射）和1（完全反射）之间。</p><h3 id="refractionratio-float" tabindex="-1"><a class="header-anchor" href="#refractionratio-float"><span>.refractionRatio : Float</span></a></h3><p>空气的折射率（IOR）（约为1）除以材质的折射率。它与环境映射模式THREE.CubeRefractionMapping 和THREE.EquirectangularRefractionMapping一起使用。 The index of refraction (IOR) of air (approximately 1) divided by the index of refraction of the material. It is used with environment mapping mode THREE.CubeRefractionMapping. 折射率不应超过1。默认值为0.98。</p><h3 id="specularmap-texture" tabindex="-1"><a class="header-anchor" href="#specularmap-texture"><span>.specularMap : Texture</span></a></h3><p>材质使用的高光贴图。默认值为null。</p><h3 id="wireframe-boolean" tabindex="-1"><a class="header-anchor" href="#wireframe-boolean"><span>.wireframe : Boolean</span></a></h3><p>将几何体渲染为线框。默认值为false（即渲染为平面多边形）。</p><h3 id="wireframelinecap-string" tabindex="-1"><a class="header-anchor" href="#wireframelinecap-string"><span>.wireframeLinecap : String</span></a></h3><p>定义线两端的外观。可选值为 &#39;butt&#39;，&#39;round&#39; 和 &#39;square&#39;。默认为&#39;round&#39;。</p><p>该属性对应2D Canvas lineJoin属性， 并且会被WebGL渲染器忽略。</p><h3 id="wireframelinejoin-string" tabindex="-1"><a class="header-anchor" href="#wireframelinejoin-string"><span>.wireframeLinejoin : String</span></a></h3><p>定义线连接节点的样式。可选值为 &#39;round&#39;, &#39;bevel&#39; 和 &#39;miter&#39;。默认值为 &#39;round&#39;。</p><p>该属性对应2D Canvas lineJoin属性， 并且会被WebGL渲染器忽略。</p><h3 id="wireframelinewidth-float" tabindex="-1"><a class="header-anchor" href="#wireframelinewidth-float"><span>.wireframeLinewidth : Float</span></a></h3><p>控制线框宽度。默认值为1。</p><p>由于OpenGL Core Profile与大多数平台上WebGL渲染器的限制， 无论如何设置该值，线宽始终为1。</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2>',40)),a("p",null,[e[3]||(e[3]=t("共有方法请参见其基类")),n(r,{to:"/threejs/%E6%9D%90%E8%B4%A8/%E6%9D%90%E8%B4%A8.html"},{default:p(()=>e[2]||(e[2]=[t("Material")])),_:1})])])}const g=s(d,[["render",f],["__file","基础网格材质.html.vue"]]),b=JSON.parse(`{"path":"/threejs/%E6%9D%90%E8%B4%A8/%E5%9F%BA%E7%A1%80%E7%BD%91%E6%A0%BC%E6%9D%90%E8%B4%A8.html","title":"MeshBasicMaterial(基础网格材质)","lang":"zh-CN","frontmatter":{"title":"MeshBasicMaterial(基础网格材质)","icon":"markdown","order":3,"date":"2023-03-13T00:00:00.000Z","category":["threejs"],"tag":["材质"],"description":"MeshBasicMaterial 一个以简单着色（平面或线框）方式来绘制几何体的材质。这种材质不受光照的影响。","head":[["meta",{"property":"og:url","content":"https://luotianxu1.github.io/threejs/%E6%9D%90%E8%B4%A8/%E5%9F%BA%E7%A1%80%E7%BD%91%E6%A0%BC%E6%9D%90%E8%B4%A8.html"}],["meta",{"property":"og:title","content":"MeshBasicMaterial(基础网格材质)"}],["meta",{"property":"og:description","content":"MeshBasicMaterial 一个以简单着色（平面或线框）方式来绘制几何体的材质。这种材质不受光照的影响。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-11T09:24:37.000Z"}],["meta",{"property":"article:author","content":"罗天旭"}],["meta",{"property":"article:tag","content":"材质"}],["meta",{"property":"article:published_time","content":"2023-03-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-11T09:24:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MeshBasicMaterial(基础网格材质)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-11T09:24:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"罗天旭\\",\\"url\\":\\"https://luotianxu1.github.io\\",\\"email\\":\\"1265062404@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"MeshBasicMaterial","slug":"meshbasicmaterial","link":"#meshbasicmaterial","children":[]},{"level":2,"title":"构造器","slug":"构造器","link":"#构造器","children":[{"level":3,"title":"parameters : Object","slug":"parameters-object","link":"#parameters-object","children":[]}]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[{"level":3,"title":".alphaMap : Texture","slug":"alphamap-texture","link":"#alphamap-texture","children":[]},{"level":3,"title":".aoMap : Texture","slug":"aomap-texture","link":"#aomap-texture","children":[]},{"level":3,"title":".aoMapIntensity : Float","slug":"aomapintensity-float","link":"#aomapintensity-float","children":[]},{"level":3,"title":".color : Color","slug":"color-color","link":"#color-color","children":[]},{"level":3,"title":".combine : Integer","slug":"combine-integer","link":"#combine-integer","children":[]},{"level":3,"title":".envMap : Texture","slug":"envmap-texture","link":"#envmap-texture","children":[]},{"level":3,"title":".fog : Boolean","slug":"fog-boolean","link":"#fog-boolean","children":[]},{"level":3,"title":".lightMap : Texture","slug":"lightmap-texture","link":"#lightmap-texture","children":[]},{"level":3,"title":".lightMapIntensity : Float","slug":"lightmapintensity-float","link":"#lightmapintensity-float","children":[]},{"level":3,"title":".map : Texture","slug":"map-texture","link":"#map-texture","children":[]},{"level":3,"title":".reflectivity : Float","slug":"reflectivity-float","link":"#reflectivity-float","children":[]},{"level":3,"title":".refractionRatio : Float","slug":"refractionratio-float","link":"#refractionratio-float","children":[]},{"level":3,"title":".specularMap : Texture","slug":"specularmap-texture","link":"#specularmap-texture","children":[]},{"level":3,"title":".wireframe : Boolean","slug":"wireframe-boolean","link":"#wireframe-boolean","children":[]},{"level":3,"title":".wireframeLinecap : String","slug":"wireframelinecap-string","link":"#wireframelinecap-string","children":[]},{"level":3,"title":".wireframeLinejoin : String","slug":"wireframelinejoin-string","link":"#wireframelinejoin-string","children":[]},{"level":3,"title":".wireframeLinewidth : Float","slug":"wireframelinewidth-float","link":"#wireframelinewidth-float","children":[]}]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[]}],"git":{"createdTime":1726046677000,"updatedTime":1726046677000,"contributors":[{"name":"罗天旭","email":"1265062404@qq.com","commits":1}]},"readingTime":{"minutes":2.69,"words":806},"filePathRelative":"threejs/材质/基础网格材质.md","localizedDate":"2023年3月13日","excerpt":"<h2>MeshBasicMaterial</h2>\\n<p>一个以简单着色（平面或线框）方式来绘制几何体的材质。这种材质不受光照的影响。</p>\\n<iframe url=\\"https://luotainxu-demo.netlify.app/#/threejs/material/meshBasicMaterial\\">\\n<h2 id=\\"构造器\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#构造器\\"><span>构造器</span></a></h2>\\n<h3 id=\\"parameters-object\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#parameters-object\\"><span>parameters : Object</span></a></h3>\\n<p>parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。材质的任何属性都可以从此处传入(包括从Material继承的任何属性)</p>\\n<p>属性color例外，其可以作为十六进制字符串传递，默认情况下为 0xffffff（白色），内部调用Color.set(color)</p>\\n<h2 id=\\"属性\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#属性\\"><span>属性</span></a></h2>\\n<p>共有属性请参见其基类<RouteLink to=\\"/threejs/%E6%9D%90%E8%B4%A8/%E6%9D%90%E8%B4%A8.html\\">Material</RouteLink></p>\\n<h3 id=\\"alphamap-texture\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#alphamap-texture\\"><span>.alphaMap : Texture</span></a></h3>\\n<p>alpha贴图是一张灰度纹理，用于控制整个表面的不透明度。（黑色：完全透明；白色：完全不透明）。 默认值为null</p>\\n<p>仅使用纹理的颜色，忽略alpha通道（如果存在）。 对于RGB和RGBA纹理，WebGL渲染器在采样此纹理时将使用绿色通道， 因为在DXT压缩和未压缩RGB 565格式中为绿色提供了额外的精度。 Luminance-only以及luminance/alpha纹理也仍然有效</p>\\n<h3 id=\\"aomap-texture\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#aomap-texture\\"><span>.aoMap : Texture</span></a></h3>\\n<p>该纹理的红色通道用作环境遮挡贴图。默认值为null。aoMap需要第二组UV</p>\\n<h3 id=\\"aomapintensity-float\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#aomapintensity-float\\"><span>.aoMapIntensity : Float</span></a></h3>\\n<p>环境遮挡效果的强度。默认值为1。零是不遮挡效果</p>\\n<h3 id=\\"color-color\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#color-color\\"><span>.color : Color</span></a></h3>\\n<p>材质的颜色(Color)，默认值为白色 (0xffffff)</p>\\n<h3 id=\\"combine-integer\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#combine-integer\\"><span>.combine : Integer</span></a></h3>\\n<p>如何将表面颜色的结果与环境贴图（如果有）结合起来</p>\\n<p>选项为THREE.MultiplyOperation（默认值），THREE.MixOperation， THREE.AddOperation。如果选择多个，则使用.reflectivity在两种颜色之间进行混合</p>\\n<h3 id=\\"envmap-texture\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#envmap-texture\\"><span>.envMap : Texture</span></a></h3>\\n<p>环境贴图。默认值为null。</p>\\n<h3 id=\\"fog-boolean\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#fog-boolean\\"><span>.fog : Boolean</span></a></h3>\\n<p>材质是否受雾影响。默认为true。</p>\\n<h3 id=\\"lightmap-texture\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#lightmap-texture\\"><span>.lightMap : Texture</span></a></h3>\\n<p>光照贴图。默认值为null。lightMap需要第二组UV。</p>\\n<h3 id=\\"lightmapintensity-float\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#lightmapintensity-float\\"><span>.lightMapIntensity : Float</span></a></h3>\\n<p>烘焙光的强度。默认值为1。</p>\\n<h3 id=\\"map-texture\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#map-texture\\"><span>.map : Texture</span></a></h3>\\n<p>颜色贴图。可以选择包括一个alpha通道，通常与.transparent 或.alphaTest。默认为null。</p>\\n<h3 id=\\"reflectivity-float\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#reflectivity-float\\"><span>.reflectivity : Float</span></a></h3>\\n<p>环境贴图对表面的影响程度; 见.combine。默认值为1，有效范围介于0（无反射）和1（完全反射）之间。</p>\\n<h3 id=\\"refractionratio-float\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#refractionratio-float\\"><span>.refractionRatio : Float</span></a></h3>\\n<p>空气的折射率（IOR）（约为1）除以材质的折射率。它与环境映射模式THREE.CubeRefractionMapping 和THREE.EquirectangularRefractionMapping一起使用。 The index of refraction (IOR) of air (approximately 1) divided by the index of refraction of the material. It is used with environment mapping mode THREE.CubeRefractionMapping. 折射率不应超过1。默认值为0.98。</p>\\n<h3 id=\\"specularmap-texture\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#specularmap-texture\\"><span>.specularMap : Texture</span></a></h3>\\n<p>材质使用的高光贴图。默认值为null。</p>\\n<h3 id=\\"wireframe-boolean\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#wireframe-boolean\\"><span>.wireframe : Boolean</span></a></h3>\\n<p>将几何体渲染为线框。默认值为false（即渲染为平面多边形）。</p>\\n<h3 id=\\"wireframelinecap-string\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#wireframelinecap-string\\"><span>.wireframeLinecap : String</span></a></h3>\\n<p>定义线两端的外观。可选值为 'butt'，'round' 和 'square'。默认为'round'。</p>\\n<p>该属性对应2D Canvas lineJoin属性， 并且会被WebGL渲染器忽略。</p>\\n<h3 id=\\"wireframelinejoin-string\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#wireframelinejoin-string\\"><span>.wireframeLinejoin : String</span></a></h3>\\n<p>定义线连接节点的样式。可选值为 'round', 'bevel' 和 'miter'。默认值为 'round'。</p>\\n<p>该属性对应2D Canvas lineJoin属性， 并且会被WebGL渲染器忽略。</p>\\n<h3 id=\\"wireframelinewidth-float\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#wireframelinewidth-float\\"><span>.wireframeLinewidth : Float</span></a></h3>\\n<p>控制线框宽度。默认值为1。</p>\\n<p>由于OpenGL Core Profile与大多数平台上WebGL渲染器的限制， 无论如何设置该值，线宽始终为1。</p>\\n<h2 id=\\"方法\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#方法\\"><span>方法</span></a></h2>\\n<p>共有方法请参见其基类<RouteLink to=\\"/threejs/%E6%9D%90%E8%B4%A8/%E6%9D%90%E8%B4%A8.html\\">Material</RouteLink></p>\\n</iframe>","autoDesc":true}`);export{g as comp,b as data};
