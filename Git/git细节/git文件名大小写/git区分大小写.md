# Git 默认不区分大小写
```
	git config core.ignorecase false
	
```

* git默认是不区分大小写的，你修改一个文件名/文件夹，改变大小写，git status 是不会提示你有修改的

* git config --get core.ignorecase 查看默认配置

* git config core.ignorecase false 设置为区分大小写

* 然后git status 就可以看到变动