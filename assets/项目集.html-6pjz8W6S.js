import{_ as e,r as o,o as l,c,d as n,e as s,a as p,b as a}from"./app-Bvx-HY_0.js";const i="/static_blog/assets/image-20220913160738220-Cy5BO3ml.png",u="/static_blog/assets/image-20220913160711577-CsIeVAMh.png",r="/static_blog/assets/image-20220913160644118-B-3nrKa-.png",k="/static_blog/assets/image-20220913160758926-BeNayuBQ.png",d="/static_blog/assets/20220913222939-BP1RwVHV.jpg",v="/static_blog/assets/image-20220913164119371-DQny3ens.png",m="/static_blog/assets/image-20221201112358756-CO3Lf19B.png",b="/static_blog/assets/image-20230519132515589-D_O_g90n.png",g={},y=a(`<h2 id="项目集" tabindex="-1"><a class="header-anchor" href="#项目集"><span>项目集</span></a></h2><h2 id="前端代码规范" tabindex="-1"><a class="header-anchor" href="#前端代码规范"><span>前端代码规范</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 前端代码规范</span>
<span class="token comment">## 1. 引用组件顺序</span>
    - 先引用外部组件库, 再引用当前组件块级组件, 然后是 common 里的公共函数库最后是 css 样式
    <span class="token function">import</span> * as React from <span class="token string">&#39;react&#39;</span>
    <span class="token function">import</span> <span class="token punctuation">{</span> Dropdown, Menu, Icon <span class="token punctuation">}</span> from <span class="token string">&#39;antd&#39;</span>
    <span class="token function">import</span> Header from <span class="token string">&#39;./Header&#39;</span>
    <span class="token function">import</span> toast from <span class="token string">&#39;common/toast&#39;</span>
    <span class="token function">import</span> <span class="token string">&#39;./index.less&#39;</span>


<span class="token comment">## 2. 数组、对象</span>
    对象属性名不需要加引号；
    对象以缩进的形式书写，不要写在一行；
    数组最后不要有逗号。
    对象最后要有逗号


<span class="token comment">## 3. 命名规范</span>
    类名: 大驼峰式风格，字母和数字，例如：AbcTest。禁止汉字、特殊符号，禁止非大驼峰式风格。
    函数名: 小驼峰式风格，字母和数字，例如：abcTest。禁止汉字、特殊符号，禁止非小驼峰式风格，例如snake_case等。
    变量名: 同函数名。
    常量: 全大写风格，大写字母、数字和下划线，单词之间以下划线分隔，例如：ABC_TEST。禁止汉字、特殊符号、小写字母。
    使用 onXxx 形式作为 props 中用于回调的属性名称。
        interface IProps <span class="token punctuation">{</span>
          onClose?: <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> void<span class="token punctuation">;</span>
          onOk?: <span class="token punctuation">(</span>item: Record<span class="token operator">&lt;</span>string, any<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> void<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    组件内的事件函数使用 handle 开头尾，handleCheckBtn。
    使用 withXxx 形式的词作为高阶组件的名称。
    接口命名前面带上 I 表示 interface：interface IProps <span class="token punctuation">{</span><span class="token punctuation">}</span>


<span class="token comment">## 4. interface声明顺序</span>
    日常用到比较多的是四种，只读参数放第一位，必选参数第二位，可选参数次之，不确定参数放最后
        interface iProps <span class="token punctuation">{</span>
          <span class="token builtin class-name">readonly</span> x: number<span class="token punctuation">;</span>
          <span class="token builtin class-name">readonly</span> y: number<span class="token punctuation">;</span>
          name: string<span class="token punctuation">;</span>
          age: number<span class="token punctuation">;</span>
          height?: number<span class="token punctuation">;</span>
          <span class="token punctuation">[</span>propName: string<span class="token punctuation">]</span>: any<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


<span class="token comment">## 5. ts好用的相关工具泛型</span>
    - Record<span class="token operator">&lt;</span>string,any<span class="token operator">&gt;</span> 用这个来声明对象结构的类型
    - Partial 作用是将传入的属性变为可选项
    - Readonly 作用是将传入的属性变为变成只读
    - Required 的作用是将传入的属性变为必选项
		- keyof 提取键名
        interface iPeople <span class="token punctuation">{</span> name: string<span class="token punctuation">;</span> age: number <span class="token punctuation">}</span>
        <span class="token builtin class-name">type</span> T <span class="token operator">=</span> keyof iPeople // -<span class="token operator">&gt;</span> <span class="token string">&quot;name&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;age&quot;</span>
     - <span class="token keyword">in</span>
         <span class="token builtin class-name">type</span> Keys <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;b&quot;</span>
         <span class="token builtin class-name">type</span> Obj <span class="token operator">=</span>  <span class="token punctuation">{</span> <span class="token punctuation">[</span>p <span class="token keyword">in</span> Keys<span class="token punctuation">]</span>: any <span class="token punctuation">}</span> // -<span class="token operator">&gt;</span> <span class="token punctuation">{</span> a: any, b: any <span class="token punctuation">}</span>


<span class="token comment">## 6. 其他规范</span>
    不要使用 var 声明变量
    不会被修改的变量使用 const 声明
    去除声明但未被引用的代码
    禁止在代码里使用 debug
    不允许有空的代码块


<span class="token comment">## 7. 数据格式转换</span>
    - 把字符串转整型可以使用+号
        <span class="token builtin class-name">let</span> maxPrice <span class="token operator">=</span> +form.maxPrice.value
        <span class="token builtin class-name">let</span> maxPrice <span class="token operator">=</span> Number<span class="token punctuation">(</span>form.maxPrice.value<span class="token punctuation">)</span>
    - 转成 boolean 值用<span class="token operator">!</span><span class="token operator">!</span>
        <span class="token builtin class-name">let</span> mobile <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>ua.match<span class="token punctuation">(</span>/iPhone<span class="token operator">|</span>iPad<span class="token operator">|</span>Android<span class="token operator">|</span>iPod<span class="token operator">|</span>Windows Phone/<span class="token punctuation">)</span>


<span class="token comment">## 8. 组件嵌套过深</span>
		组件一般不要超过三层,最多四层,层级过深可能会导致数据传递过深，在做一些颗粒度比较细的操作时，处理起来较为繁琐，可以使用 redux 等状态管理工具替代。

<span class="token comment">## 9. 同时开发，数据请求 api 目录 git 冲突目录方案</span>
    在 api 目录下新建一个目录，目录对应一级 tab,这个目录内放置一个 index.js ，最后把二级 tab 组件所使用的 api 请求都在这个 index.js 内引入。


<span class="token comment">## 10. 业务代码里面的异步请求需要 try catch</span>
    - ajax 请求，使用 try catch，错误提示后端返回,并且做一些失败后的状态操作例如进入列表页，我们需要一个 loading 状态，然后去请求数据,可是失败之后，也需要把 loading 状态去掉,把 loading 隐藏的代码就写在 finally 里面
        getStudentList <span class="token operator">=</span> async <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
          try <span class="token punctuation">{</span>
            this.setState<span class="token punctuation">(</span><span class="token punctuation">{</span>
              loading: true,
              isEmpty: false,
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            await getStudentList<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span> catch <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            // TODO
            console.log<span class="token punctuation">(</span>e<span class="token punctuation">)</span>
          <span class="token punctuation">}</span> finally <span class="token punctuation">{</span>
            //  失败之后的一些兜底操作
            this.setState<span class="token punctuation">(</span><span class="token punctuation">{</span>
              loading: false,
              isEmpty: true,
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>


<span class="token comment">## 11. setState有三种用法</span>
      // 对象
      this.setState<span class="token punctuation">(</span><span class="token punctuation">{</span> a: <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      // 函数，一般是用于在setState之前做一些操作
      this.setState<span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
          // TODO
          console.log<span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
          <span class="token builtin class-name">return</span> <span class="token punctuation">{</span>
            a: <span class="token number">300</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>
      // 第二个参数，一般是用于在setState之后做一些操作
      this.setState<span class="token punctuation">(</span><span class="token punctuation">{</span>
        a:300
      <span class="token punctuation">}</span>, <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        // TODO
      <span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">## 12. setState可能是同步的</span>
    setState 在react里的合成事件和钩子函数中是“异步”的。
    setState 在原生事件和 setTimeout 中是同步的。


<span class="token comment">## 13. 在 componentWillUnmount 里面去除副作用的函数</span>
    清除 EventListener
    中止数据请求
    清除定时器


<span class="token comment">## 14. 防止 xss 攻击</span>
    input，textarea 等标签，不要直接把 html 文本直接渲染在页面上,使用 xssb 等过滤之后再输出到标签上
        <span class="token function">import</span> <span class="token punctuation">{</span> html2text <span class="token punctuation">}</span> from <span class="token string">&#39;xss&#39;</span><span class="token punctuation">;</span>
        <span class="token function-name function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token operator">&lt;</span>div
            <span class="token assign-left variable">dangerouslySetInnerHTML</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              __html: html2text<span class="token punctuation">(</span>htmlContent<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span>
          /<span class="token operator">&gt;</span>
        <span class="token punctuation">}</span>


<span class="token comment">## 15. 如果需要优化 react 性能（一般用不到）</span>
    - 如果组件的 state 和 props 都是简单类型，可以继承 PureComponent 而不是 Component
        <span class="token function">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> from <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
        class Message extends PureComponent <span class="token punctuation">{</span>
          <span class="token function-name function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin class-name">return</span> <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span>this.state.message<span class="token punctuation">}</span><span class="token operator">&lt;</span>/span<span class="token operator">&gt;</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    - 重写 shouldComponentUpdate 方法,在 shouldComponentUpdate 里面根据 state,props 是否有改变来判断是否需要重新渲染.如果组件继承了 PureComponent 就没必要再重写 shouldComponentUpdate 方法
        <span class="token function">import</span> <span class="token punctuation">{</span> isReactPropsEqual, isReactStateEqual <span class="token punctuation">}</span> from <span class="token string">&#39;@fe/common/lib/equal&#39;</span><span class="token punctuation">;</span>
        shouldComponentUpdate<span class="token punctuation">(</span>nextProps:IProps, nextState:IState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>isReactStateEqual<span class="token punctuation">(</span>nextState,this.state<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> isReactPropsEqual<span class="token punctuation">(</span>nextProps,this.props<span class="token punctuation">))</span> <span class="token punctuation">{</span>
                <span class="token builtin class-name">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token builtin class-name">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


<span class="token comment">## 16. Event 事件对象类型</span>
    ClipboardEvent<span class="token operator">&lt;</span>T <span class="token operator">=</span> Element<span class="token operator">&gt;</span> 剪贴板事件对象
    DragEvent<span class="token operator">&lt;</span>T <span class="token operator">=</span> Element<span class="token operator">&gt;</span> 拖拽事件对象
    ChangeEvent<span class="token operator">&lt;</span>T <span class="token operator">=</span> Element<span class="token operator">&gt;</span> Change 事件对象
    KeyboardEvent<span class="token operator">&lt;</span>T <span class="token operator">=</span> Element<span class="token operator">&gt;</span> 键盘事件对象
    MouseEvent<span class="token operator">&lt;</span>T <span class="token operator">=</span> Element<span class="token operator">&gt;</span> 鼠标事件对象
    TouchEvent<span class="token operator">&lt;</span>T <span class="token operator">=</span> Element<span class="token operator">&gt;</span> 触摸事件对象
    WheelEvent<span class="token operator">&lt;</span>T <span class="token operator">=</span> Element<span class="token operator">&gt;</span> 滚轮事件对象
    AnimationEvent<span class="token operator">&lt;</span>T <span class="token operator">=</span> Element<span class="token operator">&gt;</span> 动画事件对象
    TransitionEvent<span class="token operator">&lt;</span>T <span class="token operator">=</span> Element<span class="token operator">&gt;</span> 过渡事件对象
        <span class="token function">import</span> <span class="token punctuation">{</span> MouseEvent <span class="token punctuation">}</span> from <span class="token string">&#39;react&#39;</span>
        interface IProps <span class="token punctuation">{</span>
          onClick<span class="token punctuation">(</span>event: MouseEvent<span class="token operator">&lt;</span>HTMLDivElement<span class="token operator">&gt;</span><span class="token punctuation">)</span>: void
        <span class="token punctuation">}</span>



<span class="token comment">## 17. 使用私有属性取代state状态</span>
    - 对于一些不需要控制ui的状态属性，我们可以直接绑到this上， 即私有属性，没有必要弄到this.state上，不然会触发渲染机制，造成性能浪费 例如请求翻页数据的时候,我们都会有个变量。
        // bad
        state: IState <span class="token operator">=</span> <span class="token punctuation">{</span>
          pageNo:1,
          pageSize:10
        <span class="token punctuation">}</span>
        // good 
        queryParams:Record<span class="token operator">&lt;</span>string,any<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
          pageNo:1,
          pageSize:10
        <span class="token punctuation">}</span>


<span class="token comment">## 18. 代码细粒度的思考</span>
我们在写组件或者函数的的时候，工具函数和业务逻辑抽离，表单校验和业务抽离、事件函数和业务抽离，ajax和业务抽离。
例如有些页面是通过location.href跳转的，我们有些业务逻辑等都是放到didmountMount,但是后期改需求，可能要用react-router进行跳转，可能要改的逻辑就会很多了，所以函数抽离出来，需求更新就少改一点代码。
如果还不确定如何划分函数的细粒度，我有个建议。使用过两次以上的代码，要抽离组件或者函数，两次的可以不用


<span class="token comment">## 19. a标签安全问题</span>
使用a标签打开一个新窗口过程中的安全问题。新页面中可以使用window.opener来控制原始页面。如果新老页面同域，那么在新页面中可以任意操作原始页面。如果是不同域，新页面中依然可以通过window.opener.location，访问到原始页面的location对象
在带有target<span class="token operator">=</span><span class="token string">&quot;_blank&quot;</span>的a标签中，加上rel<span class="token operator">=</span><span class="token string">&quot;noopener&quot;</span>属性。如果使用window.open的方式打开页面，将opener对象置为空。
    var newWindow <span class="token operator">=</span> window.open<span class="token punctuation">(</span><span class="token punctuation">)</span>
    newWindow.opener <span class="token operator">=</span> null


<span class="token comment">## 20. 使用 void 0 替代undefined</span>
    clearSessioin <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      req.session.userName <span class="token operator">=</span> undefined
      req.session.userName <span class="token operator">=</span> void <span class="token number">0</span>
    <span class="token punctuation">}</span>


<span class="token comment">## 21. 前端不要操作cookie</span>
在做一些前后端鉴权的时候，后端应该开启domain,secure,httponly严格模式，禁止前端操作cookie，防止csrf攻击。


<span class="token comment">## 22. 不要使用renderXXX,要使用函数式组件</span>
发现团队一些小伙伴为了减少render函数里面的代码量，会把一些元素拆分到函数里面。
		// bad
		const renderHeader <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      <span class="token builtin class-name">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>div /<span class="token operator">&gt;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    // good
    <span class="token keyword">function</span> RenderBody<span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=</span>  <span class="token punctuation">{</span>
      <span class="token builtin class-name">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>div /<span class="token operator">&gt;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    class Component extends React.Component<span class="token operator">&lt;</span>iProps, iState<span class="token operator">&gt;</span><span class="token punctuation">{</span>  
      <span class="token function-name function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        return<span class="token punctuation">(</span>
          <span class="token operator">&lt;&gt;</span>
            renderHeader<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token operator">&lt;</span>RenderBody /<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>/<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


<span class="token comment">## 23. if else 等判断太多了，后期难以维护</span>
  <span class="token keyword">if</span> <span class="token keyword">else</span> 嵌套深看起来也不会太难受，难受的是，项目迭代久之后，自己都忘记曾经写过这些代码，而且类型多或者不确定有什么类型，是否后期还会加的情况下，改起来就非常复杂了，而且很容易踩坑和背锅。
  用配置取代if嵌套，大概就是抽离一个config.ts出来，里面放一些配置。
  例如你的业务代码里面，会根据不同url参数，代码会执行不同的逻辑.
        /info?type<span class="token operator">=</span>wechat<span class="token operator">&amp;</span><span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">123456</span><span class="token operator">&amp;</span>
        const qsObj <span class="token operator">=</span> qs<span class="token punctuation">(</span>window.location.url<span class="token punctuation">)</span>
        const urlType <span class="token operator">=</span> qsObj.type
        // bad 
        <span class="token keyword">if</span> <span class="token punctuation">(</span>urlType <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">&#39;wechat&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            doSomeThing<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token function-name function">if</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            doSomeThing<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token function-name function">if</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            doSomeThing<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token function-name function">if</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            doSomeThing<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        // good  config.ts
        const urlTypeConfig: Record<span class="token operator">&lt;</span>string, typeItem<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token string">&#39;wechat&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> // key 就是对应的type
            name: <span class="token string">&#39;wechat&#39;</span>, 
            show: <span class="token punctuation">[</span><span class="token string">&#39;header&#39;</span>, <span class="token string">&#39;footer&#39;</span>, <span class="token string">&#39;wechat&#39;</span><span class="token punctuation">]</span> // 展示什么，可能是异步的
            pession: <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">]</span>, // 权限是什么，可能是异步的
          <span class="token punctuation">}</span>,
          <span class="token string">&#39;zhifubao&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> // key 就是对应的type
            name: <span class="token string">&#39;zhifubao&#39;</span>, 
            show: <span class="token punctuation">[</span><span class="token string">&#39;header&#39;</span>, <span class="token string">&#39;footer&#39;</span>, <span class="token string">&#39;zhifubao&#39;</span><span class="token punctuation">]</span> // 展示什么，可能是异步的
            pession: <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">]</span>, // 权限是什么，可能是异步的
          <span class="token punctuation">}</span>,
        <span class="token punctuation">}</span>

        // 业务逻辑
        const qsObj <span class="token operator">=</span> qs<span class="token punctuation">(</span>window.location.url<span class="token punctuation">)</span>
        const urlType <span class="token operator">=</span> qsObj.type
        Object.keys<span class="token punctuation">(</span>urlTypeConfig<span class="token punctuation">)</span>.forEach<span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
          if<span class="token punctuation">(</span>urlType <span class="token operator">==</span><span class="token operator">=</span> item.type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            doSomeThing<span class="token punctuation">(</span>item.show<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token comment">## 其他</span>
- input 输入框使用 trim<span class="token punctuation">(</span><span class="token punctuation">)</span>：<span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">let</span> searchContent <span class="token operator">=</span> form.search.value.trim<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>
- 对于常用的属性进行缓存：<span class="token variable"><span class="token variable">\`</span>const <span class="token punctuation">{</span> app <span class="token punctuation">}</span> <span class="token operator">=</span> this.props<span class="token variable">\`</span></span>
- 使用 location 跳转前需要先转义：<span class="token variable"><span class="token variable">\`</span>window.location.href <span class="token operator">=</span> redirectUrl + encodeURIComponent<span class="token punctuation">(</span><span class="token string">&#39;?a=10&amp;b=20&#39;</span><span class="token variable">)</span><span class="token variable">\`</span></span>
- 在 React 中你不能通过返回 <span class="token boolean">false</span> 来阻止默认行为。必须明确调用 preventDefault 
- for-in 中一定要有 hasOwnProperty 的判断（即禁止直接读取原型对象的属性）
- 在组件中获取真实 dom：<span class="token variable"><span class="token variable">\`</span>this.inputRef <span class="token operator">=</span> React.createRef<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>


<span class="token comment">## 代码检查插件</span>
我们可以使用构建工具继承 husky eslint tslint lint-stage prettier来规范代码。
    eslint-config-prettier
    eslint-plugin-prettier
    eslint-plugin-react
    tslint-react
    tslint-plugin-prettier
    tslint-config-prettier
    团队开发工作流
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="css架构之bem设计模式" tabindex="-1"><a class="header-anchor" href="#css架构之bem设计模式"><span>CSS架构之BEM设计模式</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## CSS架构之 BEM 设计模式</span>
<span class="token comment">### 为什么需要CSS架构？</span>
在日常开发项目CSS，需要组件化时，组件内部的class样式类管理就非常的杂乱。 大部分公司的命名规则还是只有大小驼峰、使用英文等这些基础的命名规则。但经常会自己都忘了自己命名的css是啥，使用设计模式就能很好的解决该问题。
CSS架构也能让html与css 更好的解耦，能更好的抽取样式中可复用的部分，使你的html代码更具语义，也符合了HTML5中想让日常开发更具有语义化的理念。了解这些设计模式无疑会使css代码更具模块化，块样式不依赖于页面上的其他元素，因此也较好的避免了遇到级联问题。多人协作的时候，也能高效避免命名重复问题。


<span class="token comment">### BEM</span>
BEM 全称 BlockElementModifier，是一个命名规定。通过 Block、Element、Modifier 来描述页面，通过 <span class="token variable"><span class="token variable">\`</span>_<span class="token variable">\`</span></span> 与 <span class="token variable"><span class="token variable">\`</span>--<span class="token variable">\`</span></span> 连接，BEM 主要是为了解决多人协作的CSS样式命名问题。
BEM 可以获得更多的描述和更加清晰的结构，从其名字可以知道某个标记的含义。通过查看 HTML 代码中的 class 属性，就能知道元素之间的关联。

- B 代表模块：
    - Block<span class="token punctuation">(</span>块<span class="token punctuation">)</span>，独立实体块，有独立的意义，每个页面都可以看做是多个 Block 组成。
    - 没有前缀，多个单词用 <span class="token variable"><span class="token variable">\`</span>-<span class="token variable">\`</span></span> 连接，是对一个组件名抽象。
    - <span class="token variable"><span class="token variable">\`</span>block <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token variable">\`</span></span>，block 代表了更高级别的抽象或组件。
    
- E 代表元素：
		- Element<span class="token punctuation">(</span>元素<span class="token punctuation">)</span>，block的一部分，没有独立意义，是组件下的一个元素，多个元素形成一个组件。
		- 元素在模块之后，可以有多个层级，以 <span class="token variable"><span class="token variable">\`</span>__<span class="token variable">\`</span></span> 连接。element 也不是死板的，是根据具体的需求演变的，中间也可以使用 <span class="token variable"><span class="token variable">\`</span>-<span class="token variable">\`</span></span> 来演变。
		- <span class="token variable"><span class="token variable">\`</span>block__element <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token variable">\`</span></span>，代表 <span class="token variable"><span class="token variable">\`</span>.block<span class="token variable">\`</span></span> 的后代，用于形成一个完整的 <span class="token variable"><span class="token variable">\`</span>.block<span class="token variable">\`</span></span> 的整体。
		
- M 代表修饰符：
		- Modifier<span class="token punctuation">(</span>修饰符<span class="token punctuation">)</span>，block或element上的标记，是描述Block或Element的属性或状态，同一个Block或Element可以有多个Modifier。
		- 某元素、或者某模块特别的状态，必须有一个状态名和状态值，使用 <span class="token variable"><span class="token variable">\`</span>--<span class="token variable">\`</span></span> 链接。
		- 主要针对的是 Block 本身，是对于Block做修饰。例如有：颜色、大小、用途。
		- <span class="token variable"><span class="token variable">\`</span>block--modifirer <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token variable">\`</span></span>，代表 <span class="token variable"><span class="token variable">\`</span>.block<span class="token variable">\`</span></span> 的不同状态或不同版本。

- 注意：
		- 使用两个连字符和下划线而不是一个是为了让你自己的块可以用单个连字符来界定。如：
				- <span class="token variable"><span class="token variable">\`</span>sub-block__element <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token variable">\`</span></span>
				- <span class="token variable"><span class="token variable">\`</span>sub-block--modifier <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token variable">\`</span></span>


<span class="token comment">### 传统的命名规范 &amp; BEM命名方法</span>
传统的命名规范：该写法从 DOM 结构和类命名上可以了解每个元素的意义，但无法明确其真实的层级关系。在 css 定义时，也必须依靠层级选择器来限定约束作用域，以避免跨组件的样式污染。
BEM 命名方法：通过 BEM 命名方式，模块层级关系简单清晰，而且 css 书写上也不必作过多的层级选择。



<span class="token comment">### 使用 BEM 的好处</span>
- 使html代码更具语义
- 使css代码更具模块化
- 多人协作的时候，也能高效避免命名重复问题
- 更加的规范规模化
- 减轻CSS命名烦恼


<span class="token comment">### 什么时候使用</span>
使用 BEM 的诀窍是，你要知道什么时候哪些东西是应该写成 BEM 格式的。并不是每个地方都应该使用 BEM 命名方式。当需要明确关联性的模块关系时，应当使用 BEM 格式。比如只是一条公共的单独的样式，就没有使用 BEM 格式的意义。
		.hide <span class="token punctuation">{</span>
        display: none <span class="token operator">!</span>important<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token comment">### 搭配CSS预处理器进行使用</span>
BEM 的一个槽点是，命名方式长而难看，书写不雅。相比 BEM 格式带来的便利来说，我们应客观看待。而且，一般来说会使用通过 LESS/SASS 等预处理器语言来编写 CSS，利用其语言特性书写起来要简单很多。


<span class="token comment">### 在流行框架的组件中使用 BEM 格式</span>
在当前流行的 Vue.js / React / Angular 等前端框架中，都有 CSS 组件级作用域的编译实现，其基本原理均为利用 CSS 属性选择器特性，为不同的组件生成不同的属性选择器。
当你选择了这种局部作用域的写法时，在较小的组件中，BEM 格式可能显得没那么重要。但对于公共的、全局性的模块样式定义，还是推荐使用 BEM 格式。
另外，对于对外发布的公共组件来说，一般为了风格的可定制性，都不会使用这种局部作用域方式来定义组件样式。此时使用 BEM 格式也会大显其彩。


<span class="token comment">### 注意要点</span>
避免 .block__el1__el2 的格式
在深层次嵌套的 DOM 结构下，应避免过长的样式名称定义。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模块block" tabindex="-1"><a class="header-anchor" href="#模块block"><span>模块Block</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code> //一个普通列表的a标签
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>li-a<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
 
 //一个在导航栏的a标签
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>nav-li-a<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
 
 //一个被选中的在导航栏的a标签
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>nav-li-a is-active<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
 
 //一个在头部的图片
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header-img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="元素element" tabindex="-1"><a class="header-anchor" href="#元素element"><span>元素Element</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav--main__item  js-nav--main__item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav--main__item  js-nav--main__item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav--main__item  js-nav--main__item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

//几个普通列表的a标签
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>li-a__item<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>li-a__item<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>li-a__item<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

//几个在导航栏的a标签
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>nav-li-a__item<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>nav-li-a__item<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>nav-li-a__item<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修饰modifier" tabindex="-1"><a class="header-anchor" href="#修饰modifier"><span>修饰Modifier</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code> //一个用作logo的图片
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header-img_logo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 传统的命名规范 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>article<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button-primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button-success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sass中使用" tabindex="-1"><a class="header-anchor" href="#sass中使用"><span>sass中使用</span></a></h3><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token selector">.article </span><span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>

  <span class="token selector"><span class="token parent important">&amp;</span>__body </span><span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>__button </span><span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px 8px<span class="token punctuation">;</span>

    <span class="token selector"><span class="token parent important">&amp;</span>--primary </span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token selector"><span class="token parent important">&amp;</span>--success </span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="公用配置" tabindex="-1"><a class="header-anchor" href="#公用配置"><span>公用配置</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 常用文件夹目录</span>
<span class="token operator">|</span> —— docs 文档目录
<span class="token operator">|</span> —— src 项目目录
<span class="token operator">|</span>		<span class="token operator">|</span> —— assets 资源目录
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— images 图片目录
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— videos 音频目录
<span class="token operator">|</span>		<span class="token operator">|</span> —— components 组件目录
<span class="token operator">|</span>		<span class="token operator">|</span> —— pages 页面组件
<span class="token operator">|</span>		<span class="token operator">|</span> —— stores 状态管理工具相关文件
<span class="token operator">|</span>		<span class="token operator">|</span> —— models typescript类或接口
<span class="token operator">|</span>		<span class="token operator">|</span> —— utils/styles 全局样式主题等


<span class="token comment">## 删除无用文件和内容</span>
pulic/mainifest.json 是用来做 PWA 的，不搞 PWA 可以删除
修改 public/index.html 中的首页标题
App.scss 中的内容可以全部删除
src/logo.svg 可以删除
删除 App.tsx 的无用代码
cra 生成的默认 README.md 中的内容也全删除，加入自己的项目描述。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="storybook" tabindex="-1"><a class="header-anchor" href="#storybook"><span>Storybook</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Story 存储一个 UI 组件的渲染状态，你可以给一个组件写多个 story 来描述组件不同的状态。比如按钮组件 （Button）


<span class="token comment">## 安装</span>
npx sb init
<span class="token function">pnpm</span> run storybook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="懒人记账-lazy-bookkeeping" tabindex="-1"><a class="header-anchor" href="#懒人记账-lazy-bookkeeping"><span>懒人记账 lazy-bookkeeping</span></a></h2><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 懒人记账简单版</span>
https://juejin.cn/post/7169044991175000077?share_token<span class="token operator">=</span>1faf3236-0f38-4498-bc71-584657184678
https://github.com/dingsheng1214/ds-cash-frontend.git
https://github.com/dingsheng1214/ds-cash-backend.git


<span class="token comment">## 项目初期引用技术构思</span>
<span class="token number">1</span>. react 框架主体
<span class="token number">2</span>. ts 数据类型检测
<span class="token number">3</span>. mockjs 模拟数据
<span class="token number">4</span>. mobx 全局数据
<span class="token number">5</span>. fetch 数据请求
<span class="token number">6</span>. webpack 框架构建打包工具
<span class="token number">7</span>. G2 数据可视化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化"><span>项目初始化</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 全局安装脚手架</span>
$ cnpm i <span class="token parameter variable">-g</span> create-react-app

<span class="token comment">## 创建项目</span>
$ <span class="token function">pnpm</span> create vite lazy-bookkeeping -- <span class="token parameter variable">--template</span> react-ts


<span class="token comment">## 配置 typescript</span>
$ <span class="token function">pnpm</span> i typescript @types/node @types/react @types/react-dom @types/jest <span class="token parameter variable">-D</span> <span class="token parameter variable">-w</span>


<span class="token comment">## 配置 scss </span>
$ <span class="token function">pnpm</span> i sass-loader node-sass <span class="token parameter variable">-w</span> <span class="token parameter variable">-S</span>

<span class="token comment">## 添加 nvmrc</span>
$ <span class="token function">node</span> <span class="token parameter variable">-v</span> <span class="token operator">&gt;</span> .nvmrc


<span class="token comment">## eslint &amp; prettier</span>
$ <span class="token function">pnpm</span> i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin <span class="token parameter variable">-D</span>  <span class="token parameter variable">-w</span>
$ <span class="token function">pnpm</span> i eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import <span class="token parameter variable">-D</span>  <span class="token parameter variable">-w</span>
$ <span class="token function">pnpm</span> i prettier eslint-config-prettier eslint-plugin-prettier <span class="token parameter variable">-w</span> <span class="token parameter variable">-D</span>


<span class="token comment">## eslint 自动校验</span>
$ <span class="token function">pnpm</span> i vite-plugin-eslint vite-plugin-checker <span class="token parameter variable">-D</span> <span class="token parameter variable">-w</span>
	在vite.config.ts中配置
      <span class="token function">import</span> eslintPlugin from <span class="token string">&#39;vite-plugin-eslint&#39;</span>
      <span class="token function">import</span> checker from <span class="token string">&#39;vite-plugin-checker&#39;</span>
      <span class="token builtin class-name">export</span> default defineConfig<span class="token punctuation">(</span><span class="token punctuation">{</span>
          plugins: <span class="token punctuation">[</span>
            eslintPlugin<span class="token punctuation">(</span><span class="token punctuation">{</span>
              cache: false, // 禁用 eslint 缓存
            <span class="token punctuation">}</span><span class="token punctuation">)</span>,
            /* eslint自动校检 */
            checker<span class="token punctuation">(</span><span class="token punctuation">{</span>
              eslint: <span class="token punctuation">{</span>
                lintCommand: <span class="token string">&#39;eslint &quot;./src/**/*.{ts,jsx,tsx,js}&quot;&#39;</span>,
              <span class="token punctuation">}</span>,
            <span class="token punctuation">}</span><span class="token punctuation">)</span>,
          <span class="token punctuation">]</span>,
      <span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">## stylelint</span>
$ <span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> <span class="token parameter variable">-w</span> stylelint stylelint-config-standard stylelint-config-standard-scss 
$ <span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> <span class="token parameter variable">-w</span> postcss postcss-scss postcss-html
$ <span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> <span class="token parameter variable">-w</span>  stylelint-config-rational-order stylelint-config-prettier stylelint-order stylelint-declaration-block-no-ignored-properties
$ <span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> <span class="token parameter variable">-w</span> stylelint-config-standard-vue stylelint-config-prettier-scss
	在 .stylelintrc.cjs 中配置
      <span class="token punctuation">{</span>
          <span class="token string">&quot;extends&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;stylelint-config-standard&quot;</span>,
            <span class="token string">&quot;stylelint-config-rational-order&quot;</span>,
            <span class="token string">&quot;stylelint-config-prettier&quot;</span>
          <span class="token punctuation">]</span>,
          <span class="token string">&quot;plugins&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-order&quot;</span>, <span class="token string">&quot;stylelint-declaration-block-no-ignored-properties&quot;</span><span class="token punctuation">]</span>,
          <span class="token string">&quot;rules&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
              <span class="token string">&quot;comment-empty-line-before&quot;</span><span class="token builtin class-name">:</span> null,
              <span class="token string">&quot;function-name-case&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;lower&quot;</span><span class="token punctuation">]</span>,
              <span class="token string">&quot;no-invalid-double-slash-comments&quot;</span><span class="token builtin class-name">:</span> null,
              <span class="token string">&quot;no-descending-specificity&quot;</span><span class="token builtin class-name">:</span> null,
              <span class="token string">&quot;declaration-empty-line-before&quot;</span><span class="token builtin class-name">:</span> null
          <span class="token punctuation">}</span>,
            <span class="token string">&quot;ignoreFiles&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>


<span class="token comment">## husky</span>
$ <span class="token function">pnpm</span> i husky lint-staged <span class="token parameter variable">-D</span> <span class="token parameter variable">-w</span>
	在 package.json 中配置
    <span class="token string">&quot;lint-staged&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;packages/**/*.{js,jsx,ts,tsx,json,css,scss,md}&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;prettier --single-quote --write&quot;</span>,
          <span class="token string">&quot;git add&quot;</span>
      <span class="token punctuation">]</span>,
      <span class="token string">&quot;packages/**/*.css&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;stylelint&quot;</span>,
      <span class="token string">&quot;packages/**/*.scss&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;stylelint --syntax=scss&quot;</span>
    <span class="token punctuation">}</span>,


<span class="token comment">## commitlint</span>
$ cnpm i <span class="token parameter variable">-g</span> commitizen
$ <span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> <span class="token parameter variable">-w</span> @commitlint/cli @commitlint/config-conventional


<span class="token comment">## mockjs</span>
<span class="token function">pnpm</span> i mockjs <span class="token parameter variable">-w</span>
<span class="token function">pnpm</span> i vite-plugin-mock <span class="token parameter variable">-D</span> <span class="token parameter variable">-w</span>
<span class="token function">pnpm</span> i cross-env <span class="token parameter variable">-D</span> <span class="token parameter variable">-w</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="音乐播放器-music-player" tabindex="-1"><a class="header-anchor" href="#音乐播放器-music-player"><span>音乐播放器 music-player</span></a></h2><h3 id="开发目录" tabindex="-1"><a class="header-anchor" href="#开发目录"><span>开发目录</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">|</span> —— hooks 工具函数
<span class="token operator">|</span>		<span class="token operator">|</span> —— useTime 本地时间函数
<span class="token operator">|</span>		<span class="token operator">|</span> —— useOnline 系统网络状态检测函数
<span class="token operator">|</span>		<span class="token operator">|</span> —— useBattery 检测设备电池电量函数
<span class="token operator">|</span>		<span class="token operator">|</span> —— useI18n 多语言函数
<span class="token operator">|</span>		<span class="token operator">|</span> —— event 事件相关hooks
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— useEventListener 间断性事件监听函数

<span class="token operator">|</span> —— config 配置
<span class="token operator">|</span>		<span class="token operator">|</span> —— constant 通用的常量配置
<span class="token operator">|</span>		<span class="token operator">|</span> —— plugins 全局构建配置

<span class="token operator">|</span> —— views
<span class="token operator">|</span>		<span class="token operator">|</span> —— system 系统相关页

<span class="token operator">|</span>		<span class="token operator">|</span> —— artist 歌手详情
<span class="token operator">|</span>		<span class="token operator">|</span> —— playlist 歌曲详情列表
<span class="token operator">|</span>		<span class="token operator">|</span> —— <span class="token function">mv</span> mv详情
<span class="token operator">|</span>		<span class="token operator">|</span> —— video 视频详情
<span class="token operator">|</span>		<span class="token operator">|</span> —— dj 电台详情

<span class="token operator">|</span>		<span class="token operator">|</span> —— discover 推荐模块

<span class="token operator">|</span>		<span class="token operator">|</span> —— musicHall 音乐馆模块
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— picked 精选
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— category 分类歌单

<span class="token operator">|</span>		<span class="token operator">|</span> —— oneselfMusic 个人音乐模块
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— oneselfLoveMusic 个人喜欢
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— localMusic 本地歌曲
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— downloadMusic 下载歌曲
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— recentlyMusic 最近播放

<span class="token operator">|</span>		<span class="token operator">|</span> —— demo 案例模块
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— Excel excel表格导入导出模块
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— Zip 压缩包Zip生成 <span class="token operator">&amp;</span> 下载导出
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— CopyText 复制文本
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— Qrcode 生成二维码
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— Cropper 图片裁剪
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— Dragger 拖拽组件
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— Editor 富文本编辑器
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— Barrage 视频 <span class="token operator">&amp;</span> 弹幕
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— Dashboard 仪表盘（echart）
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— Lottery 抽奖
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— LazyLoading 懒加载
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— Communication 组件通信
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— CssEffects css特效
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— Lantern 灯笼动画
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— HeartSwitch 心形开关
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— ParticleAnimation 粒子动画
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— ParticlePicture 图片粒子化
<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>		<span class="token operator">|</span>	—— ParticleCountdown 粒子动画倒计时
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="开发进度" tabindex="-1"><a class="header-anchor" href="#开发进度"><span>开发进度</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 开发参考</span>
<span class="token comment">## 网易云开源后端 API 接口</span>
https://github.com/Binaryify/NeteaseCloudMusicApi
https://binaryify.github.io/NeteaseCloudMusicApi/<span class="token comment">#/</span>

<span class="token comment">## 前端源码参考</span>
https://juejin.cn/post/7074062428249522207
https://github.com/SmallRuralDog/vue3-music.git


<span class="token comment"># 开发进度</span>
<span class="token comment">## 尚未完成</span>
- 底部下载等功能的实现
- 登录功能实现
- 专辑评论发表，嵌套子评论内容，热门评论，专辑分页
- 歌单页面头部数据调整
- 视频页
- 个人模块
- 打包后 http 请求问题，需要配置多后端请求（vite代理为何打包后不行）
- 详情页图片懒加载
- 工作台 <span class="token operator">&amp;</span> 大屏看板
- 动态路由
- 视频控制器
	- 记录播放时间，刷新页面可进入上次播放的时间
- 视频弹幕实现
- 转盘抽奖


<span class="token comment">## 项目优化</span>
- 整合 vite 构建文件
- defineOptions<span class="token punctuation">(</span><span class="token punctuation">)</span>自定义组件name属性（unplugin-vue-define-options）
- 自动化部署 <span class="token operator">&amp;</span> 自动化打包发布
- 单元测试
- 提交规范


<span class="token comment"># 已完成</span>
<span class="token comment">## 项目优化</span>
- 整合 main 入口配置文件 √

<span class="token comment">## 页面布局 - 头部</span>
- 锁屏功能 √
- 国际多语言 vue-i18n@next √
- 屏幕缩放功能 √
- 主题配置 √
- 头部搜索框点击跳转相应歌曲页面 √
- 登录功能：二维码扫码登录 √

<span class="token comment">## 统合功能</span>
- 评论查看功能 √
- 加载更多功能 √

<span class="token comment">## 推荐</span>
- 轮播图 √
- 推荐歌单 √
- 推荐新音乐 √
- 推荐MV √

<span class="token comment">## 音乐馆</span>
- 分类歌单 √
- 精选（独家放送 <span class="token operator">&amp;</span> 推荐电台） √
- 排行榜（官方榜 <span class="token operator">&amp;</span> 特色榜） √


<span class="token comment">## 经验总结</span>
- 使用 Pinia 是为了让数据持久化，即使页面销毁，只要该站点不刷新，就不需要重新请求数据，减少了请求负担
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="开发问题" tabindex="-1"><a class="header-anchor" href="#开发问题"><span>开发问题</span></a></h3><h4 id="vue使用css插件scss时代码报红" tabindex="-1"><a class="header-anchor" href="#vue使用css插件scss时代码报红"><span>vue使用CSS插件scss时代码报红</span></a></h4><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 问题描述</span>
vue使用CSS插件scss时代码报红，样式引用没问题，但样式代码报红
（虽运行没有问题，但报红会影响阅读体验）

<span class="token comment">## 解决方案</span>
<span class="token number">1</span>.打开 vscode 左上角的文件 -<span class="token operator">&gt;</span> 首选项 -<span class="token operator">&gt;</span> 设置 
<span class="token number">2</span>.进入setting.json文件修改
<span class="token number">3</span>.修改setting.json文件
	- 把文件中的<span class="token string">&quot;files.associations&quot;</span>中的<span class="token string">&quot;*.vue&quot;</span>的值改成<span class="token string">&quot;vue&quot;</span>保存即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="错误报红" tabindex="-1"><a class="header-anchor" href="#错误报红"><span>错误报红</span></a></h4><p><img src="`+i+'" alt="image-20220913160738220"></p><h4 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h4><p><img src="'+u+'" alt="image-20220913160711577"></p><p>2.进入setting.json文件修改 打开设置以后如下图所示，我们只需要点击右上角的这个小图标就可以进入setting.json文件</p><p><img src="'+r+'" alt="image-20220913160644118"></p><p>3.修改setting.json文件 把文件中的&quot;files.associations&quot;中的&quot;*.vue&quot;的值改成&quot;vue&quot;保存即可</p><h4 id="解决结果" tabindex="-1"><a class="header-anchor" href="#解决结果"><span>解决结果</span></a></h4><p>如图所示，可以看到样式代码不会爆红了，问题解决</p><p><img src="'+k+`" alt="image-20220913160758926"></p></blockquote><h3 id="_0-项目初始化" tabindex="-1"><a class="header-anchor" href="#_0-项目初始化"><span>0. 项目初始化</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 使用pnpm做包管理</span>
<span class="token function">npm</span> i <span class="token parameter variable">-g</span> <span class="token function">pnpm</span>

<span class="token comment">## 创建项目（注意vite项目要求node版本需14.8+）</span>
<span class="token function">pnpm</span> create vite music-player <span class="token parameter variable">--template</span> vue-ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_1-集成配置" tabindex="-1"><a class="header-anchor" href="#_1-集成配置"><span>1.集成配置</span></a></h3><blockquote><ol><li><strong>为保证 node 的使用</strong></li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i @types/node --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><strong>修改 <code>vite.config.js</code></strong></li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//设置别名</span>
        <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span> <span class="token comment">//启动端口</span>
        <span class="token literal-property property">hmr</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置 https 代理</span>
        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;your https address&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_2-集成-eslint" tabindex="-1"><a class="header-anchor" href="#_2-集成-eslint"><span>2.集成 eslint</span></a></h3><blockquote><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i eslint eslint-plugin-vue --save-dev
npx eslint <span class="token parameter variable">--init</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="命令行初始化eslint文件" tabindex="-1"><a class="header-anchor" href="#命令行初始化eslint文件"><span>命令行初始化eslint文件</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 选择 帮我们找到不规范的语法，并且强制应用代码规范</span>
? How would you like to use ESLint? …
To check syntax only
To check syntax and <span class="token function">find</span> problems
❯ To check syntax, <span class="token function">find</span> problems, and enforce code style


<span class="token comment"># 选择 (import/export)代码规范（ES6 代码规范）</span>
? What <span class="token builtin class-name">type</span> of modules does your project use? …
❯ JavaScript modules <span class="token punctuation">(</span>import/export<span class="token punctuation">)</span>
CommonJS <span class="token punctuation">(</span>require/exports<span class="token punctuation">)</span>
None of these


<span class="token comment"># 选择 项目中使用的前端框架</span>
? Which framework does your project use? …
React
❯ Vue.js
None of these


<span class="token comment"># 是否验证 ts 代码规范</span>
? Does your project use TypeScript? › No / Yes
√ Yes
	 No


<span class="token comment"># 代码的运行环境是 浏览器/node</span>
? Where does your code run? …  <span class="token punctuation">(</span>Press <span class="token operator">&lt;</span>space<span class="token operator">&gt;</span> to select, <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span> to toggle all, <span class="token operator">&lt;</span>i<span class="token operator">&gt;</span> to invert selection<span class="token punctuation">)</span>
✔ Browser
✔ Node


<span class="token comment"># 选择一个流行的代码规范</span>
? How would you like to define a style <span class="token keyword">for</span> your project? …
❯ Use a popular style guide
Answer questions about your style
Inspect your JavaScript file<span class="token punctuation">(</span>s<span class="token punctuation">)</span>


<span class="token comment"># 选择 Standard 代码规范</span>
? Which style guide <span class="token keyword">do</span> you want to follow? …
Airbnb: https://github.com/airbnb/javascript
❯ Standard: https://github.com/standard/standard
Google: https://github.com/google/eslint-config-google
XO: https://github.com/xojs/eslint-config-xo


<span class="token comment"># ESLint配置文件 代码的保存格式</span>
? What <span class="token function">format</span> <span class="token keyword">do</span> you want your config <span class="token function">file</span> to be in? …
❯ JavaScript
YAML
JSON


<span class="token comment"># 是否同意开始安装</span>
? Would you like to <span class="token function">install</span> them now with npm? › No / Yes
√ Yes
	 No
<span class="token punctuation">..</span>.
Successfully created .eslintrc.js <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建配置文件-eslintrc-cjs" tabindex="-1"><a class="header-anchor" href="#创建配置文件-eslintrc-cjs"><span>创建配置文件： <code>.eslintrc.cjs</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// &quot;off&quot; or 0 - 关闭这个规则校验</span>
<span class="token comment">// &quot;warn&quot; or 1 - 开启这个规则校验，但只是提醒，不会退出</span>
<span class="token comment">// &quot;error&quot; or 2 - 开启这个规则校验，并退出</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
   <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
       <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
       <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
       <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">&#39;latest&#39;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>
       <span class="token string">&#39;plugin:vue/vue3-recommended&#39;</span><span class="token punctuation">,</span>
       <span class="token string">&#39;prettier&#39;</span><span class="token punctuation">,</span>
       <span class="token comment">// &#39;plugin:vue/recommended&#39;,</span>
       <span class="token comment">// &#39;plugin:prettier/recommended&#39;,</span>
       <span class="token string">&#39;plugin:vue/vue3-essential&#39;</span><span class="token punctuation">,</span>
       <span class="token string">&#39;@vue/standard&#39;</span><span class="token punctuation">,</span>
       <span class="token string">&#39;@vue/typescript/recommended&#39;</span><span class="token punctuation">,</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">document</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
       <span class="token literal-property property">navigator</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
       <span class="token literal-property property">window</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token string-property property">&#39;eslint-disable-next-line&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
       <span class="token string-property property">&#39;eslint-disable&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
       <span class="token string-property property">&#39;no-console&#39;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;warn&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
       <span class="token string-property property">&#39;no-debugger&#39;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;warn&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
       <span class="token string-property property">&#39;vue/multi-word-component-names&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
       <span class="token string-property property">&#39;comma-dangle&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token literal-property property">quotes</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建忽略文件-eslintignore" tabindex="-1"><a class="header-anchor" href="#创建忽略文件-eslintignore"><span>创建忽略文件：<code>.eslintignore</code></span></a></h4><div class="language-.eslintignore line-numbers-mode" data-ext=".eslintignore" data-title=".eslintignore"><pre class="language-.eslintignore"><code>node_modules/
dist/
index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="命令行式运行-修改-package-json" tabindex="-1"><a class="header-anchor" href="#命令行式运行-修改-package-json"><span>命令行式运行：修改 <code>package.json</code></span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
 ...
 <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   ...
   <span class="token property">&quot;eslint:comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;使用 ESLint 检查并自动修复 src 目录下所有扩展名为 .js 和 .vue 的文件&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --ext .js,.vue --ignore-path .gitignore --fix src&quot;</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
 ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="开启实时校验" tabindex="-1"><a class="header-anchor" href="#开启实时校验"><span>开启实时校验</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 原因：</span>
eslint默认是通过执行命令校验，也就是 <span class="token function">npm</span> run lint才检验，开发和构建验证是在 浏览器渲染时候校验并抛出异常

<span class="token comment">## 安装：</span>
<span class="token function">npm</span> <span class="token function">install</span> vite-plugin-eslint --save-dev 


<span class="token comment">## 编辑vite.config.ts文件</span>
<span class="token function">import</span> eslintPlugin from <span class="token string">&#39;vite-plugin-eslint&#39;</span>

	plugins: <span class="token punctuation">[</span>
		<span class="token punctuation">..</span>.
		eslintPlugin<span class="token punctuation">(</span><span class="token punctuation">{</span>
			cache: <span class="token boolean">false</span> // 禁用 eslint 缓存
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="20220913222939"></p></blockquote><h3 id="_3-集成-prettier" tabindex="-1"><a class="header-anchor" href="#_3-集成-prettier"><span>3.集成 prettier</span></a></h3><blockquote><h4 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1"><span>安装</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="创建配置文件-prettier-config-cjs-或-prettierrc-cjs" tabindex="-1"><a class="header-anchor" href="#创建配置文件-prettier-config-cjs-或-prettierrc-cjs"><span>创建配置文件： <code>prettier.config.cjs</code> 或 <code>.prettierrc.cjs</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token comment">// 一行最多 80 字符</span>
 <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
 <span class="token comment">// 使用 2 个空格缩进</span>
 <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
 <span class="token comment">// 不使用 tab 缩进，而使用空格</span>
 <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
 <span class="token comment">// 行尾需要有分号</span>
 <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
 <span class="token comment">// 使用单引号代替双引号</span>
 <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
 <span class="token comment">// 对象的 key 仅在必要时用引号</span>
 <span class="token literal-property property">quoteProps</span><span class="token operator">:</span> <span class="token string">&#39;as-needed&#39;</span><span class="token punctuation">,</span>
 <span class="token comment">// jsx 不使用单引号，而使用双引号</span>
 <span class="token literal-property property">jsxSingleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
 <span class="token comment">// 末尾使用逗号</span>
 <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
 <span class="token comment">// 大括号内的首尾需要空格 { foo: bar }</span>
 <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
 <span class="token comment">// jsx 标签的反尖括号需要换行</span>
 <span class="token literal-property property">jsxBracketSameLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
 <span class="token comment">// 箭头函数，只有一个参数的时候，也需要括号</span>
 <span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
 <span class="token comment">// 每个文件格式化的范围是文件的全部内容</span>
 <span class="token literal-property property">rangeStart</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
 <span class="token literal-property property">rangeEnd</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
 <span class="token comment">// 不需要写文件开头的 @prettier</span>
 <span class="token literal-property property">requirePragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
 <span class="token comment">// 不需要自动在文件开头插入 @prettier</span>
 <span class="token literal-property property">insertPragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
 <span class="token comment">// 使用默认的折行标准</span>
 <span class="token literal-property property">proseWrap</span><span class="token operator">:</span> <span class="token string">&#39;preserve&#39;</span><span class="token punctuation">,</span>
 <span class="token comment">// 根据显示样式决定 html 要不要折行</span>
 <span class="token literal-property property">htmlWhitespaceSensitivity</span><span class="token operator">:</span> <span class="token string">&#39;css&#39;</span><span class="token punctuation">,</span>
 <span class="token comment">// 换行符使用 lf</span>
 <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改-eslintrc-js-配置" tabindex="-1"><a class="header-anchor" href="#修改-eslintrc-js-配置"><span>修改 <code>.eslintrc.js</code> 配置</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span>
 <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>
   <span class="token string">&#39;plugin:vue/vue3-recommended&#39;</span><span class="token punctuation">,</span>
   <span class="token string">&#39;prettier&#39;</span><span class="token punctuation">,</span>
   <span class="token string">&#39;plugin:prettier/recommended&#39;</span>
 <span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="命令行式运行-修改-package-json-1" tabindex="-1"><a class="header-anchor" href="#命令行式运行-修改-package-json-1"><span>命令行式运行：修改 <code>package.json</code></span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
 ...
 <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   ...
      <span class="token property">&quot;prettier:comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;自动格式化当前目录下的所有文件&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier --write&quot;</span>
    <span class="token punctuation">}</span>
 ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_4-集成-pinia" tabindex="-1"><a class="header-anchor" href="#_4-集成-pinia"><span>4.集成 pinia</span></a></h3><blockquote><p>Pinia 读音：[&#39;piːnə]，是 Vue 官方团队推荐代替<code>Vuex</code>的一款轻量级状态管理库。</p><p><strong>Pinia 有如下特点：</strong></p><ul><li>完整的 typescript 的支持；</li><li>足够轻量，压缩后的体积只有1.6kb;</li><li>去除 mutations，只有 state，getters，actions（这是我最喜欢的一个特点）；</li><li>actions 支持同步和异步；</li><li>没有模块嵌套，只有 store 的概念，store 之间可以自由使用，更好的代码分割；</li><li>无需手动添加 store，store 一旦创建便会自动添加；</li></ul><h4 id="安装-2" tabindex="-1"><a class="header-anchor" href="#安装-2"><span>安装</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i pinia <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h4><ol><li>新建 src/store 目录并在其下面创建 index.js，导出 store</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在-main-js-中引入并使用" tabindex="-1"><a class="header-anchor" href="#在-main-js-中引入并使用"><span>在 main.js 中引入并使用</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token comment">// 创建vue实例</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

<span class="token comment">// 挂载pinia</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>

<span class="token comment">// 挂载实例</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="定义state-在-src-store-下面创建一个-user-js" tabindex="-1"><a class="header-anchor" href="#定义state-在-src-store-下面创建一个-user-js"><span><strong>定义State</strong>： 在 src/store 下面创建一个 user.js</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useUserStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token comment">// id必填，且需要唯一</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">updateName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取state-在-src-components-usepinia-vue-中使用" tabindex="-1"><a class="header-anchor" href="#获取state-在-src-components-usepinia-vue-中使用"><span>获取State： 在 src/components/usePinia.vue 中使用</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> userStore<span class="token punctuation">.</span>name <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useUserStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store/user&#39;</span>

<span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改state" tabindex="-1"><a class="header-anchor" href="#修改state"><span>修改State：</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 1. 直接修改 state （不建议）</span>
userStore<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span>

<span class="token comment">// 2. 通过 actions 去修改</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useUserStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store/user&#39;</span>

<span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
userStore<span class="token punctuation">.</span><span class="token function">updateName</span><span class="token punctuation">(</span><span class="token string">&#39;李四&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_5-集成-vue-router4" tabindex="-1"><a class="header-anchor" href="#_5-集成-vue-router4"><span>5.集成 vue-router4</span></a></h3><blockquote><h4 id="安装-3" tabindex="-1"><a class="header-anchor" href="#安装-3"><span>安装</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i vue-router <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1"><span>使用</span></a></h4><p>新建 src/router 目录并在其下面创建 index.js，导出 router</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
 <span class="token punctuation">{</span>
   <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;登录&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">requireAuth</span><span class="token operator">:</span> <span class="token boolean">false</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/pages/login.vue&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Index&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">requireAuth</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/pages/index.vue&#39;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 routes
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 main.js 中引入并使用</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;@/router&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 创建vue实例</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 挂载实例</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 App.vue</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterView</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_6-集成-vueuse" tabindex="-1"><a class="header-anchor" href="#_6-集成-vueuse"><span>6. 集成 vueuse</span></a></h3>`,35),h=n("li",null,"VueUse 是一个基于 Composition API 的实用函数集合。",-1),f={href:"https://link.juejin.cn?target=https%3A%2F%2Fvueuse.org%2F",target:"_blank",rel:"noopener noreferrer"},q=n("li",null,[s("安装："),n("code",null,"pnpm i @vueuse/core")],-1),w=a(`<h4 id="使用-2" tabindex="-1"><a class="header-anchor" href="#使用-2"><span>使用</span></a></h4><ol><li>创建一个新的 src/pages/vueUse.vue 页面来做一个简单的 demo</li></ol><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>测试 vueUse 的鼠标坐标<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Mouse: {{ x }} x {{ y }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token punctuation">{</span> useMouse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span><span class="token punctuation">;</span>

 <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;VueUse&#39;</span><span class="token punctuation">,</span>
   <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">,</span>
        y<span class="token punctuation">,</span>
     <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),x=a(`<h3 id="_7-css-的集成" tabindex="-1"><a class="header-anchor" href="#_7-css-的集成"><span>7. CSS 的集成</span></a></h3><blockquote><h4 id="方案一-原生-css-variable-新特性" tabindex="-1"><a class="header-anchor" href="#方案一-原生-css-variable-新特性"><span>方案一：原生 css variable 新特性</span></a></h4><ul><li>原生支持，不需要第三方插件，具体使用文档可 <a href="https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2Fvar">查看</a></li><li>注：还可以增加 PostCSS 配置，(任何受 <a href="https%3A%2F%2Fgithub.com%2Fpostcss%2Fpostcss-load-config">postcss-load-config</a> 支持的格式，例如 postcss.config.js )，它将会自动应用于所有已导入的 CSS。</li></ul><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
 <span class="token property">--main-bg-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
 <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--main-bg-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方案二-scss或less" tabindex="-1"><a class="header-anchor" href="#方案二-scss或less"><span>方案二：scss或less</span></a></h3><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># .scss and .sass</span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> sass

<span class="token comment"># .less</span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> <span class="token function">less</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_8-集成-axios" tabindex="-1"><a class="header-anchor" href="#_8-集成-axios"><span>8. 集成 axios</span></a></h3><blockquote><p><code>axios</code> 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。</p><h4 id="安装-4" tabindex="-1"><a class="header-anchor" href="#安装-4"><span>安装</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用-3" tabindex="-1"><a class="header-anchor" href="#使用-3"><span>使用</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** src/utils/axios.js */</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;http://127.0.0.1:7777/&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">120000</span> <span class="token comment">// request timeout</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 请求拦截器</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
 <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token comment">// do something</span>
   <span class="token keyword">return</span> config<span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 响应拦截器</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
 <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token comment">// do something</span>
    <span class="token keyword">return</span> response<span class="token punctuation">.</span>data
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token comment">// do something</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> service<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- 在相应的页面中调用 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
 <span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;@/utils/axios&#39;</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> <span class="token function-variable function">requestRes</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/api/xxx&#39;</span><span class="token punctuation">,</span>
     <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="封装请求参数和响应数据的所有-api-可选项" tabindex="-1"><a class="header-anchor" href="#封装请求参数和响应数据的所有-api-可选项"><span>封装请求参数和响应数据的所有 api (可选项)</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** src/api/index.js */</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> login <span class="token keyword">from</span> <span class="token string">&#39;./module/login&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> index <span class="token keyword">from</span> <span class="token string">&#39;./module/index&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> login<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建 src/api/module/login.js 和 src/api/module/index.js</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;@/utils/axios&#39;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* 登录
*/</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span> password</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/api/auth/login&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      username<span class="token punctuation">,</span>
      password
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 src/pages/request.vue 页面中使用</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
 <span class="token keyword">import</span> <span class="token constant">API</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api&#39;</span><span class="token punctuation">;</span>

 <span class="token keyword">const</span> <span class="token function-variable function">requestRes</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token constant">API</span><span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_9-css-的-ui-样式库" tabindex="-1"><a class="header-anchor" href="#_9-css-的-ui-样式库"><span>9. css 的 UI 样式库</span></a></h3><blockquote><p><strong>注意：UI 库一般需要按需引入（下面以 element-plus 为例）</strong></p><h4 id="安装-vite-plugin-style-import" tabindex="-1"><a class="header-anchor" href="#安装-vite-plugin-style-import"><span>安装 <code>vite-plugin-style-import</code></span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i vite-plugin-style-import --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="修改-vite-config-js" tabindex="-1"><a class="header-anchor" href="#修改-vite-config-js"><span>修改 vite.config.js</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> styleImport <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-style-import&#39;</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token operator">...</span>
 <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">styleImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">libs</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">&#39;element-plus&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token function-variable function">resolveStyle</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">element-plus/lib/theme-chalk/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.css</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token literal-property property">ensureStyleFile</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 忽略文件是否存在, 导入不存在的CSS文件时防止错误。</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_10-使用-commitizen-规范git提交" tabindex="-1"><a class="header-anchor" href="#_10-使用-commitizen-规范git提交"><span>10. 使用 commitizen 规范git提交</span></a></h3><blockquote><p>为了使团队多人协作更加的规范，所以需要每次在 git 提交的时候，做一次硬性规范提交，规范 git 的提交信息</p><h3 id="安装-commitizen-交互式提交-自定义提示文案-commit规范" tabindex="-1"><a class="header-anchor" href="#安装-commitizen-交互式提交-自定义提示文案-commit规范"><span>安装 commitizen (交互式提交 + 自定义提示文案 + Commit规范)</span></a></h3><h4 id="安装-5" tabindex="-1"><a class="header-anchor" href="#安装-5"><span>安装</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> commitizen cz-conventional-changelog @commitlint/config-conventional @commitlint/cli commitlint-config-cz cz-customizable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="配置-package-json" tabindex="-1"><a class="header-anchor" href="#配置-package-json"><span>配置 <code>package.json</code></span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
 ...
 <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">&quot;commit:comment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;引导设置规范化的提交信息&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;commit&quot;</span><span class="token operator">:</span><span class="token string">&quot;git-cz&quot;</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>

 <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./node_modules/cz-customizable&quot;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="新增配置-commitlint-config-cjs" tabindex="-1"><a class="header-anchor" href="#新增配置-commitlint-config-cjs"><span>新增配置 <code>commitlint.config.cjs</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span><span class="token punctuation">{</span>
 <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@commitlint/config-conventional&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cz&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token string-property property">&#39;type-enum&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token number">2</span><span class="token punctuation">,</span>
     <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
     <span class="token punctuation">[</span>
       <span class="token string">&#39;feature&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 新功能（feature）</span>
       <span class="token string">&#39;bug&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况</span>
       <span class="token string">&#39;fix&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 修补bug</span>
       <span class="token string">&#39;ui&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 更新 ui</span>
       <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 文档（documentation）</span>
       <span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 格式（不影响代码运行的变动）</span>
       <span class="token string">&#39;perf&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 性能优化</span>
       <span class="token string">&#39;release&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 发布</span>
       <span class="token string">&#39;deploy&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 部署</span>
       <span class="token string">&#39;refactor&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 重构（即不是新增功能，也不是修改bug的代码变动）</span>
       <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 增加测试</span>
       <span class="token string">&#39;chore&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 构建过程或辅助工具的变动</span>
       <span class="token string">&#39;revert&#39;</span><span class="token punctuation">,</span> <span class="token comment">// feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)</span>
       <span class="token string">&#39;merge&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址</span>
       <span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 打包</span>
     <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token comment">// &lt;type&gt; 格式 小写</span>
   <span class="token string-property property">&#39;type-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lower-case&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token comment">// &lt;type&gt; 不能为空</span>
   <span class="token string-property property">&#39;type-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token comment">// &lt;scope&gt; 范围不能为空</span>
   <span class="token string-property property">&#39;scope-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token comment">// &lt;scope&gt; 范围格式</span>
   <span class="token string-property property">&#39;scope-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token comment">// &lt;subject&gt; 主要 message 不能为空</span>
   <span class="token string-property property">&#39;subject-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token comment">// &lt;subject&gt; 以什么为结束标志，禁用</span>
   <span class="token string-property property">&#39;subject-full-stop&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token comment">// &lt;subject&gt; 格式，禁用</span>
   <span class="token string-property property">&#39;subject-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token comment">// &lt;body&gt; 以空行开头</span>
   <span class="token string-property property">&#39;body-leading-blank&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token string-property property">&#39;header-max-length&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span> <span class="token number">72</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义提示则添加-cz-config-js" tabindex="-1"><a class="header-anchor" href="#自定义提示则添加-cz-config-js"><span>自定义提示则添加 <code>.cz-config.js</code></span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
   <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;feature&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;feature:  增加新功能&#39;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;bug&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;bug:      测试反馈bug列表中的bug号&#39;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;fix&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;fix:      修复bug&#39;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;ui&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ui:       更新UI&#39;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;docs:     文档变更&#39;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;style:    代码格式(不影响代码运行的变动)&#39;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;perf&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;perf:     性能优化&#39;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;refactor&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;refactor: 重构(既不是增加feature，也不是修复bug)&#39;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;release&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;release:  发布&#39;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;deploy&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;deploy:   部署&#39;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;test:     增加测试&#39;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;chore&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;chore:    构建过程或辅助工具的变动(更改配置文件)&#39;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;revert&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;revert:   回退&#39;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;build:    打包&#39;</span>
         <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token comment">// override the messages, defaults are as follows</span>
 <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;请选择提交类型:&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">customScope</span><span class="token operator">:</span> <span class="token string">&#39;请输入您修改的范围(可选):&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">&#39;请简要描述提交 message (必填):&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&#39;请输入详细描述(可选，待优化去除，跳过即可):&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">&#39;请输入要关闭的issue(待优化去除，跳过即可):&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">confirmCommit</span><span class="token operator">:</span> <span class="token string">&#39;确认使用以上信息提交？(y/n/e/h)&#39;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token literal-property property">allowCustomScopes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
 <span class="token literal-property property">skipQuestions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;footer&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token literal-property property">subjectLimit</span><span class="token operator">:</span> <span class="token number">72</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="交互界面测试" tabindex="-1"><a class="header-anchor" href="#交互界面测试"><span>交互界面测试</span></a></h4><p><img src="`+v+`" alt="image-20220913164119371"></p></blockquote><h3 id="_11-安装-husky" tabindex="-1"><a class="header-anchor" href="#_11-安装-husky"><span>11. 安装 husky</span></a></h3><blockquote><ul><li>到目前只是规范了 git 的提交信息，我们对提交前代码的检查还没有做到位，例如 ESLint、Prettier，而 husky 可以规范提交。</li></ul><ol><li>安装</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1.安装</span>
<span class="token function">pnpm</span> i husky lint-staged <span class="token parameter variable">-D</span>

<span class="token comment"># 2.生成 .husky 的文件夹</span>
npx husky <span class="token function">install</span>

<span class="token comment"># 3.添加 hooks，会在 .husky 目录下生成一个 pre-commit 脚本文件</span>
npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;npx --no-install lint-staged&quot;</span>

<span class="token comment"># 4.添加 commit-msg</span>
npx husky <span class="token function">add</span> .husky/commit-msg <span class="token string">&#39;npx --no-install commitlint --edit &quot;$1&quot;&#39;</span>

<span class="token comment"># 5. 使用 \`git commit -m &quot;message&quot;\` 就会看到 hook 生效了。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>添加配置 <code>package.json</code></li></ol><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
 ...
 <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">&quot;*.{js,ts}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token string">&quot;npm run eslint&quot;</span><span class="token punctuation">,</span>
     <span class="token string">&quot;npm run prettier&quot;</span>
   <span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
 ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_12-集成-stylelint" tabindex="-1"><a class="header-anchor" href="#_12-集成-stylelint"><span>12. 集成 stylelint</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> stylelint stylelint-config-standard stylelint-config-standard-scss 
<span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> postcss postcss-scss postcss-html
<span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> stylelint-config-standard-vue stylelint-config-prettier-scss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义配置格式化-stylelintrc-json" tabindex="-1"><a class="header-anchor" href="#自定义配置格式化-stylelintrc-json"><span>自定义配置格式化 <code>.stylelintrc.json</code></span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;stylelint-config-prettier&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;function-no-unknown&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;selector-class-pattern&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;selector-pseudo-class-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token boolean">true</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token property">&quot;ignorePseudoClasses&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
             <span class="token string">&quot;global&quot;</span>
           <span class="token punctuation">]</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;selector-pseudo-element-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token boolean">true</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token property">&quot;ignorePseudoElements&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
             <span class="token string">&quot;v-deep&quot;</span>
           <span class="token punctuation">]</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;at-rule-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token boolean">true</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token property">&quot;ignoreAtRules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
             <span class="token string">&quot;tailwind&quot;</span><span class="token punctuation">,</span>
             <span class="token string">&quot;apply&quot;</span><span class="token punctuation">,</span>
             <span class="token string">&quot;variants&quot;</span><span class="token punctuation">,</span>
             <span class="token string">&quot;responsive&quot;</span><span class="token punctuation">,</span>
             <span class="token string">&quot;screen&quot;</span><span class="token punctuation">,</span>
             <span class="token string">&quot;function&quot;</span><span class="token punctuation">,</span>
             <span class="token string">&quot;if&quot;</span><span class="token punctuation">,</span>
             <span class="token string">&quot;each&quot;</span><span class="token punctuation">,</span>
             <span class="token string">&quot;include&quot;</span><span class="token punctuation">,</span>
             <span class="token string">&quot;mixin&quot;</span>
           <span class="token punctuation">]</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;no-empty-source&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;string-quotes&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;named-grid-areas-no-invalid&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;unicode-bom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;no-descending-specificity&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;font-family-no-missing-generic-family-keyword&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;declaration-colon-space-after&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always-single-line&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;declaration-colon-space-before&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rule-empty-line-before&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
             <span class="token string">&quot;after-comment&quot;</span><span class="token punctuation">,</span>
             <span class="token string">&quot;first-nested&quot;</span>
           <span class="token punctuation">]</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;unit-no-unknown&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token boolean">true</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token property">&quot;ignoreUnits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
             <span class="token string">&quot;rpx&quot;</span>
           <span class="token punctuation">]</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;indentation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tab&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;declaration-empty-line-before&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;block-closing-brace-empty-line-before&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;max-empty-lines&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;block-no-empty&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;no-invalid-double-slash-comments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;overrides&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
         <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
           <span class="token string">&quot;*.vue&quot;</span><span class="token punctuation">,</span>
           <span class="token string">&quot;**/*.vue&quot;</span>
         <span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token property">&quot;customSyntax&quot;</span><span class="token operator">:</span> <span class="token string">&quot;postcss-html&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
           <span class="token string">&quot;stylelint-config-standard-scss&quot;</span><span class="token punctuation">,</span>
           <span class="token string">&quot;stylelint-config-prettier-scss&quot;</span>
         <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
         <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
           <span class="token string">&quot;*.scss&quot;</span><span class="token punctuation">,</span>
           <span class="token string">&quot;**/*.scss&quot;</span>
         <span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token property">&quot;customSyntax&quot;</span><span class="token operator">:</span> <span class="token string">&quot;postcss-scss&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
           <span class="token string">&quot;stylelint-config-standard-scss&quot;</span><span class="token punctuation">,</span>
           <span class="token string">&quot;stylelint-config-prettier-scss&quot;</span>
         <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置vscode自动格式化css" tabindex="-1"><a class="header-anchor" href="#配置vscode自动格式化css"><span>配置vscode自动格式化css</span></a></h4><p>配置项配置好之后。需要修改编辑器来支持保存代码自动格式化css/scss文件。 我这里用的是vscode编辑器。关键配置项&quot;source.fixAll.stylelint&quot;:true</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>···
<span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
   <span class="token property">&quot;source.fixAll.stylelint&quot;</span><span class="token operator">:</span><span class="token boolean">true</span> 
<span class="token punctuation">}</span>
···
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_13-vite配置-vite-config-ts" tabindex="-1"><a class="header-anchor" href="#_13-vite配置-vite-config-ts"><span>13. vite配置 <code>vite.config.ts</code></span></a></h3><blockquote><p>vite不会检测本地eslint和ts报错。需要安装插件或者自己写插件来实现此功能。</p><p>我在项目里面用到了vite-plugin-checker这个插件做检查</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> vite-plugin-checker <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="vite-config-ts" tabindex="-1"><a class="header-anchor" href="#vite-config-ts"><span>vite.config.ts</span></a></h4><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> checker <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-checker&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
		···
		<span class="token function">checker</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			vueTsc<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			eslint<span class="token operator">:</span> <span class="token punctuation">{</span>
				lintCommand<span class="token operator">:</span> <span class="token string">&#39;eslint &quot;./src/**/*.{ts,vue}&quot;&#39;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       ···
     <span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vite-配置别名" tabindex="-1"><a class="header-anchor" href="#vite-配置别名"><span>vite 配置别名</span></a></h4><blockquote><p>注意这里不能使用require的方式导入path</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> join <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    ···
		resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
		    alias<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            find<span class="token operator">:</span> <span class="token string">&#39;@&#39;</span><span class="token punctuation">,</span>
            replacement<span class="token operator">:</span> <span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
		    <span class="token punctuation">]</span>
	  <span class="token punctuation">}</span>
    ···
<span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="css预处理器导入" tabindex="-1"><a class="header-anchor" href="#css预处理器导入"><span>css预处理器导入</span></a></h4><blockquote><p>additionalData这里对应自己项目内的预处理器文件位置、注意单双引号和封号的位置</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> join <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	css<span class="token operator">:</span> <span class="token punctuation">{</span>
		preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
			scss<span class="token operator">:</span> <span class="token punctuation">{</span>
				additionalData<span class="token operator">:</span> <span class="token string">&#39;@import &quot;src/styles/var.scss&quot;;&#39;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_14-配置-tailwindcss" tabindex="-1"><a class="header-anchor" href="#_14-配置-tailwindcss"><span>14. 配置 tailwindcss</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 安装依赖</span>
<span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> tailwindcss@latest postcss@latest autoprefixer@latest

<span class="token comment">## 生成配置文件</span>
npx tailwindcss init

在一个css文件中导入如下包，并引入到 main.ts中
@import <span class="token string">&quot;tailwindcss/base&quot;</span><span class="token punctuation">;</span>
@import <span class="token string">&quot;tailwindcss/components&quot;</span><span class="token punctuation">;</span>
@import <span class="token string">&quot;tailwindcss/utilities&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tailwind-config-cjs" tabindex="-1"><a class="header-anchor" href="#tailwind-config-cjs"><span>tailwind.config.cjs</span></a></h4><div class="language-cjs line-numbers-mode" data-ext="cjs" data-title="cjs"><pre class="language-cjs"><code>/** @type {import(&#39;tailwindcss&#39;).Config} */
module.exports = {
  content: [
     &#39;./index.html&#39;,
     &#39;./src/**/*.{vue,js,ts,jsx,tsx}&#39;,
  ],
  // darkMode: false, // or &#39;media&#39; or &#39;class&#39;
  theme: {
  },
  plugins: [],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_15-集成-mockjs" tabindex="-1"><a class="header-anchor" href="#_15-集成-mockjs"><span>15. 集成 mockjs</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i  mockjs vite-plugin-mock rollup
<span class="token function">pnpm</span> i cross-env <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="package-json配置script-dev" tabindex="-1"><a class="header-anchor" href="#package-json配置script-dev"><span><code>package.json</code>配置script &gt; dev</span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=development vite&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="vite-config-ts-1" tabindex="-1"><a class="header-anchor" href="#vite-config-ts-1"><span>vite.config.ts</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> viteMockServe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-mock&#39;</span>

<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">viteMockServe</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">mockPath</span><span class="token operator">:</span> <span class="token string">&#39;./mock&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token literal-property property">supportTs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否用了ts，可以根据自己选择\`true\` or \`false\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在与node-modules同级目录建立mock目录" tabindex="-1"><a class="header-anchor" href="#在与node-modules同级目录建立mock目录"><span>在与<code>node_modules</code>同级目录建立mock目录</span></a></h4><p>目录下建立mock文件 <code>user.ts</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MockMethod <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-mock&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
 <span class="token punctuation">{</span>
     <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/api/getUser&#39;</span><span class="token punctuation">,</span>
     <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
     <span class="token function-variable function">response</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;body&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span>
         <span class="token keyword">return</span> <span class="token punctuation">{</span>
             <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
             <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span>
             <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bb&#39;</span><span class="token punctuation">]</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">]</span> <span class="token keyword">as</span> MockMethod<span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码请求" tabindex="-1"><a class="header-anchor" href="#代码请求"><span>代码请求</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/getUser&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_16-配置国际化插件-vue-i18n" tabindex="-1"><a class="header-anchor" href="#_16-配置国际化插件-vue-i18n"><span>16. 配置国际化插件 vue-i18n</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 安装</span>
<span class="token function">pnpm</span> i vue-i18n@next

<span class="token comment">## 创建语言文件和目录结构</span>
<span class="token number">1</span>. 在 src 下创建 locales 目录
<span class="token number">2</span>. 在 locales 下创建语言配置文件：zh-cn.ts 和 en.ts
<span class="token number">3</span>. 在 locales 下创建 index.ts 文件
<span class="token number">4</span>. 在 main.ts 入口创建实例并挂载到app上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在locales文件夹下配置中英文模板" tabindex="-1"><a class="header-anchor" href="#在locales文件夹下配置中英文模板"><span>在locales文件夹下配置中英文模板</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** locales/zh-cn.ts */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  common<span class="token operator">:</span><span class="token punctuation">{</span>
    more<span class="token operator">:</span><span class="token string">&#39;查看更多&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  menus<span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span><span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span>
    Home<span class="token operator">:</span><span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span>
    home<span class="token operator">:</span><span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span>
    About<span class="token operator">:</span><span class="token string">&#39;关于&#39;</span><span class="token punctuation">,</span>
    about<span class="token operator">:</span><span class="token string">&#39;关于&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** locales/en-us.ts */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  common<span class="token operator">:</span><span class="token punctuation">{</span>
    more<span class="token operator">:</span><span class="token string">&#39;More&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  menus<span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
    Home<span class="token operator">:</span><span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
    home<span class="token operator">:</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
    About<span class="token operator">:</span><span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
    about<span class="token operator">:</span><span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** locales/index.ts */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span>

<span class="token comment">// element-plus 中的语言配置</span>
<span class="token keyword">import</span> elementEnLocale <span class="token keyword">from</span> <span class="token string">&#39;element-plus/lib/locale/lang/en&#39;</span>
<span class="token keyword">import</span> elementZhLocale <span class="token keyword">from</span> <span class="token string">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>

<span class="token comment">// 自己的语言配置</span>
<span class="token keyword">import</span> enLocale <span class="token keyword">from</span> <span class="token string">&#39;./en&#39;</span>
<span class="token keyword">import</span> zhLocale <span class="token keyword">from</span> <span class="token string">&#39;./zh-cn&#39;</span>

<span class="token comment">// 语言配置整合</span>
<span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span>
  en<span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>enLocale<span class="token punctuation">,</span>
    <span class="token operator">...</span>elementEnLocale
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;zh-cn&#39;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>zhLocale<span class="token punctuation">,</span>
    elementZhLocale
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建 i18n</span>
<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">createI18n</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  legacy<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  globalInjection<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 全局模式，可以直接使用 $t</span>
  locale<span class="token operator">:</span> <span class="token string">&#39;zh-cn&#39;</span><span class="token punctuation">,</span>
  messages<span class="token operator">:</span> messages
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> i18n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="main-ts-在入口文件中创建i18n实例并挂载" tabindex="-1"><a class="header-anchor" href="#main-ts-在入口文件中创建i18n实例并挂载"><span>main.ts 在入口文件中创建i18n实例并挂载</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** main.ts */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">&#39;./locales/index&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">setupApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>i18n<span class="token punctuation">)</span>
  app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">setupApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="中英文切换demo" tabindex="-1"><a class="header-anchor" href="#中英文切换demo"><span>中英文切换demo</span></a></h3><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeLanguage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{&#39;active&#39;:state.curLanguage === &#39;en&#39;}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>EN<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{&#39;active&#39;:state.curLanguage === &#39;zh-cn&#39;}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>CN<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> locale <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">curLanguage</span><span class="token operator">:</span> <span class="token string">&#39;zh-cn&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">changeLanguage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  state<span class="token punctuation">.</span>curLanguage <span class="token operator">=</span> state<span class="token punctuation">.</span>curLanguage <span class="token operator">===</span> <span class="token string">&#39;zh-cn&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;en&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;zh-cn&#39;</span>
  locale<span class="token punctuation">.</span>value <span class="token operator">=</span> state<span class="token punctuation">.</span>curLanguage
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在vue中使用" tabindex="-1"><a class="header-anchor" href="#在vue中使用"><span>在vue中使用</span></a></h3><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code>// 配置了全局
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{$t(&#39;menu.home&#39;)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>


// 未配置全局
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{t(&#39;menu.home&#39;)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 需要引入 t</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在ts中使用" tabindex="-1"><a class="header-anchor" href="#在ts中使用"><span>在ts中使用</span></a></h3><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">&#39;@/locales/index&#39;</span>

<span class="token keyword">const</span> t <span class="token operator">=</span> i18n<span class="token punctuation">.</span>global<span class="token punctuation">.</span>t
<span class="token keyword">const</span> menuHome <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;menus.home&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_17-setup-中声明组件名" tabindex="-1"><a class="header-anchor" href="#_17-setup-中声明组件名"><span>17. setup 中声明组件名</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 安装</span>
<span class="token function">pnpm</span> i unplugin-vue-define-options <span class="token parameter variable">-D</span>
<span class="token function">pnpm</span> i unplugin-vue-macros <span class="token parameter variable">-D</span>


<span class="token comment">## 在vite.config.ts中配置</span>
<span class="token function">import</span> DefineOptions from <span class="token string">&#39;unplugin-vue-define-options/vite&#39;</span>
<span class="token function">import</span> Vue from <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token builtin class-name">export</span> default defineConfig<span class="token punctuation">(</span><span class="token punctuation">{</span>
	plugins: <span class="token punctuation">[</span>Vue<span class="token punctuation">(</span><span class="token punctuation">)</span>, DefineOptions<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>,
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">## 在tsconfig.json中添加一个配置</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;compilerOptions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
     	<span class="token string">&quot;types&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;unplugin-vue-define-options/macros-global&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">## vue中使用</span>
<span class="token operator">&lt;</span>script setup <span class="token assign-left variable">lang</span><span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
  defineOptions<span class="token punctuation">(</span><span class="token punctuation">{</span>
    name: <span class="token string">&#39;App&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span>/script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第二种方法</strong>：新增加一个script标签，在这个标签中写入name属性</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;TButton&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第三种方法</strong>：使用defineComponent</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;TButton&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_18-日期时间格式化插件-dayjs" tabindex="-1"><a class="header-anchor" href="#_18-日期时间格式化插件-dayjs"><span>18. 日期时间格式化插件 dayjs</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 插件安装</span>
<span class="token function">pnpm</span> i dayjs <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_19-打包解析插件" tabindex="-1"><a class="header-anchor" href="#_19-打包解析插件"><span>19. 打包解析插件</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 问题（打包时因使用 await 而无法继续打包问题）</span>
不引入该插件，会导致显示如下错误而导致无法进行打包：
<span class="token variable"><span class="token variable">\`</span>ssets/main.3ecd3ccb.js:89046:16: ERROR: Top-level await is not available <span class="token keyword">in</span> the configured target environment <span class="token punctuation">(</span><span class="token string">&quot;es2020&quot;</span> + <span class="token number">2</span> overrides<span class="token punctuation">)</span><span class="token variable">\`</span></span>

<span class="token comment">## 错误原因</span>
「ECMAScript」提案 Top-level await 由 Myles Borins 提出，它可以让你在模块的最高层中使用 await 操作符。在这之前，你只能通过在 async 函数或 async generators 中使用 await 操作符。Top-level await 是个新特性，打包不支持此特性。


<span class="token comment">## 解决方案</span>
<span class="token number">1</span>. 引入 vite-plugin-top-level-await 插件
		<span class="token function">pnpm</span> i vite-plugin-top-level-await <span class="token parameter variable">-D</span>

<span class="token number">2</span>. 在vite.config.js配置此插件
    <span class="token function">import</span> topLevelAwait from <span class="token string">&#39;vite-plugin-top-level-await&#39;</span>
    <span class="token builtin class-name">export</span> default defineConfig<span class="token punctuation">(</span><span class="token punctuation">{</span>
      plugins: <span class="token punctuation">[</span>
        topLevelAwait<span class="token punctuation">(</span><span class="token punctuation">{</span>
          // The <span class="token builtin class-name">export</span> name of top-level await promise <span class="token keyword">for</span> each chunk module
          promiseExportName: <span class="token string">&#39;__tla&#39;</span>,
          // The <span class="token keyword">function</span> to generate <span class="token function">import</span> names of top-level await promise <span class="token keyword">in</span> each chunk module
          promiseImportName: i <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token variable"><span class="token variable">\`</span>__tla_$<span class="token punctuation">{</span>i<span class="token punctuation">}</span><span class="token variable">\`</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_20-excel表格插件xlsx" tabindex="-1"><a class="header-anchor" href="#_20-excel表格插件xlsx"><span>20. Excel表格插件xlsx</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Excel插件安装</span>
	<span class="token function">pnpm</span> i <span class="token parameter variable">-S</span> xlsx file-saver

<span class="token comment">## 后期参考 excel.js</span>
https://github.com/exceljs/exceljs/blob/HEAD/README_zh.md<span class="token comment">#%E7%9B%AE%E5%BD%95</span>


<span class="token comment">## 导出excel的逻辑：</span>
excel整个表格专业名词是workbook，里面每张表格是sheet
页面引入xlsx的库，https://unpkg.com/xlsx/dist/xlsx.core.min.js
把数据生成sheet，var sheet <span class="token operator">=</span> XLSX.utils.json_to_sheet<span class="token punctuation">(</span>jsonData<span class="token punctuation">)</span>，json_to_sheet是将由对象组成的数组转化成sheet，当然还有 aoa_to_sheet将一个二维数组转成sheet 和 table_to_sheet将table的dom直接转成sheet
创建虚拟的workbook，var wb <span class="token operator">=</span> XLSX.utils.book_new<span class="token punctuation">(</span><span class="token punctuation">)</span>
把sheet添加到workbook里，XLSX.utils.book_append_sheet<span class="token punctuation">(</span>wb, sheet, <span class="token string">&quot;这里是sheetName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
把workbook转成blob，var blob <span class="token operator">=</span> workbook2blob<span class="token punctuation">(</span>wb<span class="token punctuation">)</span>，这里workbook2blob需要手动写啦，下面会贴代码
利用a标签和createObjectURL实现下载功能，openDownloadDialog<span class="token punctuation">(</span>blob, <span class="token string">&#39;excel的标题.xlsx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">XLSX</span> <span class="token keyword">from</span> <span class="token string">&#39;xlsx&#39;</span>

<span class="token keyword">function</span> <span class="token function">workbook2blob</span> <span class="token punctuation">(</span>workbook<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> wbout <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>workbook<span class="token punctuation">,</span> <span class="token punctuation">{</span>
       <span class="token comment">// 要生成的文件类型</span>
       bookType<span class="token operator">:</span> <span class="token string">&#39;xlsx&#39;</span><span class="token punctuation">,</span>
       <span class="token comment">// 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性</span>
       bookSST<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
       type<span class="token operator">:</span> <span class="token string">&#39;binary&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 将字符串转ArrayBuffer</span>
    <span class="token keyword">function</span> <span class="token function">s2ab</span> <span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">const</span> buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
       <span class="token keyword">const</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
       <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">!==</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> view<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span>
       <span class="token keyword">return</span> buf
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">s2ab</span><span class="token punctuation">(</span>wbout<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
       type<span class="token operator">:</span> <span class="token string">&#39;application/octet-stream&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> blob
<span class="token punctuation">}</span>

<span class="token comment">// 将blob对象创建bloburl，然后用a标签实现弹出下载框</span>
<span class="token keyword">function</span> <span class="token function">openDownloadDialog</span> <span class="token punctuation">(</span>blob<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> blob <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> blob <span class="token keyword">instanceof</span> <span class="token class-name">Blob</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       blob <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span> <span class="token comment">// 创建blob地址</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> aLink <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
    aLink<span class="token punctuation">.</span>href <span class="token operator">=</span> blob
    <span class="token comment">// HTML5新增的属性，指定保存文件名，可以不要后缀，注意，有时候 file:///模式下不会生效</span>
    aLink<span class="token punctuation">.</span>download <span class="token operator">=</span> fileName <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">let</span> event
    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>MouseEvent<span class="token punctuation">)</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MouseEvent</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">//   移动端</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
       event <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createEvent</span><span class="token punctuation">(</span><span class="token string">&#39;MouseEvents&#39;</span><span class="token punctuation">)</span>
       event<span class="token punctuation">.</span><span class="token function">initMouseEvent</span><span class="token punctuation">(</span>
         <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
         <span class="token boolean">true</span><span class="token punctuation">,</span>
         <span class="token boolean">false</span><span class="token punctuation">,</span>
         window<span class="token punctuation">,</span>
         <span class="token number">0</span><span class="token punctuation">,</span>
         <span class="token number">0</span><span class="token punctuation">,</span>
         <span class="token number">0</span><span class="token punctuation">,</span>
         <span class="token number">0</span><span class="token punctuation">,</span>
         <span class="token number">0</span><span class="token punctuation">,</span>
         <span class="token boolean">false</span><span class="token punctuation">,</span>
         <span class="token boolean">false</span><span class="token punctuation">,</span>
         <span class="token boolean">false</span><span class="token punctuation">,</span>
         <span class="token boolean">false</span><span class="token punctuation">,</span>
         <span class="token number">0</span><span class="token punctuation">,</span>
         <span class="token keyword">null</span><span class="token punctuation">,</span>
       <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    aLink<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 用的例子</span>
<span class="token keyword">const</span> sheet1data <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> department<span class="token operator">:</span> <span class="token string">&#39;行政部&#39;</span><span class="token punctuation">,</span> count<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> department<span class="token operator">:</span> <span class="token string">&#39;前端部&#39;</span><span class="token punctuation">,</span> count<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> sheet2data <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token keyword">do</span><span class="token operator">:</span> <span class="token string">&#39;整理文件&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token keyword">do</span><span class="token operator">:</span> <span class="token string">&#39;打印&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> sheet3data <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;张大人&#39;</span><span class="token punctuation">,</span> <span class="token keyword">do</span><span class="token operator">:</span> <span class="token string">&#39;vue&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;李大人&#39;</span><span class="token punctuation">,</span> <span class="token keyword">do</span><span class="token operator">:</span> <span class="token string">&#39;react&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> sheet1 <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">json_to_sheet</span><span class="token punctuation">(</span>sheet1data<span class="token punctuation">)</span>
<span class="token keyword">const</span> sheet2 <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">json_to_sheet</span><span class="token punctuation">(</span>sheet2data<span class="token punctuation">)</span>
<span class="token keyword">const</span> sheet3 <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">json_to_sheet</span><span class="token punctuation">(</span>sheet3data<span class="token punctuation">)</span>

<span class="token comment">/* create a new blank workbook */</span>
<span class="token keyword">const</span> wb <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">book_new</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">book_append_sheet</span><span class="token punctuation">(</span>wb<span class="token punctuation">,</span> sheet1<span class="token punctuation">,</span> <span class="token string">&#39;部门统计&#39;</span><span class="token punctuation">)</span>
<span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">book_append_sheet</span><span class="token punctuation">(</span>wb<span class="token punctuation">,</span> sheet2<span class="token punctuation">,</span> <span class="token string">&#39;行政部&#39;</span><span class="token punctuation">)</span>
<span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">book_append_sheet</span><span class="token punctuation">(</span>wb<span class="token punctuation">,</span> sheet3<span class="token punctuation">,</span> <span class="token string">&#39;前端部&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> workbookBlob <span class="token operator">=</span> <span class="token function">workbook2blob</span><span class="token punctuation">(</span>wb<span class="token punctuation">)</span>
<span class="token function">openDownloadDialog</span><span class="token punctuation">(</span>workbookBlob<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">部门统计.xlsx</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_21-富文本编辑器-wangeditor" tabindex="-1"><a class="header-anchor" href="#_21-富文本编辑器-wangeditor"><span>21.富文本编辑器 wangeditor</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 安装依赖包</span>
<span class="token function">pnpm</span> i <span class="token parameter variable">-S</span> @wangeditor/editor @wangeditor/editor-for-vue@next

<span class="token comment">## 官网</span>
https://www.wangeditor.com/v5/getting-started.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="封装组件" tabindex="-1"><a class="header-anchor" href="#封装组件"><span>封装组件</span></a></h4><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token string">&#39;@wangeditor/editor/dist/css/style.css&#39;</span> <span class="token comment">// 引入 css</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Editor<span class="token punctuation">,</span> Toolbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wangeditor/editor-for-vue&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> onBeforeUnmount<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> shallowRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 内容 HTML  */</span>
    <span class="token literal-property property">modelValue</span><span class="token operator">:</span> string
  <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> valueHtml <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>modelValue <span class="token operator">===</span> <span class="token string">&#39;&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;&lt;p&gt;hello&lt;/p&gt;&#39;</span> <span class="token operator">:</span> props<span class="token punctuation">.</span>modelValue<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">,</span> newVal<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  type <span class="token function-variable function">InsertFnType</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">url</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">poster</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  <span class="token keyword">const</span> editorConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;请输出内容...&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 配置默认提醒</span>
    <span class="token constant">MENU_CONF</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token doc-comment comment">/** 代码高亮 */</span>
       <span class="token literal-property property">codeSelectLang</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token literal-property property">codeLangs</span><span class="token operator">:</span> <span class="token punctuation">[</span>
             <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;CSS&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;css&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
             <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;HTML&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;html&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
             <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;XML&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;xml&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
           <span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>

       <span class="token doc-comment comment">/** 上传图片 */</span>
       <span class="token literal-property property">uploadImage</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token comment">// 小于该值就插入 base64 格局（而不上传），默认为 0</span>
           <span class="token literal-property property">base64LimitSize</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// 10MB</span>
           <span class="token literal-property property">maxFileSize</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// 单个文件的最大体积限度，默认为 2M</span>
           <span class="token literal-property property">maxNumberOfFiles</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 最多可上传几个文件，默认为 100</span>
           <span class="token literal-property property">allowedFileTypes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;image/*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 抉择文件时的类型限度，默认为 [&#39;image/*&#39;] 。如不想限度，则设置为 []</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>

       <span class="token doc-comment comment">/** 上传视频 */</span>
       <span class="token literal-property property">uploadVideo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token keyword">async</span> <span class="token function">customUpload</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">file</span><span class="token operator">:</span> File<span class="token punctuation">,</span> <span class="token literal-property property">insertFn</span><span class="token operator">:</span> InsertFnType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
               <span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
               reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                 <span class="token function">insertFn</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>event<span class="token operator">?.</span>target<span class="token operator">?.</span>result<span class="token punctuation">)</span><span class="token punctuation">,</span> file<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
                          <span class="token punctuation">}</span>
                          reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
               <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
                 <span class="token function">insertFn</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> file<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
               <span class="token punctuation">}</span>
             <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 编辑器实例，必须用 shallowRef</span>
    <span class="token keyword">const</span> editorRef <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 组件销毁时，也及时销毁编辑器</span>
    <span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> editor <span class="token operator">=</span> editorRef<span class="token punctuation">.</span>value
      <span class="token keyword">if</span> <span class="token punctuation">(</span>editor <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      editor<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token doc-comment comment">/** 创立富文本编辑器 */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleCreated</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">editor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    editorRef<span class="token punctuation">.</span>value <span class="token operator">=</span> editor
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toolbar</span>
         <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ccc</span><span class="token punctuation">&quot;</span></span></span>
         <span class="token attr-name">:editor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editorRef<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span>
     <span class="token punctuation">/&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span>
         <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>valueHtml<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span>
         <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span> <span class="token property">overflow-y</span><span class="token punctuation">:</span> hidden</span><span class="token punctuation">&quot;</span></span></span>
         <span class="token attr-name">:default-config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editorConfig<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">@on-created</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCreated<span class="token punctuation">&quot;</span></span>
     <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_22-压缩文件-jszip" tabindex="-1"><a class="header-anchor" href="#_22-压缩文件-jszip"><span>22. 压缩文件 jszip</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 安装依赖包</span>
<span class="token function">pnpm</span> i <span class="token parameter variable">-S</span> jszip jszip-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件"><span>解压文件</span></a></h4><blockquote><h4 id="ajax-request" tabindex="-1"><a class="header-anchor" href="#ajax-request"><span>AJAX request</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">JSZip<span class="token punctuation">.</span>external<span class="token punctuation">.</span>Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  JSZipUtils<span class="token punctuation">.</span><span class="token function">getBinaryContent</span><span class="token punctuation">(</span><span class="token string">&#39;path/to/content.zip&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
         <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> JSZip<span class="token punctuation">.</span><span class="token function">loadAsync</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token keyword">throw</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="本地文件" tabindex="-1"><a class="header-anchor" href="#本地文件"><span>本地文件</span></a></h4><p>首先所用的浏览器需要支持 FileReader API，那么你就可以通过 FileReader API 来读取本地文件</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;file&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;file&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;file&quot;</span> multiple
onchange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
   <span class="token keyword">const</span> files <span class="token operator">=</span> evt<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">;</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> files<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       JSZip<span class="token punctuation">.</span><span class="token function">loadAsync</span><span class="token punctuation">(</span>files<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">zip</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         <span class="token comment">// 读取成功，zip为压缩文件内容对象</span>
         <span class="token function">doSomethingWithSuccess</span><span class="token punctuation">(</span>zip<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">// 可能由于文件类型不匹配等原因读取失败</span>
         <span class="token function">doSomethingWithError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="读取出来的内容解析" tabindex="-1"><a class="header-anchor" href="#读取出来的内容解析"><span>读取出来的内容解析</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>JSZip<span class="token punctuation">.</span><span class="token function">loadAsync</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">zip</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// 文本格式的文件</span>
  zip<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string">&quot;content.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// png jpg pdf </span>
 zip<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string">&quot;content.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token string">&#39;uint8array&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="压缩文件" tabindex="-1"><a class="header-anchor" href="#压缩文件"><span>压缩文件</span></a></h4>`,35),j=n("p",null,"由于只有javascript，这部分不能在旧浏览器中工作，包括IE < 10。对于其他浏览器，可以采用下面的方法生成压缩文件并存储在本地，由于浏览器无法直接读写本地文件，所以通过浏览器下载的方式存储至本地。",-1),S={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Feligrey%2FFileSaver.js",target:"_blank",rel:"noopener noreferrer"},_={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fjimmywarting%2FStreamSaver.js",target:"_blank",rel:"noopener noreferrer"},E=a(`<blockquote><p>FileSaver.js保存文件在客户端，很适合web应用程序在客户端生成文件,但是如果文件来自服务器，我们建议您先尝试使用附加附件响应头,因为它有更多的跨浏览器相容性。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> saveAs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;file-saver&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> JSZip <span class="token keyword">from</span> <span class="token string">&#39;jszip&#39;</span>

<span class="token keyword">let</span> zip <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSZip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
zip<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string">&quot;Hello.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello world\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1) generate the zip file		2) trigger the download</span>
zip<span class="token punctuation">.</span><span class="token function">generateAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;blob&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">blob</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
  <span class="token function">saveAs</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span> <span class="token string">&quot;hello.zip&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                   
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="data-url" tabindex="-1"><a class="header-anchor" href="#data-url"><span>Data URL</span></a></h4><p>在IE中不工作，对长度有限制。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> JSZip <span class="token keyword">from</span> <span class="token string">&#39;jszip&#39;</span>

<span class="token keyword">let</span> zip <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSZip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
zip<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string">&quot;Hello.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello world\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1) generate the zip file		2) trigger the download</span>
zip<span class="token punctuation">.</span><span class="token function">generateAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;base64&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">base64</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
  window<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">&quot;data:application/zip;base64,&quot;</span> <span class="token operator">+</span> base64<span class="token punctuation">;</span>               
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="downloadify" tabindex="-1"><a class="header-anchor" href="#downloadify"><span>Downloadify</span></a></h4>`,6),C={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fdcneiner%2Fdownloadify",target:"_blank",rel:"noopener noreferrer"},M=a(`<blockquote><p>swf仅供在线使用。从文件路径(即文件://)进行测试将不起作用，因为它将违反安全沙箱。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> JSZip <span class="token keyword">from</span> <span class="token string">&#39;jszip&#39;</span>

<span class="token keyword">let</span> zip <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSZip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
zip<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string">&quot;Hello.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello world\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
zip<span class="token punctuation">.</span><span class="token function">generateAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;base64&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">base64</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
  Downloadify<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;downloadify&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> base64<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&#39;base64&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),T=a(`<h4 id="创建压缩包" tabindex="-1"><a class="header-anchor" href="#创建压缩包"><span>创建压缩包</span></a></h4><blockquote><h3 id="读取文件并添加至zip文件中" tabindex="-1"><a class="header-anchor" href="#读取文件并添加至zip文件中"><span>读取文件并添加至zip文件中</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// read a file and add it to a zip</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&quot;picture.png&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
   <span class="token keyword">var</span> zip <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSZip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   zip<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string">&quot;picture.png&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// or</span>
<span class="token keyword">var</span> contentPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSZip<span class="token punctuation">.</span>external<span class="token punctuation">.</span>Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&quot;picture.png&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
         <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
zip<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string">&quot;picture.png&quot;</span><span class="token punctuation">,</span> contentPromise<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// read a file as a stream and add it to a zip</span>
<span class="token keyword">var</span> stream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&quot;picture.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
zip<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string">&quot;picture.png&quot;</span><span class="token punctuation">,</span> stream<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将zip内容制成压缩包" tabindex="-1"><a class="header-anchor" href="#将zip内容制成压缩包"><span>将zip内容制成压缩包</span></a></h3><p>JSZip can generate Buffers so you can do the following :</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> JSZip <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;jszip&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> zip <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSZip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// zip.file(&quot;file&quot;, content);</span>
<span class="token comment">// ... and other manipulations</span>

zip
  <span class="token punctuation">.</span><span class="token function">generateNodeStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;nodebuffer&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">streamFiles</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&#39;out.zip&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;finish&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// JSZip generates a readable stream with a &quot;end&quot; event,</span>
  <span class="token comment">// but is piped here in a writable stream which emits a &quot;finish&quot; event.</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;out.zip written.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> JSZip <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;jszip&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> zip <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSZip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// zip.file(&quot;file&quot;, content);</span>
<span class="token comment">// ... and other manipulations</span>

<span class="token keyword">const</span> zipContent <span class="token operator">=</span> <span class="token keyword">await</span> zip<span class="token punctuation">.</span><span class="token function">generateAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token comment">//设置压缩格式，开始打包</span>
     <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;nodebuffer&#39;</span><span class="token punctuation">,</span> <span class="token comment">//nodejs用</span>
     <span class="token literal-property property">compression</span><span class="token operator">:</span> <span class="token string">&#39;STORE&#39;</span><span class="token punctuation">,</span> <span class="token comment">//压缩算法</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>targetPath<span class="token punctuation">,</span> zipContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>demo</span></a></h4><blockquote><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--
 * @ Author: willysliang
 * @ Create Time: 2022-11-17 10:05:58
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-18 17:59:09
 * @ Description: 压缩文件下载组件
 --&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage<span class="token punctuation">,</span> ElNotification <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> JSZip <span class="token keyword">from</span> <span class="token string">&#39;jszip&#39;</span>
<span class="token keyword">import</span> JSZipUtils <span class="token keyword">from</span> <span class="token string">&#39;jszip-utils&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> saveAs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;file-saver&#39;</span>

type TableItemType <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">fileName</span><span class="token operator">:</span> string
  <span class="token literal-property property">fileUrl</span><span class="token operator">:</span> string
  <span class="token literal-property property">uploadTime</span><span class="token operator">:</span> string
  <span class="token literal-property property">uploadUser</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
<span class="token keyword">const</span> tableData <span class="token operator">=</span> ref<span class="token operator">&lt;</span>TableItemType<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;ava1.png&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fileUrl</span><span class="token operator">:</span>
      <span class="token string">&#39;https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">uploadTime</span><span class="token operator">:</span> <span class="token string">&#39;2021-07-02&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">uploadUser</span><span class="token operator">:</span> <span class="token string">&#39;MrZip&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;package.zip&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fileUrl</span><span class="token operator">:</span> <span class="token string">&#39;./test/package.zip&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">uploadTime</span><span class="token operator">:</span> <span class="token string">&#39;2021-07-01&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">uploadUser</span><span class="token operator">:</span> <span class="token string">&#39;MrZip&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;jszip.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fileUrl</span><span class="token operator">:</span> <span class="token string">&#39;./test/jszip.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">uploadTime</span><span class="token operator">:</span> <span class="token string">&#39;2021-07-02&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">uploadUser</span><span class="token operator">:</span> <span class="token string">&#39;MrZip&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;style.css&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fileUrl</span><span class="token operator">:</span> <span class="token string">&#39;./test/style.css&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">uploadTime</span><span class="token operator">:</span> <span class="token string">&#39;2021-07-03&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">uploadUser</span><span class="token operator">:</span> <span class="token string">&#39;MrCss&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> downloadSelectZip <span class="token operator">=</span> ref<span class="token operator">&lt;</span>JSZip<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JSZip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> multipleSelection <span class="token operator">=</span> ref<span class="token operator">&lt;</span>TableItemType<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">as</span> TableItemType<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 文件路径转化为数据流 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">urlToPromise</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">url</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      JSZipUtils<span class="token punctuation">.</span><span class="token function">getBinaryContent</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">err</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/***
 * <span class="token keyword">@description</span> 下载压缩文件
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleDownloadSelectFile</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>multipleSelection<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ElMessage<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string">&#39;请先选择需要下载的文件&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 循环把文件路径转化为数据流 */</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> multipleSelection<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> tempUrl <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">urlToPromise</span><span class="token punctuation">(</span>multipleSelection<span class="token punctuation">.</span>value<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>fileUrl<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tempUrl<span class="token punctuation">)</span>
      downloadSelectZip<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span>
        multipleSelection<span class="token punctuation">.</span>value<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>fileName<span class="token punctuation">,</span>
        tempUrl <span class="token keyword">as</span> ArrayBuffer <span class="token operator">|</span> string<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/** 计算下载文件进度 */</span>
    <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">await</span> downloadSelectZip<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">generateAsync</span><span class="token punctuation">(</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;blob&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token parameter">metadata</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        percentage<span class="token punctuation">.</span>value <span class="token operator">=</span> metadata<span class="token punctuation">.</span>percent
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    <span class="token doc-comment comment">/** 下载文件 */</span>
    <span class="token function">saveAs</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span> <span class="token string">&#39;example.zip&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ElNotification<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;下载压缩文件失败&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 文件下载进度控制 */</span>
<span class="token keyword">const</span> percentage <span class="token operator">=</span> ref<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleSelectionChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>percentage<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    percentage<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  multipleSelection<span class="token punctuation">.</span>value <span class="token operator">=</span> val
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 下载压缩已上传文件的zip场景 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-row</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span> <span class="token attr-name">:offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>22<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-card</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-row</span> <span class="token attr-name">:gutter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mb-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleDownloadSelectFile<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
              下载 Zip (FileSaver API)
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span>
                <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">:content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$t(&#39;demo.zip.zipDownloadTip&#39;)<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top-start<span class="token punctuation">&quot;</span></span>
              <span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QuestionFilled</span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-row</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-divider</span> <span class="token attr-name">content-position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          下载压缩已上传文件的zip场景
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-divider</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-progress</span>
          <span class="token attr-name">:text-inside</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>15<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:percentage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>percentage<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table</span>
          <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">tooltip-effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span>
          <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">&quot;</span></span></span>
          <span class="token attr-name">@selection-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSelectionChange<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selection<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>55<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>文件名称<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploadTime<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>上传时间<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
            <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploadUser<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>上传人<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">show-overflow-tooltip</span>
          <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-card</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-row</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_23-页面引导插件-driver-js" tabindex="-1"><a class="header-anchor" href="#_23-页面引导插件-driver-js"><span>23. 页面引导插件 driver.js</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 插件的 GitHub 地址</span>
https://github.com/kamranahmedse/driver.js
https://kamranahmed.info/driver.js/<span class="token comment">#single-element-no-popover</span>

<span class="token comment">## 插件导入</span>
<span class="token function">pnpm</span> i <span class="token parameter variable">-S</span> driver.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插件调用示例" tabindex="-1"><a class="header-anchor" href="#插件调用示例"><span>插件调用示例</span></a></h3><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">import</span> Driver <span class="token keyword">from</span> <span class="token string">&#39;driver.js&#39;</span>
  <span class="token keyword">import</span> <span class="token string">&#39;driver.js/dist/driver.min.css&#39;</span>

  <span class="token keyword">const</span> <span class="token literal-property property">steps</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>Driver<span class="token punctuation">.</span>Step<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
       <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">&#39;.header&#39;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">popover</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Header&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;头部控制栏&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
       <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">&#39;.menus&#39;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">popover</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Menu&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;菜单选择&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
       <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">&#39;.mains&#39;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">popover</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Main&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;主内容区域&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
       <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token string">&#39;.footer&#39;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">popover</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Footer&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;底部音乐播放控制器&#39;</span><span class="token punctuation">,</span>
           <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>

  <span class="token keyword">const</span> driver <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name">Driver</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
       <span class="token comment">// className: &#39;scoped-class&#39;, // className to wrap driver.js popover</span>
       <span class="token literal-property property">animate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Animate while changing highlighted element</span>
       <span class="token literal-property property">doneBtnText</span><span class="token operator">:</span> <span class="token string">&#39;完成&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Text on the final button</span>
       <span class="token literal-property property">closeBtnText</span><span class="token operator">:</span> <span class="token string">&#39;关闭&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Text on the close button for this step</span>
       <span class="token literal-property property">nextBtnText</span><span class="token operator">:</span> <span class="token string">&#39;下一步&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Next button text for this step</span>
       <span class="token literal-property property">prevBtnText</span><span class="token operator">:</span> <span class="token string">&#39;上一步&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Previous button text for this step</span>
       <span class="token literal-property property">keyboardControl</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Allow controlling through keyboard (escape to close, arrow keys to move)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleShowGuide</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    driver<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">defineSteps</span><span class="token punctuation">(</span>steps<span class="token punctuation">)</span>
    driver<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#content</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-link</span>
     <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://kamranahmed.info/driver.js/#single-element-no-popover<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span>
   <span class="token punctuation">&gt;</span></span>
     driver.js
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-link</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleShowGuide<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>展开引导<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_24-图片裁剪插件-cropperjs" tabindex="-1"><a class="header-anchor" href="#_24-图片裁剪插件-cropperjs"><span>24. 图片裁剪插件 cropperjs</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 插件安装</span>
<span class="token function">pnpm</span> i <span class="token parameter variable">-S</span> cropperjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="文档说明" tabindex="-1"><a class="header-anchor" href="#文档说明"><span>文档说明</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 配置对象 （注意：第一个值为默认值）https://github.com/fengyuanchen/cropperjs/blob/main/README.md</span>
- viewMode 视图控制 <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span>
    <span class="token number">0</span> 无限制
    <span class="token number">1</span> 限制裁剪框不能超出图片的范围
    <span class="token number">2</span> 限制裁剪框不能超出图片的范围 且图片填充模式为 cover 最长边填充
    <span class="token number">3</span> 限制裁剪框不能超出图片的范围 且图片填充模式为 contain 最短边填充
- dragMode 拖拽图片模式 <span class="token string">&#39;crop&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;move&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;none&#39;</span>
    crop 形成新的裁剪框
    move 图片可移动
    none 什么也没有
- initialAspectRatio 裁剪框宽高比的初始值 <span class="token number">0</span>~1~n 默认与图片宽高比相同<span class="token punctuation">(</span>只有在aspectRatio没有设置的情况下可用<span class="token punctuation">)</span>
- aspectRatio 设置裁剪框为固定的宽高比
- data 之前存储的裁剪后的数据 在初始化时会自动设置 只有在autoCrop设置为true时可用
- preview 预览 设置一个区域容器预览裁剪后的结果 
		Element, Array <span class="token punctuation">(</span>elements<span class="token punctuation">)</span>, NodeList or String <span class="token punctuation">(</span>selector<span class="token punctuation">)</span>
- responsive 在窗口尺寸调整后 进行响应式的重渲染 默认true
- restore 在窗口尺寸调整后 恢复被裁剪的区域 默认true
- checkCrossOrigin 检查图片是否跨域 默认true 如果是 会在被复制的图片元素上加上属性crossOrigin 并且在src上加上一个时间戳 避免重加载图片时因为浏览器缓存而加载错误
- checkOrientation 检查图片的方向信息（仅JPEG图片有）默认true 在旋转图片时会对图片方向值做一些处理 以解决IOS设备上的一些问题
- modal 是否显示图片和裁剪框之间的黑色蒙版 默认true
- guides 是否显示裁剪框的虚线 默认true
- center 是否显示裁剪框中间的 ‘+’ 指示器 默认true
- highlight 是否显示裁剪框上面的白色蒙版 （很淡）默认true
- background 是否在容器内显示网格状的背景 默认true
- autoCrop 允许初始化时自动的裁剪图片 配合 data 使用 默认true
- autoCropArea 设置裁剪区域占图片的大小 值为 <span class="token number">0</span>-1 默认 <span class="token number">0.8</span> 表示 <span class="token number">80</span>%的区域
- movable 是否可以移动图片 默认true
- rotatable 是否可以旋转图片 默认true
- scalable 是否可以缩放图片（可以改变长宽） 默认true
- zoomable 是否可以缩放图片（改变焦距） 默认true
- zoomOnTouch 是否可以通过拖拽触摸缩放图片 默认true
- zoomOnWheel 是否可以通过鼠标滚轮缩放图片 默认true
- wheelZoomRatio 设置鼠标滚轮缩放的灵敏度 默认 <span class="token number">0.1</span>
- cropBoxMovable 是否可以拖拽裁剪框 默认true
- cropBoxResizable 是否可以改变裁剪框的尺寸 默认true
- toggleDragModeOnDblclick 是否可以通过双击切换拖拽图片模式（move和crop）默认true 当拖拽图片模式为none时不可切换 该设置必须浏览器支持双击事件
- minContainerWidth（200）、minContainerHeight（100）、minCanvasWidth（0）、minCanvasHeight（0）、minCropBoxWidth（0）、minCropBoxHeight（0） 容器、图片、裁剪框的 最小宽高 括号内为默认值 注意 裁剪框的最小高宽是相对与页面而言的 并非相对图片


<span class="token comment">## 方法：（注意：如果方法没有被设置返回任何值，那么它会返回一个cropper的实例 因此多个方法可以使用链式写法）</span>
crop<span class="token punctuation">(</span><span class="token punctuation">)</span> 手动显示裁剪框
reset<span class="token punctuation">(</span><span class="token punctuation">)</span> 重置图片和裁剪框为初始状态
replace<span class="token punctuation">(</span>url<span class="token punctuation">[</span>, hasSameSize<span class="token punctuation">]</span><span class="token punctuation">)</span> 替换图片路径并且重建裁剪框
url 新路径
hasSameSize 默认值false 设置为true表示新老图片尺寸一样 只需要更换路径无需重建裁剪框
enable<span class="token punctuation">(</span><span class="token punctuation">)</span> 解冻 裁剪框
disable<span class="token punctuation">(</span><span class="token punctuation">)</span> 冻结 裁剪框
destroy<span class="token punctuation">(</span><span class="token punctuation">)</span> 摧毁裁剪框并且移除cropper实例
move<span class="token punctuation">(</span>offsetX<span class="token punctuation">[</span>, offsetY<span class="token punctuation">]</span><span class="token punctuation">)</span> 移动图片指定距离 一个参数代表横纵向移动距离一样
moveTo<span class="token punctuation">(</span>x<span class="token punctuation">[</span>, y<span class="token punctuation">]</span><span class="token punctuation">)</span> 移动图片到一个指定的点 一个参数代表横纵向移动距离一样
zoom<span class="token punctuation">(</span>ratio<span class="token punctuation">)</span> 缩放 ratio大于零是放大 小于零缩小
zoomTo<span class="token punctuation">(</span>ratio<span class="token punctuation">[</span>, pivot<span class="token punctuation">]</span><span class="token punctuation">)</span> 缩放并设置中心点的位置
rotate<span class="token punctuation">(</span>degree<span class="token punctuation">)</span> 旋转 类似css
rotateTo<span class="token punctuation">(</span>degree<span class="token punctuation">)</span> 旋转到绝对角度
scale<span class="token punctuation">(</span>scaleX<span class="token punctuation">[</span>, scaleY<span class="token punctuation">]</span><span class="token punctuation">)</span>、scaleX<span class="token punctuation">(</span>scaleX<span class="token punctuation">)</span>、scaleY<span class="token punctuation">(</span>scaleY<span class="token punctuation">)</span> 缩放 一个参数代表横纵向缩放值一样
getData<span class="token punctuation">(</span><span class="token punctuation">[</span>rounded<span class="token punctuation">]</span><span class="token punctuation">)</span> 返回裁剪区域基于原图片<span class="token operator">!</span>原尺寸<span class="token operator">!</span>的位置和尺寸 rounded默认为false 表示是否显示四舍五入后的数据 有了这些数据可以直接在原图上进行裁剪显示
setData<span class="token punctuation">(</span>data<span class="token punctuation">)</span> 改变裁剪区域基于原图的位置和尺寸 仅当viewMode 不为0时有效
getContainerData<span class="token punctuation">(</span><span class="token punctuation">)</span>、getImageData<span class="token punctuation">(</span><span class="token punctuation">)</span>、getCanvasData<span class="token punctuation">(</span><span class="token punctuation">)</span>、setCanvasData<span class="token punctuation">(</span>data<span class="token punctuation">)</span>、getCropBoxData<span class="token punctuation">(</span><span class="token punctuation">)</span>、setCropBoxData<span class="token punctuation">(</span>data<span class="token punctuation">)</span> 容器、图片容器（画布）、图片、裁剪区域相对容器的数据设置和获取
getCroppedCanvas<span class="token punctuation">(</span><span class="token punctuation">[</span>options<span class="token punctuation">]</span><span class="token punctuation">)</span> 得到被裁剪图片的一个canvas对象 options设置这个canvas的一些数据
width、height、minWidth、minHeight、maxWidth、maxHeight、fillColor、imageSmoothingEnabled（图片是否是光滑的 默认true）、imageSmoothingQuality（图片的质量 默认low 还有medium、high）
setAspectRatio<span class="token punctuation">(</span>aspectRatio<span class="token punctuation">)</span> 改变裁剪区域的宽高比
setDragMode<span class="token punctuation">(</span><span class="token punctuation">[</span>mode<span class="token punctuation">]</span><span class="token punctuation">)</span> 设置拖拽图片模式


<span class="token comment">## 事件</span>
ready 渲染前（图片已经被加载、cropper实例已经准备完毕）的准备工作事件
cropstart、cropmove、cropend、crop 开始画裁剪框（或画布）、画裁剪框（或画布）的中途、裁剪框（或画布）画完、进行裁剪事件 event.detail.originalEvent、event.detail.action
当autoCrop为true crop事件会在ready之前触发
zoom 裁剪框缩放事件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;cropperjs/dist/cropper.css&#39;</span>
<span class="token keyword">import</span> Cropper <span class="token keyword">from</span> <span class="token string">&#39;cropperjs&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> avactor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/assets/images&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> IconPark <span class="token keyword">from</span> <span class="token string">&#39;@comp/common/IconPark.vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  AddPicture<span class="token punctuation">,</span>
  Save<span class="token punctuation">,</span>
  Refresh<span class="token punctuation">,</span>
  FriendsCircle<span class="token punctuation">,</span>
  ZoomIn<span class="token punctuation">,</span>
  ZoomOut<span class="token punctuation">,</span>
  Redo<span class="token punctuation">,</span>
  Undo<span class="token punctuation">,</span>
  AutoHeightOne<span class="token punctuation">,</span>
  AutoWidthOne<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@icon-park/vue-next&#39;</span>

<span class="token keyword">const</span> image <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> imageSrc <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">(</span>avactor<span class="token punctuation">)</span>
<span class="token keyword">const</span> cropper <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Cropper<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 挂载 Cropper 实例 */</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  cropper<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cropper</span><span class="token punctuation">(</span>image<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">viewMode</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dragMode</span><span class="token operator">:</span> <span class="token string">&#39;move&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">preview</span><span class="token operator">:</span> <span class="token string">&#39;.preview&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoCropArea</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">checkOrientation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">zoomOnWheel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 打开文件 */</span>
<span class="token keyword">const</span> fileRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">openFile</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  fileRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MouseEvent</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> chooseImage <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> inputFile <span class="token operator">=</span> fileRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>inputFile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(gif|png|jpg|jpeg)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>inputFile<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ElMessage<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string">&#39;上传头像图片只能是gif|png|jpg|jpeg 格式!&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>inputFile<span class="token punctuation">)</span>
    reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">ev</span><span class="token operator">:</span> ProgressEvent<span class="token operator">&lt;</span>FileReader<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      imageSrc<span class="token punctuation">.</span>value <span class="token operator">=</span> ev<span class="token operator">?.</span>target<span class="token operator">?.</span>result <span class="token operator">??</span> <span class="token string">&#39;&#39;</span>
      cropper<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>ev<span class="token operator">?.</span>target<span class="token operator">?.</span>result <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 保存 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleSave</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">dataURLtoBlob</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">dataurl</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> dataurl<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> mime <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">?.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">:(.*?);</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> bstr <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">atob</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> n <span class="token operator">=</span> bstr<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> u8arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      u8arr<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> bstr<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>u8arr<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> mime <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> downloadFile <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> string<span class="token punctuation">,</span> name <span class="token operator">=</span> <span class="token string">&#39;defaultFileName&#39;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
    a<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
    a<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;download&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
    a<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;target&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_blank&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> clickEvent <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createEvent</span><span class="token punctuation">(</span><span class="token string">&#39;MouseEvents&#39;</span><span class="token punctuation">)</span>
    clickEvent<span class="token punctuation">.</span><span class="token function">initEvent</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    a<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>clickEvent<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">downloadFileByBase64</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">base64</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">undefined</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> myBlob <span class="token operator">=</span> <span class="token function">dataURLtoBlob</span><span class="token punctuation">(</span>base64<span class="token punctuation">)</span>
    <span class="token keyword">const</span> myUrl <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>myBlob<span class="token punctuation">)</span>
    <span class="token function">downloadFile</span><span class="token punctuation">(</span>myUrl<span class="token punctuation">,</span> name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> getCutImg <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      cropper<span class="token punctuation">.</span>value
        <span class="token operator">?.</span><span class="token function">getCroppedCanvas</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">imageSmoothingQuality</span><span class="token operator">:</span> <span class="token string">&#39;high&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 图片质量</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">)</span> <span class="token comment">// 设置图片格式</span>
  <span class="token punctuation">}</span>

  <span class="token function">downloadFileByBase64</span><span class="token punctuation">(</span><span class="token function">getCutImg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;cropImg&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 处理后的图片 */</span>
<span class="token comment">// const cropImg = ref()</span>
<span class="token keyword">const</span> cropShotImg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 重做 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleReset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  cropper<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 快照 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleShot</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  cropShotImg<span class="token punctuation">.</span>value <span class="token operator">=</span> cropper<span class="token punctuation">.</span>value
    <span class="token operator">?.</span><span class="token function">getCroppedCanvas</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">imageSmoothingQuality</span><span class="token operator">:</span> <span class="token string">&#39;high&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">&#39;image/jpeg&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 缩小/放大 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleZoom</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">percent</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  cropper<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">zoom</span><span class="token punctuation">(</span>percent<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 旋转 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleRotate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">deg</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  cropper<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">rotate</span><span class="token punctuation">(</span>deg<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 翻转 */</span>
<span class="token keyword">const</span> flipY <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> flipX <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> handleFlip <span class="token operator">=</span> <span class="token punctuation">(</span>axis<span class="token operator">:</span> <span class="token string">&#39;X&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Y&#39;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dom <span class="token operator">=</span> axis <span class="token operator">===</span> <span class="token string">&#39;Y&#39;</span> <span class="token operator">?</span> flipY<span class="token punctuation">.</span>value <span class="token operator">:</span> flipX<span class="token punctuation">.</span>value
  <span class="token keyword">let</span> scale <span class="token operator">=</span> dom<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-scale&#39;</span><span class="token punctuation">)</span>
  scale <span class="token operator">=</span> scale <span class="token operator">?</span> <span class="token operator">-</span>scale <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>axis <span class="token operator">===</span> <span class="token string">&#39;Y&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cropper<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">scaleY</span><span class="token punctuation">(</span>scale<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    cropper<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">scaleX</span><span class="token punctuation">(</span>scale<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  dom<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-scale&#39;</span><span class="token punctuation">,</span> scale<span class="token punctuation">)</span>
  cropper<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">180</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crop-image w-full h-full<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 操作栏 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inline-block bg-gray-500 box-border p-1 rounded-t-md<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex flex-row items-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>打开<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operator cursor-pointer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openFile<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconPark</span> <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>AddPicture<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
              <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileRef<span class="token punctuation">&quot;</span></span>
              <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> none</span><span class="token punctuation">&quot;</span></span></span>
              <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image/*<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chooseImage<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>保存<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconPark</span>
            <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Save<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operator cursor-pointer<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSave<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>重做<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconPark</span>
            <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Refresh<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operator cursor-pointer<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleReset<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>快照<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconPark</span>
            <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>FriendsCircle<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operator cursor-pointer<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleShot<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>缩小<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconPark</span>
            <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ZoomOut<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operator cursor-pointer<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleZoom(-0.2)<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>放大<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconPark</span>
            <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ZoomIn<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operator cursor-pointer<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleZoom(0.2)<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>正向旋转+90<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>light<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconPark</span>
            <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Redo<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operator cursor-pointer<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleRotate(90)<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>反向旋转-90<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>light<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconPark</span>
            <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Undo<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operator cursor-pointer<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleRotate(-90)<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>上下翻转<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>light<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
            <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flipY<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operator cursor-pointer<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleFlip(&#39;Y&#39;)<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconPark</span> <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>AutoHeightOne<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>左右翻转<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>light<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
            <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flipX<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operator cursor-pointer<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleFlip(&#39;X&#39;)<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconPark</span> <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>AutoWidthOne<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>w-full flex flex-row items-center justify-between<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- 裁剪区域 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>w-8/12 h-96 border border-dashed border-gray-400<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
          <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imageSrc<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>w-full h-full block max-w-full<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h-56 w-full flex flex-col justify-around items-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-lg font-bold<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>预览<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preview<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h-56 w-full flex flex-col justify-around items-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-lg font-bold mt-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>快照<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
            <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cropShotImg<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cropShotImg<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>快照<span class="token punctuation">&quot;</span></span>
            <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>20rem * <span class="token punctuation">(</span>9 / 16<span class="token punctuation">)</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>w-4/5 overflow-hidden object-scale-down border-2 border-solid border-gray-500<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>20rem * <span class="token punctuation">(</span>9 / 16<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>w-4/5 border-2 border-solid border-gray-500<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.crop-image</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>
		90deg<span class="token punctuation">,</span>
		<span class="token function">rgb</span><span class="token punctuation">(</span>50 0 0 / 5%<span class="token punctuation">)</span> 3%<span class="token punctuation">,</span>
		<span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 / 0%<span class="token punctuation">)</span> 3%
	<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">linear-gradient</span><span class="token punctuation">(</span>360deg<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>50 0 0 / 5%<span class="token punctuation">)</span> 3%<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 / 0%<span class="token punctuation">)</span> 3%<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">background-size</span><span class="token punctuation">:</span> 20px 20px<span class="token punctuation">;</span>
	<span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat<span class="token punctuation">;</span>
	<span class="token property">background-position</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>

	<span class="token selector">.preview</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>20rem * <span class="token punctuation">(</span>9 / 16<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.operator</span> <span class="token punctuation">{</span>
		<span class="token atrule"><span class="token rule">@apply</span> cursor-pointer transition-colors duration-300<span class="token punctuation">;</span></span>
		<span class="token atrule"><span class="token rule">@apply</span> <span class="token property">hover</span><span class="token punctuation">:</span>bg-gray-300 <span class="token property">hover</span><span class="token punctuation">:</span>text-gray-100<span class="token punctuation">;</span></span>
		<span class="token atrule"><span class="token rule">@apply</span> flex flex-row items-center justify-center<span class="token punctuation">;</span></span>
		<span class="token atrule"><span class="token rule">@apply</span> box-border p-2<span class="token punctuation">;</span></span>
		<span class="token atrule"><span class="token rule">@apply</span> rounded<span class="token punctuation">;</span></span>
		<span class="token atrule"><span class="token rule">@apply</span> text-gray-200<span class="token punctuation">;</span></span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_25-拖拽组件-vuedraggable" tabindex="-1"><a class="header-anchor" href="#_25-拖拽组件-vuedraggable"><span>25.拖拽组件 vuedraggable</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## sortablejs 官网（基于DOM操作的，对vue的数据响应式支持需要额外定义）</span>
http://www.sortablejs.com/options.html
github.com/SortableJS/Sortable.git

<span class="token comment">## 插件安装（无法友善的改变数据，不推荐使用该插件）</span>
<span class="token function">pnpm</span> i <span class="token parameter variable">-S</span> sortablejs


<span class="token comment">## vue-draggable 官网（基于sortablejs 开发的）</span>
https://www.itxst.com/vue-draggable-next/tutorial.html

<span class="token comment">## 插件安装</span>
<span class="token function">pnpm</span> i <span class="token parameter variable">-S</span> vuedraggable@next

<span class="token comment">## bug（已修复）</span>
bug问题：当子列为空时，无法移入该行
bug修复：添加一个空的div，并设置为可移动的class类
 <span class="token operator">&lt;</span><span class="token operator">!</span>-- 解决子任务为空时，其他列无法移入该列 --<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>div <span class="token assign-left variable">class</span><span class="token operator">=</span><span class="token string">&quot;task-item&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="界面参考" tabindex="-1"><a class="header-anchor" href="#界面参考"><span>界面参考</span></a></h3><p><img src="`+m+`" alt="image-20221201112358756"></p><h3 id="界面功能实现" tabindex="-1"><a class="header-anchor" href="#界面功能实现"><span>界面功能实现</span></a></h3><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--
 * @ Author: willysliang
 * @ Create Time: 2022-11-25 11:07:23
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-01 11:27:21
 * @ Description: 拖拽组件
 --&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> draggable <span class="token keyword">from</span> <span class="token string">&#39;vuedraggable&#39;</span>
<span class="token keyword">import</span> IconPark <span class="token keyword">from</span> <span class="token string">&#39;@comp/common/IconPark.vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bug <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@icon-park/vue-next&#39;</span>

<span class="token keyword">const</span> tasklist <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;待处理&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">taskName</span><span class="token operator">:</span> <span class="token string">&#39;任务一&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">avatar</span><span class="token operator">:</span>
          <span class="token string">&#39;https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">&#39;中&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&#39;作为超级管理员和权限管理员，可以读取所有用户信息，测试用例，界面设计&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">taskName</span><span class="token operator">:</span> <span class="token string">&#39;任务二&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">avatar</span><span class="token operator">:</span>
          <span class="token string">&#39;https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">&#39;中&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&#39;作息，测试用例，界面设计&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;设计中&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">taskName</span><span class="token operator">:</span> <span class="token string">&#39;任务三&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">avatar</span><span class="token operator">:</span>
          <span class="token string">&#39;https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">&#39;中&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&#39;户信息，测试用例，界面设计&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">taskName</span><span class="token operator">:</span> <span class="token string">&#39;任务四&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">avatar</span><span class="token operator">:</span>
          <span class="token string">&#39;https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">&#39;中&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&#39;任务四描述&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> group <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;task&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">put</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pull</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>board w-full h-full bg-white flex flex-row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 任务列表 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(task, index) in tasklist<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>task w-44 h-full mr-2 bg-gray-200 box-border py-2 flex flex-col<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mx-2 mb-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>font-bold<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ task.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>font-bold ml-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>({{ task.list?.length }})<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

      <span class="token comment">&lt;!-- 子任务列表 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 解决子任务为空时，其他列无法移入该列 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>task-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>draggable</span>
          <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>task.list<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:item-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(key) =&gt; key<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">handle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.task-item<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.forbid<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:force-fallback</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">animation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:group</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>group<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:fallback-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:fallback-on-body</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:touch-start-threshold</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:fallback-tolerance</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:sort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ element }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
              <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>task-item w-full h-28 my-2 box-border p-2 border border-solid border-gray-400 bg-white cursor-move<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">&gt;</span></span>
              <span class="token comment">&lt;!-- 子任务头部信息 --&gt;</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h-7 flex flex-row items-center justify-between<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex flex-row items-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconPark</span>
                    <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Bug<span class="token punctuation">&quot;</span></span>
                    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>14<span class="token punctuation">&quot;</span></span>
                    <span class="token attr-name">:stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span>
                    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cursor-pointer mr-1 box-border p-1 bg-green-500 text-white<span class="token punctuation">&quot;</span></span>
                  <span class="token punctuation">/&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ element.taskName }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
                  <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element.avatar<span class="token punctuation">&quot;</span></span>
                  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>头像<span class="token punctuation">&quot;</span></span>
                  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h-full rounded-full<span class="token punctuation">&quot;</span></span>
                <span class="token punctuation">/&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

              <span class="token comment">&lt;!-- 子任务状态 --&gt;</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bg-yellow-500 text-white box-border p-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                  {{ task.title }}
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bg-blue-100 text-blue-500 mx-2 box-border p-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                  {{ element.level }}
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

              <span class="token comment">&lt;!-- 子任务描述 --&gt;</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>task-desc leading-4 mt-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                {{ element.desc }}
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>draggable</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.board</span> <span class="token punctuation">{</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>

	<span class="token selector">.task</span> <span class="token punctuation">{</span>
		<span class="token property">min-height</span><span class="token punctuation">:</span> 35rem<span class="token punctuation">;</span>

		<span class="token selector">.task-desc</span> <span class="token punctuation">{</span>
			<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> // 超出的隐藏显示
			<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span> // 省略号显示溢出部分
			<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
			<span class="token property">line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
			<span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span> // 限制在一个块元素显示的文本行数
			<span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span> // 设置或检索伸缩盒对象的子元素的排列顺序
			<span class="token property">word-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span>
			<span class="token property">line-height</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_26-日历组件" tabindex="-1"><a class="header-anchor" href="#_26-日历组件"><span>26.日历组件</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="_27-二维码生成插件-qrcode" tabindex="-1"><a class="header-anchor" href="#_27-二维码生成插件-qrcode"><span>27. 二维码生成插件 qrcode</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 插件安装</span>
<span class="token function">pnpm</span> i <span class="token parameter variable">-S</span> @types/qrcode qrcode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="封装组件-1" tabindex="-1"><a class="header-anchor" href="#封装组件-1"><span>封装组件</span></a></h3><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--
* @ Author: willysliang
* @ Create Time: 2022-11-23 11:56:21
* @ Modified by: willysliang
* @ Modified time: 2022-11-23 13:48:17
* @ Description: 生成二维码组件
* @ Install: pnpm i -S @types/qrcode qrcode
--&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> QRCode <span class="token keyword">from</span> <span class="token string">&#39;qrcode&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ElNotification <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>

  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 二维码存储内容</span>
    <span class="token literal-property property">qrUrl</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// canvas width</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// canvas height</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 二维码尺寸（正方形 长宽相同）</span>
    <span class="token literal-property property">qrSize</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 二维码底部文字</span>
    <span class="token literal-property property">qrText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 底部说明文字字号</span>
    <span class="token literal-property property">qrTextSize</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> canvas <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;getUrl&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 生成二维码
 * <span class="token keyword">@argument</span> <span class="token parameter">qrUrl</span>        二维码内容
 * <span class="token keyword">@argument</span> <span class="token parameter">qrSize</span>       二维码大小
 * <span class="token keyword">@argument</span> <span class="token parameter">qrText</span>       二维码中间显示文字
 * <span class="token keyword">@argument</span> <span class="token parameter">qrTextSize</span>   二维码中间显示文字大小(默认16px)
 */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleQrcode</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dom <span class="token operator">=</span> canvas<span class="token punctuation">.</span>value <span class="token keyword">as</span> HTMLCanvasElement
    <span class="token keyword">const</span> <span class="token literal-property property">qrCodeOption</span><span class="token operator">:</span> QRCode<span class="token punctuation">.</span>QRCodeToDataURLOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">errorCorrectionLevel</span><span class="token operator">:</span> <span class="token string">&#39;H&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> props<span class="token punctuation">.</span>qrSize<span class="token punctuation">,</span>
      <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;image/jpeg&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    QRCode<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>qrUrl<span class="token punctuation">,</span> qrCodeOption<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">url</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> ctx <span class="token operator">=</span> dom<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> CanvasRenderingContext2D
      <span class="token keyword">const</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      image<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;crossOrigin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;anonymous&#39;</span><span class="token punctuation">)</span>
      image<span class="token punctuation">.</span>src <span class="token operator">=</span> url
      <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">&#39;getUrl&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
      image<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>
          image<span class="token punctuation">,</span>
          <span class="token punctuation">(</span>props<span class="token punctuation">.</span>width <span class="token operator">-</span> props<span class="token punctuation">.</span>qrSize<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token number">0</span><span class="token punctuation">,</span>
          props<span class="token punctuation">.</span>qrSize<span class="token punctuation">,</span>
          props<span class="token punctuation">.</span>qrSize<span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>qrText<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 设置字体</span>
          ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">bold </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>qrTextSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px Arial</span><span class="token template-punctuation string">\`</span></span>
          <span class="token keyword">const</span> tw <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">measureText</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>qrText<span class="token punctuation">)</span><span class="token punctuation">.</span>width <span class="token comment">// 文字真实宽度</span>
          <span class="token keyword">const</span> ftop <span class="token operator">=</span> props<span class="token punctuation">.</span>qrSize <span class="token operator">-</span> props<span class="token punctuation">.</span>qrTextSize <span class="token comment">// 根据字体大小计算文字top</span>
          <span class="token keyword">const</span> fleft <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>width <span class="token operator">-</span> tw<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token comment">// 根据字体大小计算文字left</span>
          ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;#fff&#39;</span>
          ctx<span class="token punctuation">.</span>textBaseline <span class="token operator">=</span> <span class="token string">&#39;top&#39;</span> <span class="token comment">// 设置绘制文本时的文本基线。</span>
          ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;green&#39;</span>
          ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>qrText<span class="token punctuation">,</span> fleft<span class="token punctuation">,</span> ftop<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">err</span><span class="token operator">:</span> Error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      ElNotification<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 因为 canvas 需要挂载到页面上，必须在让 canvas 生成到 dom 上才可以操作 */</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span>handleQrcode<span class="token punctuation">)</span>
  <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>qrUrl<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>qrText<span class="token punctuation">]</span><span class="token punctuation">,</span> handleQrcode<span class="token punctuation">)</span>

  <span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 二维码下载/保存
 */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">saveQrcode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dom <span class="token operator">=</span> canvas<span class="token punctuation">.</span>value <span class="token keyword">as</span> HTMLCanvasElement
    <span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// 将二维码面板处理为图片</span>
    a<span class="token punctuation">.</span>href <span class="token operator">=</span> dom<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
    a<span class="token punctuation">.</span>download <span class="token operator">=</span> props<span class="token punctuation">.</span>qrUrl <span class="token operator">+</span> <span class="token string">&#39;.png&#39;</span>
    a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span> saveQrcode <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canvas<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>height<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件调用" tabindex="-1"><a class="header-anchor" href="#组件调用"><span>组件调用</span></a></h3><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> Qrcode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> userInfo <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;willysliang@qq.com&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;willysliang&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getUrl</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  img<span class="token punctuation">.</span>value <span class="token operator">=</span> val
<span class="token punctuation">}</span>

<span class="token keyword">const</span> qrcode <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">downPic</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  qrcode<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">saveQrcode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> qrcodes <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> qrcodeList <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;山卡拉OK&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;伍六七&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;梅小姐&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;鸡大保&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;小飞鸡&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">downloadAll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  qrcodes<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    item<span class="token punctuation">.</span><span class="token function">saveQrcode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-card</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo.url<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#prepend</span><span class="token punctuation">&gt;</span></span>更新二维码图片<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#append</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>downPic<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>保存二维码图片<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Qrcode</span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>qrcode<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:qr-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo.url<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:qr-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo.username<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@get-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUrl<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-card</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-card</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mt-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>downloadAll<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>保存所有二维码图片<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex flex-row items-center flex-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Qrcode</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in qrcodeList<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>qrcodes<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:qr-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.label<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:qr-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.label<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-card</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_28-仪表盘" tabindex="-1"><a class="header-anchor" href="#_28-仪表盘"><span>28. 仪表盘</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 官网</span>
https://echarts.apache.org/zh/option.html<span class="token comment">#yAxis</span>

<span class="token comment">## 安装</span>
<span class="token function">pnpm</span> i <span class="token parameter variable">-S</span> echarts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="echarts封装" tabindex="-1"><a class="header-anchor" href="#echarts封装"><span>echarts封装</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** lib.ts */</span>
<span class="token doc-comment comment">/**
 * @ Author: willysliang
 * @ Create Time: 2022-12-05 14:18:15
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-05 14:19:20
 * @ Description: echarts 库包
 */</span>

<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;echarts/core&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  BarChart<span class="token punctuation">,</span>
  LineChart<span class="token punctuation">,</span>
  PieChart<span class="token punctuation">,</span>
  MapChart<span class="token punctuation">,</span>
  PictorialBarChart<span class="token punctuation">,</span>
  RadarChart<span class="token punctuation">,</span>
  ScatterChart<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/charts&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  TitleComponent<span class="token punctuation">,</span>
  TooltipComponent<span class="token punctuation">,</span>
  GridComponent<span class="token punctuation">,</span>
  PolarComponent<span class="token punctuation">,</span>
  AriaComponent<span class="token punctuation">,</span>
  ParallelComponent<span class="token punctuation">,</span>
  LegendComponent<span class="token punctuation">,</span>
  RadarComponent<span class="token punctuation">,</span>
  ToolboxComponent<span class="token punctuation">,</span>
  DataZoomComponent<span class="token punctuation">,</span>
  VisualMapComponent<span class="token punctuation">,</span>
  TimelineComponent<span class="token punctuation">,</span>
  CalendarComponent<span class="token punctuation">,</span>
  GraphicComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/components&#39;</span>

echarts<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  LegendComponent<span class="token punctuation">,</span>
  TitleComponent<span class="token punctuation">,</span>
  TooltipComponent<span class="token punctuation">,</span>
  GridComponent<span class="token punctuation">,</span>
  PolarComponent<span class="token punctuation">,</span>
  AriaComponent<span class="token punctuation">,</span>
  ParallelComponent<span class="token punctuation">,</span>
  BarChart<span class="token punctuation">,</span>
  LineChart<span class="token punctuation">,</span>
  PieChart<span class="token punctuation">,</span>
  MapChart<span class="token punctuation">,</span>
  RadarChart<span class="token punctuation">,</span>
  PictorialBarChart<span class="token punctuation">,</span>
  RadarComponent<span class="token punctuation">,</span>
  ToolboxComponent<span class="token punctuation">,</span>
  DataZoomComponent<span class="token punctuation">,</span>
  VisualMapComponent<span class="token punctuation">,</span>
  TimelineComponent<span class="token punctuation">,</span>
  CalendarComponent<span class="token punctuation">,</span>
  GraphicComponent<span class="token punctuation">,</span>
  ScatterChart<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> echarts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** useChart.ts */</span>
<span class="token doc-comment comment">/**
 * @ Author: willysliang
 * @ Create Time: 2022-12-05 14:18:00
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-05 14:53:46
 * @ Description: echarts hooks
 */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> nextTick<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onUnmounted<span class="token punctuation">,</span> Ref<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> EChartsOption <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts&#39;</span>
<span class="token keyword">import</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;./lib&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SVGRenderer<span class="token punctuation">,</span> CanvasRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/renderers&#39;</span>

<span class="token doc-comment comment">/** 渲染类型 */</span>
<span class="token keyword">export</span> <span class="token keyword">enum</span> RenderType <span class="token punctuation">{</span>
  SVGRenderer <span class="token operator">=</span> <span class="token string">&#39;SVGRenderer&#39;</span><span class="token punctuation">,</span>
  CanvasRenderer <span class="token operator">=</span> <span class="token string">&#39;SVGRenderer&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/** 主题类型 */</span>
<span class="token keyword">export</span> <span class="token keyword">enum</span> ThemeType <span class="token punctuation">{</span>
  Light <span class="token operator">=</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span>
  Dark <span class="token operator">=</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">,</span>
  Default <span class="token operator">=</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">useChart</span> <span class="token punctuation">(</span>
elRef<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>HTMLDivElement<span class="token operator">&gt;</span><span class="token punctuation">,</span>
 autoChartSize <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
 animation <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
 render<span class="token operator">:</span> RenderType <span class="token operator">=</span> RenderType<span class="token punctuation">.</span>SVGRenderer<span class="token punctuation">,</span>
 theme<span class="token operator">:</span> ThemeType <span class="token operator">=</span> ThemeType<span class="token punctuation">.</span>Default<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 渲染模式</span>
  echarts<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>render <span class="token operator">===</span> RenderType<span class="token punctuation">.</span>SVGRenderer <span class="token operator">?</span> SVGRenderer <span class="token operator">:</span> CanvasRenderer<span class="token punctuation">)</span>
  <span class="token comment">// echart实例</span>
  <span class="token keyword">let</span> chartInstance<span class="token operator">:</span> echarts<span class="token punctuation">.</span>ECharts <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token comment">// 初始化echart</span>
  <span class="token keyword">const</span> <span class="token function-variable function">initCharts</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>elRef<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>el <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">unref</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    chartInstance <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> theme<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 更新/设置配置</span>
  <span class="token keyword">const</span> <span class="token function-variable function">setOption</span> <span class="token operator">=</span> <span class="token punctuation">(</span>option<span class="token operator">:</span> EChartsOption<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>chartInstance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">initCharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>chartInstance<span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token punctuation">}</span>

      chartInstance<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
      <span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 获取echart实例</span>
  <span class="token keyword">function</span> <span class="token function">getInstance</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> echarts<span class="token punctuation">.</span>ECharts <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>chartInstance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">initCharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> chartInstance
  <span class="token punctuation">}</span>

  <span class="token comment">// 更新大小</span>
  <span class="token keyword">function</span> <span class="token function">resize</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    chartInstance<span class="token operator">?.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 监听元素大小</span>
  <span class="token keyword">function</span> <span class="token function">watchEl</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 给元素添加过渡</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>animation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      elRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token string">&#39;width 1s, height 1s&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> resizeObserver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ResizeObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    resizeObserver<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>elRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 显示加载状</span>
  <span class="token keyword">function</span> <span class="token function">showLoading</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>chartInstance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">initCharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    chartInstance<span class="token operator">?.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 显示加载状</span>
  <span class="token keyword">function</span> <span class="token function">hideLoading</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>chartInstance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">initCharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    chartInstance<span class="token operator">?.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> resize<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>autoChartSize<span class="token punctuation">)</span> <span class="token function">watchEl</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> resize<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    setOption<span class="token punctuation">,</span>
    getInstance<span class="token punctuation">,</span>
    showLoading<span class="token punctuation">,</span>
    hideLoading<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--
 * @ Author: willysliang
 * @ Create Time: 2022-12-05 11:56:49
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-05 14:59:22
 * @ Description: 仪表盘 Dashboard
 --&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartEl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ width: \`300px\`, height: \`300px\` }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> Ref<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> nextTick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> EChartsOption <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts&#39;</span>
<span class="token keyword">import</span> useChart<span class="token punctuation">,</span> <span class="token punctuation">{</span> RenderType<span class="token punctuation">,</span> ThemeType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./useEcharts/useEcharts&#39;</span>

<span class="token keyword">const</span> option <span class="token operator">=</span> computed<span class="token operator">&lt;</span>EChartsOption<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;item&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&#39;2%&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Access From&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;40%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;70%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">avoidLabelOverlap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&#39;20&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">labelLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1048</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Search Engine&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">735</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Direct&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">484</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Union Ads&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Video Ads&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> chartEl <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLDivElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> setOption<span class="token punctuation">,</span> showLoading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useChart</span><span class="token punctuation">(</span>
  chartEl <span class="token keyword">as</span> Ref<span class="token operator">&lt;</span>HTMLDivElement<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span><span class="token punctuation">,</span>
  RenderType<span class="token punctuation">.</span>CanvasRenderer<span class="token punctuation">,</span>
  ThemeType<span class="token punctuation">.</span>Light<span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 显示loading</span>
    <span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 渲染图表</span>
    <span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_29-弹幕插件" tabindex="-1"><a class="header-anchor" href="#_29-弹幕插件"><span>29. 弹幕插件</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## DPlayer 插件官网</span>
https://dplayer.diygod.dev/zh/guide.html<span class="token comment">#special-thanks</span>
https://github.com/DIYgod/DPlayer.git

<span class="token comment">## 参考</span>
https://juejin.cn/post/6844903761182195725<span class="token comment">#heading-0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_30-视频播放插件-vue3-video-play" tabindex="-1"><a class="header-anchor" href="#_30-视频播放插件-vue3-video-play"><span>30. 视频播放插件 vue3-video-play</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 插件官网</span>
https://codelife.cc/vue3-video-play/guide/install.html
https://github.com/xdlumia/vue3-video-play.git

<span class="token comment">## 插件安装</span>
<span class="token function">pnpm</span> i <span class="token parameter variable">-S</span> vue3-video-play
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件示例" tabindex="-1"><a class="header-anchor" href="#组件示例"><span>组件示例</span></a></h3><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--
 * @ Author: willysliang
 * @ Create Time: 2022-12-02 15:34:44
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-02 15:35:06
 * @ Description: 视频播放插件
 --&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> VideoPlay <span class="token keyword">from</span> <span class="token string">&#39;vue3-video-play&#39;</span> <span class="token comment">// 引入组件</span>
<span class="token keyword">import</span> <span class="token string">&#39;vue3-video-play/dist/style.css&#39;</span> <span class="token comment">// 引入css</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> demoVideo<span class="token punctuation">,</span> demoJpg <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/assets/images&#39;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;80%&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 播放器高度</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;70%&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 播放器高度</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#409eff&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 主题色</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;仙剑奇侠传三&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 视频名称</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;video/mp4&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">src</span><span class="token operator">:</span> demoVideo<span class="token punctuation">,</span> <span class="token comment">// 视频源</span>
  <span class="token literal-property property">muted</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 静音</span>
  <span class="token literal-property property">webFullScreen</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">speedRate</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;2.0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1.25&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1.5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1.0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;0.75&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;0.5&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 播放倍速</span>
  <span class="token literal-property property">autoPlay</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 自动播放</span>
  <span class="token literal-property property">loop</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 循环播放</span>
  <span class="token literal-property property">mirror</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 镜像画面</span>
  <span class="token literal-property property">ligthOff</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 关灯模式</span>
  <span class="token literal-property property">volume</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token comment">// 默认音量大小</span>
  <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否显示控制</span>
  <span class="token literal-property property">controlBtns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;audioTrack&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;quality&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;speedRate&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;volume&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;setting&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;pip&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;pageFullScreen&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;fullScreen&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 显示所有按钮,</span>
  <span class="token literal-property property">playsinline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">preload</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VideoPlay</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:poster</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demoJpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_31-抽奖组件" tabindex="-1"><a class="header-anchor" href="#_31-抽奖组件"><span>31. 抽奖组件</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 抽奖的逻辑</span>
<span class="token number">1</span>. 设定至少需要转动多少次再进入抽奖环节
<span class="token number">2</span>. 在转动次数达标后，进行 http 请求获取该用户该次抽奖中奖编号
<span class="token number">3</span>. 根据中奖编号，控制转动到该编号位置就停止旋转

<span class="token comment">## 逻辑判定</span>
<span class="token number">1</span>. 如果当前转动次数达到要求 <span class="token operator">&amp;&amp;</span> 目前转到的位置是中奖位置，则聚焦到中奖所在 item，并停止轮盘转动
<span class="token number">2</span>. 继续转动轮盘
  - 如果还没到达基本转动次数，则需要加快转动速度
  - 如果在转动次数达标后，进行 http 请求获取该用户该次抽奖中奖编号（因为后端请求耗时，此时还需增加转动次数来让请求成功）
	- 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--
 * @ Author: willysliang
 * @ Create Time: 2022-12-07 10:58:11
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-07 18:02:16
 * @ Description: CellLottery 九宫格抽奖
 --&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> demoLotteryItem1<span class="token punctuation">,</span> demoLotteryItem2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/assets/images&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEventListener <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/event/useEventListener&#39;</span>

<span class="token keyword">const</span> lotterylist <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">pic</span><span class="token operator">:</span> demoLotteryItem1<span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;谢谢参与&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">pic</span><span class="token operator">:</span> demoLotteryItem2<span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;美女一个&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">pic</span><span class="token operator">:</span> demoLotteryItem1<span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;宝马一辆&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">pic</span><span class="token operator">:</span> demoLotteryItem2<span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;单车一辆&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">pic</span><span class="token operator">:</span> demoLotteryItem1<span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;鸡蛋一蓝&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">pic</span><span class="token operator">:</span> demoLotteryItem2<span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;500红包&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">pic</span><span class="token operator">:</span> demoLotteryItem1<span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;靓号一个&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token literal-property property">pic</span><span class="token operator">:</span> demoLotteryItem2<span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;鲜花一蓝&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 添加中心的开始抽奖按钮 */</span>
<span class="token keyword">const</span> startBtn <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;开始按钮&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pic</span><span class="token operator">:</span> <span class="token string">&#39;https://img2.baidu.com/it/u=1497996119,382735686&amp;fm=253&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IPrize</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 当前转到到的位置 &amp; 起点位置 */</span>
  <span class="token literal-property property">currentIndex</span><span class="token operator">:</span> number
  <span class="token doc-comment comment">/** 总共有多少个位置 */</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> number
  <span class="token doc-comment comment">/** 每次转动轮盘的定时器 */</span>
  <span class="token comment">// eslint-disable-next-line no-undef</span>
  <span class="token literal-property property">timer</span><span class="token operator">:</span> NodeJS<span class="token punctuation">.</span>Timeout <span class="token operator">|</span> <span class="token keyword">null</span>
  <span class="token doc-comment comment">/** 初始转动速度 */</span>
  <span class="token literal-property property">speed</span><span class="token operator">:</span> number
  <span class="token doc-comment comment">/** 已跑次数 */</span>
  <span class="token literal-property property">currentRunCount</span><span class="token operator">:</span> number
  <span class="token doc-comment comment">/** 转动基本次数：即至少需要转动多少次再进入抽奖环节 */</span>
  <span class="token literal-property property">totalRunCount</span><span class="token operator">:</span> number
  <span class="token doc-comment comment">/** 中奖位置 */</span>
  <span class="token literal-property property">prizeIndex</span><span class="token operator">:</span> number
  <span class="token doc-comment comment">/** 是否触发转动 */</span>
  <span class="token literal-property property">unClick</span><span class="token operator">:</span> boolean
  <span class="token doc-comment comment">/** 是否显示中奖弹窗 */</span>
  <span class="token literal-property property">isShowToast</span><span class="token operator">:</span> boolean
<span class="token punctuation">}</span>
<span class="token keyword">const</span> prizeState <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>IPrize<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">currentIndex</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timer</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">speed</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token literal-property property">currentRunCount</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">totalRunCount</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  <span class="token literal-property property">prizeIndex</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">unClick</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">isShowToast</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/** 每次转动 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onRoll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  prizeState<span class="token punctuation">.</span>currentIndex <span class="token operator">+=</span> <span class="token number">1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>prizeState<span class="token punctuation">.</span>currentIndex <span class="token operator">&gt;</span> prizeState<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    prizeState<span class="token punctuation">.</span>currentIndex <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 开始转动 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">startRoll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  prizeState<span class="token punctuation">.</span>currentRunCount <span class="token operator">+=</span> <span class="token number">1</span>
  <span class="token function">onRoll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token doc-comment comment">/** 如果当前转动次数达到要求 &amp;&amp; 目前转到的位置是中奖位置 */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    prizeState<span class="token punctuation">.</span>currentRunCount <span class="token operator">&gt;</span> prizeState<span class="token punctuation">.</span>totalRunCount <span class="token operator">+</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span>
    prizeState<span class="token punctuation">.</span>prizeIndex <span class="token operator">===</span> prizeState<span class="token punctuation">.</span>currentIndex
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    prizeState<span class="token punctuation">.</span>timer <span class="token operator">&amp;&amp;</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>prizeState<span class="token punctuation">.</span>timer<span class="token punctuation">)</span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">timer</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token literal-property property">speed</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token literal-property property">timeNum</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">totalRunCount</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      <span class="token literal-property property">prizeIndex</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">isClick</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>prizeState<span class="token punctuation">,</span> params<span class="token punctuation">)</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      prizeState<span class="token punctuation">.</span>isShowToast <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prizeState<span class="token punctuation">.</span>currentRunCount <span class="token operator">&lt;</span> prizeState<span class="token punctuation">.</span>totalRunCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token doc-comment comment">/** 如果还没到达基本转动次数，则会加快转动速度 */</span>
      prizeState<span class="token punctuation">.</span>speed <span class="token operator">-=</span> <span class="token number">10</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>prizeState<span class="token punctuation">.</span>currentRunCount <span class="token operator">===</span> prizeState<span class="token punctuation">.</span>totalRunCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token doc-comment comment">/** 随机获得一个中奖位置 */</span>
      prizeState<span class="token punctuation">.</span>prizeIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>
        Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>prizeState<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
      prizeState<span class="token punctuation">.</span>currentRunCount <span class="token operator">&gt;</span> prizeState<span class="token punctuation">.</span>totalRunCount <span class="token operator">+</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span>
      <span class="token punctuation">(</span><span class="token punctuation">(</span>prizeState<span class="token punctuation">.</span>prizeIndex <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> prizeState<span class="token punctuation">.</span>currentIndex <span class="token operator">===</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        prizeState<span class="token punctuation">.</span>prizeIndex <span class="token operator">===</span> prizeState<span class="token punctuation">.</span>currentIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      prizeState<span class="token punctuation">.</span>speed <span class="token operator">+=</span> <span class="token number">100</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      prizeState<span class="token punctuation">.</span>speed <span class="token operator">+=</span> <span class="token number">20</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/** 防止速度切换过慢 */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prizeState<span class="token punctuation">.</span>speed <span class="token operator">&lt;</span> <span class="token number">40</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      prizeState<span class="token punctuation">.</span>speed <span class="token operator">=</span> <span class="token number">40</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/** 因为还没打到抽奖的转动次数，需要继续转动一圈 */</span>
    prizeState<span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>startRoll<span class="token punctuation">,</span> prizeState<span class="token punctuation">.</span>speed<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 开始抽奖 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">startLottery</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>prizeState<span class="token punctuation">.</span>unClick<span class="token punctuation">)</span> <span class="token function">startRoll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 根据屏幕抽奖div的宽度来计算水平方向的点点 */</span>
<span class="token keyword">const</span> lotteryRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> dotLen <span class="token operator">=</span> ref<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> dotArr <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>dotLen<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getLotteryWidth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  dotLen<span class="token punctuation">.</span>value <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>
    Number<span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>lotteryRef<span class="token punctuation">.</span>value<span class="token operator">?.</span>offsetWidth <span class="token operator">||</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">32</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/** 监听抽奖div的宽度 */</span>
<span class="token function">useEventListener</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> window<span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">listener</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">getLotteryWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">isDebounce</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">wait</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  <span class="token literal-property property">autoRemove</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-row</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span> <span class="token attr-name">:offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>22<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-card</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>九宫格抽奖 Lottery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- 抽奖容器 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cell-lottery-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- 四边点点 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dots-container dots-left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in 13<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dot<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dots-container dots-right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in 13<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dot<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dots-container dots-top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in dotArr<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dot<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dots-container dots-bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in dotArr<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dot<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

          <span class="token comment">&lt;!-- 抽奖主体 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lotteryRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cell-lottery<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
              <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cell-lottery-item w-full h-32 relative cursor-pointer border border-solid border-gray-500<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>startLottery<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
                <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>startBtn.pic<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>抽奖图<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h-5/6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2<span class="token punctuation">&quot;</span></span>
              <span class="token punctuation">/&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
                <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>absolute left-1/2 transform -translate-x-1/2 bottom-1<span class="token punctuation">&quot;</span></span>
              <span class="token punctuation">&gt;</span></span>
                {{ startBtn.title }}
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
              <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(lotteryItem, index) in lotterylist.slice(0, 8)<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cell-lottery-item w-full h-32 relative cursor-pointer border border-solid border-gray-500<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
                &#39;cell-lottery-item-active&#39;: index === prizeState.currentIndex,
              }<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
                <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lotteryItem.pic<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>抽奖图<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h-5/6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2<span class="token punctuation">&quot;</span></span>
              <span class="token punctuation">/&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
                <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>absolute left-1/2 transform -translate-x-1/2 bottom-1<span class="token punctuation">&quot;</span></span>
              <span class="token punctuation">&gt;</span></span>
                {{ lotteryItem.title }}
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-card</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-row</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* 主容器 */</span>
<span class="token selector">.cell-lottery-container</span> <span class="token punctuation">{</span>
	<span class="token atrule"><span class="token rule">@apply</span> box-border p-6 relative overflow-hidden<span class="token punctuation">;</span></span>
	<span class="token property">border-radius</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> #9ad3ff<span class="token punctuation">;</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0.28rem 0.6rem 0.1rem #9ad3ff91<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> twinkleOdd</span> <span class="token punctuation">{</span>
	<span class="token selector">0%</span> <span class="token punctuation">{</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">50%</span> <span class="token punctuation">{</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #e2f2d3<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">100%</span> <span class="token punctuation">{</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> twinkleEven</span> <span class="token punctuation">{</span>
	<span class="token selector">0%</span> <span class="token punctuation">{</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #e2f2d3<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">50%</span> <span class="token punctuation">{</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">100%</span> <span class="token punctuation">{</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #e2f2d3<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.dots-container</span> <span class="token punctuation">{</span>
	<span class="token atrule"><span class="token rule">@apply</span> flex items-center justify-around<span class="token punctuation">;</span></span>
	<span class="token atrule"><span class="token rule">@apply</span> absolute<span class="token punctuation">;</span></span>

	<span class="token selector">.dot</span> <span class="token punctuation">{</span>
		<span class="token atrule"><span class="token rule">@apply</span> w-4 h-4 rounded-full<span class="token punctuation">;</span></span>

		<span class="token selector">&amp;:nth-child(odd)</span> <span class="token punctuation">{</span>
			<span class="token property">animation</span><span class="token punctuation">:</span> twinkleOdd 0.5s infinite linear<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token selector">&amp;:nth-child(even)</span> <span class="token punctuation">{</span>
			<span class="token property">animation</span><span class="token punctuation">:</span> twinkleEven 0.5s infinite linear<span class="token punctuation">;</span>
			<span class="token property">animation-delay</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.dots-left</span> <span class="token punctuation">{</span>
	<span class="token atrule"><span class="token rule">@apply</span> flex-col left-0 top-0 bottom-0<span class="token punctuation">;</span></span>
	<span class="token atrule"><span class="token rule">@apply</span> w-6 py-4<span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>

<span class="token selector">.dots-right</span> <span class="token punctuation">{</span>
	<span class="token atrule"><span class="token rule">@apply</span> flex-col right-0 top-0 bottom-0<span class="token punctuation">;</span></span>
	<span class="token atrule"><span class="token rule">@apply</span> w-6 py-4<span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>

<span class="token selector">.dots-top</span> <span class="token punctuation">{</span>
	<span class="token atrule"><span class="token rule">@apply</span> flex-row left-0 right-0 top-0<span class="token punctuation">;</span></span>
	<span class="token atrule"><span class="token rule">@apply</span> h-6 px-3<span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>

<span class="token selector">.dots-bottom</span> <span class="token punctuation">{</span>
	<span class="token atrule"><span class="token rule">@apply</span> flex-row left-0 right-0 bottom-0<span class="token punctuation">;</span></span>
	<span class="token atrule"><span class="token rule">@apply</span> h-6 px-3<span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>

<span class="token comment">/* 抽奖主体 */</span>
<span class="token selector">.cell-lottery</span> <span class="token punctuation">{</span>
	<span class="token atrule"><span class="token rule">@apply</span> w-full h-full<span class="token punctuation">;</span></span>
	<span class="token atrule"><span class="token rule">@apply</span> box-border p-4<span class="token punctuation">;</span></span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> #61a2fc<span class="token punctuation">;</span>
	<span class="token property">border-radius</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
	<span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row dense<span class="token punctuation">;</span>
	<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">grid-row-gap</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
	<span class="token property">grid-column-gap</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>

	<span class="token selector">&amp;-item-active</span> <span class="token punctuation">{</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #ff3a59 <span class="token important">!important</span><span class="token punctuation">;</span>
		<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0.28rem 0.6rem 0.1rem #ff3a577b <span class="token important">!important</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">&amp;-item</span> <span class="token punctuation">{</span>
		<span class="token property">border-radius</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
		<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0.28rem 0.6rem 0.1rem #9ad3ff<span class="token punctuation">;</span>
		<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">// 开始按钮居于网格中间
	&amp;-item:first-child</span> <span class="token punctuation">{</span>
		<span class="token property">grid-column-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
		<span class="token property">grid-column-end</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
		<span class="token property">grid-row-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
		<span class="token property">grid-row-end</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">// 4 放在第二行第三列
	&amp;-item:nth-child(5)</span> <span class="token punctuation">{</span>
		<span class="token property">grid-column-start</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
		<span class="token property">grid-column-end</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
		<span class="token property">grid-row-end</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">// 5 放在第三行第三列
	&amp;-item:nth-child(6)</span> <span class="token punctuation">{</span>
		<span class="token property">grid-column-start</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
		<span class="token property">grid-column-end</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
		<span class="token property">grid-row-end</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">// 6 放在第三行第二列
	&amp;-item:nth-child(7)</span> <span class="token punctuation">{</span>
		<span class="token property">grid-column-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
		<span class="token property">grid-column-end</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
		<span class="token property">grid-row-end</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">// 7 放在第三行第一列
	&amp;-item:nth-child(8)</span> <span class="token punctuation">{</span>
		<span class="token property">grid-column-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
		<span class="token property">grid-column-end</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
		<span class="token property">grid-row-end</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * @ Author: willysliang
 * @ Create Time: 2022-12-05 17:22:53
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-07 13:19:18
 * @ Description: useEventListener 间断性事件监听
 * @Tip 节流会缓存上次的函数来执行，所以如果要使用保存数据的功能，需要使用防抖
 */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> unref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useDebounceFn<span class="token punctuation">,</span> useThrottleFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>

<span class="token doc-comment comment">/** 参数类型限制 */</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IUseEventParams</span> <span class="token punctuation">{</span>
  el<span class="token operator">?</span><span class="token operator">:</span> Element <span class="token operator">|</span> Ref<span class="token operator">&lt;</span>Element <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span> <span class="token operator">|</span> Window <span class="token operator">|</span> <span class="token builtin">any</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/** 所监听的事件 */</span>
  listener<span class="token operator">:</span> EventListener
  <span class="token doc-comment comment">/** 事件的参数 */</span>
  options<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> AddEventListenerOptions
  <span class="token doc-comment comment">/** 自动删除 */</span>
  autoRemove<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token doc-comment comment">/** 是否设置为防抖 */</span>
  isDebounce<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token doc-comment comment">/** 函数等待执行时间 */</span>
  wait<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 间断性事件监听 hooks */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useEventListener</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  el <span class="token operator">=</span> window<span class="token punctuation">,</span>
  name<span class="token punctuation">,</span>
  listener<span class="token punctuation">,</span>
  options <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  autoRemove <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  isDebounce <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  wait <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> IUseEventParams<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token function-variable function">removeEvent</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 事件所属节点 */</span>
  <span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span>Element<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>

  <span class="token doc-comment comment">/** 是否已添加事件 */</span>
  <span class="token keyword">const</span> isAddRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token doc-comment comment">/** 防抖节流 */</span>
  <span class="token keyword">const</span> handler <span class="token operator">=</span> isDebounce
    <span class="token operator">?</span> <span class="token function">useDebounceFn</span><span class="token punctuation">(</span>listener<span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token function">useThrottleFn</span><span class="token punctuation">(</span>listener<span class="token punctuation">,</span> wait<span class="token punctuation">)</span>

  <span class="token doc-comment comment">/** 事件立即执行 */</span>
  <span class="token keyword">const</span> realHandler <span class="token operator">=</span> wait <span class="token operator">?</span> handler <span class="token operator">:</span> listener

  <span class="token doc-comment comment">/** 添加事件 */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">addEventListener</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> Element<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    e<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> realHandler<span class="token punctuation">,</span> options<span class="token punctuation">)</span>

  <span class="token doc-comment comment">/** 移除事件 */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">removeEventListener</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> Element<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    isAddRef<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
    e<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> realHandler<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 移除事件监听 */</span>
  <span class="token keyword">const</span> removeWatch <span class="token operator">=</span> <span class="token function">watch</span><span class="token punctuation">(</span>
    element<span class="token punctuation">,</span>
    <span class="token punctuation">(</span>v<span class="token punctuation">,</span> _ov<span class="token punctuation">,</span> cleanUp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">!</span><span class="token function">unref</span><span class="token punctuation">(</span>isAddRef<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">addEventListener</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>

        <span class="token comment">// 如果为立即执行，则移除该事件</span>
        <span class="token function">cleanUp</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          autoRemove <span class="token operator">&amp;&amp;</span> <span class="token function">removeEventListener</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> immediate<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>

  <span class="token doc-comment comment">/** 移除事件 */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">remove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">removeEventListener</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token function">removeWatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> removeEvent<span class="token operator">:</span> remove <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* // 执行案例
import { useEventListener } from &#39;useEventListener&#39;
import { onBeforeUnmount } from &#39;vue&#39;

const getA = (a) =&gt; {
  console.log(a)
}
const resizeFn = (params) =&gt; {
  console.log(&#39;resizeFn&#39;, params)
}
const listenerResize = useEventListener({
  el: window,
  name: &#39;resize&#39;,
  listener: () =&gt; {
    getA(&#39;a&#39;)
    resizeFn(&#39;b&#39;)
  },
  options: {
    once: false,
  },
  autoRemove: false,
})

onBeforeUnmount(() =&gt; {
  listenerResize.removeEvent()
}) */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_32-内容懒加载组件" tabindex="-1"><a class="header-anchor" href="#_32-内容懒加载组件"><span>32. 内容懒加载组件</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## IntersectionObserver API</span>
IntersectionObserver API 是异步的，不随着目标元素的滚动同步触发。 即只有线程空闲下来，才会执行观察器。这意味着，这个观察器的优先级非常低，只在其他任务执行完，浏览器有了空闲才会执行。


<span class="token comment">## IntersectionObserverEntry对象提供目标元素的信息，一共有六个属性。</span>
time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒
target：被观察的目标元素，是一个 DOM 节点对象
rootBounds：根元素的矩形区域的信息，getBoundingClientRect<span class="token punctuation">(</span><span class="token punctuation">)</span>方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回null
boundingClientRect：目标元素的矩形区域的信息
intersectionRect：目标元素与视口（或根元素）的交叉区域的信息
intersectionRatio：目标元素的可见比例，即intersectionRect占boundingClientRect的比例，完全可见时为1，完全不可见时小于等于0

<span class="token comment">## options </span>
root: null, // 指定与目标元素相交的根元素，默认null为视口
threshold: <span class="token punctuation">[</span><span class="token punctuation">]</span> // <span class="token punctuation">[</span><span class="token number">0</span>, <span class="token number">0.5</span>, <span class="token number">1</span><span class="token punctuation">]</span> 当目标元素和根元素相交的面积占目标元素面积的百分比到达或跨过某些指定的临界值时就会触发回调函数
Magin：‘’ // <span class="token string">&quot;100px 0&quot;</span> 与margin类型写法，指定与跟元素相交时的延时加载


<span class="token comment">## 实例方法</span>
- observe<span class="token punctuation">(</span><span class="token punctuation">)</span>
	- 观察某个目标元素，一个观察者实例可以观察任意多个目标元素。
	- 注意：这不是事件，没有冒泡。所以不能只调用一次 observe 方法就能观察一个页面里的所有 img 元素
- unobserve<span class="token punctuation">(</span><span class="token punctuation">)</span>
	- 取消对某个目标元素的观察，延迟加载通常都是一次性的，observe 的回调里应该直接调用 unobserve<span class="token punctuation">(</span><span class="token punctuation">)</span> 那个元素.
- disconnect<span class="token punctuation">(</span><span class="token punctuation">)</span>
	- 取消观察所有已观察的目标元素
- takeRecords<span class="token punctuation">(</span><span class="token punctuation">)</span>
    在浏览器内部，当一个观察者实例在某一时刻观察到了若干个相交动作时，它不会立即执行回调，它会调用 window.requestIdleCallback<span class="token punctuation">(</span><span class="token punctuation">)</span> （目前只有 Chrome 支持）来异步的执行我们指定的回调函数，而且还规定了**大的延迟时间是 <span class="token number">100</span> 毫秒，相当于浏览器会执行：
    requestIdleCallback<span class="token punctuation">((</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>entries.length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        callback<span class="token punctuation">(</span>entries, observer<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>, <span class="token punctuation">{</span>
      timeout: <span class="token number">100</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--
 * @ Author: willysliang
 * @ Create Time: 2022-12-09 15:26:12
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-09 15:31:13
 * @ Description: 图片滚动底部懒加载
 --&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> systemNotfound <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/assets/images&#39;</span>

<span class="token keyword">const</span> imgRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> imgUrl <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">&#39;https://img2.baidu.com/it/u=617579813,2960860841&amp;fm=253&amp;fmt=auto&amp;app=120&amp;f=JPEG?w=1280&amp;h=800&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://img2.baidu.com/it/u=1003272215,1878948666&amp;fm=253&amp;fmt=auto&amp;app=120&amp;f=JPEG?w=1280&amp;h=800&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://img1.baidu.com/it/u=2995157981,91041597&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=500&amp;h=750&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://img2.baidu.com/it/u=1395980100,2999837177&amp;fm=253&amp;fmt=auto&amp;app=120&amp;f=JPEG?w=1200&amp;h=675&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://img0.baidu.com/it/u=925843206,3288141497&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=500&amp;h=769&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://img1.baidu.com/it/u=1300668939,1504410366&amp;fm=253&amp;fmt=auto&amp;app=120&amp;f=JPEG?w=500&amp;h=858&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://img0.baidu.com/it/u=4008146120,512111027&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=889&amp;h=500&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://img1.baidu.com/it/u=3622442929,3246643478&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=889&amp;h=500&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;http://t13.baidu.com/it/u=230088816,2918366315&amp;fm=224&amp;app=112&amp;f=JPEG?w=250&amp;h=500&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://img2.baidu.com/it/u=3038223445,2416689412&amp;fm=253&amp;fmt=auto&amp;app=120&amp;f=JPEG?w=1280&amp;h=800&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// 这里是一个数组可以指定多个比例类似[0.25, 0.5, 0.75, 1]</span>
    <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 交会处</span>
    <span class="token literal-property property">rootMargin</span><span class="token operator">:</span> <span class="token string">&#39;0px&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 对视口进行收缩和扩张</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> lazyIntersection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entires</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// entires为监听的节点数组对象</span>
    entires<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// isIntersecting是当前监听元素交叉区域是否在可视区域指定的阈值内返回的是一个布尔值</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>target<span class="token punctuation">.</span>src <span class="token operator">=</span> item<span class="token punctuation">.</span>target<span class="token operator">?.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-src&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">// 这里资源加载后就停止进行观察</span>
        lazyIntersection<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>target<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>

  <span class="token doc-comment comment">/** observe用来观察指定的DOM节点 */</span>
  imgRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    lazyIntersection<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in imgUrl<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgRef<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>systemNotfound<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgUrl[index]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h-96<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_33-页面水印-防君子不防小人" tabindex="-1"><a class="header-anchor" href="#_33-页面水印-防君子不防小人"><span>33. 页面水印(防君子不防小人)</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 页面水印</span>
- 页面水印包含 图片的水印 和 普通dom的水印，并通过 MutationObserver 来防止页面生成的水印通过 F12 删除掉。
- 该实现主要是通过新生成一个 DOM 元素，并挂载到需要水印的父元素下（即跟需要挂载水印的dom元素节点为兄弟节点）
- 注意一：该实现的缺陷是需要用一个 div 包裹需要水印的节点，并设置定位为父相子绝；因为水印是根据生成一个新的兄弟节点（次操作是为了覆盖到需要水印的元素上）
- 注意二：该父元素的子节点只能有一个（因为水印元素设置了 left、top、right、bottom 为 <span class="token number">0</span>，为父元素的最大值）

<span class="token comment">## 说明</span>
- 该实现是防君子不防小人，主要是给页面添加个水印
- 真正的图片水印还是需要后端生成才返回
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成水印的类" tabindex="-1"><a class="header-anchor" href="#生成水印的类"><span>生成水印的类</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * @ Author: willysliang
 * @ Create Time: 2023-01-12 14:00:21
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-12 14:06:19
 * @ Description: useWaterMark 生成水印的类
 */</span>
<span class="token doc-comment comment">/** 描绘水印类 */</span>
<span class="token keyword">class</span> <span class="token class-name">WaterMark</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 水印文字 */</span>
  waterTexts<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token doc-comment comment">/** 需要添加水印的 dom 集合 */</span>
  needAddWaterElements<span class="token operator">:</span> <span class="token builtin">any</span>
  <span class="token doc-comment comment">/** 保存添加水印的 dom */</span>
  saveWaterMarkElement<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token function">constructor</span> <span class="token punctuation">(</span>
    waterTexts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;默认水印文字&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2023-01-12&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    needAddWaterElements<span class="token operator">:</span> Element<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>waterTexts <span class="token operator">=</span> waterTexts
    <span class="token keyword">this</span><span class="token punctuation">.</span>needAddWaterElements <span class="token operator">=</span> needAddWaterElements
    <span class="token keyword">this</span><span class="token punctuation">.</span>saveWaterMarkElement <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 添加水印 */</span>
  <span class="token function">startWaterMark</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>needAddWaterElements<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>saveWaterMarkElement<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>needAddWaterElements<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>saveWaterMarkElement <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>
        document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>saveWaterMarkElement<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">startWaterMarkToElement</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 添加水印到 dom 对象 */</span>
  <span class="token keyword">async</span> <span class="token function">startWaterMarkToElement</span> <span class="token punctuation">(</span>el<span class="token operator">:</span> Element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>el <span class="token keyword">instanceof</span> <span class="token class-name">HTMLImageElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 图片，需加载完成进行操作</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>el<span class="token punctuation">.</span>complete<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          el<span class="token punctuation">.</span>onload <span class="token operator">=</span> resolve
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 给加载完成的图片 or 普通 dom 添加水印</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addWaterMarkToNormalEle</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 给加载完成的图片 or 普通 dom 添加水印 */</span>
  <span class="token function">addWaterMarkToNormalEle</span> <span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span>
    canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> el<span class="token punctuation">.</span>width <span class="token operator">?</span> el<span class="token punctuation">.</span>width <span class="token operator">:</span> el<span class="token punctuation">.</span>clientWidth
    canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> el<span class="token punctuation">.</span>height <span class="token operator">?</span> el<span class="token punctuation">.</span>height <span class="token operator">:</span> el<span class="token punctuation">.</span>clientHeight
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> CanvasRenderingContext2D
    <span class="token keyword">const</span> maxSize <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>height<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">)</span>
    <span class="token keyword">const</span> fontSize <span class="token operator">=</span> maxSize <span class="token operator">/</span> <span class="token number">25</span>
    ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> fontSize <span class="token operator">+</span> <span class="token string">&#39;px &quot;微软雅黑&quot;&#39;</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;rgba(195, 195, 195, 1)&#39;</span>
    ctx<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">&#39;left&#39;</span>
    ctx<span class="token punctuation">.</span>textBaseline <span class="token operator">=</span> <span class="token string">&#39;top&#39;</span>
    ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> angle <span class="token operator">=</span> <span class="token operator">-</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">10.0</span>
    <span class="token comment">// 进行平移，计算平移的参数</span>
    <span class="token keyword">const</span> translateX <span class="token operator">=</span> canvas<span class="token punctuation">.</span>height <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">tan</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>angle<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> translateY <span class="token operator">=</span> <span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>width <span class="token operator">-</span> translateX<span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">tan</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>angle<span class="token punctuation">)</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span>translateX <span class="token operator">/</span> <span class="token number">2.0</span><span class="token punctuation">,</span> translateY <span class="token operator">/</span> <span class="token number">2.0</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span>angle<span class="token punctuation">)</span>

    <span class="token comment">// 起始坐标</span>
    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token comment">// 一组文字之间的间隔</span>
    <span class="token keyword">const</span> sepY <span class="token operator">=</span> fontSize <span class="token operator">/</span> <span class="token number">2.0</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>y <span class="token operator">&lt;</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 当前行的 y 值</span>
      <span class="token keyword">let</span> rowCurrentMaxY <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> totleMaxX <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">let</span> currentY <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token comment">// 绘制水印</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>waterTexts<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          currentY <span class="token operator">+=</span> index <span class="token operator">*</span> <span class="token punctuation">(</span>sepY <span class="token operator">+</span> fontSize<span class="token punctuation">)</span>
          <span class="token keyword">const</span> rect <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">drawWater</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> text<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token operator">+</span> currentY<span class="token punctuation">)</span>
          <span class="token keyword">const</span> currentMaxX <span class="token operator">=</span> rect<span class="token punctuation">.</span>x <span class="token operator">+</span> rect<span class="token punctuation">.</span>width
          totleMaxX <span class="token operator">=</span> currentMaxX <span class="token operator">&gt;</span> totleMaxX <span class="token operator">?</span> currentMaxX <span class="token operator">:</span> totleMaxX
          rowCurrentMaxY <span class="token operator">=</span> currentY
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        x <span class="token operator">=</span> totleMaxX <span class="token operator">+</span> <span class="token number">20</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 重置 x, y 值</span>
      x <span class="token operator">=</span> <span class="token number">0</span>
      y <span class="token operator">+=</span> rowCurrentMaxY <span class="token operator">+</span> <span class="token punctuation">(</span>sepY <span class="token operator">+</span> fontSize <span class="token operator">+</span> canvas<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 添加canvas</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addCanvas</span><span class="token punctuation">(</span>canvas<span class="token punctuation">,</span> el<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 绘制水印 */</span>
  <span class="token function">drawWater</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> text<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 绘制文字</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
    <span class="token comment">// 计算尺度</span>
    <span class="token keyword">const</span> textRect <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">measureText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
    <span class="token keyword">const</span> width <span class="token operator">=</span> textRect<span class="token punctuation">.</span>width
    <span class="token keyword">const</span> height <span class="token operator">=</span> textRect<span class="token punctuation">.</span>height
    <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/** 添加canvas到当前标签的父标签上 */</span>
  <span class="token function">addCanvas</span> <span class="token punctuation">(</span>canvas<span class="token punctuation">,</span> el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 设置canvas的样式</span>
    <span class="token comment">// overfolow: hidden: position: absolute; top: 0; left: 0; bottom: 0; right: 0;</span>
    canvas<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;absolute overflow-hidden inset-0&#39;</span>
    <span class="token comment">// 添加水印到父标签</span>
    el<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> WaterMark <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="防止生成的水印被删除" tabindex="-1"><a class="header-anchor" href="#防止生成的水印被删除"><span>防止生成的水印被删除</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * @ Author: willysliang
 * @ Create Time: 2023-01-12 14:09:49
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-12 14:14:02
 * @ Description: useMutationObserver 检查页面的水印是否被删除
 */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token doc-comment comment">/** 检查页面的水印是否被删除 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useMutationObserver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// eslint-disable-next-line @typescript-eslint/no-unused-vars</span>
  <span class="token keyword">const</span> DOMHandler<span class="token operator">:</span> <span class="token function-variable function">MutationCallback</span> <span class="token operator">=</span> <span class="token punctuation">(</span>mutationList<span class="token punctuation">,</span> observer<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    mutationList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>mutation<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> target<span class="token punctuation">,</span> nextSibling<span class="token punctuation">,</span> removedNodes <span class="token punctuation">}</span> <span class="token operator">=</span> mutation
      <span class="token comment">// 如果列表不为空，说明触发操作的动作是删除</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>mutation<span class="token punctuation">.</span>removedNodes<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nextSibling<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 如果存在下一个相邻子节点执行插入</span>
          <span class="token comment">// console.log(&#39;恢复被删除的节点&#39;)</span>
          target<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>removedNodes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nextSibling<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 直接添加到 target 的末尾</span>
          target<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>removedNodes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span>DOMHandler<span class="token punctuation">)</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> document<span class="token punctuation">.</span>body
    observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token punctuation">{</span> attributes<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> childList<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> subtree<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--
 * @ Author: willysliang
 * @ Create Time: 2023-01-12 13:58:13
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-12 14:14:40
 * @ Description: WaterMark 页面水印（防删除）
 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> WaterMark <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./useWaterMark&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useMutationObserver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./useMutationObserver&#39;</span>

<span class="token keyword">const</span> div1Ref <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> div2Ref <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/** 生成图片水印 &amp; 普通dom水印 */</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> waterMark1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WaterMark</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  waterMark1<span class="token punctuation">.</span><span class="token function">startWaterMark</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> waterMark2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WaterMark</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span><span class="token string">&#39;willysliang&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1998-09-22&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>div1Ref<span class="token punctuation">.</span>value<span class="token punctuation">,</span> div2Ref<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
  waterMark2<span class="token punctuation">.</span><span class="token function">startWaterMark</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 恢复被删除的节点
 * 注意：需要在生成水印之后使用
 */</span>
<span class="token function">useMutationObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span> <span class="token property">position</span><span class="token punctuation">:</span> relative</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span> <span class="token property">position</span><span class="token punctuation">:</span> absolute</span><span class="token punctuation">&quot;</span></span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@/assets/images/avactor.jpg<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span> <span class="token property">position</span><span class="token punctuation">:</span> relative</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div1Ref<span class="token punctuation">&quot;</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
				width: 100%;
				height: 100%;
				position: absolute;
				background-color: rgb(134 239 172);
      <span class="token punctuation">&quot;</span></span></span>
    <span class="token punctuation">&gt;</span></span>
      这是第一段文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>这是第二段文字
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span> <span class="token property">position</span><span class="token punctuation">:</span> relative</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div2Ref<span class="token punctuation">&quot;</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
				width: 100%;
				height: 100%;
				position: absolute;
				background-color: rgb(0 239 172);
      <span class="token punctuation">&quot;</span></span></span>
    <span class="token punctuation">&gt;</span></span>
      这是第三段文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>这是第四段文字
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_34-大文件断点续传" tabindex="-1"><a class="header-anchor" href="#_34-大文件断点续传"><span>34. 大文件断点续传</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 大文件断点续传</span>
大文件断点续传主要是将文件切成多个小块，并在客户端记录已上传的小块的信息，然后将小块上传到服务器进行合并，最后完成上传。如果上传失败，只需要重新上传未上传的小块即可。
大文件断点续传的实现一般包括以下步骤：
<span class="token number">1</span>. 将大文件分割成多个小块：将大文件切成多个小块，每个小块的大小一般为固定大小或根据实际情况动态调整。
<span class="token number">2</span>. 记录已上传的小块：在客户端记录已上传的小块的信息，包括已上传的小块的编号和大小等信息，以便于在上传失败后能够恢复上传。
<span class="token number">3</span>. 上传小块：客户端将每个小块上传到服务器，上传时需要携带已上传的小块的信息，例如已上传的小块的编号和大小等信息，以便于服务器能够识别已上传的小块。
<span class="token number">4</span>. 服务器合并小块：服务器接收到上传的小块后，将小块合并成完整的大文件。如果有重复上传的小块，可以将它们舍弃或直接覆盖。
<span class="token number">5</span>. 完成上传：上传完成后，客户端向服务器发送上传完成的请求，服务器返回上传成功的信息。



<span class="token comment">### 如果整个大文件上传，如果太久没有成功上传会导致什么后果？</span>
<span class="token number">1</span>. 服务器限制上传大小
<span class="token number">2</span>. 设置请求上传时，有上传请求的等待时间，而没有响应请求，则会报错
<span class="token number">3</span>. 缓解了文件上传时网络不好，而需要重新上传的问题（提高用户体验感、减少上传的内容的长度）
<span class="token number">4</span>. 缺点：会发送多个请求，还需要校验文件是否上传成功



<span class="token comment">### 大文件切片上传的优点：（提高上传速度、减少上传失败概率、减小服务器压力、实现断点续传和优化用户体验等）</span>
<span class="token number">1</span>. 减小上传失败的概率：上传大文件时，网络波动或其他因素可能导致上传失败，而将大文件切片上传可以降低上传失败的概率。
<span class="token number">2</span>. 提高上传速度：将大文件切片上传可以并发上传多个小块，大大提高上传速度。
<span class="token number">3</span>. 减小服务器压力：将大文件切片上传可以将上传的压力分散到多个小块上，减小服务器的压力。
<span class="token number">4</span>. 断点续传：如果上传中途出现问题，只需要重新上传出现问题的小块，而不需要重新上传整个大文件，这样可以节省时间和带宽。
<span class="token number">5</span>. 优化用户体验：上传大文件时，将大文件切片上传可以让用户感觉上传速度更快，提升用户的体验感。



<span class="token comment">### 合并切片的文件块的诀窍</span>
<span class="token number">1</span>. 在客户端合并：当所有小块上传完成后，客户端将所有小块下载下来，然后通过 JavaScript 进行合并，最终上传完整的文件到服务器。这种方式需要占用大量的客户端内存和带宽资源，不适合处理大文件。
<span class="token number">2</span>. 在服务端合并：当所有小块上传完成后，服务器将所有小块合并成完整的文件，然后将完整的文件存储到服务器硬盘上。这种方式需要占用服务器的 CPU 和硬盘资源，但可以避免客户端的内存和带宽资源问题，适用于处理大文件。



<span class="token comment">### 大文件切片上传后，如何衔接数据上传</span>
大文件切片上传后的衔接数据上传过程一般在客户端上传完所有小块后，通过服务器将所有小块合并成完整的文件，最终完成上传。
<span class="token number">1</span>. 客户端上传每个小块：客户端将每个小块上传到服务器。
<span class="token number">2</span>. 服务器接收并保存小块：服务器接收并保存每个小块，将其存储到指定的位置。
<span class="token number">3</span>. 客户端上传完所有小块：当客户端上传完所有小块后，向服务器发送合并请求。
<span class="token number">4</span>. 服务器合并小块：服务器接收到合并请求后，将保存的小块合并成完整的文件，并将文件存储到指定的位置。
<span class="token number">5</span>. 客户端完成上传：上传完成后，客户端向服务器发送上传完成的请求，服务器返回上传成功的信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_35-查看项目依赖" tabindex="-1"><a class="header-anchor" href="#_35-查看项目依赖"><span>35. 查看项目依赖</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 查看项目依赖</span>
rollup-plugin-visualizer是一个打包体积分析插件，对应webpack中的webpack-bundle-analyzer。配置好后运行构建命令会生成一个stats.html。


<span class="token comment">### 安装</span>
$ <span class="token function">pnpm</span> i rollup-plugin-visualizer <span class="token parameter variable">-D</span>



<span class="token comment">### 调用（vite.config.ts）</span>
<span class="token function">import</span> <span class="token punctuation">{</span> visualizer <span class="token punctuation">}</span> from <span class="token string">&#39;rollup-plugin-visualizer&#39;</span>

plugins: <span class="token punctuation">[</span>
    visualizer<span class="token punctuation">(</span><span class="token punctuation">{</span>open: true<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

$ <span class="token function">npm</span> run build // 打包结束后会出现下图

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="前端监控" tabindex="-1"><a class="header-anchor" href="#前端监控"><span>前端监控</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 前端监控 monitor</span>
<span class="token comment">### 前端监控分类</span>
<span class="token number">1</span>. 用户行为监控：用于收集用户在网站或应用中的操作信息，例如点击、滚动、输入等。
<span class="token number">2</span>. 性能监控：用于收集页面加载和渲染的相关性能指标，例如页面加载时间、白屏时间等。
<span class="token number">3</span>. 异常监控：用于捕获并上报前端代码运行过程中出现的异常和错误。
<span class="token number">4</span>. 资源监控：用于监控页面中各种资源（例如图片、脚本、样式表等）的加载情况，以及它们对页面性能的影响。
<span class="token number">5</span>. 其他监控：例如:
		- 数据上报模块<span class="token punctuation">(</span>uploader<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> 处理上报数据，
		- 控制台打印模块<span class="token punctuation">(</span>logger<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> 控制台打印上报记录，
		- 插件模块<span class="token punctuation">(</span>plugin<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> 可外接其他监控模块。



<span class="token comment">### 用img.src上送埋点数据，并且使用了gif格式进行上报</span>
使用 img 标签进行网页埋点的原因：
<span class="token number">1</span>. 兼容性好：<span class="token operator">&lt;</span>img<span class="token operator">&gt;</span> 标签在所有浏览器中都能够正常工作，无需考虑浏览器兼容性问题。
<span class="token number">2</span>. 简单易用：使用 <span class="token operator">&lt;</span>img<span class="token operator">&gt;</span> 标签进行埋点非常简单，只需设置 src 属性即可。无需编写复杂的 JavaScript 代码。
<span class="token number">3</span>. 不影响页面布局和用户体验：由于服务器返回的是一个 1x1 像素的透明 GIF 图像，所以它不会影响页面布局和用户体验。
<span class="token number">4</span>. 不会被浏览器拦截：一些浏览器可能会拦截 JavaScript 发送的跨域请求，但不会拦截 <span class="token operator">&lt;</span>img<span class="token operator">&gt;</span> 标签发送的请求。这意味着使用 <span class="token operator">&lt;</span>img<span class="token operator">&gt;</span> 标签进行埋点更可靠。
综上所述，使用 <span class="token operator">&lt;</span>img<span class="token operator">&gt;</span> 标签进行网页埋点是一种简单、可靠且不影响用户体验的方法。


使用 gif 格式进行上报的原因：
<span class="token number">1</span>. 文件大小小：一个 1x1 像素的透明 GIF 图像非常小，只有几十个字节。这意味着它不会占用太多带宽，可以快速传输。
<span class="token number">2</span>. 兼容性好：GIF 格式在所有浏览器中都能够正常显示，无需考虑浏览器兼容性问题。
<span class="token number">3</span>. 易于生成：生成一个 1x1 像素的透明 GIF 图像非常简单，可以使用预先定义的字符串来实现。无需使用复杂的图像处理库。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+`" alt="image-20230519132515589"></p></blockquote><h3 id="前端埋点-tracker" tabindex="-1"><a class="header-anchor" href="#前端埋点-tracker"><span>前端埋点 Tracker</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>埋点就是 数据采集-数据处理-数据分析和挖掘，如用户停留时间，用户哪个按钮点的多，等
技术架构使用ts + rollup
使用ts主要是在编译过程中发现问题，减少生产代码的错误，
使用rollup 应为 rollup打包干净，而webpack非常臃肿，可读性差，所以rollup非常适合开发SDK和一些框架，webpack 适合开发一些项目


<span class="token comment"># 目录结构设计</span>
<span class="token operator">|</span>--- roullup.config.js
<span class="token operator">|</span>--- tsconfig.json
<span class="token operator">|</span>--- package.json
<span class="token operator">|</span>--- src
		<span class="token operator">|</span>--- core：核心代码
		<span class="token operator">|</span>--- utils：工具函数
		<span class="token operator">|</span>--- type：声明文件


<span class="token comment"># 安装依赖</span>
<span class="token function">npm</span> <span class="token function">install</span> rollup <span class="token parameter variable">-D</span>
<span class="token function">npm</span> <span class="token function">install</span> rollup-plugin-dts <span class="token parameter variable">-D</span>
<span class="token function">npm</span> <span class="token function">install</span> rollup-plugin-typescript2 <span class="token parameter variable">-D</span>
<span class="token function">npm</span> <span class="token function">install</span> typescript <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="配置rollup-config-js" tabindex="-1"><a class="header-anchor" href="#配置rollup-config-js"><span>配置<code>rollup.config.js</code></span></a></h3><blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> ts <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-typescript2&#39;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">import</span> dts <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-dts&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
   <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&quot;./src/core/index.ts&quot;</span><span class="token punctuation">,</span>	<span class="token comment">//入口文件</span>
   <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token comment">//打包esModule</span>
       <span class="token punctuation">{</span>
         <span class="token literal-property property">file</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist/index.esm.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
         <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;es&quot;</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token comment">//打包common js</span>
       <span class="token punctuation">{</span>
         <span class="token literal-property property">file</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist/index.cjs.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
         <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;cjs&quot;</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token comment">//打包 AMD CMD UMD</span>
       <span class="token punctuation">{</span>
         <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&quot;./src/core/index.ts&quot;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">file</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist/index.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
         <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;umd&quot;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;tracker&quot;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token comment">//配置ts</span>
   <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token function">ts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
   <span class="token comment">//打包声明文件</span>
   <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&quot;./src/core/index.ts&quot;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
       <span class="token literal-property property">file</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist/index.d.ts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;es&quot;</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">dts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="src-type-定义类型" tabindex="-1"><a class="header-anchor" href="#src-type-定义类型"><span>src/type 定义类型</span></a></h3><blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@requestUrl</span> 接口地址
 * <span class="token keyword">@historyTracker</span> history上报
 * <span class="token keyword">@hashTracker</span> hash上报
 * <span class="token keyword">@domTracker</span> 携带Tracker-key 点击事件上报
 * <span class="token keyword">@sdkVersionsdk</span> 版本
 * <span class="token keyword">@extra</span> 透传字段
 * <span class="token keyword">@jsError</span> js和 promise 报错异常上报
 */</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">DefaultOptons</span> <span class="token punctuation">{</span>
    uuid<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    requestUrl<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    historyTracker<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
    hashTracker<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
    domTracker<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
    sdkVersion<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    extra<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    jsError<span class="token operator">:</span><span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token comment">//必传参数 requestUrl</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Options</span> <span class="token keyword">extends</span> <span class="token class-name">Partial<span class="token operator">&lt;</span>DefaultOptons<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    requestUrl<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">//版本</span>
<span class="token keyword">export</span> <span class="token keyword">enum</span> TrackerConfig <span class="token punctuation">{</span>
    version <span class="token operator">=</span> <span class="token string">&#39;1.0.0&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">//上报必传参数</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">reportTrackerData</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
    event<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    targetKey<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="src-core-核心功能" tabindex="-1"><a class="header-anchor" href="#src-core-核心功能"><span>src/core 核心功能</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>PV：页面访问量，即PageView，用户每次对网站的访问均被记录
	- 主要监听了 <span class="token function">history</span> 和 <span class="token builtin class-name">hash</span>

<span class="token function">history</span> API  go back  forward pushState  replaceState  
  - <span class="token function">history</span> 无法通过 popstate 监听 pushState replaceState  只能重写其函数 在utils/pv
  - <span class="token builtin class-name">hash</span> 使用 hashchange 监听

UV<span class="token punctuation">(</span>独立访客，用来记录用户身份，防止一台机器多次记录<span class="token punctuation">)</span>：即Unique Visitor，访问您网站的一台电脑客户端为一个访客
		- 用户唯一表示 可以在登录之后通过接口返回的 <span class="token function">id</span> 进行设置值 提供了 setUserId
		- 也可以使用 canvas 指纹追踪技术


为什么要使用这个去上报，这个上报的机制跟 XMLHttrequest 对比：
	- navigator.sendBeacon 即使页面关闭了也会完成请求 
	- 而 XMLHTTPRequest 不一定

DOM事件监听上报
	- 主要是给需要监听的元素添加一个属性 用来区分是否需要监听 target-key

js报错上报 
error事件、promise报错、unhandledrejection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">/* src/core/index.ts */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DefaultOptons<span class="token punctuation">,</span> Options<span class="token punctuation">,</span> TrackerConfig<span class="token punctuation">,</span> reportTrackerData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../types/core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createHistoryEvnent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../utils/pv&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> MouseEventList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dblclick&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;contextmenu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mouseup&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mouseenter&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mouseout&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mouseover&#39;</span><span class="token punctuation">]</span>	<span class="token comment">// 优化 DOM 的上报</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Tracker</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> data<span class="token operator">:</span> Options<span class="token punctuation">;</span>
  <span class="token keyword">private</span> version<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token function">constructor</span><span class="token punctuation">(</span>options<span class="token operator">:</span> Options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initDef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">installInnerTrack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* 初始化 */</span>
  <span class="token keyword">private</span> <span class="token function">initDef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DefaultOptons <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>version <span class="token operator">=</span> TrackerConfig<span class="token punctuation">.</span>version<span class="token punctuation">;</span>
    <span class="token comment">/* 重写 window.history 方法 */</span>
    window<span class="token punctuation">.</span>history<span class="token punctuation">[</span><span class="token string">&#39;pushState&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">createHistoryEvnent</span><span class="token punctuation">(</span><span class="token string">&quot;pushState&quot;</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span>history<span class="token punctuation">[</span><span class="token string">&#39;replaceState&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">createHistoryEvnent</span><span class="token punctuation">(</span><span class="token string">&#39;replaceState&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token operator">&lt;</span>DefaultOptons<span class="token operator">&gt;</span><span class="token punctuation">{</span>
      sdkVersion<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>version<span class="token punctuation">,</span>
      historyTracker<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      hashTracker<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      domTracker<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      jsError<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>


  <span class="token keyword">public</span> <span class="token generic-function"><span class="token function">setUserId</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> DefaultOptons<span class="token punctuation">[</span><span class="token string">&#39;uuid&#39;</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>uuid<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>uuid <span class="token operator">=</span> uuid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token generic-function"><span class="token function">setExtra</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> DefaultOptons<span class="token punctuation">[</span><span class="token string">&#39;extra&#39;</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>extra<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>extra <span class="token operator">=</span> extra
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token generic-function"><span class="token function">sendTracker</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> reportTrackerData<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reportTracker</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* 遍历注入 window 自定义事件 */</span>
  <span class="token keyword">private</span> <span class="token generic-function"><span class="token function">captureEvents</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>MouseEventList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> targetKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    MouseEventList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>event <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reportTracker</span><span class="token punctuation">(</span><span class="token punctuation">{</span> event<span class="token punctuation">,</span> targetKey<span class="token punctuation">,</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* 自定义事件初始化函数 */</span>
  <span class="token keyword">private</span> <span class="token function">installInnerTrack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>historyTracker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">captureEvents</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;pushState&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;replaceState&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;popstate&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;history-pv&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>hashTracker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">captureEvents</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;hashchange&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;hash-pv&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>domTracker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">targetKeyReport</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>jsError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">jsError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">//dom 点击上报</span>
  <span class="token keyword">private</span> <span class="token function">targetKeyReport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    MouseEventList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>event <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> target <span class="token operator">=</span> e<span class="token punctuation">.</span>target <span class="token keyword">as</span> HTMLElement
        <span class="token keyword">const</span> targetValue <span class="token operator">=</span> target<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;target-key&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>targetValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendTracker</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            targetKey<span class="token operator">:</span> targetValue<span class="token punctuation">,</span>
            event
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* js错误上报 */</span>
  <span class="token keyword">private</span> <span class="token function">jsError</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">errorEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">promiseReject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//捕获js报错</span>
  <span class="token keyword">private</span> <span class="token function">errorEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendTracker</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        targetKey<span class="token operator">:</span> <span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span>
        event<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span> e<span class="token punctuation">.</span>message
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//捕获promise 错误</span>
  <span class="token keyword">private</span> <span class="token function">promiseReject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;unhandledrejection&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      event<span class="token punctuation">.</span>promise<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>error <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendTracker</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          targetKey<span class="token operator">:</span> <span class="token string">&quot;reject&quot;</span><span class="token punctuation">,</span>
          event<span class="token operator">:</span> <span class="token string">&quot;promise&quot;</span><span class="token punctuation">,</span>
          message<span class="token operator">:</span> error
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">//上报</span>
  <span class="token keyword">private</span> <span class="token generic-function"><span class="token function">reportTracker</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token punctuation">{</span> time<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    navigator<span class="token punctuation">.</span><span class="token function">sendBeacon</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>requestUrl<span class="token punctuation">,</span> blob<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="工具函数-src-utils-pv" tabindex="-1"><a class="header-anchor" href="#工具函数-src-utils-pv"><span>工具函数 src/utils/pv</span></a></h3><blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">/* src/utils/pv/index.ts */</span>
<span class="token doc-comment comment">/***
	* Event 创建自定义事件
	* dispatchEvent 派发事件
	* addEventListener 监听事件
	* removeEventListener 删除事件
	* ===&gt; 等同于 发布订阅模式
	*/</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> createHistoryEvnent <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> History<span class="token operator">&gt;</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> origin <span class="token operator">=</span> history<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">origin</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
    <span class="token comment">// 通过 type 来创建自定义事件</span>
    <span class="token keyword">const</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
    window<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="设置package-json" tabindex="-1"><a class="header-anchor" href="#设置package-json"><span>设置package json</span></a></h3><blockquote><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;willy-tracker&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/index.cjs.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/index.esm.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span><span class="token string">&quot;dist/index.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rollup -c&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;前端&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;埋点&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tracker&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;dist&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;rollup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.76.0&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;rollup-plugin-dts&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.2.2&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;rollup-plugin-typescript2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.32.1&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.7.4&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="发布npm" tabindex="-1"><a class="header-anchor" href="#发布npm"><span>发布npm</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>注意:一定要使用npm 的源，不能使用淘宝镜像，否则会报403错误

<span class="token number">1</span>.npm adduser
用户名 密码 邮箱 邮箱验证码

<span class="token number">2</span>. <span class="token function">npm</span> login  
输入刚才的 用户名 密码 邮箱 验证码

<span class="token number">3</span>.npm publish 发布
发布的时候403 有可能是名字重复注意一下

<span class="token function">npm</span> 官网查看
willy-tracker - <span class="token function">npm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="打包后的html文件调用" tabindex="-1"><a class="header-anchor" href="#打包后的html文件调用"><span>打包后的html文件调用</span></a></h3><blockquote><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./dist/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">target-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>添加target-key的按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>无添加target-key的按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">new</span> <span class="token class-name">tracker</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">requestUrl</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:9000/tracker&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">historyTracker</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>	<span class="token comment">// 开启监听页面的前进与回退的触发</span>
      <span class="token literal-property property">domTracker</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>	<span class="token comment">// 开启监听 dom事件触发上报</span>
      <span class="token literal-property property">jsError</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启监听js错误上报</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="后台接口代码" tabindex="-1"><a class="header-anchor" href="#后台接口代码"><span>后台接口代码</span></a></h3><blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> cros <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cors&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cros</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">urlemcoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/tracker&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">9000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;success 9000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="核心-core" tabindex="-1"><a class="header-anchor" href="#核心-core"><span>核心 Core</span></a></h2><h3 id="获取当前的git分支名" tabindex="-1"><a class="header-anchor" href="#获取当前的git分支名"><span>获取当前的git分支名</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### 36. 获取当前的git分支名</span>
<span class="token number">1</span>. 安装插件
$ <span class="token function">pnpm</span> i child_process <span class="token parameter variable">-D</span>

<span class="token number">2</span>. 在 Vite 的配置文件中引入 child_process 模块

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="postcss" tabindex="-1"><a class="header-anchor" href="#postcss"><span>postcss</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## postcss</span>
<span class="token number">1</span>. 安装
$ <span class="token function">pnpm</span> i <span class="token parameter variable">-S</span> postcss-pxtorem amfe-flexible autoprefixer


<span class="token number">2</span>. main.ts 中引用
<span class="token function">import</span> <span class="token string">&#39;amfe-flexible&#39;</span>


<span class="token number">3</span>. vite.config.ts 中配置

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vite-config-ts-配置" tabindex="-1"><a class="header-anchor" href="#vite-config-ts-配置"><span>vite.config.ts 配置</span></a></h4><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> autoprefixer <span class="token keyword">from</span> <span class="token string">&#39;autoprefixer&#39;</span>
<span class="token keyword">import</span> postCssPxToRem <span class="token keyword">from</span> <span class="token string">&#39;postcss-pxtorem&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> mode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    postcss<span class="token operator">:</span> <span class="token punctuation">{</span>
        plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token function">autoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            overrideBrowserslist<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token string">&#39;Android 4.1&#39;</span><span class="token punctuation">,</span>
              <span class="token string">&#39;iOS 7.1&#39;</span><span class="token punctuation">,</span>
              <span class="token string">&#39;Chrome &gt; 31&#39;</span><span class="token punctuation">,</span>
              <span class="token string">&#39;ff &gt; 31&#39;</span><span class="token punctuation">,</span>
              <span class="token string">&#39;ie &gt;= 8&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token function">postCssPxToRem</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// 自适应，px&gt;rem转换</span>
            rootValue<span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token comment">// 75表示750设计稿，37.5表示375设计稿</span>
            propList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 需要转换的属性，这里选择全部都进行转换</span>
            selectorBlackList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.willy&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 过滤掉 willy- 开头的 class，不进行rem转换</span>
            exclude<span class="token operator">:</span> <span class="token string">&#39;/node_modules&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 忽略包文件转换rem</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="md文档展示" tabindex="-1"><a class="header-anchor" href="#md文档展示"><span>md文档展示</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## md 文档展示</span>
<span class="token number">1</span>. 文档
<span class="token punctuation">[</span>v-md-editor<span class="token punctuation">]</span><span class="token punctuation">(</span>https://ckang1229.gitee.io/vue-markdown-editor/zh/<span class="token punctuation">)</span>

<span class="token number">2</span>. 安装相关依赖
<span class="token function">pnpm</span> i @kangc/v-md-editor highlight.js prismjs

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useReadPathFiles <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useReadPathFiles&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">import</span> VMdEditor <span class="token keyword">from</span> <span class="token string">&#39;@kangc/v-md-editor&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@kangc/v-md-editor/lib/style/base-editor.css&#39;</span>
<span class="token comment">// import githubTheme from &#39;@kangc/v-md-editor/lib/theme/github.js&#39;</span>
<span class="token comment">// import &#39;@kangc/v-md-editor/lib/theme/style/github.css&#39;</span>
<span class="token keyword">import</span> vuepressTheme <span class="token keyword">from</span> <span class="token string">&#39;@kangc/v-md-editor/lib/theme/vuepress.js&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@kangc/v-md-editor/lib/theme/style/vuepress.css&#39;</span>

<span class="token comment">// highlightjs</span>
<span class="token comment">// import Hljs from &#39;highlight.js&#39;</span>
<span class="token keyword">import</span> Prism <span class="token keyword">from</span> <span class="token string">&#39;prismjs&#39;</span>

VMdEditor<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vuepressTheme<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// Hljs,</span>
  Prism<span class="token punctuation">,</span>
  <span class="token literal-property property">codeHighlightExtensionMap</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> fileMap <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useReadPathFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// eslint-disable-next-line @typescript-eslint/no-non-null-assertion</span>
<span class="token keyword">const</span> tempFilePath <span class="token operator">=</span> fileMap<span class="token punctuation">[</span><span class="token string">&#39;前端基础&#39;</span><span class="token punctuation">]</span><span class="token operator">!</span><span class="token punctuation">.</span>children<span class="token operator">!</span><span class="token punctuation">.</span>Nodejs<span class="token operator">!</span><span class="token punctuation">.</span>filePath <span class="token keyword">as</span> string
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fileMap<span class="token punctuation">,</span> tempFilePath<span class="token punctuation">)</span>
<span class="token keyword">const</span> markdown <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> VMdEditorConfig <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> markdown<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
  <span class="token comment">// 模式。可选值：edit(纯编辑模式) editable(编辑与预览模式) preview(纯预览模式)</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;editable&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;90vh&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 编辑和预览时制表符的长度</span>
  <span class="token string-property property">&#39;tab-size&#39;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token comment">// 目录导航是否在右侧</span>
  <span class="token string-property property">&#39;toc-nav-position-right&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否默认显示目录导航</span>
  <span class="token string-property property">&#39;default-show-toc&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 编辑器加载完是否自动聚焦</span>
  <span class="token literal-property property">autofocus</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否默认开启全屏</span>
  <span class="token string-property property">&#39;default-fullscreen&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 目录导航生成时包含的标题。默认包含 2 级、3 级标题。</span>
  <span class="token string-property property">&#39;include-level&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 左侧工具栏，默认：undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save</span>
  <span class="token string-property property">&#39;left-toolbar&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 右侧工具栏，preview toc sync-scroll fullscreen</span>
  <span class="token string-property property">&#39;right-toolbar&#39;</span><span class="token operator">:</span> <span class="token string">&#39;toc sync-scroll fullscreen&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">fetch</span><span class="token punctuation">(</span>tempFilePath<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    markdown<span class="token punctuation">.</span>value <span class="token operator">=</span> data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ui-md<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VMdEditor</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>markdown<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>VMdEditorConfig<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;@/styles/funs.scss&#39;</span><span class="token punctuation">;</span></span>

<span class="token selector">.ui-md</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">p2r</span><span class="token punctuation">(</span>12<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">overflow-x</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.v-md-editor__editor-wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">pre</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@include</span> <span class="token function">scrollbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
  <span class="token selector">&amp;::-webkit-scrollbar</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">p2r</span><span class="token punctuation">(</span>8<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/*定义滚动条轨道（凹槽）样式*/</span>
  <span class="token selector">::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">p2r</span><span class="token punctuation">(</span>8<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/*定义滑块 样式*/</span>
  <span class="token selector">&amp;::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">p2r</span><span class="token punctuation">(</span>10<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">p2r</span><span class="token punctuation">(</span>8<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * @ Author: willy
 * @ Create Time: 2023-11-03 11:20:57
 * @ Modifier by: willy
 * @ Modifier time: 2023-11-06 20:39:07
 * @ Description: 读取设定目录的所有文件
 */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token doc-comment comment">/** 单个文件的类型 */</span>
<span class="token keyword">interface</span> <span class="token class-name">IFileNode</span> <span class="token punctuation">{</span>
  filePath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  fileName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  children<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> IFileNode<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 文件地图类型 */</span>
<span class="token keyword">type</span> <span class="token class-name">IFileMap</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> IFileNode<span class="token operator">&gt;</span>

<span class="token doc-comment comment">/**
 * 读取设定目录下的所有文件
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>IFileMap<span class="token punctuation">}</span> 文件列表（树形菜单）
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useReadPathFiles</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 获取设定目录的所有文件 */</span>
  <span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">&#39;/blog/**/*.md&#39;</span><span class="token punctuation">)</span>

  <span class="token doc-comment comment">/** 文件地图（属性菜单） */</span>
  <span class="token keyword">let</span> fileMap<span class="token operator">:</span> IFileMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> path <span class="token keyword">in</span> modules<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 文件路径 */</span>
    <span class="token keyword">const</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span>

    <span class="token doc-comment comment">/** 文件路径拆分开 */</span>
    <span class="token keyword">const</span> dir<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> filePath<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>

    <span class="token doc-comment comment">/** 初始化，从根节点开始遍历树形菜单 */</span>
    <span class="token keyword">let</span> node <span class="token operator">=</span> fileMap

    <span class="token doc-comment comment">/** 根据文件路径组成树形菜单对象 */</span>
    dir<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>curPath<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token doc-comment comment">/** 是否为目录 */</span>
      <span class="token keyword">const</span> isDir <span class="token operator">=</span> dir<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token keyword">undefined</span>

      <span class="token doc-comment comment">/** 判断当前节点有没有子节点，否则创建对象来存储 */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">[</span>curPath<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">[</span>curPath<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token doc-comment comment">/** 判断当前节点的子节点有无节点，否则创建对象来存储 */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">[</span>curPath<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">[</span>curPath<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token doc-comment comment">/**
       * 1. 如果为目录，则取其子节点作为索引来继续进行
       * 2. 如果为文件，则进行赋值存储
       */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isDir<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node <span class="token operator">=</span> node<span class="token punctuation">[</span>curPath<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token keyword">as</span> IFileMap
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">[</span>curPath<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
          filePath<span class="token operator">:</span> path<span class="token punctuation">,</span>
          fileName<span class="token operator">:</span> curPath<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  fileMap <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>fileMap<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    fileMap<span class="token punctuation">,</span>
    modules<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="可视化拖拽编辑器-visualeditor" tabindex="-1"><a class="header-anchor" href="#可视化拖拽编辑器-visualeditor"><span>可视化拖拽编辑器 visualEditor</span></a></h2><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 可视化拖拽编辑器 visualEditor</span>
<span class="token number">1</span>. 安装依赖库：$ <span class="token function">npm</span> <span class="token function">install</span> react react-dom react-dnd react-dnd-html5-backend


<span class="token comment">### 创建基本组件</span>
- DragSourceComponent（拖拽源组件）
- DropTargetComponent（放置目标组件）
- DraggableItem（可拖拽的项目）



<span class="token comment">### 使用 React DnD 库实现拖拽功能</span>
- DragSource：用于将组件变为可拖拽源组件。
- DropTarget：用于将组件变为可接收拖拽目标组件。


<span class="token comment">### 实现编辑器逻辑</span>
组件需要处理以下事件：
    - 拖拽开始（onDragStart）
    - 拖拽结束（onDragEnd）
    - 拖拽进入区域（onDragEnter）
    - 拖拽离开区域（onDragLeave）
    - 拖拽在区域上移动（onDragOver）
    - 松开鼠标放置项目（onDrop）
 拖拽结束后，将项目的位置存储在状态管理工具（如：Redux或React Context）中，以便跟踪每个项目的位置。


<span class="token comment">### 流程图插件库</span>
- react-flow：https://reactflow.dev/docs/api/edges/edge-utils/
- G6：https://g6.antv.antgroup.com/manual/middle/graph
- xflow：https://xflow.antv.vision/en-US/docs/tutorial/intro/getting-started

- react-flow参考：https://juejin.cn/post/7080794712113692686


<span class="token comment">### 任务清单</span>
-  去除 React.StrictMode；（主要是 React Hooks 有影响，产生其奇怪的 BUG， 比如的 useMemo的第二个参数不管是那个一个值变化都要重新执行该函数的第一个回调函数，因为返回了新的对象，没有起到优化作用，还有 useState 等多个函数）
-  主页面结构：左侧菜单栏可选组件列表、中间容器画布、右侧编辑组件定义的属性；
-  从菜单栏拖拽组件到容器；
-  组件（Block）在容器的选中状态；
-  容器内组件可移动位置；
-  命令队列及对应的快捷键；
-  容器内的组件单选、多选、全选；


  操作栏按钮：
  -  撤销、重做 **重难点**；
  -  置顶、置底；
  -  删除、清空；
  -  预览、关闭编辑模式；
  -  导入、导出；

-  右键菜单；
-  拖拽粘性贴边；
-  组件可以拖动调整高度和宽度（height，width）；
-  组件可以设置预定好的属性（props）；
-  组件绑定值（model）；
-  设置组件标识（soltName），根据这个标识，定义某个组件的行为（函数触发）和插槽的实现（自定义视图）<span class="token punctuation">;</span>

-  
  完善可选组件列表:
  -  输入框：双向绑定值，调整宽度；
  -  按钮：类型、文字、大小尺寸、拖拽调整宽高；
  -  图片：自定义图片地址、拖拽调整图片宽高
  -  下拉框：预定义选项值、双向绑定字段；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DndProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-dnd&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HTML5Backend <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-dnd-html5-backend&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DragSourceComponent <span class="token keyword">from</span> <span class="token string">&#39;./components/DragSourceComponent&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DropTargetComponent <span class="token keyword">from</span> <span class="token string">&#39;./components/DropTargetComponent&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DndProvider</span></span> <span class="token attr-name">backend</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>HTML5Backend<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DragSourceComponent</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropTargetComponent</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DndProvider</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,59);function z(R,D){const t=o("ExternalLinkIcon");return l(),c("div",null,[y,n("blockquote",null,[n("ul",null,[h,n("li",null,[s("useMouse 只是 vueuse 的一个最基本的函数库，更多函数官方文档："),n("a",f,[s("链接"),p(t)])]),q]),w]),x,n("blockquote",null,[j,n("p",null,[s("适用于firefox, chrome, opera >= 15和IE >= 10(但不是在兼容性视图)。在较新的浏览器中最简单的方法是使用saveAs或polyfill，参见"),n("a",S,[s("FileSaver.js"),p(t)]),s("。 FileSaver 的适用范围：")]),n("blockquote",null,[n("p",null,[s("如果你需要保存比blob的大小限制更大的文件，或者没有足够的RAM，那么可以看看更高级的"),n("a",_,[s("StreamSaver.js"),p(t)]),s("，它可以使用新的流API将数据直接异步保存到硬盘驱动器。这将支持进度，取消，并知道何时完成。")])]),E,n("p",null,[n("a",C,[s("Downloadify"),p(t)]),s("使用一个小的Flash SWF(SWF 文件是使用Flash软件生成的常见文件，会用于PPT插入等操作)来下载文件到用户的电脑，文件的文件名你可以选择。Doug Neiner添加了dataType选项，允许您通过zip文件进行下载。")]),M]),T])}const I=e(g,[["render",z],["__file","项目集.html.vue"]]),L=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/%E9%A1%B9%E7%9B%AE%E9%9B%86.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willysliang","CreateTime":"2022-12-05T15:30:38.000Z","Modifier":"willysliang","ModifiedTime":"2023-01-10T13:47:00.000Z","Description":"项目集"},"headers":[{"level":2,"title":"项目集","slug":"项目集","link":"#项目集","children":[]},{"level":2,"title":"前端代码规范","slug":"前端代码规范","link":"#前端代码规范","children":[{"level":3,"title":"CSS架构之BEM设计模式","slug":"css架构之bem设计模式","link":"#css架构之bem设计模式","children":[]}]},{"level":2,"title":"公用配置","slug":"公用配置","link":"#公用配置","children":[]},{"level":2,"title":"懒人记账 lazy-bookkeeping","slug":"懒人记账-lazy-bookkeeping","link":"#懒人记账-lazy-bookkeeping","children":[{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]},{"level":3,"title":"项目初始化","slug":"项目初始化","link":"#项目初始化","children":[]}]},{"level":2,"title":"音乐播放器 music-player","slug":"音乐播放器-music-player","link":"#音乐播放器-music-player","children":[{"level":3,"title":"开发目录","slug":"开发目录","link":"#开发目录","children":[]},{"level":3,"title":"开发进度","slug":"开发进度","link":"#开发进度","children":[]},{"level":3,"title":"开发问题","slug":"开发问题","link":"#开发问题","children":[]},{"level":3,"title":"0. 项目初始化","slug":"_0-项目初始化","link":"#_0-项目初始化","children":[]},{"level":3,"title":"1.集成配置","slug":"_1-集成配置","link":"#_1-集成配置","children":[]},{"level":3,"title":"2.集成 eslint","slug":"_2-集成-eslint","link":"#_2-集成-eslint","children":[]},{"level":3,"title":"3.集成 prettier","slug":"_3-集成-prettier","link":"#_3-集成-prettier","children":[]},{"level":3,"title":"4.集成 pinia","slug":"_4-集成-pinia","link":"#_4-集成-pinia","children":[]},{"level":3,"title":"5.集成 vue-router4","slug":"_5-集成-vue-router4","link":"#_5-集成-vue-router4","children":[]},{"level":3,"title":"6. 集成 vueuse","slug":"_6-集成-vueuse","link":"#_6-集成-vueuse","children":[]},{"level":3,"title":"7. CSS 的集成","slug":"_7-css-的集成","link":"#_7-css-的集成","children":[]},{"level":3,"title":"8. 集成 axios","slug":"_8-集成-axios","link":"#_8-集成-axios","children":[]},{"level":3,"title":"9. css 的 UI 样式库","slug":"_9-css-的-ui-样式库","link":"#_9-css-的-ui-样式库","children":[]},{"level":3,"title":"10. 使用 commitizen 规范git提交","slug":"_10-使用-commitizen-规范git提交","link":"#_10-使用-commitizen-规范git提交","children":[]},{"level":3,"title":"11. 安装 husky","slug":"_11-安装-husky","link":"#_11-安装-husky","children":[]},{"level":3,"title":"12. 集成 stylelint","slug":"_12-集成-stylelint","link":"#_12-集成-stylelint","children":[]},{"level":3,"title":"13. vite配置 vite.config.ts","slug":"_13-vite配置-vite-config-ts","link":"#_13-vite配置-vite-config-ts","children":[]},{"level":3,"title":"14. 配置 tailwindcss","slug":"_14-配置-tailwindcss","link":"#_14-配置-tailwindcss","children":[]},{"level":3,"title":"15.  集成 mockjs","slug":"_15-集成-mockjs","link":"#_15-集成-mockjs","children":[]},{"level":3,"title":"16.  配置国际化插件 vue-i18n","slug":"_16-配置国际化插件-vue-i18n","link":"#_16-配置国际化插件-vue-i18n","children":[]},{"level":3,"title":"17. setup 中声明组件名","slug":"_17-setup-中声明组件名","link":"#_17-setup-中声明组件名","children":[]},{"level":3,"title":"18. 日期时间格式化插件  dayjs","slug":"_18-日期时间格式化插件-dayjs","link":"#_18-日期时间格式化插件-dayjs","children":[]},{"level":3,"title":"19. 打包解析插件","slug":"_19-打包解析插件","link":"#_19-打包解析插件","children":[]},{"level":3,"title":"20. Excel表格插件xlsx","slug":"_20-excel表格插件xlsx","link":"#_20-excel表格插件xlsx","children":[]},{"level":3,"title":"21.富文本编辑器 wangeditor","slug":"_21-富文本编辑器-wangeditor","link":"#_21-富文本编辑器-wangeditor","children":[]},{"level":3,"title":"22. 压缩文件 jszip","slug":"_22-压缩文件-jszip","link":"#_22-压缩文件-jszip","children":[]},{"level":3,"title":"23. 页面引导插件  driver.js","slug":"_23-页面引导插件-driver-js","link":"#_23-页面引导插件-driver-js","children":[]},{"level":3,"title":"24. 图片裁剪插件  cropperjs","slug":"_24-图片裁剪插件-cropperjs","link":"#_24-图片裁剪插件-cropperjs","children":[]},{"level":3,"title":"25.拖拽组件 vuedraggable","slug":"_25-拖拽组件-vuedraggable","link":"#_25-拖拽组件-vuedraggable","children":[]},{"level":3,"title":"26.日历组件","slug":"_26-日历组件","link":"#_26-日历组件","children":[]},{"level":3,"title":"27. 二维码生成插件 qrcode","slug":"_27-二维码生成插件-qrcode","link":"#_27-二维码生成插件-qrcode","children":[]},{"level":3,"title":"28. 仪表盘","slug":"_28-仪表盘","link":"#_28-仪表盘","children":[]},{"level":3,"title":"29. 弹幕插件","slug":"_29-弹幕插件","link":"#_29-弹幕插件","children":[]},{"level":3,"title":"30. 视频播放插件 vue3-video-play","slug":"_30-视频播放插件-vue3-video-play","link":"#_30-视频播放插件-vue3-video-play","children":[]},{"level":3,"title":"31. 抽奖组件","slug":"_31-抽奖组件","link":"#_31-抽奖组件","children":[]},{"level":3,"title":"32. 内容懒加载组件","slug":"_32-内容懒加载组件","link":"#_32-内容懒加载组件","children":[]},{"level":3,"title":"33. 页面水印(防君子不防小人)","slug":"_33-页面水印-防君子不防小人","link":"#_33-页面水印-防君子不防小人","children":[]},{"level":3,"title":"34. 大文件断点续传","slug":"_34-大文件断点续传","link":"#_34-大文件断点续传","children":[]},{"level":3,"title":"35.  查看项目依赖","slug":"_35-查看项目依赖","link":"#_35-查看项目依赖","children":[]}]},{"level":2,"title":"前端监控","slug":"前端监控","link":"#前端监控","children":[{"level":3,"title":"前端埋点 Tracker","slug":"前端埋点-tracker","link":"#前端埋点-tracker","children":[]},{"level":3,"title":"配置rollup.config.js","slug":"配置rollup-config-js","link":"#配置rollup-config-js","children":[]},{"level":3,"title":"src/type 定义类型","slug":"src-type-定义类型","link":"#src-type-定义类型","children":[]},{"level":3,"title":"src/core 核心功能","slug":"src-core-核心功能","link":"#src-core-核心功能","children":[]},{"level":3,"title":"工具函数 src/utils/pv","slug":"工具函数-src-utils-pv","link":"#工具函数-src-utils-pv","children":[]},{"level":3,"title":"设置package json","slug":"设置package-json","link":"#设置package-json","children":[]},{"level":3,"title":"发布npm","slug":"发布npm","link":"#发布npm","children":[]},{"level":3,"title":"打包后的html文件调用","slug":"打包后的html文件调用","link":"#打包后的html文件调用","children":[]},{"level":3,"title":"后台接口代码","slug":"后台接口代码","link":"#后台接口代码","children":[]}]},{"level":2,"title":"核心 Core","slug":"核心-core","link":"#核心-core","children":[{"level":3,"title":"获取当前的git分支名","slug":"获取当前的git分支名","link":"#获取当前的git分支名","children":[]},{"level":3,"title":"postcss","slug":"postcss","link":"#postcss","children":[]},{"level":3,"title":"md文档展示","slug":"md文档展示","link":"#md文档展示","children":[]}]},{"level":2,"title":"可视化拖拽编辑器 visualEditor","slug":"可视化拖拽编辑器-visualeditor","link":"#可视化拖拽编辑器-visualeditor","children":[]}],"git":{"updatedTime":1701137510000,"contributors":[{"name":"willy","email":"willysliang","commits":2}]},"filePathRelative":"前端进阶/项目集.md"}');export{I as comp,L as data};
