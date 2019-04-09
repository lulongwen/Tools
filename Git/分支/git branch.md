# git branch 分支

## 创建分支
```
git branch 分支名
git branch 查看分支

创建并切换分支
	添加文件到历史区此时两个分支就没关系了
git checkout -b dev

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