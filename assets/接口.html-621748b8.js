import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-0a44add1.js";const p={},t=e(`<p>在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。</p><p>TypeScript 中的接口是一个非常灵活的概念，除了可用于[对类的一部分行为进行抽象]以外，也常用于对「对象的形状（Shape）」进行描述。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，我们定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致。</p><p>接口一般首字母大写。</p><p>定义的变量比接口多或少了一些属性是不允许的：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// index.ts(6,5): error TS2322: Type &#39;{ name: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">//   Property &#39;age&#39; is missing in type &#39;{ name: string; }&#39;.</span>

<span class="token keyword">let</span> tom2<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// index.ts(9,5): error TS2322: Type &#39;{ name: string; age: number; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">//   Object literal may only specify known properties, and &#39;gender&#39; does not exist in type &#39;Person&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可选-只读属性" tabindex="-1"><a class="header-anchor" href="#可选-只读属性" aria-hidden="true">#</a> 可选 | 只读属性</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只读属性用于限制只能在对象刚刚创建的时候修改其值。此外 TypeScript 还提供了 <code>ReadonlyArray&lt;T&gt;</code> 类型，它与 <code>Array&lt;T&gt;</code> 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> ro<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> a
ro<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">12</span> <span class="token comment">// error!</span>
ro<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// error!</span>
ro<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">100</span> <span class="token comment">// error!</span>
a <span class="token operator">=</span> ro <span class="token comment">// error!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="任意属性" tabindex="-1"><a class="header-anchor" href="#任意属性" aria-hidden="true">#</a> 任意属性</h2><p>有时候我们希望一个接口中除了包含必选和可选属性之外，还允许有其他的任意属性，这时我们可以使用 索引签名 的形式来满足上述要求。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// index.ts(3,5): error TS2411: Property &#39;age&#39; of type &#39;number&#39; is not assignable to string index type &#39;string&#39;.</span>
<span class="token comment">// index.ts(7,5): error TS2322: Type &#39;{ [x: string]: string | number; name: string; age: number; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>
<span class="token comment">//   Index signatures are incompatible.</span>
<span class="token comment">//     Type &#39;string | number&#39; is not assignable to type &#39;string&#39;.</span>
<span class="token comment">//       Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。</p><p>一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 这里真实的类型应该为：number | undefined</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口与类型别名的区别" tabindex="-1"><a class="header-anchor" href="#接口与类型别名的区别" aria-hidden="true">#</a> 接口与类型别名的区别</h2><p>实际上，在大多数的情况下使用接口类型和类型别名的效果等价，但是在某些特定的场景下这两者还是存在很大区别。</p><p>type(类型别名)会给一个类型起个新名字。 type 有时和 interface 很像，但是可以作用于原始值（基本类型），联合类型，元组以及其它任何你需要手写的类型。起别名不会新建一个类型 - 它创建了一个新 名字来引用那个类型。给基本类型起别名通常没什么用，尽管可以做为文档的一种形式使用。</p><h3 id="objects-functions" tabindex="-1"><a class="header-anchor" href="#objects-functions" aria-hidden="true">#</a> Objects / Functions</h3><p>两者都可以用来描述对象或函数的类型，但是语法不同。</p><blockquote><p>Interface</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SetPoint</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Type</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">SetPoint</span> <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="other-types" tabindex="-1"><a class="header-anchor" href="#other-types" aria-hidden="true">#</a> Other Types</h3><p>与接口不同，类型别名还可以用于其他类型，如基本类型（原始值）、联合类型、元组。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// primitive</span>
<span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token builtin">string</span>

<span class="token comment">// object</span>
<span class="token keyword">type</span> <span class="token class-name">PartialPointX</span> <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">PartialPointY</span> <span class="token operator">=</span> <span class="token punctuation">{</span> y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>

<span class="token comment">// union</span>
<span class="token keyword">type</span> <span class="token class-name">PartialPoint</span> <span class="token operator">=</span> PartialPointX <span class="token operator">|</span> PartialPointY

<span class="token comment">// tuple</span>
<span class="token keyword">type</span> <span class="token class-name">Data</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span>

<span class="token comment">// dom</span>
<span class="token keyword">let</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> div
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口可以定义多次-类型别名不可以" tabindex="-1"><a class="header-anchor" href="#接口可以定义多次-类型别名不可以" aria-hidden="true">#</a> 接口可以定义多次,类型别名不可以</h3><p>与类型别名不同，接口可以定义多次，会被自动合并为单个接口。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> point<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h3><h4 id="接口扩展接口" tabindex="-1"><a class="header-anchor" href="#接口扩展接口" aria-hidden="true">#</a> 接口扩展接口</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PointX</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token keyword">extends</span> <span class="token class-name">PointX</span> <span class="token punctuation">{</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类型别名扩展类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名扩展类型别名" aria-hidden="true">#</a> 类型别名扩展类型别名</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token keyword">type</span> <span class="token class-name">PointX</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> PointX <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="接口扩展类型别名" tabindex="-1"><a class="header-anchor" href="#接口扩展类型别名" aria-hidden="true">#</a> 接口扩展类型别名</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">PointX</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token keyword">extends</span> <span class="token class-name">PointX</span> <span class="token punctuation">{</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类型别名扩展接口" tabindex="-1"><a class="header-anchor" href="#类型别名扩展接口" aria-hidden="true">#</a> 类型别名扩展接口</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PointX</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> PointX <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),i=[t];function o(l,c){return s(),a("div",null,i)}const u=n(p,[["render",o],["__file","接口.html.vue"]]);export{u as default};
