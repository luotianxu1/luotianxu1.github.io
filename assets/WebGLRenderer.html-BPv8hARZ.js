import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as r,b as n}from"./app-C2aR6FVm.js";const i={};function l(s,e){return a(),r("div",null,e[0]||(e[0]=[n('<h2 id="webglrenderer" tabindex="-1"><a class="header-anchor" href="#webglrenderer"><span>WebGLRenderer</span></a></h2><h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器"><span>构造器</span></a></h2><h3 id="webglrenderer-parameters-object" tabindex="-1"><a class="header-anchor" href="#webglrenderer-parameters-object"><span>WebGLRenderer( parameters : Object )</span></a></h3><p>parameters - (可选) 该对象的属性定义了渲染器的行为。也可以完全不传参数。在所有情况下，当缺少参数时，它将采用合理的默认值。 以下是合法参数：</p><ul><li>canvas - 一个供渲染器绘制其输出的canvas 它和下面的domElement属性对应。 如果没有传这个参数，会创建一个新canvas</li><li>context - 可用于将渲染器附加到已有的渲染环境(RenderingContext)中。默认值是null</li><li>precision - 着色器精度. 可以是 &quot;highp&quot;, &quot;mediump&quot; 或者 &quot;lowp&quot;. 如果设备支持，默认为&quot;highp&quot;</li><li>alpha - 控制默认的清除alpha值。当设置为true时，值为0。否则就是1。默认为false</li><li>premultipliedAlpha - renderer是否假设颜色有 premultiplied alpha. 默认为true</li><li>antialias - 是否执行抗锯齿。默认为false.</li><li>stencil - 绘图缓存是否有一个至少8位的模板缓存(stencil buffer)。默认为true</li><li>preserveDrawingBuffer -是否保留缓直到手动清除或被覆盖。 默认false.</li><li>powerPreference - 提示用户代理怎样的配置更适用于当前WebGL环境。 可能是&quot;high-performance&quot;, &quot;low-power&quot; 或 &quot;default&quot;。默认是&quot;default&quot;. 详见WebGL spec</li><li>failIfMajorPerformanceCaveat - 检测渲染器是否会因性能过差而创建失败。默认为false。详见 WebGL spec for details.</li><li>depth - 绘图缓存是否有一个至少6位的深度缓存(depth buffer )。 默认是true.</li><li>logarithmicDepthBuffer - 是否使用对数深度缓存。如果要在单个场景中处理巨大的比例差异，就有必要使用。</li></ul><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2><h3 id="autoclear-boolean" tabindex="-1"><a class="header-anchor" href="#autoclear-boolean"><span>.autoClear : Boolean</span></a></h3><p>定义渲染器是否在渲染每一帧之前自动清除其输出。</p><h3 id="autoclearcolor-boolean" tabindex="-1"><a class="header-anchor" href="#autoclearcolor-boolean"><span>.autoClearColor : Boolean</span></a></h3><p>如果autoClear为true, 定义renderer是否清除颜色缓存。 默认是true</p><h3 id="autocleardepth-boolean" tabindex="-1"><a class="header-anchor" href="#autocleardepth-boolean"><span>.autoClearDepth : Boolean</span></a></h3><p>如果autoClear是true, 定义renderer是否清除深度缓存。 默认是true</p><h3 id="autoclearstencil-boolean" tabindex="-1"><a class="header-anchor" href="#autoclearstencil-boolean"><span>.autoClearStencil : Boolean</span></a></h3><p>如果autoClear是true, 定义renderer是否清除模板缓存. 默认是true</p><h3 id="debug-object" tabindex="-1"><a class="header-anchor" href="#debug-object"><span>.debug : Object</span></a></h3><ul><li>checkShaderErrors: 如果为true，定义是否检查材质着色器程序 编译和链接过程中的错误。 禁用此检查生产以获得性能增益可能很有用。 强烈建议在开发期间保持启用这些检查。 如果着色器没有编译和链接 - 它将无法工作，并且相关材料将不会呈现。 默认是true</li></ul><h3 id="capabilities-object" tabindex="-1"><a class="header-anchor" href="#capabilities-object"><span>.capabilities : Object</span></a></h3><p>一个包含当前渲染环境(RenderingContext)的功能细节的对象。</p><ul><li>floatFragmentTextures: 环境是否支持OES_texture_float扩展</li><li>floatVertexTextures: 如果floatFragmentTextures和vertexTextures都是true， 则此值为true</li><li>getMaxAnisotropy(): 返回最大可用各向异性。</li><li>getMaxPrecision(): 返回顶点着色器和片元着色器的最大可用精度。</li><li>isWebGL2: true if the context in use is a WebGL2RenderingContext object.</li><li>logarithmicDepthBuffer: 如果logarithmicDepthBuffer在构造器中被设为true且 环境支持EXT_frag_depth扩展，则此值为true</li><li>maxAttributes: gl.MAX_VERTEX_ATTRIBS的值</li><li>maxCubemapSize: gl.MAX_CUBE_MAP_TEXTURE_SIZE 的值，着色器可使用的立方体贴图纹理的最大宽度*高度</li><li>maxFragmentUniforms: gl.MAX_FRAGMENT_UNIFORM_VECTORS的值，片元着色器可使用的全局变量(uniforms)数量</li><li>maxSamples: The value of gl.MAX_SAMPLES. Maximum number of samples in context of Multisample anti-aliasing (MSAA).</li><li>maxTextureSize: gl.MAX_TEXTURE_SIZE的值，着色器可使用纹理的最大宽度*高度</li><li>maxTextures: *gl.MAX_TEXTURE_IMAGE_UNITS的值，着色器可使用的纹理数量</li><li>maxVaryings: gl.MAX_VARYING_VECTORS的值，着色器可使用矢量的数量</li><li>maxVertexTextures: gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS的值，顶点着色器可使用的纹理数量。</li><li>maxVertexUniforms: gl.MAX_VERTEX_UNIFORM_VECTORS的值，顶点着色器可使用的全局变量(uniforms)数量</li><li>precision: 渲染器当前使用的着色器的精度</li><li>vertexTextures: 如果 .maxVertexTextures : Integer大于0，此值为true (即可以使用顶点纹理)</li></ul><h3 id="clippingplanes-array" tabindex="-1"><a class="header-anchor" href="#clippingplanes-array"><span>.clippingPlanes : Array</span></a></h3><p>用户自定义的剪裁平面，在世界空间中被指定为THREE.Plane对象。 这些平面全局使用。空间中与该平面点积为负的点将被切掉。 默认值是[]</p><h3 id="domelement-domelement" tabindex="-1"><a class="header-anchor" href="#domelement-domelement"><span>.domElement : DOMElement</span></a></h3><p>一个canvas，渲染器在其上绘制输出。 渲染器的构造函数会自动创建(如果没有传入canvas参数);你需要做的仅仅是像下面这样将它加页面里去:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">appendChild</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">renderer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">domElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> );</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="extensions-object" tabindex="-1"><a class="header-anchor" href="#extensions-object"><span>.extensions : Object</span></a></h3><ul><li>get( extensionName : String ): 用于检查是否支持各种扩展，并返回一个对象，其中包含扩展的详细信息。 该方法检查以下扩展： <ul><li>WEBGL_depth_texture</li><li>EXT_texture_filter_anisotropic</li><li>WEBGL_compressed_texture_s3tc</li><li>WEBGL_compressed_texture_pvrtc</li><li>WEBGL_compressed_texture_etc1</li></ul></li></ul><h3 id="outputencoding-number" tabindex="-1"><a class="header-anchor" href="#outputencoding-number"><span>.outputEncoding : number</span></a></h3><p>定义渲染器的输出编码。默认为THREE.LinearEncoding</p><p>如果渲染目标已经使用 .setRenderTarget、之后将直接使用renderTarget.texture.encoding</p><p>查看texture constants页面以获取其他格式细节</p><h3 id="info-object" tabindex="-1"><a class="header-anchor" href="#info-object"><span>.info : Object</span></a></h3><p>一个对象，包含有关图形板内存和渲染过程的一系列统计信息。这些信息可用于调试或仅仅满足下好奇心。该对象包含以下字段:</p><ul><li>memory: <ul><li>geometries</li><li>textures</li></ul></li><li>render: <ul><li>calls</li><li>triangles</li><li>points</li><li>lines</li><li>frame</li></ul></li><li>programs</li></ul><p>默认情况下，这些字段在每次渲染调用时都会重置，但是当每帧有多个渲染通道时（例如，使用后处理时），最好使用自定义模式重置。先将 autoReset 设置为 false.</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">renderer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">info</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">autoReset</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后在单个帧时渲染完成后调用 reset().</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">renderer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">info</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">reset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="localclippingenabled-boolean" tabindex="-1"><a class="header-anchor" href="#localclippingenabled-boolean"><span>.localClippingEnabled : Boolean</span></a></h3><p>定义渲染器是否考虑对象级剪切平面。 默认为false.</p><h3 id="physicallycorrectlights-boolean" tabindex="-1"><a class="header-anchor" href="#physicallycorrectlights-boolean"><span>.physicallyCorrectLights : Boolean</span></a></h3><p>是否使用物理上正确的光照模式。 默认是false。 示例：lights / physical</p><h3 id="properties-object" tabindex="-1"><a class="header-anchor" href="#properties-object"><span>.properties : Object</span></a></h3><p>渲染器内部使用，以跟踪各种子对象属性。</p><h3 id="renderlists-webglrenderlists" tabindex="-1"><a class="header-anchor" href="#renderlists-webglrenderlists"><span>.renderLists : WebGLRenderLists</span></a></h3><p>在内部用于处理场景渲染对象的排序。</p><h3 id="shadowmap-webglshadowmap" tabindex="-1"><a class="header-anchor" href="#shadowmap-webglshadowmap"><span>.shadowMap : WebGLShadowMap</span></a></h3><p>如果使用，它包含阴影贴图的引用。</p><ul><li><p>enabled: 如果设置开启，允许在场景中使用阴影贴图。默认是 false。</p></li><li><p>autoUpdate: 启用场景中的阴影自动更新。默认是true 如果不需要动态光照/阴影, 则可以在实例化渲染器时将之设为false</p></li><li><p>needsUpdate: 当被设为true, 场景中的阴影贴图会在下次render调用时刷新。默认是false 如果你已经禁用了阴影贴图的自动更新(shadowMap.autoUpdate = false), 那么想要在下一次渲染时更新阴影的话就需要将此值设为true</p></li><li><p>type: 定义阴影贴图类型 (未过滤, 关闭部分过滤, 关闭部分双线性过滤), 可选值有:</p><ul><li>THREE.BasicShadowMap</li><li>THREE.PCFShadowMap (默认)</li><li>THREE.PCFSoftShadowMap</li><li>THREE.VSMShadowMap</li></ul></li></ul><p>详见Renderer constants</p><h3 id="sortobjects-boolean" tabindex="-1"><a class="header-anchor" href="#sortobjects-boolean"><span>.sortObjects : Boolean</span></a></h3><p>定义渲染器是否应对对象进行排序。默认是true.</p><p>说明: 排序用于尝试正确渲染出具有一定透明度的对象。根据定义，排序可能不总是有用。根据应用的需求，可能需要关闭排序并使其他方法来处理透明度的渲染，例如， 手动确定每个对象的渲染顺序。</p><h3 id="state-object" tabindex="-1"><a class="header-anchor" href="#state-object"><span>.state : Object</span></a></h3><p>包含设置WebGLRenderer.context状态的各种属性的函数。</p><h3 id="tonemapping-constant" tabindex="-1"><a class="header-anchor" href="#tonemapping-constant"><span>.toneMapping : Constant</span></a></h3><p>默认是NoToneMapping。查看Renderer constants以获取其它备选项</p><h3 id="tonemappingexposure-number" tabindex="-1"><a class="header-anchor" href="#tonemappingexposure-number"><span>.toneMappingExposure : Number</span></a></h3><p>色调映射的曝光级别。默认是1</p><h3 id="xr-webxrmanager" tabindex="-1"><a class="header-anchor" href="#xr-webxrmanager"><span>.xr : WebXRManager</span></a></h3><p>提供对呈现器的WebXR相关接口的访问</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2><h3 id="clear-color-boolean-depth-boolean-stencil-boolean-undefined" tabindex="-1"><a class="header-anchor" href="#clear-color-boolean-depth-boolean-stencil-boolean-undefined"><span>.clear ( color : Boolean, depth : Boolean, stencil : Boolean ) : undefined</span></a></h3><p>告诉渲染器清除颜色、深度或模板缓存. 此方法将颜色缓存初始化为当前颜色。参数们默认都是true</p><h3 id="clearcolor-undefined" tabindex="-1"><a class="header-anchor" href="#clearcolor-undefined"><span>.clearColor ( ) : undefined</span></a></h3><p>清除颜色缓存。 相当于调用.clear( true, false, false )</p><h3 id="cleardepth-undefined" tabindex="-1"><a class="header-anchor" href="#cleardepth-undefined"><span>.clearDepth ( ) : undefined</span></a></h3><p>清除深度缓存。相当于调用.clear( false, true, false )</p><h3 id="clearstencil-undefined" tabindex="-1"><a class="header-anchor" href="#clearstencil-undefined"><span>.clearStencil ( ) : undefined</span></a></h3><p>清除模板缓存。相当于调用.clear( false, false, true )</p><h3 id="compile-scene-object3d-camera-camera-undefined" tabindex="-1"><a class="header-anchor" href="#compile-scene-object3d-camera-camera-undefined"><span>.compile ( scene : Object3D, camera : Camera ) : undefined</span></a></h3><p>使用相机编译场景中的所有材质。这对于在首次渲染之前预编译着色器很有用。</p><h3 id="copyframebuffertotexture-position-vector2-texture-framebuffertexture-level-number-undefined" tabindex="-1"><a class="header-anchor" href="#copyframebuffertotexture-position-vector2-texture-framebuffertexture-level-number-undefined"><span>.copyFramebufferToTexture ( position : Vector2, texture : FramebufferTexture, level : Number ) : undefined</span></a></h3><p>将当前WebGLFramebuffer中的像素复制到2D纹理中。可访问WebGLRenderingContext.copyTexImage2D.</p><h3 id="copytexturetotexture-position-vector2-srctexture-texture-dsttexture-texture-level-number-undefined" tabindex="-1"><a class="header-anchor" href="#copytexturetotexture-position-vector2-srctexture-texture-dsttexture-texture-level-number-undefined"><span>.copyTextureToTexture ( position : Vector2, srcTexture : Texture, dstTexture : Texture, level : Number ) : undefined</span></a></h3><p>将纹理的所有像素复制到一个已有的从给定位置开始的纹理中。可访问WebGLRenderingContext.texSubImage2D.</p><h3 id="dispose-undefined" tabindex="-1"><a class="header-anchor" href="#dispose-undefined"><span>.dispose ( ) : undefined</span></a></h3><p>处理当前的渲染环境</p><h3 id="forcecontextloss-undefined" tabindex="-1"><a class="header-anchor" href="#forcecontextloss-undefined"><span>.forceContextLoss () : undefined</span></a></h3><p>模拟WebGL环境的丢失。需要支持 WEBGL_lose_context 扩展才能用。</p><h3 id="forcecontextrestore-undefined" tabindex="-1"><a class="header-anchor" href="#forcecontextrestore-undefined"><span>.forceContextRestore ( ) : undefined</span></a></h3><p>模拟WebGL环境的恢复。需要支持 WEBGL_lose_context 扩展才能用。</p><h3 id="getclearalpha-float" tabindex="-1"><a class="header-anchor" href="#getclearalpha-float"><span>.getClearAlpha () : Float</span></a></h3><p>返回一个表示当前alpha值的float，范围0到1</p><h3 id="getclearcolor-target-color-color" tabindex="-1"><a class="header-anchor" href="#getclearcolor-target-color-color"><span>.getClearColor ( target : Color ) : Color</span></a></h3><p>返回一个表示当前颜色值的THREE.Color实例</p><h3 id="getcontext-webgl2renderingcontext" tabindex="-1"><a class="header-anchor" href="#getcontext-webgl2renderingcontext"><span>.getContext () : WebGL2RenderingContext</span></a></h3><p>返回当前WebGL环境</p><h3 id="getcontextattributes-webglcontextattributes" tabindex="-1"><a class="header-anchor" href="#getcontextattributes-webglcontextattributes"><span>.getContextAttributes () : WebGLContextAttributes</span></a></h3><p>返回一个对象，这个对象中存有在WebGL环境在创建的时候所设置的属性</p><h3 id="getactivecubeface-integer" tabindex="-1"><a class="header-anchor" href="#getactivecubeface-integer"><span>.getActiveCubeFace () : Integer</span></a></h3><p>Returns the current active cube face.</p><h3 id="getactivemipmaplevel-integer" tabindex="-1"><a class="header-anchor" href="#getactivemipmaplevel-integer"><span>.getActiveMipmapLevel () : Integer</span></a></h3><p>Returns the current active mipmap level.</p><h3 id="getrendertarget-rendertarget" tabindex="-1"><a class="header-anchor" href="#getrendertarget-rendertarget"><span>.getRenderTarget () : RenderTarget</span></a></h3><p>如果当前存在RenderTarget，则返回该值；否则返回null。</p><h3 id="getcurrentviewport-rendertarget" tabindex="-1"><a class="header-anchor" href="#getcurrentviewport-rendertarget"><span>.getCurrentViewport () : RenderTarget</span></a></h3><p>返回当前视口</p><h3 id="getdrawingbuffersize-object" tabindex="-1"><a class="header-anchor" href="#getdrawingbuffersize-object"><span>.getDrawingBufferSize () : Object</span></a></h3><p>返回一个包含渲染器绘图缓存宽度和高度(单位像素)的对象。</p><h3 id="getpixelratio-number" tabindex="-1"><a class="header-anchor" href="#getpixelratio-number"><span>.getPixelRatio () : number</span></a></h3><p>返回当前使用设备像素比</p><h3 id="getsize-target-vector2-vector2" tabindex="-1"><a class="header-anchor" href="#getsize-target-vector2-vector2"><span>.getSize ( target : Vector2 ) : Vector2</span></a></h3><p>返回包含渲染器输出canvas的宽度和高度(单位像素)的对象。</p><h3 id="inittexture-texture-texture-undefined" tabindex="-1"><a class="header-anchor" href="#inittexture-texture-texture-undefined"><span>.initTexture ( texture : Texture ) : undefined</span></a></h3><p>初始化给定的纹理。用于预加载纹理而不是等到第一次渲染（可能会由于解码和 GPU 上传的开销而导致明显的延迟）.</p><h3 id="resetglstate-undefined" tabindex="-1"><a class="header-anchor" href="#resetglstate-undefined"><span>.resetGLState ( ) : undefined</span></a></h3><p>将GL状态重置为默认值。WebGL环境丢失时会内部调用</p><h3 id="readrendertargetpixels-rendertarget-webglrendertarget-x-float-y-float-width-float-height-float-buffer-typedarray-activecubefaceindex-integer-undefined" tabindex="-1"><a class="header-anchor" href="#readrendertargetpixels-rendertarget-webglrendertarget-x-float-y-float-width-float-height-float-buffer-typedarray-activecubefaceindex-integer-undefined"><span>.readRenderTargetPixels ( renderTarget : WebGLRenderTarget, x : Float, y : Float, width : Float, height : Float, buffer : TypedArray, activeCubeFaceIndex : Integer ) : undefined</span></a></h3><p>buffer - Uint8Array is the only destination type supported in all cases, other types are renderTarget and platform dependent. See WebGL spec for details.</p><p>将renderTarget中的像素数据读取到传入的缓冲区中。这是WebGLRenderingContext.readPixels()的包装器 示例：interactive / cubes / gpu</p><p>For reading out a WebGLCubeRenderTarget use the optional parameter activeCubeFaceIndex to determine which face should be read.</p><h3 id="render-scene-object3d-camera-camera-undefined" tabindex="-1"><a class="header-anchor" href="#render-scene-object3d-camera-camera-undefined"><span>.render ( scene : Object3D, camera : Camera ) : undefined</span></a></h3><p>用相机(camera)渲染一个场景(scene)或是其它类型的object。 渲染一般是在canvas上完成的，或者是renderTarget(如果有指定) 如果forceClear值是true，那么颜色、深度及模板缓存将会在渲染之前清除，即使渲染器的autoClear属性值是false 即便forceClear设为true, 也可以通过将autoClearColor、autoClearStencil或autoClearDepth属性的值设为false来阻止对应缓存被清除。</p><h3 id="resetstate-undefined" tabindex="-1"><a class="header-anchor" href="#resetstate-undefined"><span>.resetState () : undefined</span></a></h3><p>可用于重置内部 WebGL 状态。此方法主要与跨多个 WebGL 库共享单个 WebGL 上下文的应用程序相关。</p><h3 id="setanimationloop-callback-function-undefined" tabindex="-1"><a class="header-anchor" href="#setanimationloop-callback-function-undefined"><span>.setAnimationLoop ( callback : Function ) : undefined</span></a></h3><p>callback — 每个可用帧都会调用的函数。 如果传入‘null’,所有正在进行的动画都会停止。</p><p>可用来代替requestAnimationFrame的内置函数. 对于WebXR项目，必须使用此函数。</p><h3 id="setclearalpha-alpha-float-undefined" tabindex="-1"><a class="header-anchor" href="#setclearalpha-alpha-float-undefined"><span>.setClearAlpha ( alpha : Float ) : undefined</span></a></h3><p>设置alpha。合法参数是一个0.0到 1.0之间的浮点数</p><h3 id="setclearcolor-color-color-alpha-float-undefined" tabindex="-1"><a class="header-anchor" href="#setclearcolor-color-color-alpha-float-undefined"><span>.setClearColor ( color : Color, alpha : Float ) : undefined</span></a></h3><p>设置颜色及其透明度</p><h3 id="setpixelratio-value-number-undefined" tabindex="-1"><a class="header-anchor" href="#setpixelratio-value-number-undefined"><span>.setPixelRatio ( value : number ) : undefined</span></a></h3><p>设置设备像素比。通常用于避免HiDPI设备上绘图模糊</p><h3 id="setrendertarget-rendertarget-webglrendertarget-activecubeface-integer-activemipmaplevel-integer-undefined" tabindex="-1"><a class="header-anchor" href="#setrendertarget-rendertarget-webglrendertarget-activecubeface-integer-activemipmaplevel-integer-undefined"><span>.setRenderTarget ( renderTarget : WebGLRenderTarget, activeCubeFace : Integer, activeMipmapLevel : Integer ) : undefined</span></a></h3><p>renderTarget -- 需要被激活的renderTarget(可选)。若此参数为空，则将canvas设置成活跃render target。 activeCubeFace -- Specifies the active cube side (PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5) of WebGLCubeRenderTarget. When passing a WebGLArrayRenderTarget or WebGL3DRenderTarget this indicates the z layer to render in to (optional). activeMipmapLevel -- Specifies the active mipmap level (optional).</p><p>该方法设置活跃rendertarget。</p><h3 id="setscissor-x-integer-y-integer-width-integer-height-integer-undefined" tabindex="-1"><a class="header-anchor" href="#setscissor-x-integer-y-integer-width-integer-height-integer-undefined"><span>.setScissor ( x : Integer, y : Integer, width : Integer, height : Integer ) : undefined</span></a></h3><p>将剪裁区域设为(x, y)到(x + width, y + height) Sets the scissor area from</p><h3 id="setscissortest-boolean-boolean-undefined" tabindex="-1"><a class="header-anchor" href="#setscissortest-boolean-boolean-undefined"><span>.setScissorTest ( boolean : Boolean ) : undefined</span></a></h3><p>启用或禁用剪裁检测. 若启用，则只有在所定义的裁剪区域内的像素才会受之后的渲染器影响。</p><h3 id="setsize-width-integer-height-integer-updatestyle-boolean-undefined" tabindex="-1"><a class="header-anchor" href="#setsize-width-integer-height-integer-updatestyle-boolean-undefined"><span>.setSize ( width : Integer, height : Integer, updateStyle : Boolean ) : undefined</span></a></h3><p>将输出canvas的大小调整为(width, height)并考虑设备像素比，且将视口从(0, 0)开始调整到适合大小 将updateStyle设置为false以阻止对canvas的样式做任何改变。</p><h3 id="setviewport-x-integer-y-integer-width-integer-height-integer-undefined" tabindex="-1"><a class="header-anchor" href="#setviewport-x-integer-y-integer-width-integer-height-integer-undefined"><span>.setViewport ( x : Integer, y : Integer, width : Integer, height : Integer ) : undefined</span></a></h3><p>将视口大小设置为(x, y)到 (x + width, y + height).</p>',135)]))}const c=t(i,[["render",l],["__file","WebGLRenderer.html.vue"]]),p=JSON.parse('{"path":"/threejs/%E6%B8%B2%E6%9F%93%E5%99%A8/WebGLRenderer.html","title":"WebGLRenderer","lang":"zh-CN","frontmatter":{"title":"WebGLRenderer","icon":"markdown","order":1,"date":"2023-03-29T00:00:00.000Z","category":["threejs"],"tag":["渲染器"],"description":"WebGLRenderer 构造器 WebGLRenderer( parameters : Object ) parameters - (可选) 该对象的属性定义了渲染器的行为。也可以完全不传参数。在所有情况下，当缺少参数时，它将采用合理的默认值。 以下是合法参数： canvas - 一个供渲染器绘制其输出的canvas 它和下面的domElement...","head":[["meta",{"property":"og:url","content":"https://luotianxu1.github.io/threejs/%E6%B8%B2%E6%9F%93%E5%99%A8/WebGLRenderer.html"}],["meta",{"property":"og:title","content":"WebGLRenderer"}],["meta",{"property":"og:description","content":"WebGLRenderer 构造器 WebGLRenderer( parameters : Object ) parameters - (可选) 该对象的属性定义了渲染器的行为。也可以完全不传参数。在所有情况下，当缺少参数时，它将采用合理的默认值。 以下是合法参数： canvas - 一个供渲染器绘制其输出的canvas 它和下面的domElement..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-11T09:24:37.000Z"}],["meta",{"property":"article:author","content":"罗天旭"}],["meta",{"property":"article:tag","content":"渲染器"}],["meta",{"property":"article:published_time","content":"2023-03-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-11T09:24:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WebGLRenderer\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-11T09:24:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"罗天旭\\",\\"url\\":\\"https://luotianxu1.github.io\\",\\"email\\":\\"1265062404@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"WebGLRenderer","slug":"webglrenderer","link":"#webglrenderer","children":[]},{"level":2,"title":"构造器","slug":"构造器","link":"#构造器","children":[{"level":3,"title":"WebGLRenderer( parameters : Object )","slug":"webglrenderer-parameters-object","link":"#webglrenderer-parameters-object","children":[]}]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[{"level":3,"title":".autoClear : Boolean","slug":"autoclear-boolean","link":"#autoclear-boolean","children":[]},{"level":3,"title":".autoClearColor : Boolean","slug":"autoclearcolor-boolean","link":"#autoclearcolor-boolean","children":[]},{"level":3,"title":".autoClearDepth : Boolean","slug":"autocleardepth-boolean","link":"#autocleardepth-boolean","children":[]},{"level":3,"title":".autoClearStencil : Boolean","slug":"autoclearstencil-boolean","link":"#autoclearstencil-boolean","children":[]},{"level":3,"title":".debug : Object","slug":"debug-object","link":"#debug-object","children":[]},{"level":3,"title":".capabilities : Object","slug":"capabilities-object","link":"#capabilities-object","children":[]},{"level":3,"title":".clippingPlanes : Array","slug":"clippingplanes-array","link":"#clippingplanes-array","children":[]},{"level":3,"title":".domElement : DOMElement","slug":"domelement-domelement","link":"#domelement-domelement","children":[]},{"level":3,"title":".extensions : Object","slug":"extensions-object","link":"#extensions-object","children":[]},{"level":3,"title":".outputEncoding : number","slug":"outputencoding-number","link":"#outputencoding-number","children":[]},{"level":3,"title":".info : Object","slug":"info-object","link":"#info-object","children":[]},{"level":3,"title":".localClippingEnabled : Boolean","slug":"localclippingenabled-boolean","link":"#localclippingenabled-boolean","children":[]},{"level":3,"title":".physicallyCorrectLights : Boolean","slug":"physicallycorrectlights-boolean","link":"#physicallycorrectlights-boolean","children":[]},{"level":3,"title":".properties : Object","slug":"properties-object","link":"#properties-object","children":[]},{"level":3,"title":".renderLists : WebGLRenderLists","slug":"renderlists-webglrenderlists","link":"#renderlists-webglrenderlists","children":[]},{"level":3,"title":".shadowMap : WebGLShadowMap","slug":"shadowmap-webglshadowmap","link":"#shadowmap-webglshadowmap","children":[]},{"level":3,"title":".sortObjects : Boolean","slug":"sortobjects-boolean","link":"#sortobjects-boolean","children":[]},{"level":3,"title":".state : Object","slug":"state-object","link":"#state-object","children":[]},{"level":3,"title":".toneMapping : Constant","slug":"tonemapping-constant","link":"#tonemapping-constant","children":[]},{"level":3,"title":".toneMappingExposure : Number","slug":"tonemappingexposure-number","link":"#tonemappingexposure-number","children":[]},{"level":3,"title":".xr : WebXRManager","slug":"xr-webxrmanager","link":"#xr-webxrmanager","children":[]}]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[{"level":3,"title":".clear ( color : Boolean, depth : Boolean, stencil : Boolean ) : undefined","slug":"clear-color-boolean-depth-boolean-stencil-boolean-undefined","link":"#clear-color-boolean-depth-boolean-stencil-boolean-undefined","children":[]},{"level":3,"title":".clearColor ( ) : undefined","slug":"clearcolor-undefined","link":"#clearcolor-undefined","children":[]},{"level":3,"title":".clearDepth ( ) : undefined","slug":"cleardepth-undefined","link":"#cleardepth-undefined","children":[]},{"level":3,"title":".clearStencil ( ) : undefined","slug":"clearstencil-undefined","link":"#clearstencil-undefined","children":[]},{"level":3,"title":".compile ( scene : Object3D, camera : Camera ) : undefined","slug":"compile-scene-object3d-camera-camera-undefined","link":"#compile-scene-object3d-camera-camera-undefined","children":[]},{"level":3,"title":".copyFramebufferToTexture ( position : Vector2, texture : FramebufferTexture, level : Number ) : undefined","slug":"copyframebuffertotexture-position-vector2-texture-framebuffertexture-level-number-undefined","link":"#copyframebuffertotexture-position-vector2-texture-framebuffertexture-level-number-undefined","children":[]},{"level":3,"title":".copyTextureToTexture ( position : Vector2, srcTexture : Texture, dstTexture : Texture, level : Number ) : undefined","slug":"copytexturetotexture-position-vector2-srctexture-texture-dsttexture-texture-level-number-undefined","link":"#copytexturetotexture-position-vector2-srctexture-texture-dsttexture-texture-level-number-undefined","children":[]},{"level":3,"title":".dispose ( ) : undefined","slug":"dispose-undefined","link":"#dispose-undefined","children":[]},{"level":3,"title":".forceContextLoss () : undefined","slug":"forcecontextloss-undefined","link":"#forcecontextloss-undefined","children":[]},{"level":3,"title":".forceContextRestore ( ) : undefined","slug":"forcecontextrestore-undefined","link":"#forcecontextrestore-undefined","children":[]},{"level":3,"title":".getClearAlpha () : Float","slug":"getclearalpha-float","link":"#getclearalpha-float","children":[]},{"level":3,"title":".getClearColor ( target : Color ) : Color","slug":"getclearcolor-target-color-color","link":"#getclearcolor-target-color-color","children":[]},{"level":3,"title":".getContext () : WebGL2RenderingContext","slug":"getcontext-webgl2renderingcontext","link":"#getcontext-webgl2renderingcontext","children":[]},{"level":3,"title":".getContextAttributes () : WebGLContextAttributes","slug":"getcontextattributes-webglcontextattributes","link":"#getcontextattributes-webglcontextattributes","children":[]},{"level":3,"title":".getActiveCubeFace () : Integer","slug":"getactivecubeface-integer","link":"#getactivecubeface-integer","children":[]},{"level":3,"title":".getActiveMipmapLevel () : Integer","slug":"getactivemipmaplevel-integer","link":"#getactivemipmaplevel-integer","children":[]},{"level":3,"title":".getRenderTarget () : RenderTarget","slug":"getrendertarget-rendertarget","link":"#getrendertarget-rendertarget","children":[]},{"level":3,"title":".getCurrentViewport () : RenderTarget","slug":"getcurrentviewport-rendertarget","link":"#getcurrentviewport-rendertarget","children":[]},{"level":3,"title":".getDrawingBufferSize () : Object","slug":"getdrawingbuffersize-object","link":"#getdrawingbuffersize-object","children":[]},{"level":3,"title":".getPixelRatio () : number","slug":"getpixelratio-number","link":"#getpixelratio-number","children":[]},{"level":3,"title":".getSize ( target : Vector2 ) : Vector2","slug":"getsize-target-vector2-vector2","link":"#getsize-target-vector2-vector2","children":[]},{"level":3,"title":".initTexture ( texture : Texture ) : undefined","slug":"inittexture-texture-texture-undefined","link":"#inittexture-texture-texture-undefined","children":[]},{"level":3,"title":".resetGLState ( ) : undefined","slug":"resetglstate-undefined","link":"#resetglstate-undefined","children":[]},{"level":3,"title":".readRenderTargetPixels ( renderTarget : WebGLRenderTarget, x : Float, y : Float, width : Float, height : Float, buffer : TypedArray, activeCubeFaceIndex : Integer ) : undefined","slug":"readrendertargetpixels-rendertarget-webglrendertarget-x-float-y-float-width-float-height-float-buffer-typedarray-activecubefaceindex-integer-undefined","link":"#readrendertargetpixels-rendertarget-webglrendertarget-x-float-y-float-width-float-height-float-buffer-typedarray-activecubefaceindex-integer-undefined","children":[]},{"level":3,"title":".render ( scene : Object3D, camera : Camera ) : undefined","slug":"render-scene-object3d-camera-camera-undefined","link":"#render-scene-object3d-camera-camera-undefined","children":[]},{"level":3,"title":".resetState () : undefined","slug":"resetstate-undefined","link":"#resetstate-undefined","children":[]},{"level":3,"title":".setAnimationLoop ( callback : Function ) : undefined","slug":"setanimationloop-callback-function-undefined","link":"#setanimationloop-callback-function-undefined","children":[]},{"level":3,"title":".setClearAlpha ( alpha : Float ) : undefined","slug":"setclearalpha-alpha-float-undefined","link":"#setclearalpha-alpha-float-undefined","children":[]},{"level":3,"title":".setClearColor ( color : Color, alpha : Float ) : undefined","slug":"setclearcolor-color-color-alpha-float-undefined","link":"#setclearcolor-color-color-alpha-float-undefined","children":[]},{"level":3,"title":".setPixelRatio ( value : number ) : undefined","slug":"setpixelratio-value-number-undefined","link":"#setpixelratio-value-number-undefined","children":[]},{"level":3,"title":".setRenderTarget ( renderTarget : WebGLRenderTarget, activeCubeFace : Integer, activeMipmapLevel : Integer ) : undefined","slug":"setrendertarget-rendertarget-webglrendertarget-activecubeface-integer-activemipmaplevel-integer-undefined","link":"#setrendertarget-rendertarget-webglrendertarget-activecubeface-integer-activemipmaplevel-integer-undefined","children":[]},{"level":3,"title":".setScissor ( x : Integer, y : Integer, width : Integer, height : Integer ) : undefined","slug":"setscissor-x-integer-y-integer-width-integer-height-integer-undefined","link":"#setscissor-x-integer-y-integer-width-integer-height-integer-undefined","children":[]},{"level":3,"title":".setScissorTest ( boolean : Boolean ) : undefined","slug":"setscissortest-boolean-boolean-undefined","link":"#setscissortest-boolean-boolean-undefined","children":[]},{"level":3,"title":".setSize ( width : Integer, height : Integer, updateStyle : Boolean ) : undefined","slug":"setsize-width-integer-height-integer-updatestyle-boolean-undefined","link":"#setsize-width-integer-height-integer-updatestyle-boolean-undefined","children":[]},{"level":3,"title":".setViewport ( x : Integer, y : Integer, width : Integer, height : Integer ) : undefined","slug":"setviewport-x-integer-y-integer-width-integer-height-integer-undefined","link":"#setviewport-x-integer-y-integer-width-integer-height-integer-undefined","children":[]}]}],"git":{"createdTime":1726046677000,"updatedTime":1726046677000,"contributors":[{"name":"罗天旭","email":"1265062404@qq.com","commits":1}]},"readingTime":{"minutes":9.46,"words":2838},"filePathRelative":"threejs/渲染器/WebGLRenderer.md","localizedDate":"2023年3月29日","excerpt":"<h2>WebGLRenderer</h2>\\n<h2>构造器</h2>\\n<h3>WebGLRenderer( parameters : Object )</h3>\\n<p>parameters - (可选) 该对象的属性定义了渲染器的行为。也可以完全不传参数。在所有情况下，当缺少参数时，它将采用合理的默认值。 以下是合法参数：</p>\\n<ul>\\n<li>canvas - 一个供渲染器绘制其输出的canvas 它和下面的domElement属性对应。 如果没有传这个参数，会创建一个新canvas</li>\\n<li>context - 可用于将渲染器附加到已有的渲染环境(RenderingContext)中。默认值是null</li>\\n<li>precision - 着色器精度. 可以是 \\"highp\\", \\"mediump\\" 或者 \\"lowp\\". 如果设备支持，默认为\\"highp\\"</li>\\n<li>alpha - 控制默认的清除alpha值。当设置为true时，值为0。否则就是1。默认为false</li>\\n<li>premultipliedAlpha - renderer是否假设颜色有 premultiplied alpha. 默认为true</li>\\n<li>antialias - 是否执行抗锯齿。默认为false.</li>\\n<li>stencil - 绘图缓存是否有一个至少8位的模板缓存(stencil buffer)。默认为true</li>\\n<li>preserveDrawingBuffer -是否保留缓直到手动清除或被覆盖。 默认false.</li>\\n<li>powerPreference - 提示用户代理怎样的配置更适用于当前WebGL环境。 可能是\\"high-performance\\", \\"low-power\\" 或 \\"default\\"。默认是\\"default\\". 详见WebGL spec</li>\\n<li>failIfMajorPerformanceCaveat - 检测渲染器是否会因性能过差而创建失败。默认为false。详见 WebGL spec for details.</li>\\n<li>depth - 绘图缓存是否有一个至少6位的深度缓存(depth buffer )。 默认是true.</li>\\n<li>logarithmicDepthBuffer - 是否使用对数深度缓存。如果要在单个场景中处理巨大的比例差异，就有必要使用。</li>\\n</ul>","autoDesc":true}');export{c as comp,p as data};
