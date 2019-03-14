# Git Error


### fatal: refusing to merge unrelated histories
```
git pull origin master --allow-unrelated-histories 可以提交成功
再次 git push

```


### failed to push some refs to 'git@github.com:lulongwen/React.git'
```bash
# 本地和远程的文件应该合并后才能上传本地的新文件
	git pull origin master
	git pull
	git push -u origin master

```