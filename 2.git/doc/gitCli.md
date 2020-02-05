# Git CLI

## 配置Git
* 配置用户信息，不配不能提交代码
```
	git config --list  // 查看用户配置列表
	git config --global user.name '用户名'
	git config --global user.email '邮箱'


	git config --global credential.helper cache
		设置记住密码，默认15分钟

	git config credential.helper 'cache --timeout=3600'
		自己设置时间，一个小时之后失效

	git config --global credential.helper store  // 长期存储密码
	http://yourname:password@git.hub.com/name/project.git
		增加远程地址的时候带上密码也是可以的，客户端也可以存储密码
	
	git init // 初始化项目，一个项目只初始化一次


	git clone
	git clone [url] --depth=1
		1 表示只克隆最近一次commit

	// depth用于指定克隆深度，1 表示只克隆最近一次commit
	git clone --depth=1 git://someserver/somerepo
	git clone git@github.com:ant-design/ant-design-pro.git Antd --depth=1


	添加暂存区
		git add .
		git add -a 文件名，-a是代表add
		git add -A  // -A 是 --all 的一个简写
		git commit -m "注释" 					// 添加版本去
		git cimmit -m "注释" --amend

		git commit -a -m "" 直接添加到版本区
		git commit



	git status // 查看状态



	git log // 查看版本信息


	git ls-files 看已经被提交的


```


## 多人协作开发：
```
多人协作开发：
	1. 给开发人员项目权限
		New Collaborators  // 贡献者 添加贡献者（可以控制你的项目
    添加github用户
    分支开发，尽量模块化，模块化不会导致冲突，如果改了公共代码 要通知其他人
      		
	2. 收确认邮件
	3. 克隆开发项目到本地
	4. 开发


当没有权限的时候还想维护别人的代码：
	1.找到这个项目
	2.fork项目
	3.git clone到本地
	4.修改 + 上传
	5.点击New pull request按钮
	6.点击Create pull request按钮
	7.填写修改的描述 + 点击Create pull request按钮
	8.等待别人和合并
	
当收到别人维护的代码请求的时候：
	1.先查看修改（项目中的Files changed）
	2.确定可以合并就点击Merge pull request按钮
	3.修改合并代码后的标题
	4.Confirm  merge（合并）
	5.跟别人说句话，表示感谢


```



## 远程仓库
```bash
	git push  // 默认提交主分支
	git push origin master
		origin为远程仓库的名字，默认为origin
		将当前分支推送到 origin 主机对应的分支
  	如果只有 master 主机可以省略， 直接 git push

  git push -u origin master
  	-u 指定默认主机，以后就不用加任何参数，直接 git push
  	将本地推送到 origin主机，同时指定 origin 默认主机


	git push origin master:hb-dev  // 将本地库与服务器上的库进行关联 


	git push origin master输入密码时，按任意按键都没有反应
		因为密码是不可见的，你输完了回车就行了
		Git 为了保证用户密码的安全.在bash控制台输入时是不显示的.
		所以并不是不能输入. 你只要输入正确的密码. 回车即可.
		如果密码正确会连接成功并 push代码




	git remote  // 查看远程仓库的名字

	git remote -v  // 查看版本对应远程仓库的地址, 上传与下载的地址

	git remote show origin  // 显示远程库origin里的资源 


	git remote rm origin  // 删除远程仓库


	添加远程仓库
		git remote add origin url
		git remote add origin git@github.com:lulongwen/ES6.git


	切换远程仓库地址：适用于修改github上的项目名称后
	更换远程仓库地址。把<URL>更换为新的url地址
		git remote set-url origin [url]
		git remote set-url origin git@github.com:lulongwen/ES6.git

		git remote set-url --add origin [url]
			就是往当前git项目的config文件里增加一行记录 


	先删除后增加
		git remote rm origin
		git remote add origin git@github.com:lulongwen/ES6.git


	修改config文件
		如果项目有版本控制，到项目根目录下 .git文件夹，
		找到 config文件，修改 url
		url = git@github.com:lulongwen/ES6.git
```




## git diff 对比文件
```
	git diff   // 对比前后不同,工作区与暂存区的对比
	git diff --cache // 暂存区与版本库的对比
	git diff --staged  // 暂存区与版本库的对比
	git diff master   // 工作区与版本库的对比，master 是版本库的名字


```



## 	撤销-还原文件
```
	git checkout 版本号 文件名  // 从历史区回滚某个文件
	git checkout 文件名 // 暂存区回滚工作区


	git checkout -b dev 快速建立一个新的本地分支dev，并切换到 dev分支



 	git log 获取 commit id，commit id就是版本号
	如果提交过多，显示不完整，按回车（Enter）键显示更多
		Q键 退出（返回）


	git commit --amend // 撤销上一次的操作，误提交后撤销重新提交


暂存区撤销到工作区
	工作区撤销为版本区：先从暂存区撤销，暂存区为空的话，从版本区恢复
	暂存区有东西，撤销暂存区，
	暂存区没东西，直接撤销版本区

	如果有2个以上文件，一个或几个提交到版本库了，
	另一个忘记提交，可以先将没提交的文件拉到缓存区，
	
	然后通过 git commit -m "注释" --amend 撤销回来，
	最后,一次性提交暂存区中的文件与最近一次提交的版本
		合并形成新的版本号
		git log 查看是否提交成功



	git reset HEAD 文件名  // 暂存区回滚到上一次, 从绿色变成红色
	git reset HEAD deom.html 撤销，从暂存区撤销到工作区


	git reset --hard 版本号 // 回滚到某一个版本，还原整个版本
	git reset --hard HEAD^  
		从倒数第二个开始还原,
		运行第一次是还原倒数第二个版本,运行第二次还原倒数第三个版本...

	git reset --hard HEAD~2
		通过版本号排列序号来还原
		回滚倒数第三个历史记录,跳过了2个


	git reflog  // 查看历史版本记录



	git stash push // 将文件给 push 到一个临时空间中
	git stash pop  // 将文件从临时空间pop下来

```




## git rm删除
```
	git rm 文件名
	git rm -f 文件名  // 一次性把暂存区和工作的文件都删除
	git rm --cached 文件名  // 只删除暂存区，不删除工作区(本地)

	本地文件已经提交到暂存区，但是又在本地删除了;
	那么暂存区会一直保留被删除文件的状态,通过git rm 文件名 就可以彻底删除

			

	git rm index.html 可以直接删除文件
	git rm -f index.html
	git rm --cached index.html

```



## 分支
*  master(默认分支)必须要提交过一次才会出现(root commit)
```
	git branch           // 查看分支
	git branch 分支名    // 创建分支
	git checkout 分支名  // 切换分支
	git checkout -b dev  // 快速创建并切换分支


	git branch -d 分支名 // 删除已经合并的分支，不在当前分支上
	git branch -D 分支名 // 删除分支，没有合并的分支，强行删除


	git branch -a  // 查看所有的分支
	git branch -r  // 查看远程所有分支
	


	git branch --merged    // 查看已经合并的分支
	git branch --no-merged  // 查看没有合并的分支


	切换分支进行开发，开发后合并到master上，确保在master上进行合并
	git merge dev // 合并 dev

```


## 冲突
* 手动修复，在次提交即可
```
当出现冲突的时候：
	1. git fetch // 将远程仓库的代码拉取下来
	2. git diff master origin/master  // 查看冲突
	3. git merge origin/master // 合并远程仓库与版本库的代码
	4. 人为判断解决冲突
	5. 添加新的版本控制 + push到远程


	git pull  // 拉取，缺点：将本地的代码直接覆盖
		没有把握最好不要用，强烈建议用 git fetch




	cherry-pick
	

	git rebase master
		更新master主线上的东西到该分支上





	merge
	rebase  // 交互式
	reset
	revert
	cherry-pick
	
```



## linux
```
	rm -rf 文件名  // 删除文件夹

	ls -al  // 显示文件夹内容

	touch 1.md  // 创建文件

	mkdir js  // 创建文件夹

	cat 1.md  // 查看文件内容

编辑文件 vi编辑
	默认命令模式，i 进入编辑模式
	esc 退出编辑模式
	想改内容需要: 加命令
	q!强制退出 wq保存退出

```