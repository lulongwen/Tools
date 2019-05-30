# Git & Github & GitLab
> 三大代码存储库 GitHub & GitLab & BitBucket
* GitLab 基于Git版本控制开发的，适用于企业的GitLab SAAS
	* git 的最大特点是 分支控制
* 用户的个性化解决方案GitLab Community Edition
* SourceTree & BitBucket

* 参考资料
```
http://www.softwhy.com/article-8629-1.html
```



## Git使用
* 工作区 & 暂存区 stage & 主分支 master
	* 工作区 working dirctory
	* 暂存区 staging area
	* 历史区 history repository
```
	工作区
		包含 .git 目录
		工作区和版本库 没有任何关系

	暂存区 stage
		git add . // 添加文件到 暂存区
		数据保存在暂存区后，就要把代码提交到主分支上
		把暂存区的代码提交到主分支上后，会自动清空暂存区的内容

	主分支 Repository
		就是运行程序所有的代码
		有一个 隐藏的目录 .git 是Git版本库
		HEAD指针 默认指向 master

		不应该该分支上进行开发，建立分支，在分支上开发
		建立分支后，HEAD 指针就会发生变化，HEAD指针永远指向当前的分支

	如果分支有新的提交，master不会改变，只有分支会变化
		这时，master分支就落后于子分支了，所有的发布版本都必须在 master分支上
		这就需要将子分支和 master进行合并

```



### 设置开发者个人信息
* 多人写作开发，每台电脑自定义名字和地址，进行方便的联系
* git 是分布式控制系统，每个机器上都填写自己的基本信息
	* 名字 & 邮箱
```
	git config --global user.name "longwen"
	git config --global use.email "1348551496@qq.com"

	git config -l // 查看全局信息

	// 设置完成后不会有提示，直接操作就行

```



### 创建仓库 repository
```
	版本库 = 仓库，在这个仓库中的所有内容都会被 Git管理
		文件的修改，删除，更新都会记录
		可以随时恢复到某一个特定版本


	git init 初始化 git
		文件夹中会创建一个 .git 的目录，不能随便修改里面的文件

	.gitignore 
		touch .gitignore 忽略文件


	git add 文件名称

	git add .  // 添加所有文件


	git commit -m "注释"  // 提交文件信息
	git commit -a -m "注释"  // 先 add 然后commit
		git commit 前必须先 add， 否则不会提交任何文件

		commit 8675920edacdf7809e5c55dc450b34d6a58e7197
		commit 后面的就是提交版本的 ID


	git status
		q 键退出


	修改文件后
		git status  // 查看修改结果
		git diff 文件名称 // 修改前后文件对比
		git log 文件名称

		git log --pretty=online文件  //查看日志

		git log --prettry=online --abbrev-commit

		git log --graph --pertty=online 查看合并情况
			--graph 采用绘图的形式显示

		所有增加的内容都会使用 +
		删除的信息 使用 -

```



### 版本回退
```
版本回退
	HEAD~次数
	git reset --herd HEAD~1  //回退一步

	// 回退到指定 id的版本
	git reset --hard 8675920edacdf7809e5c55dc450b34d6a58e7197

	commit id 就是回退的主要操作方式
		概念跟 session id类似，有 Git控制，防止版本号冲突
		master分支有一个 HEAD指针，默认指向最后一次提交的 id


撤销修改-未增加
	git checkout --文件名称
	git checkout index.vue

	没有添加和提交 git add & git commit 可以直接撤销对文件所做的修改


撤销修改-已添加
	已添加 git add 未提交 git commit 可以直接撤销对文件的修改

	git reset HEAD 文件名称  // 撤销暂存区的修改
	git reset HEAD index.vue

	git checkout --文件名称  // 丢弃已经修改的文件
	git checkout --index.vue


删除文件
	git 里面删除文件也属于修改操作

	从本地磁盘删除文件后的查询状态
	git status
		这时显示，文件从当前的工作区中删除了

	git commit -a -m "delete list.vue"


恢复删除的文件

````



## Git命令
```

	git add 

	git status

	git commit 

	git checkout

	git log

	git reset HEAD


```



## Git远程仓库
* Github的作用
* SSH配置
* 远程仓库 & 本地仓库的交互
```
	git clone

	git remote

	git push

	git pull
```



## Github
* 注册 Github账号
* 在 github上生成一个 SSH Key后才能使用

```
git bash 工具生成 SSH Key
	ssh-keygen -t rsa -C "1348551496@qq.com"

	生成的时候，要输入密码，但界面没有任何反应，不要理会，直接输入密码后，回车
	会自动在用户目录生成 一个 .ssh的目录，里面有2个文件
		id_rsa     私钥
		id_rsa.pub 公钥


	github后台，个人中心 / 选择 SSH Keys
	选择 Add SSH Key 按钮，表示要增加新的 key
	找到本地 .ssh目录下的 id_rsa.pub 的文件进行复制，一定不要随便增加内容
	粘贴到 Key 的框里

	完成后，就表示 客户端和 github之间建立了 一个安全连接
	由于 SSH的存在， github才可以识别用户

```


## 关联远程仓库
```
	// remote 远程仓库
	git remote add origin https://github.com/lulongwen/js.git

	// 将所有内容推送到 github上
	// -u 将远程 master和本地 master进行管理
	git push -u origin master

	// 切换远程仓库
	git remote set-url origin https://github.com/lulongwen/vue.git
	
	git remote -v  // 查看远程仓库

	git remote rm test  // 删除 test仓库

	git push origin master  // 提交到主分支，如果是主分支，简写 git push

	git push --set-upstream origin master


	应该先有远程仓库，然后根据这个仓库 clone出一个新的仓库
	远程仓库，建议使用 git clone 方式下载

	git clone https://github.com/lulongwen/vue.git

	git clone https://github.com/lulongwen/vue.git myVue //指定目录 

```



## Git分支管理
```	
	git branch  // 查看所有分支
	git branch -a  // 查看全部分支，本地和远程
	git branch -r  // 查看远程分支
	git branch -l  // 查看本地分支

	git push origin  item  // 将本地分支推送到远程服务器


	git branch list  // 创建分支
	git branch -m list item  // list分支重命名为 item

	git checkout list  // 切换分支
	git checkout -b item // 创建并切换分支

	git stash 分支暂存

	合并分支，在 master分支上进行合并
	git merge list
	git push origin master  // 合并后提交到 master
		快速合并不会产生 commit id，合并利用了分支的 commit id

	git branch -d list  // 删除分支，远程服务器依然存在主分支，删除远程主分支
	git push origin --delete list  // 删除远程 list分支



合并分支
	git merge list
	git merge list 可以解决在不同的分支上修改同一个文件

	// 合并分支生成新的 commit id
	git merge --no-ff -m "no ff commit" list
		-no-ff 合并后自动创建一个新的 commit id

	git merge --no-ff -m "merge dev branch" dev

	git merge orgin/list  // 将远程服务器的分支内容复制到本地 list分支
	git push origin list // 将分支提交到远程服务器
	git pull  // 拉取远程仓库所有代码



	分支恢复

	分支冲突解决


	删除分支，不能再当前的分支上进行，要先切换到其他分支
	git checkout master   // 切换分支
	git branch -d list  // 删除分支
	git checkout -b item // 创建并切换分支


	git branch -d list // 如果分支的修改没有合并，会报错
	git branch -D list // 就需要强制删除

	git push origin --delete list  // 删除远程分支

	git branch list  // 推送一个空的分支，也表示删除
	git push origin :list


	多人写作开发，分支暂存
	分支暂存策略，你不能把有问题的代码提交到 master分支上
	git add .
	git stash  // 将文件保存在暂存区，将当前的开发暂存，等以后有时间继续开发

	git status // 不会显示工作区中的修改



	git stash list // 查看暂存的状态

	git stash apply // 从暂存区中恢复，然后手动删除暂存
	git stash drop

	git stash pop // 恢复的同时，也将 stash内容删除

```



### patch 补丁
* 补丁是针对局部的修改
* Git 的补丁方案
	* git diff 生成的 标准 patch，生成的补丁兼容性好
	* git format-patch 生成 git 专用 patch，标准的补丁，面向社区



```
git diff 补丁
	git checkout -b list // 创建并进入 list分支

	git diff index.vue // 比较 index.vue

	git commit -a -m "add attribute index.vue" // 提交文件

	git diff master > mypat // 生成补丁文件 mypat

	git checkout master // 切换到 master分支

	git checkout -b patchlist // 创建补丁分支

	git apply mypat // 应用补丁信息

	git commit -a -m "patch index.vue" // 提交补丁操作

	git checkout master // 切换到 master分支，并合并补丁

	git merge --no-ff -m "merge patch" patchindex

	// 以上只是把补丁数据发送给开发者，没有发送全部代码


git format-patch 生成 git 专用补丁
	git branch -D list

	git branch -D patchlist

	git checkout -b list

	// 修改将代码提交
	git commit -a -m "add tostring method"

	git fromat-patch -M master // 要与 master分支进行比较 -M 指定分支

	git checkout master // 切换到主分支

	git checkout -b patchlist // 创建补丁分支

	git am 0001-add-tostring-method.patch // 应用补丁信息 git am 完成

	git commit -a -m "method patch apply" // 提交补丁更新

```



## Git标签管理
```
为提交的git 设置标签，标签就是起一个别名
	标签永远指向一个 commit id
	标签可以标记某一个提交点

	定义标签
	给 master 定义标签 git tag v1.0

	给指定 commit id定义标签 git tag v1.5 commit id

	git tag  // 查看所有标签

	git show v1.5  // 查看标签完整信息

	git tag -a v1.5 -m "test version 1.5" // 添加标签设置注释


	git tag -d v1.0  // 删除标签，只删除了本地标签，服务器依然存在，所以继续删除远程标签
	git push origin :refs/tags/v1.5

	git push origin v1.0  // 标签提交到服务器上，一个个推送很麻烦，可以一次性的推送
	git push origin v1.5



利用 GPG工具进行标签的加密
	gpg --gen-key  // 生成自己的秘钥

	rsa 是加密算法

	// 把 index.vue 加密到 index.en.vue
	gpg --recipient 56Er9088 --output index.en.vue --encrypt index.vue

	gpg index.en.vue  // 解密
		
```


## Git 自定义
```
	.gitignore 文件的作用

	alias 别名

	CopSSH 搭建自己的 Git 服务器

```



### Git别名
```
	git config --global alias.ss status

	git config --global alias.co checktou

	git config --global alias.ci commit

	git config --global alias.br branch


	所有的别名都在项目目录下 .gitconfig 里面找到
```


### 搭建 Git服务器
```
定义一个新用户
	版本管理员 version_用户名
	
	代码管理员 coder_用户名

	测试人员 test_用户名


生成 SSH秘钥
	ssh-keygen -C '1348551496@qq.com' -t rsa

	id_rsa.pub 公钥
```
