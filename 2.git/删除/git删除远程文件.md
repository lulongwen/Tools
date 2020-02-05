# Git 删除远程仓库的文件
* 解决 .gitignore 文件配置不正确，导致某些不需要的目录上传到 git 远程仓库上


### 1. 预览将要删除的文件，文件名区分大小写
	git rm -r -n --cached 文件/文件夹名称
		-n 参数，执行命令时，是不会删除任何文件，而是展示此命令要删除的文件列表预览


### 2. 确定无误后删除文件
	git rm -r --cached 文件/文件夹名称


### 3. 修改本地 .gitignore 文件 并推送到远程服务器
	git commit -m "提交说明"
  git push origin master


## git rm --cache file
* 删除暂存区或分支上的文件, 但本地又需要使用, 只是不希望这个文件被版本控制,
* 使用 git rm --cached

https://www.cnblogs.com/everfight/p/git_rm_usage.html