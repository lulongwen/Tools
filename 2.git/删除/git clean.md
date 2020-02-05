# Git 删除文件


## git rm 删除文件

```
git rm -r -n --cached 文件/文件夹名称

  -n 执行命令时，是不会删除任何文件，而是展示此命令要删除的文件列表预览

git rm -r --cached 文件/文件夹名称
  直接删除文件

git commit -m "删除文件"
git push origin master
  提交本地修改，并推送到远程服务器


```





# git clean 删除文件
```
git clean 参数 
	-n 显示 将要 删除的文件 和目录 
	-f 删除 文件
	-df 删除 文件 和 目录

git clean -n
git clean -df
git clean -f

```