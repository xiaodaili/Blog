<template><div><h1 id="es6-知识点及常考面试题" tabindex="-1"><a class="header-anchor" href="#es6-知识点及常考面试题" aria-hidden="true">#</a> <strong>ES6 知识点及常考面试题</strong></h1>
<p>本章节我们将来学习 ES6 部分的内容。</p>
<h2 id="var、let-及-const-区别" tabindex="-1"><a class="header-anchor" href="#var、let-及-const-区别" aria-hidden="true">#</a> <strong><a href="https://doc.vercel.app/webyck/article/5bdd0d83f265da615f76ba57.html#var%E3%80%81let-%E5%8F%8A-const-%E5%8C%BA%E5%88%AB" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>var、let 及 const 区别</strong></h2>
<blockquote>
<p>涉及面试题：什么是提升？什么是暂时性死区？var、let 及 const 区别？</p>
</blockquote>
<p>对于这个问题，我们应该先来了解提升（hoisting）这个概念。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>console.log(a) // undefined
var a = 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述代码中我们可以发现，虽然变量还没有被声明，但是我们却可以使用这个未被声明的变量，这种情况就叫做提升，并且提升的是声明。</p>
<p>对于这种情况，我们可以把代码这样来看</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var a
console.log(a) // undefined
a = 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们再来看一个例子</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var a = 10
var a
console.log(a)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于这个例子，如果你认为打印的值为 <code v-pre>undefined</code> 那么就错了，答案应该是 <code v-pre>10</code>，对于这种情况，我们这样来看代码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var a
var a
a = 10
console.log(a)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里为止，我们已经了解了 <code v-pre>var</code> 声明的变量会发生提升的情况，其实不仅变量会提升函数也会被提升。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>console.log(a) // ƒ a() {}
function a() {}
var a = 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上述代码，打印结果会是 <code v-pre>ƒ a() {}</code>，即使变量声明在函数之后，这也说明了函数会被提升，并且优先于变量提升。</p>
<p>说完了这些，想必大家也知道 <code v-pre>var</code> 存在的问题了，使用 <code v-pre>var</code> 声明的变量会被提升到作用域的顶部，接下来我们再来看 <code v-pre>let</code> 和 <code v-pre>const</code> 。</p>
<p>我们先来看一个例子：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var a = 1
let b = 1
const c = 1
console.log(window.b) // undefined
console.log(window. c) // undefined

function test(){
  console.log(a)
  let a
}
test()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先在全局作用域下使用 <code v-pre>let</code> 和 <code v-pre>const</code> 声明变量，变量并不会被挂载到 <code v-pre>window</code> 上，这一点就和 <code v-pre>var</code> 声明有了区别。</p>
<p>再者当我们在声明 <code v-pre>a</code> 之前如果使用了 <code v-pre>a</code>，就会出现报错的情况</p>
<p><a href="https://user-gold-cdn.xitu.io/2018/11/18/1672730318cfa540?w=447&amp;h=49&amp;f=png&amp;s=10542" target="_blank" rel="noopener noreferrer">https://user-gold-cdn.xitu.io/2018/11/18/1672730318cfa540?w=447&amp;h=49&amp;f=png&amp;s=10542<ExternalLinkIcon/></a></p>
<p>你可能会认为这里也出现了提升的情况，但是因为某些原因导致不能访问。</p>
<p>首先报错的原因是因为存在暂时性死区，我们不能在声明前就使用变量，这也是 <code v-pre>let</code> 和 <code v-pre>const</code> 优于 <code v-pre>var</code> 的一点。然后这里你认为的提升和 <code v-pre>var</code> 的提升是有区别的，虽然变量在编译的环节中被告知在这块作用域中可以访问，但是访问是受限制的。</p>
<p>那么到这里，想必大家也都明白 <code v-pre>var</code>、<code v-pre>let</code> 及 <code v-pre>const</code> 区别了，不知道你是否会有这么一个疑问，为什么要存在提升这个事情呢，其实提升存在的根本原因就是为了解决函数间互相调用的情况</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function test1() {
    test2()
}
function test2() {
    test1()
}
test1()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如不存在提升这个情况，那么就实现不了上述的代码，因为不可能存在 <code v-pre>test1</code> 在 <code v-pre>test2</code> 前面然后 <code v-pre>test2</code> 又在 <code v-pre>test1</code> 前面。</p>
<p>那么最后我们总结下这小节的内容：</p>
<ul>
<li>函数提升优先于变量提升，函数提升会把整个函数挪到作用域顶部，变量提升只会把声明挪到作用域顶部</li>
<li><code v-pre>var</code> 存在提升，我们能在声明之前使用。<code v-pre>let</code>、<code v-pre>const</code> 因为暂时性死区的原因，不能在声明前使用</li>
<li><code v-pre>var</code> 在全局作用域下声明变量会导致变量挂载在 <code v-pre>window</code> 上，其他两者不会</li>
<li><code v-pre>let</code> 和 <code v-pre>const</code> 作用基本一致，但是后者声明的变量不能再次赋值</li>
</ul>
<h2 id="原型继承和-class-继承" tabindex="-1"><a class="header-anchor" href="#原型继承和-class-继承" aria-hidden="true">#</a> <strong>原型继承和 Class 继承</strong></h2>
<blockquote>
<p>涉及面试题：原型如何实现继承？Class 如何实现继承？Class 本质是什么？</p>
</blockquote>
<p>首先先来讲下 <code v-pre>class</code>，其实在 JS 中并不存在类，<code v-pre>class</code> 只是语法糖，本质还是函数。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>class Person {}
Person instanceof Function // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上一章节中我们讲解了原型的知识点，在这一小节中我们将会分别使用原型和 <code v-pre>class</code> 的方式来实现继承。</p>
<h3 id="组合继承" tabindex="-1"><a class="header-anchor" href="#组合继承" aria-hidden="true">#</a> <strong>组合继承</strong></h3>
<p>组合继承是最常用的继承方式，</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function Parent(value) {
  this.val = value
}
Parent.prototype.getValue = function() {
  console.log(this.val)
}
function Child(value) {
  Parent.call(this, value)
}
Child.prototype = new Parent()

const child = new Child(1)

child.getValue() // 1
child instanceof Parent // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上继承的方式核心是在子类的构造函数中通过 <code v-pre>Parent.call(this)</code> 继承父类的属性，然后改变子类的原型为 <code v-pre>new Parent()</code> 来继承父类的函数。</p>
<p>这种继承方式优点在于构造函数可以传参，不会与父类引用属性共享，可以复用父类的函数，但是也存在一个缺点就是在继承父类函数的时候调用了父类构造函数，导致子类的原型上多了不需要的父类属性，存在内存上的浪费。</p>
<p><a href="https://user-gold-cdn.xitu.io/2018/11/19/1672aeb24a2e2cae?w=319&amp;h=105&amp;f=png&amp;s=9858" target="_blank" rel="noopener noreferrer">https://user-gold-cdn.xitu.io/2018/11/19/1672aeb24a2e2cae?w=319&amp;h=105&amp;f=png&amp;s=9858<ExternalLinkIcon/></a></p>
<h3 id="寄生组合继承" tabindex="-1"><a class="header-anchor" href="#寄生组合继承" aria-hidden="true">#</a> <strong>寄生组合继承</strong></h3>
<p>这种继承方式对组合继承进行了优化，组合继承缺点在于继承父类函数时调用了构造函数，我们只需要优化掉这点就行了。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function Parent(value) {
  this.val = value
}
Parent.prototype.getValue = function() {
  console.log(this.val)
}

function Child(value) {
  Parent.call(this, value)
}
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true
  }
})

const child = new Child(1)

child.getValue() // 1
child instanceof Parent // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上继承实现的核心就是将父类的原型赋值给了子类，并且将构造函数设置为子类，这样既解决了无用的父类属性问题，还能正确的找到子类的构造函数。</p>
<p><a href="https://user-gold-cdn.xitu.io/2018/11/19/1672afb8dfa21361?w=358&amp;h=101&amp;f=png&amp;s=11092" target="_blank" rel="noopener noreferrer">https://user-gold-cdn.xitu.io/2018/11/19/1672afb8dfa21361?w=358&amp;h=101&amp;f=png&amp;s=11092<ExternalLinkIcon/></a></p>
<h3 id="class-继承" tabindex="-1"><a class="header-anchor" href="#class-继承" aria-hidden="true">#</a> <strong>Class 继承</strong></h3>
<p>以上两种继承方式都是通过原型去解决的，在 ES6 中，我们可以使用 <code v-pre>class</code> 去实现继承，并且实现起来很简单</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>class Parent {
  constructor(value) {
    this.val = value
  }
  getValue() {
    console.log(this.val)
  }
}
class Child extends Parent {
  constructor(value) {
    super(value)
  }
}
let child = new Child(1)
child.getValue() // 1
child instanceof Parent // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>class</code> 实现继承的核心在于使用 <code v-pre>extends</code> 表明继承自哪个父类，并且在子类构造函数中必须调用 <code v-pre>super</code>，因为这段代码可以看成 <code v-pre>Parent.call(this, value)</code>。</p>
<p>当然了，之前也说了在 JS 中并不存在类，<code v-pre>class</code> 的本质就是函数。</p>
<h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> <strong>模块化</strong></h2>
<blockquote>
<p>涉及面试题：为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特点？</p>
</blockquote>
<p>使用一个技术肯定是有原因的，那么使用模块化可以给我们带来以下好处</p>
<ul>
<li>解决命名冲突</li>
<li>提供复用性</li>
<li>提高代码可维护性</li>
</ul>
<h3 id="立即执行函数" tabindex="-1"><a class="header-anchor" href="#立即执行函数" aria-hidden="true">#</a> <strong>立即执行函数</strong></h3>
<p>在早期，使用立即执行函数实现模块化是常见的手段，通过函数作用域解决了命名冲突、污染全局作用域的问题</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>(function(globalVariable){
   globalVariable.test = function() {}
   // ... 声明各种变量、函数都不会污染全局作用域
})(globalVariable)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="amd-和-cmd" tabindex="-1"><a class="header-anchor" href="#amd-和-cmd" aria-hidden="true">#</a> <strong>AMD 和 CMD</strong></h3>
<p>鉴于目前这两种实现方式已经很少见到，所以不再对具体特性细聊，只需要了解这两者是如何使用的。</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// AMD</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'./a'</span><span class="token punctuation">,</span> <span class="token string">'./b'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 加载模块完毕可以使用</span>
  a<span class="token punctuation">.</span><span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  b<span class="token punctuation">.</span><span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// CMD</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 加载模块</span>
  <span class="token comment">// 可以把 require 写在函数体的任意地方实现延迟加载</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./a'</span><span class="token punctuation">)</span>
  a<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> <strong>CommonJS</strong></h3>
<p>CommonJS 最早是 Node 在使用，目前也仍然广泛使用，比如在 Webpack 中你就能见到它，当然目前在 Node 中的模块管理已经和 CommonJS 有一些区别了。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// a.js
module.exports = {
    a: 1
}
// or
exports.a = 1

// b.js
var module = require('./a.js')
module.a // -> log 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 CommonJS 还是会使用到的，所以这里会对一些疑难点进行解析</p>
<p>先说 <code v-pre>require</code> 吧</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">var</span> module <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./a.js'</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>a
<span class="token comment">// 这里其实就是包装了一层立即执行函数，这样就不会污染全局变量了，</span>
<span class="token comment">// 重要的是 module 这里，module 是 Node 独有的一个变量</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token comment">// module 基本实现</span>
<span class="token keyword">var</span> module <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'xxxx'</span><span class="token punctuation">,</span> <span class="token comment">// 我总得知道怎么去找到他吧</span>
  <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// exports 就是个空对象</span>
<span class="token punctuation">}</span>
<span class="token comment">// 这个是为什么 exports 和 module.exports 用法相似的原因</span>
<span class="token keyword">var</span> exports <span class="token operator">=</span> module<span class="token punctuation">.</span>exports
<span class="token keyword">var</span> <span class="token function-variable function">load</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 导出的东西</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
    module<span class="token punctuation">.</span>exports <span class="token operator">=</span> a
    <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 然后当我 require 的时候去找到独特的</span>
<span class="token comment">// id，然后将要使用的东西用立即执行函数包装下，over</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外虽然 <code v-pre>exports</code> 和 <code v-pre>module.exports</code> 用法相似，但是不能对 <code v-pre>exports</code> 直接赋值。因为 <code v-pre>var exports = module.exports</code> 这句代码表明了 <code v-pre>exports</code> 和 <code v-pre>module.exports</code> 享有相同地址，通过改变对象的属性值会对两者都起效，但是如果直接对 <code v-pre>exports</code> 赋值就会导致两者不再指向同一个内存地址，修改并不会对 <code v-pre>module.exports</code> 起效。</p>
<h3 id="es-module" tabindex="-1"><a class="header-anchor" href="#es-module" aria-hidden="true">#</a> <strong>ES Module</strong></h3>
<p>ES Module 是原生实现的模块化方案，与 CommonJS 有以下几个区别</p>
<ul>
<li>
<p>CommonJS 支持动态导入，也就是 <code v-pre>require(${path}/xx.js)</code>，后者目前不支持，但是已有提案</p>
</li>
<li>
<p>CommonJS 是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。而后者是异步导入，因为用于浏览器，需要下载文件，如果也采用同步导入会对渲染有很大影响</p>
</li>
<li>
<p>CommonJS 在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。但是 ES Module 采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化</p>
</li>
<li>
<p>ES Module 会编译成 <code v-pre>require/exports</code> 来执行的</p>
<p>// 引入模块 API import XXX from './a.js' import { XXX } from './a.js' // 导出模块 API export function a() {} export default function() {}</p>
</li>
</ul>
<h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> <strong><a href="https://doc.vercel.app/webyck/article/5bdd0d83f265da615f76ba57.html#proxy" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>Proxy</strong></h2>
<blockquote>
<p>涉及面试题：Proxy 可以实现什么功能？</p>
</blockquote>
<p>如果你平时有关注 Vue 的进展的话，可能已经知道了在 Vue3.0 中将会通过 <code v-pre>Proxy</code> 来替换原本的 <code v-pre>Object.defineProperty</code> 来实现数据响应式。 Proxy 是 ES6 中新增的功能，它可以用来自定义对象中的操作。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let p = new Proxy(target, handler)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>target</code> 代表需要添加代理的对象，<code v-pre>handler</code> 用来自定义对象中的操作，比如可以用来自定义 <code v-pre>set</code> 或者 <code v-pre>get</code> 函数。</p>
<p>接下来我们通过 <code v-pre>Proxy</code> 来实现一个数据响应式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let onWatch = (obj, setBind, getLogger) => {
  let handler = {
    get(target, property, receiver) {
      getLogger(target, property)
      return Reflect.get(target, property, receiver)
    },
    set(target, property, value, receiver) {
      setBind(value, property)
      return Reflect.set(target, property, value)
    }
  }
  return new Proxy(obj, handler)
}

let obj = { a: 1 }
let p = onWatch(
  obj,
  (v, property) => {
    console.log(`监听到属性${property}改变为${v}`)
  },
  (target, property) => {
    console.log(`'${property}' = ${target[property]}`)
  }
)
p.a = 2 // 监听到属性a改变
p.a // 'a' = 2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，我们通过自定义 <code v-pre>set</code> 和 <code v-pre>get</code> 函数的方式，在原本的逻辑中插入了我们的函数逻辑，实现了在对对象任何属性进行读写时发出通知。</p>
<p>当然这是简单版的响应式实现，如果需要实现一个 Vue 中的响应式，需要我们在 <code v-pre>get</code> 中收集依赖，在 <code v-pre>set</code> 派发更新，之所以 Vue3.0 要使用 <code v-pre>Proxy</code> 替换原本的 API 原因在于 <code v-pre>Proxy</code> 无需一层层递归为每个属性添加代理，一次即可完成以上操作，性能上更好，并且原本的实现有一些数据更新不能监听到，但是 <code v-pre>Proxy</code> 可以完美监听到任何方式的数据改变，唯一缺陷可能就是浏览器的兼容性不好了。</p>
<blockquote>
<p>更新：评论中有同学对于 Proxy 无需一层层递归为每个属性添加代理有疑问，以下是实现代码。</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>get(target, property, receiver) {
    getLogger(target, property)
    // 这句判断代码是新增的
    if (typeof target[property] === 'object' &amp;&amp; target[property] !== null) {
        return new Proxy(target[property], handler);
    } else {
        return Reflect.get(target, property);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="map-filter-reduce" tabindex="-1"><a class="header-anchor" href="#map-filter-reduce" aria-hidden="true">#</a> <strong><a href="https://doc.vercel.app/webyck/article/5bdd0d83f265da615f76ba57.html#map-filter-reduce" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>map, filter, reduce</strong></h2>
<blockquote>
<p>涉及面试题：map, filter, reduce 各自有什么作用？</p>
</blockquote>
<p><code v-pre>map</code> 作用是生成一个新数组，遍历原数组，将每个元素拿出来做一些变换然后放入到新的数组中。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[1, 2, 3].map(v => v + 1) // -> [2, 3, 4]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>另外 <code v-pre>map</code> 的回调函数接受三个参数，分别是当前索引元素，索引，原数组</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>['1','2','3'].map(parseInt)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>第一轮遍历 <code v-pre>parseInt('1', 0) -&gt; 1</code></li>
<li>第二轮遍历 <code v-pre>parseInt('2', 1) -&gt; NaN</code></li>
<li>第三轮遍历 <code v-pre>parseInt('3', 2) -&gt; NaN</code></li>
</ul>
<p><code v-pre>filter</code> 的作用也是生成一个新数组，在遍历数组的时候将返回值为 <code v-pre>true</code> 的元素放入新数组，我们可以利用这个函数删除一些不需要的元素</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let array = [1, 2, 4, 6]
let newArray = array.filter(item => item !== 6)
console.log(newArray) // [1, 2, 4]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和 <code v-pre>map</code> 一样，<code v-pre>filter</code> 的回调函数也接受三个参数，用处也相同。</p>
<p>最后我们来讲解 <code v-pre>reduce</code> 这块的内容，同时也是最难理解的一块内容。<code v-pre>reduce</code> 可以将数组中的元素通过回调函数最终转换为一个值。</p>
<p>如果我们想实现一个功能将函数里的元素全部相加得到一个值，可能会这样写代码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const arr = [1, 2, 3]
let total = 0
for (let i = 0; i &lt; arr.length; i++) {
  total += arr[i]
}
console.log(total) //6

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果我们使用 <code v-pre>reduce</code> 的话就可以将遍历部分的代码优化为一行代码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const arr = [1, 2, 3]
const sum = arr.reduce((acc, current) => acc + current, 0)
console.log(sum)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 <code v-pre>reduce</code> 来说，它接受两个参数，分别是回调函数和初始值，接下来我们来分解上述代码中 <code v-pre>reduce</code> 的过程</p>
<ul>
<li>首先初始值为 <code v-pre>0</code>，该值会在执行第一次回调函数时作为第一个参数传入</li>
<li>回调函数接受四个参数，分别为累计值、当前元素、当前索引、原数组，后三者想必大家都可以明白作用，这里着重分析第一个参数</li>
<li>在一次执行回调函数时，当前值和初始值相加得出结果 <code v-pre>1</code>，该结果会在第二次执行回调函数时当做第一个参数传入</li>
<li>所以在第二次执行回调函数时，相加的值就分别是 <code v-pre>1</code> 和 <code v-pre>2</code>，以此类推，循环结束后得到结果 <code v-pre>6</code></li>
</ul>
<p>想必通过以上的解析大家应该明白 <code v-pre>reduce</code> 是如何通过回调函数将所有元素最终转换为一个值的，当然 <code v-pre>reduce</code> 还可以实现很多功能，接下来我们就通过 <code v-pre>reduce</code> 来实现 <code v-pre>map</code> 函数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const arr = [1, 2, 3]
const mapArray = arr.map(value => value * 2)
const reduceArray = arr.reduce((acc, current) => {
  acc.push(current * 2)
  return acc
}, [])
console.log(mapArray, reduceArray) // [2, 4, 6]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你对这个实现还有困惑的话，可以根据上一步的解析步骤来分析过程。</p>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> <strong><a href="https://doc.vercel.app/webyck/article/5bdd0d83f265da615f76ba57.html#%E5%B0%8F%E7%BB%93" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>小结</strong></h2>
<p>这一章节我们了解了部分 ES6 常考的知识点，其他的一些异步内容我们会放在下一章节去讲。如果大家对于这个章节的内容存在疑问，欢迎在评论区与我互动。</p>
</div></template>
