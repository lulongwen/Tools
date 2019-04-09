# git本地操作
* 不停的创造文件进行备份(没有修改的提示) git可以帮我们管理我们的代码保证代码不丢失
* 记录历史只要代码提交到 git上就永久不会丢失，可以随时“穿越”
* 团队协作，俩个人修改了同一个文件的同一行，也需要手动解决冲突，可以实现自动合并 （模块化，组件化）
* git拥有强大“分支”管理系统


## 分布式
* svn(集中式) 需要一台中央服务器
* git的区别
	* 速度比svn快
	* svn中每个文件夹都有一个文件 .svn文件
	* git有一个单独的文件 .git文件夹


## git安装
* windows http://git-scm.com
* mac 如果安装过xcode自带git，homebrew是wmac的包管理器
* http://ohmyz.sh


## git配置用户(不配置用户不能提交代码)
```
git config --list
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

## 初始化 git init
* 一个项目初始化一次，不能嵌套
```
git init 告诉git哪个文件夹被git所管理
git status 查看git状态
```


## 本地提交到 -> github
- 先有github账号
* README.md
* 创建一个.gitignore
* git不会上传空文件夹
	* 添加.gitkeep在空文件夹内
```
关联远程仓库
git remote add origin 地址

删除关联
git remote rm 名字

推送代码
git push origin master

拉取最新的代码
git pull origin master (fetch+merge)
	pull = git fetch  + git merge

拉取项目到本地
git clone 项目地址 项目别名

```


## git add
```
添加到暂存区
git add ./ -A / 文件名

添加到历史区
git commit -m '消息'


删除暂存区
git rm --cached 文件名
```



## git diff 对比
```
git diff 工作区和暂存区
git diff 分支名 工作区和历史区
git diff --cached 暂存取和历史区比较
```



## 撤销
- 从暂存区中将工作区内容覆盖掉
```
git checkout 文件名
git reset HEAD 文件名 回到上一次的缓存区
```

## 回滚历史版本
```
git reset --hard 版本号
git reflog 查看所有版本

回滚某个版本的文件
git checkout 版本号 文件名

Please commit your changes or stash them before you merge.
放弃本地修改，直接覆盖之
git reset --hard
git pull
```


## gh-pages分支来发布我们的静态页
- 在项目中创建一个gh-pages的分支
- 将分支提到线上仓库
- 找到提供给你的网站 settings github-pages
```
git checkout -b gh-pages
touch index.html
git add .
git commit -m 'xxx'
git push origin gh-pages
```



## issue问题
- 可以提交对项目，自己的信息

## 解决冲突
- 遇到冲突时只能手动的解决冲突，留下想要的结果再次提交

## 更改别人代码
- fork实在当前项目下克隆了一份，如果代码更新，不会随之更新
- 只有fork关系才能发送pull request请求

## collaborators
- 添加贡献者，被添加的人拥有最大权限

## echo输入文件内容
```
echo '内容' >> 1.txt
```
