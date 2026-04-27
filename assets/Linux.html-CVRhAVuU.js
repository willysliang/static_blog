import{_ as n,o as s,c as a,d as e}from"./app-Bf_tkh-q.js";const i="/blog/assets/image-20220818132459662-1661070058347-BEZDcx1w.png",l="/blog/assets/783284cf6b014109a6464b533c15ff00-1661070058347-CycrSG0W.png",t="/blog/assets/image-20220818134811486-1661070058348-Dy-b39Gr.png",c="/blog/assets/v2-c20cb49c88034e73e09059668b8cecfb_1440w-CjW5qDSB.jpg",p="/blog/assets/image-20241123105916251-iarUdyEZ.png",r="/blog/assets/image-20241125150207185-B0yMs_7X.png",o="/blog/assets/image-20241123113826696-BAGlNRJs.png",d="/blog/assets/image-20250107231715345-DVzmkaEV.png",v="/blog/assets/image-20250107231750938-CRyg9s81.png",u="/blog/assets/image-20250107231849187-Db6XznHM.png",m="/blog/assets/image-20241123114407420-CuuoUhD6.png",b="/blog/assets/image-20250107223017902-BfrvA4lz.png",k="/blog/assets/image-20250107235829915-B_3n1ht5.png",g="/blog/assets/image-20250108001459557-6TaS6bjZ.png",h="/blog/assets/image-20250108001943241-CFhxts6t.png",x="/blog/assets/image-20250108204002479-BjfYHwsd.png",f="/blog/assets/image-20250108213227603-BusUUaRk.png",w={},y=e(`<h2 id="bash" tabindex="-1"><a class="header-anchor" href="#bash"><span>Bash</span></a></h2><h4 id="bash-常用快捷键" tabindex="-1"><a class="header-anchor" href="#bash-常用快捷键"><span>bash 常用快捷键</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### Bash 常用快捷键</span>
- <span class="token variable"><span class="token variable">\`</span>Ctrl+C<span class="token variable">\`</span></span> 终止命令
- <span class="token variable"><span class="token variable">\`</span>Ctrl+Z<span class="token variable">\`</span></span> 暂停命令
- <span class="token variable"><span class="token variable">\`</span>Ctrl+A<span class="token variable">\`</span></span> 将光标移动行首
- <span class="token variable"><span class="token variable">\`</span>Ctrl+E<span class="token variable">\`</span></span> 将光标移动到行尾
- <span class="token variable"><span class="token variable">\`</span>Ctrl+F<span class="token variable">\`</span></span> 向前移动一个字符
- <span class="token variable"><span class="token variable">\`</span>Ctrl+B<span class="token variable">\`</span></span> 向后移动一个字符
- <span class="token variable"><span class="token variable">\`</span>Ctrl+U<span class="token variable">\`</span></span> 从光标处删除到行首
- <span class="token variable"><span class="token variable">\`</span>Ctrl+K<span class="token variable">\`</span></span> 从光标处删除到行尾
- <span class="token variable"><span class="token variable">\`</span>Ctrl+W<span class="token variable">\`</span></span> 从光标处删除到单词的开头
- <span class="token variable"><span class="token variable">\`</span>Ctrl+D<span class="token variable">\`</span></span> 删除光标下的字符
- <span class="token variable"><span class="token variable">\`</span>Ctrl+H<span class="token variable">\`</span></span> 删除光标前的字符
- <span class="token variable"><span class="token variable">\`</span>Ctrl+T<span class="token variable">\`</span></span> 将光标下的字符与上一个交换
- <span class="token variable"><span class="token variable">\`</span>Ctrl+L<span class="token variable">\`</span></span> 清屏，相当于 <span class="token variable"><span class="token variable">\`</span><span class="token function">clear</span><span class="token variable">\`</span></span> 命令
- <span class="token variable"><span class="token variable">\`</span>Ctrl+Y<span class="token variable">\`</span></span> 粘贴 <span class="token variable"><span class="token variable">\`</span>Ctrl+U<span class="token variable">\`</span></span> 或 <span class="token variable"><span class="token variable">\`</span>Ctrl+K<span class="token variable">\`</span></span> 剪切的内容
- <span class="token variable"><span class="token variable">\`</span>Ctrl+R<span class="token variable">\`</span></span> 在历史命令中搜索，按下 <span class="token variable"><span class="token variable">\`</span>Ctrl+R<span class="token variable">\`</span></span> 组合键之后，就会出现搜索界面，只要输入搜索内容，就会从历史命令中搜索
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="windows命令下载文件" tabindex="-1"><a class="header-anchor" href="#windows命令下载文件"><span>windows命令下载文件</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### windows 命令下载文件</span>
- 在打开的poershell窗口中，依次输入如下命令：
    <span class="token variable"><span class="token variable">\`</span>$client <span class="token operator">=</span> new-object System.Net.WebClient<span class="token variable">\`</span></span> （回车）
- <span class="token variable"><span class="token variable">\`</span>$client.DownloadFile<span class="token punctuation">(</span><span class="token string">&#39;网络文件链接地址&#39;</span>,<span class="token string">&#39;保存到本地后的路径+文件名&#39;</span><span class="token punctuation">)</span><span class="token variable">\`</span></span> （回车）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>start powershell
$client = new-object System.Net.WebClient
$client.DownloadFile(&#39;http://test.com/xxx.html&#39;,&#39;D:\\index.html&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h2><h3 id="下载文件" tabindex="-1"><a class="header-anchor" href="#下载文件"><span><strong>下载文件</strong></span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># wget -c http下载，不需要翻墙</span>
<span class="token function">wget</span> <span class="token parameter variable">-c</span> http://test.com/zip/test.zip

<span class="token comment">#让档案自动存储到指令的目录下，需要-P参数</span>
<span class="token function">wget</span> <span class="token parameter variable">-P</span> 目录 网址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="移动命令mv" tabindex="-1"><a class="header-anchor" href="#移动命令mv"><span>移动命令mv</span></a></h3><blockquote><ul><li>mv(选项)(参数) 剪切，或在同目录下移动重命名</li><li>如果目标文件是文件夹，则源文件直接移动到该文件夹内，名字还是源文件的名字。</li><li>.如果目标文件是文件，则源文件移动的同时也会更改名字</li><li>如果源文件为多个，则目标必须是目录，并且统一移动到目录下</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#-b：当目标文件存在时，先进行备份在覆盖</span>
<span class="token function">mv</span> <span class="token parameter variable">-b</span> a/aa b/		<span class="token comment">#ls b --&gt;aa aa~ bb</span>

<span class="token comment">#-f：当目标文件存在时，强制覆盖</span>
<span class="token function">mv</span> <span class="token parameter variable">-f</span> a/aa b/	<span class="token comment">#ls b --&gt;aa bb</span>

-i：默认选项，当目标文件存在时，提示是否覆盖
-t：先指定目标，在制定源
-v：显示过程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="删除文件-rm" tabindex="-1"><a class="header-anchor" href="#删除文件-rm"><span>删除文件：rm</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-f</span> filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="目录文件" tabindex="-1"><a class="header-anchor" href="#目录文件"><span>目录文件</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">pwd</span>						<span class="token comment">#查看所在的路径</span>
<span class="token function">dir</span>						<span class="token comment">#查看目录下的文件</span>
<span class="token function">ls</span>						<span class="token comment"># 查看当前的目录的文件</span>
<span class="token builtin class-name">cd</span> 目录名			<span class="token comment"># 切换目录</span>
<span class="token function">cat</span> filename	 <span class="token comment">#查看文件内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="集" tabindex="-1"><a class="header-anchor" href="#集"><span>集</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#复制文件</span>
<span class="token function">cp</span> 被复制文件 拷贝到所在路径


<span class="token function">clear</span>			<span class="token comment">#清屏</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>Nginx</span></a></h2><h3 id="nginx概述" tabindex="-1"><a class="header-anchor" href="#nginx概述"><span>Nginx概述</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Nginx 概述</span>
Nginx <span class="token punctuation">(</span>engine x<span class="token punctuation">)</span> 是一个高性能的 HTTP 和反向代理 web 服务器，同时也提供了 IMAP/POP3/SMTP 服务。


高并发/大流量：需要面对高并发用户，大流量访问。
Nginx 是一个安装非常的简单、配置文件非常简洁（还能够支持perl语法）、Bug非常少的服务。
Nginx 启动特别容易，并且几乎可以做到7*24不间断运行，即使运行数个月也不需要重新启动。你还能够不间断服务的情况下进行软件版本的升级。
Nginx代码完全用C语言从头写成。官方数据测试表明能够支持高达 <span class="token number">50,000</span> 个并发连接数的响应。


<span class="token comment"># 负载均衡（upstream）</span>
<span class="token number">1</span>. 轮询
轮询方式是Nginx负载默认的方式，即所有请求都按照时间顺序分配到不同的服务上，如果服务Down掉，可以自动剔除

<span class="token number">2</span>. 权重
指定每个服务的权重比例，weight和访问比率成正比，通常用于后端服务机器性能不统一，将性能好的分配权重高来发挥服务器最大性能


<span class="token comment"># 动静分离</span>
在Web开发中，通常来说，动态资源其实就是指那些后台资源，而静态资源就是指HTML，JavaScript，CSS，img等文件。
一般来说，都需要将动态资源和静态资源分开，将静态资源部署在Nginx上，当一个请求来的时候，如果是静态资源的请求，就直接到nginx配置的静态资源目录下面获取资源，如果是动态资源的请求，nginx利用反向代理的原理，把请求转发给后台应用去处理，从而实现动静分离。
在使用前后端分离之后，可以很大程度的提升静态资源的访问速度，同时在开过程中也可以让前后端开发并行可以有效的提高开发时间，也可以有些的减少联调时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="正向代理" tabindex="-1"><a class="header-anchor" href="#正向代理"><span>正向代理</span></a></h4><ul><li>nginx不仅可以做反向代理，还能用作正向代理来进行上网等功能。</li><li>如果把局域网外的Internet想象成一个巨大的资源库，则局域网中的客户端要访问Internet，则需要通过代理服务器来访问，这种代理服务就称为正向代理（即是：通过正向代理进行上网功能）</li></ul><p><img src="`+i+'" alt="image-20220818132459662"></p><h4 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理"><span>反向代理</span></a></h4><ul><li><strong>反向代理</strong>实际运行方式是代理服务器接受网络上的连接请求。它将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给网络上请求连接的客户端，此时代理服务器对外就表现为一个服务器。</li></ul><p><img src="'+l+`" alt="img"></p></blockquote><h3 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx"><span>安装Nginx</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 安装 Nginx</span>
<span class="token number">1</span>. 安装gcc
安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境，如果没有 gcc 环境，则需要安装：
yum <span class="token function">install</span> gcc-c++


<span class="token number">2</span>. PCRE pcre-devel 安装
PCRE<span class="token punctuation">(</span>Perl Compatible Regular Expressions<span class="token punctuation">)</span> 是一个Perl库，包括 perl 兼容的正则表达式库。nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库。nginx也需要此库。命令：
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> pcre pcre-devel


<span class="token number">3</span>、zlib 安装
zlib 库提供了很多种压缩和解压缩的方式， nginx 使用 zlib 对 http 包的内容进行 <span class="token function">gzip</span> ，所以需要在 Centos 上安装 zlib 库。
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> zlib zlib-devel


<span class="token number">4</span>、OpenSSL 安装
OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。
nginx 不仅支持 http 协议，还支持 https（即在ssl协议上传输http），所以需要在 Centos 安装 OpenSSL 库。
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> openssl openssl-devel


<span class="token number">5</span>.下载Nginx
<span class="token function">wget</span> https://nginx.org/download/nginx-1.19.9.tar.gz


<span class="token number">6</span>.解压nginx
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.19.9.tar.gz
<span class="token builtin class-name">cd</span> nginx-1.19.9


<span class="token number">7</span>.执行nginx-configure文件
./configure


<span class="token number">8</span>.make命令编译
执行完后会有一个MakeFile文件夹。make 是一个命令工具，它解释 Makefile 中的指令（应该说是规则）。在 Makefile文件中描述了整个工程所有文件的编译顺序、编译规则
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>


<span class="token number">9</span>.查询nginx 安装目录
<span class="token function">whereis</span> nginx


<span class="token number">10</span>.进入安装目录执行nginx；前往安装目录找到sbin 执行nginx
<span class="token builtin class-name">cd</span> /user/local/nginx
<span class="token function">ls</span>
<span class="token builtin class-name">cd</span> sbin
./nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="yum-install-404解决方案" tabindex="-1"><a class="header-anchor" href="#yum-install-404解决方案"><span>yum install 404解决方案</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>、进入配置文件内，删除所有的.repo文件（也可以备份）

<span class="token comment">#进入配置文件夹</span>
<span class="token builtin class-name">cd</span> /etc/yum.repos.d/
<span class="token comment">#删除旧的配置文件</span>
<span class="token function">rm</span> *.repo
<span class="token comment">#输入“y”回车确认</span>
ls确保该目录下的.repo文件已完全删除
下载可以用的.repo文件

<span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
如果你没有安装wget，也可以用下面命令：

<span class="token function">curl</span> <span class="token parameter variable">-o</span> /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
运行 yum makecache 生成缓存
yum makecache


Linux 防火墙
<span class="token number">1</span>、firewalld的基本使用
启动： systemctl start firewalld
查看状态： systemctl status firewalld
停止：systemctl stop firewalld
禁用：systemctl disable firewalld

<span class="token number">2</span>.systemctl是CentOS7的服务管理工具中主要的工具，它融合之前service和chkconfig的功能于一体。
启动一个服务：systemctl start firewalld.service
关闭一个服务：systemctl stop firewalld.service
重启一个服务：systemctl restart firewalld.service
显示一个服务的状态：systemctl status firewalld.service
在开机时启用一个服务：systemctl <span class="token builtin class-name">enable</span> firewalld.service
在开机时禁用一个服务：systemctl disable firewalld.service
查看服务是否开机启动：systemctl is-enabled firewalld.service
查看已启动的服务列表：systemctl list-unit-files<span class="token operator">|</span><span class="token function">grep</span> enabled
查看启动失败的服务列表：systemctl <span class="token parameter variable">--failed</span>

<span class="token number">3</span>.配置firewalld-cmd
查看版本： firewall-cmd <span class="token parameter variable">--version</span>
查看帮助： firewall-cmd <span class="token parameter variable">--help</span>
显示状态： firewall-cmd <span class="token parameter variable">--state</span>
查看所有打开的端口： firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --list-ports
更新防火墙规则： firewall-cmd <span class="token parameter variable">--reload</span>
查看区域信息:  firewall-cmd --get-active-zones
查看指定接口所属区域： firewall-cmd --get-zone-of-interface<span class="token operator">=</span>eth0
拒绝所有包：firewall-cmd --panic-on
取消拒绝状态： firewall-cmd --panic-off
查看是否拒绝： firewall-cmd --query-panic


那怎么开启一个端口呢
添加
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span>    （--permanent永久生效，没有此参数重启后失效）

重新载入
firewall-cmd <span class="token parameter variable">--reload</span>

查看
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span> public --query-port<span class="token operator">=</span><span class="token number">80</span>/tcp

删除
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span> public --remove-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="nginx常用命令" tabindex="-1"><a class="header-anchor" href="#nginx常用命令"><span>Nginx常用命令</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 配置nginx环境变量</span>
<span class="token function">whereis</span> nginx 找到nginx 安装目录
前往跟目录 找到etc文件夹
<span class="token function">vim</span> profile 打开配置文件
添加环境变量（前半段node忽略）
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/node-v14.19.1-linux-x64/bin:/usr/local/nginx/sbin

<span class="token comment"># Nginx常用命令介绍</span>
<span class="token number">1</span>.查看nginx版本号
nginx <span class="token parameter variable">-v</span>
nginx <span class="token parameter variable">-V</span>

<span class="token number">2</span>.启动nginx
	直接执行 nginx 即可

<span class="token number">3</span>.停止nginx
nginx <span class="token parameter variable">-s</span> stop
Stop 是立即停止

nginx <span class="token parameter variable">-s</span> quit
Quit 是一个优雅的关闭方式，Nginx在退出前完成已经接受的请求处理


<span class="token number">4</span>.重载nginx配置文件
	nginx <span class="token parameter variable">-s</span> reload


<span class="token number">5</span>查看nginx进程
	<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx
	<span class="token function">ps</span> <span class="token parameter variable">-ef</span>
		输出标准格式的linux进程命令
<span class="token function">grep</span> nginx
 grep命令 是查找， 是一种强大的文本搜索工具 我们这儿是查找nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>Nginx配置文件</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 如何查找nginx配置文件</span>
nginx <span class="token parameter variable">-t</span>
 nginx <span class="token parameter variable">-t</span> 检查配置文件是否有语法错误


<span class="token comment"># 打开配置文件</span>
<span class="token function">vim</span> nginx.conf

Nginx的主配置文件是nginx.conf，这个配置文件一共由三部分组成，分别为全局块、events块和http块。
在http块中，又包含http全局块、多个server块。
每个server块中，可以包含server全局块和多个location块。在同一配置块中嵌套的配置块，各个之间不存在次序关系


<span class="token number">1</span>.全局块
全局块是默认配置文件从开始到events块之间的一部分内容，主要设置一些影响Nginx服务器整体运行的配置指令，因此，这些指令的作用域是Nginx服务器全局。
  - user <span class="token punctuation">[</span>user<span class="token punctuation">]</span> <span class="token punctuation">[</span>group<span class="token punctuation">]</span>  指定可以运行nginx服务的用户和用户组，只能在全局块配置 user指令在Windows上不生效，如果你制定具体用户和用户组会报警告
  - worker_processes nginx进程数量worker_processes 比如设置为2 nginx将会开启一个master进程和2两个worker进程
  - pid  logs/nginx.pid 存放pid文件
  - error_log  logs/error.log<span class="token punctuation">;</span>  全局错误日志类型 debug info warn error 存放地址

<span class="token number">2</span>.events块
events块涉及的指令主要影响Nginx服务器与用户的网络连接。常用到的设置包括是否开启对多worker process下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型处理连接请求，每个worker process可以同时支持的最大连接数等
  - accept_mutex 默认开启-开启之后nginx 的多个worker将会以串行的方式来处理，只会有一个worker将会被唤起，其他的worker继续睡眠，如果不开启将会造成惊群效应多个worker全部唤起不过只有一个Worker能获取新连接，其它的Worker会重新进入休眠状态
  - worker_connections 单个进程最大连接数（最大连接数<span class="token operator">=</span>连接数+进程数）

<span class="token number">3</span>.http块
http块是Nginx服务器配置中的重要部分，代理、缓存和日志定义等绝大多数的功能和第三方模块的配置都可以放在这个模块中。
  - include指令，用于引入其他的配置文件
  - default_type 如果Web程序没设置，Nginx也没对应文件的扩展名，就用Nginx 里默认的 default_type定义的处理方式。default_type application/octet-stream<span class="token punctuation">;</span> <span class="token comment">#nginx默认文件类型</span>
  - log_format指令，用于定义日志格式，此指令只能在http块中进行配置
  - sendfile 简单来说就是启用sendfile<span class="token punctuation">(</span><span class="token punctuation">)</span>系统调用来替换read<span class="token punctuation">(</span><span class="token punctuation">)</span>和write<span class="token punctuation">(</span><span class="token punctuation">)</span>调用，减少系统上下文切换从而提高性能，当 nginx 是静态文件服务器时，能极大提高nginx的性能表现
  - keepalive_timeout HTTP 有一个 KeepAlive 模式，它告诉 webserver 在处理完一个请求后保持这个 TCP 连接的打开状态。若接收到来自客户端的其它请求，服务端会利用这个未被关闭的连接，而不需要再建立一个连接。
  - <span class="token function">gzip</span> 开启Gzip压缩功能， 可以使网站的css、js 、xml、html 文件在传输时进行压缩，提高访问速度, 进而优化Nginx性能

<span class="token number">4</span>.server块
每一个http块都可以包含多个server块，而每个server块就相当于一台虚拟主机，它内部可有多台主机联合提供服务，一起对外提供在逻辑上关系密切的一组服务
listen指令的配置非常灵活，可以单独制定ip，单独指定端口或者同时指定ip和端口
  - listen <span class="token number">127.0</span>.0.1:8000<span class="token punctuation">;</span>  <span class="token comment">#只监听来自127.0.0.1这个IP，请求8000端口的请求</span>
  - listen <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span> <span class="token comment">#只监听来自127.0.0.1这个IP，请求80端口的请求（不指定端口，默认80）</span>
  - listen <span class="token number">9999</span><span class="token punctuation">;</span> <span class="token comment">#监听来自所有IP，请求9999端口的请求</span>
  - listen *:9999<span class="token punctuation">;</span> <span class="token comment">#和上面效果一样</span>
  - listen localhost:8000<span class="token punctuation">;</span> <span class="token comment">#和第一种效果一致</span>

  - server_name nginx 允许一个虚拟主机有一个或多个名字，也可以使用通配符<span class="token string">&quot;*&quot;</span>来设置虚拟主机的名字  支持 <span class="token function">ip</span> 域名 通配符 正则等
  - server_name  localhost<span class="token punctuation">;</span>


<span class="token number">5</span>.location块
每个server块中可以包含多个location块。在整个Nginx配置文档中起着重要的作用，而且Nginx服务器在许多功能上的灵活性往往在location指令的配置中体现出来

location 指令可以分为以下 <span class="token number">3</span> 类：
  前缀字符串匹配
  正则表达式匹配
  用于内部跳转的命名location
  前缀字符串匹配
  精确匹配 <span class="token operator">=</span>
  前缀匹配 ^~（立刻停止后续的正则搜索）
  按文件中顺序的正则匹配 ~或~*
  匹配不带任何修饰的前缀匹配。
  location root
  root 指定目录的上级目录，并且该上级目录要含有locatoin指定名称的同名目录。

  location /img/ <span class="token punctuation">{</span>
    root /var/www/image<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
若按照这种配置的话，则访问/img/目录下的文件时，nginx会去/var/www/./image/img/目录下找文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#===================全局块开始======================</span>
<span class="token comment">#user  nobody;</span>
<span class="token comment">#工作进程数，一般配置成和cpu数量一致</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#全局错误日志及pid文件存放位置</span>
error_log  logs/error.log<span class="token punctuation">;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>

<span class="token comment">#nginx 启动master进程pid号</span>
<span class="token comment">#pid        logs/nginx.pid;</span>

<span class="token comment">#=================全局块结束============================</span>


<span class="token comment">#==============events块开始======================</span>
events <span class="token punctuation">{</span>
<span class="token comment">#标识单个worker进程的最大并发数</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">#============events块结束============================</span>


<span class="token comment">#============http块开始（nginx服务器中配置最频繁的部分，配置虚拟主机，监听端口，请求转发等等）==========================</span>
http <span class="token punctuation">{</span>
    <span class="token comment">#引入 mime 类型定义文件</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

   <span class="token comment">#设置日志生成格式</span>
    <span class="token comment">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    <span class="token comment">#access_log  logs/access.log  main;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>


  <span class="token comment">#连接的超时时间</span>
    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

   <span class="token comment">#解开注释就是开启gzip压缩</span>
    <span class="token comment">#gzip  on;</span>

    <span class="token comment">#此处配置多台tomcat服务器(名称不能有下划线：webServer）</span>
    upstream webServer<span class="token punctuation">{</span>
        server <span class="token number">127.0</span>.0.1:8081<span class="token punctuation">;</span>
        server <span class="token number">127.0</span>.0.1:8082<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

	<span class="token comment">#此处配置多台tomcat服务器(名称不能有下划线：webs2Server）</span>
    <span class="token comment">#upstream webs2Server{</span>
      <span class="token comment">#server 192.168.30.19:8083;</span>
      <span class="token comment">#server 192.168.32.12:8085;</span>
    <span class="token comment">#}</span>

    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span> <span class="token comment"># 定义当前这个server监听的端口</span>
        server_name  localhost<span class="token punctuation">;</span> <span class="token comment"># 定义使用localhost访问</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        <span class="token comment">#默认请求地址，如果请求是：192.168.10.80:80/  那么会进入这个里面的tomcat反向代理地址</span>
        <span class="token comment">#一个location里面只能有一个proxy_pass</span>
        location / <span class="token punctuation">{</span>
        <span class="token comment">#此处可以配置Tomcat反向代理地址比如：</span>
        <span class="token comment">#此处可以引用上面upstream 的多台tomcat；也可以单独配置一台</span>
        proxy_pass http://127.0.0.1:8081/<span class="token punctuation">;</span> <span class="token comment">#配置单台</span>
        <span class="token comment">#proxy_pass http://webServer/; #引用上面的多台</span>
        <span class="token comment">#引用上面的多台配置</span>
           <span class="token comment"># root   html; #默认的网站根目录的位置</span>
            <span class="token comment">#index  index.html index.htm; #网站的欢迎页,起始页</span>
        <span class="token punctuation">}</span>


        <span class="token comment">#表示如果请求是：192.168.10.80:80/web 那么会进入这个里面的tomcat反向代理地址</span>
        location /web <span class="token punctuation">{</span>
        <span class="token comment">#此处引用上面的配置的多台tomcat</span>
        <span class="token comment">#proxy_pass http://127.0.0.1:8082/;</span>
        <span class="token comment">#proxy_pass http://web2Server/; #引用上面的多台Tomcat配置</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>

        <span class="token comment">#错误提示页面</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    root           html;</span>
        <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
        <span class="token comment">#    fastcgi_index  index.php;</span>
        <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
        <span class="token comment">#    include        fastcgi_params;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
        <span class="token comment"># concurs with nginx&#39;s one</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ /\\.ht {</span>
        <span class="token comment">#    deny  all;</span>
        <span class="token comment">#}</span>
    <span class="token punctuation">}</span>


    <span class="token comment"># another virtual host using mix of IP-, name-, and port-based configuration</span>
    <span class="token comment">#</span>
    <span class="token comment">#server {</span>
    <span class="token comment">#    listen       8000;</span>
    <span class="token comment">#    listen       somename:8080;</span>
    <span class="token comment">#    server_name  somename  alias  another.alias;</span>

    <span class="token comment">#    location / {</span>
    <span class="token comment">#        root   html;</span>
    <span class="token comment">#        index  index.html index.htm;</span>
    <span class="token comment">#    }</span>
    <span class="token comment">#}</span>


    <span class="token comment"># HTTPS server</span>
    <span class="token comment">#</span>
    <span class="token comment">#server {</span>
    <span class="token comment">#    listen       443 ssl;</span>
    <span class="token comment">#    server_name  localhost;</span>

    <span class="token comment">#    ssl_certificate      cert.pem;</span>
    <span class="token comment">#    ssl_certificate_key  cert.key;</span>

    <span class="token comment">#    ssl_session_cache    shared:SSL:1m;</span>
    <span class="token comment">#    ssl_session_timeout  5m;</span>

    <span class="token comment">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span>
    <span class="token comment">#    ssl_prefer_server_ciphers  on;</span>

    <span class="token comment">#    location / {</span>
    <span class="token comment">#        root   html;</span>
    <span class="token comment">#        index  index.html index.htm;</span>
    <span class="token comment">#    }</span>
    <span class="token comment">#}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+`" alt="·"></p></blockquote><h3 id="nginx反向代理" tabindex="-1"><a class="header-anchor" href="#nginx反向代理"><span>Nginx反向代理</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 下载 Nginx 代理项目</span>
http://nginx.org/

可在cmd 中输入命令启动端口服务：nginx


<span class="token comment"># 反向代理中常用命令：</span>
proxy_pass    <span class="token comment"># 该指令用来设置被代理服务器地址，可以是主机名称、IP地址加端口号形式</span>
proxy_set_header	<span class="token comment">#</span>



<span class="token comment"># 案例代理到百度</span>
location / <span class="token punctuation">{</span>
root   html<span class="token punctuation">;</span>
index  index.html index.htm<span class="token punctuation">;</span>
proxy_pass http://www.baidu.com<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment"># 案例：nginx 反向代理解决跨域</span>
<span class="token comment">## 前端代码</span>
 a.onclick <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
   <span class="token builtin class-name">let</span> xhr <span class="token operator">=</span> new XMLHttpRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
   xhr.open<span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span>,<span class="token string">&#39;/api/portal/list&#39;</span><span class="token punctuation">)</span>
   xhr.onreadystatechange <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
     if<span class="token punctuation">(</span>xhr.readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span>  xhr.status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       console.log<span class="token punctuation">(</span>xhr.responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   xhr.send<span class="token punctuation">(</span>null<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

<span class="token comment">## express 服务器代码</span>
 const express <span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
 const app <span class="token operator">=</span> express<span class="token punctuation">(</span><span class="token punctuation">)</span>
 app.get<span class="token punctuation">(</span><span class="token string">&#39;/portal/list&#39;</span>, <span class="token punctuation">(</span>req, res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
     res.json<span class="token punctuation">(</span><span class="token punctuation">{</span> code: <span class="token number">200</span>, message: <span class="token string">&quot;message信息&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
 app.listen<span class="token punctuation">(</span><span class="token number">9000</span>,<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span> console.log<span class="token punctuation">(</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">## nginx 配置代码</span>
 location /api/ <span class="token punctuation">{</span>
   proxy_pass http://localhost:9000/<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>


<span class="token comment"># proxy_set_header</span>
该指令可以更改Nginx服务器接收到的客户端请求的请求头信息，然后将新的请求头发送给代理的服务器
proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
proxy_set_header X-Real-Port <span class="token variable">$remote_port</span><span class="token punctuation">;</span>
proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
三个header分别表示：
 X-Real-IP 客户端或上一级代理ip
 X-Real-Port 客户端或上一级端口
 X-Forwarded-For 包含了客户端和各级代理ip的完整ip链路
			其中X-Real-IP是必需的，后两项选填。
			当只存在一级nginx代理的时候X-Real-IP和X-Forwarded-For是一致的，
			而当存在多级代理的时候，X-Forwarded-For 就变成了如下形式
	<span class="token variable">$remote_addr</span>是前一节点的IP，并不一定是用户的真实IP。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="nginx配置路由跳转404-问题" tabindex="-1"><a class="header-anchor" href="#nginx配置路由跳转404-问题"><span>nginx配置路由跳转404 问题</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Vue histroy 模式 跳转路由404 问题</span>
问题原因：服务器是根据页面路由，去按路径寻找资源的。我们打包好的web站点只有一个html页面，不存在其他资源目录下的html，服务器找不到对应页面所以才报404。
解决方案： try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
	如果给出的file都没有匹配到，则重新请求最后一个参数给定的uri，就是新的location匹配


<span class="token comment"># 常见的变量：</span>
<span class="token variable">$uri</span> 当前请求的 URI，但不含“？”后的参数
<span class="token variable">$args</span> 当前请求的参数，即“？”后的宇符串
<span class="token variable">$arg_xxx</span> 当前请求里的某个参数，“arg ”后是参数的名字
<span class="token variable">$http_xxx</span> 当前请求里的 xxx 头部对应的值
<span class="token variable">$sent_http_xxx</span> 返回给客户端的响应头部对应的值
<span class="token variable">$remote_addr</span> 客户端IP 地址。
<span class="token variable">$http_cookie</span> 获取cookie值
<span class="token variable">$cookie_xxx</span> 当前请求的cookie xxx对应的值
<span class="token variable">$request_uri</span> 浏览器发起的不作任何修改的请求的url中的path 如在www.baidu.com/p1/file?d<span class="token operator">=</span><span class="token number">111</span>, 其值为/p1/file?d<span class="token operator">=</span><span class="token number">111</span>
<span class="token variable">$uri</span> 指当前的请求URI，不包括任何参数，反映任何内部重定向或index模块所做的修改
<span class="token variable">$request_method</span> 请求方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="地址匹配-location" tabindex="-1"><a class="header-anchor" href="#地址匹配-location"><span>地址匹配 location</span></a></h3><p>location 用于定义URL匹配规则，以决定哪些请求会被转发到哪个配置区块进行处理。 它通常与 root 指令配合使用来指定处理这些请求的文件目录。 location 的作用是匹配请求的URI，并不改变该URI。</p><h4 id="nginx-静态文件中-root-和-alias-指令" tabindex="-1"><a class="header-anchor" href="#nginx-静态文件中-root-和-alias-指令"><span>Nginx 静态文件中 root 和 alias 指令</span></a></h4><ol><li><p>root 指令 root 指令用来指定服务器上的一个目录作为请求的根目录，当触发请求时 Nginx 会将请求的 URL 直接附加到这个根目录后面，从而找到对应的文件。</p></li><li><p>alias 指令 alias 指令用来修改匹配到的location路径，实际上改变了请求资源的文件路径。 不同于 root，alias 会替换掉 location 匹配到的部分路径。</p></li><li><p>root 和 alias 区别在于指定路径的处理方式。</p></li></ol><ul><li>root: location 部分会附加到 root 部分的路径上，最终形成路径为 <code>root + location</code></li><li>alias: location 部分将被替换为 alias 部分的路径，最终路径为 <code>alias</code></li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> www.willy.com</span><span class="token punctuation">;</span>

  <span class="token comment"># 用 root 指令处理主页</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /var/www/html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># 用 root 指令处理静态文件</span>
  <span class="token directive"><span class="token keyword">location</span> /static/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /var/www/</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># 用 alias 指令处理图片目录</span>
  <span class="token directive"><span class="token keyword">location</span> /images/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">alias</span> /var/www/images/</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 说明</span>
<span class="token comment">## 1. 主页处理：当访问 \`http://www.willy.com/\` 时，Nginx 会匹配到第一个 location 块。由于配置 \`root /var/www/html;\`，Nginx 会在 \`/var/www/html/\` 目录下查找 \`index.html\` 文件来响应这个请求。</span>
<span class="token comment">## 2. 静态文件: 当访问 \`http://www.willy.com/static/example.png\` 会在 \`/var/www/\` 位置寻找 \`example.png\` 文件。</span>
<span class="token comment">## 3. 图片处理：当访问 \`http://www.willy.com/image/logo.png\` 时，Nginx 匹配到第二个 location 块。通过配置 \`alias /var/www/images/;\`，Nginx 会在 \`/var/www/images/\` 目录下查找 \`logo.png\` 图片文件 (\`/images/URI\` 被替换成了文件系统上的路径 \`/var/www/images/\`)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重定向-rewrite" tabindex="-1"><a class="header-anchor" href="#重定向-rewrite"><span>重定向 rewrite</span></a></h3><p>rewrite 模块负责静态重写，它允许使用正则表达式改变 URI，并根据变量来重定向以及选择配置。 语法: <code>rewrite patten replace flag</code></p><ul><li>patten 是正则表达式，与 patten 匹配的 URL 都会被改写成 replace，</li><li>flag 可选，有如下标志: <ul><li><code>last</code> — 完成 rewrite，然后搜索相应的 URI 和位置。</li><li><code>break</code> — 中止 <code>rewrite</code>，不再匹配后面的规则</li><li><code>redirect</code> — 返回 code 为 302 的临时重定向</li><li><code>permanent</code> — 返回 code 为 301 的永久重定向 注意:</li></ul></li><li>当使用 rewrite 时，务必注意不要创建循环重定向，这会导致浏览器显示错误。</li><li>在配置重定向时，需考虑 SEO (搜索引擎优化) 影响，特别是 301 重定向的使用。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 临时重定向 <span class="token punctuation">(</span><span class="token number">302</span><span class="token punctuation">)</span>
server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name example.com<span class="token punctuation">;</span>

  location /oldpage <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> <span class="token number">302</span> /newpage<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token number">2</span>. 永久重定向 <span class="token punctuation">(</span><span class="token number">301</span><span class="token punctuation">)</span>
server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name example.com<span class="token punctuation">;</span>

  location /oldpage <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> <span class="token number">301</span> /newpage<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token number">3</span>. 强制使用 Https
server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name example.com<span class="token punctuation">;</span>

  location /oldpage <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> <span class="token number">302</span> https://example.com<span class="token variable">$request_uri</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token number">4</span>. 非 www 到 www
server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name example.com<span class="token punctuation">;</span>

  location /oldpage <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> <span class="token number">302</span> https://www.example.com<span class="token variable">$request_uri</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token number">5</span>. www 到非 www
server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name www.example.com<span class="token punctuation">;</span>

  location /oldpage <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> <span class="token number">302</span> https://example.com<span class="token variable">$request_uri</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token number">6</span>. 使用 rewrite 重定向
server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name example.com<span class="token punctuation">;</span>
  rewrite ^/oldpage$ /newpage permanent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置旧域名重定向到新域名" tabindex="-1"><a class="header-anchor" href="#配置旧域名重定向到新域名"><span>配置旧域名重定向到新域名</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 将旧域名重定向到新域名上:
server <span class="token punctuation">{</span>
  listen <span class="token number">443</span> ssl<span class="token punctuation">;</span>
  server_name old.com<span class="token punctuation">;</span>
  rewrite .* https://new.com<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token number">2</span>. 跳转到新域名上时要保留路径
server <span class="token punctuation">{</span>
  listen <span class="token number">443</span> ssl<span class="token punctuation">;</span>
  server_name old.domain.com<span class="token punctuation">;</span>
  rewrite ^/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ https://new.domain.com/<span class="token variable">$1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token number">3</span>. 如果域名不是 <span class="token variable"><span class="token variable">\`</span>www.new.domain.com<span class="token variable">\`</span></span>，旧统一跳转到 <span class="token variable"><span class="token variable">\`</span>https://www.new.domain.com<span class="token variable">\`</span></span>
server <span class="token punctuation">{</span>
  listen <span class="token number">443</span> ssl<span class="token punctuation">;</span>
  server_name old.domain.com new.domain.com example.com www.example.com<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$host</span> <span class="token operator">!=</span> <span class="token string">&#39;www.new.domain.com&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rewrite ^/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ https://new.domain.com/<span class="token variable">$1</span> permanent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token number">4</span>. rewrite 与 location 配合实现图片文件跳转 CDN:
server <span class="token punctuation">{</span>
  location ~ .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
    expires 30d<span class="token punctuation">;</span>
    rewrite ^/uploadfile<span class="token punctuation">\\</span>/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ https://cdn.new.domain.com/uploadfile/<span class="token variable">$1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>参考文献：
<span class="token number">1</span>. 入门概念：https://zhuanlan.zhihu.com/p/187505981
<span class="token number">2</span>. 官网API文档：https://docs.docker.com/reference/cli/docker/


<span class="token function">docker</span> 常用场景
- 部署Web应用: Nginx、NodeJS、Python Flask 等
- 数据库容器化: MySQL、Redis、MongoDB
- 微服务架构: 通过 Docker Compose 编排多个服务

常见问题
- 权限问题：Linux 需要 <span class="token function">sudo</span> 或将用户加入 <span class="token function">docker</span> 组。
- 端口冲突：检查宿主机端口是否被占用。
- 镜像加速：国内可使用阿里云或中科大镜像源。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h3><h4 id="虚拟机-vs-容器" tabindex="-1"><a class="header-anchor" href="#虚拟机-vs-容器"><span>虚拟机 VS 容器</span></a></h4><p>正常的操作系统运行是需要占用很多资源的，假设一台机器有16G内存，需要部署三个应用，则虚拟机技术划分：</p><p><img src="`+c+'" alt="img"></p><p>在这台机器上开启三个虚拟机，每个虚拟机上部署一个应用，其中VM1占用2G内存，VM2占用1G内存，VM3占用4G内存。</p><p>虚拟机本身总共就占据7G内存，因而没法划分更多虚拟机内存来部署其他应用程序，可我们需求本身是部署应用程序而不是操作系统。</p><p>容器技术则可以避免我们把内存浪费在“冗余”的操作系统上，并且可以优化了操作系统的启动和加载时间问题。</p><p>容器英译为 container（集装箱），语义为：集装箱(容器)之间相互隔离，可长期反复利用，快速装载和卸载，规格标准。</p><p>在软件开发中的隔离是指应用程序在运行时相互独立互不干扰：</p><ul><li>虚拟机技术：通过将应用程序部署在不同的虚拟机中，从而实现隔离（但每个虚拟机本身会占用多余内存）</li><li>容器技术：只隔离应用程序运行时环境，但容器之间可以共享同一个操作系统，这里的运行时环境指程序运行依赖的各种库以及配置。</li></ul><p>容器轻量级且占用资源更少：</p><ul><li>空间：与操作系统的运行内存占用相比，容器只需数M空间，因此在同样规格的硬件上大量部署容器，这是虚拟机所不能比拟的；</li><li>时间：操作系统需要数分钟的启动时间，容器几乎瞬时启动，容器技术为打包服务栈提供了一种更加高效的方式。</li></ul><p><img src="'+p+`" alt="image-20241123105916251"></p><h4 id="docker概述" tabindex="-1"><a class="header-anchor" href="#docker概述"><span>Docker概述</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> 是 Go 语言实现的开源项目，可让我们方便创建和使用容器。
<span class="token function">docker</span> 将程序以及程序所有的依赖都打包到 <span class="token function">docker</span> container，这样你的程序在任何环境下都有一致的行为表现。

<span class="token function">docker</span> 可屏蔽运行环境差异：这里程序运行的依赖就是容器<span class="token punctuation">(</span>集装箱<span class="token punctuation">)</span>，容器所处的操作系统环境<span class="token punctuation">(</span>载体：货船/港口<span class="token punctuation">)</span>，程序的表现只和容器<span class="token punctuation">(</span>集装箱<span class="token punctuation">)</span>有关，和容器在哪个操作系统<span class="token punctuation">(</span>货船/港口<span class="token punctuation">)</span>无关。
<span class="token function">docker</span> 可快速部署：容器的启动速度非常快速，只要确保一个容器中的程序正确运行，就能确定无论在生产环境部署多少都能正确运行。



<span class="token comment">### 如何使用 docker？</span>
<span class="token function">docker</span> 中存在的概念：
	- 容器（Container）：轻量化的独立运行环境，包含应用及其依赖。运行起来的进程
	- 镜像（Image）：容器的静态模板，通过镜像创建容器。dockerfile执行后的编译结果，可执行程序
	- dockerfile：定义镜像构建步骤的配置文件，是image镜像的源代码
	- 仓库（Registry）：存储镜像的地方（如 Docker Hub）

<span class="token number">1</span>. 先在 dockerfile 中设定配置项：指定需要哪些程序、什么样的依赖；
<span class="token number">2</span>. 然后把 dockerfile 交给编译器进行编译（<span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> build<span class="token variable">\`</span></span>命令），生成的可执行程序就是 image；
<span class="token number">3</span>. 最后运行这个 image（<span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> run<span class="token variable">\`</span></span>命令），image 运行起来就是 container。



<span class="token comment">### docker 如何工作？</span>
Docker 基于 CS（Client-Server）架构模式来工作。 Docker 的架构体系中包含了 Docker 客户端（Docker Client）与 Docker 守护进程（Docker Daemon）这两个核心组件。
<span class="token function">docker</span> client 负责处理用户输入的各种命令，如<span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> build<span class="token variable">\`</span></span>、<span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> run<span class="token variable">\`</span></span>，而真正工作的是 <span class="token function">docker</span> demon。
注意：docker client 和 <span class="token function">docker</span> daemon 可运行在同一台机器上。

<span class="token number">0</span>. dockerfile
这是一个用于定义如何构建 Docker 镜像的文本文件，其中包含了基础镜像、安装软件包、配置环境等诸多构建镜像所需的指令。


<span class="token number">1</span>. <span class="token function">docker</span> build
当编写完 dockerfile 交给 <span class="token function">docker</span> 编译时使用这个命令，client 在接收到请求后转发给 <span class="token function">docker</span> daemon，接着 <span class="token function">docker</span> demon 根据 dockerfile （依据 dockerfile 逐步完成如获取基础镜像、安装指定软件包、进行环境配置等）创建可执行程序 的镜像 image。


<span class="token number">2</span>. <span class="token function">docker</span> run
使用 <span class="token function">docker</span> run 后，docker daemon 接收到该命令后（依据命令中指定的镜像名称或标识等信息）找到具体的 image，然后加载到内存开始执行，image 执行起来就成为一个 container。


<span class="token number">3</span>. <span class="token function">docker</span> pull
Docker Registry 可用来存放各种 image，公共的可以供任何人下载 image 的仓库就是 Docker Hub。
Docker Hub 是 <span class="token function">docker</span> 官方应用商店，可通过 <span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> pull imageName<span class="token variable">\`</span></span> 命令来下载别人编写好并共享出来的 image，这样就无需自己从头编写 dockerfile 了。
<span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> pull<span class="token variable">\`</span></span> 命令是用户通过 <span class="token function">docker</span> client 发送命令，docker daemon 接收到命令后向 <span class="token function">docker</span> registry 发送 image 下载请求，下载后存放在本地，这样就可以使用 image 了。



<span class="token comment">### docker 底层实现</span>
<span class="token function">docker</span> 基于 Linux 内核提供以下功能实现：
<span class="token number">1</span>. NameSpace
Linux 中的 PID、IPC、网络等资源是全局的，而 NameSpace 机制是一种资源隔离方案，在该机制下这些资源不再是全局，而是属于某个特定的 NameSpace，各个 NameSpace 下的资源互不干扰，就使得每个 NameSpace 看上去就像一个独立的操作系统一样。

<span class="token number">2</span>. Control <span class="token function">groups</span>
虽然 NameSpace 技术可以实现资源隔离，但进程还是可以不受控地访问系统资源，比如 CPU、内存、磁盘、网络等，为了控制容器中进行对资源的访问，Docker 采用 control <span class="token function">groups</span> 技术<span class="token punctuation">(</span>cgroup<span class="token punctuation">)</span>，有了 cpgroup 就可以控制容器中进程对系统资源的消耗，比如可以限制某个容器使用内存的上限、可以在哪些 CPU 上运行等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="image-20241125150207185"></p><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 移除旧版本docker</span>
<span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
	docker-client <span class="token punctuation">\\</span>
	docker-client-latest <span class="token punctuation">\\</span>
	docker-common <span class="token punctuation">\\</span>
	docker-latest <span class="token punctuation">\\</span>
	docker-latest-logrotate <span class="token punctuation">\\</span>
	docker-logrotate <span class="token punctuation">\\</span>
	docker-engine


<span class="token comment"># 配置docker yum源。</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
<span class="token function">sudo</span> yum-config-manager <span class="token punctuation">\\</span>
--add-repo <span class="token punctuation">\\</span>
http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo


<span class="token comment"># 安装 最新 docker</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce docker-ce-cli containerd,io docker-buildx-plugin docker-comp


<span class="token comment"># 启动 docker</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span> <span class="token parameter variable">--now</span>


<span class="token comment"># 配置国内镜像源加速，然后重启 docker</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span>&#39;EOF<span class="token string">&quot;
{
	&quot;</span>registry-mirrors<span class="token string">&quot;: [&quot;</span>https://mirror.ccs.tencentyun.com&quot;<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
EOF
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像操作" tabindex="-1"><a class="header-anchor" href="#镜像操作"><span>镜像操作</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 拉取镜像（从仓库下载）
$ <span class="token function">docker</span> pull ubuntu:20.04

<span class="token number">2</span>. 查看本地镜像
$ <span class="token function">docker</span> images

<span class="token number">3</span>. 删除镜像
$ <span class="token function">docker</span> rmi <span class="token operator">&lt;</span>镜像ID<span class="token operator">&gt;</span>


镜像集合官网：https://hub.docker.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt="image-20241123113826696"></p><h4 id="用-dockerfile-构建镜像" tabindex="-1"><a class="header-anchor" href="#用-dockerfile-构建镜像"><span>用 Dockerfile 构建镜像</span></a></h4><ol><li><p>创建 <code>Dockerfile</code>：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token comment"># 基础镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> ubuntu:20.04</span>
<span class="token comment"># 安装依赖</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y python3</span>
<span class="token comment"># 复制文件到镜像</span>
<span class="token instruction"><span class="token keyword">COPY</span> app.py /app/</span>
<span class="token comment"># 设置工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token comment"># 启动命令</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;python3&quot;</span>, <span class="token string">&quot;app.py&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>构建镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> my-python-app <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>运行容器：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run my-python-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h4 id="分享镜像" tabindex="-1"><a class="header-anchor" href="#分享镜像"><span>分享镜像</span></a></h4><p><img src="`+d+'" alt="image-20250107231715345"></p><p><img src="'+v+`" alt="image-20250107231750938"></p><h3 id="容器操作" tabindex="-1"><a class="header-anchor" href="#容器操作"><span>容器操作</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 启动新容器
$ <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> my_container ubuntu:20.04 /bin/bash
	- <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">-it</span><span class="token variable">\`</span></span>：交互式终端
	- <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--name</span><span class="token variable">\`</span></span>： 指定容器名称

<span class="token number">2</span>. 查看运行中的容器
$ <span class="token function">docker</span> <span class="token function">ps</span>

<span class="token number">3</span>. 查看所有容器（包括已停止的）
$ <span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>

<span class="token number">4</span>. 启动/停止容器
$ <span class="token function">docker</span> start <span class="token operator">&lt;</span>容器ID<span class="token operator">&gt;</span>
$ <span class="token function">docker</span> stop <span class="token operator">&lt;</span>容器ID<span class="token operator">&gt;</span>

<span class="token number">5</span>. 进入运行中的容器
$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>容器ID<span class="token operator">&gt;</span> /bin/bash

<span class="token number">6</span>. 删除容器
$ <span class="token function">docker</span> <span class="token function">rm</span> <span class="token operator">&lt;</span>容器ID<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+'" alt="image-20250107231849187"></p><p><img src="'+m+`" alt="image-20241123114407420"></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 容器运行模式：前台/后台运行
		- <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">-d</span><span class="token variable">\`</span></span> 或 <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--detach</span><span class="token variable">\`</span></span>：以守护进程模式运行容器，即容器在后台运行。
		- <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">-it</span><span class="token variable">\`</span></span>：分配交互式终端（组合使用 <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">-i</span><span class="token variable">\`</span></span>保持标准输入打开、<span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">-t</span><span class="token variable">\`</span></span>分配一个伪终端，用于交互式运行容器，例如进入容器的命令行）


<span class="token number">2</span>. 资源限制
- CPU：
		- <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--cpus</span><span class="token operator">=</span><span class="token operator">&lt;</span>value<span class="token operator">&gt;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 限制容器使用的 CPU 核心数（如 <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--cpus</span><span class="token operator">=</span><span class="token number">1.5</span><span class="token variable">\`</span></span>）
    - <span class="token variable"><span class="token variable">\`</span>--cpu-shares<span class="token operator">=</span><span class="token operator">&lt;</span>value<span class="token operator">&gt;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 设置 CPU 权重（默认 <span class="token number">1024</span>，相对比例）
- 内存：
		- <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">-m</span><span class="token variable">\`</span></span> 或 <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--memory</span><span class="token operator">=</span><span class="token operator">&lt;</span>value<span class="token operator">&gt;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 限制内存（如 <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">-m</span> 512m<span class="token variable">\`</span></span>）
		- <span class="token variable"><span class="token variable">\`</span>--memory-swap<span class="token operator">=</span><span class="token operator">&lt;</span>value<span class="token operator">&gt;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 内存 + Swap 的总限制


<span class="token number">5</span>. 环境变量设置: <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">-e</span> <span class="token assign-left variable">KEY</span><span class="token operator">=</span>VALUE<span class="token variable">\`</span></span> 或 <span class="token variable"><span class="token variable">\`</span>--env-file<span class="token operator">=</span><span class="token operator">&lt;</span>file<span class="token operator">&gt;</span><span class="token variable">\`</span></span>
		- 为容器设置环境变量或从文件读取
		- <span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> run <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token parameter variable">-d</span> mysql<span class="token variable">\`</span></span>


<span class="token number">6</span>. 容器命名与标识
<span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token operator">&lt;</span>name<span class="token operator">&gt;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 为容器指定唯一名称。
<span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--hostname</span><span class="token operator">=</span><span class="token operator">&lt;</span>name<span class="token operator">&gt;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 设置容器内部的主机名。

<span class="token number">7</span> 用户与权限
<span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">-u</span><span class="token variable">\`</span></span> 或 <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--user</span><span class="token operator">=</span><span class="token operator">&lt;</span>user<span class="token punctuation">[</span>:group<span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 指定运行用户（如 <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">-u</span> <span class="token number">1000</span>:1000<span class="token variable">\`</span></span>）。
<span class="token variable"><span class="token variable">\`</span>--cap-add/--cap-drop<span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 添加或删除 Linux 权能（增强安全性）。

<span class="token number">8</span> 命令覆盖
<span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span>: 覆盖镜像中的 CMD 指令。
<span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--entrypoint</span><span class="token operator">=</span><span class="token string">&quot;&lt;command&gt;&quot;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 覆盖镜像的 ENTRYPOINT。

<span class="token number">9</span> 自动重启策略
<span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--restart</span><span class="token operator">=</span><span class="token operator">&lt;</span>policy<span class="token operator">&gt;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span>
	no（默认）: 不重启。
	on-failure<span class="token punctuation">[</span>:max-retries<span class="token punctuation">]</span>: 非零退出时重启。
	always: 总是重启。
	unless-stopped: 除非手动停止。

<span class="token number">10</span> 健康检查
<span class="token variable"><span class="token variable">\`</span>--health-cmd<span class="token operator">=</span><span class="token operator">&lt;</span>command<span class="token operator">&gt;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 定义健康检查命令。
<span class="token variable"><span class="token variable">\`</span>--health-interval<span class="token operator">=</span><span class="token operator">&lt;</span>duration<span class="token operator">&gt;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 检查间隔（如 5s）。

<span class="token number">11</span> 日志管理
<span class="token variable"><span class="token variable">\`</span>--log-driver<span class="token operator">=</span><span class="token operator">&lt;</span>driver<span class="token operator">&gt;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 指定日志驱动（如 json-file、syslog）。
<span class="token variable"><span class="token variable">\`</span>--log-opt<span class="token operator">=</span><span class="token operator">&lt;</span>option<span class="token operator">&gt;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 日志选项（如 --log-opt max-size<span class="token operator">=</span>10m）。

<span class="token number">12</span> 安全设置
<span class="token variable"><span class="token variable">\`</span>--read-only<span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 容器文件系统只读（需配合 <span class="token parameter variable">--tmpfs</span> 使用可写临时目录）。
<span class="token variable"><span class="token variable">\`</span>--security-opt<span class="token operator">=</span><span class="token operator">&lt;</span>options<span class="token operator">&gt;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 配置 SELinux 或 AppArmor。

<span class="token number">13</span> 其他实用选项
<span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--rm</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 容器退出后自动删除（不可与 <span class="token parameter variable">--restart</span> 共用）。
<span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--expose</span><span class="token operator">=</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 暴露容器端口（不映射到主机）。
<span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">-e</span> <span class="token string">&quot;VAR=value&quot;</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 设置环境变量。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> my-mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /host/mysql-data:/var/lib/mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> mysql:8.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>--name my-mysql：为容器指定名称为 my-mysql。</li><li>-e MYSQL_ROOT_PASSWORD=root：设置 MySQL 的 root 用户密码为 root。</li><li>-p 3306:3306：将容器的 3306 端口映射到宿主机的 3306 端口。</li><li>-v /host/mysql-data:/var/lib/mysql：将宿主机的 /host/mysql-data 目录挂载到容器的 /var/lib/mysql 目录，用于持久化存储 MySQL 数据。</li><li>-d：以守护进程模式运行容器。</li><li>mysql:8.0：使用 MySQL 8.0 版本的镜像。</li></ul><h3 id="网络配置" tabindex="-1"><a class="header-anchor" href="#网络配置"><span>网络配置</span></a></h3><h5 id="端口映射" tabindex="-1"><a class="header-anchor" href="#端口映射"><span>端口映射</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>每一个正常启动的容器都是独立的容器（都拥有自己的文件系统），是在内部容器中启动的，所以需要使用容器映射


端口映射：<span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">-p</span><span class="token variable">\`</span></span> 或 <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--publish</span><span class="token variable">\`</span></span>
- 将容器内部的端口映射到宿主机的端口。
- 格式: <span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>宿主机 IP 地址:<span class="token punctuation">]</span>宿主机端口:容器端口 <span class="token punctuation">[</span>其他选项<span class="token punctuation">]</span> 镜像名 <span class="token punctuation">[</span>容器内执行的命令<span class="token punctuation">]</span><span class="token variable">\`</span></span>
- 如 <span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 <span class="token parameter variable">-d</span> nginx<span class="token variable">\`</span></span> 将容器的 <span class="token number">80</span> 端口映射到宿主机的 <span class="token number">8080</span> 端口



注意：
<span class="token number">1</span>. 端口冲突：宿主机端口和容器端口不能重复使用
宿主机上用于映射的端口必须是空闲的，否则会导致端口映射失败，容器无法正常启动。在映射端口前，要确保所选的宿主机端口未被其他服务占用。

<span class="token number">2</span>. 安全性：
端口映射会将容器内的服务暴露到宿主机网络中，因此需要谨慎选择要映射的端口，避免将敏感服务端口直接暴露给外部网络。可以结合防火墙等安全措施来增强安全性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+`" alt="image-20250107223017902"></p><h5 id="网络模式" tabindex="-1"><a class="header-anchor" href="#网络模式"><span>网络模式</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>指定网络模式: <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--network</span><span class="token operator">=</span><span class="token operator">&lt;</span>mode<span class="token operator">&gt;</span><span class="token variable">\`</span></span>（mode 有 bridge、host、none 或自定义网络）


<span class="token comment">### 自定义网络</span>
优势：
	- 容器间通信便利：在自定义网络中，容器可以通过容器名直接进行通信，无需知道对方 IP 地址
	- 网络隔离：不同的自定义网络相互隔离，增强了容器的安全性和独立性
	- 灵活配置：可根据需求自定义网络的参数，如子网、网关等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 创建 bridge 类型的自定义网络（\`--driver bridge\` 指定网络驱动为 bridge）</span>
$ <span class="token function">docker</span> network create <span class="token parameter variable">--driver</span> bridge my-custom-network


<span class="token comment"># 查看网络列表</span>
$ <span class="token function">docker</span> network <span class="token function">ls</span>


<span class="token comment"># 查看自定义网络的详细信息（输出结果包含网络的各种配置信息，如子网、网关）</span>
$ <span class="token function">docker</span> network inspect my-custom-network


<span class="token comment"># 运行容器并指定网络（启动名为 container1 和 container2 的Nginx容器，并将它们连接到 my-custom-network 网络中）</span>
$ <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> container1 <span class="token parameter variable">--network</span> my-custom-network nginx
$ <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> container2 <span class="token parameter variable">--network</span> my-custom-network nginx


<span class="token comment"># 容器间通信（测试连通性）</span>
$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> container1 <span class="token function">ping</span> container2


<span class="token comment"># 删除自定义网络</span>
$ <span class="token function">docker</span> network <span class="token function">rm</span> my-custom-network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据存储" tabindex="-1"><a class="header-anchor" href="#数据存储"><span>数据存储</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>挂载卷
- <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">-v</span><span class="token variable">\`</span></span> 或 <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--volume</span><span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 将宿主机的目录或文件挂载到容器内部，实现数据的持久化和共享。格式为 <span class="token variable"><span class="token variable">\`</span>宿主机路径:容器路径<span class="token variable">\`</span></span>（如 <span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> run <span class="token parameter variable">-v</span> /host/data:/container/data <span class="token parameter variable">-d</span> ubuntu<span class="token variable">\`</span></span>）
- <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">-mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind<span class="token operator">|</span>volume<span class="token operator">|</span>tmpfs<span class="token variable">\`</span></span><span class="token builtin class-name">:</span> 更灵活的挂载方式


挂载临时内存文件系统：<span class="token variable"><span class="token variable">\`</span><span class="token assign-left variable">tmpfs</span><span class="token operator">=</span>/path<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="目录挂载-bind-mount" tabindex="-1"><a class="header-anchor" href="#目录挂载-bind-mount"><span>目录挂载（Bind Mount）</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 查看所有容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span>


<span class="token comment">## 批量删除所有容器（强制删除，因为可能存在有些容器还在运行中）</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>


删除原来的容器后，用相同的命令创建新的容器数据会存在丢失。
    容器只要一启动，相当于启动自己的空间和文件系统。
    容器一旦销毁，它的文件系统里所有的内容都会被销毁。
    因而会产生数据丢失问题
目录挂载是将外部容器挂载到内部容器。
		启动一个目录挂载，相当于插U盘，电脑一插上就会显示U盘里的内容，U盘移除则内容也会丢失。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 将主机的 /host/data 挂载到容器的 /container/data</span>
<span class="token function">docker</span> run <span class="token parameter variable">-v</span> /host/data:/container/data my_image

<span class="token comment"># 或使用 --mount 语法（更明确的参数）</span>
<span class="token function">docker</span> run <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>/host/data,target<span class="token operator">=</span>/container/data my_image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+'" alt="image-20250107235829915"></p><p><img src="'+g+'" alt="image-20250108001459557"></p><p>外部修改容器，内部可以发生变化</p><p><img src="'+h+`" alt="image-20250108001943241"></p><h5 id="卷映射-volume-mount" tabindex="-1"><a class="header-anchor" href="#卷映射-volume-mount"><span>卷映射（Volume Mount）</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 挂载本地目录到容器：
$ <span class="token function">docker</span> run <span class="token parameter variable">-v</span> /宿主机路径:/容器路径 ubuntu

<span class="token number">2</span>. 创建匿名卷：
$ <span class="token function">docker</span> run <span class="token parameter variable">-v</span> /容器路径 ubuntu


<span class="token comment">### 查看 ngconf 所在位置</span>
<span class="token function">docker</span> volume <span class="token function">ls</span>
<span class="token function">docker</span> volume inspect ngconf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 使用自动创建的匿名卷（匿名卷随容器删除）</span>
<span class="token function">docker</span> run <span class="token parameter variable">-v</span> /container/data my_image

<span class="token comment"># 使用具名卷（推荐生产环境）</span>
<span class="token function">docker</span> volume create my_volume
<span class="token function">docker</span> run <span class="token parameter variable">-v</span> my_volume:/container/data my_image

<span class="token comment"># 或使用 --mount 语法</span>
<span class="token function">docker</span> run <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>volume,source<span class="token operator">=</span>my_volume,target<span class="token operator">=</span>/container/data my_image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+x+'" alt="image-20250108204002479"></p><p><img src="'+f+`" alt="image-20250108213227603"></p><h5 id="目录挂载跟卷映射的区别" tabindex="-1"><a class="header-anchor" href="#目录挂载跟卷映射的区别"><span>目录挂载跟卷映射的区别</span></a></h5><table><thead><tr><th style="text-align:left;"><strong>特性</strong></th><th style="text-align:left;"><strong>目录挂载（Bind Mount）</strong></th><th style="text-align:left;"><strong>卷映射（Volume Mount）</strong></th></tr></thead><tbody><tr><td style="text-align:left;"><strong>定义</strong></td><td style="text-align:left;">将主机上的<strong>具体目录或文件</strong>直接挂载到容器中。</td><td style="text-align:left;">使用 Docker <strong>管理的存储卷</strong>挂载到容器中。</td></tr><tr><td style="text-align:left;"><strong>数据存储位置</strong></td><td style="text-align:left;">主机的<strong>任意路径</strong>（如 <code>/home/user/data</code>）。</td><td style="text-align:left;">Docker 管理的存储区域（默认在 <code>/var/lib/docker/volumes/</code>）。</td></tr><tr><td style="text-align:left;"><strong>生命周期</strong></td><td style="text-align:left;">与主机目录绑定，<strong>依赖主机文件系统</strong>。</td><td style="text-align:left;"><strong>独立于容器</strong>，由 Docker 管理，可手动或自动清理。</td></tr><tr><td style="text-align:left;"><strong>创建方式</strong></td><td style="text-align:left;">直接指定主机路径（无需预先创建）。</td><td style="text-align:left;">需先通过 <code>docker volume create</code> 创建，或由 Docker 自动生成。</td></tr><tr><td style="text-align:left;"><strong>适用性</strong></td><td style="text-align:left;">灵活直接，适合开发调试或需与主机深度交互（挂载配置文件）</td><td style="text-align:left;">安全可控，适合生产环境或需 Docker 托管数据（卷存储数据）</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 数据管理
目录挂载
	- 直接绑定主机目录，容器内的修改会实时反映到主机目录，反之亦然。
	- 适用场景：开发调试时挂载代码目录（如将本地的 /app/src 挂载到容器的 /user/src/app），方便实时同步修改。
	- 风险：若容器意外修改或删除主机目录内容，可能导致主机数据损坏。
卷映射
	- Docker托管存储：数据存储在 Docker 的专用区域，与主机文件系统隔离。
	- 适用场景：生产环境数据持久化（如数据库文件、日志），跨容器共享数据。
	- 安全优势：通过 Docker 控制权限，避免直接操作主机敏感目录。


<span class="token number">2</span>. 权限与所有权
目录挂载
	- 容器内进程的权限与主机目录的权限直接关联。
	- 若容器用户与主机用户权限不匹配，可能导致读写失败（需通过 <span class="token parameter variable">-u</span> 指定用户或调整主机目录权限）。
卷映射
	- Docker自动处理卷的权限，默认以容器内用户权限访问。
	- 可通过 <span class="token function">docker</span> volume create 时指定驱动选项（如 <span class="token parameter variable">--opt</span> <span class="token assign-left variable">o</span><span class="token operator">=</span>uid<span class="token operator">=</span><span class="token number">1000</span>）定制权限。


<span class="token number">3</span>. 性能
目录挂载
	- 直接依赖主机文件系统性能（如磁盘 I/O）。
	- 在 macOS/Windows 的 Docker Desktop 中，由于虚拟化层，性能可能较差。
卷映射
	- 部分存储驱动（如 overlay2）对卷有优化，性能更高。
	- 在跨平台环境中表现更稳定。


<span class="token number">4</span> 备份与迁移
目录挂载
	- 直接备份主机目录即可，但需注意路径依赖（迁移时需确保主机路径一致）。
卷映射
	- 迁移时只需复制卷数据，与主机路径无关。
	- 支持通过 <span class="token function">docker</span> volume 命令备份（如 <span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-v</span> volume_name:/data <span class="token parameter variable">-v</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>:/backup alpine <span class="token function">tar</span> cvf /backup/volume.tar /data）。


<span class="token number">5</span>. 注意事项
- 目录挂载的路径必须存在，否则 Docker 会将其视为目录并自动创建（可能会导致权限问题）
- 卷映射的匿名卷会在容器删除时遗留，需定期清理（docker volume prune）
- 在 Kubernetes 等编排工具中，通常使用 PersistentVolume<span class="token punctuation">(</span>PV<span class="token punctuation">)</span> 和 PersistentVolumeClaim<span class="token punctuation">(</span>PVC<span class="token punctuation">)</span> 替代 Docker 卷
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;"><strong>场景</strong></th><th style="text-align:left;"><strong>推荐方式</strong></th><th style="text-align:left;"><strong>理由</strong></th></tr></thead><tbody><tr><td style="text-align:left;"><strong>开发环境代码热更新</strong></td><td style="text-align:left;">目录挂载</td><td style="text-align:left;">实时同步代码修改，无需重建镜像。</td></tr><tr><td style="text-align:left;"><strong>生产环境数据库存储</strong></td><td style="text-align:left;">卷映射</td><td style="text-align:left;">数据独立管理，避免主机路径依赖，支持备份和迁移。</td></tr><tr><td style="text-align:left;"><strong>跨容器共享数据</strong></td><td style="text-align:left;">卷映射</td><td style="text-align:left;">多个容器可挂载同一卷，实现数据共享（如 Nginx 与 App 共享静态资源）。</td></tr><tr><td style="text-align:left;"><strong>敏感配置文件</strong></td><td style="text-align:left;">目录挂载（只读）</td><td style="text-align:left;">挂载主机配置文件到容器（如 <code>-v /etc/config:/app/config:ro</code>），防止误修改。</td></tr></tbody></table><h3 id="多容器编排-docker-compose" tabindex="-1"><a class="header-anchor" href="#多容器编排-docker-compose"><span>多容器编排 Docker Compose</span></a></h3><ol><li><p>安装 Docker Compose：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Linux</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编写 <code>docker-compose.yml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动服务：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语"><span>结语</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token number">16</span>.网络-Redis主从集群
<span class="token number">17</span>.最佳实践
<span class="token number">18</span>.Docker Compose-安装wordpress
<span class="token number">19</span>.Docker Compose-语法
<span class="token number">20</span>.Docker Compose-其他
<span class="token number">21</span>.Dockerfile-制作镜像
<span class="token number">22</span>.Dockerfile-镜像分层机制
<span class="token number">23</span>.超酷 --键启动所有中间件
<span class="token number">24</span>.超酷-访问测试全部通过
<span class="token number">25</span>.销毁实例
<span class="token number">26</span>.结束语
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,106),_=[y];function q(D,$){return s(),a("div",null,_)}const N=n(w,[["render",q],["__file","Linux.html.vue"]]),S=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF%E5%9F%BA%E7%A1%80/Linux.html","title":"","lang":"zh-CN","frontmatter":{"Author":"willysliang","CreateTime":"2024-04-11T19:52:12.000Z","Modifier":"willysliang","ModifiedTime":"2024-05-24T17:21:21.000Z","Description":"Linux"},"headers":[{"level":2,"title":"Bash","slug":"bash","link":"#bash","children":[]},{"level":2,"title":"Linux","slug":"linux","link":"#linux","children":[{"level":3,"title":"下载文件","slug":"下载文件","link":"#下载文件","children":[]},{"level":3,"title":"移动命令mv","slug":"移动命令mv","link":"#移动命令mv","children":[]},{"level":3,"title":"删除文件：rm","slug":"删除文件-rm","link":"#删除文件-rm","children":[]},{"level":3,"title":"目录文件","slug":"目录文件","link":"#目录文件","children":[]},{"level":3,"title":"集","slug":"集","link":"#集","children":[]}]},{"level":2,"title":"Nginx","slug":"nginx","link":"#nginx","children":[{"level":3,"title":"Nginx概述","slug":"nginx概述","link":"#nginx概述","children":[]},{"level":3,"title":"安装Nginx","slug":"安装nginx","link":"#安装nginx","children":[]},{"level":3,"title":"Nginx常用命令","slug":"nginx常用命令","link":"#nginx常用命令","children":[]},{"level":3,"title":"Nginx反向代理","slug":"nginx反向代理","link":"#nginx反向代理","children":[]},{"level":3,"title":"nginx配置路由跳转404 问题","slug":"nginx配置路由跳转404-问题","link":"#nginx配置路由跳转404-问题","children":[]},{"level":3,"title":"地址匹配 location","slug":"地址匹配-location","link":"#地址匹配-location","children":[]},{"level":3,"title":"重定向 rewrite","slug":"重定向-rewrite","link":"#重定向-rewrite","children":[]}]},{"level":2,"title":"Docker","slug":"docker","link":"#docker","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"镜像操作","slug":"镜像操作","link":"#镜像操作","children":[]},{"level":3,"title":"容器操作","slug":"容器操作","link":"#容器操作","children":[]},{"level":3,"title":"网络配置","slug":"网络配置","link":"#网络配置","children":[]},{"level":3,"title":"数据存储","slug":"数据存储","link":"#数据存储","children":[]},{"level":3,"title":"多容器编排 Docker Compose","slug":"多容器编排-docker-compose","link":"#多容器编排-docker-compose","children":[]}]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]}],"git":{"updatedTime":1765961444000,"contributors":[{"name":"willy","email":"willysliang@qq.com","commits":6},{"name":"liangweili","email":"2682337050@qq.com","commits":1},{"name":"willy","email":"willysliang","commits":1}]},"filePathRelative":"后端基础/Linux.md"}');export{N as comp,S as data};
