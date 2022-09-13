<template><div><h1 id="js-基础知识点及常考面试题-二" tabindex="-1"><a class="header-anchor" href="#js-基础知识点及常考面试题-二" aria-hidden="true">#</a> JS 基础知识点及常考面试题（二）</h1>
<p>在这一章节中我们继续来了解 JS 的一些常考和容易混乱的基础知识点。</p>
<h2 id="vs" tabindex="-1"><a class="header-anchor" href="#vs" aria-hidden="true">#</a> <strong>== vs ===</strong></h2>
<blockquote>
<p>涉及面试题：== 和 === 有什么区别？</p>
</blockquote>
<p>对于 <code v-pre>==</code> 来说，如果对比双方的类型<strong>不一样</strong>的话，就会进行<strong>类型转换</strong>，这也就用到了我们上一章节讲的内容。</p>
<p>假如我们需要对比 <code v-pre>x</code> 和 <code v-pre>y</code> 是否相同，就会进行如下判断流程：</p>
<ol>
<li>
<p>首先会判断两者类型是否<strong>相同</strong>。相同的话就是比大小了</p>
</li>
<li>
<p>类型不相同的话，那么就会进行类型转换</p>
</li>
<li>
<p>会先判断是否在对比 <code v-pre>null</code> 和 <code v-pre>undefined</code>，是的话就会返回 <code v-pre>true</code></p>
</li>
<li>
<p>判断两者类型是否为 <code v-pre>string</code> 和 <code v-pre>number</code>，是的话就会将字符串转换为 <code v-pre>number</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1 == '1'
      ↓
1 ==  1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>判断其中一方是否为 <code v-pre>boolean</code>，是的话就会把 <code v-pre>boolean</code> 转为 <code v-pre>number</code> 再进行判断</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token string">'1'</span> <span class="token operator">==</span> <span class="token boolean">true</span>
        ↓
<span class="token string">'1'</span> <span class="token operator">==</span>  <span class="token number">1</span>
        ↓
 <span class="token number">1</span>  <span class="token operator">==</span>  <span class="token number">1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>判断其中一方是否为 <code v-pre>object</code> 且另一方为 <code v-pre>string</code>、<code v-pre>number</code> 或者 <code v-pre>symbol</code>，是的话就会把 <code v-pre>object</code> 转为原始类型再进行判断</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token string">'1'</span> <span class="token operator">==</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'yck'</span> <span class="token punctuation">}</span>
        ↓
<span class="token string">'1'</span> <span class="token operator">==</span> <span class="token string">'[object Object]'</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<blockquote>
<p>思考题：看完了上面的步骤，对于 [] == ![] 你是否能正确写出答案呢？</p>
</blockquote>
<p>如果你觉得记忆步骤太麻烦的话，我还提供了流程图供大家使用：</p>
<p><a href="https://user-gold-cdn.xitu.io/2018/12/19/167c4a2627fe55f1?w=1005&amp;h=426&amp;f=png&amp;s=38534" target="_blank" rel="noopener noreferrer">https://user-gold-cdn.xitu.io/2018/12/19/167c4a2627fe55f1?w=1005&amp;h=426&amp;f=png&amp;s=38534<ExternalLinkIcon/></a></p>
<p>当然了，这个流程图并没有将所有的情况都列举出来，我这里只将常用到的情况列举了，如果你想了解更多的内容可以参考 <strong><a href="https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.1" target="_blank" rel="noopener noreferrer">标准文档<ExternalLinkIcon/></a></strong>。</p>
<p>对于 <code v-pre>===</code> 来说就简单多了，就是判断两者类型和值是否相同。</p>
<p>更多的对比可以阅读这篇 <strong><a href="https://felix-kling.de/js-loose-comparison/" target="_blank" rel="noopener noreferrer">文章<ExternalLinkIcon/></a></strong></p>
<h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> <strong>闭包</strong></h2>
<blockquote>
<p>涉及面试题：什么是闭包？</p>
</blockquote>
<p>闭包的定义其实很简单：函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function A() {
  let a = 1
  window.B = function () {
      console.log(a)
  }
}
A()
B() // 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很多人对于闭包的解释可能是函数嵌套了函数，然后返回一个函数。其实这个解释是不完整的，就比如我上面这个例子就可以反驳这个观点。</p>
<p>在 JS 中，闭包存在的意义就是让我们可以间接访问函数内部的变量。</p>
<blockquote>
<p>经典面试题，循环中使用闭包解决 <code v-pre>var</code> 定义函数的问题</p>
</blockquote>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> i <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先因为 <code v-pre>setTimeout</code> 是个异步函数，所以会先把循环全部执行完毕，这时候 <code v-pre>i</code> 就是 6 了，所以会输出一堆 6。</p>
<p>解决办法有三种，第一种是使用闭包的方式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>for (var i = 1; i &lt;= 5; i++) {
  ;(function(j) {
    setTimeout(function timer() {
      console.log(j)
    }, j * 1000)
  })(i)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，我们首先使用了立即执行函数将 <code v-pre>i</code> 传入函数内部，这个时候值就被固定在了参数 <code v-pre>j</code> 上面不会改变，当下次执行 <code v-pre>timer</code> 这个闭包的时候，就可以使用外部函数的变量 <code v-pre>j</code>，从而达到目的。</p>
<p>第二种就是使用 <code v-pre>setTimeout</code> 的第三个参数，这个参数会被当成 <code v-pre>timer</code> 函数的参数传入。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>for (var i = 1; i &lt;= 5; i++) {
  setTimeout(
    function timer(j) {
      console.log(j)
    },
    i * 1000,
    i
  )
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三种就是使用 <code v-pre>let</code> 定义 <code v-pre>i</code> 了来解决问题了，这个也是最为推荐的方式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>for (let i = 1; i &lt;= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="深浅拷贝" tabindex="-1"><a class="header-anchor" href="#深浅拷贝" aria-hidden="true">#</a> <strong><a href="https://doc.vercel.app/webyck/article/5bed40d951882545f73004f6.html#%E6%B7%B1%E6%B5%85%E6%8B%B7%E8%B4%9D" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>深浅拷贝</strong></h2>
<blockquote>
<p>涉及面试题：什么是浅拷贝？如何实现浅拷贝？什么是深拷贝？如何实现深拷贝？</p>
</blockquote>
<p>在上一章节中，我们了解了对象类型在赋值的过程中其实是复制了地址，从而会导致改变了一方其他也都被改变的情况。通常在开发中我们不希望出现这样的问题，我们可以使用浅拷贝来解决这个情况。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let a = {
  age: 1
}
let b = a
a.age = 2
console.log(b.age) // 2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浅拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝" aria-hidden="true">#</a> <strong><a href="https://doc.vercel.app/webyck/article/5bed40d951882545f73004f6.html#%E6%B5%85%E6%8B%B7%E8%B4%9D" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>浅拷贝</strong></h3>
<p>首先可以通过 <code v-pre>Object.assign</code> 来解决这个问题，很多人认为这个函数是用来深拷贝的。其实并不是，<code v-pre>Object.assign</code> 只会拷贝所有的属性值到新的对象中，如果属性值是对象的话，拷贝的是地址，所以并不是深拷贝。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let a = {
  age: 1
}
let b = Object.assign({}, a)
a.age = 2
console.log(b.age) // 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外我们还可以通过展开运算符 <code v-pre>...</code> 来实现浅拷贝</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let a = {
  age: 1
}
let b = { ...a }
a.age = 2
console.log(b.age) // 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常浅拷贝就能解决大部分问题了，但是当我们遇到如下情况就可能需要使用到深拷贝了</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let a = {
  age: 1,
  jobs: {
    first: 'FE'
  }
}
let b = { ...a }
a.jobs.first = 'native'
console.log(b.jobs.first) // native

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浅拷贝只解决了第一层的问题，如果接下去的值中还有对象的话，那么就又回到最开始的话题了，两者享有相同的地址。要解决这个问题，我们就得使用深拷贝了。</p>
<h3 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> <strong><a href="https://doc.vercel.app/webyck/article/5bed40d951882545f73004f6.html#%E6%B7%B1%E6%8B%B7%E8%B4%9D" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>深拷贝</strong></h3>
<p>这个问题通常可以通过 <code v-pre>JSON.parse(JSON.stringify(object))</code> 来解决。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let a = {
  age: 1,
  jobs: {
    first: 'FE'
  }
}
let b = JSON.parse(JSON.stringify(a))
a.jobs.first = 'native'
console.log(b.jobs.first) // FE

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是该方法也是有局限性的：</p>
<ul>
<li>
<p>会忽略 <code v-pre>undefined</code></p>
</li>
<li>
<p>会忽略 <code v-pre>symbol</code></p>
</li>
<li>
<p>不能序列化函数</p>
</li>
<li>
<p>不能解决循环引用的对象</p>
<p>let obj = { a: 1, b: { c: 2, d: 3, }, } obj.c = obj.b obj.e = obj.a obj.b.c = obj.c obj.b.d = obj.b obj.b.e = obj.b.c let newObj = JSON.parse(JSON.stringify(obj)) console.log(newObj)</p>
</li>
</ul>
<p>如果你有这么一个循环引用对象，你会发现并不能通过该方法实现深拷贝</p>
<p><a href="https://user-gold-cdn.xitu.io/2018/3/28/1626b1ec2d3f9e41?w=840&amp;h=100&amp;f=png&amp;s=30123" target="_blank" rel="noopener noreferrer">https://user-gold-cdn.xitu.io/2018/3/28/1626b1ec2d3f9e41?w=840&amp;h=100&amp;f=png&amp;s=30123<ExternalLinkIcon/></a></p>
<p>在遇到函数、 <code v-pre>undefined</code> 或者 <code v-pre>symbol</code> 的时候，该对象也不能正常的序列化</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let a = {
  age: undefined,
  sex: Symbol('male'),
  jobs: function() {},
  name: 'yck'
}
let b = JSON.parse(JSON.stringify(a))
console.log(b) // {name: "yck"}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你会发现在上述情况中，该方法会忽略掉函数和 <code v-pre>undefined</code> 。</p>
<p>但是在通常情况下，复杂数据都是可以序列化的，所以这个函数可以解决大部分问题。</p>
<p>如果你所需拷贝的对象含有内置类型并且不包含函数，可以使用 <code v-pre>MessageChannel</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function structuralClone(obj) {
  return new Promise(resolve => {
    const { port1, port2 } = new MessageChannel()
    port2.onmessage = ev => resolve(ev.data)
    port1.postMessage(obj)
  })
}

var obj = {
  a: 1,
  b: {
    c: 2
  }
}

obj.b.d = obj.b

// 注意该方法是异步的
// 可以处理 undefined 和循环引用对象
const test = async () => {
  const clone = await structuralClone(obj)
  console.log(clone)
}
test()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然你可能想自己来实现一个深拷贝，但是其实实现一个深拷贝是很困难的，需要我们考虑好多种边界情况，比如原型链如何处理、DOM 如何处理等等，所以这里我们实现的深拷贝只是简易版，并且我其实更推荐使用 <strong><a href="https://lodash.com/docs#cloneDeep" target="_blank" rel="noopener noreferrer">lodash 的深拷贝函数<ExternalLinkIcon/></a></strong>。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function deepClone(obj) {
  function isObject(o) {
    return (typeof o === 'object' || typeof o === 'function') &amp;&amp; o !== null
  }

  if (!isObject(obj)) {
    throw new Error('非对象')
  }

  let isArray = Array.isArray(obj)
  let newObj = isArray ? [...obj] : { ...obj }
  Reflect.ownKeys(newObj).forEach(key => {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
  })

  return newObj
}

let obj = {
  a: [1, 2, 3],
  b: {
    c: 2,
    d: 3
  }
}
let newObj = deepClone(obj)
newObj.b.c = 1
console.log(obj.b.c) // 2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原型" tabindex="-1"><a class="header-anchor" href="#原型" aria-hidden="true">#</a> <strong><a href="https://doc.vercel.app/webyck/article/5bed40d951882545f73004f6.html#%E5%8E%9F%E5%9E%8B" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>原型</strong></h2>
<blockquote>
<p>涉及面试题：如何理解原型？如何理解原型链？</p>
</blockquote>
<p>当我们创建一个对象时 <code v-pre>let obj = { age: 25 }</code>，我们可以发现能使用很多种函数，但是我们明明没有定义过它们，对于这种情况你是否有过疑惑？</p>
<p><a href="https://user-gold-cdn.xitu.io/2018/11/16/1671d15f45fcedea?w=245****&amp;h=73&amp;f=png&amp;s=8860" target="_blank" rel="noopener noreferrer">https://user-gold-cdn.xitu.io/2018/11/16/1671d15f45fcedea?w=245****&amp;h=73&amp;f=png&amp;s=8860<ExternalLinkIcon/></a></p>
<p>当我们在浏览器中打印 <code v-pre>obj</code> 时你会发现，在 <code v-pre>obj</code> 上居然还有一个 <code v-pre>__proto__</code> 属性，那么看来之前的疑问就和这个属性有关系了。</p>
<p>其实每个 JS 对象都有 <code v-pre>__proto__</code> 属性，这个属性指向了原型。这个属性在现在来说已经不推荐直接去使用它了，这只是浏览器在早期为了让我们访问到内部属性 <code v-pre>[[prototype]]</code> 来实现的一个东西。</p>
<p>讲到这里好像还是没有弄明白什么是原型，接下来让我们再看看 <code v-pre>__proto__</code> 里面有什么吧。</p>
<p><a href="https://user-gold-cdn.xitu.io/2018/11/16/1671d2c5a6bcccc4?w=383&amp;h=271&amp;f=png&amp;s=41376" target="_blank" rel="noopener noreferrer">https://user-gold-cdn.xitu.io/2018/11/16/1671d2c5a6bcccc4?w=383&amp;h=271&amp;f=png&amp;s=41376<ExternalLinkIcon/></a></p>
<p>看到这里你应该明白了，原型也是一个对象，并且这个对象中包含了很多函数，所以我们可以得出一个结论：对于 <code v-pre>obj</code> 来说，可以通过 <code v-pre>__proto__</code> 找到一个原型对象，在该对象中定义了很多函数让我们来使用。</p>
<p>在上面的图中我们还可以发现一个 <code v-pre>constructor</code> 属性，也就是构造函数</p>
<p><a href="https://user-gold-cdn.xitu.io/2018/11/16/1671d329ec98ec0b?w=581&amp;h=404&amp;f=png&amp;s=82731" target="_blank" rel="noopener noreferrer">https://user-gold-cdn.xitu.io/2018/11/16/1671d329ec98ec0b?w=581&amp;h=404&amp;f=png&amp;s=82731<ExternalLinkIcon/></a></p>
<p>打开 <code v-pre>constructor</code> 属性我们又可以发现其中还有一个 <code v-pre>prototype</code> 属性，并且这个属性对应的值和先前我们在 <code v-pre>__proto__</code> 中看到的一模一样。所以我们又可以得出一个结论：原型的 <code v-pre>constructor</code> 属性指向构造函数，构造函数又通过 <code v-pre>prototype</code> 属性指回原型，但是并不是所有函数都具有这个属性，<code v-pre>Function.prototype.bind()</code> 就没有这个属性。</p>
<p>其实原型就是那么简单，接下来我们再来看一张图，相信这张图能让你彻底明白原型和原型链</p>
<p><a href="https://user-gold-cdn.xitu.io/2018/11/16/1671d387e4189ec8?w=618&amp;h=781&amp;f=png&amp;s=266099" target="_blank" rel="noopener noreferrer">https://user-gold-cdn.xitu.io/2018/11/16/1671d387e4189ec8?w=618&amp;h=781&amp;f=png&amp;s=266099<ExternalLinkIcon/></a></p>
<p>看完这张图，我再来解释下什么是原型链吧。其实原型链就是多个对象通过 <code v-pre>__proto__</code> 的方式连接了起来。为什么 <code v-pre>obj</code> 可以访问到 <code v-pre>valueOf</code> 函数，就是因为 <code v-pre>obj</code> 通过原型链找到了 <code v-pre>valueOf</code> 函数。</p>
<p>对于这一小节的知识点，总结起来就是以下几点：</p>
<ul>
<li><code v-pre>Object</code> 是所有对象的爸爸，所有对象都可以通过 <code v-pre>__proto__</code> 找到它</li>
<li><code v-pre>Function</code> 是所有函数的爸爸，所有函数都可以通过 <code v-pre>__proto__</code> 找到它</li>
<li>函数的 <code v-pre>prototype</code> 是一个对象</li>
<li>对象的 <code v-pre>__proto__</code> 属性指向原型， <code v-pre>__proto__</code> 将对象和原型连接起来组成了原型链</li>
</ul>
<p>如果你还想深入学习原型这部分的内容，可以阅读我之前写的**<a href="https://github.com/KieSun/Dream/issues/2" target="_blank" rel="noopener noreferrer">文章<ExternalLinkIcon/></a>**</p>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> <strong><a href="https://doc.vercel.app/webyck/article/5bed40d951882545f73004f6.html#%E5%B0%8F%E7%BB%93" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>小结</strong></h2>
<p>以上就是全部的常考和容易混乱的基础知识点了，下一章节我们将会学习 ES6 部分的知识。如果大家对于这个章节的内容存在疑问，欢迎在评论区与我互动。</p>
</div></template>
