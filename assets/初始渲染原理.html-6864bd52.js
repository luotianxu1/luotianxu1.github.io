import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as p,a as n,e as o,b as c,d as i}from"./app-0a44add1.js";const l={},u=i(`<h2 id="一、组件挂载入口" tabindex="-1"><a class="header-anchor" href="#一、组件挂载入口" aria-hidden="true">#</a> 一、组件挂载入口</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/init.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> initState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./state&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> compileToFunctions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./compiler/index&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initMixin</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token comment">// 这里的this代表调用_init方法的对象(实例对象)</span>
        <span class="token comment">//  this.$options就是用户new Vue的时候传入的属性</span>
        vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> options
        <span class="token comment">// 初始化状态</span>
        <span class="token function">initState</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>

        <span class="token comment">// 如果有el属性 进行模板渲染</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 这块代码在源码里面的位置其实是放在entry-runtime-with-compiler.js里面</span>
    <span class="token comment">// 代表的是Vue源码里面包含了compile编译功能 这个和runtime-only版本需要区分开</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$mount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">const</span> options <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options
        el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>

        <span class="token comment">// 如果不存在render属性</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果存在template属性</span>
            <span class="token keyword">let</span> template <span class="token operator">=</span> options<span class="token punctuation">.</span>template

            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>template <span class="token operator">&amp;&amp;</span> el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 如果不存在render和template 但是存在el属性 直接将模板赋值到el所在的外层html结构（就是el本身 并不是父元素）</span>
                template <span class="token operator">=</span> el<span class="token punctuation">.</span>outerHTML
            <span class="token punctuation">}</span>

            <span class="token comment">// 最终需要把tempalte模板转化成render函数</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> render <span class="token operator">=</span> <span class="token function">compileToFunctions</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span>
                options<span class="token punctuation">.</span>render <span class="token operator">=</span> render
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 将当前组件实例挂载到真实的el节点上面</span>
        <span class="token keyword">return</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着看$mount 方法 我们主要关注最后一句话 mountComponent 就是组件实例挂载的入口函数<br> 这个方法放在源码的 lifecycle 文件里面 代表了与生命周期相关 因为我们组件初始渲染前后对应有 beforeMount 和 mounted 生命周期钩子</p><h2 id="二、组件挂载核心方法-mountcomponent" tabindex="-1"><a class="header-anchor" href="#二、组件挂载核心方法-mountcomponent" aria-hidden="true">#</a> 二、组件挂载核心方法 mountComponent</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/lifecycle.js</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 上一步模板编译解析生成了render函数</span>
    <span class="token comment">// 下一步就是执行vm._render()方法 调用生成的render函数 生成虚拟dom</span>
    <span class="token comment">// 最后使用vm._update()方法把虚拟dom渲染到页面</span>

    <span class="token comment">// 真实的el选项赋值给实例的$el属性 为之后虚拟dom产生的新的dom替换老的dom做铺垫</span>
    vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> el
    <span class="token comment">//   _update和._render方法都是挂载在Vue原型的方法  类似_init</span>
    vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建 lifecycle.js 文件 表示生命周期相关功能 核心导出 mountComponent 函数 主要使用 vm._update(vm._render())方法进行实例挂载</p><h2 id="三、render-函数转化成虚拟-dom-核心方法-render" tabindex="-1"><a class="header-anchor" href="#三、render-函数转化成虚拟-dom-核心方法-render" aria-hidden="true">#</a> 三、render 函数转化成虚拟 dom 核心方法 _render</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/index.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> initMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./init&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> renderMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./vdom/index&#39;</span>

<span class="token keyword">function</span> <span class="token function">Vue</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token comment">// 入口方法，做初始化操作</span>
<span class="token punctuation">}</span>

<span class="token comment">// 写成一个个的插件进行对原型的扩展</span>
<span class="token function">initMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>
<span class="token comment">// _render</span>
<span class="token function">renderMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要在原型定义了_render 方法 然后执行了 render 函数 我们知道模板编译出来的 render 函数核心代码主要 return 了 类似于_c(&#39;div&#39;,{id:&quot;app&quot;},_c(&#39;div&#39;,undefined,_v(&quot;hello&quot;+_s(name)),_c(&#39;span&#39;,undefined,_v(&quot;world&quot;))))这样的代码 那么我们还需要定义一下_c _v_s 这些函数才能最终转化成为虚拟 dom</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/vdom/index.js</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">renderMixin</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_render</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token comment">// 获取模板编译生成的render方法</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options
        <span class="token comment">// 生成vnode--虚拟dom</span>
        <span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
        <span class="token keyword">return</span> vnode
    <span class="token punctuation">}</span>

    <span class="token comment">// render函数里面有_c _v _s方法需要定义</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_c</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建虚拟dom元素</span>
        <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_v</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建虚拟dom文本</span>
        <span class="token keyword">return</span> <span class="token function">createTextNode</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_s</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果模板里面的是一个对象  需要JSON.stringify</span>
        <span class="token keyword">return</span> val <span class="token operator">==</span> <span class="token keyword">null</span>
            <span class="token operator">?</span> <span class="token string">&#39;&#39;</span>
            <span class="token operator">:</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span>
            <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
            <span class="token operator">:</span> val
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> tag<span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">...</span>children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">vnode</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> data<span class="token punctuation">.</span>key<span class="token punctuation">,</span> children<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createTextElement</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">vnode</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">vnode</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> children<span class="token punctuation">,</span> text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        vm<span class="token punctuation">,</span>
        tag<span class="token punctuation">,</span>
        data<span class="token punctuation">,</span>
        key<span class="token punctuation">,</span>
        children<span class="token punctuation">,</span>
        text<span class="token punctuation">,</span>
        <span class="token comment">// .....</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、虚拟-dom-转化成真实-dom-核心方法-update" tabindex="-1"><a class="header-anchor" href="#四、虚拟-dom-转化成真实-dom-核心方法-update" aria-hidden="true">#</a> 四、虚拟 dom 转化成真实 dom 核心方法 _update</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> initMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./init&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> lifecycleMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./lifecycle&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> renderMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./vdom/index&#39;</span>

<span class="token keyword">function</span> <span class="token function">Vue</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token comment">// 入口方法，做初始化操作</span>
<span class="token punctuation">}</span>

<span class="token comment">// 写成一个个的插件进行对原型的扩展</span>
<span class="token function">initMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>
<span class="token comment">// 混合生命周期 组件挂载、组件更新</span>
<span class="token function">lifecycleMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>
<span class="token comment">// _render</span>
<span class="token function">renderMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/lifecycle.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> patch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./vdom/patch&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">lifecycleMixin</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 把_update挂载在Vue的原型</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_update</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token comment">// patch是渲染vnode为真实dom核心</span>
        <span class="token function">patch</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$el<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/vdom/patch.js</span>

<span class="token comment">// patch用来渲染和更新视图 今天只介绍初次渲染的逻辑</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">patch</span><span class="token punctuation">(</span><span class="token parameter">oldVnode<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断传入的oldVnode是否是一个真实元素</span>
    <span class="token comment">// 这里很关键  初次渲染 传入的vm.$el就是咱们传入的el选项  所以是真实dom</span>
    <span class="token comment">// 如果不是初始渲染而是视图更新的时候  vm.$el就被替换成了更新之前的老的虚拟dom</span>
    <span class="token keyword">const</span> isRealElement <span class="token operator">=</span> oldVnode<span class="token punctuation">.</span>nodeType
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isRealElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里是初次渲染的逻辑</span>
        <span class="token keyword">const</span> oldElm <span class="token operator">=</span> oldVnode
        <span class="token keyword">const</span> parentElm <span class="token operator">=</span> oldElm<span class="token punctuation">.</span>parentNode
        <span class="token comment">// 将虚拟dom转化成真实dom节点</span>
        <span class="token keyword">let</span> el <span class="token operator">=</span> <span class="token function">createElm</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
        <span class="token comment">// 插入到 老的el节点下一个节点的前面 就相当于插入到老的el节点的后面</span>
        <span class="token comment">// 这里不直接使用父元素appendChild是为了不破坏替换的位置</span>
        parentElm<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> oldElm<span class="token punctuation">.</span>nextSibling<span class="token punctuation">)</span>
        <span class="token comment">// 删除老的el节点</span>
        parentElm<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>oldVnode<span class="token punctuation">)</span>
        <span class="token keyword">return</span> el
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 虚拟dom转成真实dom 就是调用原生方法生成dom树</span>
<span class="token keyword">function</span> <span class="token function">createElm</span><span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span> tag<span class="token punctuation">,</span> data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> children<span class="token punctuation">,</span> text <span class="token punctuation">}</span> <span class="token operator">=</span> vnode
    <span class="token comment">//   判断虚拟dom 是元素节点还是文本节点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> tag <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//   虚拟dom的el属性指向真实dom</span>
        vnode<span class="token punctuation">.</span>el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
        <span class="token comment">// 解析虚拟dom属性</span>
        <span class="token function">updateProperties</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
        <span class="token comment">// 如果有子节点就递归插入到父节点里面</span>
        children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> vnode<span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">createElm</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//   文本节点</span>
        vnode<span class="token punctuation">.</span>el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> vnode<span class="token punctuation">.</span>el
<span class="token punctuation">}</span>

<span class="token comment">// 解析vnode的data属性 映射到真实dom上</span>
<span class="token keyword">function</span> <span class="token function">updateProperties</span><span class="token punctuation">(</span><span class="token parameter">vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> newProps <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">let</span> el <span class="token operator">=</span> vnode<span class="token punctuation">.</span>el <span class="token comment">//真实节点</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> newProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// style需要特殊处理下</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&#39;style&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> styleName <span class="token keyword">in</span> newProps<span class="token punctuation">.</span>style<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                el<span class="token punctuation">.</span>style<span class="token punctuation">[</span>styleName<span class="token punctuation">]</span> <span class="token operator">=</span> newProps<span class="token punctuation">.</span>style<span class="token punctuation">[</span>styleName<span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&#39;class&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            el<span class="token punctuation">.</span>className <span class="token operator">=</span> newProps<span class="token punctuation">.</span>class
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 给这个元素添加属性 值就是对应的值</span>
            el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> newProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>_update 核心方法就是 patch 初始渲染和后续更新都是共用这一个方法 只是传入的第一个参数不同 初始渲染总体思路就是根据虚拟 dom(vnode) 调用原生 js 方法创建真实 dom 节点并替换掉 el 选项的位置</p><h2 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h2>`,16),d={href:"https://github.com/luotianxu1/learn/tree/main/vue2/03.lifecycle",target:"_blank",rel:"noopener noreferrer"};function r(k,v){const s=e("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",d,[o("https://github.com/luotianxu1/learn/tree/main/vue2/03.lifecycle"),c(s)])])])}const y=a(l,[["render",r],["__file","初始渲染原理.html.vue"]]);export{y as default};
