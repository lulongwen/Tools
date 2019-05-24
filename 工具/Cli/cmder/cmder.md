# Cmder 命令大全


## Cmder 设置
win + alt + p

http://www.cnblogs.com/bluestream/p/5042818.html


Cmder出现 “此时不应有” 类型的错误
	基本可以判定是小括号 “()”引起的问题
	或是环境变量问题，或是路径问题。

D:\Program Files (x86)\Cmder
目录中包含小括号 “()”，因此出现 “此时不应有 \Cmder\vendor\lib\lib_base 错误”

注册到右键菜单
	管理员身份运行 cmder.exe
	
	Cmder.exe /REGISTER ALL
	cmder /register all



## 修改` λ ` 为 ` $ `
```
第41行中 {lamb} 修改为 $
	1;39;40m{lamb} \

	1;39;40m$ \

```


## 不显示中文目录
* 要和上边的隔一条空格

```
set LANG=zh_CN.UTF8  

如果无效试下
set LANG=zh_CN.GBK 
```
