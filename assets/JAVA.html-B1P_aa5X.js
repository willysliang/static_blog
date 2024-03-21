import{_ as n,o as s,c as a,b as e}from"./app-Bvx-HY_0.js";const t="/static_blog/assets/image-20201118004738408-BiIbpbr7.png",p="/static_blog/assets/image-20201121231502343-DniFp2xH.png",i="/static_blog/assets/image-20201127231816069-DPS8gqPJ.png",l="/static_blog/assets/image-20201128010728114-BGPOHbWx.png",c="/static_blog/assets/image-20201128012122146-DwW7dQEs.png",o="/static_blog/assets/image-20201213203936235-DTr6O--Y.png",u="/static_blog/assets/image-20201228224638118-C-JvuixP.png",d="/static_blog/assets/image-20201209194721831-DkeL0Qj-.png",r="/static_blog/assets/image-20201213154924305-Cfgk9Q9Y.png",v="/static_blog/assets/image-20201213165043245-DInbFz3S.png",k="/static_blog/assets/image-20201213173832116-Da4xU51R.png",m="/static_blog/assets/image-20201213180123190-CyRJLUYI.png",b="/static_blog/assets/image-20201213181618683-C93PItLB.png",g="/static_blog/assets/image-20201215165655008-CQHyE6Nl.png",y="/static_blog/assets/image-20210324124037323-fyz2rCvD.png",h="/static_blog/assets/image-20201213182248786-DR1endSX.png",w={},j=e('<h2 id="java" tabindex="-1"><a class="header-anchor" href="#java"><span>JAVA</span></a></h2><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h2><p>java大小写敏感，即区分大小写</p><h2 id="配置-运行" tabindex="-1"><a class="header-anchor" href="#配置-运行"><span>配置/运行</span></a></h2><h3 id="安装环境搭配" tabindex="-1"><a class="header-anchor" href="#安装环境搭配"><span>安装环境搭配</span></a></h3><p><img src="'+t+'" alt="image-20201118004738408"></p><h4 id="idea快捷键" tabindex="-1"><a class="header-anchor" href="#idea快捷键"><span>idea快捷键</span></a></h4><p><img src="'+p+`" alt="image-20201121231502343"></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*快捷生成for循环方式 
5.fori
生出如下代码==&gt; */</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**自动生成getter/setter和构造方法：**code-&gt;generate；快捷方式：alt+Insert</p><p>快捷生成输出代码：sout</p><p>快捷生成主方法：psvm</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h3><p>1、方法定义</p><p>方法是若干语句的功能集合。</p><p>方法（工厂），参数（原料-&gt;进入方法的数据），返回值（产出物-&gt;从方法中出来的数据）</p><p>蒙牛工厂-&gt;原料:奶牛、饲料、水 产出物:奶制品</p><p>钢铁工厂-&gt;原料:铁矿石、煤炭 产出物:钢铁建材</p><p>定义方法格式：修饰符 返回值类型 方法名称(参数类型 参数，...){方法体 return 返回值；}</p><p>修饰符--&gt;（public、static）</p><p>2、方法调用</p><ul><li>单独调用：方法名称（参数）</li><li>打印调用：System.out.println(方法名称（参数）);</li><li>赋值调用：返回值类型 变量名 = 方法名称（参数）;</li></ul><p>注意：返回值类型为void的方法只能单独调用，不能进行打印或赋值调用</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
public static void 方法名称(){
    方法体;
}
调用格式：方法名称();
注意：
1、方法定义的先后顺序无要求
2、方法定义必须是挨着的，不能再方法内部定义另外一个方法
3、方法定义后，自身不会执行；如果希望执行，则需要对方法进行调用
*/</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">abc</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//调用abc方法</span>
<span class="token punctuation">}</span>
<span class="token comment">//定义的abc方法</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">abc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;新定义的方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法重载</strong></p><p>重载是方法不变，参数的个数、参数类型、参数的多类型顺序不同</p><p><img src="`+i+`" alt="image-20201127231816069"></p><p><strong>静态方法与非静态方法的区别：</strong></p><p>1、静态方法隶属于类，既可通过对象来调用，亦可通过类名来调用；</p><p>非静态方法则只可以通过对象来调用。</p><p>2、static的Method and attribute 只能是对类而言， 而non-static 的，是对于对象而言的。</p><p>3、两者在系统分配内存的时候也是不同的： 前者是用栈分配内存，速度快，是在类第一次载入的时候初始化。 后者是用堆分配内存，速度慢些，是在对象初始化的时候，伴随着初始化的。</p><p>4、所谓静态变量或方法, 就是以static修饰的变量或方法, 如static int count;它的意义是让系统分配一个静态空间给这个变量count, 那么包含这个变量的类的全部实例就会共用这个变量, 任何一个改变了count都会对其余的实例产生影响, 它是在文件编绎时就被初始化的, 比一切其它non-static 变量都要早;而non-static 变量就是每一个类实例都有自己的count, 任何实例的改变都不会 影响到其它的实例的count(也就是分配了各自的空间), 它们是第一次使用的时 候才被初始化的; static 和non-static 的方法的区别也是差不多的, 只是一点要注注意的就是 static 成员(变量或方法), 只能调用static 成员, 而不能调用non-static成员。</p><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h3><ul><li>数组时一种引用数据类型</li><li>数组当中的多个数据类型必须统一</li><li>数组长度在程序运行期间不可改变</li><li>初始化（动态初始化-指定长度、静态初始化-指定内容）</li><li>确定数组内容用静态初始化，不确定用动态初始化</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//动态初始化，指定长度</span>
<span class="token comment">//数据类型[] 数组名称 = new 数据类型[数组长度]</span>
<span class="token keyword">double</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrayA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">double</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//静态初始化,指定内容</span>
<span class="token comment">//数据类型[] 数组名称 = new 数据类型[]{元素1,元素2,元素3,...,元素n}</span>
<span class="token keyword">double</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrayB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">double</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span>	<span class="token comment">//长度是4</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrayC <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>	<span class="token comment">//长度是2</span>

<span class="token comment">//省略格式</span>
<span class="token keyword">double</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrayB <span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//数组的输出</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arrayB<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//输出数组的首地址</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arrayB<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//输出数组第一位数：1</span>
<span class="token comment">//数组的长度</span>
<span class="token keyword">int</span> len <span class="token operator">=</span> arrayB<span class="token punctuation">.</span>length<span class="token punctuation">;</span>


<span class="token comment">//通过数组存储多个返回值</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;总和：&quot;</span><span class="token operator">+</span>result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;平均数：&quot;</span><span class="token operator">+</span>result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">,</span><span class="token keyword">int</span> c<span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
    <span class="token keyword">int</span> avg <span class="token operator">=</span> sum <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span>sum<span class="token punctuation">,</span> avg <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> array<span class="token punctuation">;</span>	<span class="token comment">//返回一个数组</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>空指针异常NullPointerException</strong></p><p>数组必须进行new初始化才能使用其中元素，如果只赋了一个null值，没有进行new创建，则发生空指针异常 NullPointerException</p><p>原因：没new初始化--&gt;解决：new初始化</p><h3 id="java的内存划分" tabindex="-1"><a class="header-anchor" href="#java的内存划分"><span>JAVA的内存划分</span></a></h3><p><img src="`+l+'" alt="image-20201128010728114"></p><p><img src="'+c+`" alt="image-20201128012122146"></p><h4 id="面向对象思想" tabindex="-1"><a class="header-anchor" href="#面向对象思想"><span>面向对象思想</span></a></h4><p>面向过程：（强调步骤）当需要实现一个功能时，每一个步骤都需要详细处理</p><p>面向对象：（强调对象）当需要实现一个功能时，不关心具体的步骤，而是找一个JDK中的类来帮忙实现</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> test<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">mian</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">//要求打印格式为1,2,3,4,5,6,7,8,9,0</span>

         <span class="token comment">//面对过程</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>array<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//面对对象</span>
        <span class="token comment">//找一个JDK提供的Arrays类</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>类与对象的区别</strong></p><p>1、类是对某一类事物的描述，是抽象的；对象是一类事物的实例，是具体的。</p><p>类是对象的模板，对象是类的实体。</p><p>对象是一个实实在在的个体，是类的一个实例。</p><p>比如：“人”是一个类，而“教师”则是“人”的一个实例。</p><p>2、对象是函数、变量的集合体；</p><p>而类是一组函数和变量的集合体，</p><p>即类是一组具有相同属性的对象集合体。</p><p>3、UML的类图和对象图之间的区别是：</p><p>类图中类名首字母大写，对象图中的对象名首字母小写。</p><p>对象名下有一条下划线，而类名没有。</p><p>4、类的数据值是共享的，一个实例能访问它所属类的类数据值；</p><p>而实例数据属于单个对象，除共享了所在类中的数据外，</p><p>不同对象还会有不同的数据值。</p><p>5、先有类，才有类的实例——对象。</p><p>应用在当你在创建某个类的实例（对象）之前，这个类必须被定义。</p><p>6、实例方法和类方法的区别在于：</p><p>实例方法属于单个对象，类方法属于类。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*成员变量（属性）:
    String name;	//姓名
	int age;	//年龄
成员方法（行为）:
	public void eat(){}
*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>
    <span class="token comment">//成员变量</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span><span class="token comment">//姓名</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span><span class="token comment">//年龄</span>
    
    <span class="token comment">//成员方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token class-name">String</span> food<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;吃：&quot;</span><span class="token operator">+</span>food<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>导包</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
1、导包
import 包名称.类名称;
import cn.gdufe.edu.cn.student;对于和当前类属于同一个包的情况，可以省略导包语句不写
（即不在同一个页面内，需要导包）
2、创建格式：
类名称 对象名 = new 类名称();
Student stu = new Student();
3、使用
使用成员变量：对象名.成员变量名
使用成员方法：对象名.成员方法名(参数)
*/</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Student</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//null</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//0</span>
    stu<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Kobe&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//Kobe</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&quot;水果&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//吃：水果</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用对象类型做方法的返回值</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Student</span> stu2 <span class="token operator">=</span> <span class="token function">getStudent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu2<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//June</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu2<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//17</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Student</span> <span class="token function">getStudent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Student</span> stu1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    stu1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;June&quot;</span><span class="token punctuation">;</span>
    stu1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> stu1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>匿名对象</strong></p><p>匿名对象就是只有右边的对象，没有左边的名字和赋值运算符</p><p>匿名对象只能使用一次，下一次再使用会再次创建新的对象</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">mian</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token class-name">Student</span> stu1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   stu1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;ABC&quot;</span><span class="token punctuation">;</span>
   
   <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Kobe&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>成员变量和局部变量的区别</strong></p><p>局部变量：在方法内部，只有方法能用；没有默认值；位于栈内存</p><p>成员变量：直接写在类中；整个类都可以用；有默认起始值；位于堆内存</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> test<span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>	<span class="token comment">//成员变量</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>	<span class="token comment">//局部变量</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>面对对象三大特征：封装、继承、多态</p><p><strong>封装性</strong></p><p>将一些细节信息隐藏起来，对于外界不可见</p><p><strong>继承</strong></p><p>被继承的类叫超类（superclass )，继承超类的类叫子类（subclass ）。</p><p>继承是多态的前提；继承主要解决的问题：共性抽取</p><p>子类是超类的一个专门用途的版本，它继承了超类定义的所有实例变量和方法，并且为它自己增添了独特的元素。</p><p>在继承关系当中，一个子类能够从它的超类当中继承所有的东西，子类能够吸收现有类的数据和方法。</p><p>通过继承，子类不仅仅展示了其超类的行为和特征，而且还展示了特定于自身的行为和特征。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
public class 父亲名称{}
public class 子类名称 extends 父亲名称{}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>变量访问</p><p>直接通过子类对象访问成员变量：</p><p>​ 等号左边是谁，就优先用谁，没有则向上找。</p><p>间接通过子类对象访问成员变量：</p><p>​ 该方法属于谁，就优先用谁，没有则向上找。</p></li><li><p>变量调用</p><p>局部变量：变量名</p><p>本类变量：this.变量名</p><p>父类变量：super.变量名</p></li></ul><p><strong>重写</strong></p><p>重写(Override)：方法名称一样，参数列表一样 重载(Overload)：方法名称一样，参数列表不一样</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
方法覆盖重写的注意事项：
    1、必须保证父子类之间的方法名称与参数列表相同
    2、@Override:写在方法前，检测是否有效正确覆盖重写（可不写，但要保证正确）
    3、子类方法的返回值必须小于等于父类方法的返回值
    4、Object类是所有类的公共最高父类（祖宗类）,java.lang.String就是Object的子类
    5、子类方法的权限必须大于等于父类方法的权限修饰符
        public &gt; protected &gt; (default) &gt; private
        dafault不是关键字，而是什么不写，留空
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>四种权限修饰符</strong></p><p><img src="`+o+`" alt="image-20201213203936235"></p><p><strong>private关键字</strong></p><p>问题描述：定义数据变量时，无法阻止不合理的数值被设置进来；</p><p>解决方案：用private关键字将需要保护的成员变量进行修饰</p><p>一旦使用了private进行修饰，本类中可以随意访问，但是，超出本类之外就不能访问</p><p><strong>final关键字</strong></p><p>final关键字代表最终、不可改变的。</p><p>不能使用final关键字修饰父类。</p><p>可用来修饰类、方法、局部变量、成员变量</p><p><strong>this</strong></p><p>解决重名调用问题</p><p>this.成员变量名--&gt;访问成员变量</p><p>如果该方法内存在相同的变量名，会先调用方法内的变量，如果想调用成员变量，则需要this来调用</p><p><strong>getter/setter</strong></p><p>自动生成getter/setter和构造方法：code-&gt;generate；快捷方式：alt+Insert</p><p><strong>构造方法</strong></p><p>构造方法是专门用来创建对象的方法，当我们通过New关键字来创建对象时，就是在调用构造方法</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
格式：public ；类名称(参数类型 参数名){方法体}
注意：构造方法名称必须和所在类名一致；不能写返回值类型，包括void；不能return
*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;这是构造方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>静态static关键字</strong></p><p>一旦使用static关键字，则此内容属于类；所以凡是本类的对象，都共享同一份。</p><p>如果没有static关键字，必须首先创建对象，然后通过对象调用；</p><p>如果有static关键字，则不需创建对象，直接通过类名称来使用它。</p><p>无论是成员变量还是成员方法，如果有static，都推荐使用类名称来进行调用：</p><p>静态变量：类名称.静态变量</p><p>静态方法：类名称.静态方法()</p><p>注意：</p><p>静态不能访问非静态。原因：因为在内存中是先有静态内容，后有非静态内容。</p><p>静态方法中不能用this。原因：this代表当前对象，通过谁调用的方法，谁就是当前对象</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo1</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">MyClass<span class="token punctuation">.</span>MethodStatic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">MethodStatic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;这是静态方法	&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>静态代码块</strong></p><p>当第一次用到本类时，静态代码块执行唯一的一次。</p><p>静态代码块典型用途：用来一次性对静态成员变量赋值。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> 类名称<span class="token punctuation">{</span>
	staic <span class="token punctuation">{</span>
		<span class="token comment">//静态代码块</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法、函数、消息、变量、属性之间的关系</strong></p><p>1、方法就是对象的行为，即函数；</p><p>2、消息也是调用某个对象的函数，即方法。</p><p>3、变量就是对象的状态，即属性。</p><h3 id="api文档" tabindex="-1"><a class="header-anchor" href="#api文档"><span>API文档</span></a></h3><p><strong>Scanner</strong>：输入</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//System.in代表从键盘输入</span>
<span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//获取键盘输入的int数字</span>
<span class="token keyword">int</span> num <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//获取键盘输入的String字符串</span>
<span class="token keyword">int</span> str <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Random</strong>：随机数</p><p><strong>Person</strong>：数组</p><p><strong>ArrayList</strong>：集合</p><p>数组的长度可以发生改变，但是ArrayList集合的长度是可以改变的</p><p>ArrayList，有一个<code>&lt;E&gt;</code>代表泛型</p><p>泛型：装在集合当中的所有元素（统一数据类型，泛型只能是引用类型，不能是基本类型）</p><p>ArrayList打印出来的是内容，不是地址；如果内容为空，则输出[]</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
常用方法：
public boolean add(E e);向集合添加元素，参数类型和泛型一直
public E get(int,index);从集合获取元素，参数是索引编号，返回值是对应位置的元素
public E remove(int index);从集合中删除元素，参数时索引编号，返回值是被删掉的元素
public int size(); 获取集合的长度，返回值为元素个数
（返回值代表是否执行成功）
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//从JDK1.7+开始，右侧&lt;&gt;内部可以不写内容，但&lt;&gt;本身需要写</span>
<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//向集合添加数据</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Kobe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;June&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//[Kobe,June]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数组-1" tabindex="-1"><a class="header-anchor" href="#数组-1"><span>数组</span></a></h4><p>程序中所有的双引号字符串，都是String类的对象。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//使用空参构造</span>
    <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//str1是空的字符串</span>
    
    <span class="token comment">//根据字符数组创建</span>
    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token char">&#39;A&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;B&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;C&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//str2为ABC</span>
    
    <span class="token comment">//根据字节数组创建字符串</span>
    <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">97</span><span class="token punctuation">,</span><span class="token number">98</span><span class="token punctuation">,</span><span class="token number">99</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//str3为abc</span>
    
    <span class="token comment">//直接创建</span>
    <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>内容比较 equals()与equalsIgnoreCase()</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//区分大小写 equals()</span>
<span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//false</span>
<span class="token class-name">Sysytem</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//true</span>

<span class="token comment">//不区分大小写equalsIgnoreCase()</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>索引查找</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">&quot;World&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//拼接字符串</span>
<span class="token class-name">String</span> str3 <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//HelloWorld</span>

<span class="token comment">//获取指定索引位置的单个字符</span>
<span class="token keyword">char</span> ch <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">.</span><span class="token function">chatAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//e</span>

<span class="token comment">//查找参数字符串在本来字符串当中出现的第一次索引位置（-1代表没有）</span>
str1<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;llo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//2	</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>字符串转换</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">mian</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">&quot;HelloWorld&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">//字符串截取	substring</span>
    <span class="token class-name">String</span> str2 <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">subsring</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//World</span>
    
    <span class="token comment">//字符串替换	replace()</span>
    <span class="token class-name">String</span> str3 <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;l&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//He**oW*rld</span>
    
    <span class="token comment">//分割字符串	splice</span>
    <span class="token class-name">String</span> str4 <span class="token operator">=</span> <span class="token string">&quot;aaa,bbb,ccc&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array1 <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>将int[]数组转变为字符串格式</strong>：String intStr = Arrays.toString(intArray);</p><p><strong>数组重新排序</strong>：Arrays.sort(数组); //默认字母/从小到大排序</p><p><strong>String--&gt;数组</strong>：toCharArray</p><h4 id="math" tabindex="-1"><a class="header-anchor" href="#math"><span>Math</span></a></h4><p>java.util.Math类是数学相关的工具类，完成数学运算相关操作。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//绝对值 </span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//3.14</span>

<span class="token comment">//向上取整</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//4</span>

<span class="token comment">//向下取整</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//3</span>

<span class="token comment">//四舍五入</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//3</span>

<span class="token comment">//圆周率PI</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="日期类data、日历类dataformat" tabindex="-1"><a class="header-anchor" href="#日期类data、日历类dataformat"><span>日期类Data、日历类DataFormat</span></a></h4><h4 id="系统类system" tabindex="-1"><a class="header-anchor" href="#系统类system"><span>系统类System</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//测试程序的效率System.currentTimeMillis()</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//获取当前时间毫秒值（可用来计算运行程序所需要的时间、或者当做文件名来使用-因为不会使文件名重复）</span>

<span class="token comment">//复制数组（覆盖）System.arraycopy(int[],src,int srcIndex,int[] dest,int destIndex,int count);</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>arr2<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//把arr1数组的前4个数字复制到arr2数组中</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>	  <span class="token comment">//1,2,3,4,5,4,3,2,1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="string类与stringbuilder类" tabindex="-1"><a class="header-anchor" href="#string类与stringbuilder类"><span>String类与StringBuilder类</span></a></h4><p><img src="`+u+`" alt="image-20201228224638118"></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*StringBuilder常用方法
public StringBuilder append(...);	//添加任意类型数据的字符串形式，并返回当前对象本身
public String toString();	//将当前StringBuilder对象转换为String对象
*/</span>

<span class="token comment">/*1.构造方法*/</span>
<span class="token class-name">StringBilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//创建一个空的字符串</span>
<span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//根据传入的内容创建一个字符串缓冲区</span>

<span class="token comment">/*2.成员方法*/</span>
<span class="token class-name">StringBuilder</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//添加内容</span>
<span class="token class-name">StringBuilder</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//反转内容</span>
<span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//将缓冲区内容转为字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;hello,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;world~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//hello,world~</span>
sb<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//将数组内容翻转</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类"><span>抽象类</span></a></h3><p>抽象方法：就是加上abstract关键字，然后去掉大括号，直接分号结束。 抽象类：抽象方法所在的类（需要在class前面加abstract），必须是抽象类才行。</p><p><img src="`+d+`" alt="image-20201209194721831"></p><p>注意事项： 1、抽象类不能创建对象，如果创建了，编译无法通过而报错，只能创建其非抽象子类对象。 理解：假设创建了抽象类的对象，调用抽象的方法，而抽象方法没有具体的方法体，没有意义 2、抽象类中，可以构造方法，是供子类创建对象时，初始化父类成员使用的。 理解：子类的构造方法中，有默认的super()，需要访问父类构造方法 3、抽象类中，不一定包含抽象方法，但是有抽象方法的类必定是抽象类。 理解：未包含抽象方法的抽象类，目的是不想让调用者创建该类对象，通常用于某些特殊的类结构设计。 4、抽象类的子类，必须重写抽象父类中所有的抽象方法，否则，编译无法通过而报错。除非子类也是抽象类。 理解：假设不重写所有抽象方法，则类中可能包含抽象方法。那么创建对象后，调用抽象的方法，没有意义。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
如何使用抽象类和抽象方法：
1、不能直接创建new抽象类对象
2、必须用一个子类来继承抽象父类
3、子类必须覆盖重写抽象父类当中所有的抽象方法
	覆盖重写的实现--&gt;子类去掉抽象方法的abstract关键字，然后补上大括号
4、创建子类对象进行使用。

public abstract class Animal{
    public abstract void eat();	//抽象方法，具备不确定性
    public void normalMethod(){}	//普通成员方法
}
*/</span>
<span class="token comment">//Fu.class</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Fu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;抽象父类的构造方法执行！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//Zi.class</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Zi</span> <span class="token keyword">extends</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;抽象子类的构造方法执行！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;吃饭饭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//DemoMain.class</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoMain</span><span class="token punctuation">{</span>
    piblic <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Zi</span> zi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        zi<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h3><p>接口是一种公共规范标准。只要符合标准，就可以通用。</p><p><img src="`+r+`" alt="image-20201213154924305"></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
接口不能直接使用，必须用一个“实现类”来实现接口
接口的实现类必须覆盖重写(实现)接口中所有的抽象方法（如果少写，本身必须是抽象类）
public class 实现类名称 implements 接口名称{}
可以在接口中写的内容：
1、抽象方法
接口中中抽象方法的两个关键字public abstract可以省略，方法三要素也可随意定义
2、java8的默认方法--&gt;作用：可以实现接口拼接
默认方法会被通过接口实现类直接调用(调用接口)
3、接口的常量
public static final 数据类型 常量名称 = 数据值;	//不可改变,可省略public static final
注意：不能通过接口实现类的对象来调用接口的静态方法（可通过接口名称.静态方法名(参数)来调用）
*/</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MyIntercaceDafault</span><span class="token punctuation">{</span>
    <span class="token comment">//抽象方法</span>
    <span class="token keyword">void</span> <span class="token function">methodsAbs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//可省略public abstract</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyInterfaceDafaultA</span> <span class="token keyword">implements</span> <span class="token class-name">MyIntercaceDafault</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodsAbs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;实现了抽象方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态"><span>多态</span></a></h3><p><strong>多态</strong>：extends继承或者implements实现，是多态性的前提。</p><p><img src="`+v+'" alt="image-20201213165043245"></p><p>多态性：父类引用子类对象。</p><p><img src="'+k+'" alt="image-20201213173832116"></p><p>向上转型与向上转型</p><p><img src="'+m+'" alt="image-20201213180123190"></p><p>检测向下转型时是否转换正确：instanceof()来判断</p><p><img src="'+b+`" alt="image-20201213181618683"></p><h3 id="内部类" tabindex="-1"><a class="header-anchor" href="#内部类"><span>内部类</span></a></h3><p>成员内部类与局部内部类（包含匿名内部类）</p><p><strong>成员内部类</strong></p><p>内用外，随意访问；外用内，需要内部类对象。</p><p>直接调用：外部类名.内部类名 对象名 = new 外部类名().new 内部类名();</p><p>间接调用：在外部类方法中，使用内部类，然后main中只是调用外部类的方法</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Body</span> <span class="token punctuation">{</span> <span class="token comment">//外部类</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Heart</span><span class="token punctuation">{</span> <span class="token comment">//成员内部类</span>
        <span class="token comment">//内部类的方法</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">beat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;内部类：心脏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我叫&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//外部类的成员变量</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token comment">//外部类的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;外部类的方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Heart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">beat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//匿名内部类</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//main</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InnerClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Body</span> body <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//外部类的对象</span>
        <span class="token comment">//通过外部类的对象，调用外部类的方法，里面简介在使用内部类Heart</span>
        body<span class="token punctuation">.</span><span class="token function">methodBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;========&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//外部类名.内部类名 对象名 = new 外部类名().new 内部类名();</span>
        <span class="token class-name">Body<span class="token punctuation">.</span>Heart</span> heart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">Heart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        heart<span class="token punctuation">.</span><span class="token function">beat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>局部内部类</strong>：定义在一个方法内部的类（只有当前方法能使用它）。</p><p>局部内部类如果希望访问所在方法的局部变量，那么变量必须是【有效的final关键字的】</p><p>从java8+开始，只要变量事实不变，那么final关键字可以省略</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Outer</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodOuter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">class</span> <span class="token class-name">Inner</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodInner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
		<span class="token class-name">Inner</span> inner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//只能在当前方法调用</span>
    	inner<span class="token punctuation">.</span><span class="token function">methodInner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>匿名内部类</strong></p><p>如果接口的实现类（或父类的子类），只石永红唯一一次。那么这种情况下可以省略该类的定义，而改为使用【匿名内部类】</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
接口名 对象名 = new 接口名(){//覆盖重写所有抽象方法};
在{}里面的才是匿名内部类的内容，且{}后需要加;结束
在创建对象时，只能使用一次


@Override
        public void method(){
            System.out.println(&quot;匿名内部类实现的方法！&quot;);
        }
*/</span>
<span class="token comment">//MyInterface.java</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MyInterface</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//抽象方法</span>
<span class="token punctuation">}</span>

<span class="token comment">//MyInterfaceImpl.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyInterfaceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">MyInterface</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;实现类覆盖重写了方法！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//Main.java</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">MyInterface</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       	<span class="token comment">//重写了两次（即调用两次）</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;匿名内部类实现的方法！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
		<span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;匿名内部类实现的方法！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>	<span class="token comment">//需要一个;结束</span>
    obj<span class="token punctuation">.</span><span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    obj<span class="token punctuation">.</span><span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>类作为成员变量类型</strong>：案例4</p><p><strong>接口作为成员变量类型</strong>：案例5</p><p><strong>接口作为方法的参数或返回值</strong></p><h3 id="object类" tabindex="-1"><a class="header-anchor" href="#object类"><span>Object类</span></a></h3><p>---&gt;可以通过alt+insert键生成equals() and hashCode()与toString()</p><p><strong>重写toString()方法</strong>：打印对象的信息</p><p>重写前：打印的是包名类名@地址值；重写后：打印的是对象中的属性值</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//直接打印toString会是一个地址，需要重写Object类的toString方法</span>
<span class="token comment">//存在一个Person类，里面定义了name和age变量</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Person{&quot;</span><span class="token operator">+</span><span class="token string">&quot;name=&quot;</span> <span class="token operator">+</span>name <span class="token operator">+</span><span class="token string">&quot;}&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重写equals()方法</strong>：比较两个对象的</p><p>重写前：比较的是对象的地址值；重写后：比较的是对象中的属性值</p><p><img src="`+g+`" alt="image-20201215165655008"></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*equals()方法默认比较的是两个对象的地址值，所以需要重写，比较两个对象的属性
问题：隐藏着一个多态
多态弊端：无法使用子类特有的内容（属性、方法）
解决：向下转型（强转）
*/</span>
<span class="token comment">//存在一个Person类，里面定义了name和age变量</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//判断传递参数是否跟自身比较</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    
    <span class="token comment">//判断传递的参数obj是否是null,直接返回false，提高效率</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    
    <span class="token comment">//判断是否是Person类型在转换，防止类型转换异常classCastException</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span>obj<span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> b <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">==</span> p<span class="token punctuation">.</span>age<span class="token punctuation">;</span>
        <span class="token keyword">return</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    
    <span class="token comment">//return (this == obj);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="包装类" tabindex="-1"><a class="header-anchor" href="#包装类"><span>包装类</span></a></h3><p>包装类定义：使用一个类把基本数据类型的数据包装起来，在包装类中可定义方法来操作基本类型的数据</p><p>int-&gt;Integer char-&gt;Character （其余数据类型都是首字母大写）</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
装箱：把基本类型的数据包装到包装类中（基本类型的数据-&gt;包装类）
1、构造方法：
	Integer(int value)构造一个新分配的Integer对象，它表示指定的int值。
	Integer(String s)构造一个新分配的Integer对象，它表示String参数所指示的int值。
	(传递的字符串必须是基本类型的字符串，否则会抛出异常		如：&quot;100&quot;值正确，“a”异常)
2、静态方法:
	static Integer valueOf(int i) 返回一个表示指定的int值的Integer实例
	static Integer valueOf(String s)返回保存指定的String的值的Integer对象
	
拆箱：在包装类中去除基本类型的数据（包装类-&gt;基本类型的数据）
1、成员方法：
	int intValue() 以int类型返回该Integer的值
*/</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//构造方法</span>
    <span class="token class-name">Integer</span> in1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//1</span>
    <span class="token class-name">Integer</span> in2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>	<span class="token comment">//1</span>
    
    <span class="token comment">//静态方法</span>
    <span class="token class-name">Integer</span> in3 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//1</span>
    <span class="token comment">//Integer in4 = Integer.valueOf(&quot;a&quot;);	//NumberFormatException数字格式化异常</span>
    <span class="token class-name">Integer</span> in5 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//1</span>
    
    <span class="token comment">//拆箱</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> in1<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">//自动装箱与拆箱	（JDK1.5之后出现的新特性）</span>
	<span class="token class-name">Integer</span> in <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>		<span class="token comment">//等同 Integer in = new Integer(1);</span>
	in <span class="token operator">=</span> in <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>	<span class="token comment">//等同 new Integer(in.intValue() + 2) = 3;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//ArratList集合无法直接存储整数，可以存储Integer包装类</span>
<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//自动装箱 list.add(new Integer(1));</span>
<span class="token keyword">int</span> a <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//自动拆箱 list.get(0).intValue();</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换"><span>类型转换</span></a></h4><ul><li><p>基本类型--&gt;字符串</p><ol><li>基本类型数据的值+&quot;&quot; （最简单的方式）</li><li>使用包装类中的静态方法 static String toString(int i) 返回一个表示指定整数的 String 对象。</li><li>使用 String 类中的静态方法 static StringvalueOf(int i) 返回 int 参数的字符串表示形式。</li></ol></li><li><p>字符串--&gt;基本类型</p><p>使用包装类的静态方法 parseXX(&quot;字符串&quot;)</p><p>​ Integer类：static int parseInt(String s)</p><p>​ Double类：static double parseDouble(String s)</p></li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//基本类型--&gt;字符串</span>
<span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//字符串--&gt;基本类型</span>
<span class="token keyword">int</span> i1 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//int i2 = Integer.parseInt(&quot;a&quot;);	//数字格式化异常</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="collection集合" tabindex="-1"><a class="header-anchor" href="#collection集合"><span>Collection集合</span></a></h3><ul><li>集合与数组区别 <ul><li>数组长度是固定的，集合的长度是可变的；</li><li>数组中存储的是同一类型的元素，可以存储基本数据类型值。集合存储的是对象，而且对象的类型可以不一致。</li><li>在开发中一般当对象多时，使用集合存储。</li></ul></li><li>集合按照存储结构分两大类： <ul><li>单列集合 java.util.Collection</li><li>双列集合 java.util.Map</li></ul></li></ul><p><img src="`+y+`" alt="image-20210324124037323"></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
	boolean add(E e);		//向集合添加元素
	boolean remove(E e);	//删除集合中的某个元素
	void clear();			//清空集合所有的元素
	boolean isEmpty();		//判断集合是否为空
	boolean contains(E e);	//判断集合中是否包含某个元素
	int size();				//获取集合的长度
	Object[] toArray();		//将集合转成一个数组
*/</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> coll <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    coll<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    coll<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> result <span class="token operator">=</span> coll<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//cool.clear();</span>
    <span class="token keyword">boolean</span> result2 <span class="token operator">=</span> coll<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//false</span>
    <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> coll<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//转换成数组</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iterator迭代器" tabindex="-1"><a class="header-anchor" href="#iterator迭代器"><span>Iterator迭代器</span></a></h3><ul><li>java.util.Iterator。Collection接口与Map接口主要用于存储元素，而Iterator主要用于迭代访问（即遍历）Collection中的元素，因此Iterator对象也被称为迭代器。</li><li>迭代：即Collection集合元素的通用获取方式。在取元素之前要判断集合中有没有元素，如果有，就把这个元素取出来，继续再判断，如果还有救再取出来。一直把集合中的所有元素全部取出——这种取出方式称为迭代。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/* Iterator接口常用方法：
	public E next():返回迭代的下个元素
	public boolean hasNext()：如果仍有元素可以迭代，则返回true
*/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2><h4 id="_1、生成6个1-33的随机整数-添加到集合-并遍历集合" tabindex="-1"><a class="header-anchor" href="#_1、生成6个1-33的随机整数-添加到集合-并遍历集合"><span><strong>1、生成6个1~33的随机整数，添加到集合，并遍历集合</strong></span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//生成6个1~33的随机整数，添加到集合，并遍历集合</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Random</span> r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">6</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> num <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、群主发红包-成员收红包" tabindex="-1"><a class="header-anchor" href="#_2、群主发红包-成员收红包"><span><strong>2、群主发红包，成员收红包</strong></span></a></h4><div class="language-User.class line-numbers-mode" data-ext="User.class" data-title="User.class"><pre class="language-User.class"><code>public class User {
    private String name;    //姓名
    private int money;  //余额（用户所拥有的钱）

    public User() {
    }

    public User(String name, int money) {
        this.name = name;
        this.money = money;
    }

    //展示用户有多少钱
    public void show(){
        System.out.println(&quot;我叫：&quot;+ name + &quot;.我有多少钱：&quot; + money);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Manafer.class line-numbers-mode" data-ext="Manafer.class" data-title="Manafer.class"><pre class="language-Manafer.class"><code>import java.util.ArrayList;
//群主的类 Manager.class
public class Manager extends User {
    public Manager(){

    }

    public Manager(String name, int money) {
        super(name, money);
    }

    public ArrayList&lt;Integer&gt; send(int totalMoney, int count){
        //需要一个集合存储若干个红包的金额
        ArrayList&lt;Integer&gt; redList = new ArrayList&lt;&gt;();

        //需要看群主有多少钱
        int leftMoney = super.getMoney();   //群主当前的余额
        if(totalMoney &gt; leftMoney){
            System.out.println(&quot;余额不足&quot;);
            return redList; //返回空集合
        }
        //扣钱（重新设置余额）
        super.setMoney(leftMoney - totalMoney);

        //发红包要平均拆分count份
        int avg = totalMoney / count;
        int mod = totalMoney % count; //余额(甩下的零头)

        //除不开的零头，包在最后一个红包内
        //下面把红包逐一让如集合中
        for (int i = 0; i &lt; count - 1; i++) {
            redList.add(avg);
        }

        //最后一个红包
        int last = avg + mod;
        redList.add(last);

        return redList;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Member.class line-numbers-mode" data-ext="Member.class" data-title="Member.class"><pre class="language-Member.class"><code>import java.util.ArrayList;
import java.util.Random;

public class Member extends User {
    public Member() {
    }

    public Member(String name, int money) {
        super(name, money);
    }

    public void receive(ArrayList&lt;Integer&gt; list){
        //从多个红包中随机抽取一个给自己
        //随机获取一个集合当中的索引编号
        int index = new Random().nextInt(list.size());
        //根据索引从集合中删除，并且得到被删除的红包给自己
        int delta = list.remove(index);
        //当前成员本来有多少钱
        int money = super.getMoney();
        //加法，并且重新设置回去
        super.setMoney(money + delta);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-MainRedPacket.class line-numbers-mode" data-ext="MainRedPacket.class" data-title="MainRedPacket.class"><pre class="language-MainRedPacket.class"><code>import java.util.ArrayList;

public class MainRedPacket {
    public static void main(String[] args) {
        Manager manager = new Manager(&quot;群主&quot;,100);
        Member one = new Member(&quot;成员A&quot;,9);
        Member two = new Member(&quot;成员B&quot;,10);
        Member three = new Member(&quot;成员C&quot;,11);

        manager.show();
        one.show();
        two.show();
        three.show();
        System.out.println(&quot;==============&quot;);

        ArrayList&lt;Integer&gt; redList = manager.send(20,3);
        one.receive(redList);
        two.receive(redList);
        three.receive(redList);

        manager.show(); //100-20=80
        //6,6,8随机分给三人
        one.show();
        two.show();
        three.show();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、接口多态的案例-笔记本电脑" tabindex="-1"><a class="header-anchor" href="#_3、接口多态的案例-笔记本电脑"><span><strong>3、接口多态的案例（笔记本电脑）</strong></span></a></h4><p><img src="`+h+`" alt="image-20201213182248786"></p><div class="language-USB.java line-numbers-mode" data-ext="USB.java" data-title="USB.java"><pre class="language-USB.java"><code>public interface USB {
    public abstract void open();    //打开设备

    public abstract void close();   //关闭设备
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Computer.java line-numbers-mode" data-ext="Computer.java" data-title="Computer.java"><pre class="language-Computer.java"><code>public class Computer {
    public void powerOn(){
        System.out.println(&quot;笔记本开机&quot;);
    }
    public void powerOff(){
        System.out.println(&quot;笔记本关机&quot;);
    }

    //使用USB设备
    public void useDevice(USB usb){
        usb.open(); //打开设备
        if(usb instanceof Mouse){
            Mouse mouse = (Mouse) usb;  //向下转型
            mouse.click();
        }else if(usb instanceof Keyboard){
            Keyboard keyboard = (Keyboard) usb; //向下转型
            keyboard.type();
        }
        usb.close();    //关闭设备
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Mouse.java line-numbers-mode" data-ext="Mouse.java" data-title="Mouse.java"><pre class="language-Mouse.java"><code>//鼠标是一个USB设备
public class Mouse implements USB {
    @Override
    public void open(){ System.out.println(&quot;打开鼠标&quot;); }

    @Override
    public void close() { System.out.println(&quot;关闭鼠标&quot;); }

    public void click(){
        System.out.println(&quot;鼠标点击&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Keyboard.java line-numbers-mode" data-ext="Keyboard.java" data-title="Keyboard.java"><pre class="language-Keyboard.java"><code>//键盘是一个USB设备
public class Keyboard implements USB {
    @Override
    public void open() { System.out.println(&quot;打开键盘&quot;); }

    @Override
    public void close() { System.out.println(&quot;关闭键盘&quot;); }

    public void type(){
        System.out.println(&quot;鼠标输入&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Main.java line-numbers-mode" data-ext="Main.java" data-title="Main.java"><pre class="language-Main.java"><code>public class DemoMain {
    public static void main(String[] args) {
        //创建一个笔记本电脑
        Computer computer = new Computer();
        computer.powerOn();

        //准备一个鼠标
        USB usbMouse = new Mouse();
        computer.useDevice(usbMouse);

        //准备一个键盘
        USB usbKeyboard = new Keyboard();
        computer.useDevice(usbKeyboard);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、类作为成员变量类型" tabindex="-1"><a class="header-anchor" href="#_4、类作为成员变量类型"><span>4、类作为成员变量类型</span></a></h4><div class="language-Hero.java line-numbers-mode" data-ext="Hero.java" data-title="Hero.java"><pre class="language-Hero.java"><code>public class Hero {//英雄类
    private String name;    //英雄名字
    private int age;    //年龄
    private Weapon weapon;  //武器

    public Hero() {
    }

    public Hero(String name, int age, Weapon weapon) {
        this.name = name;
        this.age = age;
        this.weapon = weapon;
    }

    public void attack(){
        System.out.println(&quot;年龄为&quot;+age+&quot;的&quot;+name+&quot;用&quot;+weapon.getCode()+&quot;攻击敌方&quot;);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Weapon getWeapon() {
        return weapon;
    }

    public void setWeapon(Weapon weapon) {
        this.weapon = weapon;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Weapon.java line-numbers-mode" data-ext="Weapon.java" data-title="Weapon.java"><pre class="language-Weapon.java"><code>public class Weapon {//武器类
    private String code;    //武器的代号

    public Weapon() {
    }

    public Weapon(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Main.java line-numbers-mode" data-ext="Main.java" data-title="Main.java"><pre class="language-Main.java"><code>public class DemoMain {
    public static void main(String[] args) {
        //创建一个英雄角色
        Hero hero = new Hero();
        //为英雄起名并设置年龄
        hero.setName(&quot;盖伦&quot;);
        hero.setAge(19);

        //创建一个武器对象
        Weapon weapon = new Weapon(&quot;多兰剑&quot;);
        //为英雄配备武器
        hero.setWeapon(weapon);
        hero.attack();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、接口作为成员变量类型" tabindex="-1"><a class="header-anchor" href="#_5、接口作为成员变量类型"><span>5、接口作为成员变量类型</span></a></h4><div class="language-Hero.java line-numbers-mode" data-ext="Hero.java" data-title="Hero.java"><pre class="language-Hero.java"><code>public class Hero {
    private String name;    //英雄名称
    private Skill skill;    //英雄技能

    public Hero() {
    }
    public Hero(String name, Skill skill) {
        this.name = name;
        this.skill = skill;
    }

    //英雄攻击别人
    public void attack(){
        System.out.println(&quot;我叫&quot;+ name +&quot;, 开始释放技能&quot;);
        skill.use();    //调用接口中的抽象方法
        System.out.println(&quot;释放技能完成。&quot;);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Skill getSkill() {
        return skill;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Skill.java line-numbers-mode" data-ext="Skill.java" data-title="Skill.java"><pre class="language-Skill.java"><code>public interface Skill {
    void use(); //释放技能的抽象方法
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-SkillImpl.java line-numbers-mode" data-ext="SkillImpl.java" data-title="SkillImpl.java"><pre class="language-SkillImpl.java"><code>public class SkillImpl implements Skill {
    @Override
    public void use() {
        System.out.println(&quot;Biu~Biu~Biu~&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Main.java line-numbers-mode" data-ext="Main.java" data-title="Main.java"><pre class="language-Main.java"><code>public class DemoGame {
    public static void main(String[] args) {
        Hero hero = new Hero();
        hero.setName(&quot;艾希&quot;);

        //设置英雄技能
        //hero.setSkill(new SkillImpl());
        //还可改成匿名内部类
        /*Skill skill = new Skill() {
            @Override
            public void use() {
                System.out.println(&quot;Pia~Pia~Pia~&quot;);
            }
        };
        hero.setSkill(skill);*/
        //还可进一步简化，同时使用匿名内部类和匿名对象
        hero.setSkill(new Skill() {
            @Override
            public void use() {
                System.out.println(&quot;Piu~Piu~Piu~&quot;);
            }
        });

        hero.attack();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lambda-表达式" tabindex="-1"><a class="header-anchor" href="#lambda-表达式"><span>Lambda 表达式</span></a></h2>`,248),S=[j];function f(q,x){return s(),a("div",null,S)}const I=n(w,[["render",f],["__file","JAVA.html.vue"]]),_=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF%E5%9F%BA%E7%A1%80/JAVA.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"JAVA","slug":"java","link":"#java","children":[]},{"level":2,"title":"注意","slug":"注意","link":"#注意","children":[]},{"level":2,"title":"配置/运行","slug":"配置-运行","link":"#配置-运行","children":[{"level":3,"title":"安装环境搭配","slug":"安装环境搭配","link":"#安装环境搭配","children":[]}]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[{"level":3,"title":"方法","slug":"方法","link":"#方法","children":[]},{"level":3,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":3,"title":"JAVA的内存划分","slug":"java的内存划分","link":"#java的内存划分","children":[]},{"level":3,"title":"API文档","slug":"api文档","link":"#api文档","children":[]},{"level":3,"title":"抽象类","slug":"抽象类","link":"#抽象类","children":[]},{"level":3,"title":"接口","slug":"接口","link":"#接口","children":[]},{"level":3,"title":"多态","slug":"多态","link":"#多态","children":[]},{"level":3,"title":"内部类","slug":"内部类","link":"#内部类","children":[]},{"level":3,"title":"Object类","slug":"object类","link":"#object类","children":[]},{"level":3,"title":"包装类","slug":"包装类","link":"#包装类","children":[]},{"level":3,"title":"Collection集合","slug":"collection集合","link":"#collection集合","children":[]},{"level":3,"title":"Iterator迭代器","slug":"iterator迭代器","link":"#iterator迭代器","children":[]}]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]},{"level":2,"title":"Lambda 表达式","slug":"lambda-表达式","link":"#lambda-表达式","children":[]}],"git":{"updatedTime":1709033227000,"contributors":[{"name":"willy","email":"willysliang","commits":1},{"name":"willy","email":"willysliang@qq.com","commits":1}]},"filePathRelative":"后端基础/JAVA.md"}');export{I as comp,_ as data};
