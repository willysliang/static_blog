import{_ as s,o as n,c as a,b as e}from"./app-Bvx-HY_0.js";const t={},l=e(`<h3 id="防治" tabindex="-1"><a class="header-anchor" href="#防治"><span>防治</span></a></h3><h3 id="_1kb病毒" tabindex="-1"><a class="header-anchor" href="#_1kb病毒"><span>1kb病毒</span></a></h3><blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token number">1.</span> 打开“我的电脑”，工具→文件夹选项→查看→“隐藏受保护的操作系统文件”前√去掉，并勾选“显示所有文件和文件夹”，确定以后会发现所有文件都在，但被“隐藏”且无法更改。
<span class="token number">2.</span> 打开任务管理器，进程里找到 wscript<span class="token punctuation">.</span>exe 并结束它。打开你中毒的盘，将所有快捷方式和一个stramdata的病毒文件夹删除。这时病毒已经被清除，接下来只要恢复被隐藏的文件就好。
<span class="token number">3.</span> 在“开始”→进程查找cmd<span class="token punctuation">.</span>exe，运行，输入命令：attrib <span class="token constant">C</span><span class="token operator">:</span>\\ <span class="token string">&quot;*&quot;</span> <span class="token operator">-</span>h  <span class="token operator">-</span>s  （注意：<span class="token constant">C</span>是指你需要修改的盘，有可能是<span class="token constant">D</span>、<span class="token constant">I</span>之类的，不一定是<span class="token constant">C</span>盘），回车之后就等成功了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="清理c盘" tabindex="-1"><a class="header-anchor" href="#清理c盘"><span>清理C盘</span></a></h3><blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code># 删除<span class="token constant">C</span>盘临时文件夹
<span class="token number">1.</span> windows键<span class="token operator">+</span><span class="token constant">R</span>键，通过运行框输入打开<span class="token constant">C</span>盘的临时存储文件夹：<span class="token operator">%</span>temp<span class="token operator">%</span>
<span class="token number">2.</span> <span class="token constant">TEMP</span>里面的文件都是系统缓存文件 删除不影响电脑使用，可放心删除

# 系统自带工具磁盘清理
<span class="token number">1.</span> windows键<span class="token operator">+</span><span class="token constant">R</span>键，打开运行框输入：cleanmgr
<span class="token number">2.</span> 选择<span class="token constant">C</span>盘，点击确认清理

# 改变盘分区
<span class="token number">1.</span> 我的电脑→右键 属性→系统高级设置→高级<span class="token operator">-</span>性能<span class="token operator">-</span>设置→性能选项<span class="token operator">-</span>高级<span class="token operator">-</span>更改
<span class="token number">2.</span> 更改<span class="token constant">C</span>盘为“无分页文件” 
<span class="token number">3.</span> 更改<span class="token constant">D</span>盘为“系统管理的大小”

# 可删除的<span class="token constant">C</span>盘文件
<span class="token number">1.</span> temp临时文件：我的电脑→<span class="token constant">C</span>盘→Windows→temp
<span class="token number">2.</span> Prefetch已经读取过的文件信息文件（删除有利于提高运行速度）：我的电脑→<span class="token constant">C</span>盘→Windows→Prefetch
<span class="token number">3.</span> DownloadC盘的文件：我的电脑→<span class="token constant">C</span>盘→Windows→Download
<span class="token number">4.</span> LogFiles 系统的日志文件：我的电脑→<span class="token constant">C</span>盘→Windows→system32→LogFiles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="vscode终端无法输入命令" tabindex="-1"><a class="header-anchor" href="#vscode终端无法输入命令"><span>vscode终端无法输入命令</span></a></h3><blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>. 右击vscode图标，选择以管理员身份运行，或者设置vscode以管理员身份打开

<span class="token number">2</span>. 在 vscode 终端输入：get-ExecutionPolicy
显示内容为 Restricted 这个表示禁止终端使用命令的意思

<span class="token number">3</span>. 将 vscode 设置为允许在终端运行命令：set-ExectionPolicy RemoteSigned

<span class="token number">4</span>. 此时在执行 get-ExecutionPolicy ，如果显示内容为 RemoteSigned，就表示可以在 vscode 终端中使用操作命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,7),c=[l];function i(o,p){return n(),a("div",null,c)}const r=s(t,[["render",i],["__file","电脑防治.html.vue"]]),v=JSON.parse('{"path":"/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E7%94%B5%E8%84%91%E9%98%B2%E6%B2%BB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"防治","slug":"防治","link":"#防治","children":[]},{"level":3,"title":"1kb病毒","slug":"_1kb病毒","link":"#_1kb病毒","children":[]},{"level":3,"title":"清理C盘","slug":"清理c盘","link":"#清理c盘","children":[]},{"level":3,"title":"vscode终端无法输入命令","slug":"vscode终端无法输入命令","link":"#vscode终端无法输入命令","children":[]}],"git":{"updatedTime":1699357323000,"contributors":[{"name":"willy","email":"willysliang","commits":1}]},"filePathRelative":"计算机网络/电脑防治.md"}');export{r as comp,v as data};
