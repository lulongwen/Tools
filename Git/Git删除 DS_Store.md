# Git 删除 .DS_Store 文件

* .gitignore 文件配置错误，会提交 .DS_Store
```bash
	touch .gitignore

	# 输入 
	.DS_Store
	*/.DS_Store

```


* 如果包含 .DS_Store的项目已经提交，那么需要先删除本地的 .DS_Store文件 并配置完忽略后，再次提交
```bash
	# 删除当前目录及其子目录下的所有.DS_Store 文件
	find . -name '*.DS_Store' -type f -delete
	git add .
	git commit -m "remove DS_Store"
	git push origin master

```