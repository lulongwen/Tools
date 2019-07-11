# PHPStorm
  * 在不失功能的前提下，尽可能简单
  * [PHPStorm 技巧](https://www.yuque.com/lulongwen/tools2/artboards/55291)
  ```
  Alt + 1 折叠左侧菜单 sidebar
  Ctrl + E 多个文件之间跳转，不用鼠标点击每个tab
  Ctrl + F4多个文件之间跳转

  Ctrl+Alt+S 打开Settings
  ctrl+shift+A 快捷搜索
  ```


## PHPStorm 编译 SCSS
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
