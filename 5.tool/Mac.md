# Mac 操作技巧

## goto 文件夹
* Finder
```
  /private/etc/hosts   hosts 文件

  /usr/  软件安装目录

  ~/Library/Preferences  软件设置，比如 webstorm theme

```


## 常用命令行
```
	新建文件夹
		mkdir blog

	新建文件
		touch index.js

```



## 操作技巧
```
  command + shift + . 显示隐藏的文件夹

```



## HomeBrew
* https://brew.sh/index_zh-cn
* 为了管理和升级建议用 Homerbrew 安装软件
```
	brew search /wge*/  /wge*/是个正则表达式， 需要包含在//中

	brew list      列出已安装的软件

	brew update    更新brew

	brew home      用浏览器打开brew的官方网站

	brew info      显示软件信息

	brew deps      显示包依赖

```



## wget
```
	brew install wget
	brew uninstall wget  // 卸载软件

	brew install git
	brew install go
	brew install python

```



## Terminal Color
```
  export LS_OPTIONS='--color=auto' # 如果没有指定，则自动选择颜色
  export CLICOLOR='Yes' #是否输出颜色
  export LSCOLORS='CxfxcxdxbxegedabagGxGx' #指定颜色

```
