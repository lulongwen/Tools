# git remote

## 推送到远程仓库
```bash
# 将当前分支推送到 origin主机的对应分支
git push origin

# 将本地的 master分支推送到origin主机，同时指定origin为默认主机
# 以后，就可以不加任何参数使用 git push
git push -u origin master
	-u
	origin
	master 


```


## 添加，关联远程仓库
```bash
# url 可采用 http 协议或 ssh（git） 协议
git remote add origin <url>
git remote add origin git@github.com:lulongwen/React.git

# 关联远程分支
git branch --set-upstream-to=origin/<branch> master
```


## 修改远程仓库
```bash
git remote set-url origin <url>
git remote set-url origin git@github.com:lulongwen/React.git

```


## 删除远程仓库
```bash
git remote remove <name>

```

