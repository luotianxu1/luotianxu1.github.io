import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as t,a as n,e as c,b as o,d as i}from"./app-0a44add1.js";const l={},u=i(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Vue实例化</span>
<span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// render(h) {</span>
    <span class="token comment">//   return h(&#39;div&#39;,{id:&#39;a&#39;},&#39;hello&#39;)</span>
    <span class="token comment">// },</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div id=&quot;a&quot;&gt;hello {{a}}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 我们在这里模拟更新</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">456</span>
    <span class="token comment">// 此方法是刷新视图的核心</span>
    vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一、定义-watcher" tabindex="-1"><a class="header-anchor" href="#一、定义-watcher" aria-hidden="true">#</a> 一、定义 Watcher</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/observer/watcher.js</span>

<span class="token comment">// 全局变量id  每次new Watcher都会自增</span>
<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> exprOrFn<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vm <span class="token operator">=</span> vm
        <span class="token keyword">this</span><span class="token punctuation">.</span>exprOrFn <span class="token operator">=</span> exprOrFn
        <span class="token keyword">this</span><span class="token punctuation">.</span>cb <span class="token operator">=</span> cb <span class="token comment">//回调函数 比如在watcher更新之前可以执行beforeUpdate方法</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options <span class="token comment">//额外的选项 true代表渲染watcher</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token operator">++</span> <span class="token comment">// watcher的唯一标识</span>
        <span class="token comment">// 如果表达式是一个函数</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> exprOrFn <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>getter <span class="token operator">=</span> exprOrFn
        <span class="token punctuation">}</span>
        <span class="token comment">// 实例化就会默认调用get方法</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 observer 文件夹下新建 watcher.js 代表和观察者相关 这里首先介绍 Vue 里面使用到的观察者模式 我们可以把 Watcher 当做观察者 它需要订阅数据的变动 当数据变动之后 通知它去执行某些方法 其实本质就是一个构造函数 初始化的时候会去执行 get 方法</p><h2 id="二、创建渲染-watcher" tabindex="-1"><a class="header-anchor" href="#二、创建渲染-watcher" aria-hidden="true">#</a> 二、创建渲染 Watcher</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/lifecycle.js</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mountComponent</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//   _update和._render方法都是挂载在Vue原型的方法  类似_init</span>

    <span class="token comment">// 引入watcher的概念 这里注册一个渲染watcher 执行vm._update(vm._render())方法渲染视图</span>

    <span class="token keyword">let</span> <span class="token function-variable function">updateComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;刷新页面&#39;</span><span class="token punctuation">)</span>
        vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> updateComponent<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在组件挂载方法里面 定义一个渲染 Watcher 主要功能就是执行核心渲染页面的方法</p><h2 id="三、定义-dep" tabindex="-1"><a class="header-anchor" href="#三、定义-dep" aria-hidden="true">#</a> 三、定义 Dep</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/observer/dep.js</span>

<span class="token comment">// dep和watcher是多对多的关系</span>

<span class="token comment">// 每个属性都有自己的dep</span>

<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">//dep实例的唯一标识</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token operator">++</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 这个是存放watcher的容器</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 默认Dep.target为null</span>
Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dep 也是一个构造函数 可以把他理解为观察者模式里面的被观察者 在 subs 里面收集 watcher 当数据变动的时候通知自身 subs 所有的 watcher 更新</p><p>Dep.target 是一个全局 Watcher 指向 初始状态是 null</p><h2 id="四、对象的依赖收集" tabindex="-1"><a class="header-anchor" href="#四、对象的依赖收集" aria-hidden="true">#</a> 四、对象的依赖收集</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/observer/index.js</span>

<span class="token comment">// Object.defineProperty数据劫持核心 兼容性在ie9以及以上</span>
<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">observe</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>

    <span class="token keyword">let</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 为每个属性实例化一个Dep</span>

    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 页面取值的时候 可以把watcher收集到dep里面--依赖收集</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 如果有watcher dep就会保存watcher 同时watcher也会保存dep</span>
                dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> value
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">===</span> value<span class="token punctuation">)</span> <span class="token keyword">return</span>
            <span class="token comment">// 如果赋值的新值也是一个对象  需要观测</span>
            <span class="token function">observe</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>
            value <span class="token operator">=</span> newValue
            dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 通知渲染watcher去更新--派发更新</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上诉代码就是依赖收集和派发更新的核心 其实就是在数据被访问的时候 把我们定义好的渲染 Watcher 放到 dep 的 subs 数组里面 同时把 dep 实例对象也放到渲染 Watcher 里面去 数据更新时就可以通知 dep 的 subs 存储的 watcher 更新</p><h2 id="五、完善-watcher" tabindex="-1"><a class="header-anchor" href="#五、完善-watcher" aria-hidden="true">#</a> 五、完善 watcher</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/observer/watcher.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> pushTarget<span class="token punctuation">,</span> popTarget <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dep&#39;</span>

<span class="token comment">// 全局变量id  每次new Watcher都会自增</span>
<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> exprOrFn<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vm <span class="token operator">=</span> vm
        <span class="token keyword">this</span><span class="token punctuation">.</span>exprOrFn <span class="token operator">=</span> exprOrFn
        <span class="token keyword">this</span><span class="token punctuation">.</span>cb <span class="token operator">=</span> cb <span class="token comment">//回调函数 比如在watcher更新之前可以执行beforeUpdate方法</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options <span class="token comment">//额外的选项 true代表渲染watcher</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token operator">++</span> <span class="token comment">// watcher的唯一标识</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>deps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">//存放dep的容器</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>depsId <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//用来去重dep</span>
        <span class="token comment">// 如果表达式是一个函数</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> exprOrFn <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>getter <span class="token operator">=</span> exprOrFn
        <span class="token punctuation">}</span>
        <span class="token comment">// 实例化就会默认调用get方法</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">pushTarget</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// 在调用方法之前先把当前watcher实例推到全局Dep.target上</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//如果watcher是渲染watcher 那么就相当于执行  vm._update(vm._render()) 这个方法在render函数执行的时候会取值 从而实现依赖收集</span>
        <span class="token function">popTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 在调用方法之后把当前watcher实例从全局Dep.target移除</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//   把dep放到deps里面 同时保证同一个dep只被保存到watcher一次  同样的  同一个watcher也只会保存在dep一次</span>
    <span class="token function">addDep</span><span class="token punctuation">(</span><span class="token parameter">dep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> id <span class="token operator">=</span> dep<span class="token punctuation">.</span>id
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>depsId<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>depsId<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span>
            <span class="token comment">//   直接调用dep的addSub方法  把自己--watcher实例添加到dep的subs容器里面</span>
            dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//   这里简单的就执行以下get方法  之后涉及到计算属性就不一样了</span>
    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>watcher 在调用 getter 方法前后分别把自身赋值给 Dep.target 方便进行依赖收集 update 方法用来更新</p><h2 id="六、完善-dep" tabindex="-1"><a class="header-anchor" href="#六、完善-dep" aria-hidden="true">#</a> 六、完善 dep</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/observer/dep.js</span>

<span class="token comment">// dep和watcher是多对多的关系</span>
<span class="token comment">// 每个属性都有自己的dep</span>
<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">//dep实例的唯一标识</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token operator">++</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 这个是存放watcher的容器</span>
    <span class="token punctuation">}</span>
    <span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//   如果当前存在watcher</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            Dep<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">addDep</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// 把自身-dep实例存放在watcher里面</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//   依次执行subs里面的watcher更新方法</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">watcher</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> watcher<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">addSub</span><span class="token punctuation">(</span><span class="token parameter">watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//   把watcher加入到自身的subs容器</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>watcher<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 默认Dep.target为null</span>
Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token comment">// 栈结构用来存watcher</span>
<span class="token keyword">const</span> targetStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">pushTarget</span><span class="token punctuation">(</span><span class="token parameter">watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    targetStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>watcher<span class="token punctuation">)</span>
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> watcher <span class="token comment">// Dep.target指向当前watcher</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">popTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    targetStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 当前watcher出栈 拿到上一个watcher</span>
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> targetStack<span class="token punctuation">[</span>targetStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、数组的依赖收集" tabindex="-1"><a class="header-anchor" href="#七、数组的依赖收集" aria-hidden="true">#</a> 七、数组的依赖收集</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/observer/index.js</span>

<span class="token comment">// Object.defineProperty数据劫持核心 兼容性在ie9以及以上</span>
<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> childOb <span class="token operator">=</span> <span class="token function">observe</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token comment">// childOb就是Observer实例</span>

    <span class="token keyword">let</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 为每个属性实例化一个Dep</span>

    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 页面取值的时候 可以把watcher收集到dep里面--依赖收集</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 如果有watcher dep就会保存watcher 同时watcher也会保存dep</span>
                dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>childOb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 这里表示 属性的值依然是一个对象 包含数组和对象 childOb指代的就是Observer实例对象  里面的dep进行依赖收集</span>
                    <span class="token comment">// 比如{a:[1,2,3]} 属性a对应的值是一个数组 观测数组的返回值就是对应数组的Observer实例对象</span>
                    childOb<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 如果数据结构类似 {a:[1,2,[3,4,[5,6]]]} 这种数组多层嵌套  数组包含数组的情况  那么我们访问a的时候 只是对第一层的数组进行了依赖收集 里面的数组因为没访问到  所以五大收集依赖  但是如果我们改变了a里面的第二层数组的值  是需要更新页面的  所以需要对数组递归进行依赖收集</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token comment">// 如果内部还是数组</span>
                            <span class="token function">dependArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token comment">// 不停的进行依赖收集</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> value
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">===</span> value<span class="token punctuation">)</span> <span class="token keyword">return</span>
            <span class="token comment">// 如果赋值的新值也是一个对象  需要观测</span>
            <span class="token function">observe</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>
            value <span class="token operator">=</span> newValue
            dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 通知渲染watcher去更新--派发更新</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 递归收集数组依赖</span>
<span class="token keyword">function</span> <span class="token function">dependArray</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> e<span class="token punctuation">,</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> value<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e <span class="token operator">=</span> value<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token comment">// e.__ob__代表e已经被响应式观测了 但是没有收集依赖 所以把他们收集到自己的Observer实例的dep里面</span>
        e <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>__ob__ <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>__ob__<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果数组里面还有数组  就递归去收集依赖</span>
            <span class="token function">dependArray</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果对象属性的值是一个数组 那么执行 childOb.dep.depend()收集数组的依赖 如果数组里面还包含数组 需要递归遍历收集 因为只有访问数据触发了 get 才会去收集依赖 一开始只是递归对数据进行响应式处理无法收集依赖 这两点需要分清</p><h2 id="八、数组的派发更新" tabindex="-1"><a class="header-anchor" href="#八、数组的派发更新" aria-hidden="true">#</a> 八、数组的派发更新</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/observer/array.js</span>

methodsToPatch<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    arrayMethods<span class="token punctuation">[</span>method<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//   这里保留原型方法的执行结果</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> arrayProto<span class="token punctuation">[</span>method<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
        <span class="token comment">// 这句话是关键</span>
        <span class="token comment">// this代表的就是数据本身 比如数据是{a:[1,2,3]} 那么我们使用a.push(4)  this就是a  ob就是a.__ob__ 这个属性代表的是该数据已经被响应式观察过了 __ob__对象指的就是Observer实例</span>
        <span class="token keyword">const</span> ob <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__ob__
        <span class="token keyword">let</span> inserted
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>method<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&#39;push&#39;</span><span class="token operator">:</span>
            <span class="token keyword">case</span> <span class="token string">&#39;unshift&#39;</span><span class="token operator">:</span>
                inserted <span class="token operator">=</span> args
                <span class="token keyword">break</span>
            <span class="token keyword">case</span> <span class="token string">&#39;splice&#39;</span><span class="token operator">:</span>
                inserted <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
                <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>inserted<span class="token punctuation">)</span> ob<span class="token punctuation">.</span><span class="token function">observeArray</span><span class="token punctuation">(</span>inserted<span class="token punctuation">)</span> <span class="token comment">// 对新增的每一项进行观测</span>
        ob<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//数组派发更新 ob指的就是数组对应的Observer实例 我们在get的时候判断如果属性的值还是对象那么就在Observer实例的dep收集依赖 所以这里是一一对应的  可以直接更新</span>
        <span class="token keyword">return</span> result
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h2>`,25),r={href:"https://github.com/luotianxu1/learn/tree/main/vue2/04.update",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const s=e("ExternalLinkIcon");return p(),t("div",null,[u,n("p",null,[n("a",r,[c("https://github.com/luotianxu1/learn/tree/main/vue2/04.update"),o(s)])])])}const h=a(l,[["render",d],["__file","渲染更新原理.html.vue"]]);export{h as default};
