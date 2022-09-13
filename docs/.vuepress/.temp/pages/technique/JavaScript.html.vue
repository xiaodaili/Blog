<template><div><h2 id="客户端操作" tabindex="-1"><a class="header-anchor" href="#客户端操作" aria-hidden="true">#</a> 客户端操作</h2>
<h3 id="bom对象" tabindex="-1"><a class="header-anchor" href="#bom对象" aria-hidden="true">#</a> BOM对象</h3>
<ol>
<li>window 对象：
<ol>
<li>当使用 window.open来打开新的页面的时候 他会返回一个对象， 也就是window本身，可以借助这个值来判断浏览器是否关闭了弹窗的限制</li>
</ol>
</li>
<li>loaction 对象
<ol>
<li>这个脸面包含了一些 关于 地址栏的操作，search 只能获取？之后的字符串，具体的参数需要自己截取</li>
</ol>
</li>
<li>navigator
<ol>
<li>可以使用navigator 上的plugins 来监听插件的使用</li>
</ol>
</li>
</ol>
<h3 id="dom对象" tabindex="-1"><a class="header-anchor" href="#dom对象" aria-hidden="true">#</a> DOM对象</h3>
<ol>
<li>
<p>MutationObserver</p>
<ol>
<li>这个会提供一些对于DOM属性监视的API ，只要当前监听元素的属性发生变化，都会被监听到</li>
</ol>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// 选择需要观察变动的节点</span>
<span class="token keyword">const</span> targetNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'some-id'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 观察器的配置（需要观察什么变动）</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">childList</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">subtree</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 当观察到变动时执行的回调函数</span>
<span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">mutationsList<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Use traditional 'for loops' for IE 11</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> mutation <span class="token keyword">of</span> mutationsList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mutation<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'childList'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'A child node has been added or removed.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>mutation<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'attributes'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'The '</span> <span class="token operator">+</span> mutation<span class="token punctuation">.</span>attributeName <span class="token operator">+</span> <span class="token string">' attribute was modified.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个观察器实例并传入回调函数</span>
<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 以上述配置开始观察目标节点</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>targetNode<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 之后，可停止观察</span>
observer<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>NodeList 对象是<code v-pre>实时更新</code>的，</li>
</ol>
</li>
</ol>
</div></template>
