# wget
- wget下载 https://eternallybored.org/misc/wget
- wget 命令 http://man.linuxde.net/wget

- 屏蔽 wget抓取网页
  ```
  设置文件头，判断是否IE和NC，
  假如不是的话就转到一个ERROR页，让下载者下的都是那个错误页
  ```

## wget抓取网站
- 注意：域名后面的 / 斜杠不能少
```
wget -r -p -k -np -nc -e robots=off http://www.example.com/mydir/

wget -r -p -k -np -nc -e robots=off http://www.qinwanghui.com/
wget -r -p -k -np -nc -e robots=off http://www.tongwang.net/
wget -r -p -k -np -nc -e robots=off https://www.wangtongtong.com/
wget -r -p -k -np -nc -e robots=off https://www.tongwang.cn/
wget -r -p -k -np -nc -e robots=off http://www.zhu-ji.com/
wget -r -p -k -np -nc -e robots=off https://www.eczn.com/

```