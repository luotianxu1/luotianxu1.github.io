import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as t}from"./app-0a44add1.js";const p={},e=t(`<h2 id="节流" tabindex="-1"><a class="header-anchor" href="#节流" aria-hidden="true">#</a> 节流</h2><p>一个函数执行一次后，只有大于设定的执行周期后才会执行第二次。 有个需要频繁触发函数，出于优化性能角度，在规定时间内，只让函数触发的第一次生效，后面不生效。</p><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 时间戳 立即执行</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> awit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> old <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">const</span> args <span class="token operator">=</span> arguments
        <span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token function">newDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> old <span class="token operator">&gt;</span> wait<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> func<span class="token punctuation">)</span>
            old <span class="token operator">=</span> now
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用定时器 第一次不执行，最后一次调用会执行</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timeout
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">const</span> args <span class="token operator">=</span> arguments
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
                timeout <span class="token operator">=</span> <span class="token keyword">null</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><ul><li>OM 元素的拖拽功能实现（mousemove）</li><li>搜索联想（keyup）</li><li>计算鼠标移动的距离（mousemove）</li><li>anvas 模拟画板功能（mousemove）</li><li>射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）</li><li>监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，只有用户停止滚动后，才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次</li></ul><h2 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h2><p>一个需要频繁触发的函数，在规定时间内，只让最后一次生效，前面的不生效。</p><h3 id="实现-1" tabindex="-1"><a class="header-anchor" href="#实现-1" aria-hidden="true">#</a> 实现</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timeout
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">const</span> args <span class="token operator">=</span> arguments
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
        timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 立即执行防抖</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> immediate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timeout
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">const</span> args <span class="token operator">=</span> arguments
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> callNow <span class="token operator">=</span> <span class="token operator">!</span>timeout
            timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                timeout <span class="token operator">=</span> <span class="token keyword">null</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>callNow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 取消防抖</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timeout
    <span class="token keyword">let</span> <span class="token function-variable function">debounced</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">const</span> args <span class="token operator">=</span> arguments
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
        timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>that<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    debounced<span class="token punctuation">.</span><span class="token function-variable function">cancel</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
        timeout <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> debounced
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用场景-1" tabindex="-1"><a class="header-anchor" href="#应用场景-1" aria-hidden="true">#</a> 应用场景</h3><ul><li>每次 resize/scroll 触发统计事件</li><li>文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）</li></ul>`,12),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","节流与防抖.html.vue"]]);export{r as default};
