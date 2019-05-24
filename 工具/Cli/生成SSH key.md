# 如何生成我的 SSH key
1. 打开终端
2. 粘贴以下文字，替换您的GitHub电子邮件地址
	- ` ssh-keygen -t rsa -b 4096 -C "your_email@example.com" `
	- 这将生成一个以您提供的电子邮件地址作为标签的新的SSH key
	- ` Generating public/private rsa key pair. `

3. 当系统提示您输入要保存密钥的文件时，按回车键
	- 这需要您保存到默认的文件位置
	- ` Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter] `
4. 在提示符下，输入安全密码
	```
	Enter passphrase (empty for no passphrase): [Type a passphrase] 
	Enter same passphrase again: [Type passphrase again]]
	```

5. 查看新生成的SSH key
	- ` cat /Users/you/.ssh/id_rsa.pub `