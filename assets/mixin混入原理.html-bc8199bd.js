import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as e,a as n,e as o,b as c,d as i}from"./app-0a44add1.js";const l={},u=i(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我是全局混入&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Vue实例化</span>
<span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">456</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">aa</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bb</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我是自己的&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div id=&quot;a&quot;&gt;hello 这是我自己写的Vue{{name}}
          &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一、定义全局-mixin-函数" tabindex="-1"><a class="header-anchor" href="#一、定义全局-mixin-函数" aria-hidden="true">#</a> 一、定义全局 Mixin 函数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mergeOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../utils&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initGlobalApi</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Vue<span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 用来存放全局的配置 , 每个组件初始化的时候都会和options选项进行合并</span>
    Vue<span class="token punctuation">.</span><span class="token function-variable function">mixin</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 合并对象 先考虑生命周期，先不考虑其他的合并</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建 global-api 文件夹 把 mixin 定义为 Vue 的全局方法 核心方法就是利用 mergeOptions 把传入的选项混入到自己的 options 上面</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/index.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> initMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./init.js&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// Vue就是一个构造函数 通过new关键字进行实例化</span>
<span class="token keyword">function</span> <span class="token function">Vue</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这里开始进行Vue初始化工作</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 此做法有利于代码分割</span>
<span class="token function">initMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Vue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、mergeoptions-方法" tabindex="-1"><a class="header-anchor" href="#二、mergeoptions-方法" aria-hidden="true">#</a> 二、mergeOptions 方法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/util.js</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> lifeCycleHooks <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;created&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;beforeMount&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;mounted&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;beforeUpdate&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;updated&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;beforeDestroy&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;destroyed&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token comment">// 策略模式</span>
<span class="token keyword">let</span> strats <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 存放各种策略</span>

<span class="token comment">// 生命周期的合并</span>
<span class="token keyword">function</span> <span class="token function">mergeHook</span><span class="token punctuation">(</span><span class="token parameter">parentVal<span class="token punctuation">,</span> childVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>childVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>parentVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> parentVal<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>childVal<span class="token punctuation">)</span> <span class="token comment">// 后续</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span>childVal<span class="token punctuation">]</span> <span class="token comment">// 第一次</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> parentVal
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
lifeCycleHooks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">hook</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    strats<span class="token punctuation">[</span>hook<span class="token punctuation">]</span> <span class="token operator">=</span> mergeHook
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span><span class="token parameter">parent<span class="token punctuation">,</span> child</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 遍历父亲，可能是父亲有，儿子没有</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 父亲和儿子都有在这就处理了</span>
        <span class="token function">mergeField</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 儿子有父亲没有</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        <span class="token function">mergeField</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">mergeField</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> parentVal <span class="token operator">=</span> parent<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token keyword">let</span> childVal <span class="token operator">=</span> child<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token comment">// 策略模式</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>strats<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果有对应的策略就调用对应的策略即可</span>
            options<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> strats<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">(</span>parentVal<span class="token punctuation">,</span> childVal<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>parentVal<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isObject</span><span class="token punctuation">(</span>childVal<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                options<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>parentVal<span class="token punctuation">,</span> <span class="token operator">...</span>childVal <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 父亲中有，儿子中没有</span>
                options<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> child<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">||</span> parent<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> options
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/lifecycle.js</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">callHook</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> hook</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 依次执行生命周期对应的方法</span>
  <span class="token keyword">const</span> handlers <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">[</span>hook<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>handlers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> handlers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      handlers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//生命周期里面的this指向当前实例</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/init.js</span>

<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token comment">// 这里的this代表调用_init方法的对象(实例对象)</span>
  <span class="token comment">//  this.$options就是用户new Vue的时候传入的属性和全局的Vue.options合并之后的结果</span>

  vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>options<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&quot;beforeCreate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//初始化数据之前</span>
  <span class="token comment">// 初始化状态</span>
  <span class="token function">initState</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//初始化数据之后</span>
  <span class="token comment">// 如果有el属性 进行模板渲染</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/lifecycle.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span>$el <span class="token operator">=</span> el<span class="token punctuation">;</span>
  <span class="token comment">// 引入watcher的概念 这里注册一个渲染watcher 执行vm._update(vm._render())方法渲染视图</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&quot;beforeMount&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//初始渲染之前</span>
  <span class="token keyword">let</span> <span class="token function-variable function">updateComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>
    vm<span class="token punctuation">,</span>
    updateComponent<span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&quot;beforeUpdate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//更新之前</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token boolean">true</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&quot;mounted&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//渲染完成之后</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h2>`,12),k={href:"https://github.com/luotianxu1/learn/tree/main/vue2/06.diff",target:"_blank",rel:"noopener noreferrer"};function r(d,v){const s=t("ExternalLinkIcon");return p(),e("div",null,[u,n("p",null,[n("a",k,[o("https://github.com/luotianxu1/learn/tree/main/vue2/06.diff"),c(s)])])])}const y=a(l,[["render",r],["__file","mixin混入原理.html.vue"]]);export{y as default};
