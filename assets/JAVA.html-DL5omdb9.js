import{_ as n,o as s,c as a,d as t}from"./app-Bf_tkh-q.js";const p="/blog/assets/image-20201118004738408-BiIbpbr7.png",e="/blog/assets/image-20260101145705984-Dor6EpeX.png",c="/blog/assets/image-20201128010728114-BGPOHbWx.png",o="/blog/assets/image-20201128012122146-DwW7dQEs.png",l="/blog/assets/image-20251211101650222-Cj5Y788k.png",i="/blog/assets/670909dbe023be430fd0665e35107023aa689761-CkKjRJ5d.png",u="/blog/assets/image-20201228224638118-C-JvuixP.png",k="/blog/assets/image-20251226172405923-78jgmq__.png",r="/blog/assets/b195eb27b31e1ae6454c85699662c33f-Dl1KUSSp.png",d="/blog/assets/image-20201213203936235-DTr6O--Y.png",v="/blog/assets/image-20201213173832116-Da4xU51R.png",m="/blog/assets/image-20201213180123190-CyRJLUYI.png",b="/blog/assets/image-20201213181618683-C93PItLB.png",g="/blog/assets/image-20201213182248786-DR1endSX.png",y="/blog/assets/image-20210324124037323-fyz2rCvD.png",w="/blog/assets/image-20260101140357083-BhbciFQ4.png",h="/blog/assets/image-20260101141840470-oOimuug0.png",f="/blog/assets/image-20260106172258173-CsA7wKYp.png",S="/blog/assets/image-20260101142847569-P5T39zGN.png",q="/blog/assets/image-20251225103710538-CzuAIctt.png",j="/blog/assets/image-20251224142222050-CY_Uvv62.png",x="/blog/assets/image-20260123093708648-BsZcvMTW.png",D="/blog/assets/image-20260123093813559-C418bi06.png",I={},T=t(`<h2 id="java" tabindex="-1"><a class="header-anchor" href="#java"><span>JAVA</span></a></h2><h2 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法"><span>基础语法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- 注释：单行注释、多行注释、文档注释
- 关键字：被Java赋予特定含义的单词（class、static）
- 字面量：数据在程序中的书写格式（666、<span class="token string">&quot;mySoul&quot;</span>）

变量：临时存储数据的容器
	- 变量必须先定义后使用。变量定义时，系统依据定义的类型给变量开辟对应大小的存储单元来存放数据。
	- 格式：数据类型 变量名 <span class="token operator">=</span> 数据值<span class="token punctuation">;</span>（变量需要有变量类型、变量名和分号结束）
	- 例：int a <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span> duoble b <span class="token operator">=</span> <span class="token number">10.1</span><span class="token punctuation">;</span>

数据类型：
	- 基本数据类型：byte、short、int、long、float、double、char、boolean
	- 引用数据类型：字符串、数组、类、及接口
	- 区别：
			基本数据类型存储在栈中，引用数据类型存储在堆中
			基本数据类型的变量之间是相互独立的，而引用数据类型的变量之间可能共享同一个对象

标识符：用来命名变量、方法、类、接口等程序元素的名称
	- 注意：
			<span class="token number">1</span>. 必须由数字、字母、下划线_、美元符号$ 组成
			<span class="token number">2</span>. 不能由数字开头
			<span class="token number">3</span>. 不能是关键字
			<span class="token number">4</span>. 区分大小写
	- 阿里巴巴命名规范
			尽量不要用拼音。但是一些国际通用的拼音可视为英文单词
			平时在给变量名、方法名、类名起名字时，不要使用下划线或美元符号

权限修饰符：是 Java 的一种关键字，用于控制类、方法、变量的访问权限
	- 权限范围：private <span class="token operator">&lt;</span> 默认/空着不写 <span class="token operator">&lt;</span> protected <span class="token operator">&lt;</span> public
			- public：公共的，所有地方都可以访问。
			- protected：本类、本包、其他包中的子类都可以访问。
			- 默认（没有修饰符）：本类、本包可以访问。
			- private：私有的，当前类可以访问。
	- 编写代码推荐使用：
			- 成员变量使用private，隐藏细节
			- 构造方法使用public，方便创建对象
			- 成员方法使用public，方便调用方法

包：一种用于组织和管理 Java 类的机制
	- 命名规范：路径名.路径名.xxx.xxx （如：com.willy.oa）
	- 导包：不是在 java.lang 包下，都需要导包。因为 Java 开发环境默认为 lang 包
	- 包名一般是域名的倒写。如 www.willy.com 的包名可定义为 com.willy.技术名称
	- 什么时候需要导包？
			<span class="token number">1</span>. 在使用Java中提供的非核心包<span class="token punctuation">(</span>java.lang<span class="token punctuation">)</span>中的类时
			<span class="token number">2</span>. 使用自己写的其他包中的类时
	- 什么时候不需要导包？
			<span class="token number">1</span>. 在使用Java核心包（java.lang）中的类时
			<span class="token number">2</span>. 在使用自己写的同一个包中的类时
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java编译" tabindex="-1"><a class="header-anchor" href="#java编译"><span>java编译</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>javac 是 Java 编译器的命令行工具，用于将 Java 源代码文件<span class="token punctuation">(</span>.java<span class="token punctuation">)</span>编译成 Java 字节码文件<span class="token punctuation">(</span>.class<span class="token punctuation">)</span>。
Java 字节码文件可以在虚拟机<span class="token punctuation">(</span>JVM<span class="token punctuation">)</span>上运行。

注意：执行 .class 文件时，不需要加 .class 后缀


$ javac HelloWorld.java <span class="token comment"># 根据 HelloWorld.java 文件编译成 HelloWorld.class 文件</span>
$ <span class="token function">java</span> HelloWorld	<span class="token comment"># 执行 HelloWorld.class 文件</span>



JVM（Java Virtual Machine），Java虚拟机
JRE（Java Runtime Environment），Java运行环境，包含了JVM和Java的核心类库（Java API）
JDK（Java Development Kit）称为Java开发工具，包含了JRE和开发工具
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt="image-20201118004738408"></p><h3 id="idea快捷键" tabindex="-1"><a class="header-anchor" href="#idea快捷键"><span>idea快捷键</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>模板补全：输入缩写后按 Tab键可快速生成代码。
  psvm + Tab：生成 main方法 。
  sout + Tab：生成 System.out.println<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>。
  fori + Tab：生成 for循环 。
  Ctrl+J：查看所有可用的动态模板 。

后缀补全：
  表达式.fori：生成遍历循环。
  表达式.null：生成空值检查 <span class="token keyword">if</span> <span class="token punctuation">(</span>expression <span class="token operator">==</span> null<span class="token punctuation">)</span>。
  new MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span>.var：自动生成变量声明 MyClass obj <span class="token operator">=</span> new MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


重构生成
  Alt + Insert：生成代码，快速生成 Getter/Setter、构造函数、toString<span class="token punctuation">(</span><span class="token punctuation">)</span>等方法 。
  Shift + F6：安全重命名，重命名变量、方法、类等，并自动更新所有引用 。
  Ctrl + Alt + M：提取方法，将选中的代码块提取成一个独立的方法 。
  Ctrl + Alt + V：提取变量，将表达式结果提取为一个新变量 。
  Ctrl + Alt + T：包裹代码，用 if、try-catch、for等环绕选中的代码

调试：
  Shift + F10：运行当前程序
  Shift + F9：以调试模式运行 。
  F8：步过，逐行执行，不进入方法内部 。
  F7：步入，进入当前行所调用的方法内部 。
  Shift + F8：步出，从当前方法跳出到调用处 。
  F9：恢复程序，继续运行直到下一个断点 。
  Alt + F8：在调试时，选中变量或表达式，按此快捷键可计算其值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="javabean-类快速生成" tabindex="-1"><a class="header-anchor" href="#javabean-类快速生成"><span>JavaBean 类快速生成</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>JavaBean 是一个遵循特定写法的Java类，它具备特点：
	- 这个Java类必须具有一个无参的构造函数
	- 属性必须私有化。
	- 私有化的属性必须通过public类型的方法暴露给其它程序，并且方法的命名也必须遵守一定的命名规范。


- ptg插件，直接生成标准 javaBean
创建类，定义好成员变量后，通过 <span class="token variable"><span class="token variable">\`</span>右键 -<span class="token operator">&gt;</span> Ptg to JavaBean<span class="token variable">\`</span></span> 来生成 get/post 方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+e+`" alt="image-20260101145705984"></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> num<span class="token punctuation">;</span>


  	<span class="token comment">//------------------类的构造方法--------------------------------------</span>
    <span class="token keyword">public</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

  	<span class="token comment">//------------------类对外提供的用于访问私有属性的public方法-----------------------------------</span>
    <span class="token doc-comment comment">/**
     * 获取
     * <span class="token keyword">@return</span> name
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取
     * <span class="token keyword">@return</span> num
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置
     * <span class="token keyword">@param</span> <span class="token parameter">num</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setNum</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Animal{name = &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;, num = &quot;</span> <span class="token operator">+</span> num <span class="token operator">+</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 这是单行注释文字</span>

<span class="token comment">/*
这是多行注释文字
这是多行注释文字
这是多行注释文字
*/</span>

<span class="token doc-comment comment">/**
这是文档注释文字
这是文档注释文字
这是文档注释文字
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字"><span>关键字</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>修饰符关键字：public、protected、private、static、final、abstract
访问控制关键字：public、protected、private、default（默认）
类、接口和包关键字：、class、interface、enum、package、import、extends、implements
方法关键字：void、return、this、super
流程控制关键字：if、else、switch、case、default、while、do、for、break、continue、return
异常处理关键字：try、catch、finally、throw、throws
逻辑关键字：true、false、null
其他关键字：new、instanceof、synchronized、transient、volatile、assert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字面量" tabindex="-1"><a class="header-anchor" href="#字面量"><span>字面量</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>整数字面量：表示整数值，可以使用十进制、八进制（以0开头）和十六进制（以0x或0X开头）表示法。例如：42, 012, 0xFF。
浮点数字面量：表示浮点数值，包括普通的浮点数和科学计数法表示。例如：3.14, <span class="token number">2</span>.0e-5。
字符字面量：表示单个字符，使用单引号括起来。例如：<span class="token string">&#39;A&#39;</span>, <span class="token string">&#39;1&#39;</span>, <span class="token string">&#39;@&#39;</span>。
字符串字面量：表示一个字符串，使用双引号括起来。例如：<span class="token string">&quot;Hello, World!&quot;</span>, <span class="token string">&quot;Java&quot;</span>。
布尔字面量：表示布尔值，只有两个取值：true 和 false。
null 字面量：表示空引用，用于表示对象引用不指向任何有效的对象。
转义序列：一些特殊的字符序列，以反斜线 <span class="token punctuation">\\</span> 开头，用于表示无法直接输入的字符，如换行符 <span class="token punctuation">\\</span>n、制表符 <span class="token punctuation">\\</span>t 等。
数组字面量：用花括号 <span class="token punctuation">{</span><span class="token punctuation">}</span> 表示，用于初始化数组。例如：<span class="token punctuation">{</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">}</span>。
枚举常量：枚举类型的常量值，表示枚举中的特定选项。
字符编码字面量：表示字符的Unicode编码，以 <span class="token punctuation">\\</span>u 开头，后面跟着四个十六进制数字。例如：<span class="token punctuation">\\</span>u0041 表示字符 ‘A’
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VariableDemo2</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//1.变量名不允许重复</span>
		<span class="token comment">//int a = 10;</span>
		<span class="token comment">//int a = 20;</span>
		<span class="token comment">//System.out.println(a);</span>

		<span class="token comment">//2.一条语句可以定义多个变量</span>
		<span class="token comment">//int a = 10, b = 20, c = 20,d = 20;</span>
		<span class="token comment">//System.out.println(a);//?</span>
		<span class="token comment">//System.out.println(b);//?</span>

		<span class="token comment">//3.变量在使用之前必须要赋值</span>
		<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Java 数据类型是用来定义变量或表达式可以存储的数据类型的分类

<span class="token comment">#### 基本数据类型：</span>
整数类型：
		byte：8位，范围为 <span class="token parameter variable">-128</span> 到 <span class="token number">127</span>
		short：16位，范围为 -32,768 到 <span class="token number">32,767</span>
		int：32位，范围为 -2^31 到 <span class="token number">2</span>^31 - <span class="token number">1</span>
		long：64位，范围为 -2^63 到 <span class="token number">2</span>^63 - <span class="token number">1</span>
浮点类型：
		float：32位，用于表示单精度浮点数
		double：64位，用于表示双精度浮点数
字符类型：char：16位，用于存储一个 Unicode 字符
布尔类型：boolean：用于表示布尔值，只有两个取值：true 和 <span class="token boolean">false</span>

注意：
- byte类型的取值范围： <span class="token parameter variable">-128</span> ~ <span class="token number">127</span>
- int类型的大概取值范围： -21亿多 ~ <span class="token number">21</span>亿多
- 整数类型和小数类型的取值范围大小关系：double <span class="token operator">&gt;</span> float <span class="token operator">&gt;</span> long <span class="token operator">&gt;</span> int <span class="token operator">&gt;</span> short <span class="token operator">&gt;</span> byte


<span class="token comment">#### 引用数据类型</span>
类（Class）：用来创建对象的模板。它定义了对象的属性（成员变量）和方法（成员方法）。通过实例化类，可以创建类的对象，并使用对象调用类的方法。
接口（Interface）：定义了一组方法的规范，但没有实际的方法体。类可以实现一个或多个接口，从而获得接口定义的方法，并在类中实现这些方法。
数组（Array）：数组是一种用于存储相同类型元素的数据结构。它可以是一维数组或多维数组，用于在内存中连续存储多个元素。
枚举（Enum）：枚举是一种特殊的类，用于表示一组预定义的常量。枚举常常用于表示一组相关的值。
字符串（String）：字符串是一种引用数据类型，但它具有特殊的性质，可以像基本数据类型一样进行操作。字符串实际上是一个字符序列，它有许多方法用于处理字符串操作。
自定义引用类型：除了上述内置的引用数据类型，还可以创建自定义的类和接口，以及它们的实例，从而构建更复杂的数据结构和功能



<span class="token comment">#### 基本数据类型和引用数据类型的区别</span>
基本数据类型：按值传递，在Java虚拟机栈中分配内存空间，并直接存储值本身。当基本数据类型的变量被赋值时，实际上是将该变量中的值复制到另一个变量中，这两个变量之间没有任何关联。
引用数据类型：按引用传递，在Java虚拟机堆中分配内存空间，存储的是对象的引用（内存地址）。当引用数据类型的变量被赋值时，实际上是将该变量中的引用复制到另一个变量中，这两个变量指向同一个对象。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VariableDemo3</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//1.定义byte类型的变量</span>
        <span class="token comment">//数据类型 变量名 = 数据值;</span>
        <span class="token keyword">byte</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2.定义short类型的变量</span>
        <span class="token keyword">short</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3.定义int类型的变量</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//4.定义long类型的变量</span>
        <span class="token keyword">long</span> d <span class="token operator">=</span> <span class="token number">123456789123456789L</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//5.定义float类型的变量</span>
        <span class="token keyword">float</span> e <span class="token operator">=</span> <span class="token number">10.1F</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//6.定义double类型的变量</span>
        <span class="token keyword">double</span> f <span class="token operator">=</span> <span class="token number">20.3</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//7.定义char类型的变量</span>
        <span class="token keyword">char</span> g <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//8.定义boolean类型的变量</span>
        <span class="token keyword">boolean</span> h <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 使用引用数据类型创建一个对象</span>
<span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个数组</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> numbers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 使用自定义类创建对象</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>

<span class="token comment">// 枚举类型</span>
<span class="token keyword">enum</span> <span class="token class-name">Day</span> <span class="token punctuation">{</span>
    <span class="token constant">MONDAY</span><span class="token punctuation">,</span> <span class="token constant">TUESDAY</span><span class="token punctuation">,</span> <span class="token constant">WEDNESDAY</span><span class="token punctuation">,</span> <span class="token constant">THURSDAY</span><span class="token punctuation">,</span> <span class="token constant">FRIDAY</span><span class="token punctuation">,</span> <span class="token constant">SATURDAY</span><span class="token punctuation">,</span> <span class="token constant">SUNDAY</span>
<span class="token punctuation">}</span>
<span class="token class-name">Day</span> today <span class="token operator">=</span> <span class="token class-name">Day</span><span class="token punctuation">.</span><span class="token constant">WEDNESDAY</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据内存划分" tabindex="-1"><a class="header-anchor" href="#数据内存划分"><span>数据内存划分</span></a></h3><p><img src="`+c+'" alt="image-20201128010728114"></p><p><img src="'+o+`" alt="image-20201128012122146"></p><h3 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换"><span>类型转换</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 自动类型转换
	- 类型相容
	- 目标类型 <span class="token operator">&gt;</span> 源类型
	- double num1 <span class="token operator">=</span> <span class="token number">1.2</span><span class="token punctuation">;</span> int num2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> double result <span class="token operator">=</span> num1 + num2<span class="token punctuation">;</span>

<span class="token number">2</span>. 强制类型转换
	- <span class="token punctuation">(</span>类型名<span class="token punctuation">)</span> 表达式
	- double a <span class="token operator">=</span> <span class="token number">5.2</span><span class="token punctuation">;</span> int b <span class="token operator">=</span> <span class="token punctuation">(</span>int<span class="token punctuation">)</span> a<span class="token punctuation">;</span>

注意：如果想让整数相除转换为浮点数，则需要让除数或者被除数转换为浮点数才行

<span class="token number">3</span>. 保留小数位数
	- String.format<span class="token punctuation">(</span><span class="token string">&quot;%.2f&quot;</span>, num<span class="token punctuation">)</span><span class="token punctuation">;</span> // 保留两位小数
	- System.out.printf<span class="token punctuation">(</span><span class="token string">&quot;保留两位小数：%.2f%n&quot;</span>, num<span class="token punctuation">)</span><span class="token punctuation">;</span> // 输出的时候才进行保留两位小数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 已知某班有男同学20位，女同学15位，20位男生平均分是87分，15位女生的平均分是85，问全体同学平均分是多少分?</span>
        <span class="token keyword">int</span> total <span class="token operator">=</span> <span class="token number">20</span> <span class="token operator">*</span> <span class="token number">87</span> <span class="token operator">+</span> <span class="token number">15</span> <span class="token operator">*</span> <span class="token number">85</span><span class="token punctuation">;</span> <span class="token comment">// 总分</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">20</span> <span class="token operator">+</span> <span class="token number">15</span><span class="token punctuation">;</span> <span class="token comment">// 总人数</span>

        <span class="token comment">// 平均分（因为总分和总人数都是整数，而为了相除获取浮点数则需要让分子或分母为浮点数才行，所以需要 * 1.0）</span>
        <span class="token keyword">double</span> avg <span class="token operator">=</span> total <span class="token operator">*</span> <span class="token number">1.0</span> <span class="token operator">/</span> num<span class="token punctuation">;</span>
        <span class="token comment">// double avg = total / (num * 1.0);</span>

        <span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;%.2f&quot;</span><span class="token punctuation">,</span> avg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;平均分为：&quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;平均分为：%.2f%n&quot;</span><span class="token punctuation">,</span> avg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="包装类" tabindex="-1"><a class="header-anchor" href="#包装类"><span>包装类</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>包装类定义：使用一个类把基本数据类型的数据包装起来，在包装类中可定义方法来操作基本类型的数据

int-<span class="token operator">&gt;</span>Integer		char-<span class="token operator">&gt;</span>Character		（其余数据类型都是首字母大写（byte、short、long、float、double、boolean））

装箱：把基本类型的数据包装到包装类中（基本类型的数据-<span class="token operator">&gt;</span>包装类）
		<span class="token number">0</span>、基本类型转成包装类<span class="token punctuation">(</span>直接赋值，自动转换<span class="token punctuation">)</span>
				Interger <span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>	Double <span class="token assign-left variable">num2</span><span class="token operator">=</span><span class="token number">1.5</span><span class="token punctuation">;</span>
    <span class="token number">1</span>、构造方法：
      	Integer<span class="token punctuation">(</span>int value<span class="token punctuation">)</span> 构造一个新分配的Integer对象，它表示指定的int值。
      	Integer<span class="token punctuation">(</span>String s<span class="token punctuation">)</span> 构造一个新分配的Integer对象，它表示String参数所指示的int值。
      			<span class="token punctuation">(</span>传递的字符串必须是字符串化的数值，否则会抛出异常		如：<span class="token string">&quot;100&quot;</span>值正确，“a”异常<span class="token punctuation">)</span>
    <span class="token number">2</span>、静态方法:
      	static Integer valueOf<span class="token punctuation">(</span>int i<span class="token punctuation">)</span> 返回一个表示指定的int值的Integer实例
      	static Integer valueOf<span class="token punctuation">(</span>String s<span class="token punctuation">)</span> 返回保存指定的String的值的Integer对象
拆箱：在包装类中去除基本类型的数据（包装类-<span class="token operator">&gt;</span>基本类型的数据）
    <span class="token number">1</span>、成员方法（XXXValue<span class="token punctuation">(</span><span class="token punctuation">)</span>系列方法）：如<span class="token variable"><span class="token variable">\`</span>intValue<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>以int类型返回该Integer的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//构造方法</span>
    <span class="token class-name">Integer</span> in1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//1</span>
    <span class="token class-name">Integer</span> in2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>	<span class="token comment">//1</span>

    <span class="token comment">//静态方法（手动装箱）</span>
    <span class="token class-name">Integer</span> in3 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//1</span>
    <span class="token comment">//Integer in4 = Integer.valueOf(&quot;a&quot;);	//NumberFormatException数字格式化异常</span>
    <span class="token class-name">Integer</span> in5 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//1</span>

    <span class="token comment">//拆箱（手动拆箱）</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> in1<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//自动装箱与拆箱</span>
    <span class="token class-name">Integer</span> in <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>		<span class="token comment">//等同 Integer in = new Integer(1);</span>
    in <span class="token operator">=</span> in <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>	<span class="token comment">//等同 new Integer(in.intValue() + 2) = 3;</span>


  	<span class="token comment">//ArratList集合无法直接存储整数，可以存储Integer包装类</span>
    <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//自动装箱 list.add(new Integer(1));</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//自动拆箱 list.get(0).intValue();</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类型转换-1" tabindex="-1"><a class="header-anchor" href="#类型转换-1"><span>类型转换</span></a></h4><ul><li><p>基本类型--&gt;字符串</p><ol><li>基本类型数据的值+&quot;&quot; （最简单的方式）</li><li>使用包装类中的静态方法 static String toString(int i) 返回一个表示指定整数的 String 对象。</li><li>使用 String 类中的静态方法 static StringvalueOf(int i) 返回 int 参数的字符串表示形式。</li></ol></li><li><p>字符串--&gt;基本类型</p><p>使用包装类的静态方法 parseXX(&quot;字符串&quot;)</p><p>​ Integer类：static int parseInt(String s)</p><p>​ Double类：static double parseDouble(String s)</p></li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//基本类型--&gt;字符串</span>
<span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//字符串--&gt;基本类型</span>
<span class="token keyword">int</span> i1 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//int i2 = Integer.parseInt(&quot;a&quot;);	//数字格式化异常</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入包" tabindex="-1"><a class="header-anchor" href="#导入包"><span>导入包</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>为了使用不在同一包中的类，需要在 Java 程序中使用 <span class="token function">import</span> 关键字导入这个类：<span class="token variable"><span class="token variable">\`</span><span class="token function">import</span> 包名.类名<span class="token punctuation">;</span><span class="token variable">\`</span></span>

导入包注意：
- 一个类同时引用两个来自不同包的同名类：
		- 必须先通过完整类名来区分
- package 和 <span class="token function">import</span> 的顺序是固定的
		- package 必须位于第一行
		- 只允许有一个 package 语句
		- 其次是 <span class="token function">import</span>
		- 接着是类的声明


快捷键：Eclipse/IntelliJ IDEA：Ctrl+Shift+O 优化导入

陷阱：
	- 导入子包不能访问父包：<span class="token variable"><span class="token variable">\`</span><span class="token function">import</span> java.*<span class="token punctuation">;</span><span class="token variable">\`</span></span>不能导入java下的所有子包
	- 默认包：没有声明 package 的类不能被导入
	- 循环依赖：类A导入类B，类B又导入类A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 1. 标准库包</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token comment">// 2. 第三方库</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>common<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token comment">// 3. 项目内部包</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mycompany<span class="token punctuation">.</span>myproject<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token comment">// 静态导入单独分组</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token static">PI</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token comment">// 错误示例 - 冲突</span>
<span class="token comment">// import java.util.Date;</span>
<span class="token comment">// import java.sql.Date;</span>

<span class="token comment">// 解决方案1：只导入一个，另一个用全限定名</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Date</span> utilDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span>Date</span> sqlDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span>Date</span><span class="token punctuation">(</span>utilDate<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

  	<span class="token comment">// 解决方案2：都不导入，全用全限定名</span>
  	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Date</span> utilDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span>Date</span> sqlDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span>Date</span><span class="token punctuation">(</span>utilDate<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接收输入scanner" tabindex="-1"><a class="header-anchor" href="#接收输入scanner"><span>接收输入Scanner</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>如果想接收用户从键盘上输入的内容，在 Java 中可以使用 Scanner（扫描仪）


Scanner input <span class="token operator">=</span> new Scanner<span class="token punctuation">(</span>System.in<span class="token punctuation">)</span><span class="token punctuation">;</span> // 实例化一个scanner对象

int num <span class="token operator">=</span> input.nextInt<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> // 获取输入的整数（如果输入其他类型则会报错）
String str <span class="token operator">=</span> input.next<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> // 接收输入的字符串
String ch <span class="token operator">=</span> input.next<span class="token punctuation">(</span><span class="token punctuation">)</span>.charAt<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> // 接收输入的第二个字符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;您输入的数字为&quot;</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token comment">// 输入一个小写字母，输出其对应的大写字母。例如输入q时，会输出Q。</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span> ch <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 下标为0代表第一个字符</span>
        <span class="token keyword">char</span> bigCh <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">(</span>ch <span class="token operator">-</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bigCh<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="程序的三大结构" tabindex="-1"><a class="header-anchor" href="#程序的三大结构"><span>程序的三大结构</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- 顺序结构：程序只能从第一行开始执行，中间不能跳过某一行代码去执行后续代码。
- 选择结构：让代码有选择地执行，可让某一行或多行代码在条件不符合时不执行。
- 循环结构：让某一行或多行代码可以重复执行多次。


<span class="token comment">#### 选择结构</span>
<span class="token number">1</span>. 关系运算符
		关系表达式的值是一个逻辑值<span class="token punctuation">(</span>true <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">)</span>。条件成立为真，条件不成立为假。
<span class="token number">2</span>. <span class="token keyword">if</span> 选择结构
<span class="token number">3</span>. if-else 选择结构
<span class="token number">4</span>. 多重 <span class="token keyword">if</span> 选择结构
<span class="token number">5</span>. 嵌套 <span class="token keyword">if</span> 选择结构
<span class="token number">6</span>. switch 选择结构


<span class="token comment">#### 循环结构</span>
<span class="token number">1</span>. for循环：for<span class="token punctuation">(</span>循环变量赋初值<span class="token punctuation">;</span> 循环条件<span class="token punctuation">;</span> 循环变量增值<span class="token punctuation">)</span> <span class="token punctuation">{</span> 循环语句<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token number">2</span>. break和continue
<span class="token number">3</span>. <span class="token keyword">while</span> 循环结构
<span class="token number">4</span>. do-while 循环结构

注意：switch 中省略 <span class="token builtin class-name">break</span> 会触发「case 穿透」，程序从匹配的 <span class="token keyword">case</span> 开始依次执行后续所有 <span class="token keyword">case</span> 代码，直到遇到 <span class="token builtin class-name">break</span> 或 switch 结束。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt="image-20251211101650222"></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ControlStructureDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=== Java 控制结构综合演示 ===&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个数字 (1-3 测试选择结构，4-7 测试循环结构)：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> choice <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">switch</span> <span class="token punctuation">(</span>choice<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token function">demoRelationOperators</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 关系运算符</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token function">demoIfStructures</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// if 选择结构</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span> <span class="token function">demoSwitchStructure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// switch 选择结构</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span> <span class="token function">demoForLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">// for 循环</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span> <span class="token function">demoWhileLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// while 循环</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span> <span class="token function">demoDoWhileLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// do-while 循环</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">7</span><span class="token operator">:</span> <span class="token function">demoBreakContinue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// break 和 continue</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;输入错误，程序结束。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        scanner<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 1. 关系运算符演示</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">demoRelationOperators</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n=== 1. 关系运算符演示 ===&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span> <span class="token operator">+</span> a <span class="token operator">+</span> <span class="token string">&quot;, b = &quot;</span> <span class="token operator">+</span> b <span class="token operator">+</span> <span class="token string">&quot;, c = &quot;</span> <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a == b: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a != b: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">!=</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a &gt; b: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a &lt; b: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a &gt;= c: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;=</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b &lt;= c: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;=</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false</span>

        <span class="token comment">// 关系表达式的值是 boolean 类型</span>
        <span class="token keyword">boolean</span> result1 <span class="token operator">=</span> a <span class="token operator">==</span> c<span class="token punctuation">;</span>  <span class="token comment">// true</span>
        <span class="token keyword">boolean</span> result2 <span class="token operator">=</span> b <span class="token operator">&gt;</span> c<span class="token punctuation">;</span>   <span class="token comment">// true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a == c 的结果: &quot;</span> <span class="token operator">+</span> result1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b &gt; c 的结果: &quot;</span> <span class="token operator">+</span> result2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 2. if 选择结构演示</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">demoIfStructures</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n=== 2. if 选择结构演示 ===&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入你的年龄: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> age <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2.1 简单 if 结构</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n--- 简单 if 结构 ---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;你已经成年了！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 2.2 嵌套 &amp; 多重 if 结构</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n--- 嵌套 if 结构 ---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入你的性别 (1:男, 2:女): &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> gender <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>gender <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;你是成年男性。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>gender <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;你是成年女性。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;性别输入错误。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;你还没有成年。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        scanner<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 3. switch 选择结构演示</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">demoSwitchStructure</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n=== 3. switch 选择结构演示 ===&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      	<span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行case 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行case 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行case 3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

				<span class="token comment">// 无 break产生的异常</span>
      	<span class="token keyword">switch</span> <span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行case 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 无break</span>
            <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行case 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 这里没有break，会发生case穿透</span>
            <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行case 3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// 直到这里才跳出，中断循环执行</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Java 12+ 新的 switch 表达式（语法糖）</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n--- switch 表达式 (Java 12+) ---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      	<span class="token keyword">int</span> day <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> dayType <span class="token operator">=</span> <span class="token keyword">switch</span> <span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;工作日&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;休息日&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;无效&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;今天类型: &quot;</span> <span class="token operator">+</span> dayType<span class="token punctuation">)</span><span class="token punctuation">;</span>

        scanner<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 4. for 循环演示</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">demoForLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n=== 4. for 循环演示 ===&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 4.1 基本 for 循环</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--- 基本 for 循环 (1-10的奇数) ---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 4.4 嵌套 for 循环 (乘法表)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n--- 嵌套 for 循环 (九九乘法表前3行) ---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token string">&quot;×&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">*</span> j<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 4.5 增强 for 循环 (for-each)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n--- 增强 for 循环 (遍历数组) ---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> numbers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 4.6 无限循环 (需要 break 退出)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n--- 无限 for 循环 (打印5次后退出) ---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 相当于 while(true)</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;这是第 &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">++</span>count<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 次循环&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 5. while 循环演示</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">demoWhileLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n=== 5. while 循环演示 ===&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 5.1 基本 while 循环：计算 1-100 的和</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n--- 计算 1-100 的和 ---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> num<span class="token punctuation">;</span>
            num<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;1-100 的和是: &quot;</span> <span class="token operator">+</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 5.3 输入验证</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n--- 输入验证 (必须输入正数) ---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> input <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>input <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个正整数: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            input <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>input <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;输入错误，请重新输入！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;你输入的是: &quot;</span> <span class="token operator">+</span> input<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 5.4 无限循环</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n--- 无限 while 循环 (打印3次后退出) ---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;循环次数: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">++</span>counter<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>counter <span class="token operator">&gt;=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;达到3次，退出循环&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        scanner<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 6. do-while 循环演示</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">demoDoWhileLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n=== 6. do-while 循环演示 ===&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 至少执行一次的特点</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">do</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;j = &quot;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 即使条件不满足，也会执行一次</span>
            j<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 7. 带标签的 break 和 continue 演示</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">demoBreakContinue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 7.5 带标签的 break (跳出多层循环)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n--- 带标签的 break ---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        outerLoop<span class="token operator">:</span>  <span class="token comment">// 标签</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i=&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;, j=&quot;</span> <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token string">&quot; 时跳出外层循环&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span> outerLoop<span class="token punctuation">;</span>  <span class="token comment">// 直接跳出外层循环</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i=&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;, j=&quot;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 7.6 带标签的 continue</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n--- 带标签的 continue ---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        outerLoop2<span class="token operator">:</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;跳过 i=2 时的剩余循环&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">continue</span> outerLoop2<span class="token punctuation">;</span>  <span class="token comment">// 继续外层循环的下一次迭代</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i=&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;, j=&quot;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理"><span>异常处理</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>处理异常的关键字：try、catch、finally、throw、throws
  - try：执行可能产生异常的代码
  - catch：捕获异常
  - finally：表示在最后，无论是否发生异常，代码都会执行
  - throws：声明方法可能要抛出的各种异常
  - throw：手动抛出异常

异常的方法（Exception）
	- void printStackTrace<span class="token punctuation">(</span><span class="token punctuation">)</span>：输出异常的堆栈信息
	- String getMessage<span class="token punctuation">(</span><span class="token punctuation">)</span>：返回异常信息描述字符串，是 printStackTrace<span class="token punctuation">(</span><span class="token punctuation">)</span> 输出信息的一部分

多路异常捕获
	- 排列 catch 语句的顺序：先子类后父类
	- 发生异常时按顺序逐个匹配
	- 只执行第一个与异常类型匹配的 catch 语句



	  try <span class="token punctuation">{</span>
      // 代码段 <span class="token number">1</span>
      // 可能产生异常的代码段 <span class="token number">2</span>
    <span class="token punctuation">}</span> catch <span class="token punctuation">(</span>异常类型 ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      // 对异常进行处理的代码段 <span class="token number">3</span>
      System.out.println<span class="token punctuation">(</span>ex.getMessage<span class="token punctuation">(</span><span class="token punctuation">))</span><span class="token punctuation">;</span>
      ex.printStackTrace<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> finally <span class="token punctuation">{</span>
      // 最后执行的代码段 <span class="token number">4</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt="img"></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// 多路异常捕获</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入被除数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> num1 <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入除数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> num2 <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    result <span class="token operator">=</span> num1 <span class="token operator">/</span> num2<span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InputMismatchException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 捕获类型错误</span>
  	<span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;被除数和除数必须是整数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ArithmeticException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 捕获算数异常</span>
  	<span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;除数不能为0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 捕获其他异常</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;其他异常&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;程序结束&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义异常" tabindex="-1"><a class="header-anchor" href="#自定义异常"><span>自定义异常</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomException</span> <span class="token keyword">extends</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">CustomException</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CustomException</span><span class="token punctuation">(</span><span class="token string">&quot;自定义错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">CustomException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 自定义错误</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串"><span>字符串</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>程序中所有的双引号字符串，都是String类的对象


- 将int<span class="token punctuation">[</span><span class="token punctuation">]</span>数组转变为字符串格式：String intStr <span class="token operator">=</span> Arrays.toString<span class="token punctuation">(</span>intArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
- String--<span class="token operator">&gt;</span>数组：toCharArray
- 数组重新排序：Arrays.sort<span class="token punctuation">(</span>数组<span class="token punctuation">)</span><span class="token punctuation">;</span>	//默认字母/从小到大排序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//使用空参构造</span>
<span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//str1是空的字符串</span>

<span class="token comment">//根据字符数组创建</span>
<span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token char">&#39;A&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;B&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;C&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//str2为ABC</span>

<span class="token comment">//根据字节数组创建字符串</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">97</span><span class="token punctuation">,</span><span class="token number">98</span><span class="token punctuation">,</span><span class="token number">99</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//str3为abc</span>

<span class="token comment">//直接创建</span>
<span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="内容比较-equals与equalsignorecase" tabindex="-1"><a class="header-anchor" href="#内容比较-equals与equalsignorecase"><span>内容比较 equals与equalsIgnoreCase</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//区分大小写 equals()</span>
<span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//false</span>
<span class="token class-name">Sysytem</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//true</span>

<span class="token comment">//不区分大小写equalsIgnoreCase()</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="索引查找" tabindex="-1"><a class="header-anchor" href="#索引查找"><span>索引查找</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">&quot;World&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//拼接字符串</span>
<span class="token class-name">String</span> str3 <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//HelloWorld</span>

<span class="token comment">//获取指定索引位置的单个字符</span>
<span class="token keyword">char</span> ch <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">.</span><span class="token function">chatAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//e</span>

<span class="token comment">//查找参数字符串在本来字符串当中出现的第一次索引位置（-1代表没有）</span>
str1<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;llo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串转换" tabindex="-1"><a class="header-anchor" href="#字符串转换"><span>字符串转换</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">&quot;HelloWorld&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//字符串截取	substring</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">subsring</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//World</span>

<span class="token comment">//字符串替换	replace()</span>
<span class="token class-name">String</span> str3 <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;l&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//He**oW*rld</span>

<span class="token comment">//分割字符串	splice</span>
<span class="token class-name">String</span> str4 <span class="token operator">=</span> <span class="token string">&quot;aaa,bbb,ccc&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array1 <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="string类与stringbuilder类" tabindex="-1"><a class="header-anchor" href="#string类与stringbuilder类"><span>String类与StringBuilder类</span></a></h4><p><img src="`+u+`" alt="image-20201228224638118"></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*StringBuilder常用方法
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组-arrays" tabindex="-1"><a class="header-anchor" href="#数组-arrays"><span>数组 Arrays</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>数组是一组相同类型的变量，它们往往是为了表示同一批对象的统一属性。

数组的特性
  - 数组是一种引用数据类型
  - 数组当中的多个数据类型必须统一
  - 数组长度在程序运行期间不可改变
  - 初始化（动态初始化-指定长度、静态初始化-指定内容）
  - 确定数组内容用静态初始化，不确定用动态初始化

学习顺序
	<span class="token number">1</span>. 数组的定义和使用
	<span class="token number">2</span>. 数组求最值：遍历逐个查找对比
	<span class="token number">3</span>. 数组插入：先确认位置，然后先把插入所在位置及之后的元素后移，然后再插入元素
	<span class="token number">4</span>. 删除元素：先确认位置，然后把删除所在位置及之后的元素前移（会覆盖）
	<span class="token number">5</span>. 顺序查找
	<span class="token number">6</span>. 二分法查找
			关注左右边界
			循环条件：left <span class="token operator">&lt;=</span> right
			计算中间位置：<span class="token punctuation">(</span>left + right<span class="token punctuation">)</span> / <span class="token number">2</span>
			动态调整左右边界
			如100个数字最多查找7次，因为2的7次方 <span class="token operator">&gt;</span> <span class="token number">100</span>
	<span class="token number">7</span>. 冒泡排序算法


<span class="token comment">#### 空指针异常NullPointerException</span>
数组必须进行new初始化才能使用其中元素，如果只赋一个null值，没有进行new创建，则发生空指针异常 NullPointerException
原因：没new初始化	--<span class="token operator">&gt;</span>	解决：new初始化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//动态初始化，指定长度</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数组插入" tabindex="-1"><a class="header-anchor" href="#数组插入"><span>数组插入</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayInsert</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在一个升序排序的成绩数组中，增加一个学生的成绩，并保证数组元素保持升序排列</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">78</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">85</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">95</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">98</span><span class="token punctuation">;</span>

        <span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> scope <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 保存插入的分数</span>

        <span class="token comment">// 1.先查找出插入成绩的位置</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>scope <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                index <span class="token operator">=</span> i<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 2.把要插入成绩位置及其之后的元素都往后移</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> index<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 3.插入成绩</span>
        nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> scope<span class="token punctuation">;</span>

        <span class="token comment">// 打印最新结果</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二分法查找" tabindex="-1"><a class="header-anchor" href="#二分法查找"><span>二分法查找</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BinarySearch</span> <span class="token punctuation">{</span>
    <span class="token comment">// 二分法查找：猜想一个 1~100 之间的数，根据猜测的数字提示“猜大了”、“猜小了”、“猜对了”。使用二分法模拟猜数字过程</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个数字，范围是：(1~100之间，包含1和100)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> right <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> middle <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>

            <span class="token comment">// 已经查找到</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>middle <span class="token operator">==</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>middle <span class="token operator">+</span> <span class="token string">&quot;,猜对了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 边界右移</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>middle <span class="token operator">&lt;</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                left <span class="token operator">=</span> middle <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>middle <span class="token operator">+</span> <span class="token string">&quot;,猜小了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 边界左移</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>middle <span class="token operator">&gt;</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                right <span class="token operator">=</span> middle <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>middle <span class="token operator">+</span> <span class="token string">&quot;,猜大了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用api" tabindex="-1"><a class="header-anchor" href="#常用api"><span>常用API</span></a></h2><h3 id="系统-system" tabindex="-1"><a class="header-anchor" href="#系统-system"><span>系统 System</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// System.currentTimeMillis() 获取当前时间毫秒值（可用来计算运行程序所需要时间、或用作文件命名-防止文件重名）</span>
<span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ...中间执行的代码(计算该段代码的执行时间)</span>
<span class="token keyword">long</span> end <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// xx毫秒</span>


<span class="token comment">// 终止当前运行的虚拟机</span>
<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当前虚拟机是正常停止</span>
<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 非0：当前虚拟机异常停止</span>


<span class="token comment">// 拷贝数组：System.arraycopy(数据源数组, 起始索引, 目标数组, 起始索引, 拷贝个数);</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> arr2<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//把arr1数组的前4个数字复制到arr2数组中</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>	  <span class="token comment">//1,2,3,4,5,4,3,2,1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行-runtime" tabindex="-1"><a class="header-anchor" href="#运行-runtime"><span>运行 Runtime</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>常用方法：
  - 当前系统的运行环境对象：public static Runtime getRuntime<span class="token punctuation">(</span><span class="token punctuation">)</span>
  - 停止虚拟机：public void exit<span class="token punctuation">(</span>int status<span class="token punctuation">)</span>
  - 获取CPU的线程数：public int availableProcessors<span class="token punctuation">(</span><span class="token punctuation">)</span>
  - JVM能从系统中获取总内存大小<span class="token punctuation">(</span>单位byte<span class="token punctuation">)</span>：public long maxMemory<span class="token punctuation">(</span><span class="token punctuation">)</span>
  - JVM已经从系统中获取总内存大小<span class="token punctuation">(</span>单位byte<span class="token punctuation">)</span>：public long totalMemory<span class="token punctuation">(</span><span class="token punctuation">)</span>
  - JVM剩余内存大小<span class="token punctuation">(</span>单位byte<span class="token punctuation">)</span>：public long freeMemory<span class="token punctuation">(</span><span class="token punctuation">)</span>
  - 运行cmd命令：public Process exec<span class="token punctuation">(</span>String <span class="token builtin class-name">command</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取当前运行环境对象</span>
        <span class="token class-name">Runtime</span> r1 <span class="token operator">=</span> <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Runtime</span> r2 <span class="token operator">=</span> <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>r1 <span class="token operator">==</span> r2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

        <span class="token comment">// 获取CPU的线程数</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>r1<span class="token punctuation">.</span><span class="token function">availableProcessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 24</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">maxMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">totalMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">freeMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * 运行cmd命令
         *  shutdown：关机（加上下述参数才能执行）
         *      -s：默认在1分子后执行
         *      -s -t 指定秒：指定关机时间
         *      -a：取消关机操作
         *      -r：关机并重启
         */</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&quot;shutdown -s -t 36000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 停止虚拟机</span>
        <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高精度数值-bigdecimal" tabindex="-1"><a class="header-anchor" href="#高精度数值-bigdecimal"><span>高精度数值 BigDecimal</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>BigDecimal 作用：
	- 解决小数运算精度丢失问题（浮点数直接运算会出现精度误差）
	- 表示较大的小数（int和long数值范围有限，BigDecimal无数值范围限制<span class="token punctuation">(</span>仅受JVM内存限制<span class="token punctuation">)</span>）
	- 灵活控制小数位数与舍入规则（针对金额格式化<span class="token punctuation">(</span>保留2位小数<span class="token punctuation">)</span>、四舍五入）


初始化 BigDecimal
  <span class="token number">1</span>. 构造方法：精准初始化，无精度丢失
  		传入参数格式推荐为正数或字符串，如果传入浮点数可能会出现结果偏差<span class="token punctuation">(</span>因此可把浮点数转化为字符串传入<span class="token punctuation">)</span>
      		BigDecimal num1 <span class="token operator">=</span> new BigDecimal<span class="token punctuation">(</span><span class="token string">&quot;0.1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token number">2</span>. 静态工厂方法：
  		底层自动将 double 转为字符串后再调用new BigDecimal，规避精度问题（小数常用）
      		BigDecimal num2 <span class="token operator">=</span> BigDecimal.valueOf<span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  注意：
    - 如果表示的数，没超double的取值范围，建议使用 valuleOf。
    - 如果表示的数，超出double的取值范围，建议使用 new BigDecimal。
    - 如果使用valueof，且传递的是 <span class="token number">0</span>~10之间的整数，包含0和10，方法会返回已经创建好的对象，不会重新 new。
    		BigDecimal.valueOf<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">==</span> BigDecimal.valueOf<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> // <span class="token boolean">true</span>
    		BigDecimal.valueOf<span class="token punctuation">(</span><span class="token number">10.0</span><span class="token punctuation">)</span> <span class="token operator">==</span> BigDecimal.valueOf<span class="token punctuation">(</span><span class="token number">10.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> // <span class="token boolean">false</span>


加减乘除运算
  - 加法：add
      BigDecimal <span class="token function">sum</span> <span class="token operator">=</span> num1.add<span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  - 减法：subtract
      BigDecimal <span class="token function">diff</span> <span class="token operator">=</span> num1.subtract<span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>	// num1-num2
  - 乘法：multiply
      BigDecimal product <span class="token operator">=</span> num1.multiply<span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>	// num1 * num2
  - 除法：divide<span class="token punctuation">(</span>除数<span class="token punctuation">)</span>。若除不尽会抛出 ArithmeticException，不推荐直接使用
      BigDecimal quotient <span class="token operator">=</span> num1.divide<span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  - 安全除法：divide<span class="token punctuation">(</span>除数, 保留小数位数, 舍入规则<span class="token punctuation">)</span>
      BigDecimal quotient <span class="token operator">=</span> num1.divide<span class="token punctuation">(</span>num2, <span class="token number">2</span>, RoundingMode.HALF_UP<span class="token punctuation">)</span><span class="token punctuation">;</span>


舍入规则
	- 四舍五入：RoundingMode.HALF_UP
  - 五舍六入：RoundingMode.HALF_DOWN
  - 向上取整：RoundingMode.UP
  - 向下取整：RoundingMode.DOWN
  - 向零取整：RoundingMode.TOWARD_ZERO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 正确初始化</span>
<span class="token class-name">BigDecimal</span> a <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;0.2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> num <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;123.456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 加减乘除运算
 */</span>
<span class="token comment">// 加法</span>
<span class="token class-name">BigDecimal</span> sum <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.1 + 0.2 = 0.3</span>

<span class="token comment">// 减法</span>
<span class="token class-name">BigDecimal</span> diff <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.1 - 0.2 = -0.1</span>

<span class="token comment">// 乘法</span>
<span class="token class-name">BigDecimal</span> product <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.1 * 0.2 = 0.02</span>

<span class="token comment">// 安全除法（保留2位小数，四舍五入）</span>
<span class="token class-name">BigDecimal</span> quotient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name">RoundingMode</span><span class="token punctuation">.</span><span class="token constant">HALF_UP</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;10 / 3 = &quot;</span> <span class="token operator">+</span> quotient<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10 / 3 = 3.33</span>



<span class="token doc-comment comment">/**
 * 设置小数位数
 */</span>
<span class="token comment">// 保留2位小数，四舍五入</span>
<span class="token class-name">BigDecimal</span> num2 <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name">RoundingMode</span><span class="token punctuation">.</span><span class="token constant">HALF_UP</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123.45</span>
<span class="token keyword">int</span> scale <span class="token operator">=</span> num2<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取小数位数，输出 2</span>


<span class="token doc-comment comment">/**
 * 比较大小 compareTo
 *  返回值 0：两个数值相等；
 *  返回值 &gt;0：当前对象大于参数对象；
 *  返回值 &lt;0：当前对象小于参数对象
 */</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">&quot; 小于 &quot;</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">&quot; 等于 &quot;</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">&quot; 大于 &quot;</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.1 小于 0.2</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * 类型转换
 */</span>
<span class="token comment">// 1. BigDecimal → 字符串</span>
<span class="token class-name">String</span> str <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 &quot;123.456&quot;</span>

<span class="token comment">// 2. BigDecimal → int（需确保数值在int范围内，否则抛异常）</span>
<span class="token keyword">int</span> intVal <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 123（小数部分直接舍去）</span>

<span class="token comment">// 3. BigDecimal → long（同理，需在long范围内）</span>
<span class="token keyword">long</span> longVal <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">longValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 123</span>

<span class="token comment">// 4. BigDecimal → double（可能丢失精度，仅在非高精度场景使用）</span>
<span class="token keyword">double</span> doubleVal <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 123.456</span>

<span class="token comment">// 5. 字符串/基本类型 → BigDecimal（参考初始化部分）</span>
<span class="token class-name">BigDecimal</span> fromStr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;123.456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> fromLong <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">123L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * 常用方法
 */</span>
<span class="token comment">// 1. 获取绝对值</span>
<span class="token class-name">BigDecimal</span> negativeNum <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;-123.456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> absNum <span class="token operator">=</span> negativeNum<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 123.456</span>

<span class="token comment">// 2. 获取最大值/最小值</span>
<span class="token class-name">BigDecimal</span> maxNum <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 0.2</span>
<span class="token class-name">BigDecimal</span> minNum <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 0.1</span>

<span class="token comment">// 3. 取反（正负转换）</span>
<span class="token class-name">BigDecimal</span> negNum <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">negate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 -0.1</span>

<span class="token comment">// 4. 判断是否为零</span>
<span class="token keyword">boolean</span> isZero <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ZERO</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="bigdecimal-底层存储方式" tabindex="-1"><a class="header-anchor" href="#bigdecimal-底层存储方式"><span>BigDecimal 底层存储方式</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>BigDecimal 会先把传入的值转换成字符串，然后将每个字符转化成 ASCII 中所对应的数字，并存储到一个数组中。

例如：BigDecimal bd <span class="token operator">=</span> new BigDecimal<span class="token punctuation">(</span><span class="token string">&quot;0.226&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			内部转化顺序：<span class="token string">&#39;0.226&#39;</span> -<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;0&#39;</span>, <span class="token string">&#39;.&#39;</span>, <span class="token string">&#39;2&#39;</span>, <span class="token string">&#39;2&#39;</span>, <span class="token string">&#39;6&#39;</span><span class="token punctuation">]</span>  -<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">48</span>, <span class="token number">46</span>, <span class="token number">50</span>, <span class="token number">50</span>, <span class="token number">54</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+`" alt="image-20251226172405923"></p><h3 id="枚举类型" tabindex="-1"><a class="header-anchor" href="#枚举类型"><span>枚举类型</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>枚举指由一组固定的常量组成的类型，当某种类型只能取固定范围内的值时，可以定义为枚举类型。

<span class="token punctuation">[</span>访问修饰符<span class="token punctuation">]</span> enum 枚举名称 <span class="token punctuation">{</span>
	值1, 值2, <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">WeekDay</span> <span class="token punctuation">{</span>
        <span class="token constant">MONDAY</span><span class="token punctuation">,</span> <span class="token constant">TUESDAY</span><span class="token punctuation">,</span> <span class="token constant">WEDNESDAY</span><span class="token punctuation">,</span> <span class="token constant">THURSDAY</span><span class="token punctuation">,</span> <span class="token constant">FRIDAY</span><span class="token punctuation">,</span> <span class="token constant">SATURDAY</span><span class="token punctuation">,</span> <span class="token constant">SUNDAY</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">WeekDay</span><span class="token punctuation">.</span><span class="token constant">MONDAY</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// MONDAY</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时间-date" tabindex="-1"><a class="header-anchor" href="#时间-date"><span>时间 Date</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>格林尼治时间<span class="token punctuation">(</span>Greenwich Mean Time<span class="token punctuation">)</span> 简称 GMT。
目前时间标准时间（UTC） 已经替换为：原子钟。
中国标准时间：世界标准时间 + <span class="token number">8</span>小时


Calendar 代表系统当前时间的日历对象，可以单独修改、获取时间中的年、月、日。
注意：Calendar 是一个抽象类，不能直接创建对象。


JDK8增加的时间类（不提供变更时间的类）
  Date类
      - ZoneId：时区
      - Instant：时间戳
      - ZoneDateTime：带时区的时间
  日期格式化类-SimpleDateFormat
      - DateTimeFormatter：用于时间的格式化和解析
  - 日历类 Calendar
      - LocalDate：年、月、日
      - LocalTime：时、分、秒
      - LocalDateTime：年、月、日、时、分、秒
  - 工具类
      - Duration：时间间隔（秒、纳秒）
      - Period：时间间隔（年、月、日）
      - ChronoUnit：时间间隔（所有单位）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">ParseException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Calendar</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ParseException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 时间格式化</span>
        <span class="token class-name">SimpleDateFormat</span> sdf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy年MM月dd日 HH:mm:ss EE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Date</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">0L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> sdf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1970年01月01日 08:00:00 周四</span>

        <span class="token comment">// 字符串转时间</span>
        <span class="token class-name">SimpleDateFormat</span> sdf2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Date</span> d2 <span class="token operator">=</span> sdf2<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;2025-12-30&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Tue Dec 30 00:00:00 CST 2025</span>

        <span class="token comment">// 日期提取</span>
        <span class="token class-name">Calendar</span> c <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 把时间中的纪元、年、月、日、时、分、秒等放入一个数组</span>
        <span class="token class-name">Date</span> day <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c<span class="token punctuation">.</span><span class="token function">setTime</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span><span class="token punctuation">;</span>

        c<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">YEAR</span><span class="token punctuation">,</span> <span class="token number">2025</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MONTH</span><span class="token punctuation">,</span> <span class="token number">12</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置为12月份(月份需减一，如果不设置-1且超出12月份，则会对年份转换)</span>
        c<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">DAY_OF_MONTH</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> year <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">YEAR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> month <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MONTH</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> date <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">DAY_OF_MONTH</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> week <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">DAY_OF_WEEK</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> weekList <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;周日&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;周一&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;周二&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;周三&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;周四&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;周五&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;周六&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>year <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> month <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> date <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> weekList<span class="token punctuation">[</span>week <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2025-12-31 周三</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组-arrays-1" tabindex="-1"><a class="header-anchor" href="#数组-arrays-1"><span>数组 Arrays</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- 数组拼接成字符串：static String toString<span class="token punctuation">(</span>数组<span class="token punctuation">)</span>

- 二分法查找元素：static int binarySearch<span class="token punctuation">(</span>数组, 查找的元素<span class="token punctuation">)</span>
		注意：如果查找的数在数组中不存在，则返回值是 <span class="token variable"><span class="token variable">\`</span>- arrLength - <span class="token number">1</span><span class="token variable">\`</span></span>；否则返回数组下标

- 拷贝数组：static int<span class="token punctuation">[</span><span class="token punctuation">]</span> copyOf<span class="token punctuation">(</span>原数组, 新数组长度<span class="token punctuation">)</span>
			如果新数组长度小于老数组长度，会部分拷贝；
			如果新数组长度大于老数组长度，会补上默认初始值

- 指定范围内拷贝数组：static int<span class="token punctuation">[</span><span class="token punctuation">]</span> copyOfRange<span class="token punctuation">(</span>原数组, 起始索引, 结束索引<span class="token punctuation">)</span>
			包左不包右：包含起始索引下标的数据，不包含结束索引的数据

- 填充数组：static void fill<span class="token punctuation">(</span>数组, 元素<span class="token punctuation">)</span>

- 使用快速排序进行升序排列：static void sort<span class="token punctuation">(</span>数组<span class="token punctuation">)</span>

- 按指定规则排序：static void sort<span class="token punctuation">(</span>数组, 排序规则<span class="token punctuation">)</span>
		第二个参数是一个接口，在调用方法时需传递这个接口的实现类对象作为排序规则。
		这个实现的底层原理：插入排序 + 二分查找方式进行排序
			<span class="token number">1</span>. 默认把0索引的数据当作有序序列，1索引到最后的数据都是无序序列；
			<span class="token number">2</span>. 逐个遍历无序序列得到每个元素<span class="token punctuation">(</span>假设为A元素<span class="token punctuation">)</span>，把这些元素逐个在有序序列中根据二分查找进行插入数据。
			<span class="token number">3</span>. 把A元素使用二分查找跟插入点的元素进行比较（比较规则为 compare方法的方法体）
					<span class="token number">3</span>-1. 如果方法返回值是负数，拿A继续跟二分的左边数据进行比较
					<span class="token number">3</span>-2. 如果方法返回值是正数，拿A继续跟二分的右边元素进行比较
					<span class="token number">3</span>-3. 如果方法返回值是0，也拿A跟二分的后边元素进行比较
					直到能确定A的最终位置为止。
		compare<span class="token punctuation">(</span>o1,o2<span class="token punctuation">)</span>的参数：
			o1：表示在无序序列中，遍历得到的每一个元素
			o2：有序序列中的元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Comparator</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 9</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -11</span>

        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newArr1 <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2]</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newArr2 <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0]</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>newArr1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>newArr2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newArr3 <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3, 4, 5, 6, 7, 8, 9]</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>newArr3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 自定义排序</span>
        <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> o1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> o2 <span class="token operator">-</span> o1<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [9, 8, 7, 6, 5, 4, 3, 2, 1]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lambda表达式" tabindex="-1"><a class="header-anchor" href="#lambda表达式"><span>Lambda表达式</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>函数式编程（Functional programming）是一种思想特点，忽略面对对象的复杂语法，强调做什么，而不是谁去做。
Lambda 表达式是 JDK8 开始的一种新语法形式，是函数式思想的体现。

函数式接口：有且仅有一个抽象方法的接口叫函数式接口，接口上方可加 <span class="token variable"><span class="token variable">\`</span>@FunctionalInterface<span class="token variable">\`</span></span> 注解。

作用：
	- 用来简化匿名内部类的书写
	- 只能简化函数式接口的匿名内部类的写法


语法：<span class="token variable"><span class="token variable">\`</span><span class="token punctuation">(</span><span class="token punctuation">)</span> -<span class="token operator">&gt;</span> <span class="token punctuation">{</span> 方法体 <span class="token punctuation">}</span><span class="token variable">\`</span></span>
		- <span class="token variable"><span class="token variable">\`</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>：对应方法的形参
		- <span class="token variable"><span class="token variable">\`</span>-<span class="token operator">&gt;</span><span class="token variable">\`</span></span>：固定格式
		- <span class="token variable"><span class="token variable">\`</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token variable">\`</span></span>：对应方法的方法体

lambda 的省略规则：
	<span class="token number">1</span>. 参数类型可省略不写
	<span class="token number">2</span>. 如果只有一个参数，参数类型可省略，同时 <span class="token variable"><span class="token variable">\`</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> 也可省略
	<span class="token number">3</span>. 如果 lambda 表达式的方法提只有一行，大括号、分号、return 可以同时省略不写
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Comparator</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">// 函数式接口的匿名内部类实现</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> o1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> o2 <span class="token operator">-</span> o1<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// lambda 写法</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">(</span>o1<span class="token punctuation">,</span> o2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> o2 <span class="token operator">-</span> o1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// lambda 简写</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">(</span>o1<span class="token punctuation">,</span> o2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> o2 <span class="token operator">-</span> o1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象"><span>面向对象</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 方法定义
方法是若干语句的功能集合。
定义方法格式：<span class="token variable"><span class="token variable">\`</span>修饰符 返回值类型 方法名称<span class="token punctuation">(</span>参数类型  参数，<span class="token punctuation">..</span>.<span class="token punctuation">)</span><span class="token punctuation">{</span>方法体     <span class="token builtin class-name">return</span> 返回值；<span class="token punctuation">}</span><span class="token variable">\`</span></span>

修饰符--<span class="token operator">&gt;</span>（public、static）



<span class="token number">2</span>. 方法调用
- 单独调用：方法名称（参数）
- 打印调用：System.out.println<span class="token punctuation">(</span>方法名称（参数）<span class="token punctuation">)</span><span class="token punctuation">;</span>
- 赋值调用：返回值类型 变量名 <span class="token operator">=</span> 方法名称（参数）<span class="token punctuation">;</span>

注意：返回值类型为void的方法只能单独调用，不能进行打印或赋值调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
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
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">abc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;新定义的方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面向对象思想" tabindex="-1"><a class="header-anchor" href="#面向对象思想"><span>面向对象思想</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>面向过程：（强调步骤）当需要实现一个功能时，每一个步骤都需要详细处理
面向对象：（强调对象）当需要实现一个功能时，不关心具体的步骤，而是找一个JDK中的类来帮忙实现
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">mian</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类与对象的区别" tabindex="-1"><a class="header-anchor" href="#类与对象的区别"><span>类与对象的区别</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 类是对某一类事物的描述，是抽象的；对象是一类事物的实例，是具体的。
	- 类是对象的模板<span class="token punctuation">(</span>抽象化<span class="token punctuation">)</span>，对象是类的实体<span class="token punctuation">(</span>实例化<span class="token punctuation">)</span>。

<span class="token number">2</span>. 对象是函数、变量的集合体；而类是一组函数和变量的集合体。
  - 即类是一组具有相同属性的对象集合体。

<span class="token number">3</span>. UML的类图和对象图之间的区别是：
	- 类图中类名首字母大写，对象图中的对象名首字母小写。
  - 对象名下有一条下划线，而类名没有。

<span class="token number">4</span>. 类的数据值是共享的，一个实例能访问它所属类的类数据值；

<span class="token number">5</span>. 先有类，才有类的实例——对象。
	- 应用在创建某个类的实例（对象）之前，这个类必须被定义。

<span class="token number">6</span>. 实例方法和类方法的区别在于：实例方法属于单个对象，类方法属于类。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token comment">//成员变量（属性）:</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span> <span class="token comment">// 姓名</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span> <span class="token comment">// 年龄</span>

    <span class="token comment">//成员方法（行为）:</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token class-name">String</span> food<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;吃：&quot;</span> <span class="token operator">+</span> food<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类图" tabindex="-1"><a class="header-anchor" href="#类图"><span>类图</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1.0</span> 定义
类图是面向对象系统建模中最常用和最重要的图，是定义其它图的基础。类图主要是用来显示系统中的类、接口以及它们之间的静态结构和关系的一种静态模型。
这里要注意四个关键字：类、接口、静态结构、关系


<span class="token number">1.1</span> 表示一个类
第一行，表示类的名字，如 Person；
第二行，表示类的属性，如 name:string <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>，格式为属性名：类型 <span class="token operator">=</span> 默认值，其中可以不包含默认值；
第三行，表示类的方法，如 sayHello<span class="token punctuation">(</span>name<span class="token punctuation">)</span>，格式为方法名（参数列表）：返回值，其中可以不含参数，无返回值。
注意，+表示属性是公开<span class="token punctuation">(</span>public<span class="token punctuation">)</span>、-表示私有<span class="token punctuation">(</span>private<span class="token punctuation">)</span>、<span class="token variable"><span class="token variable">\`</span><span class="token comment">#</span><span class="token variable">\`</span></span>表示保护<span class="token punctuation">(</span>protect<span class="token punctuation">)</span>，static静态方法


<span class="token number">1.2</span> 表示一个接口
第一行，明确写上<span class="token operator">&lt;&lt;</span>接口<span class="token operator">&gt;&gt;</span>的标识，然后换行写下接口名；
第二行，表示接口需要实现的类方法。


<span class="token number">1.3</span> 类的其他表达
简单类、多例类、活动类等，这些在类图中并不常用，一般如何一个类只有方法没有属性，则第二行空着即可。



<span class="token number">2.0</span> 关系
表示类的关系总共有6种，这6种又可以分为3类。
第一类，泛化。表达了is a的关系模型，当A以某种形式是一个B时，就是这种关系，包含了有2种关系：继承、实现。
第二类，关联。表达了has a的关系模型，当A拥有一个B时，就是这种关系，包含了有3种关系：聚合、组合、关联。
第三类，依赖。表达了use a的关系模型，当A使用了一个B时，就是这种关系，包含了1种关系：依赖。

<span class="token number">2.1</span> 继承关系（鸟类继承自动物类）
继承使用一个实线+空心三角箭头，从子类指向父类即表示一个继承

<span class="token number">2.2</span> 实现关系（大雁实现了飞翔接口）
实现使用一个虚线+空心三角箭头，从实例指向接口即表示一个实现。
泛化关系（继承、实现都是空心三角箭头，指向实体是实线、指向虚有的接口则是虚线）

<span class="token number">2.3</span> 聚合关系（大雁聚集在一起形成了雁群，但是离开雁群的大雁依然可以存在）
聚合使用一个实线+空心菱形箭头，从整体指向局部即表示一个聚合。
注意，聚合关系只是将一些对象聚集在一起，但他们的关联是弱关联，局部对象可以脱离整体对象而单独存在

<span class="token number">2.4</span> 组合关系（翅膀是组成鸟的局部，翅膀不能脱离一个整体（鸟）而单独存活）
组合使用一个实线+实心菱形箭头，从整体指向局部即表示一个组合。
组合又叫合成，是由局部合起来才成为一个整体，他们密不可分，是强关联关系，局部脱离了整体就不存在

<span class="token number">2.5</span> 关联关系（气候的变更影响了企鹅的生存，合适的气候能让企鹅生存。但企鹅不是气候的实例，企鹅不能使用一个气候）
当一个关系明显是has a的拥有关系，但不是聚合也不是组合那样来描述整体与局部时，就应该考虑使用关联关系来描述，事实上，前两者都是（更加准确的）关联关系，关联使用一个实线箭头，从拥有者指向被拥有者。
所有的关联关系都是实线箭头，只是聚合（弱）用了一个空心菱形，而组合（强）用了一个实心菱形。这里的关联是可以双向的，关联关系的一个实例。

<span class="token number">2.6</span> 依赖关系（动物，有一个新陈代谢的功能，要工作则必须有空气和水，因此构成了他们之间的依赖关系）
依赖关系不同于关联关系，使用一个虚线箭头，从使用者指向被使用者。
这里要注意“使用”的概念，表达了一个物体需要通过另一个物体来完成工作，但他们之间没有包含的关系
但在企鹅与气候的关系中，企鹅的生存方式依赖于气候的变化，但他们不是依赖关系，因为企鹅不需要气候作为参数进行某项工作，如果企鹅有一个功能是迁徙，需要传入一个气候，此时就是依赖关系。


快捷记忆：继承实现用三角，二者皆实是实线。关联关系实箭头，依赖关系虚箭头。聚合组合有菱形，强弱判断实空心。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="img"></p><h3 id="类的基础" tabindex="-1"><a class="header-anchor" href="#类的基础"><span>类的基础</span></a></h3><h4 id="权限修饰符" tabindex="-1"><a class="header-anchor" href="#权限修饰符"><span>权限修饰符</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>private关键字
问题描述：定义数据变量时，无法阻止不合理的数值被设置进来；
解决方案：用private关键字将需要保护的成员变量进行修饰
一旦使用了private进行修饰，本类中可以随意访问，但是，超出本类之外就不能访问
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="image-20201213203936235"></p><h4 id="静态static关键字" tabindex="-1"><a class="header-anchor" href="#静态static关键字"><span>静态static关键字</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>一旦使用static关键字，则此内容属于类；所以凡是本类的对象，都共享同一份。
如果没有static关键字，必须首先创建对象，然后通过对象调用；
如果有static关键字，则不需创建对象，直接通过类名称来使用它。
无论是成员变量还是成员方法，如果有static，都推荐使用类名称来进行调用：

静态变量：类名称.静态变量
静态方法：类名称.静态方法<span class="token punctuation">(</span><span class="token punctuation">)</span>

注意：
静态不能访问非静态。原因：因为在内存中是先有静态内容，后有非静态内容。
静态方法中不能用this。原因：this代表当前对象，通过谁调用的方法，谁就是当前对象



<span class="token comment">#### 静态成员跟非静态成员的区别</span>
<span class="token number">1</span>、静态方法属于类，既可通过对象来调用，亦可通过类名来调用；
  	非静态方法只能通过对象来调用。
<span class="token number">2</span>、静态方法和属性只对类而言，而非静态是对于对象而言的。
<span class="token number">3</span>、在系统分配内存时不同：
  	静态成员是用栈分配内存，速度快，是在类第一次载入时初始化。
  	非静态成员是用堆分配内存，速度慢些，是在对象初始化时初始化。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo1</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">MyClass<span class="token punctuation">.</span>MethodStatic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">MethodStatic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;这是静态方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="成员变量和局部变量的区别" tabindex="-1"><a class="header-anchor" href="#成员变量和局部变量的区别"><span>成员变量和局部变量的区别</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- 局部变量：在方法内部，只有方法能用；没有默认值；位于栈内存
- 成员变量：直接写在类中；整个类都可以用；有默认起始值；位于堆内存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>	<span class="token comment">//成员变量</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>	<span class="token comment">//局部变量</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="静态代码块" tabindex="-1"><a class="header-anchor" href="#静态代码块"><span>静态代码块</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>当第一次用到本类时，静态代码块执行唯一的一次。如果有多个静态块，按顺序加载。
用途：用与对一次性对静态成员变量赋值。

    public class 类名称<span class="token punctuation">{</span>
      staic <span class="token punctuation">{</span>
        //静态代码块
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        num <span class="token operator">+=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        num <span class="token operator">+=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StaticTest</span> st1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StaticTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20 40</span>
        <span class="token class-name">StaticTest</span> st2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StaticTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不再执行static</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StaticTest</span><span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 40</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="this" tabindex="-1"><a class="header-anchor" href="#this"><span>this</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>解决参数名称和成员名称重名调用问题
this.成员变量名--<span class="token operator">&gt;</span>访问成员变量
如果该方法内存在相同的变量名，会先调用方法内的变量，如果想调用成员变量，则需要this来调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法重载" tabindex="-1"><a class="header-anchor" href="#方法重载"><span>方法重载</span></a></h4><p>重载是方法不变，参数的个数、参数类型、参数的多类型顺序不同</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 正确重载</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 正确重载</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 代码错误:和第8行冲突</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token keyword">double</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 正确重载</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">double</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 代码错误:和第6行冲突</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">double</span> d<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 代码错误:和第5行冲突</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">OPEN</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 代码正确不会报错，但是并不是有效重载</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 代码错误:和第3行冲突</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法"><span>构造方法</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>构造方法是专门用来创建对象的方法，当通过New关键字来创建对象时，就是在调用构造方法。


自定义构造方法
	- 格式：public 类名称<span class="token punctuation">(</span>参数类型 参数名<span class="token punctuation">)</span><span class="token punctuation">{</span>方法体<span class="token punctuation">}</span>
	- 构造方法名称必须和所在类名一致
	- 没有返回值。不能写返回值类型，包括void；不能return
	- 一旦自定义构造方法，系统将不再提供默认的构造方法
	- 构造方法也可以进行重载
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token comment">// 自定义构造方法</span>
    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;这是构造方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

  	<span class="token comment">// 重载构造方法</span>
    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token char">&#39;,&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="匿名对象" tabindex="-1"><a class="header-anchor" href="#匿名对象"><span>匿名对象</span></a></h4><p>匿名对象就是只有右边的对象，没有左边的名字和赋值运算符</p><p>匿名对象只能使用一次，下一次再使用会再次创建新的对象</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">mian</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token class-name">Student</span> stu1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   stu1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;ABC&quot;</span><span class="token punctuation">;</span>

   <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Kobe&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="final关键字" tabindex="-1"><a class="header-anchor" href="#final关键字"><span>final关键字</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>finnal 可用来修饰类、方法、局部变量、成员变量
  - 使用 finnal 修饰的类不能有子类
  - 使用 finnal 修饰的方法不能被重写
  - 使用 finnal 修饰的变量会变成常量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特征-封装" tabindex="-1"><a class="header-anchor" href="#特征-封装"><span>特征-封装</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>封装：将类的某些信息隐藏在类内部，不允许外部程序直接访问，而是通过该类提供的方法来实现对隐藏信息的操作和访问。
	- 隐藏类的实现细节
	- 只能通过规定方法访问数据

封装的过程
	- 将属性的可见性设为 private
	- 创建共有的 getter 和 setter 方法
	- 在 getter 和 setter 方法中加入判断语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stu<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特征-继承" tabindex="-1"><a class="header-anchor" href="#特征-继承"><span>特征-继承</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>被继承的类叫超类（superclass<span class="token punctuation">)</span>，继承超类的类叫子类（subclass）
子类是超类的一个专门用途的版本，它继承了超类定义的所有实例变量和方法，并且还展示了特定于自身的行为和特征。
继承是多态的前提；继承主要解决问题：共性抽取。

    public class 父亲名称<span class="token punctuation">{</span><span class="token punctuation">}</span>
    public class 子类名称 extends 父亲名称<span class="token punctuation">{</span><span class="token punctuation">}</span>


注意：
  - Java 中类只支持单继承，不支持多继承（一个类只能有一个直接父类）
  - 子类不能继承父类的如下内容：
      - private 成员
      - 子类与父类不在同包，使用默认访问修饰符的成员
      - 构造方法

初始化的顺序过程：
	<span class="token number">1</span>. 父类属性
	<span class="token number">2</span>. 父类构造
	<span class="token number">3</span>. 子类属性
	<span class="token number">4</span>. 子类构造

变量访问
  - 直接通过子类对象访问成员变量：等号左边是谁，就优先用谁，没有则向上找。
  - 间接通过子类对象访问成员变量：该方法属于谁，就优先用谁，没有则向上找。

变量调用
    - 局部变量：变量名
    - 本类变量：this.变量名
    - 父类变量：super.变量名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法重写" tabindex="-1"><a class="header-anchor" href="#方法重写"><span>方法重写</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- 重写<span class="token punctuation">(</span>Override<span class="token punctuation">)</span>：方法名称一样，参数列表一样
- 重载<span class="token punctuation">(</span>Overload<span class="token punctuation">)</span>：方法名称一样，参数列表不一样

方法覆盖重写规则：
    <span class="token number">1</span>、父子类之间的方法名称与参数列表相同
    <span class="token number">2</span>、@Override:写在方法前，检测是否有效正确覆盖重写（可不写，但要保证正确）
    <span class="token number">3</span>、子类方法的返回值相同或者是父类返回值的子类
    <span class="token number">4</span>、Object类是所有类的公共最高父类（祖宗类），java.lang.String就是Object的子类
    <span class="token number">5</span>、子类方法的权限必须<span class="token operator">&gt;=</span>父类方法的权限修饰符（比父类严格）
        public <span class="token operator">&gt;</span> protected <span class="token operator">&gt;</span> 默认不写 <span class="token operator">&gt;</span> private
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="super" tabindex="-1"><a class="header-anchor" href="#super"><span>super</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>在 <span class="token function">java</span> 中使用 super 访问父类成员
	- super 不能访问父类私有成员
	- super 调用构造方法时，只能是第一句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object类" tabindex="-1"><a class="header-anchor" href="#object类"><span>Object类</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Object 类是所有类的父类，任何类默认都继承自 Object 类。

判断是否为null：Object.isNull<span class="token punctuation">(</span><span class="token punctuation">)</span>
判断是否不为null：Object.nonNull<span class="token punctuation">(</span><span class="token punctuation">)</span>

注意：对两个对象使用 equals<span class="token punctuation">(</span><span class="token punctuation">)</span> 判断，需要先做非空判断。
Object.equals<span class="token punctuation">(</span>s1, s2<span class="token punctuation">)</span>判断两个对象是否相同：
	<span class="token number">1</span>. 先判断 s1 是否为 null，如果为 null，直接返回 <span class="token boolean">false</span>
	<span class="token number">2</span>. 如果 s1 不为 null，则利用 s1 再次调用 equals 方法
	<span class="token number">3</span>. 如果 s1 为 Student（创建对象实例）类型，所以最终会调用 Student 中的 equals 方法。
	如果不重写则会比较地址值；如果重写就比较属性值


常被子类重写的方法：
	- toString<span class="token punctuation">(</span><span class="token punctuation">)</span>：返回当前对象本身的有关信息，按字符串对象返回
	- equals<span class="token punctuation">(</span><span class="token punctuation">)</span>：比较两个对象是否是同一个对象，是则返回 <span class="token boolean">true</span>
				注意：equals 隐藏一个多态，多态弊端是无法使用子类特有的内容<span class="token punctuation">(</span>属性、方法<span class="token punctuation">)</span>，所以需要向下转型<span class="token punctuation">(</span>强转<span class="token punctuation">)</span>

---<span class="token operator">&gt;</span> 可通过 alt+insert 键生成 equals<span class="token punctuation">(</span><span class="token punctuation">)</span>、hashCode<span class="token punctuation">(</span><span class="token punctuation">)</span>、toString<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 打印属性值</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Person{name=&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> name <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> name<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    result <span class="token operator">=</span> <span class="token number">31</span> <span class="token operator">*</span> result <span class="token operator">+</span> age<span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 认为属性相同即为同一对象</span>
    <span class="token comment">//判断传递参数是否跟自身比较</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token comment">//判断传递的参数obj是否是null,直接返回false，提高效率</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token comment">//判断是否是Person类型在转换，防止类型转换异常classCastException</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> b <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">==</span> p<span class="token punctuation">.</span>age<span class="token punctuation">;</span>
        <span class="token keyword">return</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对象克隆" tabindex="-1"><a class="header-anchor" href="#对象克隆"><span>对象克隆</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>对象浅克隆的实现：
	<span class="token number">1</span>. 重写 Object 的 clone 方法
	<span class="token number">2</span>. 让 javabean 类实现 Cloneable 接口
	<span class="token number">3</span>. 创建原对象并调用 clone<span class="token punctuation">(</span><span class="token punctuation">)</span>

需要实现Cloneable的缘由：
	如果一个接口里面没有抽象方法，表示当前接口是一个标记性接口。
	Cloneable 表示一旦实现，则当前类的对象就可以被克隆；如果没有实现，当前类的对象就不能克隆


对象深克隆实现：
<span class="token number">0</span>. 通过深度遍历数组/对象来重新赋值
<span class="token number">1</span>. 三方工具 Gson：gson.fromJson<span class="token punctuation">(</span>gson.toJson<span class="token punctuation">(</span>u1<span class="token punctuation">)</span>, User.class<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">2</span>. 序列化/反序列化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringJoiner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> hobby<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> hobby<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> username<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>hobby <span class="token operator">=</span> hobby<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;User{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;username=&#39;&quot;</span> <span class="token operator">+</span> username <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, hobby=&quot;</span> <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>hobby<span class="token punctuation">)</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span> <span class="token operator">+</span> <span class="token function">arrToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">arrToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringJoiner</span> sj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringJoiner</span><span class="token punctuation">(</span><span class="token string">&quot;，&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;[&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hobby<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sj<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>hobby<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用父类的clone方法</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;打篮球&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;跳舞&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">User</span> u1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 克隆对象</span>
        <span class="token class-name">User</span> u2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span> u1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>u1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// User{username=&#39;小明&#39;, hobby=[打篮球, 跳舞]}[打篮球，跳舞]</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>u2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// User{username=&#39;小明&#39;, hobby=[打篮球, 跳舞]}[打篮球，跳舞]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类"><span>抽象类</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Java 中抽象类和抽象方法使用 abstract 修饰
		- 抽象方法没有方法体
		- 抽象方法必须在抽象类中
		- 抽象方法必须在子类中被实现，除非子类是抽象类
		- 抽象类中可以又非抽象方法


<span class="token number">1</span>. 抽象类不能创建对象，如果创建，则会编译无法通过而报错
  	假设创建了抽象类的对象，调用抽象的方法，而抽象方法没有具体的方法体，没有意义
<span class="token number">2</span>. 抽象类中，可以自定义构造方法，提供子类创建对象时初始化父类成员使用。
   	子类的构造方法中，有默认的super<span class="token punctuation">(</span><span class="token punctuation">)</span>，需要访问父类构造方法
<span class="token number">3</span>. 抽象类中，不一定包含抽象方法
    未包含抽象方法的抽象类，目的是不想让调用者创建该类对象，通常用于某些特殊的类结构设计
<span class="token number">4</span>. 抽象类的子类，必须重写抽象父类中所有的抽象方法，除非子类也是抽象类。
    假设不重写所有抽象方法，则类中可能包含抽象方法。那么创建对象后，调用抽象的方法，没有意义


如何使用抽象类和抽象方法：
<span class="token number">1</span>、不能直接创建new抽象类对象
<span class="token number">2</span>、必须用一个子类来继承抽象父类
<span class="token number">3</span>、子类必须覆盖重写抽象父类当中所有的抽象方法
	覆盖重写的实现--<span class="token operator">&gt;</span>子类去掉抽象方法的abstract关键字，然后补上大括号
<span class="token number">4</span>、创建子类对象进行使用


public abstract class Animal <span class="token punctuation">{</span>
    public abstract void eat<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	//抽象方法，具备不确定性
    public void <span class="token function-name function">normalMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>	//普通成员方法
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Fu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;抽象父类的构造方法执行！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Zi</span> <span class="token keyword">extends</span> <span class="token class-name">Fu</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;抽象子类的构造方法执行！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;吃饭饭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoMain</span><span class="token punctuation">{</span>
    piblic <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Zi</span> zi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Zi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        zi<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特征-多态" tabindex="-1"><a class="header-anchor" href="#特征-多态"><span>特征-多态</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>extends继承或者implements实现，是多态性的前提。

多态的定义：同一种操作，由于条件不同，产生的结果也不同。
多态的代码理解：同一个引用类型，使用不同的实例而执行不同操作，如使用父类变量指向子类对象。

父类和子类的互转：
	<span class="token number">1</span>. 父类转子类（向下转型）
			父类声明 father <span class="token operator">=</span> new 子类<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			子类声明 son <span class="token operator">=</span> <span class="token punctuation">(</span>子类声明<span class="token punctuation">)</span>father<span class="token punctuation">;</span>
	<span class="token number">2</span>. 子类转父类（自动转换）
	<span class="token number">3</span>. instanceof类型检测：<span class="token variable"><span class="token variable">\`</span>对象 instanceof 类<span class="token variable">\`</span></span>

父类作为参数实现多态：
父类作为返回值实现多态：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父类引用子类对象</p><p><img src="`+v+'" alt="image-20201213173832116"></p><p>向上转型与向上转型</p><p><img src="'+m+'" alt="image-20201213180123190"></p><p>检测向下转型时是否转换正确：instanceof()来判断</p><p><img src="'+b+'" alt="image-20201213181618683"></p><h4 id="接口多态案例-笔记本电脑" tabindex="-1"><a class="header-anchor" href="#接口多态案例-笔记本电脑"><span>接口多态案例-笔记本电脑</span></a></h4><p><img src="'+g+`" alt="image-20201213182248786"></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">USB</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//打开设备</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//关闭设备</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">powerOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;笔记本开机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">powerOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;笔记本关机&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//使用USB设备</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">useDevice</span><span class="token punctuation">(</span><span class="token class-name">USB</span> usb<span class="token punctuation">)</span><span class="token punctuation">{</span>
        usb<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打开设备</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>usb <span class="token keyword">instanceof</span> <span class="token class-name">Mouse</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Mouse</span> mouse <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Mouse</span><span class="token punctuation">)</span> usb<span class="token punctuation">;</span>  <span class="token comment">//向下转型</span>
            mouse<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>usb <span class="token keyword">instanceof</span> <span class="token class-name">Keyboard</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Keyboard</span> keyboard <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Keyboard</span><span class="token punctuation">)</span> usb<span class="token punctuation">;</span> <span class="token comment">//向下转型</span>
            keyboard<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        usb<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//关闭设备</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//鼠标是一个USB设备</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Mouse</span> <span class="token keyword">implements</span> <span class="token class-name">USB</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;打开鼠标&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;关闭鼠标&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;鼠标点击&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//键盘是一个USB设备</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Keyboard</span> <span class="token keyword">implements</span> <span class="token class-name">USB</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;打开键盘&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;关闭键盘&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;鼠标输入&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoMain</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建一个笔记本电脑</span>
        <span class="token class-name">Computer</span> computer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        computer<span class="token punctuation">.</span><span class="token function">powerOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//准备一个鼠标</span>
        <span class="token class-name">USB</span> usbMouse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Mouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        computer<span class="token punctuation">.</span><span class="token function">useDevice</span><span class="token punctuation">(</span>usbMouse<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//准备一个键盘</span>
        <span class="token class-name">USB</span> usbKeyboard <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Keyboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        computer<span class="token punctuation">.</span><span class="token function">useDevice</span><span class="token punctuation">(</span>usbKeyboard<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口-interface" tabindex="-1"><a class="header-anchor" href="#接口-interface"><span>接口 interface</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 接口的常量
		格式: <span class="token punctuation">[</span>public<span class="token punctuation">]</span> <span class="token punctuation">[</span>static<span class="token punctuation">]</span> <span class="token punctuation">[</span>final<span class="token punctuation">]</span> 数据类型 常量名称 <span class="token operator">=</span>数据值<span class="token punctuation">;</span> // 不可改变,可省略public static final
		常量必须进行赋值，而且一旦赋值不能改变，常量名称完全大写，用下划线进行分隔。
<span class="token number">2</span>. 接口的抽象方法
		格式: <span class="token punctuation">[</span>public<span class="token punctuation">]</span> <span class="token punctuation">[</span>abstract<span class="token punctuation">]</span> 返回值类型 方法名称<span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span><span class="token punctuation">;</span>
		抽象方法的两个关键字public abstract可以省略
		实现类必须覆盖重写接口所有的抽象方法，除非实现类是抽象类
<span class="token number">3</span>. 接口的默认方法
		格式: <span class="token punctuation">[</span>public<span class="token punctuation">]</span> default 返回值类型 方法名称<span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span> <span class="token punctuation">{</span> 方法体 <span class="token punctuation">}</span>
		默认方法也可以被覆盖重写
		作用：可以实现接口拼接
<span class="token number">4</span>. 接口的静态方法
		格式: <span class="token punctuation">[</span>public<span class="token punctuation">]</span> static 返回值类型 方法名称<span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span> <span class="token punctuation">{</span> 方法体 <span class="token punctuation">}</span>
		应该通过接口名称进行调用，不能通过实现类对象调用接口静态方法
		不能通过接口实现类的对象来调用接口的静态方法（可通过 接口名称.静态方法名<span class="token punctuation">(</span>参数<span class="token punctuation">)</span> 来调用）
<span class="token number">5</span>. 接口的私有化
		普通私有方法: private 返回值类型 方法名称<span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span> <span class="token punctuation">{</span> 方法体 <span class="token punctuation">}</span>
		静态私有方法: private static 返回值类型 方法名称<span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span> <span class="token punctuation">{</span> 方法体 <span class="token punctuation">}</span>
		private的方法只有接口自己才能调用，不能被实现类或别人使用。


接口不能直接使用，必须用一个“实现类”来实现接口
接口的实现类必须覆盖重写<span class="token punctuation">(</span>实现<span class="token punctuation">)</span>接口中所有的抽象方法，除非实现类是抽象类
public class 实现类名称 implements 接口名称<span class="token punctuation">{</span><span class="token punctuation">}</span>



<span class="token comment">#### 接口和抽象类的区别</span>
接口：
		- 接口不可以被实例化
		- 实现类必须实现接口的所有方法
		- 一个类可以实现多个接口
		- 接口中变量都是静态变量
		- 接口应用场景是 has-a
抽象类：
		- 抽象类不可以被实例化
		- 抽象类中可以有普通方法
		- 抽象类可以有构造方法
		- 抽象类中可以有实例成员变量
		- 符合 is-a 关系的使用抽象类
一个类只能继承一个直接的父类，但可以实现多个接口。
接口的抽象程度比抽象类高，因为接口中所有方法都是抽象类。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MyIntercaceDafault</span> <span class="token punctuation">{</span>
    <span class="token comment">//抽象方法</span>
    <span class="token keyword">void</span> <span class="token function">methodsAbs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//可省略public abstract</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyInterfaceDafaultA</span> <span class="token keyword">implements</span> <span class="token class-name">MyIntercaceDafault</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodsAbs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;实现了抽象方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内部类" tabindex="-1"><a class="header-anchor" href="#内部类"><span>内部类</span></a></h3><p>成员内部类与局部内部类（包含匿名内部类）</p><h4 id="成员内部类" tabindex="-1"><a class="header-anchor" href="#成员内部类"><span>成员内部类</span></a></h4><p>内用外，随意访问；外用内，需要内部类对象。</p><p>直接调用：外部类名.内部类名 对象名 = new 外部类名().new 内部类名();</p><p>间接调用：在外部类方法中，使用内部类，然后main中只是调用外部类的方法</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Body</span> <span class="token punctuation">{</span> <span class="token comment">//外部类</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="局部内部类" tabindex="-1"><a class="header-anchor" href="#局部内部类"><span>局部内部类</span></a></h4><p><strong>局部内部类</strong>：定义在一个方法内部的类（只有当前方法能使用它）。</p><p>局部内部类如果希望访问所在方法的局部变量，那么变量必须是【有效的final关键字的】</p><p>从java8+开始，只要变量事实不变，那么final关键字可以省略</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Outer</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodOuter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">class</span> <span class="token class-name">Inner</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodInner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
		<span class="token class-name">Inner</span> inner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//只能在当前方法调用</span>
    	inner<span class="token punctuation">.</span><span class="token function">methodInner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="匿名内部类" tabindex="-1"><a class="header-anchor" href="#匿名内部类"><span>匿名内部类</span></a></h4><p>如果接口的实现类（或父类的子类），只使用唯一一次。那么这种情况下可以省略该类的定义，而改为使用【匿名内部类】</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
接口名 对象名 = new 接口名(){//覆盖重写所有抽象方法};
在{}里面的才是匿名内部类的内容，且{}后需要加;结束
在创建对象时，只能使用一次

@Override
public void method(){
	System.out.println(&quot;匿名内部类实现的方法！&quot;);
}
*/</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MyInterface</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//抽象方法</span>
<span class="token punctuation">}</span>

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
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    obj<span class="token punctuation">.</span><span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    obj<span class="token punctuation">.</span><span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反射" tabindex="-1"><a class="header-anchor" href="#反射"><span>反射</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>定义：在程序运行时<span class="token punctuation">(</span>非编译时<span class="token punctuation">)</span>获取类的信息、对象信息，并且可动态操作类的构造器、成员变量、成员方法，还可打破类的封装访问私有成员。
本质：Java 类加载完成后，会在 JVM 堆内存中生成对应的 Class 类对象<span class="token punctuation">(</span>属于 java.lang.Class 的实例<span class="token punctuation">)</span>，这个 Class 对象包含该类的所有完整信息<span class="token punctuation">(</span>类名、父类、接口、构造器、字段、方法等<span class="token punctuation">)</span>。反射的本质是通过操作这个 Class 对象，间接获取和操作目标类/对象的成员。

获取 Class 对象的方式：
	- <span class="token variable"><span class="token variable">\`</span>类名.class<span class="token variable">\`</span></span>：编译时已知目标类
	- <span class="token variable"><span class="token variable">\`</span>对象.getClass<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>：已拥有目标类对象
	- <span class="token variable"><span class="token variable">\`</span>Class.forName<span class="token punctuation">(</span><span class="token string">&quot;全类名&quot;</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>：与逆行时动态获取


适用场景
	- 框架开发（Spring、MyBatis等）：需要动态加载、实例化类，实现配置化和解耦
	- 工具类开发（BeanUtils、Json 序列化）：需要动态操作对象的字段和方法
	- 动态代理、插件化开发：需要在运行时动态扩展类的功能

不适用场景
	- 普通业务开发：优先直接调用类的成员，避免反射带来的性能开销和代码复杂度
	- 高并发、高性能要求（如秒杀系统、高频交易系统）：反射的性能开销可能成为系统瓶颈
	- 对安全性要求极高（如金融系统）：反射打破封装可能带来恶意访问风险


API
	T newInstance<span class="token punctuation">(</span>Object<span class="token punctuation">..</span>. initargs<span class="token punctuation">)</span>：创建类的实例，传入构造器所需参数
	void setAccessible<span class="token punctuation">(</span>boolean flag<span class="token punctuation">)</span>：设置是否跳过访问权限检查，true表示跳过<span class="token punctuation">(</span>可访问私有构造器<span class="token punctuation">)</span>
	Object get<span class="token punctuation">(</span>Object obj<span class="token punctuation">)</span>：获取指定对象的该字段值
	void set<span class="token punctuation">(</span>Object obj, Object value<span class="token punctuation">)</span>：设置指定对象的该字段值
	Object invoke<span class="token punctuation">(</span>Object obj, Object<span class="token punctuation">..</span>. args<span class="token punctuation">)</span>：调用指定对象的该方法，传入方法所需参数，返回方法的返回
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 方式 1：类名.class（编译时已知，最优）</span>
<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> clazz1 <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方式 1：&quot;</span> <span class="token operator">+</span> clazz1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方式 2：对象.getClass()（已拥有实例对象）</span>
<span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz2 <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方式 2：&quot;</span> <span class="token operator">+</span> clazz2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方式 3：Class.forName()（运行时动态获取，需全限定名）</span>
<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz3 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.example.reflect.User&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方式 3：&quot;</span> <span class="token operator">+</span> clazz3<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 验证 3 种方式获取的 Class 对象是否为同一个（JVM 唯一）</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;clazz1 == clazz2：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>clazz1 <span class="token operator">==</span> clazz2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;clazz1 == clazz3：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>clazz1 <span class="token operator">==</span> clazz3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 1. 获取 Class 对象并创建实例</span>
<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> userClass <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
<span class="token comment">// User user = userClass.getConstructor().newInstance();</span>
<span class="token class-name">User</span> user <span class="token operator">=</span> userClass<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token string">&quot;钱七&quot;</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 通过反射操作成员变量 */</span>
<span class="token comment">// 场景 1：操作公共字段（若有），此处以私有字段 name 为例</span>
<span class="token class-name">Field</span> nameField <span class="token operator">=</span> userClass<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
nameField<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 跳过访问检查，访问私有字段</span>

<span class="token comment">// 设置字段值</span>
nameField<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token string">&quot;赵六&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;设置私有字段 name 后：&quot;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取字段值</span>
<span class="token class-name">Object</span> nameValue <span class="token operator">=</span> nameField<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;获取私有字段 name 值：&quot;</span> <span class="token operator">+</span> nameValue<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/* 通过反射操作成员方法 */</span>
<span class="token comment">// 场景 1：调用公共方法 getName()（无参，有返回值）</span>
<span class="token class-name">Method</span> getNameMethod <span class="token operator">=</span> userClass<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">&quot;getName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Object</span> nameResult <span class="token operator">=</span> getNameMethod<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 无参方法，传入空数组或不传入参数</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;调用公共方法 getName() 返回值：&quot;</span> <span class="token operator">+</span> nameResult<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 场景 2：调用公共方法 setName()（有参，无返回值）</span>
<span class="token class-name">Method</span> setNameMethod <span class="token operator">=</span> userClass<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">&quot;setName&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
setNameMethod<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token string">&quot;孙八&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 传入方法所需参数</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;调用 setName() 后，getName() 返回值：&quot;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 场景 3：调用私有方法 sayHello()（无参，无返回值）</span>
<span class="token class-name">Method</span> sayHelloMethod <span class="token operator">=</span> userClass<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">&quot;sayHello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sayHelloMethod<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 跳过访问检查，调用私有方法</span>
sayHelloMethod<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态代理" tabindex="-1"><a class="header-anchor" href="#动态代理"><span>动态代理</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Proxy</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 测试类：生成明星代理并调用
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProxyDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. 创建目标类实例（大明星：周杰伦）</span>
        <span class="token class-name">BigStar</span> bigStar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigStar</span><span class="token punctuation">(</span><span class="token string">&quot;周杰伦&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2. 生成动态代理对象（经纪人）</span>
        <span class="token class-name">Star</span> starProxy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Star</span><span class="token punctuation">)</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span>
                <span class="token class-name">ProxyDemo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 参数1：类加载器（加载代理类字节码）</span>
                <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">Star</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">,</span>          <span class="token comment">// 参数2：代理类要实现的接口（和目标类一致）</span>
                <span class="token keyword">new</span> <span class="token class-name">InvocationHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>         <span class="token comment">// 参数3：方法调用处理器（增强逻辑）</span>
                    <span class="token annotation punctuation">@Override</span>
                    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 🔍 增强逻辑：根据方法名添加前置操作</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;sing&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;准备话筒，收钱 200 万！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;dance&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;准备场地，收钱 150 万！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>

                        <span class="token comment">// 🎯 核心：调用目标类的真实方法（明星唱歌/跳舞）</span>
                        <span class="token class-name">Object</span> result <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>bigStar<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

                        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 3. 调用代理对象的方法（触发增强逻辑 + 目标方法）</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;===== 调用唱歌方法 =====&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> singResult <span class="token operator">=</span> starProxy<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token string">&quot;晴天&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>singResult<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n===== 调用跳舞方法 =====&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        starProxy<span class="token punctuation">.</span><span class="token function">dance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * 目标接口：明星的演出服务规范
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Star</span> <span class="token punctuation">{</span>
    <span class="token comment">// 唱歌</span>
    <span class="token class-name">String</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token class-name">String</span> songName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 跳舞</span>
    <span class="token keyword">void</span> <span class="token function">dance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 目标类：大明星（真正执行业务逻辑的类）
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BigStar</span> <span class="token keyword">implements</span> <span class="token class-name">Star</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">BigStar</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token class-name">String</span> songName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot; 正在演唱：《&quot;</span> <span class="token operator">+</span> songName <span class="token operator">+</span> <span class="token string">&quot;》&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;演唱结束，掌声雷动！&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot; 正在跳劲爆舞蹈！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注解" tabindex="-1"><a class="header-anchor" href="#注解"><span>注解</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>注解<span class="token punctuation">(</span>Annotation<span class="token punctuation">)</span> 是一种特殊的标记接口，本身不直接执行任何逻辑，仅用于为程序元素<span class="token punctuation">(</span>类、方法、字段、参数等<span class="token punctuation">)</span>附加额外的元数据<span class="token punctuation">(</span>描述数据的数据<span class="token punctuation">)</span>作传递，需通过注解解析器<span class="token punctuation">(</span>编译器、JVM或自定义代码<span class="token punctuation">)</span>发挥作用。
本质：所有注解最终会被编译为继承 java.lang.annotation.Annotation 接口的特殊接口，其成员方法对应注解的属性


作用：
	- 解耦：将配置信息与业务代码分离，无需手动编写繁琐配置（如 Spring 注解替代 XML 配置）
	- 自动化：通过解析注解实现自动化处理（如 MyBatis 注解自动生成 SQL、JUnit 注解自动执行测试方法）
	- 编译检查：提供编译期语法校验，提前规避错误（如 @Override 校验方法重写的正确性）
	- 简化代码：减少重复模板代码


JDK 中常见注解：
	@Override：方法重写
	@Deprecated：修饰的方法已过时
	@SuppressWarnings<span class="token punctuation">(</span><span class="token string">&quot;all&quot;</span><span class="token punctuation">)</span>：压制警告

元注解：
	@Target：指定注解可修饰的类型，默认可修饰所有程序元素
			TYPE、METHOD、FIELD、PARAMETER、CONSTRUCTOR、LOCAL_VARIABLE、ANNOTATION_TYPE
	@Retention：定义注解的保留周期
			- SOURCE：源码注解，仅存在源码中，编译后被丢弃<span class="token punctuation">(</span>不进入字节码<span class="token punctuation">)</span>
			- CLASS：编译时注解，保留到编译后的字节码文件中，JVM加载类时丢弃
			- RUNTIME：运行时注解，保留到字节码文件，且JVM加载类后仍存在于内存中
	@Document：指定注解是否会被 javadoc 工具提取到API文档
	@Inherited：指定注解是否具有继承性


自定义注解格式：
    public @interface 注解名称 <span class="token punctuation">{</span>
      public 属性类型 属性名<span class="token punctuation">(</span><span class="token punctuation">)</span> default 默认值<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    public @interface Anno <span class="token punctuation">{</span>
      String show<span class="token punctuation">(</span><span class="token punctuation">)</span> default <span class="token string">&quot;show...&quot;</span><span class="token punctuation">;</span>
      String show2<span class="token punctuation">(</span><span class="token punctuation">)</span> default <span class="token string">&quot;B&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

自定义注解 @MyAnnotation 反编译后等价于
    public interface MyAnnotation extends java.lang.annotation.Annotation <span class="token punctuation">{</span>
        String value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        int age<span class="token punctuation">(</span><span class="token punctuation">)</span> default <span class="token number">18</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 自定义标记注解：标记核心业务类
 */</span>
<span class="token comment">// 元注解1：仅可修饰类/接口/枚举</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token comment">// 元注解2：保留到运行时，可通过反射解析</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token comment">// 元注解3：生成 javadoc 文档时包含该注解</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyMarker</span> <span class="token punctuation">{</span>
    <span class="token comment">// 无任何属性，标记注解</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 自定义数据注解：记录用户操作日志
 */</span>
<span class="token comment">// 元注解1：仅可修饰方法</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">)</span>
<span class="token comment">// 元注解2：保留到运行时，可通过反射解析</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token comment">// 元注解3：生成 javadoc 文档时包含该注解</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">UserLog</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注解属性1：操作模块（无默认值，使用时必须赋值）</span>
    <span class="token class-name">String</span> <span class="token keyword">module</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 注解属性2：操作描述（有默认值，使用时可省略）</span>
    <span class="token class-name">String</span> <span class="token function">desc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;无详细描述&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">// 注解属性3：操作类型（枚举类型，有默认值）</span>
    <span class="token class-name">OperationType</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">OperationType</span><span class="token punctuation">.</span><span class="token constant">QUERY</span><span class="token punctuation">;</span>

    <span class="token comment">// 内部枚举：操作类型</span>
    <span class="token keyword">enum</span> <span class="token class-name">OperationType</span> <span class="token punctuation">{</span>
        <span class="token constant">QUERY</span><span class="token punctuation">,</span> <span class="token comment">// 查询</span>
        <span class="token constant">ADD</span><span class="token punctuation">,</span>   <span class="token comment">// 新增</span>
        <span class="token constant">UPDATE</span><span class="token punctuation">,</span> <span class="token comment">// 修改</span>
        <span class="token constant">DELETE</span>  <span class="token comment">// 删除</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 注解使用示例：用户服务类
 */</span>
<span class="token comment">// 使用标记注解 @MyMarker，标记该类为核心业务类</span>
<span class="token annotation punctuation">@MyMarker</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用数据注解 @UserLog，指定模块和描述，类型默认 QUERY</span>
    <span class="token annotation punctuation">@UserLog</span><span class="token punctuation">(</span><span class="token keyword">module</span> <span class="token operator">=</span> <span class="token string">&quot;用户管理&quot;</span><span class="token punctuation">,</span> desc <span class="token operator">=</span> <span class="token string">&quot;根据用户ID查询用户信息&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryUserById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;用户ID：&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;，用户名：张三&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 使用数据注解 @UserLog，指定所有属性（覆盖默认值）</span>
    <span class="token annotation punctuation">@UserLog</span><span class="token punctuation">(</span><span class="token keyword">module</span> <span class="token operator">=</span> <span class="token string">&quot;用户管理&quot;</span><span class="token punctuation">,</span> desc <span class="token operator">=</span> <span class="token string">&quot;新增用户信息&quot;</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token class-name">UserLog<span class="token punctuation">.</span>OperationType</span><span class="token punctuation">.</span><span class="token constant">ADD</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token class-name">String</span> userName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;新增用户成功：&quot;</span> <span class="token operator">+</span> userName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 注解解析器：反射解析运行时注解
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnnotationParser</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. 获取目标类的 Class 对象</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserService</span><span class="token punctuation">&gt;</span></span> userServiceClass <span class="token operator">=</span> <span class="token class-name">UserService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>

        <span class="token comment">// 2. 解析类上的 @MyMarker 注解</span>
        <span class="token function">parseClassAnnotation</span><span class="token punctuation">(</span>userServiceClass<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 3. 解析方法上的 @UserLog 注解</span>
        <span class="token function">parseMethodAnnotation</span><span class="token punctuation">(</span>userServiceClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 解析类上的注解
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">parseClassAnnotation</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserService</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;===== 解析类上的注解 =====&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 判断类是否被 @MyMarker 注解修饰</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>clazz<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">MyMarker</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 获取 @MyMarker 注解实例</span>
            <span class="token class-name">MyMarker</span> myMarker <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">MyMarker</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;该类是核心业务类，注解信息：&quot;</span> <span class="token operator">+</span> myMarker<span class="token punctuation">.</span><span class="token function">annotationType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;该类不是核心业务类&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 解析方法上的注解
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">parseMethodAnnotation</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserService</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n===== 解析方法上的注解 =====&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取类中所有的方法</span>
        <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> method <span class="token operator">:</span> methods<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 判断方法是否被 @UserLog 注解修饰</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">UserLog</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 获取 @UserLog 注解实例</span>
                <span class="token class-name">UserLog</span> userLog <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">UserLog</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// 提取注解属性信息</span>
                <span class="token class-name">String</span> <span class="token keyword">module</span> <span class="token operator">=</span> userLog<span class="token punctuation">.</span><span class="token keyword">module</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">String</span> desc <span class="token operator">=</span> userLog<span class="token punctuation">.</span><span class="token function">desc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">UserLog<span class="token punctuation">.</span>OperationType</span> type <span class="token operator">=</span> userLog<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// 模拟日志记录逻辑（注解的核心作用：传递元数据，驱动业务逻辑）</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;  操作模块：&quot;</span> <span class="token operator">+</span> <span class="token keyword">module</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;  操作描述：&quot;</span> <span class="token operator">+</span> desc<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;  操作类型：&quot;</span> <span class="token operator">+</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;  执行方法：&quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集合" tabindex="-1"><a class="header-anchor" href="#集合"><span>集合</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>数据结构
	- 栈：先进后出
	- 队列：先进先出
	- 数组：内存连续区域，查询快，增删慢
	- 链表：元素是游离的，查询慢，首尾操作极快


集合与数组区别
  - 数组长度是固定的，集合的长度是可变的；
  - 数组中存储的是同一类型的元素，可以存储基本数据类型值。集合存储的是对象，而且对象的类型可以不一致。
  - 在开发中一般当对象多时，使用集合存储。


- ArrayList 实现长度可变的数组，在内存中分配连续的空间。遍历元素和随机访问元素的效率比较高。
- LinkedList 采用链表存储方式。插入、删除元素时效率比较高。


集合按照存储结构分两大类：
  - 单列集合 java.util.Collection
  - 双列集合 java.util.Map
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单列集合-collection" tabindex="-1"><a class="header-anchor" href="#单列集合-collection"><span>单列集合 Collection</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Collection：接口存储一组不唯一、无序的对象
    <span class="token operator">|</span>—— List（ArrayList、LinkedList）：接口存储一组不唯一、有序、有索引的对象
    <span class="token operator">|</span>—— Set（HashSet）：接口存储一组唯一、无序、无索引的对象
    		<span class="token operator">|</span>—— HashSet：无序、唯一、无索引
    		<span class="token operator">|</span>—— LinkedHashSet：有序、不重复、无索引
    		<span class="token operator">|</span>—— TreeSet：可排序、不重复、无索引
    		因为无索引，所以不能使用普通 <span class="token keyword">for</span> 循环遍历，也不能通过索引来获取元素


常用方法：
  添加元素：boolean add<span class="token punctuation">(</span>E e<span class="token punctuation">)</span>
  删除数据：boolean remove<span class="token punctuation">(</span>E e<span class="token punctuation">)</span>
  删除指定位置的元素：E remove<span class="token punctuation">(</span>int index<span class="token punctuation">)</span>
  获取固定位置的元素：E get<span class="token punctuation">(</span>int,index<span class="token punctuation">)</span>
  判断是否存在指定元素：boolean contains<span class="token punctuation">(</span>E e<span class="token punctuation">)</span>
  获取集合的长度：int size<span class="token punctuation">(</span><span class="token punctuation">)</span>
  清空集合所有的元素：void clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
  判断集合是否为空：boolean isEmpty<span class="token punctuation">(</span><span class="token punctuation">)</span>

  批量添加元素：boolean addAll<span class="token punctuation">(</span>Collection<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> c, T<span class="token punctuation">..</span>. elements<span class="token punctuation">)</span>
  打乱List集合顺序：void shuffle<span class="token punctuation">(</span>List<span class="token operator">&lt;</span>?<span class="token operator">&gt;</span> list<span class="token punctuation">)</span>
  填充集合：int fill<span class="token punctuation">(</span>List<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> list, T obj<span class="token punctuation">)</span>
  获取最大/最小值：void max/min<span class="token punctuation">(</span>Collection<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> coll<span class="token punctuation">)</span>
  交换集合中指定位置的元素：void swap<span class="token punctuation">(</span>List<span class="token operator">&lt;</span>?<span class="token operator">&gt;</span> list, int i, int j<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+y+`" alt="image-20210324124037323"></p><h4 id="有序数组-arraylist" tabindex="-1"><a class="header-anchor" href="#有序数组-arraylist"><span>有序数组 ArrayList</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>数组 Array 的长度不可变，但 ArrayList 集合的长度是可变的<span class="token punctuation">]</span>
ArrayList打印出来的是内容，不是地址；如果内容为空，则输出<span class="token punctuation">[</span><span class="token punctuation">]</span>


常用方法：
  插入数据：boolean add<span class="token punctuation">(</span>int index, E e<span class="token punctuation">)</span>
  将集合转成一个数组：E<span class="token punctuation">[</span><span class="token punctuation">]</span> toArray<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">#### ArrayList底层源码</span>
<span class="token number">1</span>. 利用空参创建的集合，在底层创建一个默认长度为0的数组
<span class="token number">2</span>. 添加第一个元素时，底层会创建一个新长度为0的数组
<span class="token number">3</span>. 存满时，会扩容1.5倍
<span class="token number">4</span>. 如果一次添加多个元素，1.5倍还放不下，则新创建数组的长度以实际为准
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+w+`" alt="image-20260101140357083"></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">//从JDK1.7+开始，右侧&lt;&gt;内部可以不写内容，但&lt;&gt;本身需要写</span>
<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//向集合添加数据</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Kobe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;June&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">boolean</span> result <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">boolean</span> result2 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//[Kobe,June]</span>

<span class="token comment">// 将list的数据全部添加到新定义的list中</span>
<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> newList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
newList<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>newList<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//[Kobe,June]</span>

<span class="token comment">// 清除数组</span>
list<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// []</span>


<span class="token comment">// 生成6个1~33的随机整数，添加到集合，并遍历集合</span>
<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Random</span> r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    list2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="链表-linkedlist" tabindex="-1"><a class="header-anchor" href="#链表-linkedlist"><span>链表 LinkedList</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>LinkedList 底层结构式双链表，查询慢，增删快，如果操作首尾元素速度更快。

LinkedList 提供对头部和尾部元素进行添加和删除操作的方法。
	添加首部元素：void addFirst<span class="token punctuation">(</span>E e<span class="token punctuation">)</span>
	添加末尾元素：void addLast<span class="token punctuation">(</span>E e<span class="token punctuation">)</span>
	获取头部元素：E Object.getFirst<span class="token punctuation">(</span><span class="token punctuation">)</span>
	获取末尾元素：E Object.getLast<span class="token punctuation">(</span><span class="token punctuation">)</span>
	删除并返回第一个元素：E removeFirst<span class="token punctuation">(</span><span class="token punctuation">)</span>
	删除并返回最后一个元素：E removeLast<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+`" alt="image-20260101141840470"></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">LinkedList</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> price<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Test</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Book</span> b1 <span class="token operator">=</span> test<span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">&quot;我的阿泰勒&quot;</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Book</span> b2 <span class="token operator">=</span> test<span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">&quot;平凡的认识&quot;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Book</span> b3 <span class="token operator">=</span> test<span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">&quot;你是我的四月天&quot;</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>b1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">addFirst</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span>b3<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Book</span> first <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">getFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Book{name=&#39;平凡的认识&#39;, price=50}</span>

        <span class="token class-name">Book</span> last <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">getLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>last<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Book{name=&#39;你是我的四月天&#39;, price=70}</span>

        list<span class="token punctuation">.</span><span class="token function">removeFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">removeLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Book</span> b<span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Book{name=&#39;我的阿泰勒&#39;, price=60}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="无序去重-hashset" tabindex="-1"><a class="header-anchor" href="#无序去重-hashset"><span>无序去重 HashSet</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Set 接口存储一组唯一、无序、无索引的对象。
Set 存放对象的引用。

遍历：
	- 迭代器遍历
	- 增强 <span class="token keyword">for</span> 循环
	- lambda 表达式


<span class="token comment">#### HashSet 底层原理：采取哈希表存储数据</span>
  哈希表是一种增删改查数据性能都较好的结构
      - JDK8前：数组 + 链表
      - JDK8后：数组 + 链表 + 红黑树
  哈希值：
      - 根据 hashCode 方法算出来的 int 类型的整数
      - 该方法定义在 Object 类中，所有对象都可调用，默认使用地址值进行计算
      - 一般情况下，会重写 hashCode 方法，利用对象内部的属性值计算哈希值
  对象的哈希值特点：
  		- 如果没有重写 hashCode 方法，不同对象计算出的哈希值不同
  		- 如果重写 hashCode 方法，不同对象只要属性值相同，计算的哈希值也一样
  		- 小部分情况下，不同属性值或不同地址值计算出的哈希值可能一样（哈希碰撞）


<span class="token comment">#### HashSet 添加元素底层原理：</span>
	<span class="token number">1</span>. 创建一个默认长度16，默认加载因子为 <span class="token number">0.75</span> 的数组，数组名为 table
			- 底层依赖 HashMap 实现，HashMap 初始时 table 数组为 null<span class="token punctuation">(</span>懒加载<span class="token punctuation">)</span>，首次添加元素时才会真正创建长度 <span class="token number">16</span> 的数组
			- 扩容触发条件：元素数量<span class="token punctuation">(</span>size<span class="token punctuation">)</span> ≥ 容量x加载因子，扩容后容量为原来的2倍<span class="token punctuation">(</span>保证2的整数幂<span class="token punctuation">)</span>
						如：16×0.75<span class="token operator">=</span><span class="token number">12</span>，当 元素数≥12 时触发扩容，扩容后容量为 <span class="token number">32</span>（2倍）
			- 加载因子0.75是内存与效率的平衡：如果0.5则扩容浪费内存，若结束扩容，效率低；1 则冲突率高、效率低；所以采取0.75，若存的长度等于 <span class="token number">0.75</span>就扩容
	<span class="token number">2</span>. 根据元素的哈希值跟数组的长度计算出应存入的数组索引位置
			- 调用hashCode方法获取原始哈希值；
			- 计算索引：<span class="token variable"><span class="token variable">\`</span>int index <span class="token operator">=</span> <span class="token punctuation">(</span>数组长度 - <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> 哈希值<span class="token punctuation">;</span><span class="token variable">\`</span></span>
			- 索引位置计算的位运算替代模运算的前提：数组长度必须为2的整数幂，否则会导致索引的范围可能不完全覆盖整个哈希表；并且在数组扩容时，是扩容为原来的2倍，以确保数组长度一定满足2的整数幂
	<span class="token number">3</span>. 判断当前位置是否为 null，如果是 null 直接存入
	<span class="token number">4</span>. 如果位置不为 null，表示有元素<span class="token punctuation">(</span>哈希冲突<span class="token punctuation">)</span>，则调用 equals 方法比较属性值
			- 先比较哈希值：若当前元素哈希值 ≠ 已有节点哈希值  ➡ 哈希冲突但元素不同；
			- 若哈希值相同，调用 equals 方法比较元素属性值。
	<span class="token number">5</span>. 如果比较属性值一致<span class="token punctuation">(</span>元素重复<span class="token punctuation">)</span>，则不存；如果不一样，则存入数组，形成链表
			- JDK8前：新元素存入数组<span class="token punctuation">(</span>头插法<span class="token punctuation">)</span>，老元素挂在新元素 next 上，形成链表；
			- JDK8后：新元素直接挂在老元素下面<span class="token punctuation">(</span>链表尾部➡尾插法<span class="token punctuation">)</span>；
			- 注意：在JDK8+，当 链表长度≥8 且 数组容量≥64 时，链表自动转为红黑树；若数组容量＜64，先扩容再继续链表存储


<span class="token comment">#### 问题</span>
<span class="token number">1</span>. HashSet 为什么存和取的顺序不一样？
		存数据是根据 元素的哈希值和数组长度 来计算出存储的位置进行存入的，以及其中可能还存在链表
		取数据是根据数组的下标索引进行按顺序取的
		➡ 无序是因为 <span class="token builtin class-name">hash</span> 值导致
<span class="token number">2</span>. HashSet 为什么没有索引？
		因为多个元素可能在同一个数组索引下标存储的链表中，多个元素共用同一个索引不合适
<span class="token number">3</span>. HashSet 利用什么机制保证数据去重？
		如果集合存储的是自定义对象，必须要重写 hashCode 和 equals 方法
      - 重写 hashCode：根据属性值去计算哈希值
      - 重写 equals：需要在比较时使用对象的内部属性值比较
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+f+`" alt="image-20260106172258173"></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashSet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Objects</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> price<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> o<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token class-name">Book</span> book <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Book</span><span class="token punctuation">)</span> o<span class="token punctuation">;</span>
            <span class="token keyword">return</span> price <span class="token operator">==</span> book<span class="token punctuation">.</span>price <span class="token operator">&amp;&amp;</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> book<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Test</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Book</span> b1 <span class="token operator">=</span> test<span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">&quot;我的阿泰勒&quot;</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Book</span> b2 <span class="token operator">=</span> b1<span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>b1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>

        <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> set2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>b1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 603463375</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>set2<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 603463375</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="插入有序-去重-linkedhashset" tabindex="-1"><a class="header-anchor" href="#插入有序-去重-linkedhashset"><span>插入有序+去重 LinkedHashSet</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>LinkedHashSet 继承自 HashSet，底层同样依赖 HashMap，但额外通过「双向链表」维护元素的插入顺序。
	- 复用 HashSet 的 add<span class="token punctuation">(</span><span class="token punctuation">)</span> 逻辑，通过「自定义 HashMap 的节点类型」实现顺序维护
	- 使用双向链表记录插入顺序，


LinkedHashSet 集合
	- 有序、不重复、无索引
	- 底层基于哈希表，使用双链表记录添加顺序（在遍历时可以通过链表来按顺序获取）
如果要数据去重：
	- 默认使用 HashSet
	- 如果要求去重且存取有序，才使用 LinkedHashSet（因为比 HashSet 额外增加双链表，效率比 HashSet 相对低）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 1. HashSet：无序（输出顺序≠插入顺序）</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> hashSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
hashSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
hashSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
hashSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;HashSet: &quot;</span> <span class="token operator">+</span> hashSet<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可能输出 [A, C, B]</span>

<span class="token comment">// 2. LinkedHashSet：有序（输出顺序=插入顺序）</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> linkedHashSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedHashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedHashSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedHashSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedHashSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;LinkedHashSet: &quot;</span> <span class="token operator">+</span> linkedHashSet<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 必输出 [A, B, C]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="排序-去重-treeset" tabindex="-1"><a class="header-anchor" href="#排序-去重-treeset"><span>排序+去重 TreeSet</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>特性：
	- 有序：元素会按指定规则排序，而非插入顺序（默认升序）
	- 唯一：依赖元素的 自然排序compareTo<span class="token punctuation">(</span><span class="token punctuation">)</span> 或 自定义排序Comparator 判断是否重复
	- 底层依赖红黑树，增删查效率为 O（log n）
	- 不允许 null：自然排序时元素为 null 会抛 NullPointerException（自定义排序可处理，但不推荐）

使用场景：
	<span class="token number">1</span>. 有序去重
	<span class="token number">2</span>. 范围查询：利用 subSet<span class="token punctuation">(</span><span class="token punctuation">)</span>、headSet<span class="token punctuation">(</span><span class="token punctuation">)</span>、tailSet<span class="token punctuation">(</span><span class="token punctuation">)</span> 快速获取指定范围元素

注意：
	- TreeSet 不依赖 equals<span class="token punctuation">(</span><span class="token punctuation">)</span> 和 hashCode<span class="token punctuation">(</span><span class="token punctuation">)</span>，是通过 compareTo<span class="token punctuation">(</span><span class="token punctuation">)</span> 或 Comparator.compare<span class="token punctuation">(</span><span class="token punctuation">)</span> 是否返回 <span class="token number">0</span> 来判断重复
	- 自定义排序时，规则需和 equals<span class="token punctuation">(</span><span class="token punctuation">)</span> 保持一致（否则违反 Set 语义）
	- 对于数值类型<span class="token punctuation">(</span>Integer、Double<span class="token punctuation">)</span>默认按从小到大排序，字符和字符串按字符在ASCII码中的数字升序。

性能对比：
	- 插入/删除：TreeSet O<span class="token punctuation">(</span>log n<span class="token punctuation">)</span> <span class="token operator">&gt;</span> HashSet O<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	- 有序遍历：TreeSet 更高效（无需额外排序）
	- 需有序用 TreeSet，需插入顺序选 LinkedHashSet，仅需去重选 HashSet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 1. 创建 TreeSet（默认自然排序：整数升序）</span>
<span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> numSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. 添加元素（自动去重+排序）</span>
numSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
numSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
numSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
numSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
numSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
numSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 重复元素，不会存入</span>

<span class="token comment">// 3. 遍历（输出：[2, 4, 5, 6, 9]，已排序）</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;自然排序结果：&quot;</span> <span class="token operator">+</span> numSet<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4. 常用方法（TreeSet 特有，利用有序性）</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第一个元素：&quot;</span> <span class="token operator">+</span> numSet<span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;最后一个元素：&quot;</span> <span class="token operator">+</span> numSet<span class="token punctuation">.</span><span class="token function">last</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 9</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;小于5的最大元素：&quot;</span> <span class="token operator">+</span> numSet<span class="token punctuation">.</span><span class="token function">lower</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;大于5的最小元素：&quot;</span> <span class="token operator">+</span> numSet<span class="token punctuation">.</span><span class="token function">higher</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;删除并返回第一个元素：&quot;</span> <span class="token operator">+</span> numSet<span class="token punctuation">.</span><span class="token function">pollFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;删除后集合：&quot;</span> <span class="token operator">+</span> numSet<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [4, 5, 6, 9]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="自定义类-实现-comparable" tabindex="-1"><a class="header-anchor" href="#自定义类-实现-comparable"><span>自定义类（实现 Comparable）</span></a></h5><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">TreeSet</span></span><span class="token punctuation">;</span>

<span class="token comment">// 自定义类：学生（按年龄升序排序）</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 核心：重写 compareTo 定义排序规则</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Student</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 规则：按年龄升序；年龄相同则按姓名字典序</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">!=</span> o<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">-</span> o<span class="token punctuation">.</span>age<span class="token punctuation">;</span> <span class="token comment">// 升序（负数：当前对象小；正数：当前对象大；0：重复）</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 重写 toString 方便打印</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Student{name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;&#39;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TreeSetCustomClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> studentSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        studentSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        studentSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        studentSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 年龄相同，按姓名排序</span>
        studentSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 重复元素（age+name 都相同），不存入</span>

        <span class="token comment">// 输出：[Student{name=&#39;李四&#39;, age=18}, Student{name=&#39;王五&#39;, age=20}, Student{name=&#39;张三&#39;, age=20}]</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;自定义类排序结果：&quot;</span> <span class="token operator">+</span> studentSet<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="自定义排序-使用-comparator-接口" tabindex="-1"><a class="header-anchor" href="#自定义排序-使用-comparator-接口"><span>自定义排序（使用 Comparator 接口）</span></a></h5><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Comparator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">TreeSet</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TreeSetComparator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. 创建 TreeSet 时传入 Comparator（Lambda 简化）</span>
        <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> descNumSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token punctuation">.</span><span class="token function">reverseOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 降序</span>
        <span class="token comment">// 或手动写 Lambda：(a, b) -&gt; b - a</span>

        <span class="token comment">// 2. 添加元素</span>
        descNumSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        descNumSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        descNumSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 输出：[8, 5, 2]（降序）</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;自定义排序结果：&quot;</span> <span class="token operator">+</span> descNumSet<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 扩展：自定义类的多规则排序（按学生年龄降序，年龄相同按姓名降序）</span>
        <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> studentDescSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> s2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> s2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> s1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 年龄降序</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> s2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 姓名降序</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        studentDescSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        studentDescSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        studentDescSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 输出：[Student{name=&#39;张三&#39;, age=20}, Student{name=&#39;王五&#39;, age=20}, Student{name=&#39;李四&#39;, age=18}]</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;学生降序排序：&quot;</span> <span class="token operator">+</span> studentDescSet<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 注意：Student 类需添加 getAge()、getName() 方法</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> age<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> name<span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Student{name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;&#39;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双列集合-map" tabindex="-1"><a class="header-anchor" href="#双列集合-map"><span>双列集合 Map</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Map：接口存储一组键值对象，提供key到value的映射，键值对对象 又称 Entry对象
    <span class="token operator">|</span>—— HashMap：无序<span class="token punctuation">(</span>按哈希值存储<span class="token punctuation">)</span>
    <span class="token operator">|</span>—— LinkedHashMap：有序<span class="token punctuation">(</span>插入顺序<span class="token punctuation">)</span>
    <span class="token operator">|</span>—— TreeMap：有序<span class="token punctuation">(</span>自定义排序<span class="token punctuation">)</span>
    <span class="token operator">|</span>—— ConcurrentHashMap：无序、多线程首选

特性：
	- 键：唯一（通过 hashCode<span class="token punctuation">(</span><span class="token punctuation">)</span> + equals<span class="token punctuation">(</span><span class="token punctuation">)</span> 或 compareTo<span class="token punctuation">(</span><span class="token punctuation">)</span> 保证）
	- 值：可重复、可为 null

注意：
	- HashMap/LinkedHashMap：Key/Value 都可 null；
	- TreeMap：Key 不可 null（会抛 NPE），Value 可 null；
	- Hashtable/ConcurrentHashMap：Key/Value 都不可 null

常用方法：
	- 添加/覆盖元素：V put<span class="token punctuation">(</span>K key, V value<span class="token punctuation">)</span>
	- 根据键删除键值对元素：V remove<span class="token punctuation">(</span>Object key<span class="token punctuation">)</span>
	- 判断集合是否包含指定键：boolean containsKey<span class="token punctuation">(</span>Object key<span class="token punctuation">)</span>
	- 判断集合是否包含指定值：boolean containsValue<span class="token punctuation">(</span>Object value<span class="token punctuation">)</span>
	- 判断集合是否为空：boolean isEmpty<span class="token punctuation">(</span><span class="token punctuation">)</span>
	- 获取键值对数量：int size<span class="token punctuation">(</span><span class="token punctuation">)</span>
  - 移除所有键值对：void clear<span class="token punctuation">(</span><span class="token punctuation">)</span>

	- 获取所有键的集合：Set<span class="token operator">&lt;</span>K<span class="token operator">&gt;</span> keySet<span class="token punctuation">(</span><span class="token punctuation">)</span>
	- 获取所有值的集合：Collection<span class="token operator">&lt;</span>V<span class="token operator">&gt;</span> values<span class="token punctuation">(</span><span class="token punctuation">)</span>
	- 获取所有键值对的集合：Set<span class="token operator">&lt;</span>Map.Entry<span class="token operator">&lt;</span>K,V<span class="token operator">&gt;&gt;</span> entrySet<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hashmap" tabindex="-1"><a class="header-anchor" href="#hashmap"><span>HashMap</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;CBC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;测试&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;CBC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;中国建设银行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将覆盖</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;ABC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;中国农业银行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;ICBC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;中国工商银行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> value <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;CBC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取键的集合</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取值的集合</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取键+值集合</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取长度</span>
<span class="token keyword">boolean</span> result <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span><span class="token string">&quot;ICBC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result <span class="token operator">?</span> <span class="token string">&quot;存在&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;不存在&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hashmap-源码" tabindex="-1"><a class="header-anchor" href="#hashmap-源码"><span>HashMap 源码</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#### hashMap 存储流程（put(K key, V value)）</span>
计算哈希值 -<span class="token operator">&gt;</span> 定位数组索引 -<span class="token operator">&gt;</span> 处理哈希冲突 -<span class="token operator">&gt;</span> 插入数据 -<span class="token operator">&gt;</span> 扩容判断

<span class="token number">1</span>. 计算键的哈希值：hash<span class="token punctuation">(</span><span class="token punctuation">)</span>
HashMap 并非使用 key.hashCode<span class="token punctuation">(</span><span class="token punctuation">)</span> 的返回值，而是对其进行二次哈希处理，以减少哈希冲突，让哈希值的分布更均匀
注：key 为 null 时，固定存入数组索引 <span class="token number">0</span> 的位置，且只能由一个 null 键（后续存入会覆盖原值）

<span class="token number">2</span>. 定位数组索引<span class="token punctuation">(</span>确认哈希桶<span class="token punctuation">)</span>
通过哈希值计算出键值对应在数组中的索引位置，保证索引值在数组长度范围内<span class="token punctuation">(</span>不会越界<span class="token punctuation">)</span>：<span class="token variable"><span class="token variable">\`</span>int index <span class="token operator">=</span> <span class="token punctuation">(</span>n - <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token builtin class-name">hash</span><span class="token punctuation">;</span><span class="token variable">\`</span></span>
用 <span class="token variable"><span class="token variable">\`</span><span class="token punctuation">(</span>n - <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token builtin class-name">hash</span><span class="token variable">\`</span></span> 而非 <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">hash</span> % n<span class="token variable">\`</span></span> 的原因：当n是2的幂次时，<span class="token variable"><span class="token variable">\`</span><span class="token punctuation">(</span>n - <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token builtin class-name">hash</span><span class="token variable">\`</span></span> 和 <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">hash</span> % n<span class="token variable">\`</span></span> 结果等价，但位运算的执行效率远高于取模运算。

<span class="token number">3</span>. 处理哈希冲突，插入数据
遍历对应索引位置的链表/红黑树，根据 key 是否存在执行 覆盖/新增 操作：
	- 若该索引位置为 null（无哈希冲突），直接创建新 Node 节点，存入该索引位置（作为链表头节点）
	- 若该索引不为 null（存在哈希冲突），分三种情况：
			- 头节点的 key 与待插入的 key 相等（hash相同且 key.equals<span class="token punctuation">(</span><span class="token punctuation">)</span> 为 true），新值覆盖就值；
			- 头节点是红黑树节点TreeNode，调用红黑树的插入方法putTreeVal<span class="token punctuation">(</span><span class="token punctuation">)</span>，插入新节点并维持红黑树平衡；
			- 头节点是链表节点Node，遍历链表：
					- 遍历过程找到 key 相等的节点，覆盖旧值；
					- 遍历到链表末尾仍未找到，创建新节点插入链表尾部<span class="token punctuation">(</span>尾插法<span class="token punctuation">)</span>；
					- 插入后判断链表长度是否 ≥ <span class="token number">8</span>，若是则触发 链表转红黑树 的逻辑；

<span class="token number">4</span>. 扩容判断：resize<span class="token punctuation">(</span><span class="token punctuation">)</span>
插入数据后，判断当前元素个数是否超出「负载因子 × 数组容量」，若是则执行扩容操作，将数组长度翻倍。



<span class="token comment">#### hashMap 查询流程（get(Object key)）</span>
计算哈希值 → 定位数组索引 → 遍历链表 / 红黑树 → 返回结果

<span class="token number">1</span>. 若 HashMap 为空（数组为 null 或长度为 <span class="token number">0</span>），直接返回 null；
<span class="token number">2</span>. 计算 key 的哈希值，通过 <span class="token punctuation">(</span>n-1<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token builtin class-name">hash</span> 定位数组索引；
<span class="token number">3</span>. 遍历对应索引位置的链表 / 红黑树：
	- 若头节点的 key 与查询 key 相等，直接返回头节点的 value；
	- 若头节点是红黑树节点，调用红黑树的查询方法getTreeNode<span class="token punctuation">(</span><span class="token punctuation">)</span>，返回匹配的 value；
	- 若头节点是链表节点，遍历链表找到 key 相等的节点，返回 value；
	- 遍历结束未找到匹配的 key，返回 null。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Node<span class="token operator">&lt;</span>K,V<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span> table：哈希表结构中数组的名字
DEFAULT_INITIAL_CAPACITY：数组默认长度16
DEFAULT_LOAD_FACTOR：默认加载因子0.75

HashMap 中每一个对象包含的内容：
  <span class="token number">1</span>. 链表中的键值对对象
      int hash：键的哈希值
      final K key：键
      V value：值
      Node<span class="token operator">&lt;</span>K,V<span class="token operator">&gt;</span> next：下一个节点的地址值

  <span class="token number">2</span>. 红黑树中的键值对对象
      int hash：键的哈希值
      final K key：键
      V value：值
      TreeNode<span class="token operator">&lt;</span>K,V<span class="token operator">&gt;</span> parent：父节点的地址值
      TreeNode<span class="token operator">&lt;</span>K,V<span class="token operator">&gt;</span> left：左子节点的地址值
      TreeNode<span class="token operator">&lt;</span>K,V<span class="token operator">&gt;</span> right：右子节点的地址值
      boolean red：节点的颜色

添加元素时硬考虑三种情况：
	<span class="token number">1</span>. 数组位置为 null
	<span class="token number">2</span>. 数组位置不为 null，键重复，元素覆盖
  <span class="token number">3</span>. 数组位置不为 null，键不重复，挂在下面形成链表或红黑树
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 获取被覆盖元素的值</span>
<span class="token keyword">public</span> v <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">putVal</span><span class="token punctuation">(</span><span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 利用键计算对应的哈希值</span>
<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> h<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token punctuation">(</span>h <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">&gt;&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">final</span> <span class="token class-name">V</span> <span class="token function">putVal</span><span class="token punctuation">(</span><span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">,</span> <span class="token keyword">boolean</span> onlyIfAbsent<span class="token punctuation">,</span> <span class="token keyword">boolean</span> evict<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab<span class="token punctuation">;</span> <span class="token comment">// 局部变量，记录哈希表中数组的地址值</span>
  <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> p<span class="token punctuation">;</span> <span class="token comment">// 临时变量，记录键值对对象的地址值</span>

  <span class="token keyword">int</span> n<span class="token punctuation">;</span> <span class="token comment">// 数组长度</span>
  <span class="token keyword">int</span> i<span class="token punctuation">;</span> <span class="token comment">// 索引</span>

  tab <span class="token operator">=</span> table<span class="token punctuation">;</span> <span class="token comment">// 把哈希表中数组的地址值赋值给局部变量</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>tab <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token punctuation">(</span>n <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.如果当时是第一次添加数据，底层会创建一个默认长度为 16，加载因子为 0.75 的数组</span>
    <span class="token comment">// 2.如果不是第一次添加数据，会看数组中元素是否达到扩容条件</span>
    <span class="token comment">// 如果达到扩容条件，底层会把数组扩容为原先的两倍，并把数据全部转移到新的哈希表中</span>
    tab <span class="token operator">=</span> <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    n <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 使用数组长度与键的哈希值进行计算，计算出当前键值对对象，在数组中应存入的位置</span>
  <span class="token comment">// n 为数组长度（必须是 2 的幂次，这是 HashMap 的核心设计）</span>
  <span class="token comment">// 当n是2的幂次时，(n-1) &amp; hash 与 hash % n 结果等价，但位运算的执行效率远高于取模运算，这是 HashMap 的性能优化点。</span>
  i <span class="token operator">=</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> hash<span class="token punctuation">;</span>

  p <span class="token operator">=</span> tab<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 底层常见一个键值对对象直接存放到数组中</span>
    tab<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">newNode</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> e<span class="token punctuation">;</span>
    <span class="token class-name">K</span> k<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>k <span class="token operator">=</span> p<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      e <span class="token operator">=</span> p<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token keyword">instanceof</span> <span class="token class-name">TreeNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 红黑树节点：表示挂载的是链表</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> binCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">;</span> <span class="token operator">++</span>binCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 创建新节点</span>
          p<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">newNode</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// 链表长度判断是否超出8 + 数组长度≥64，则转化链表为红黑树</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>binCount <span class="token operator">&gt;=</span> <span class="token constant">TREEIFY_THRESHOLD</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token function">treeIfyBin</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> hash<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>k <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        p <span class="token operator">=</span> e<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">V</span> oldValue <span class="token operator">=</span> e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>onlyIfAbsent <span class="token operator">||</span> oldValue <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">afterNodeAccess</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token operator">++</span>modCount<span class="token punctuation">;</span>
  <span class="token comment">// threshold = 数组长度 * 0.75。哈希表的扩容时机</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>size <span class="token operator">&gt;</span> threshold<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">afterNodeInsertion</span><span class="token punctuation">(</span>evict<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 当前没有覆盖任何元素</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iterator迭代器" tabindex="-1"><a class="header-anchor" href="#iterator迭代器"><span>Iterator迭代器</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Iterator迭代器：java.util.Iterator
Collection 与 Map 用于存储元素，而 Iterator 用于迭代访问（遍历）Collection中的元素，因此 Iterator 对象也被称为迭代器。
迭代：即 Collection 集合元素的通用获取方式。在取元素之前要判断集合中有没有元素，如果有，就把这个元素取出来，继续再判断，如果还有就再取出来，直到把集合中的所有元素全部取出为止——这种取出方式称为迭代。

如何使用 Iterator
	- 获取迭代器对象，Collection 接口的 iterator 方法
	- hasNext<span class="token punctuation">(</span><span class="token punctuation">)</span>：判断是否仍有元素可以迭代
	- next<span class="token punctuation">(</span><span class="token punctuation">)</span>：返回下一个迭代的元素

注意：
		因为创建集合的迭代器后，集合每次调用 <span class="token function">add</span> 或 remove 方法都会被统计变化次数。
		所以为了避免并发修改一次，在使用迭代器或增强 <span class="token keyword">for</span> 遍历集合过程中，不要使用集合的方法去添加或修改元素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+S+`" alt="image-20260101142847569"></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Iterator</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;CBC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;中国建设银行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;ABC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;中国农业银行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;ICBC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;中国工商银行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Iterator</span> iterator <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> value <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集合遍历" tabindex="-1"><a class="header-anchor" href="#集合遍历"><span>集合遍历</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 迭代器遍历

<span class="token number">2</span>. 增强式for遍历：底层为迭代器，为了简化迭代器书写
    所有的单列集合和数组才能使用增强式for遍历。
    修改增强for中定义的变量，不会改变集合中原本的数据。
    语法：<span class="token variable"><span class="token variable">\`</span>for<span class="token punctuation">(</span>元素数据类型 变量名: 数组或集合<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token variable">\`</span></span>

<span class="token number">3</span>. lambda表达式遍历：
		语法：default void forEach<span class="token punctuation">(</span>Consumer<span class="token operator">&lt;</span>? super T<span class="token operator">&gt;</span> action<span class="token punctuation">)</span>


- Collection：普通for循环 <span class="token operator">&gt;</span> 迭代器 ≈ forEach  <span class="token operator">&gt;</span> Stream（非必要不使用）；
- Map：entrySet<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> forEach <span class="token operator">&gt;</span> keySet<span class="token punctuation">(</span><span class="token punctuation">)</span>+get<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> values<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="列表的遍历" tabindex="-1"><a class="header-anchor" href="#列表的遍历"><span>列表的遍历</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 普通for循环
<span class="token number">2</span>. 增强for
<span class="token number">3</span>. lambda表达式forEach
<span class="token number">4</span>. 迭代器
<span class="token number">5</span>. 列表迭代器
<span class="token number">6</span>. 转换成数组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Kobe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;June&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 普通for循环</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token char">&#39;\\t&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Kobe June</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 增强for</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span>s <span class="token operator">+</span> <span class="token char">&#39;\\t&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Kobe June</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// lambda表达式</span>
list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span>item <span class="token operator">+</span> <span class="token char">&#39;\\t&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 迭代器</span>
<span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> it <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token char">&#39;\\t&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 列表迭代器</span>
<span class="token class-name">ListIterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> listIt <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">listIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>listIt<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span>listIt<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token char">&#39;\\t&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 转换数组</span>
<span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//转换成数组</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> str <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="map遍历" tabindex="-1"><a class="header-anchor" href="#map遍历"><span>Map遍历</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. keySet<span class="token punctuation">(</span><span class="token punctuation">)</span> + get<span class="token punctuation">(</span><span class="token punctuation">)</span>：仅需Key 时适用；先遍历 Key，再通过 Key 查 Value；效率低<span class="token punctuation">(</span>二次查询<span class="token punctuation">)</span>
<span class="token number">2</span>. entrySet<span class="token punctuation">(</span><span class="token punctuation">)</span>：需同时操作 Key和Value 时适用；直接遍历键值对；效率高<span class="token punctuation">(</span>一次遍历<span class="token punctuation">)</span>
<span class="token number">3</span>. forEach：简单遍历 Key+Value 时适用；Lambda 直接接收 Key+Value；效率高<span class="token punctuation">(</span>简洁<span class="token punctuation">)</span>
<span class="token number">4</span>. values<span class="token punctuation">(</span><span class="token punctuation">)</span>：只需处理 Value 时适用；仅遍历 Value；效率中等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Iterator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span> <span class="token number">95</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// ========== Map 遍历 ==========</span>
        <span class="token comment">// 方式1：keySet() + get()（效率低，不推荐）</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> name <span class="token operator">:</span> map<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Integer</span> score <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;：&quot;</span> <span class="token operator">+</span> score<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 方式3：forEach + Lambda（简洁）</span>
        map<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> score<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;：&quot;</span> <span class="token operator">+</span> score<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 方式4：values()（仅遍历 Value）</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> score <span class="token operator">:</span> map<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;分数：&quot;</span> <span class="token operator">+</span> score<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 方式2：entrySet()（推荐，效率最高）</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">:</span> map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;：&quot;</span> <span class="token operator">+</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 方式2扩展：entrySet() + 迭代器（支持安全删除）</span>
        <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> entryIterator <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>entryIterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">=</span> entryIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">90</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                entryIterator<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 安全删除分数&lt;90的元素</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;：&quot;</span> <span class="token operator">+</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;删除后 Map：&quot;</span> <span class="token operator">+</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {张三=90, 王五=95}</span>

        <span class="token comment">// 方式2扩展：entrySet() + forEach</span>
        map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>entry <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型"><span>泛型</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>泛型：是JDK5引入的特性，可以在编译阶段约束操作的数据类型，并进行检查
泛型的格式：<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>数据类型<span class="token operator">&gt;</span><span class="token variable">\`</span></span>
作用与注意：统一数据类型，泛型只能是引用数据类型，不能是基本数据类型
		- 因为传入基本数据类型，也需要转化为 Object（基本数据类型不支持多态）
		- 指定泛型的具体类型后，传递数据时，可以传入该类类型或者其子类类型
		- 如果不写泛型，类型默认是 Object

泛型不具备继承型，但数据具备继承性

泛型方法：在定义方法时不确定类型的值
		修饰符 <span class="token operator">&lt;</span>类型<span class="token operator">&gt;</span> 返回值类型 方法名<span class="token punctuation">(</span>类型 变量名<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
		public static<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> void show<span class="token punctuation">(</span>T t<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

泛型接口：
		修饰符 interface 接口名<span class="token operator">&lt;</span>类型<span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
		public interface List<span class="token operator">&lt;</span>E<span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

泛型通配符：
    <span class="token variable"><span class="token variable">\`</span>?<span class="token variable">\`</span></span> 表示不确定的类型，它可以进行类型的限定
    <span class="token variable"><span class="token variable">\`</span>? extends E<span class="token variable">\`</span></span>：表示可以传递E或者E所有的子类型
    <span class="token variable"><span class="token variable">\`</span>? super E<span class="token variable">\`</span></span>：表示可传递E或者E所有的父类型
    public static void method<span class="token punctuation">(</span>ArrayList<span class="token operator">&lt;</span>? extends E<span class="token operator">&gt;</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
		public static void method<span class="token punctuation">(</span>ArrayList<span class="token operator">&lt;</span>? super E<span class="token operator">&gt;</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

泛型的使用场景：
		- 定义类、方法、接口时，如果类型不确定，可以定义泛型
		- 如果类型不确定，但能知道是哪个继承体系，就可以使用泛型的通配符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="io流" tabindex="-1"><a class="header-anchor" href="#io流"><span>IO流</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- File 类访问文件和目录
- 字节流的使用
- 字符流的使用
- 缓冲流的使用
- 读写二进制文件
- 序列化和反序列化


IO流
  - 输入流 <span class="token punctuation">(</span>Input Stream<span class="token punctuation">)</span>：从外部读取数据到程序中
  - 输出流 <span class="token punctuation">(</span>Output Stream<span class="token punctuation">)</span>：从程序输出数据到外部
  - 流的特点：数据像水流一样连续传输


核心概念
	- 数据源/数据目的地：File、内存、网络、控制台、设备
	- 数据传输单位
			- 字节流：处理所有类型数据（文本、图片、音视频）
			- 字符流：专门处理文本数据
	- 流的角色
			- 节点流：直接链接数据源/目的地
			- 处理流（包装流）：对节点流进行包装、提供增强功能


字节流：FileInputStream读取文件，FileOutputStream写入文件
字符流：FileReader读取文件，FileWriter写入文件
缓冲流：BufferedReader读取文本文件，BufferedWriter写入文本文件
读写二进制文件：DataInputStream与FileInputStream结合读取二进制文件，DataOutputStream与FileOutputStream结合写二进制文件
序列化：对象写入到特定流中
		- 序列化可以保存对象的全景图
		- 实现Serializable接口
反序列化：从特定的流中获取数据重新还原成对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="io流层次" tabindex="-1"><a class="header-anchor" href="#io流层次"><span>IO流层次</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#### 字节流继承体系</span>
Object
├── InputStream（抽象类）
│   ├── FileInputStream        // 文件字节输入流
│   ├── ByteArrayInputStream   // 字节数组输入流
│   ├── FilterInputStream      // 过滤字节输入流
│   │   ├── BufferedInputStream    // 缓冲字节输入流
│   │   ├── DataInputStream        // 数据输入流
│   │   └── ObjectInputStream      // 对象输入流
│   └── 其他<span class="token punctuation">..</span>.
└── OutputStream（抽象类）
    ├── FileOutputStream       // 文件字节输出流
    ├── ByteArrayOutputStream  // 字节数组输出流
    ├── FilterOutputStream     // 过滤字节输出流
    │   ├── BufferedOutputStream   // 缓冲字节输出流
    │   ├── DataOutputStream       // 数据输出流
    │   ├── PrintStream            // 打印输出流
    │   └── ObjectOutputStream     // 对象输出流
    └── 其他<span class="token punctuation">..</span>.


字符流继承体系
Object
├── Reader（抽象类）
│   ├── InputStreamReader      // 字节流转字符流
│   │   └── FileReader         // 文件字符输入流
│   ├── BufferedReader         // 缓冲字符输入流
│   ├── StringReader           // 字符串输入流
│   └── 其他<span class="token punctuation">..</span>.
└── Writer（抽象类）
    ├── OutputStreamWriter     // 字符流转字节流
    │   └── FileWriter         // 文件字符输出流
    ├── BufferedWriter         // 缓冲字符输出流
    ├── PrintWriter            // 打印字符输出流
    ├── StringWriter           // 字符串输出流
    └── 其他<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="file类-访问文件" tabindex="-1"><a class="header-anchor" href="#file类-访问文件"><span>File类 - 访问文件</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>File类：java.io.File
    判断文件或目录是否存在：boolean exists<span class="token punctuation">(</span><span class="token punctuation">)</span>
    判断是否是文件：boolean isFile<span class="token punctuation">(</span><span class="token punctuation">)</span>
    判断是否是目录：boolean isDirectory<span class="token punctuation">(</span><span class="token punctuation">)</span>
    获取文件的相对路径：String getPath<span class="token punctuation">(</span><span class="token punctuation">)</span>
    获取文件的绝对路径：String getAbsolutePath<span class="token punctuation">(</span><span class="token punctuation">)</span>
    获取文件/目录名称：String getName<span class="token punctuation">(</span><span class="token punctuation">)</span>
    删除此对象指定的文件/目录：boolean delete<span class="token punctuation">(</span><span class="token punctuation">)</span>
    创建名称的空文件，不创建文件夹：boolean createNewFile<span class="token punctuation">(</span><span class="token punctuation">)</span>
    获取文件大小<span class="token punctuation">(</span>单位为字节<span class="token punctuation">)</span>：long  length<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\项目\\\\JavaTest\\\\src\\\\1.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 判断文件是否存在</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果是文件</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;名称:&quot;</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;相对路径:&quot;</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;绝对路径:&quot;</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件大小:&quot;</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;字节&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果是目录</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;此文件是目录&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 此文件不存在</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;此文件不存在&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                file<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件已创建！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字节流-fileinputstream" tabindex="-1"><a class="header-anchor" href="#字节流-fileinputstream"><span>字节流 - FileInputStream</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileNotFoundException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\项目\\\\JavaTest\\\\src\\\\1.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\项目\\\\JavaTest\\\\src\\\\2.txt&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// // true表示追加，false表示覆盖</span>

            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 1KB缓冲区</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>fis<span class="token punctuation">.</span><span class="token function">available</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> read <span class="token operator">=</span> fis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
                fos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> read<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 写入实际读取的字节数</span>

                <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> read<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            fos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;\\nNew log entry\\n&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件不存在&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件不存在&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                fis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符流-filereader" tabindex="-1"><a class="header-anchor" href="#字符流-filereader"><span>字符流 - FileReader</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">FileReader</span> fr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\项目\\\\JavaTest\\\\src\\\\1.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token class-name">FileWriter</span> fw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\项目\\\\JavaTest\\\\src\\\\2.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> len<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> fr<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缓冲流-bufferedreader" tabindex="-1"><a class="header-anchor" href="#缓冲流-bufferedreader"><span>缓冲流 - BufferedReader</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 按行读取（需要BufferedReader包装）</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\项目\\\\JavaTest\\\\src\\\\1.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token class-name">BufferedWriter</span> bw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\项目\\\\JavaTest\\\\src\\\\2.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token class-name">String</span> line<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                bw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
                bw<span class="token punctuation">.</span><span class="token function">newLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 写入换行符</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 带编码的读写</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>
                <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>
                        <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\项目\\\\JavaTest\\\\src\\\\1.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;GB2312&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token class-name">BufferedWriter</span> bw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span>
                     <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span>
                             <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\项目\\\\JavaTest\\\\src\\\\2.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token class-name">String</span> line<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                bw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
                bw<span class="token punctuation">.</span><span class="token function">newLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="序列化" tabindex="-1"><a class="header-anchor" href="#序列化"><span>序列化</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token comment">// 必须实现 Serializable 接口</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token comment">// 序列化版本号，防止序列化兼容性问题</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>  <span class="token comment">// transient 修饰的字段不会被序列化</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ObjectStreamExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 序列化对象</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">ObjectOutputStream</span> oos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectOutputStream</span><span class="token punctuation">(</span>
                <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;student.dat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            oos<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
            oos<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 序列化其他对象</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 反序列化对象</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">ObjectInputStream</span> ois <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span>
                <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;student.dat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span> ois<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Date</span><span class="token punctuation">)</span> ois<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// password 为 null</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> <span class="token operator">|</span> <span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 序列化多个对象到集合</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">ObjectOutputStream</span> oos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectOutputStream</span><span class="token punctuation">(</span>
                <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;students.dat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> students <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>
                <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&quot;111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token string">&quot;222&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">&quot;333&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>

            oos<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span>students<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多线程-juc" tabindex="-1"><a class="header-anchor" href="#多线程-juc"><span>多线程 &amp; JUC</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>理解线程生命周期：新建、就绪、运行、阻塞、死亡
掌握同步机制：synchronized、Lock、volatile、原子类
熟悉并发工具：CountDownLatch、CyclicBarrier、Semaphore、Exchanger
善用线程池：合理配置参数，避免资源耗尽
了解并发集合：ConcurrentHashMap、CopyOnWriteArrayList等
掌握CompletableFuture：异步编程的强大工具
理解JMM：内存模型、happens-before原则
遵循最佳实践：避免死锁、减少锁竞争、使用不可变对象等
学会调试监控：线程转储、性能监控、死锁检测


线程和进程的区别？
什么是线程安全？如何保证线程安全？
synchronized和Lock的区别？
wait<span class="token punctuation">(</span><span class="token punctuation">)</span>和sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>的区别？
什么是死锁？如何避免死锁？
volatile关键字的作用？
ThreadLocal的原理和内存泄漏问题？
线程池的核心参数有哪些？
线程池的拒绝策略有哪些？
CAS的原理和ABA问题？
ConcurrentHashMap的实现原理？
如何实现生产者-消费者模式？


性能调优
减少锁的粒度：尽量使用细粒度锁。
减少锁的持有时间：只在必要的时候加锁。
使用读写锁：读多写少的场景使用ReadWriteLock。
使用无锁数据结构：如AtomicXXX类。
合理设置线程池参数：根据任务类型和系统资源设置。
避免创建过多线程：使用线程池复用线程。
使用异步编程：如CompletableFuture。
监控线程状态：使用JConsole、VisualVM等工具。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多线程概念" tabindex="-1"><a class="header-anchor" href="#多线程概念"><span>多线程概念</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- 进程<span class="token punctuation">(</span>Process<span class="token punctuation">)</span>：程序的一次执行过程，是系统运行程序进行资源分配和调度的基本单位。每个进程都有自己的独立内存空间。
- 线程<span class="token punctuation">(</span>Thread<span class="token punctuation">)</span>：进程中执行运算的最小单位，可完成一个独立的顺序控制流程。一个进程可以包含多个线程。线程共享进程的内存空间。

- 并发：同一时间段内，多个任务交替执行。
- 并行：同一时刻，多个任务同时执行（需要多核CPU）


<span class="token comment">#### 多线程</span>
多线程：一个进程中同时运行多个线程。多线程是多个线程交替占用CPU资源，并非真正的并行运行。
多线程的优点
		- 提高程序响应速度（GUI应用）
		- 提高多核CPU利用率
		- 改善程序结构，将复杂任务分解为多个进程独立运行
多线程的缺点
		- 线程间共享数据可能导致数据不一致
		- 线程的创建和销毁需要开销
		- 过多的线程会消耗大量系统资源，可能导致系统崩溃



<span class="token comment">#### JAVA 中的线程</span>
主线程：
	main<span class="token punctuation">(</span><span class="token punctuation">)</span> 所在的线程称为主线程。
	主线程是产生其他子线程的线程。
	主线程必须最后完成执行，因为它需要执行各种关闭操作。
创建线程：
	- 继承 java.lang.Thread 类（继承Thread类，重写run方法，创建线程对象调用start<span class="token punctuation">(</span><span class="token punctuation">)</span>启动线程）-适用单继承
	- 实现 java.lang.Runnable 接口（实现Runnable接口，实现run方法，创建线程对象调用start<span class="token punctuation">(</span><span class="token punctuation">)</span>启动线程）-避免单继承局限性
线程的同步：
	- 多个线程操作同一共享资源时，将引发数据不安全问题
	- 解决方法：使用同步方法，用 synchronized 修饰方法，为当前的线程声明一个锁，让代码块变为同步执行
      - Vector：线程安全，效率低，适用多线程并发共享资源
      - ArrayList：线程不安全，效率高，适用单线程
      - Hashtable：线程安全，效率低，适用多线程并发共享资源
      - HashMap：线程不安全，效率高，适用单线程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="线程的生命周期" tabindex="-1"><a class="header-anchor" href="#线程的生命周期"><span>线程的生命周期</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>线程的六种状态（Thread.State）
    NEW：新建
    RUNNABLE：可运行（包括就绪和运行中）
    BLOCKED：阻塞（等待监视器锁）
    WAITING：等待（无限期等待，直到被唤醒）
    TIMED_WAITING：超时等待（有限时间的等待）
    TERMINATED：终止


状态转换
	- NEW --start<span class="token punctuation">(</span><span class="token punctuation">)</span>--<span class="token operator">&gt;</span> RUNNABLE
	- RUNNABLE --获取CPU时间片--<span class="token operator">&gt;</span> 运行
	- 运行 --yield<span class="token punctuation">(</span><span class="token punctuation">)</span>/时间片用完--<span class="token operator">&gt;</span> 就绪
	- 运行 --sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>/wait<span class="token punctuation">(</span><span class="token punctuation">)</span>/join<span class="token punctuation">(</span><span class="token punctuation">)</span>/IO等待--<span class="token operator">&gt;</span> TIMED_WAITING/WAITING
	- 运行 --等待获取锁--<span class="token operator">&gt;</span> BLOCKED
	- 运行 --run<span class="token punctuation">(</span><span class="token punctuation">)</span>结束/异常退出--<span class="token operator">&gt;</span> TERMINATED
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+q+`" alt="image-20251225103710538"></p><h4 id="线程常用的方法" tabindex="-1"><a class="header-anchor" href="#线程常用的方法"><span>线程常用的方法</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>如果不用 setName<span class="token punctuation">(</span><span class="token punctuation">)</span> 设置线程名字，则会由默认的线程名（以序号为值）

sleep<span class="token punctuation">(</span><span class="token punctuation">)</span> 因为是静态方法，所以可以使用 类名.sleep<span class="token punctuation">(</span><span class="token punctuation">)</span> 来调用（Thread.sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>）
		<span class="token function">sleep</span> 方法会让线程睡眠，睡眠时间完毕，不会立马执行下面的代码，因为仍然需要等待CPU的执行权

线程的默认优先级一样，setPriority<span class="token punctuation">(</span><span class="token punctuation">)</span> 设置优先级越高，抢到CPU的概率越大，但是其他线程仍然可能优先执行完毕

setDaemon<span class="token punctuation">(</span>true<span class="token punctuation">)</span> 设置为守护线程后，在其他的非守护线程执行完毕后，守护线程会陆续结束
		守护线程是逐渐结束，仍然会执行，但不一定能全部执行完毕
		例如：聊天窗口是线程1，传送文件是线程2，如果聊天窗口关闭，传送文件就没必要存在，因此可把线程2设置为守护线程

yield<span class="token punctuation">(</span><span class="token punctuation">)</span> 出让线程只是尽可能出让线程，但是该线程仍然可能在中间穿插执行

join<span class="token punctuation">(</span><span class="token punctuation">)</span> 插入线程，比如在 main方法中对线程进行插入，则先执行插入的线程，再执行 main 下面的代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+j+`" alt="image-20251224142222050"></p><h3 id="线程的创建方式" tabindex="-1"><a class="header-anchor" href="#线程的创建方式"><span>线程的创建方式</span></a></h3><h4 id="继承thread类" tabindex="-1"><a class="header-anchor" href="#继承thread类"><span>继承Thread类</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 线程执行体</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MyThread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MyThread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 启动线程</span>
        t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
Thread-1: 0
Thread-1: 1
Thread-0: 0
Thread-1: 2
Thread-1: 3
Thread-0: 1
Thread-0: 2
Thread-1: 4
Thread-0: 3
Thread-0: 4
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实现runnable接口" tabindex="-1"><a class="header-anchor" href="#实现runnable接口"><span>实现Runnable接口</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRunnable</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MyRunnable</span> mr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;线程1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;线程2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      	<span class="token comment">// 获取活动线程数</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;活动线程数: &quot;</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">activeCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取所有活动线程</span>
        <span class="token class-name">Thread</span><span class="token punctuation">[</span><span class="token punctuation">]</span> threads <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">[</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">activeCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">enumerate</span><span class="token punctuation">(</span>threads<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Thread</span> t <span class="token operator">:</span> threads<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;活动线程: &quot;</span> <span class="token operator">+</span> t<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实现callable接口-有返回值" tabindex="-1"><a class="header-anchor" href="#实现callable接口-有返回值"><span>实现Callable接口（有返回值）</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">Callable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">FutureTask</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyCallable</span> <span class="token keyword">implements</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">MyCallable</span> mc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyCallable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> ft <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>mc<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>ft<span class="token punctuation">,</span> <span class="token string">&quot;Callable线程&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;线程返回值: &quot;</span> <span class="token operator">+</span> ft<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 线程返回值: 15</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用线程池" tabindex="-1"><a class="header-anchor" href="#使用线程池"><span>使用线程池</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ExecutorService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">Executors</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadPoolDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建固定大小的线程池</span>
        <span class="token class-name">ExecutorService</span> executor <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 提交任务</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            executor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; 执行任务&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 关闭线程池</span>
        executor<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="线程的同步与锁" tabindex="-1"><a class="header-anchor" href="#线程的同步与锁"><span>线程的同步与锁</span></a></h3><h4 id="同步-synchronized" tabindex="-1"><a class="header-anchor" href="#同步-synchronized"><span>同步 synchronized</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>同步代码块：把操作共享数据的代码锁起来
	- 锁默认打开，由一个进程进去，锁自动关闭
	- 里面的代码全部执行完毕，线程出来，锁自动打开
	- 注意：锁一般是创建一个 Object 变量来设定，且要保证唯一（单例模式）锁不唯一，那就不能保证同步的稳定性

      synchronized <span class="token punctuation">(</span>锁<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        操作共享数据的代码
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 同步方法</span>
<span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 同步代码</span>
<span class="token punctuation">}</span>

<span class="token comment">// 同步代码块</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 同步锁对象</span>
        <span class="token comment">// 同步代码</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 同步静态方法（锁的是类对象）</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 同步代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="锁-lock" tabindex="-1"><a class="header-anchor" href="#锁-lock"><span>锁 Lock</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>locks<span class="token punctuation">.</span></span><span class="token class-name">Lock</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>locks<span class="token punctuation">.</span></span><span class="token class-name">ReentrantLock</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LockDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Lock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取锁</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 同步代码</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 释放锁</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="死锁" tabindex="-1"><a class="header-anchor" href="#死锁"><span>死锁</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>锁的本质是，当其他线程运行到上锁的代码时，若发现锁没有解开，就会让出cpu执行权。

本质上是锁的理解问题。锁并不能保证锁内的代码块在一个cpu时间片内完成
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeadLockDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> lockA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> lockB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lockA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;线程1持有lockA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 代码执行到这里就卡死，无法往下执行</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lockB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;线程1持有lockB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lockB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;线程2持有lockB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 代码执行到这里就卡死，无法往下执行</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lockA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;线程2持有lockA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="【典例】售卖电影票" tabindex="-1"><a class="header-anchor" href="#【典例】售卖电影票"><span>【典例】售卖电影票</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
         * 需求：某电影院某个电影共有100张票，分别在三个窗口售卖
         * */</span>

        <span class="token comment">// 创建线程对象</span>
        <span class="token class-name">MyThread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MyThread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MyThread</span> t3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 线程命名</span>
        t1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;窗口1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;窗口2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t3<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;窗口3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 开启线程</span>
        t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;==================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MyRunnable</span> mr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> t11 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;窗口11&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> t22 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;窗口22&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> t33 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;窗口33&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t11<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t22<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t33<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用继承-synchronized" tabindex="-1"><a class="header-anchor" href="#使用继承-synchronized"><span>使用继承 + synchronized</span></a></h5><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用 static 表示这个类的所有的对象，都共享 ticket 数据</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> ticket <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 售卖的电影票 0~100张</span>

    <span class="token comment">// 锁对象，一定要是唯一的</span>
    <span class="token keyword">static</span> <span class="token class-name">Object</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 锁要在循环里面，不然必然是第一个进来的线程把while执行完再出去</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>ticket <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>

                    ticket<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;正在售卖第&quot;</span> <span class="token operator">+</span> ticket <span class="token operator">+</span> <span class="token string">&quot;张票&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用抽象类-synchronized" tabindex="-1"><a class="header-anchor" href="#使用抽象类-synchronized"><span>使用抽象类 + synchronized</span></a></h5><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRunnable</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不用写成 static，因为只会创建一次；如果定义了 static 则会让变量一直占用内存</span>
    <span class="token keyword">int</span> ticket <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">MyRunnable</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>ticket <span class="token operator">==</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>

                    ticket<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;在卖第&quot;</span> <span class="token operator">+</span> ticket <span class="token operator">+</span> <span class="token string">&quot;张票&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用继承类-lock" tabindex="-1"><a class="header-anchor" href="#使用继承类-lock"><span>使用继承类 + Lock</span></a></h5><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>locks<span class="token punctuation">.</span></span><span class="token class-name">Lock</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>locks<span class="token punctuation">.</span></span><span class="token class-name">ReentrantLock</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用 static 表示这个类的所有的对象，都共享 ticket 数据</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> ticket <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要使用 static 共享锁</span>
    <span class="token keyword">static</span> <span class="token class-name">Lock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>ticket <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    ticket<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;正在售卖第&quot;</span> <span class="token operator">+</span> ticket <span class="token operator">+</span> <span class="token string">&quot;张票&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 必须在 finally，否则报错或者 break 无法解锁</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生产者-消费者模式-等待唤醒机制" tabindex="-1"><a class="header-anchor" href="#生产者-消费者模式-等待唤醒机制"><span>生产者-消费者模式(等待唤醒机制)</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>使用 生产者-消费者模式（等待唤醒机制）实现线程轮流交替效果
	- 当缓冲区满时，生产者等待，直到缓冲区有空位
	- 当缓冲区空时，消费者等待，直到缓冲区有数据

生产者：产生数据的线程
消费者：处理数据的线程
共享缓冲区：生产者和消费者之间的数据存储区域
核心问题：解决生产者和消费者的同步和互斥问题


涉及的方法
  - void wait<span class="token punctuation">(</span><span class="token punctuation">)</span>：当前线程等待，直到被其他线程唤醒
  - void notify<span class="token punctuation">(</span><span class="token punctuation">)</span>：随机唤醒单个线程
  - void notifyAll<span class="token punctuation">(</span><span class="token punctuation">)</span>：唤醒所有线程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/* 共享缓冲区：控制生产者和消费者的执行 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Desk</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> foodFlag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 是否有面条 1:是 0:否</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 可以吃的上限</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 锁对象</span>
<span class="token punctuation">}</span>


<span class="token comment">// 生产者</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cook</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 判断桌子上是否有食物
         * 如果有，就等待
         * 如果没有，就制作食物，制作完成后修改食物状态
         */</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Desk</span><span class="token punctuation">.</span>lock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Desk</span><span class="token punctuation">.</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Desk</span><span class="token punctuation">.</span>foodFlag <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token class-name">Desk</span><span class="token punctuation">.</span>lock<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;正在制作食物&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">Desk</span><span class="token punctuation">.</span>foodFlag <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                    <span class="token class-name">Desk</span><span class="token punctuation">.</span>lock<span class="token punctuation">.</span><span class="token function">notifyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 消费者</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Foodie</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 如果没有面条，就等待
         * 如有有面条，就吃(就餐)
         * 吃完之后，把吃的上限-1，并通知厨师(生产者)继续做
         * 修改桌子状态(等吃)
         */</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Desk</span><span class="token punctuation">.</span>lock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Desk</span><span class="token punctuation">.</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Desk</span><span class="token punctuation">.</span>foodFlag <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token class-name">Desk</span><span class="token punctuation">.</span>lock<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Desk</span><span class="token punctuation">.</span>count<span class="token operator">--</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;正在就餐，还能再吃&quot;</span> <span class="token operator">+</span> <span class="token class-name">Desk</span><span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token string">&quot;碗&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">Desk</span><span class="token punctuation">.</span>lock<span class="token punctuation">.</span><span class="token function">notifyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">Desk</span><span class="token punctuation">.</span>foodFlag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 主线程</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Cook</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Foodie</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foodie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        c<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;厨师&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        f<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;食客&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        c<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        f<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="阻塞队列-juc" tabindex="-1"><a class="header-anchor" href="#阻塞队列-juc"><span>阻塞队列（JUC）</span></a></h5><p>阻塞队列内部方法用锁实现，是安全线程</p><p>但如果在队列方法外操作，则不在锁的范围内，所以进行日志输出则有问题</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ArrayBlockingQueue</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadDemo</span> <span class="token punctuation">{</span>
    <span class="token comment">// 生产者</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cook</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> queue<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">Cook</span><span class="token punctuation">(</span><span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> queue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> queue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 不断把面条放入阻塞队列</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;面条&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 内部实现了锁</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;厨师放入一碗面条&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这个不在阻塞队列的锁中，所以打印不会卡着</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 消费者</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Foodie</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> queue<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">Foodie</span><span class="token punctuation">(</span><span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> queue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> queue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 不断从阻塞队列中取出面条</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">String</span> food <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 内部实现了锁</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>food<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这个不在阻塞队列的锁中，所以打印不会卡着</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 主线程</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 利用阻塞队列 实现 生产者和消费者（等待唤醒）</span>

        <span class="token comment">// 1. 创建阻塞队列的对象</span>
        <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ThreadDemo</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建实例传递阻塞队列（共用队列）</span>
        <span class="token class-name">Cook</span> c <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">Cook</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Foodie</span> f <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">Foodie</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        c<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        f<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池"><span>线程池</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>线程池初始化创建时是空的，在提交任务时，池子会创建新的线程对象，任务执行完毕，线程归还给池子，下回再次提交任务时，不需要再创建新的线程，直接复用已有线程即可。
如果提交任务时，池子没有空闲线程，也无法创建新的线程，任务就会排队等待。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>// 固定大小线程池
ExecutorService fixedPool <span class="token operator">=</span> Executors.newFixedThreadPool<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

// 单线程线程池
ExecutorService singlePool <span class="token operator">=</span> Executors.newSingleThreadExecutor<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

// 可缓存线程池
ExecutorService cachedPool <span class="token operator">=</span> Executors.newCachedThreadPool<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

// 定时任务线程池
ScheduledExecutorService scheduledPool <span class="token operator">=</span> Executors.newScheduledThreadPool<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

// 定时执行
scheduledPool.schedule<span class="token variable"><span class="token punctuation">((</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> {
    System.out.println<span class="token punctuation">(</span>&quot;延迟<span class="token number">3</span>秒执行&quot;<span class="token punctuation">)</span><span class="token punctuation">;</span>
}<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> TimeUnit.SECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">/</span><span class="token operator">/</span> 定期执行
scheduledPool.scheduleAtFixedRate<span class="token punctuation">((</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> {
    System.out.println<span class="token punctuation">(</span>&quot;延迟<span class="token number">1</span>秒后，每<span class="token number">2</span>秒执行一次&quot;<span class="token punctuation">)</span><span class="token punctuation">;</span>
}<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> TimeUnit.SECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">/</span><span class="token operator">/</span> 提交线程任务
fixedPool.submit<span class="token punctuation">(</span>new MyRunnable<span class="token punctuation">(</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadPoolExecutorDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建线程池</span>
        <span class="token class-name">ThreadPoolExecutor</span> executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span>
            <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 核心线程数</span>
            <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 最大线程数</span>
            <span class="token number">60</span><span class="token punctuation">,</span> <span class="token comment">// 空闲线程存活时间</span>
            <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">,</span> <span class="token comment">// 时间单位</span>
            <span class="token keyword">new</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 工作队列</span>
            <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">defaultThreadFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 线程工厂</span>
            <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor<span class="token punctuation">.</span>AbortPolicy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 拒绝策略</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 提交任务</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">15</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">final</span> <span class="token keyword">int</span> taskId <span class="token operator">=</span> i<span class="token punctuation">;</span>
            executor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
                    <span class="token string">&quot; 执行任务 &quot;</span> <span class="token operator">+</span> taskId<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 关闭线程池</span>
        executor<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="socket" tabindex="-1"><a class="header-anchor" href="#socket"><span>Socket</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Socket <span class="token operator">=</span> IP地址 + 端口号
客户端Socket：主动连接服务器
	需要提供服务端的IP和端口号，通过 Socket 对象的 getInputStream 和 getOutputStream 获取到输入输出流，然后获取和发送数据。
服务器ServerSocket：监听端口，接受连接
	通过 ServerSocket 的 accept<span class="token punctuation">(</span><span class="token punctuation">)</span> 创建，一旦被客户端连接，服务端就会创建一个用于通信的 Socket 等待用户发送数据。

java.net.Socket - 客户端Socket
java.net.ServerSocket - 服务器Socket
java.net.InetAddress - IP地址处理
java.net.URL/URLConnection - 高层网络API


在Java I/O中，为了减少I/O操作的次数，OutputStream（包括其子类）通常会将数据先存储在缓冲区中，当缓冲区满或者流关闭时才会自动将数据发送出去。
os.flush<span class="token punctuation">(</span><span class="token punctuation">)</span> 的作用：强制将缓冲区中的数据发送出去，即使缓冲区还没有满
	<span class="token number">1</span>. 强制将缓冲区中的数据写入目标
	<span class="token number">2</span>. 确保数据被实际发送/写入
	<span class="token number">3</span>. 清空输出缓冲区


对象类型数据的发送和接收
要发送的类型必须实现 Serializable 接口。
在发送端组合出一个对象数据，然后转序列化，通过 ObjectOutputStream 发送对象数据
在接收端通过 ObjectInputStream 反序列化出一个对象，然后拆解出对象的各个属性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserInfo</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> uname<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> upwa<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUname</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> uname<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUpwa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> upwa<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUname</span><span class="token punctuation">(</span><span class="token class-name">String</span> uname<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>uname <span class="token operator">=</span> uname<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUpwa</span><span class="token punctuation">(</span><span class="token class-name">String</span> upwa<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>upwa <span class="token operator">=</span> upwa<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">ServerSocket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>

<span class="token comment">// 服务器端启动</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ServerSocket</span> serverSocket <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">Socket</span> socket <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">OutputStream</span> os <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ObjectInputStream</span> ois <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            serverSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerSocket</span><span class="token punctuation">(</span><span class="token number">50000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 创建负责通信的Socket</span>
            socket <span class="token operator">=</span> serverSocket<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 输入流对象，获取数据</span>
            is <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 输出流对象，用于发送数据</span>
            os <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

          	<span class="token comment">// 对象类型的数据接收</span>
            ois <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">UserInfo</span> info <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">UserInfo</span><span class="token punctuation">)</span> ois<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接收到的消息：&quot;</span> <span class="token operator">+</span> info<span class="token punctuation">.</span><span class="token function">getUname</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\t&quot;</span> <span class="token operator">+</span> info<span class="token punctuation">.</span><span class="token function">getUpwa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            socket<span class="token punctuation">.</span><span class="token function">shutdownInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

          	<span class="token comment">// 字符串类型的数据发送</span>
            <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;这是服务器返回的消息&quot;</span><span class="token punctuation">;</span>
            os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;已发送响应给客户端&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>ois <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> ois<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>is <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> is<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>os <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> os<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>socket <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>serverSocket <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> serverSocket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token comment">// 客户端启动</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Socket</span> socket <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">OutputStream</span> os <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ObjectOutputStream</span> oos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入内容&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Socket</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">50000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            is <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            os <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            oos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectOutputStream</span><span class="token punctuation">(</span>os<span class="token punctuation">)</span><span class="token punctuation">;</span>

          	<span class="token comment">// 对象类型的数据发送</span>
            <span class="token class-name">String</span> uname <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> upwd <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">UserInfo</span> info <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            info<span class="token punctuation">.</span><span class="token function">setUname</span><span class="token punctuation">(</span>uname<span class="token punctuation">)</span><span class="token punctuation">;</span>
            info<span class="token punctuation">.</span><span class="token function">setUpwa</span><span class="token punctuation">(</span>upwd<span class="token punctuation">)</span><span class="token punctuation">;</span>
            oos<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
            socket<span class="token punctuation">.</span><span class="token function">shutdownOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

          	<span class="token comment">// 字符串类型的数据接收</span>
            br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>msg <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;服务器的响应：&quot;</span> <span class="token operator">+</span> socket<span class="token punctuation">.</span><span class="token function">getLocalPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                oos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                os<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                is<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应多个客户端" tabindex="-1"><a class="header-anchor" href="#响应多个客户端"><span>响应多个客户端</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#### 一个服务器，多个客户端</span>
通过在服务端开启线程的方式，来服务多个客户端。每个客户端发起连接，服务端就开启一个线程为它服务。


<span class="token keyword">while</span> <span class="token punctuation">(</span>true<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    socket <span class="token operator">=</span> serverSocket.accept<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    MyThread t1 <span class="token operator">=</span> new MyThread<span class="token punctuation">(</span>socket<span class="token punctuation">)</span><span class="token punctuation">;</span>
    t1.start<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">ObjectInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">OutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
    <span class="token class-name">Socket</span> socket <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token class-name">Socket</span> socket<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>socket <span class="token operator">=</span> socket<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">OutputStream</span> os <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ObjectInputStream</span> ois <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">UserInfo</span> info <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            is <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            os <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ois <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                info <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">UserInfo</span><span class="token punctuation">)</span> ois<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接收到的消息：&quot;</span> <span class="token operator">+</span> info<span class="token punctuation">.</span><span class="token function">getUname</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\t&quot;</span> <span class="token operator">+</span> info<span class="token punctuation">.</span><span class="token function">getUpwa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            socket<span class="token punctuation">.</span><span class="token function">shutdownInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;这是服务器返回的消息&quot;</span><span class="token punctuation">;</span>
            os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;已发送响应给客户端&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>ois <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> ois<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>is <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> is<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>os <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> os<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>socket <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">ServerSocket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>

<span class="token comment">// 服务器端启动</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ServerSocket</span> serverSocket <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">Socket</span> socket <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            serverSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerSocket</span><span class="token punctuation">(</span><span class="token number">50000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                socket <span class="token operator">=</span> serverSocket<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">MyThread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span>socket<span class="token punctuation">)</span><span class="token punctuation">;</span>
                t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基于-udp-的-socket" tabindex="-1"><a class="header-anchor" href="#基于-udp-的-socket"><span>基于 UDP 的 Socket</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>基于 UDP 协议的 Socket 网络编程步骤：
    <span class="token number">1</span>、利用 DatagramPacket 对象封装数据报
    <span class="token number">2</span>、利用 DatagramSocket 发送数据报
    <span class="token number">3</span>、利用 DatagramSocket 接收数据报
    <span class="token number">4</span>、利用 DatagramPacket 处理数据报

UDP 支持三种核心通信模式：
	<span class="token number">1</span>. 单播<span class="token punctuation">(</span>Unicast<span class="token punctuation">)</span>
	<span class="token number">2</span>. 广播<span class="token punctuation">(</span>Broadcast<span class="token punctuation">)</span>
	<span class="token number">3</span>. 组播<span class="token punctuation">(</span>Multicast<span class="token punctuation">)</span>

单播
	- 一对一通信，发送端向唯一的接收端发送数据
	- 单台主机的合法 IP（如 <span class="token number">127.0</span>.0.1、192.168.1.100），无限制<span class="token punctuation">(</span>局域网/广域网均可<span class="token punctuation">)</span>
	- 精准投递、仅目标主机接收、开销小
广播
	- 一对所有通信，发送端向同一网络所有主机发送数据
	- 有限广播<span class="token punctuation">(</span><span class="token number">255.255</span>.255.255<span class="token punctuation">)</span>；直接广播<span class="token punctuation">(</span>如192.168.1.255<span class="token punctuation">(</span>网段广播地址<span class="token punctuation">))</span>；仅同一局域网<span class="token punctuation">(</span>广域网禁止广播，路由器会丢弃广播包<span class="token punctuation">)</span>
	- 无需知道目标主机IP，所有主机均可接收、开销大
组播
	- 一对一组通信，发送端向指定「组播组」发送数据，仅加入该组的主机可接收
	- 组播地址：D类IP地址<span class="token punctuation">(</span><span class="token number">224.0</span>.0.0 ~ <span class="token number">239.255</span>.255.255<span class="token punctuation">)</span>；局域网/广域网<span class="token punctuation">(</span>需路由器支持IGMP协议<span class="token punctuation">)</span>
	- 兼顾单播和广播的优点、仅组内主机接收、开销适中

注意：广播需开启 setBroadcast<span class="token punctuation">(</span>true<span class="token punctuation">)</span>，组播需使用 MulticastSocket 并调用 socket.joinGroup<span class="token punctuation">(</span><span class="token punctuation">)</span> 加入组播组
三种通信模式区别是数据传输范围不同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="单播" tabindex="-1"><a class="header-anchor" href="#单播"><span>单播</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>发送端将数据报发送到唯一的目标主机 IP + 端口，仅该主机的对应端口能接收数据。

适用场景：
  - 客户端与服务端的点对点通信（如单个设备的指令查询、简单数据上报）
  - 广域网中的 UDP 通信（如跨地域的游戏客户端与服务器心跳包）
  - 对数据投递精准度有要求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 单播发送端（与之前的 UDP 发送端一致，目标 IP 为单台主机）</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UdpUnicastSender</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">DatagramSocket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> sendData <span class="token operator">=</span> <span class="token string">&quot;UDP 单播数据&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> sendBytes <span class="token operator">=</span> sendData<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 目标 IP：单台主机（本地回环地址 127.0.0.1）</span>
            <span class="token class-name">InetAddress</span> targetIp <span class="token operator">=</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">DatagramPacket</span> packet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>sendBytes<span class="token punctuation">,</span> sendBytes<span class="token punctuation">.</span>length<span class="token punctuation">,</span> targetIp<span class="token punctuation">,</span> <span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>packet<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;单播发送成功：&quot;</span> <span class="token operator">+</span> sendData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 单播接收端（绑定固定端口，仅该端口接收单播数据）</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UdpUnicastReceiver</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">DatagramSocket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token class-name">DatagramPacket</span> packet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> buf<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;单播接收端已启动，等待接收数据...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            socket<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span>packet<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> receiveData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>packet<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> packet<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;收到单播数据：&quot;</span> <span class="token operator">+</span> receiveData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="广播" tabindex="-1"><a class="header-anchor" href="#广播"><span>广播</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>发送端向「广播地址」发送数据报，同一局域网内的所有主机都会收到该数据报，只有绑定了对应端口的主机能解析处理，其余主机直接丢弃。

关键广播地址：
	- 有限广播地址：255.255.255.255（仅在当前局域网内广播，路由器不会转发，最常用）
	- 直接广播地址：对应网段的广播地址（如 <span class="token number">192.168</span>.1.0 网段的广播地址是 <span class="token number">192.168</span>.1.255，仅向该网段内所有主机广播）

适用场景
	- 局域网设备发现（如打印机、摄像头的局域网自动识别）
	- 局域网内的通知推送（如会议室广播、校园网内的公告）
	- 小型局域网内的批量数据同步（无需维护目标主机列表）

前提说明
	- 运行多个接收端（同一局域网内的不同主机，或同一主机的不同端口）；
	- 先启动接收端，再启动发送端，所有接收端都会收到广播数据。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramPacket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramSocket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">InetAddress</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>charset<span class="token punctuation">.</span></span><span class="token class-name">StandardCharsets</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * UDP 广播发送端
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UdpBroadcastSender</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> broadcastPort <span class="token operator">=</span> <span class="token number">9999</span><span class="token punctuation">;</span> <span class="token comment">// 广播端口（需与接收端端口一致）</span>
        <span class="token class-name">String</span> sendData <span class="token operator">=</span> <span class="token string">&quot;UDP 广播数据：欢迎加入局域网通信！&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 广播数据</span>
        <span class="token class-name">String</span> broadcastIp <span class="token operator">=</span> <span class="token string">&quot;255.255.255.255&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 广播地址（有限广播：255.255.255.255）</span>

        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">DatagramSocket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 关键：设置 DatagramSocket 允许发送广播包（默认可能关闭）</span>
            socket<span class="token punctuation">.</span><span class="token function">setBroadcast</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 4. 封装广播数据报</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> sendBytes <span class="token operator">=</span> sendData<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">InetAddress</span> broadcastInetAddress <span class="token operator">=</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span>broadcastIp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">DatagramPacket</span> packet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>
                    sendBytes<span class="token punctuation">,</span>
                    sendBytes<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
                    broadcastInetAddress<span class="token punctuation">,</span>
                    broadcastPort
            <span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 5. 发送广播数据</span>
            socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>packet<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;广播数据已发送：&quot;</span> <span class="token operator">+</span> sendData<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;广播地址：&quot;</span> <span class="token operator">+</span> broadcastIp <span class="token operator">+</span> <span class="token string">&quot;，广播端口：&quot;</span> <span class="token operator">+</span> broadcastPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * UDP 广播接收端
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UdpBroadcastReceiver</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> broadcastPort <span class="token operator">=</span> <span class="token number">9999</span><span class="token punctuation">;</span> <span class="token comment">// 1. 绑定广播端口（必须与发送端的广播端口一致）</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 2. 数据缓冲区</span>

        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">DatagramSocket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramSocket</span><span class="token punctuation">(</span>broadcastPort<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;广播接收端已启动，绑定端口：&quot;</span> <span class="token operator">+</span> broadcastPort <span class="token operator">+</span> <span class="token string">&quot;，等待接收广播...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 3. 封装接收数据报</span>
            <span class="token class-name">DatagramPacket</span> packet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> buf<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 4. 阻塞接收广播数据</span>
            socket<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span>packet<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 5. 解析数据</span>
            <span class="token class-name">String</span> receiveData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>
                    packet<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token number">0</span><span class="token punctuation">,</span>
                    packet<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> senderIp <span class="token operator">=</span> packet<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getHostAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> senderPort <span class="token operator">=</span> packet<span class="token punctuation">.</span><span class="token function">getPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 6. 打印结果</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;收到广播数据：&quot;</span> <span class="token operator">+</span> receiveData<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;发送端 IP：&quot;</span> <span class="token operator">+</span> senderIp <span class="token operator">+</span> <span class="token string">&quot;，发送端端口：&quot;</span> <span class="token operator">+</span> senderPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="组播" tabindex="-1"><a class="header-anchor" href="#组播"><span>组播</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>介于单播和广播之间的通信模式，发送端向「组播地址」发送数据报，只有主动加入该组播组的主机才能接收数据，未加入的主机无法感知该数据报


关键信息
  - 组播地址：D 类 IP 地址，范围 <span class="token number">224.0</span>.0.0 ~ <span class="token number">239.255</span>.255.255
      - 保留地址：224.0.0.0 ~ <span class="token number">224.0</span>.0.255（用于本地局域网，路由器不转发，如224.0.0.1表示局域网内所有主机，224.0.0.2表示局域网内所有路由器）
      - 可用组播地址：224.0.1.0 ~ <span class="token number">239.255</span>.255.255（支持跨网段，需路由器开启 IGMP 协议<span class="token punctuation">(</span>互联网组管理协议<span class="token punctuation">)</span>）
  - Java 提供 MulticastSocket 类<span class="token punctuation">(</span>继承自 DatagramSocket<span class="token punctuation">)</span>，专门用于组播通信，支持「加入组播组」「离开组播组」操作


适用场景
  - 实时音视频推送（如直播、视频会议，仅订阅用户接收数据）
  - 批量数据分发（如股票行情、天气数据，仅关注该数据的主机接收）
  - 跨网段的组内通信（如企业分部之间的批量数据同步，需路由器支持 IGMP）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">DatagramPacket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">InetAddress</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">MulticastSocket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>charset<span class="token punctuation">.</span></span><span class="token class-name">StandardCharsets</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * UDP 组播发送端
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UdpMulticastSender</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. 组播配置：组播地址、组播端口</span>
        <span class="token class-name">String</span> multicastIp <span class="token operator">=</span> <span class="token string">&quot;224.0.0.100&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 局域网可用组播地址</span>
        <span class="token keyword">int</span> multicastPort <span class="token operator">=</span> <span class="token number">7777</span><span class="token punctuation">;</span>
        <span class="token comment">// 2. 组播数据</span>
        <span class="token class-name">String</span> sendData <span class="token operator">=</span> <span class="token string">&quot;UDP 组播数据：仅组内成员可见！&quot;</span><span class="token punctuation">;</span>

        <span class="token comment">// 3. MulticastSocket 无需绑定固定端口（自动分配随机端口）</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">MulticastSocket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MulticastSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 4. 封装组播数据报</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> sendBytes <span class="token operator">=</span> sendData<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">InetAddress</span> multicastInetAddress <span class="token operator">=</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span>multicastIp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">DatagramPacket</span> packet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>
                    sendBytes<span class="token punctuation">,</span>
                    sendBytes<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
                    multicastInetAddress<span class="token punctuation">,</span>
                    multicastPort
            <span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 5. 发送组播数据（无需额外配置，直接发送到组播地址）</span>
            socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>packet<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;组播数据已发送：&quot;</span> <span class="token operator">+</span> sendData<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;组播地址：&quot;</span> <span class="token operator">+</span> multicastIp <span class="token operator">+</span> <span class="token string">&quot;，组播端口：&quot;</span> <span class="token operator">+</span> multicastPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * UDP 组播接收端
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UdpMulticastReceiver</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. 组播配置：组播地址、组播端口</span>
        <span class="token class-name">String</span> multicastIp <span class="token operator">=</span> <span class="token string">&quot;224.0.0.100&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> multicastPort <span class="token operator">=</span> <span class="token number">7777</span><span class="token punctuation">;</span>
        <span class="token comment">// 2. 数据缓冲区</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 3. 绑定组播端口（必须与发送端的组播端口一致）</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">MulticastSocket</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MulticastSocket</span><span class="token punctuation">(</span>multicastPort<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 关键：加入组播组（才能接收该组的组播数据）</span>
            <span class="token class-name">InetAddress</span> multicastInetAddress <span class="token operator">=</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span>multicastIp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            socket<span class="token punctuation">.</span><span class="token function">joinGroup</span><span class="token punctuation">(</span>multicastInetAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;组播接收端已启动，加入组播组：&quot;</span> <span class="token operator">+</span> multicastIp <span class="token operator">+</span> <span class="token string">&quot;，绑定端口：&quot;</span> <span class="token operator">+</span> multicastPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;等待接收组播数据...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 4. 封装接收数据报</span>
            <span class="token class-name">DatagramPacket</span> packet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatagramPacket</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> buf<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 5. 阻塞接收组播数据</span>
            socket<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span>packet<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 6. 解析数据</span>
            <span class="token class-name">String</span> receiveData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>
                    packet<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token number">0</span><span class="token punctuation">,</span>
                    packet<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> senderIp <span class="token operator">=</span> packet<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getHostAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> senderPort <span class="token operator">=</span> packet<span class="token punctuation">.</span><span class="token function">getPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 7. 打印结果</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;收到组播数据：&quot;</span> <span class="token operator">+</span> receiveData<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;发送端 IP：&quot;</span> <span class="token operator">+</span> senderIp <span class="token operator">+</span> <span class="token string">&quot;，发送端端口：&quot;</span> <span class="token operator">+</span> senderPort<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 可选：离开组播组（不再接收该组数据）</span>
            socket<span class="token punctuation">.</span><span class="token function">leaveGroup</span><span class="token punctuation">(</span>multicastInetAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="框架入门" tabindex="-1"><a class="header-anchor" href="#框架入门"><span>框架入门</span></a></h2><h3 id="xml" tabindex="-1"><a class="header-anchor" href="#xml"><span>XML</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>XML（Extensible markup Language）可扩展标记语言
- 特点：与操作系统和开发语言无关
- 作用：数据交互、网站的配置文件
- 标签语法：<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>元素名 属性名<span class="token operator">=</span><span class="token string">&quot;属性值&quot;</span><span class="token operator">&gt;</span>元素内容<span class="token operator">&lt;</span>/元素名<span class="token operator">&gt;</span><span class="token variable">\`</span></span>

XML文档是由一系列标签组成。
	- 一个元素可以有多个属性值
	- 属性值必须双引号包裹
	- 必须有结束标签
	- 标签大小写敏感
	- 标签必须正确嵌套
	- 特殊字符需适用CDATA节点（<span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span><span class="token variable">\`</span></span>用<span class="token variable"><span class="token variable">\`</span><span class="token operator">&amp;</span>lt<span class="token punctuation">;</span><span class="token variable">\`</span></span>、<span class="token variable"><span class="token variable">\`</span><span class="token operator">&gt;</span><span class="token variable">\`</span></span>用<span class="token variable"><span class="token variable">\`</span><span class="token operator">&amp;</span>gt<span class="token punctuation">;</span><span class="token variable">\`</span></span>、<span class="token variable"><span class="token variable">\`</span>&quot;<span class="token variable">\`</span></span>用<span class="token variable"><span class="token variable">\`</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token variable">\`</span></span>、<span class="token variable"><span class="token variable">\`</span>&#39;<span class="token variable">\`</span></span>用<span class="token variable"><span class="token variable">\`</span><span class="token operator">&amp;</span>apos<span class="token punctuation">;</span><span class="token variable">\`</span></span>、<span class="token variable"><span class="token variable">\`</span><span class="token operator">&amp;</span><span class="token variable">\`</span></span>用<span class="token variable"><span class="token variable">\`</span><span class="token operator">&amp;</span>amp<span class="token punctuation">;</span><span class="token variable">\`</span></span>）



<span class="token comment">#### XML的解析</span>
Java中XML的四种解析方式：DOM、SAX、JDOM、DOM4J
DOM：将整个XML文档加载到内存，形成一棵DOM树，然后对树进行遍历和操作。适用于需要频繁操作文档的场景，但内存消耗大
SAX：基于事件驱动的解析方式，逐行读取XML文档，触发事件。适用于大型文档，内存消耗小，但只能顺序读取，不能随机访问
JDOM：第三方开源库，使用Java集合类，简化了XML的解析过程。但已不活跃，被DOM4J取代
DOM4J：第三方开源库，性能优异，功能强大，支持XPath。是许多开发者的首选

DOM：基于XML文档树结构的解析，解析XML文档的步骤：
	<span class="token number">1</span>. 创建解析器工厂对象 DocumentBuilderFactory
	<span class="token number">2</span>. 创建解析器对象 DocumentBuilder
	<span class="token number">3</span>. 通过 parse 方法获取 Document 对象
	<span class="token number">4</span>. 进行解析操作

DOM4J是 dom4j.org 出品的一个开源 XML 解析包。
  <span class="token number">1</span>、创建读取器SAXReader
  <span class="token number">2</span>、获取文档对象Document
  <span class="token number">3</span>、获取根节点
  <span class="token number">4</span>、进行解析操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>transform<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>transform<span class="token punctuation">.</span>dom<span class="token punctuation">.</span></span><span class="token class-name">DOMSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>transform<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span><span class="token class-name">StreamResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>parsers<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>w3c<span class="token punctuation">.</span>dom<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XMLParser</span> <span class="token punctuation">{</span>
  	<span class="token comment">// 解析DOM读取内容</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">parseXMLWithDOM</span><span class="token punctuation">(</span><span class="token class-name">String</span> filePath<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. 创建DocumentBuilderFactory</span>
        <span class="token class-name">DocumentBuilderFactory</span> factory <span class="token operator">=</span> <span class="token class-name">DocumentBuilderFactory</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 安全设置，防止XXE攻击</span>
        factory<span class="token punctuation">.</span><span class="token function">setFeature</span><span class="token punctuation">(</span><span class="token string">&quot;http://apache.org/xml/features/disallow-doctype-decl&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setFeature</span><span class="token punctuation">(</span><span class="token string">&quot;http://xml.org/sax/features/external-general-entities&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setFeature</span><span class="token punctuation">(</span><span class="token string">&quot;http://xml.org/sax/features/external-parameter-entities&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setFeature</span><span class="token punctuation">(</span><span class="token string">&quot;http://apache.org/xml/features/nonvalidating/load-external-dtd&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setXIncludeAware</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setExpandEntityReferences</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2. 创建DocumentBuilder</span>
        <span class="token class-name">DocumentBuilder</span> builder <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">newDocumentBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 3. 解析XML文件</span>
        <span class="token class-name">Document</span> document <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 4. 标准化文档</span>
        document<span class="token punctuation">.</span><span class="token function">getDocumentElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 5. 获取根元素</span>
        <span class="token class-name">Element</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getDocumentElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;根元素: &quot;</span> <span class="token operator">+</span> root<span class="token punctuation">.</span><span class="token function">getNodeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 6. 遍历节点</span>
        <span class="token class-name">NodeList</span> nodeList <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;book&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nodeList<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> node <span class="token operator">=</span> nodeList<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span><span class="token function">getNodeType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">Node</span><span class="token punctuation">.</span><span class="token constant">ELEMENT_NODE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Element</span> element <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Element</span><span class="token punctuation">)</span> node<span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;书名: &quot;</span> <span class="token operator">+</span> element<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTextContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

  	<span class="token comment">// 用 dom 创建 xml</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">domCreateXML</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">DocumentBuilderFactory</span> factory <span class="token operator">=</span> <span class="token class-name">DocumentBuilderFactory</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DocumentBuilder</span> builder <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">newDocumentBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Document</span> document <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">newDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 创建根元素</span>
        <span class="token class-name">Element</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;bookstore&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 创建子元素</span>
        <span class="token class-name">Element</span> book <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;book&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;COOKING&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Element</span> title <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        title<span class="token punctuation">.</span><span class="token function">setTextContent</span><span class="token punctuation">(</span><span class="token string">&quot;Everyday Italian&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 写入文件</span>
        <span class="token class-name">TransformerFactory</span> tf <span class="token operator">=</span> <span class="token class-name">TransformerFactory</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Transformer</span> transformer <span class="token operator">=</span> tf<span class="token punctuation">.</span><span class="token function">newTransformer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        transformer<span class="token punctuation">.</span><span class="token function">setOutputProperty</span><span class="token punctuation">(</span><span class="token class-name">OutputKeys</span><span class="token punctuation">.</span><span class="token constant">INDENT</span><span class="token punctuation">,</span> <span class="token string">&quot;yes&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">DOMSource</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DOMSource</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StreamResult</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StreamResult</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;src/output.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        transformer<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">XMLParser</span> parser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 使用相对路径，或者从命令行参数获取路径</span>
            <span class="token class-name">String</span> filePath <span class="token operator">=</span> <span class="token string">&quot;src/books.xml&quot;</span><span class="token punctuation">;</span>
            parser<span class="token punctuation">.</span><span class="token function">parseXMLWithDOM</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

            parser<span class="token punctuation">.</span><span class="token function">domCreateXML</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="maven" tabindex="-1"><a class="header-anchor" href="#maven"><span>Maven</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>坐标
	- Maven 中的坐标是资源<span class="token punctuation">(</span>jar<span class="token punctuation">)</span>的唯一标识，通过该坐标可以唯一定位资源位置。
	- 使用坐标来定义项目或引用项目中需要的依赖。
	- 坐标主要组成：
			- groupId：项目隶属组织名称<span class="token punctuation">(</span>通常是域名反写，如 com.willy<span class="token punctuation">)</span>
			- artifactId：项目名称<span class="token punctuation">(</span>通常是模块名称，如 order-service、goods-service<span class="token punctuation">)</span>
			- version：项目版本号
						- SNAPSHOT：快照版本，功能不稳定、尚在开发中
						- RELEASE：发行版本，功能趋于稳定、当前更新停止

依赖配置
	- 依赖配置信息搜索地址：https://mvnrepository.com/
	<span class="token number">1</span>. 在 pom.xml 中编写 <span class="token operator">&lt;</span>dependencies<span class="token operator">&gt;</span> 标签
	<span class="token number">2</span>. 在 <span class="token operator">&lt;</span>dependencies<span class="token operator">&gt;</span> 标签中使用 <span class="token operator">&lt;</span>dependency<span class="token operator">&gt;</span> 引入坐标
	<span class="token number">3</span>. 定义坐标 groupId、artifactId、version
	<span class="token number">4</span>. 点击刷新按钮，引入最新加入的坐标<span class="token punctuation">(</span>一般更改后没有引入最新的，依赖项会出现红色下划线<span class="token punctuation">)</span>


maven 有三套相互独立的生命周期：
	- clean：清理工作
	- default：核心工作，如编译、测试、打包、安装、部署等
	- site：生成报告、发布站点等
	注意：在同一套生命周期中，当运行后面的阶段时，前面的阶段也会执行。

	- clean<span class="token punctuation">(</span>清理<span class="token punctuation">)</span>、compile<span class="token punctuation">(</span>编译<span class="token punctuation">)</span>、test<span class="token punctuation">(</span>测试<span class="token punctuation">)</span>、package<span class="token punctuation">(</span>打包<span class="token punctuation">)</span>、install<span class="token punctuation">(</span>安装<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Source: https://mvnrepository.com/artifact/org.springframework/spring-context --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-context<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>6.1.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>compile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- 排除依赖 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.micrometer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>micrometer-observation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- junit依赖--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.junit.jupiter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit-jupiter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.9.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="依赖没下载成功问题" tabindex="-1"><a class="header-anchor" href="#依赖没下载成功问题"><span>依赖没下载成功问题</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>由于网络原因，依赖没有下载完整导致在 maven 仓库中生成 xxx.lastUpdate 文件，该文件不删除，不会再重新下载。
解决方案：
	<span class="token number">1</span>. 根据 maven 依赖的坐标，找到仓库中对应的 xxx.lastUpdate 文件删除，再重新加载项目依赖
	<span class="token number">2</span>. 通过命令 <span class="token variable"><span class="token variable">\`</span>$ del /s *.lastUpdate<span class="token variable">\`</span></span> 批量递归删除指令目录下的 xxx.lastUpdate 文件，再重新加载项目依赖
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单元测试-junit" tabindex="-1"><a class="header-anchor" href="#单元测试-junit"><span>单元测试 Junit</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- Junit 单元测试：测试类中方法的正确性

Junit 单元测试的优点：
	- 测试代码与应用程序代码分开，便于维护
  - 可以自动生成测试报告<span class="token punctuation">(</span>通过:绿色、失败:红色<span class="token punctuation">)</span>
  - 一个测试方法执行失败，不会影响其他测试方法
  - 通过断言检测方法结果是否与预期一致，从而判断

Junit 单元测试命名规范：
	- 类：XxxxTest
  - 方法：public void <span class="token function-name function">testXxx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>


依赖范围：依赖的jar包，默认情况下可在任何地方使用，可通过 <span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>scope<span class="token operator">&gt;</span><span class="token operator">&lt;</span>scope<span class="token operator">&gt;</span><span class="token variable">\`</span></span>设置其作用范围
	- 主程序范围有效<span class="token punctuation">(</span>main文件夹范围内<span class="token punctuation">)</span>
	- 测试程序范围有效<span class="token punctuation">(</span>test文件夹范围内<span class="token punctuation">)</span>
	- 是否参与打包运行<span class="token punctuation">(</span>package指令范围内<span class="token punctuation">)</span>

      scope值	主程序	测试程序	打包<span class="token punctuation">(</span>运行<span class="token punctuation">)</span>	范例
      compile		Y			Y				Y					log4j
      <span class="token builtin class-name">test</span>			-			Y				-					junit
      provided	Y			Y				-					servlet-api
      runtime		-			Y				Y					jdbc驱动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reids" tabindex="-1"><a class="header-anchor" href="#reids"><span>Reids</span></a></h2><h2 id="ssm" tabindex="-1"><a class="header-anchor" href="#ssm"><span>SSM</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Spring
Spring MVC
Mybatis
Sping Cloud

<span class="token function">java</span> guide———— github项目
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spring-boot" tabindex="-1"><a class="header-anchor" href="#spring-boot"><span>Spring Boot</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>静态资源存放位置：resources/static

@Response注解的作用：
		- 将 controller 方法的返回值直接写入 HTTP 响应体
		- 如果是对象或集合，会先转为 json 再响应
		- @RestController <span class="token operator">=</span> @Controller + @ResponseBody

三层架构：dao数据访问 -<span class="token operator">&gt;</span> service逻辑处理 -<span class="token operator">&gt;</span> controller处理请求
	- controller：控制层，接收前端发送请求，对请求做处理，并响应数据
	- service：业务逻辑层，处理具体的业务逻辑
	- dao：数据访问层<span class="token punctuation">(</span>Data Access Object<span class="token punctuation">)</span><span class="token punctuation">(</span>持久层<span class="token punctuation">)</span>，负责数据访问操作-增删改查

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分层耦合-ioc-di" tabindex="-1"><a class="header-anchor" href="#分层耦合-ioc-di"><span>分层耦合 IOC/DI</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- 控制反转<span class="token punctuation">(</span>IOC - Inversion Of Control<span class="token punctuation">)</span> 对象的创建控制权由程序自身转移到外部<span class="token punctuation">(</span>容器<span class="token punctuation">)</span>，这种思想称为控制反转。
- 依赖注入<span class="token punctuation">(</span>DI - Dependency Injection<span class="token punctuation">)</span> 容器为应用程序提供运行时所依赖的资源，称为依赖注入。
- Bean对象：IOC容器中创建、管理的对象，称为 Bean。

实现分层解耦思路：
	- 将项目中的类转移给 IOC 容器管理：@Component
	- 应用程序运行时需要什么对象，直接依赖容器为其提供（从IOC容器中找到对应的bean并依赖注入）：@Autowired


<span class="token comment">#### IOC</span>
把某个对象交给 IOC 容器管理：
	- @Component：声明bean的基础注解，不属于以下三类时用此注解
	- @Controller：标注在控制层类上，衍生注解
	- @Service：标注在业务层类上，衍生注解
	- @Repository：标注在数据访问层类上<span class="token punctuation">(</span>与mybatis整合<span class="token punctuation">)</span>，衍生注解

注意：声明 bean 的注解想生效，需要被组件扫描注解 @ComponentScan 扫描，该注解虽然没有显示配置，但实际已包含在启动类声明注解 @SpringBootApplication 中，默认扫描范围是启动类所在包及其子包（所以启动类需要在根目录下）


<span class="token comment">#### DI</span>
依赖注入的注解
	- @Autowired 注解默认是按照类型进行注入，所以如果存在多个相同类型的 bean 将会报错
	- 如果同类型的 bean 存在多个：
			- @Primary
			- @Autowired + @Qualifier
			- @Resource

@Resource 与 @Autowired 区别
	- @Autowired 是 Spring 提供的注解，@Resource 是 JavaEE 规范提供
	- @Autowired 默认按类型注入，@Resource 默认按名称注入
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">UserService</span> userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 紧耦合</span>

<span class="token doc-comment comment">/**
 * 方式1：属性注入
 * 优点：代码简洁
 * 缺点：隐藏类之间的依赖关系、可能破坏类的封装性
 */</span>
<span class="token annotation punctuation">@Autowired</span> <span class="token comment">// 应用程序运行时，会自动查询该类型的 bean 对象，并赋值给该成员变量</span>
<span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 方式2：构造方法注入
 * 优点：明确类的依赖关系，提高代码安全性
 * 缺点：代码繁杂，如果构造参数过多，可能导致构造函数臃肿
 * 注意：如果只有一个构造方法，则 @Autowired 可省略
 */</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>
<span class="token annotation punctuation">@Autowired</span> <span class="token comment">// 如果当前类中只有一个构造方法，则 @Autowired 可省略</span>
<span class="token keyword">public</span> <span class="token class-name">UserController</span><span class="token punctuation">(</span><span class="token class-name">UserService</span> userService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userService <span class="token operator">=</span> userService<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 方式3：setter 注入
 * 优点：保持类的封装性
 * 缺点：需要额外设置 setter 方法
 */</span>
<span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>
<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUserService</span><span class="token punctuation">(</span><span class="token class-name">UserService</span> userService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userService <span class="token operator">=</span> userService<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+x+'" alt="image-20260123093708648"></p><p><img src="'+D+`" alt="image-20260123093813559"></p><h2 id="数据库存储" tabindex="-1"><a class="header-anchor" href="#数据库存储"><span>数据库存储</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>NoSQL与SQ
CAP定理
RDBMS
MongoDB语法
指令
监控与GUI
MongoDb驱动
Mongoose应用
数据库创建
集合增删改查
文档增删改查
数据库查询
高级查询操作
通道查询
多条件查询
反向筛选
索引处理
aggregate聚合管道
validation验证
population联表
middleware中间件处理
查询ERROR类二次封装
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,353),A=[T];function O(M,C){return s(),a("div",null,A)}const E=n(I,[["render",O],["__file","JAVA.html.vue"]]),L=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF%E5%9F%BA%E7%A1%80/JAVA.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willysliang","CreateTime":"2020-11-18T13:24:51.000Z","Modifier":"willysliang","ModifiedTime":"2025-12-22T15:15:52.000Z","Description":"JAVA"},"headers":[{"level":2,"title":"JAVA","slug":"java","link":"#java","children":[]},{"level":2,"title":"基础语法","slug":"基础语法","link":"#基础语法","children":[{"level":3,"title":"java编译","slug":"java编译","link":"#java编译","children":[]},{"level":3,"title":"idea快捷键","slug":"idea快捷键","link":"#idea快捷键","children":[]},{"level":3,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":3,"title":"关键字","slug":"关键字","link":"#关键字","children":[]},{"level":3,"title":"字面量","slug":"字面量","link":"#字面量","children":[]},{"level":3,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":3,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[]},{"level":3,"title":"数据内存划分","slug":"数据内存划分","link":"#数据内存划分","children":[]},{"level":3,"title":"类型转换","slug":"类型转换","link":"#类型转换","children":[]},{"level":3,"title":"包装类","slug":"包装类","link":"#包装类","children":[]},{"level":3,"title":"导入包","slug":"导入包","link":"#导入包","children":[]},{"level":3,"title":"接收输入Scanner","slug":"接收输入scanner","link":"#接收输入scanner","children":[]},{"level":3,"title":"程序的三大结构","slug":"程序的三大结构","link":"#程序的三大结构","children":[]},{"level":3,"title":"异常处理","slug":"异常处理","link":"#异常处理","children":[]},{"level":3,"title":"字符串","slug":"字符串","link":"#字符串","children":[]},{"level":3,"title":"数组 Arrays","slug":"数组-arrays","link":"#数组-arrays","children":[]}]},{"level":2,"title":"常用API","slug":"常用api","link":"#常用api","children":[{"level":3,"title":"系统 System","slug":"系统-system","link":"#系统-system","children":[]},{"level":3,"title":"运行 Runtime","slug":"运行-runtime","link":"#运行-runtime","children":[]},{"level":3,"title":"高精度数值 BigDecimal","slug":"高精度数值-bigdecimal","link":"#高精度数值-bigdecimal","children":[]},{"level":3,"title":"枚举类型","slug":"枚举类型","link":"#枚举类型","children":[]},{"level":3,"title":"时间 Date","slug":"时间-date","link":"#时间-date","children":[]},{"level":3,"title":"数组 Arrays","slug":"数组-arrays-1","link":"#数组-arrays-1","children":[]},{"level":3,"title":"Lambda表达式","slug":"lambda表达式","link":"#lambda表达式","children":[]}]},{"level":2,"title":"面向对象","slug":"面向对象","link":"#面向对象","children":[{"level":3,"title":"面向对象思想","slug":"面向对象思想","link":"#面向对象思想","children":[]},{"level":3,"title":"类与对象的区别","slug":"类与对象的区别","link":"#类与对象的区别","children":[]},{"level":3,"title":"类图","slug":"类图","link":"#类图","children":[]},{"level":3,"title":"类的基础","slug":"类的基础","link":"#类的基础","children":[]},{"level":3,"title":"特征-封装","slug":"特征-封装","link":"#特征-封装","children":[]},{"level":3,"title":"特征-继承","slug":"特征-继承","link":"#特征-继承","children":[]},{"level":3,"title":"Object类","slug":"object类","link":"#object类","children":[]},{"level":3,"title":"抽象类","slug":"抽象类","link":"#抽象类","children":[]},{"level":3,"title":"特征-多态","slug":"特征-多态","link":"#特征-多态","children":[]},{"level":3,"title":"接口 interface","slug":"接口-interface","link":"#接口-interface","children":[]},{"level":3,"title":"内部类","slug":"内部类","link":"#内部类","children":[]},{"level":3,"title":"反射","slug":"反射","link":"#反射","children":[]},{"level":3,"title":"动态代理","slug":"动态代理","link":"#动态代理","children":[]},{"level":3,"title":"注解","slug":"注解","link":"#注解","children":[]}]},{"level":2,"title":"集合","slug":"集合","link":"#集合","children":[{"level":3,"title":"单列集合 Collection","slug":"单列集合-collection","link":"#单列集合-collection","children":[]},{"level":3,"title":"双列集合 Map","slug":"双列集合-map","link":"#双列集合-map","children":[]},{"level":3,"title":"Iterator迭代器","slug":"iterator迭代器","link":"#iterator迭代器","children":[]},{"level":3,"title":"集合遍历","slug":"集合遍历","link":"#集合遍历","children":[]},{"level":3,"title":"泛型","slug":"泛型","link":"#泛型","children":[]}]},{"level":2,"title":"IO流","slug":"io流","link":"#io流","children":[{"level":3,"title":"IO流层次","slug":"io流层次","link":"#io流层次","children":[]},{"level":3,"title":"File类 - 访问文件","slug":"file类-访问文件","link":"#file类-访问文件","children":[]},{"level":3,"title":"字节流 - FileInputStream","slug":"字节流-fileinputstream","link":"#字节流-fileinputstream","children":[]},{"level":3,"title":"字符流 - FileReader","slug":"字符流-filereader","link":"#字符流-filereader","children":[]},{"level":3,"title":"缓冲流 - BufferedReader","slug":"缓冲流-bufferedreader","link":"#缓冲流-bufferedreader","children":[]},{"level":3,"title":"序列化","slug":"序列化","link":"#序列化","children":[]}]},{"level":2,"title":"多线程 & JUC","slug":"多线程-juc","link":"#多线程-juc","children":[{"level":3,"title":"多线程概念","slug":"多线程概念","link":"#多线程概念","children":[]},{"level":3,"title":"线程的创建方式","slug":"线程的创建方式","link":"#线程的创建方式","children":[]},{"level":3,"title":"线程的同步与锁","slug":"线程的同步与锁","link":"#线程的同步与锁","children":[]},{"level":3,"title":"【典例】售卖电影票","slug":"【典例】售卖电影票","link":"#【典例】售卖电影票","children":[]},{"level":3,"title":"生产者-消费者模式(等待唤醒机制)","slug":"生产者-消费者模式-等待唤醒机制","link":"#生产者-消费者模式-等待唤醒机制","children":[]},{"level":3,"title":"线程池","slug":"线程池","link":"#线程池","children":[]}]},{"level":2,"title":"Socket","slug":"socket","link":"#socket","children":[{"level":3,"title":"响应多个客户端","slug":"响应多个客户端","link":"#响应多个客户端","children":[]},{"level":3,"title":"基于 UDP 的 Socket","slug":"基于-udp-的-socket","link":"#基于-udp-的-socket","children":[]}]},{"level":2,"title":"框架入门","slug":"框架入门","link":"#框架入门","children":[{"level":3,"title":"XML","slug":"xml","link":"#xml","children":[]},{"level":3,"title":"Maven","slug":"maven","link":"#maven","children":[]},{"level":3,"title":"单元测试 Junit","slug":"单元测试-junit","link":"#单元测试-junit","children":[]}]},{"level":2,"title":"Reids","slug":"reids","link":"#reids","children":[]},{"level":2,"title":"SSM","slug":"ssm","link":"#ssm","children":[]},{"level":2,"title":"Spring Boot","slug":"spring-boot","link":"#spring-boot","children":[]},{"level":2,"title":"数据库存储","slug":"数据库存储","link":"#数据库存储","children":[]}],"git":{"updatedTime":1769153059000,"contributors":[{"name":"willy","email":"willysliang@qq.com","commits":10},{"name":"willy","email":"willysliang","commits":1}]},"filePathRelative":"后端基础/JAVA.md"}');export{E as comp,L as data};
