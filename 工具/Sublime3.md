# Sublime3
* [Sublime3 技巧](https://www.yuque.com/lulongwen/tools2/artboards/56556)
  ```
  import urllib.request,os,hashlib; h = '6f4c264a24d933ce70df5dedcf1dcaee' + 'ebe013ee18cced0ef93d5f746d80ef60'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
  ```


## 安装插件 ctrl+shif+p / install
  ```
  emmet
    - snippets.json 添加新缩写/更改现有缩写
    - preferences.json 更改emmet过滤器和操作行为
    - syntaxProfiles.json 定义如何生成 HTML或XML代码

  autofilename
  less
  sass
  jsformat
  jsminifier
  brackerHighlighter
  terminal
  open in browser
    ctrl+shif+p => install package => view in browser
    preferences => Key Building-User
    { "keys": ["f12"], "command": "open_in_browser" }
    f12 为小写 f，大写F 不起作用

  convertToutf8
  sidebarEnhancements
  autoFilename
  animate.css
  ```