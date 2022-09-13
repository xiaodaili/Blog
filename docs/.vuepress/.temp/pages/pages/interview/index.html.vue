<template><div><h1 id="js-基础知识点及常考面试题-一" tabindex="-1"><a class="header-anchor" href="#js-基础知识点及常考面试题-一" aria-hidden="true">#</a> JS 基础知识点及常考面试题（一）</h1>
<p>JS 对于每位前端开发都是必备技能，在小册中我们也会有多个章节去讲述这部分的知识。首先我们先来熟悉下 JS 的一些常考和容易混乱的基础知识点。</p>
<h2 id="原始-primitive-类型" tabindex="-1"><a class="header-anchor" href="#原始-primitive-类型" aria-hidden="true">#</a> 原始（Primitive）类型</h2>
<blockquote>
<p>涉及面试题：原始类型有哪几种？null 是对象嘛？</p>
</blockquote>
<p>在 JS 中，存在着 6 种原始值，分别是：</p>
<ul>
<li><code v-pre>boolean</code></li>
<li><code v-pre>null</code></li>
<li><code v-pre>undefined</code></li>
<li><code v-pre>number</code></li>
<li><code v-pre>string</code></li>
<li><code v-pre>symbol</code></li>
</ul>
<p>首先原始类型存储的都是值，是没有函数可以调用的，比如 <code v-pre>undefined.toString()</code></p>
<p><a href="https://user-gold-cdn.xitu.io/2018/11/14/16711c4f991c73ac?w=526&amp;h=53&amp;f=png&amp;s=10255" target="_blank" rel="noopener noreferrer">https://user-gold-cdn.xitu.io/2018/11/14/16711c4f991c73ac?w=526&amp;h=53&amp;f=png&amp;s=10255<ExternalLinkIcon/></a></p>
<p>此时你肯定会有疑问，这不对呀，明明 <code v-pre>'1'.toString()</code> 是可以使用的。其实在这种情况下，<code v-pre>'1'</code> 已经不是原始类型了，而是被强制转换成了 <code v-pre>String</code> 类型也就是对象类型，所以可以调用 <code v-pre>toString</code> 函数。</p>
<p>除了会在必要的情况下强转类型以外，原始类型还有一些坑。</p>
<p>其中 JS 的 <code v-pre>number</code> 类型是浮点类型的，在使用中会遇到某些 Bug，比如 <code v-pre>0.1 + 0.2 !== 0.3</code>，但是这一块的内容会在进阶部分讲到。<code v-pre>string</code> 类型是不可变的，无论你在 <code v-pre>string</code> 类型上调用何种方法，都不会对值有改变。</p>
<p>另外对于 <code v-pre>null</code> 来说，很多人会认为他是个对象类型，其实这是错误的。虽然 <code v-pre>typeof null</code> 会输出 <code v-pre>object</code>，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，<code v-pre>000</code> 开头代表是对象，然而 <code v-pre>null</code> 表示为全零，所以将它错误的判断为 <code v-pre>object</code> 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。</p>
<h2 id="对象-object-类型" tabindex="-1"><a class="header-anchor" href="#对象-object-类型" aria-hidden="true">#</a> 对象（Object）类型</h2>
<blockquote>
<p>涉及面试题：对象类型和原始类型的不同之处？函数参数是对象会发生什么问题？</p>
</blockquote>
<p>在 JS 中，除了原始类型那么其他的都是对象类型了。对象类型和原始类型不同的是，原始类型存储的是值，对象类型存储的是地址（指针）。当你创建了一个对象类型的时候，计算机会在内存中帮我们开辟一个空间来存放值，但是我们需要找到这个空间，这个空间会拥有一个地址（指针）。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const a = []

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于常量 <code v-pre>a</code> 来说，假设内存地址（指针）为 <code v-pre>#001</code>，那么在地址 <code v-pre>#001</code> 的位置存放了值 <code v-pre>[]</code>，常量 <code v-pre>a</code> 存放了地址（指针） <code v-pre>#001</code>，再看以下代码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const a = []
const b = a
b.push(1)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们将变量赋值给另外一个变量时，复制的是原本变量的地址（指针），也就是说当前变量 <code v-pre>b</code> 存放的地址（指针）也是 <code v-pre>#001</code>，当我们进行数据修改的时候，就会修改存放在地址（指针） <code v-pre>#001</code> 上的值，也就导致了两个变量的值都发生了改变。</p>
<p>接下来我们来看函数参数是对象的情况</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function test(person) {
  person.age = 26
  person = {
    name: 'yyy',
    age: 30
  }

  return person
}
const p1 = {
  name: 'yck',
  age: 25
}
const p2 = test(p1)
console.log(p1) // -> ?
console.log(p2) // -> ?

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于以上代码，你是否能正确的写出结果呢？接下来让我为你解析一番：</p>
<ul>
<li>首先，函数传参是传递对象指针的副本</li>
<li>到函数内部修改参数的属性这步，我相信大家都知道，当前 <code v-pre>p1</code> 的值也被修改了</li>
<li>但是当我们重新为 <code v-pre>person</code> 分配了一个对象时就出现了分歧，请看下图</li>
</ul>
<p><a href="https://user-gold-cdn.xitu.io/2018/11/14/16712ce155afef8c?w=658&amp;h=414&amp;f=png&amp;s=37772" target="_blank" rel="noopener noreferrer">https://user-gold-cdn.xitu.io/2018/11/14/16712ce155afef8c?w=658&amp;h=414&amp;f=png&amp;s=37772<ExternalLinkIcon/></a></p>
<p>所以最后 <code v-pre>person</code> 拥有了一个新的地址（指针），也就和 <code v-pre>p1</code> 没有任何关系了，导致了最终两个变量的值是不相同的。</p>
<h2 id="typeof-vs-instanceof" tabindex="-1"><a class="header-anchor" href="#typeof-vs-instanceof" aria-hidden="true">#</a> <strong><a href="https://doc.vercel.app/webyck/article/5bdc715f6fb9a049c15ea4e0.html#typeof-vs-instanceof" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>typeof vs instanceof</strong></h2>
<blockquote>
<p>涉及面试题：typeof 是否能正确判断类型？instanceof 能正确判断对象的原理是什么？</p>
</blockquote>
<p><code v-pre>typeof</code> 对于原始类型来说，除了 <code v-pre>null</code> 都可以显示正确的类型</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>typeof</code> 对于对象来说，除了函数都会显示 <code v-pre>object</code>，所以说 <code v-pre>typeof</code> 并不能准确判断变量到底是什么类型</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>typeof [] // 'object'
typeof {} // 'object'
typeof console.log // 'function'

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想判断一个对象的正确类型，这时候可以考虑使用 <code v-pre>instanceof</code>，因为内部机制是通过原型链来判断的，在后面的章节中我们也会自己去实现一个 <code v-pre>instanceof</code>。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const Person = function() {}
const p1 = new Person()
p1 instanceof Person // true

var str = 'hello world'
str instanceof String // false

var str1 = new String('hello world')
str1 instanceof String // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于原始类型来说，你想直接通过 <code v-pre>instanceof</code> 来判断类型是不行的，当然我们还是有办法让 <code v-pre>instanceof</code> 判断原始类型的</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>class PrimitiveString {
  static [Symbol.hasInstance](x) {
    return typeof x === 'string'
  }
}
console.log('hello world' instanceof PrimitiveString) // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可能不知道 <code v-pre>Symbol.hasInstance</code> 是什么东西，其实就是一个能让我们自定义 <code v-pre>instanceof</code> 行为的东西，以上代码等同于 <code v-pre>typeof 'hello world' === 'string'</code>，所以结果自然是 <code v-pre>true</code> 了。这其实也侧面反映了一个问题， <code v-pre>instanceof</code> 也不是百分之百可信的。</p>
<h2 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> <strong><a href="https://doc.vercel.app/webyck/article/5bdc715f6fb9a049c15ea4e0.html#%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>类型转换</strong></h2>
<blockquote>
<p>涉及面试题：该知识点常在笔试题中见到，熟悉了转换规则就不惧怕此类题目了。</p>
</blockquote>
<p>首先我们要知道，在 JS 中类型转换只有三种情况，分别是：</p>
<ul>
<li>转换为布尔值</li>
<li>转换为数字</li>
<li>转换为字符串</li>
</ul>
<p>我们先来看一个类型转换表格，然后再进入正题</p>
<blockquote>
<p>注意图中有一个错误，Boolean 转字符串这行结果我指的是 true 转字符串的例子，不是说 Boolean、函数、Symblo 转字符串都是 <code v-pre>true</code></p>
</blockquote>
<p><a href="https://user-gold-cdn.xitu.io/2018/11/15/16716dec14421e47?w=910&amp;h=648&amp;f=png&amp;s=110463" target="_blank" rel="noopener noreferrer">https://user-gold-cdn.xitu.io/2018/11/15/16716dec14421e47?w=910&amp;h=648&amp;f=png&amp;s=110463<ExternalLinkIcon/></a></p>
<h3 id="转boolean" tabindex="-1"><a class="header-anchor" href="#转boolean" aria-hidden="true">#</a> <strong><a href="https://doc.vercel.app/webyck/article/5bdc715f6fb9a049c15ea4e0.html#%E8%BD%ACboolean" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>转Boolean</strong></h3>
<p>在条件判断时，除了 <code v-pre>undefined</code>， <code v-pre>null</code>， <code v-pre>false</code>， <code v-pre>NaN</code>， <code v-pre>''</code>， <code v-pre>0</code>， <code v-pre>-0</code>，其他所有值都转为 <code v-pre>true</code>，包括所有对象。</p>
<h3 id="对象转原始类型" tabindex="-1"><a class="header-anchor" href="#对象转原始类型" aria-hidden="true">#</a> <strong><a href="https://doc.vercel.app/webyck/article/5bdc715f6fb9a049c15ea4e0.html#%E5%AF%B9%E8%B1%A1%E8%BD%AC%E5%8E%9F%E5%A7%8B%E7%B1%BB%E5%9E%8B" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>对象转原始类型</strong></h3>
<p>对象在转换类型的时候，会调用内置的 <code v-pre>[[ToPrimitive]]</code> 函数，对于该函数来说，算法逻辑一般来说如下：</p>
<ul>
<li>如果已经是原始类型了，那就不需要转换了</li>
<li>如果需要转字符串类型就调用 <code v-pre>x.toString()</code>，转换为基础类型的话就返回转换的值。不是字符串类型的话就先调用 <code v-pre>valueOf</code>，结果不是基础类型的话再调用 <code v-pre>toString</code></li>
<li>调用 <code v-pre>x.valueOf()</code>，如果转换为基础类型，就返回转换的值</li>
<li>如果都没有返回原始类型，就会报错</li>
</ul>
<p>当然你也可以重写 <code v-pre>Symbol.toPrimitive</code> ，该方法在转原始类型时调用优先级最高。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  },
  [Symbol.toPrimitive]() {
    return 2
  }
}
1 + a // => 3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四则运算符" tabindex="-1"><a class="header-anchor" href="#四则运算符" aria-hidden="true">#</a> <strong><a href="https://doc.vercel.app/webyck/article/5bdc715f6fb9a049c15ea4e0.html#%E5%9B%9B%E5%88%99%E8%BF%90%E7%AE%97%E7%AC%A6" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>四则运算符</strong></h3>
<p>加法运算符不同于其他几个运算符，它有以下几个特点：</p>
<ul>
<li>
<p>运算中其中一方为字符串，那么就会把另一方也转换为字符串</p>
</li>
<li>
<p>如果一方不是字符串或者数字，那么会将它转换为数字或者字符串</p>
<p>1 + '1' // '11' true + true // 2 4 + [1,2,3] // &quot;41,2,3&quot;</p>
</li>
</ul>
<p>如果你对于答案有疑问的话，请看解析：</p>
<ul>
<li>对于第一行代码来说，触发特点一，所以将数字 <code v-pre>1</code> 转换为字符串，得到结果 <code v-pre>'11'</code></li>
<li>对于第二行代码来说，触发特点二，所以将 <code v-pre>true</code> 转为数字 <code v-pre>1</code></li>
<li>对于第三行代码来说，触发特点二，所以将数组通过 <code v-pre>toString</code> 转为字符串 <code v-pre>1,2,3</code>，得到结果 <code v-pre>41,2,3</code></li>
</ul>
<p>另外对于加法还需要注意这个表达式 <code v-pre>'a' + + 'b'</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>'a' + + 'b' // -> "aNaN"

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 <code v-pre>+ 'b'</code> 等于 <code v-pre>NaN</code>，所以结果为 <code v-pre>&quot;aNaN&quot;</code>，你可能也会在一些代码中看到过 <code v-pre>+ '1'</code> 的形式来快速获取 <code v-pre>number</code> 类型。</p>
<p>那么对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>4 * '3' // 12
4 * [] // 0
4 * [1, 2] // NaN

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> <strong><a href="https://doc.vercel.app/webyck/article/5bdc715f6fb9a049c15ea4e0.html#%E6%AF%94%E8%BE%83%E8%BF%90%E7%AE%97%E7%AC%A6" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>比较运算符</strong></h3>
<ol>
<li>
<p>如果是对象，就通过 <code v-pre>toPrimitive</code> 转换对象</p>
</li>
<li>
<p>如果是字符串，就通过 <code v-pre>unicode</code> 字符索引来比较</p>
<p>let a = { valueOf() { return 0 }, toString() { return '1' } } a &gt; -1 // true</p>
</li>
</ol>
<p>在以上代码中，因为 <code v-pre>a</code> 是对象，所以会通过 <code v-pre>valueOf</code> 转换为原始类型再比较值。</p>
<h2 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> <strong><a href="https://doc.vercel.app/webyck/article/5bdc715f6fb9a049c15ea4e0.html#this" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>this</strong></h2>
<blockquote>
<p>涉及面试题：如何正确判断 this？箭头函数的 this 是什么？</p>
</blockquote>
<p><code v-pre>this</code> 是很多人会混淆的概念，但是其实它一点都不难，只是网上很多文章把简单的东西说复杂了。在这一小节中，你一定会彻底明白 <code v-pre>this</code> 这个概念的。</p>
<p>我们先来看几个函数调用的场景</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function foo() {
  console.log(this.a)
}
var a = 1
foo()

const obj = {
  a: 2,
  foo: foo
}
obj.foo()

const c = new foo()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们一个个分析上面几个场景</p>
<ul>
<li>对于直接调用 <code v-pre>foo</code> 来说，不管 <code v-pre>foo</code> 函数被放在了什么地方，<code v-pre>this</code> 一定是 <code v-pre>window</code></li>
<li>对于 <code v-pre>obj.foo()</code> 来说，我们只需要记住，谁调用了函数，谁就是 <code v-pre>this</code>，所以在这个场景下 <code v-pre>foo</code> 函数中的 <code v-pre>this</code> 就是 <code v-pre>obj</code> 对象</li>
<li>对于 <code v-pre>new</code> 的方式来说，<code v-pre>this</code> 被永远绑定在了 <code v-pre>c</code> 上面，不会被任何方式改变 <code v-pre>this</code></li>
</ul>
<p>说完了以上几种情况，其实很多代码中的 <code v-pre>this</code> 应该就没什么问题了，下面让我们看看箭头函数中的 <code v-pre>this</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function a() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
console.log(a()()())

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先箭头函数其实是没有 <code v-pre>this</code> 的，箭头函数中的 <code v-pre>this</code> 只取决包裹箭头函数的第一个普通函数的 <code v-pre>this</code>。在这个例子中，因为包裹箭头函数的第一个普通函数是 <code v-pre>a</code>，所以此时的 <code v-pre>this</code> 是 <code v-pre>window</code>。另外对箭头函数使用 <code v-pre>bind</code> 这类函数是无效的。</p>
<p>最后种情况也就是 <code v-pre>bind</code> 这些改变上下文的 API 了，对于这些函数来说，<code v-pre>this</code> 取决于第一个参数，如果第一个参数为空，那么就是 <code v-pre>window</code>。</p>
<p>那么说到 <code v-pre>bind</code>，不知道大家是否考虑过，如果对一个函数进行多次 <code v-pre>bind</code>，那么上下文会是什么呢？</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let a = {}
let fn = function () { console.log(this) }
fn.bind().bind(a)() // => ?

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你认为输出结果是 <code v-pre>a</code>，那么你就错了，其实我们可以把上述代码转换成另一种形式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// fn.bind().bind(a) 等于
let fn2 = function fn1() {
  return function() {
    return fn.apply()
  }.apply(a)
}
fn2()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以从上述代码中发现，不管我们给函数 <code v-pre>bind</code> 几次，<code v-pre>fn</code> 中的 <code v-pre>this</code> 永远由第一次 <code v-pre>bind</code> 决定，所以结果永远是 <code v-pre>window</code>。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>let a = { name: 'yck' }
function foo() {
  console.log(this.name)
}
foo.bind(a)() // => 'yck'

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是 <code v-pre>this</code> 的规则了，但是可能会发生多个规则同时出现的情况，这时候不同的规则之间会根据优先级最高的来决定 <code v-pre>this</code> 最终指向哪里。</p>
<p>首先，<code v-pre>new</code> 的方式优先级最高，接下来是 <code v-pre>bind</code> 这些函数，然后是 <code v-pre>obj.foo()</code> 这种调用方式，最后是 <code v-pre>foo</code> 这种调用方式，同时，箭头函数的 <code v-pre>this</code> 一旦被绑定，就不会再被任何方式所改变。</p>
<p>如果你还是觉得有点绕，那么就看以下的这张流程图吧，图中的流程只针对于单个规则。</p>
<p><a href="https://user-gold-cdn.xitu.io/2018/11/15/16717eaf3383aae8?w=744&amp;h=531&amp;f=png&amp;s=32062" target="_blank" rel="noopener noreferrer">https://user-gold-cdn.xitu.io/2018/11/15/16717eaf3383aae8?w=744&amp;h=531&amp;f=png&amp;s=32062<ExternalLinkIcon/></a></p>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> <strong>小结</strong></h2>
<p>以上就是我们 JS 基础知识点的第一部分内容了。这一小节中涉及到的知识点在我们日常的开发中经常可以看到，并且很多容易出现的坑 也出自于这些知识点，相信认真读完的你一定会在日后的开发中少踩很多坑。如果大家对于这个章节的内容存在疑问，欢迎在评论区与我互动。</p>
</div></template>
