# WebStorm
* [WebStorm 技巧](https://www.yuque.com/lulongwen/tools2/artboards/56561)

  ```
  提示忽略大小写
  Settings -->Code Completion-->case sensitive Completion-->选择none

  设置文件编码
  Settings-->File Encodings--> 都选择为 utf-8

  下载主题 http://phpstorm-themes.com
  theme后缀 .xml 文件,放到
  C:\Users\longwen\.WebStorm2017.1\config\colors
  重启webstorm
  File > Settings > Editor > Colors & Fonts

```


## webStorm 编译Sass
```
$FileName$:$FileNameWithoutExtension$.css

修改为
--no-cache --update --watch $FileName$:$FileParentDir$\css\$FileNameWithoutExtension$.css

$FileNameWithoutExtension$.css:$FileNameWithoutExtension$.css.map

```


* 字体推荐
  FiraCode https://github.com/tonsky/FiraCode
  Menlo
  Adobe 思源黑体 Source Han Sans

* 主题下载
  https://github.com/daylerees/colour-schemes

* theme在线预览
  http://daylerees.github.io