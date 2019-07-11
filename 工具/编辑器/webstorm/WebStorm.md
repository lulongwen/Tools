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


## webStorm 编译 SCSS
* 默认将CSS文件编译到scss文件所在目录
* 主要修改的是 Arguments和 Output paths to refresh

```
Arguments
  $FileName$:$FileNameWithoutExtension$.css 默认
  --no-cache $FileName$:$FileNameWithoutExtension$.css 路径 scss/inde.css
    --no-cache 不会生成 .sass-cache

  修改为
  路径在 css/index.css
  --no-cache --update $FileName$:$FileParentDir$\css\$FileNameWithoutExtension$.css

  --no-cache --update --watch $FileName$:$FileParentDir$\css\$FileNameWithoutExtension$.css


Output paths to refresh
  $FileNameWithoutExtension$.css
  $FileNameWithoutExtension$.css:$FileNameWithoutExtension$.css.map

  $FileParentDir$/css/$FileNameWithoutExtension$.css: $FileParentDir$/css/$FileNameWithoutExtension$.css.map


其他路径
Arguments
--output $ProjectFileDir$\js\$FileDirRelativeToProjectRoot$\ --compile --map $FileName$

Output paths to refresh
  $ProjectFileDir$\js\$FileDirRelativeToProjectRoot$\$FileNameWithoutExtension$.js:$ProjectFileDir$\js\$FileDirRelativeToProjectRoot$\$FileNameWithoutExtension$.map

windows Program 路径
  C:\Program Files\Ruby25-x64\bin\sass


```


* 字体推荐
  FiraCode https://github.com/tonsky/FiraCode
  Menlo
  Adobe 思源黑体 Source Han Sans

* 主题下载
  https://github.com/daylerees/colour-schemes

* theme在线预览
  http://daylerees.github.io