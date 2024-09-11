import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as h,c as m,a,d as n,b as i,e as t,w as p}from"./app-C2aR6FVm.js";const d={};function c(f,e){const s=r("IFrame"),l=r("RouteLink");return h(),m("div",null,[e[4]||(e[4]=a("h2",{id:"meshnormalmaterial",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#meshnormalmaterial"},[a("span",null,"MeshNormalMaterial")])],-1)),e[5]||(e[5]=a("p",null,"一种把法向量映射到RGB颜色的材质。",-1)),n(s,{url:"https://luotainxu-demo.netlify.app/#/threejs/material/meshNormalMaterial"}),e[6]||(e[6]=i('<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器"><span>构造器</span></a></h2><h3 id="parameters-object" tabindex="-1"><a class="header-anchor" href="#parameters-object"><span>parameters : Object</span></a></h3><p>parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。材质的任何属性都可以从此处传入(包括从Material继承的任何属性)</p><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2>',4)),a("p",null,[e[1]||(e[1]=t("共有属性请参见其基类")),n(l,{to:"/threejs/%E6%9D%90%E8%B4%A8/%E6%9D%90%E8%B4%A8.html"},{default:p(()=>e[0]||(e[0]=[t("Material")])),_:1})]),e[7]||(e[7]=i('<h3 id="bumpmap-texture" tabindex="-1"><a class="header-anchor" href="#bumpmap-texture"><span>.bumpMap : Texture</span></a></h3><p>用于创建凹凸贴图的纹理。黑色和白色值映射到与光照相关的感知深度。凹凸实际上不会影响对象的几何形状，只影响光照。如果定义了法线贴图，则将忽略该贴图。</p><h3 id="bumpscale-float" tabindex="-1"><a class="header-anchor" href="#bumpscale-float"><span>.bumpScale : Float</span></a></h3><p>凹凸贴图会对材质产生多大影响。典型范围是0-1。默认值为1。</p><h3 id="displacementmap-texture" tabindex="-1"><a class="header-anchor" href="#displacementmap-texture"><span>.displacementMap : Texture</span></a></h3><p>位移贴图会影响网格顶点的位置，与仅影响材质的光照和阴影的其他贴图不同，移位的顶点可以投射阴影，阻挡其他对象， 以及充当真实的几何体。位移纹理是指：网格的所有顶点被映射为图像中每个像素的值（白色是最高的），并且被重定位。</p><h3 id="displacementscale-float" tabindex="-1"><a class="header-anchor" href="#displacementscale-float"><span>.displacementScale : Float</span></a></h3><p>位移贴图对网格的影响程度（黑色是无位移，白色是最大位移）。如果没有设置位移贴图，则不会应用此值。默认值为1。</p><h3 id="displacementbias-float" tabindex="-1"><a class="header-anchor" href="#displacementbias-float"><span>.displacementBias : Float</span></a></h3><p>位移贴图在网格顶点上的偏移量。如果没有设置位移贴图，则不会应用此值。默认值为0。</p><h3 id="flatshading-boolean" tabindex="-1"><a class="header-anchor" href="#flatshading-boolean"><span>.flatShading : Boolean</span></a></h3><p>定义材质是否使用平面着色进行渲染。默认值为false。</p><h3 id="normalmap-texture" tabindex="-1"><a class="header-anchor" href="#normalmap-texture"><span>.normalMap : Texture</span></a></h3><p>用于创建法线贴图的纹理。RGB值会影响每个像素片段的曲面法线，并更改颜色照亮的方式。法线贴图不会改变曲面的实际形状，只会改变光照。 In case the material has a normal map authored using the left handed convention, the y component of normalScale should be negated to compensate for the different handedness.</p><h3 id="normalmaptype-integer" tabindex="-1"><a class="header-anchor" href="#normalmaptype-integer"><span>.normalMapType : Integer</span></a></h3><p>法线贴图的类型。</p><p>选项为THREE.TangentSpaceNormalMap（默认）和THREE.ObjectSpaceNormalMap。</p><h3 id="normalscale-vector2" tabindex="-1"><a class="header-anchor" href="#normalscale-vector2"><span>.normalScale : Vector2</span></a></h3><p>法线贴图对材质的影响程度。典型范围是0-1。默认值是Vector2设置为（1,1）。</p><h3 id="wireframe-boolean" tabindex="-1"><a class="header-anchor" href="#wireframe-boolean"><span>.wireframe : Boolean</span></a></h3><p>将几何体渲染为线框。默认值为false（即渲染为平滑着色）。</p><h3 id="wireframelinewidth-float" tabindex="-1"><a class="header-anchor" href="#wireframelinewidth-float"><span>.wireframeLinewidth : Float</span></a></h3><p>控制线框宽度。默认值为1。</p><p>由于OpenGL Core Profile与大多数平台上WebGL渲染器的限制，无论如何设置该值，线宽始终为1。</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2>',25)),a("p",null,[e[3]||(e[3]=t("共有方法请参见其基类")),n(l,{to:"/threejs/%E6%9D%90%E8%B4%A8/%E6%9D%90%E8%B4%A8.html"},{default:p(()=>e[2]||(e[2]=[t("Material")])),_:1})])])}const x=o(d,[["render",c],["__file","法线网格材质.html.vue"]]),g=JSON.parse('{"path":"/threejs/%E6%9D%90%E8%B4%A8/%E6%B3%95%E7%BA%BF%E7%BD%91%E6%A0%BC%E6%9D%90%E8%B4%A8.html","title":"MeshNormalMaterial(法线网格材质)","lang":"zh-CN","frontmatter":{"title":"MeshNormalMaterial(法线网格材质)","icon":"markdown","order":8,"date":"2023-03-13T00:00:00.000Z","category":["threejs"],"tag":["材质"],"description":"MeshNormalMaterial 一种把法向量映射到RGB颜色的材质。","head":[["meta",{"property":"og:url","content":"https://luotianxu1.github.io/threejs/%E6%9D%90%E8%B4%A8/%E6%B3%95%E7%BA%BF%E7%BD%91%E6%A0%BC%E6%9D%90%E8%B4%A8.html"}],["meta",{"property":"og:title","content":"MeshNormalMaterial(法线网格材质)"}],["meta",{"property":"og:description","content":"MeshNormalMaterial 一种把法向量映射到RGB颜色的材质。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-11T09:24:37.000Z"}],["meta",{"property":"article:author","content":"罗天旭"}],["meta",{"property":"article:tag","content":"材质"}],["meta",{"property":"article:published_time","content":"2023-03-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-11T09:24:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MeshNormalMaterial(法线网格材质)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-11T09:24:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"罗天旭\\",\\"url\\":\\"https://luotianxu1.github.io\\",\\"email\\":\\"1265062404@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"MeshNormalMaterial","slug":"meshnormalmaterial","link":"#meshnormalmaterial","children":[]},{"level":2,"title":"构造器","slug":"构造器","link":"#构造器","children":[{"level":3,"title":"parameters : Object","slug":"parameters-object","link":"#parameters-object","children":[]}]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[{"level":3,"title":".bumpMap : Texture","slug":"bumpmap-texture","link":"#bumpmap-texture","children":[]},{"level":3,"title":".bumpScale : Float","slug":"bumpscale-float","link":"#bumpscale-float","children":[]},{"level":3,"title":".displacementMap : Texture","slug":"displacementmap-texture","link":"#displacementmap-texture","children":[]},{"level":3,"title":".displacementScale : Float","slug":"displacementscale-float","link":"#displacementscale-float","children":[]},{"level":3,"title":".displacementBias : Float","slug":"displacementbias-float","link":"#displacementbias-float","children":[]},{"level":3,"title":".flatShading : Boolean","slug":"flatshading-boolean","link":"#flatshading-boolean","children":[]},{"level":3,"title":".normalMap : Texture","slug":"normalmap-texture","link":"#normalmap-texture","children":[]},{"level":3,"title":".normalMapType : Integer","slug":"normalmaptype-integer","link":"#normalmaptype-integer","children":[]},{"level":3,"title":".normalScale : Vector2","slug":"normalscale-vector2","link":"#normalscale-vector2","children":[]},{"level":3,"title":".wireframe : Boolean","slug":"wireframe-boolean","link":"#wireframe-boolean","children":[]},{"level":3,"title":".wireframeLinewidth : Float","slug":"wireframelinewidth-float","link":"#wireframelinewidth-float","children":[]}]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[]}],"git":{"createdTime":1726046677000,"updatedTime":1726046677000,"contributors":[{"name":"罗天旭","email":"1265062404@qq.com","commits":1}]},"readingTime":{"minutes":2.17,"words":651},"filePathRelative":"threejs/材质/法线网格材质.md","localizedDate":"2023年3月13日","excerpt":"<h2>MeshNormalMaterial</h2>\\n<p>一种把法向量映射到RGB颜色的材质。</p>\\n<iframe url=\\"https://luotainxu-demo.netlify.app/#/threejs/material/meshNormalMaterial\\">\\n<h2 id=\\"构造器\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#构造器\\"><span>构造器</span></a></h2>\\n<h3 id=\\"parameters-object\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#parameters-object\\"><span>parameters : Object</span></a></h3>\\n<p>parameters - (可选)用于定义材质外观的对象，具有一个或多个属性。材质的任何属性都可以从此处传入(包括从Material继承的任何属性)</p>\\n<h2 id=\\"属性\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#属性\\"><span>属性</span></a></h2>\\n<p>共有属性请参见其基类<RouteLink to=\\"/threejs/%E6%9D%90%E8%B4%A8/%E6%9D%90%E8%B4%A8.html\\">Material</RouteLink></p>\\n<h3 id=\\"bumpmap-texture\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#bumpmap-texture\\"><span>.bumpMap : Texture</span></a></h3>\\n<p>用于创建凹凸贴图的纹理。黑色和白色值映射到与光照相关的感知深度。凹凸实际上不会影响对象的几何形状，只影响光照。如果定义了法线贴图，则将忽略该贴图。</p>\\n<h3 id=\\"bumpscale-float\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#bumpscale-float\\"><span>.bumpScale : Float</span></a></h3>\\n<p>凹凸贴图会对材质产生多大影响。典型范围是0-1。默认值为1。</p>\\n<h3 id=\\"displacementmap-texture\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#displacementmap-texture\\"><span>.displacementMap : Texture</span></a></h3>\\n<p>位移贴图会影响网格顶点的位置，与仅影响材质的光照和阴影的其他贴图不同，移位的顶点可以投射阴影，阻挡其他对象， 以及充当真实的几何体。位移纹理是指：网格的所有顶点被映射为图像中每个像素的值（白色是最高的），并且被重定位。</p>\\n<h3 id=\\"displacementscale-float\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#displacementscale-float\\"><span>.displacementScale : Float</span></a></h3>\\n<p>位移贴图对网格的影响程度（黑色是无位移，白色是最大位移）。如果没有设置位移贴图，则不会应用此值。默认值为1。</p>\\n<h3 id=\\"displacementbias-float\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#displacementbias-float\\"><span>.displacementBias : Float</span></a></h3>\\n<p>位移贴图在网格顶点上的偏移量。如果没有设置位移贴图，则不会应用此值。默认值为0。</p>\\n<h3 id=\\"flatshading-boolean\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#flatshading-boolean\\"><span>.flatShading : Boolean</span></a></h3>\\n<p>定义材质是否使用平面着色进行渲染。默认值为false。</p>\\n<h3 id=\\"normalmap-texture\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#normalmap-texture\\"><span>.normalMap : Texture</span></a></h3>\\n<p>用于创建法线贴图的纹理。RGB值会影响每个像素片段的曲面法线，并更改颜色照亮的方式。法线贴图不会改变曲面的实际形状，只会改变光照。 In case the material has a normal map authored using the left handed convention, the y component of normalScale should be negated to compensate for the different handedness.</p>\\n<h3 id=\\"normalmaptype-integer\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#normalmaptype-integer\\"><span>.normalMapType : Integer</span></a></h3>\\n<p>法线贴图的类型。</p>\\n<p>选项为THREE.TangentSpaceNormalMap（默认）和THREE.ObjectSpaceNormalMap。</p>\\n<h3 id=\\"normalscale-vector2\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#normalscale-vector2\\"><span>.normalScale : Vector2</span></a></h3>\\n<p>法线贴图对材质的影响程度。典型范围是0-1。默认值是Vector2设置为（1,1）。</p>\\n<h3 id=\\"wireframe-boolean\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#wireframe-boolean\\"><span>.wireframe : Boolean</span></a></h3>\\n<p>将几何体渲染为线框。默认值为false（即渲染为平滑着色）。</p>\\n<h3 id=\\"wireframelinewidth-float\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#wireframelinewidth-float\\"><span>.wireframeLinewidth : Float</span></a></h3>\\n<p>控制线框宽度。默认值为1。</p>\\n<p>由于OpenGL Core Profile与大多数平台上WebGL渲染器的限制，无论如何设置该值，线宽始终为1。</p>\\n<h2 id=\\"方法\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#方法\\"><span>方法</span></a></h2>\\n<p>共有方法请参见其基类<RouteLink to=\\"/threejs/%E6%9D%90%E8%B4%A8/%E6%9D%90%E8%B4%A8.html\\">Material</RouteLink></p>\\n</iframe>","autoDesc":true}');export{x as comp,g as data};
