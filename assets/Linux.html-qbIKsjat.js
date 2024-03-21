import{_ as n,o as s,c as a,b as e}from"./app-Bvx-HY_0.js";const i="/static_blog/assets/image-20220818132459662-1661070058347-BEZDcx1w.png",l="/static_blog/assets/783284cf6b014109a6464b533c15ff00-1661070058347-CycrSG0W.png",c="/static_blog/assets/image-20220818134811486-1661070058348-Dy-b39Gr.png",t={},d=e(`<h2 id="mac命令" tabindex="-1"><a class="header-anchor" href="#mac命令"><span>Mac命令</span></a></h2><h3 id="windows命令下载文件" tabindex="-1"><a class="header-anchor" href="#windows命令下载文件"><span>windows命令下载文件</span></a></h3><blockquote><ul><li>在打开的poershell窗口中，依次输入如下命令： <code>$client = new-object System.Net.WebClient</code> （回车）</li><li><code>$client.DownloadFile(&#39;网络文件链接地址&#39;,&#39;保存到本地后的路径+文件名&#39;)</code> （回车）</li></ul><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>start powershell
$client = new-object System.Net.WebClient 
$client.DownloadFile(&#39;http://test.com/xxx.html&#39;,&#39;D:\\index.html&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h2><h3 id="下载文件" tabindex="-1"><a class="header-anchor" href="#下载文件"><span><strong>下载文件</strong></span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># wget -c http下载，不需要翻墙</span>
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
Nginx <span class="token punctuation">(</span>engine x<span class="token punctuation">)</span> 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。
Nginx是由伊戈尔·赛索耶夫为俄罗斯访问量第二的Rambler.ru站点（俄文：Рамблер）开发的，第一个公开版本0.1.0发布于2004年10月4日。2011年6月1日，nginx <span class="token number">1.0</span>.4发布。

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+`" alt="·"></p></blockquote><h3 id="nginx反向代理" tabindex="-1"><a class="header-anchor" href="#nginx反向代理"><span>Nginx反向代理</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 下载 Nginx 代理项目</span>
http://nginx.org/

可在cmd 中输入命令启动端口服务：nginx


<span class="token comment"># 反向代理中常用命令：</span>
proxy_pass    <span class="token comment"># 该指令用来设置被代理服务器地址，可以是主机名称、IP地址加端口号形式</span>
proxy_set_header	<span class="token comment"># </span>



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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,27),p=[d];function r(o,v){return s(),a("div",null,p)}const u=n(t,[["render",r],["__file","Linux.html.vue"]]),b=JSON.parse('{"path":"/%E5%90%8E%E7%AB%AF%E5%9F%BA%E7%A1%80/Linux.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Mac命令","slug":"mac命令","link":"#mac命令","children":[{"level":3,"title":"windows命令下载文件","slug":"windows命令下载文件","link":"#windows命令下载文件","children":[]}]},{"level":2,"title":"Linux","slug":"linux","link":"#linux","children":[{"level":3,"title":"下载文件","slug":"下载文件","link":"#下载文件","children":[]},{"level":3,"title":"移动命令mv","slug":"移动命令mv","link":"#移动命令mv","children":[]},{"level":3,"title":"删除文件：rm","slug":"删除文件-rm","link":"#删除文件-rm","children":[]},{"level":3,"title":"目录文件","slug":"目录文件","link":"#目录文件","children":[]},{"level":3,"title":"集","slug":"集","link":"#集","children":[]}]},{"level":2,"title":"Nginx","slug":"nginx","link":"#nginx","children":[{"level":3,"title":"Nginx概述","slug":"nginx概述","link":"#nginx概述","children":[]},{"level":3,"title":"安装Nginx","slug":"安装nginx","link":"#安装nginx","children":[]},{"level":3,"title":"Nginx常用命令","slug":"nginx常用命令","link":"#nginx常用命令","children":[]},{"level":3,"title":"Nginx反向代理","slug":"nginx反向代理","link":"#nginx反向代理","children":[]},{"level":3,"title":"nginx配置路由跳转404 问题","slug":"nginx配置路由跳转404-问题","link":"#nginx配置路由跳转404-问题","children":[]}]}],"git":{"updatedTime":1699357323000,"contributors":[{"name":"willy","email":"willysliang","commits":1}]},"filePathRelative":"后端基础/Linux.md"}');export{u as comp,b as data};
