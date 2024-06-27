import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-75fed8c6.js";const t={},p=e(`<h2 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令" aria-hidden="true">#</a> 自定义指令</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * v-lazy
 * 图片懒加载
 */</span>
<span class="token keyword">const</span> <span class="token literal-property property">copy</span><span class="token operator">:</span> Directive <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">el</span><span class="token operator">:</span> HTMLImageElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> imgSrc <span class="token operator">=</span> el<span class="token punctuation">.</span>src
        el<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        <span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span><span class="token punctuation">{</span> isIntersecting <span class="token punctuation">}</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// 元素出现在可视区域和离开可视区域触发</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 加载图片</span>
                el<span class="token punctuation">.</span>src <span class="token operator">=</span> imgSrc
                <span class="token comment">// 停止观察</span>
                observer<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> copy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注册指令" tabindex="-1"><a class="header-anchor" href="#注册指令" aria-hidden="true">#</a> 注册指令</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> lazy <span class="token keyword">from</span> <span class="token string">&quot;./modules/lazy&quot;</span>

<span class="token keyword">const</span> <span class="token literal-property property">directivesList</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">{</span>
 lazy
<span class="token punctuation">}</span>

<span class="token keyword">const</span> directives <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token function-variable function">install</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">app</span><span class="token operator">:</span> App<span class="token operator">&lt;</span>Element<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>directivesList<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token comment">// 注册自定义指令</span>
   app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> directivesList<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> directives

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.ts</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> directives <span class="token keyword">from</span> <span class="token string">&quot;./directives/index&quot;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>directives<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>img <span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">&quot;img&quot;</span> v<span class="token operator">-</span>lazy <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","图片懒加载.html.vue"]]);export{d as default};
