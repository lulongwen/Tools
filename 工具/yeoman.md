# yeoman核心特点分析
![Yeoman](images/yeoman.jpg)


## yeoman的好处
* yeoman 插件式，可交互的脚手架工具
* yeoman安装，generrator 安装和使用
* 编写自己的脚手架生成器 yeoman generator


## Yeoman 是什么
yeoman工作流包括了三个类型的工具
  * yo 脚手架工具
  * gulp 自动构建工具
  * npm 包管理工具
  * 这三个工具都是单独开发和维护的，组合在一起，作为规定工作流程的一部分


## Yeoman如何使用
Yeoman 的重要之处在于把各种不同的工具整合起来，形成一套完整的前端开发的工作流程。
使用 Yeoman 之后的开发流程可以分成如下几个基本的步骤。

1. 在开发的最初阶段需要确定前端的技术选型。这包括选择要使用的前端框架。在绝大部分的 Web 应用开发中，都需要第三方库的支持。
2. 有的应用可能只使用 jQuery，有的应用会增加 Twitter Bootstrap 库，而有的应用则会使用 AngularJS。在确定了技术选型之后，就可以在 Yeoman 中查找相应的生成器插件。
3. 基于常见库的生成器都可以在社区中找到。比如使用 AngularJS、Backbone、Ember 和 Knockout 等框架的生成器。

4. 所有的生成器都使用 npm 来进行安装。生成器的名称都使用“generator-”作为前缀，如“generator-angular”、“generator-backbone”和“generator-ember”等。
5. 安装完成之后，通过 yo 命令就可以生成应用的骨架代码，如“yo angular”用来生成基于 AngularJS 的应用骨架。
6. 生成的应用骨架中包含了一个可以运行的基本应用。只需要通过“grunt server”命令来启动服务器就可以查看。
7. 应用的骨架搭建完成之后，把生成的代码保存到源代码仓库中。团队可以在这个基础上进行开发。开发中的一些常用任务可以通过 Yeoman 来简化。
8. 当需要引入第三方库时，通过 Bower 来搜索并添加。
