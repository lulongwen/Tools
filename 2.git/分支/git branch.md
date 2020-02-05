# git branch 分支

## 创建分支
```
git branch 分支名
git branch 查看分支

创建 dev分支并进入
	添加文件到历史区此时两个分支就没关系了
git checkout -b dev


git push origin dev:dev


git push --set-upstream origin dev


git branch -r 查看远程分支

// 建立本地到远程的链接
git branch --set-upstream-to=origin/dev

// 取消对master的跟踪
git branch --unset-upstream master

  upstream 上游码流

```


## 切换分支
- 分支有更改不能直接切换，可以提交更改或者暂存更改，暂存使用过渡区覆盖掉工作
```
git checkout 分支名


文件修改切换分支
git stash 暂存文件
git stash pop 还原暂存的内容

```


## 合并分支
```
git merge 分支名
```


## 删除分支
- 删除分支时当前用户不能在当前要删除的分支上
```
git branch -D 分支名

```