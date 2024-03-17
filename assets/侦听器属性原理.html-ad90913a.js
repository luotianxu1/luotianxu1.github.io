import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as e,a as n,e as o,b as c,d as i}from"./app-0a44add1.js";const l={},u=i(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Vue实例化</span>
<span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">aa</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">bb</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div id=&quot;a&quot;&gt;hello 这是我自己写的Vue{{name}}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">aa</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// aa: {</span>
        <span class="token comment">//   handle(newVal， oldVal) {</span>
        <span class="token comment">//     console.log(newVal);</span>
        <span class="token comment">//   },</span>
        <span class="token comment">//   deep: true</span>
        <span class="token comment">// },</span>
        <span class="token comment">// aa: &#39;doSomething&#39;,</span>
        <span class="token comment">// aa: [{</span>
        <span class="token comment">//   handle(newVal， oldVal) {</span>
        <span class="token comment">//     console.log(newVal);</span>
        <span class="token comment">//   },</span>
        <span class="token comment">//   deep: true</span>
        <span class="token comment">// }]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>aa <span class="token operator">=</span> <span class="token number">1111</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一、侦听属性初始化" tabindex="-1"><a class="header-anchor" href="#一、侦听属性初始化" aria-hidden="true">#</a> 一、侦听属性初始化</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/state.js</span>

<span class="token comment">// 统一初始化数据的方法</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取传入的数据对象</span>
    <span class="token keyword">const</span> opts <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options
    <span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token punctuation">.</span>watch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//侦听属性初始化</span>
        <span class="token function">initWatch</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 初始化watch</span>
<span class="token keyword">function</span> <span class="token function">initWatch</span><span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> watch <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>watch
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token keyword">in</span> watch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> handler <span class="token operator">=</span> watch<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token comment">//用户自定义watch的写法可能是数组 对象 函数 字符串</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果是数组就遍历进行创建</span>
            handler<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">handle</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">createWatcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> k<span class="token punctuation">,</span> handle<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">createWatcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> k<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 创建watcher的核心</span>
<span class="token keyword">function</span> <span class="token function">createWatcher</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> exprOrFn<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> handler <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        options <span class="token operator">=</span> handler <span class="token comment">//保存用户传入的对象</span>
        handler <span class="token operator">=</span> handler<span class="token punctuation">.</span>handler <span class="token comment">//这个代表真正用户传入的函数</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> handler <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//   代表传入的是定义好的methods方法</span>
        handler <span class="token operator">=</span> vm<span class="token punctuation">[</span>handler<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//   调用vm.$watch创建用户watcher</span>
    <span class="token keyword">return</span> vm<span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span>exprOrFn<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、-watch" tabindex="-1"><a class="header-anchor" href="#二、-watch" aria-hidden="true">#</a> 二、$watch</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  src/state.js</span>
<span class="token keyword">import</span> Watcher <span class="token keyword">from</span> <span class="token string">&#39;./observer/watcher&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">stateMixin</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$nextTick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">nextTick</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$watch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">exprOrFn<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 数据应该依赖这个watcher 数据变化后应该让watcher从新执行</span>
        <span class="token comment">// vm,name,用户回调，options.user</span>
        <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> exprOrFn<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token operator">...</span>options<span class="token punctuation">,</span> <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 如果是immediate应该立刻执行</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  src/index.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> initGlobalApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./global-api/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> initMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./init&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> lifecycleMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./lifecycle&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> stateMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./state&#39;</span>
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
<span class="token function">stateMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>

<span class="token function">initGlobalApi</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、修改-watcher" tabindex="-1"><a class="header-anchor" href="#三、修改-watcher" aria-hidden="true">#</a> 三、修改 watcher</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> popTarget<span class="token punctuation">,</span> pushTarget <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dep&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> queueWatcher <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./scheduler&#39;</span>

<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
    <span class="token comment">// vm实例</span>
    <span class="token comment">// exprOrFn vm._update(vm._render())</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> exprOrFn<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vm <span class="token operator">=</span> vm
        <span class="token keyword">this</span><span class="token punctuation">.</span>exprOrFn <span class="token operator">=</span> exprOrFn
        <span class="token keyword">this</span><span class="token punctuation">.</span>cb <span class="token operator">=</span> cb
        <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
        <span class="token keyword">this</span><span class="token punctuation">.</span>isWatcher <span class="token operator">=</span> <span class="token keyword">typeof</span> options <span class="token operator">==</span> <span class="token string">&#39;boolean&#39;</span> <span class="token comment">// 是否为渲染watcher</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> options<span class="token punctuation">.</span>user <span class="token comment">// 是否为用户watcher</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token operator">++</span> <span class="token comment">// watcher的唯一标识</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>deps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">//记录有多少dep依赖它</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>depsId <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> exprOrFn <span class="token operator">==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>getter <span class="token operator">=</span> exprOrFn
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// exprOrFn可能传递过来的是一个字符串</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 当去当前实例上取值时，才会出发依赖收集</span>
                <span class="token comment">// age.n  vm[&#39;age.n&#39;]  =》 vm[&#39;age&#39;][&#39;n&#39;]</span>
                <span class="token keyword">let</span> path <span class="token operator">=</span> exprOrFn<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token comment">// [age,n]</span>
                <span class="token keyword">let</span> obj <span class="token operator">=</span> vm
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> path<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    obj <span class="token operator">=</span> obj<span class="token punctuation">[</span>path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> obj
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 默认会先调用一次get方法，进行取值，将结果保留下来</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 默认会调用get方法</span>
    <span class="token punctuation">}</span>
    <span class="token function">addDep</span><span class="token punctuation">(</span><span class="token parameter">dep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> id <span class="token operator">=</span> dep<span class="token punctuation">.</span>id
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>depsId<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>depsId<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
            dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">pushTarget</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// 当前watcher实例</span>
        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 调用exporOrFn 渲染页面 取值（执行了get方法）</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">popTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
    <span class="token punctuation">}</span>
    <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> newValue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> oldValue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> newValue <span class="token comment">// 更新老值</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里不要每次都调用get方法 get方法会重新渲染页面</span>
        <span class="token function">queueWatcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Watcher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ./observer/scheduler.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> nextTick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../utils&#39;</span>

<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 将需要批量更新的watcher存到一个队列中，稍后让watcher执行</span>
<span class="token keyword">let</span> has <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> pending <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">function</span> <span class="token function">flushSchedulerQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    queue<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">watcher</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        watcher<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>watcher<span class="token punctuation">.</span>isWatcher<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            watcher<span class="token punctuation">.</span><span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 清空watcher队列</span>
    has <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 清空标识id</span>
    pending <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">queueWatcher</span><span class="token punctuation">(</span><span class="token parameter">watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> id <span class="token operator">=</span> watcher<span class="token punctuation">.</span>id
    <span class="token keyword">if</span> <span class="token punctuation">(</span>has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>watcher<span class="token punctuation">)</span> <span class="token comment">// 将watcher存到队列中</span>
        has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pending<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//如果还没清空队列，就不要再开定时器</span>
            <span class="token comment">// 等待所有同步代码执行完毕后再执行</span>
            <span class="token function">nextTick</span><span class="token punctuation">(</span>flushSchedulerQueue<span class="token punctuation">)</span>
            pending <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h2>`,10),k={href:"https://github.com/luotianxu1/learn/tree/main/vue2/05.watch",target:"_blank",rel:"noopener noreferrer"};function r(d,v){const s=p("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",k,[o("https://github.com/luotianxu1/learn/tree/main/vue2/05.watch"),c(s)])])])}const h=a(l,[["render",r],["__file","侦听器属性原理.html.vue"]]);export{h as default};
