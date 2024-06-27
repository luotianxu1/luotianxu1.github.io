import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as e,c as p,a as n,e as o,b as i,d as l}from"./app-75fed8c6.js";const c="/img/project/vue.jpg",u="/img/project/vue1.jpg",r="/img/project/vue2.jpg",d="/img/project/vue4.jpg",k="/img/project/vue5.jpg",v={},m=l(`<h2 id="通过脚手架初始化项目" tabindex="-1"><a class="header-anchor" href="#通过脚手架初始化项目" aria-hidden="true">#</a> 通过脚手架初始化项目</h2><h3 id="下载项目" tabindex="-1"><a class="header-anchor" href="#下载项目" aria-hidden="true">#</a> 下载项目</h3><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm create vue@3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+c+`" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>pnpm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="运行项目" tabindex="-1"><a class="header-anchor" href="#运行项目" aria-hidden="true">#</a> 运行项目</h3><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+u+`" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="安装-scss" tabindex="-1"><a class="header-anchor" href="#安装-scss" aria-hidden="true">#</a> 安装 scss</h2><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>pnpm install sass -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h2><h3 id="初始化-git-本地仓库" tabindex="-1"><a class="header-anchor" href="#初始化-git-本地仓库" aria-hidden="true">#</a> 初始化 git 本地仓库</h3><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加所有文件" tabindex="-1"><a class="header-anchor" href="#添加所有文件" aria-hidden="true">#</a> 添加所有文件</h3><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git add .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="提交文件" tabindex="-1"><a class="header-anchor" href="#提交文件" aria-hidden="true">#</a> 提交文件</h3><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git commit -m <span class="token string">&#39;你的提交信息&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="链接到-github" tabindex="-1"><a class="header-anchor" href="#链接到-github" aria-hidden="true">#</a> 链接到 github</h3><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git remote add origin https://github.com/xxxxxxxx/vue3-base.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="推送到-github" tabindex="-1"><a class="header-anchor" href="#推送到-github" aria-hidden="true">#</a> 推送到 github</h3><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git push --set-upstream origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="设置-commit-规范" tabindex="-1"><a class="header-anchor" href="#设置-commit-规范" aria-hidden="true">#</a> 设置 commit 规范</h2><h3 id="安装依赖-1" tabindex="-1"><a class="header-anchor" href="#安装依赖-1" aria-hidden="true">#</a> 安装依赖</h3><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm install -g commitizen
pnpm add cz-customizable -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改-package-json" tabindex="-1"><a class="header-anchor" href="#修改-package-json" aria-hidden="true">#</a> 修改 package.json</h3><p>在<code>package.json</code>中进行新增</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node_modules/cz-customizable&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建配置文件" tabindex="-1"><a class="header-anchor" href="#创建配置文件" aria-hidden="true">#</a> 创建配置文件</h3><p>在根目录下新建<code>.cz-config.js</code>文件并写入配置 之后就可以用<code>git cz</code>来代替<code>git commit</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 可选类型</span>
    <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;feat&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;feat:     新功能&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;fix&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;fix:      修复&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;docs:     文档变更&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;style:    代码格式(不影响代码运行的变动)&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;refactor&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;refactor: 重构(既不是增加feature，也不是修复bug)&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;perf&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;perf:     性能优化&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;test:     增加测试&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;chore&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;chore:    构建过程或辅助工具的变动&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;revert&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;revert:   回退&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;build:    打包&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 消息步骤</span>
    <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;请选择提交类型:&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">customScope</span><span class="token operator">:</span> <span class="token string">&#39;请输入修改范围(可选):&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">&#39;请简要描述提交(必填):&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&#39;请输入详细描述(可选):&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">&#39;请输入要关闭的issue(可选):&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">confirmCommit</span><span class="token operator">:</span> <span class="token string">&#39;确认使用以上信息提交？(y/n/e/h)&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 跳过问题</span>
    <span class="token literal-property property">skipQuestions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;footer&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// subject文字长度默认是72</span>
    <span class="token literal-property property">subjectLimit</span><span class="token operator">:</span> <span class="token number">72</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在就可以用<code>git cz</code>来代替<code>git commit</code></p><figure><img src="`+r+`" alt=" " tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="强制-commit-规范" tabindex="-1"><a class="header-anchor" href="#强制-commit-规范" aria-hidden="true">#</a> 强制 commit 规范</h2><h3 id="安装依赖-2" tabindex="-1"><a class="header-anchor" href="#安装依赖-2" aria-hidden="true">#</a> 安装依赖</h3><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code> pnpm add @commitlint/config-conventional @commitlint/cli husky -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npx husky install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建配置文件-1" tabindex="-1"><a class="header-anchor" href="#创建配置文件-1" aria-hidden="true">#</a> 创建配置文件</h3><p>在根目录下新建<code>commitlint.config.js</code>文件并写入配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 继承的规则</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@commitlint/config-conventional&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 定义规则类型</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// type 类型定义，表示 git 提交的 type 必须在以下类型范围内</span>
        <span class="token string-property property">&#39;type-enum&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token string">&#39;feat&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 新功能 feature</span>
                <span class="token string">&#39;fix&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 修复 bug</span>
                <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 文档注释</span>
                <span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 代码格式(不影响代码运行的变动)</span>
                <span class="token string">&#39;refactor&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 重构(既不增加新功能，也不是修复bug)</span>
                <span class="token string">&#39;perf&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 性能优化</span>
                <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 增加测试</span>
                <span class="token string">&#39;chore&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 构建过程或辅助工具的变动</span>
                <span class="token string">&#39;revert&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 回退</span>
                <span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 打包</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// subject 大小写不做校验</span>
        <span class="token string-property property">&#39;subject-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-package-json-中新增指令" tabindex="-1"><a class="header-anchor" href="#在-package-json-中新增指令" aria-hidden="true">#</a> 在 package.json 中新增指令</h3><div class="language-test line-numbers-mode" data-ext="test"><pre class="language-test"><code>&quot;prepare&quot;: &quot;husky install&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="执行指令" tabindex="-1"><a class="header-anchor" href="#执行指令" aria-hidden="true">#</a> 执行指令</h3><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm run prepare
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加-commit-msg-钩子-执行信息校验" tabindex="-1"><a class="header-anchor" href="#添加-commit-msg-钩子-执行信息校验" aria-hidden="true">#</a> 添加 commit-msg 钩子,执行信息校验</h3><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npx husky add .husky/commit-msg &#39;npx --no-install commitlint --edit &quot;$1&quot;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><figure><img src="`+d+'" alt=" 不符合规则 " tabindex="0" loading="lazy"><figcaption> 不符合规则 </figcaption></figure><figure><img src="'+k+`" alt=" 符合规则 " tabindex="0" loading="lazy"><figcaption> 符合规则 </figcaption></figure><h2 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> eslint</h2><h3 id="创建配置文件-2" tabindex="-1"><a class="header-anchor" href="#创建配置文件-2" aria-hidden="true">#</a> 创建配置文件</h3><p>修改.eslintrc.cjs文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@rushstack/eslint-patch/modern-module-resolution&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;plugin:vue/vue3-essential&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@vue/eslint-config-typescript&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@vue/eslint-config-prettier/skip-formatting&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">&#39;latest&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;vue/multi-word-component-names&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 文件命名必须改成驼峰规范</span>
    <span class="token comment">// eslint (http://eslint.cn/docs/rules)</span>
    <span class="token string-property property">&#39;no-var&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 要求使用 let 或 const 而不是 var</span>
    <span class="token string-property property">&#39;no-multiple-empty-lines&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 不允许多个空行</span>
    <span class="token string-property property">&#39;no-use-before-define&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 禁止在 函数/类/变量 定义之前使用它们</span>
    <span class="token string-property property">&#39;no-irregular-whitespace&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 禁止不规则的空白</span>
    <span class="token comment">// vue (https://eslint.vuejs.org/rules)</span>
    <span class="token string-property property">&#39;vue/attributes-order&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span> <span class="token comment">// vue api使用顺序，强制执行属性顺序</span>
    <span class="token string-property property">&#39;vue/one-component-per-file&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 强制每个组件都应该在自己的文件中</span>
    <span class="token string-property property">&#39;vue/html-closing-bracket-newline&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 在标签的右括号之前要求或禁止换行</span>
    <span class="token string-property property">&#39;vue/max-attributes-per-line&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 强制每行的最大属性数</span>
    <span class="token string-property property">&#39;vue/multiline-html-element-content-newline&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 在多行元素的内容之前和之后需要换行符</span>
    <span class="token string-property property">&#39;vue/singleline-html-element-content-newline&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 在单行元素的内容之前和之后需要换行符</span>
    <span class="token string-property property">&#39;vue/require-default-prop&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 此规则要求为每个 prop 为必填时，必须提供默认值</span>
    <span class="token literal-property property">eqeqeq</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span> <span class="token comment">// 要求使用 === 和 !==</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建.eslintignore文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dist
node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prettie" tabindex="-1"><a class="header-anchor" href="#prettie" aria-hidden="true">#</a> prettie</h2><h3 id="创建配置文件-3" tabindex="-1"><a class="header-anchor" href="#创建配置文件-3" aria-hidden="true">#</a> 创建配置文件</h3><p>修改 .prettierrc.json 为 .prettierrc.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// @see: https://www.prettier.cn</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token comment">// 超过最大值换行</span>
 <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">130</span><span class="token punctuation">,</span>
 <span class="token comment">// 缩进字节数</span>
 <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
 <span class="token comment">// 使用制表符而不是空格缩进行</span>
 <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
 <span class="token comment">// 结尾不用分号(true有，false没有)</span>
 <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
 <span class="token comment">// 使用单引号(true单双引号，false双引号)</span>
 <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
 <span class="token comment">// 更改引用对象属性的时间 可选值&quot;&lt;as-needed|consistent|preserve&gt;&quot;</span>
 <span class="token literal-property property">quoteProps</span><span class="token operator">:</span> <span class="token string">&quot;as-needed&quot;</span><span class="token punctuation">,</span>
 <span class="token comment">// 在对象，数组括号与文字之间加空格 &quot;{ foo: bar }&quot;</span>
 <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
 <span class="token comment">// 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值&quot;&lt;none|es5|all&gt;&quot;，默认none</span>
 <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
 <span class="token comment">// 在JSX中使用单引号而不是双引号</span>
 <span class="token literal-property property">jsxSingleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
 <span class="token comment">//  (x) =&gt; {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 ,always：不省略括号</span>
 <span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span>
 <span class="token comment">// 如果文件顶部已经有一个 doclock，这个选项将新建一行注释，并打上@format标记。</span>
 <span class="token literal-property property">insertPragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
 <span class="token comment">// 指定要使用的解析器，不需要写文件开头的 @prettier</span>
 <span class="token literal-property property">requirePragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
 <span class="token comment">// 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行</span>
 <span class="token literal-property property">proseWrap</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
 <span class="token comment">// 在html中空格是否是敏感的 &quot;css&quot; - 遵守CSS显示属性的默认值， &quot;strict&quot; - 空格被认为是敏感的 ，&quot;ignore&quot; - 空格被认为是不敏感的</span>
 <span class="token literal-property property">htmlWhitespaceSensitivity</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
 <span class="token comment">// 换行符使用 lf 结尾是 可选值&quot;&lt;auto|lf|crlf|cr&gt;&quot;</span>
 <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
 <span class="token comment">// 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码</span>
 <span class="token literal-property property">rangeStart</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
 <span class="token literal-property property">rangeEnd</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
 <span class="token comment">// Vue文件脚本和样式标签缩进</span>
 <span class="token literal-property property">vueIndentScriptAndStyle</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建 .prettierignore</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stylelint" tabindex="-1"><a class="header-anchor" href="#stylelint" aria-hidden="true">#</a> stylelint</h2><h3 id="安装依赖-3" tabindex="-1"><a class="header-anchor" href="#安装依赖-3" aria-hidden="true">#</a> 安装依赖</h3><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>pnpm install stylelint@13.13.1 stylelint-config-prettier@9.0.3 stylelint-config-standard@22.0.0 stylelint-order@4.1.0 stylelint-scss@3.20.1 -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建配置文件-4" tabindex="-1"><a class="header-anchor" href="#创建配置文件-4" aria-hidden="true">#</a> 创建配置文件</h3><p>新建.stylelintrc.cjs文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
 <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-order&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stylelint-scss&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stylelint-config-prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;selector-pseudo-class-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token boolean">true</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span>
    <span class="token literal-property property">ignorePseudoClasses</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;global&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;v-deep&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;deep&quot;</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;selector-pseudo-element-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token boolean">true</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span>
    <span class="token literal-property property">ignorePseudoElements</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;v-deep&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;deep&quot;</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;at-rule-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token boolean">true</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span>
    <span class="token literal-property property">ignoreAtRules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;function&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;if&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;each&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;include&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mixin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;for&quot;</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;no-empty-source&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;named-grid-areas-no-invalid&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;unicode-bom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;no-descending-specificity&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;font-family-no-missing-generic-family-keyword&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;declaration-colon-space-after&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always-single-line&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;declaration-colon-space-before&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;declaration-block-trailing-semicolon&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">ignore</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;single-declaration&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;rule-empty-line-before&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span>
    <span class="token literal-property property">ignore</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;after-comment&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;first-nested&quot;</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;unit-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">ignoreUnits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;rpx&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;order/order&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token punctuation">[</span>
    <span class="token string">&quot;dollar-variables&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;custom-properties&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;at-rules&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;declarations&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
     <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;at-rule&quot;</span><span class="token punctuation">,</span>
     <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;supports&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
     <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;at-rule&quot;</span><span class="token punctuation">,</span>
     <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;media&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&quot;rules&quot;</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token literal-property property">severity</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// Specify the alphabetical order of the attributes in the declaration block</span>
  <span class="token string-property property">&quot;order/properties-order&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token string">&quot;position&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;bottom&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;z-index&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;display&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;float&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;width&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;height&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;max-width&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;max-height&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;min-width&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;min-height&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;padding&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;padding-top&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;padding-right&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;padding-bottom&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;padding-left&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;margin&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;margin-top&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;margin-right&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;margin-bottom&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;margin-left&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;margin-collapse&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;margin-top-collapse&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;margin-right-collapse&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;margin-bottom-collapse&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;margin-left-collapse&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;overflow&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;overflow-x&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;overflow-y&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;clip&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;clear&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;font&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;font-family&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;font-size&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;font-smoothing&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;osx-font-smoothing&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;font-style&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;font-weight&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;hyphens&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;src&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;line-height&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;letter-spacing&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;word-spacing&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;text-align&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;text-decoration&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;text-indent&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;text-overflow&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;text-rendering&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;text-size-adjust&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;text-shadow&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;text-transform&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;word-break&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;word-wrap&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;white-space&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;vertical-align&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;list-style&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;list-style-type&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;list-style-position&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;list-style-image&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;pointer-events&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;cursor&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;background&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;background-attachment&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;background-color&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;background-image&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;background-position&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;background-repeat&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;background-size&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-collapse&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-top&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-right&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-bottom&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-left&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-color&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-image&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-top-color&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-right-color&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-bottom-color&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-left-color&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-spacing&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-style&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-top-style&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-right-style&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-bottom-style&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-left-style&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-width&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-top-width&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-right-width&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-bottom-width&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-left-width&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-radius&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-top-right-radius&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-bottom-right-radius&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-bottom-left-radius&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-top-left-radius&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-radius-topright&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-radius-bottomright&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-radius-bottomleft&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;border-radius-topleft&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;quotes&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;outline&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;outline-offset&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;opacity&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;filter&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;visibility&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;zoom&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;transform&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;box-align&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;box-flex&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;box-orient&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;box-pack&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;box-shadow&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;box-sizing&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;table-layout&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;animation&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;animation-delay&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;animation-duration&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;animation-iteration-count&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;animation-name&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;animation-play-state&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;animation-timing-function&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;animation-fill-mode&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;transition&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;transition-delay&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;transition-duration&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;transition-property&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;transition-timing-function&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;background-clip&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;backface-visibility&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;appearance&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;user-select&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;interpolation-mode&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;direction&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;marks&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;set-link-source&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;unicode-bidi&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;speak&quot;</span>
  <span class="token punctuation">]</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token literal-property property">ignoreFiles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;**/*.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;**/*.jsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;**/*.tsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;**/*.ts&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建.stylelintignore文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/dist/*
/public/*
public/*
node_modules/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改package-json" tabindex="-1"><a class="header-anchor" href="#修改package-json" aria-hidden="true">#</a> 修改package.json</h3><p>新增命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;lint:stylelint&quot;: &quot;stylelint --fix \\&quot;**/*.{vue,less,postcss,css,scss}\\&quot; --cache --cache-location node_modules/.cache/stylelint/&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="统一编辑器配置" tabindex="-1"><a class="header-anchor" href="#统一编辑器配置" aria-hidden="true">#</a> 统一编辑器配置</h2><p>根目录下新增<code>.editorconfig</code>文件</p><div class="language-test line-numbers-mode" data-ext="test"><pre class="language-test"><code># @see: http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
end_of_line = lf # 控制换行类型(lf | cr | crlf)
insert_final_newline = true # 始终在文件末尾插入一个新行
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
max_line_length = 130 # 最大行长度

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off # 关闭最大行长度限制
trim_trailing_whitespace = false # 关闭末尾空格修剪
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="强制代码格式化" tabindex="-1"><a class="header-anchor" href="#强制代码格式化" aria-hidden="true">#</a> 强制代码格式化</h2><h3 id="创建配置文件-5" tabindex="-1"><a class="header-anchor" href="#创建配置文件-5" aria-hidden="true">#</a> 创建配置文件</h3><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npx husky add .husky/pre-commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h3><p>将<code>.husky/pre-commit</code>文件钟的 undefind 改为<code>npx lint-staged</code></p><h3 id="修改-package-json-1" tabindex="-1"><a class="header-anchor" href="#修改-package-json-1" aria-hidden="true">#</a> 修改 package.json</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;src/**/*.{ts,js,vue}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token string">&quot;eslint --fix&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;stylelint --fix&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;git add&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;*.{scss,less,styl,html}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token string">&quot;stylelint --fix&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;git add&quot;</span>
  <span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mac-获取权限" tabindex="-1"><a class="header-anchor" href="#mac-获取权限" aria-hidden="true">#</a> mac 获取权限</h2><p>对于 liux 或者 macos 系统中，可能会出现 因为没有将钩子 &#39;.husky/pre-commit&#39; 设置为可执行 钩子被忽略的错误。</p><p>执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chmod +x .husky/pre-commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chmod +x .husky/commit-msg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="按需引入-element-plus" tabindex="-1"><a class="header-anchor" href="#按需引入-element-plus" aria-hidden="true">#</a> 按需引入 element-plus</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>pnpm i element-plus
pnpm install unplugin-vue-components unplugin-auto-import vite-plugin-style-import consola -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ts-配置" tabindex="-1"><a class="header-anchor" href="#ts-配置" aria-hidden="true">#</a> ts 配置</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
        <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;element-plus/global&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="按需引入" tabindex="-1"><a class="header-anchor" href="#按需引入" aria-hidden="true">#</a> 按需引入</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&quot;unplugin-auto-import/vite&quot;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&quot;unplugin-vue-components/vite&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;unplugin-vue-components/resolvers&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStyleImportPlugin<span class="token punctuation">,</span> ElementPlusResolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite-plugin-style-import&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
  <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   imports<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   dts<span class="token operator">:</span> <span class="token string">&quot;src/types/auto-imports.d.ts&quot;</span><span class="token punctuation">,</span>
   eslintrc<span class="token operator">:</span> <span class="token punctuation">{</span>
    enabled<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Default \`false\`</span>
    filepath<span class="token operator">:</span> <span class="token string">&quot;./.eslintrc-auto-import.json&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Default \`./.eslintrc-auto-import.json\`</span>
    globalsPropValue<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// Default \`true\`, (true | false | &#39;readonly&#39; | &#39;readable&#39; | &#39;writable&#39; | &#39;writeable&#39;)</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   dts<span class="token operator">:</span> <span class="token string">&quot;src/types/components.d.ts&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 自动引入element-plus样式</span>
  <span class="token function">createStyleImportPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   resolves<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   libs<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
     libraryName<span class="token operator">:</span> <span class="token string">&quot;element-plus&quot;</span><span class="token punctuation">,</span>
     esModule<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
     <span class="token function-variable function">resolveStyle</span><span class="token operator">:</span> name <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">element-plus/theme-chalk/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.css</span><span class="token template-punctuation string">\`</span></span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ts-类型检查" tabindex="-1"><a class="header-anchor" href="#ts-类型检查" aria-hidden="true">#</a> ts 类型检查</h2><h3 id="创建文件" tabindex="-1"><a class="header-anchor" href="#创建文件" aria-hidden="true">#</a> 创建文件</h3><p>在 src 目录下创建<code>types</code>文件</p><h3 id="修改自动引入" tabindex="-1"><a class="header-anchor" href="#修改自动引入" aria-hidden="true">#</a> 修改自动引入</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// ...</span>
        <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            imports<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            dts<span class="token operator">:</span> <span class="token string">&#39;src/types/auto-imports.d.ts&#39;</span><span class="token punctuation">,</span>
            eslintrc<span class="token operator">:</span> <span class="token punctuation">{</span>
                enabled<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Default \`false\`</span>
                filepath<span class="token operator">:</span> <span class="token string">&#39;./.eslintrc-auto-import.json&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Default \`./.eslintrc-auto-import.json\`</span>
                globalsPropValue<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Default \`true\`, (true | false | &#39;readonly&#39; | &#39;readable&#39; | &#39;writable&#39; | &#39;writeable&#39;)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            dts<span class="token operator">:</span> <span class="token string">&#39;src/types/components.d.ts&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AutoImport 中 enabled 配置有新引入的依赖改为true，其他时间为false</p><h3 id="修改-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#修改-tsconfig-json" aria-hidden="true">#</a> 修改 tsconfig.json</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@vue/tsconfig/tsconfig.web.json&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;@assets/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/assets/*&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;element-plus/global&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./node_modules/@types/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./src/types/&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;references&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./tsconfig.node.json&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/**/*.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/**/*.d.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/**/*.tsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/**/*.vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-地址" tabindex="-1"><a class="header-anchor" href="#github-地址" aria-hidden="true">#</a> github 地址</h2>`,104),b={href:"https://github.com/luotianxu1/vue3-base",target:"_blank",rel:"noopener noreferrer"};function g(q,h){const s=t("ExternalLinkIcon");return e(),p("div",null,[m,n("p",null,[n("a",b,[o("https://github.com/luotianxu1/vue3-base"),i(s)])])])}const x=a(v,[["render",g],["__file","vue3-vite.html.vue"]]);export{x as default};
