# Git Error

### git pull `You have not concluded your merge (MERGE_HEAD exists)`
```
error: You have not concluded your merge (MERGE_HEAD exists).
hint: Please, commit your changes before merging.
fatal: Exiting because of unfinished merge.
```

* 原因可能是在以前pull下来的代码自动合并失败
> 解决方法1 保留本地的更改,中止合并 -> 重新合并 -> 重新拉取
```git
git merge --abort
git reset --merge
	合并后，一定要提交这个本地的合并，然后获取线上的
	git pull
```

> 解决方法2 放弃本地的更改,远端版本覆盖本地版本(慎重)
```git
git fetch --all
git reset --hard orgin/master
git fetch

```



### git add . 警告
* `warning: LF will be replaced by CRLF`
	+ 这样设置 `git config core.autocrlf false` 然后 `git add .`

* `LF will be replaced by CRLF in package-lock.json`
	* 解决办法 `git config --global core.autocrlf false`
	* 解决办法 `git config core.autocrlf false`
	* 原因：
		* 路径中存在 / 的符号转义问题，false就是不转换符号，
		* 默认是true，相当于把路径的 / 符号进行转义，这样添加的时候就有问题
		* core autocrlf为true时，有个慎重的地方，当你上传一个二进制文件，Git可能会将二进制文件误以为是文本文件，从而也会修改你的二进制文件，从而产生隐患

* git中配置autocrlf来正确处理crlf
	* https://blog.csdn.net/lysc_forever/article/details/42835203



### git push ` failed to push some refs to `
* 远程库与本地库不一致造成的，那么我们把远程库同步到本地库就可以了
```git
git pull --rebase origin master
	把远程库中的更新合并到本地库中，
	–rebase的作用是取消掉本地库中刚刚的 commit，并把他们接到更新后的版本库之中

	git pull –rebase origin master
	先取消commit记录，并且把它们临时 保存为补丁(patch)(这些补丁放到”.git/rebase”目录中)，之后同步远程库到本地，最后合并补丁到本地库之中


git push origin master输入密码时，按任意按键都没有反应
	因为密码是不可见的，你输完了回车就行了
	Git 为了保证用户密码的安全.在bash控制台输入时是不显示的.
	所以并不是不能输入. 你只要输入正确的密码. 回车即可.
	如果密码正确会连接成功并 push代码

```


### git pull 遇到错误
```git
Your local changes to the following files would be overwritten by merge:
意思是：本地新修改的代码会被 git服务器上的代码覆盖，提示你合并

解决方法1： 保留本地的代码不被覆盖，并把git服务器上的代码pull到本地，
	本地的会被暂时的封存起来，之后使用 add commit push命令更新本地代码到服务器
	git stash
	git pull origin master
	git stash pop

解决方法2： 完全覆盖本地，保留 git服务器的代码
	直接回退到 上一个版本，在进行 pull, origin master 表示 git的主分支
	git reset --hard
	git pull origin master

```



### ` Updates were rejected because the tip of your current branch is behind `
* Git已经提示我们，先用git pull把最新的提交从origin/dev抓下来
* 然后，在本地合并，解决冲突，再推送
```
	git pull

		git add .
		git commit -m "fix merge"
		git push
```



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