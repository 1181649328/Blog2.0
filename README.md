# 个人博客-Starry

一次全新的尝试，为更好。

博客地址：https://www.blog5.net.cn/

## 简介:

Starry 是一款前端基于 Nuxt+Vuetify,管理端和 server 端分别基于 vue+elementui 和 express+mongoose 的个人博客全栈项目，在设计上他主体采用 Material Design 搭配卡片式的文章展示设计，相较于第一版的个人博客[Sunset](https://github.com/1181649328/Blog "个人博客"),Starry 最大的特点是在借由 Nuxt 支持了 ssr 以后 seo 更加的友好，搭配了 vuetify 之后更是让 Starry 在移动端有非常优秀的表现。并且自主开发了评论、点赞、私密博客等功能。

但是上面都不是最重要的，我希望 Starry 能够是一款简单易上手，并且对二次开发非常友好的项目，所以这一版博客进步最大的应该是我对 Starry 的工程管理，
首先 Starry 的 git 提交粒度非常的细小，并且几乎每一次提交都有较为详细的说明。其次我开放了一个 branch 来作为新功能的开发，来保证 master 的稳定性和健壮性。
并且这一版的功能目录非常的清晰，在未来也会持续的优化，能让开发者较为平滑的上手和二次开发。

在开发的时候很多配置项，我都刻意的没有写死，我希望能够通过文件或者开发 Api 进行界面配置，为的就是降低上手难度。在后续项目进入稳定阶段之后会对工程目录、项目运行等有一个说明。

如果可以的话，请给我点一个 Star，一人一个，就是 Starry 了 ✨✨✨。

## 技术栈：

    前端：nuxt+vuetify
    管理端：vue+elementUi
    服务端：node(12.13.X)Express+mongoose

## 功能点：

- 所有的功能点都是自己写的 ^ ^

  1.博客发布、删除、修改 、查询 √  
  2.图片 oss 对象存储 √  
  3.私密博客 √  
  4.标签云功能（对博客添加标签，能根据标签查找博客）√  
  5.条件查询功能（可以输入条件进行查询 √  
  6.评论功能 √  
  7.点赞功能 √  
  8.邮件通知，全局消息组件 √  
  9.用户创建，删除，编辑，登录，登录 SVG 图形验证码 √  
  10.全端 https √

## 开发日记：

4/12：开发博客发布和博客列表等后端管理功能。√  
4/21：抽空完成了文件上传功能，用了阿里云的 oss 对象存储 √。  
4/23：着手私密博客功能开发 √。  
5/3：开发条件查询 Api，既要适用于前端的用户查询，又要适应后端的条件查询 √。  
5/4：开发标签云功能 √。  
5/11：开发评论功能（很久没更新，去变强了，回来就修复了一个困扰很久的 bug ^ ^） √  
5/14：开始着手开发前端功能了。  
5/20：设计和开发导航栏（上手 Nuxt 和 Vuetify，边学边做，冲！）  
5/25：最近这两天写页面搞得我怀疑自己是不是个前端 Zzzzz  
6/13：摸索了几天 nuxt 和 vuetify 也算是上手，布局也基本搞定了，数据也能请求了，接下来是完成 markdown 渲染，博客信息统计。  
6/23：一直在做组件的封装，评论组件就快要完成了。评论和点赞做完之后就可以尝试上线了。  
7/10：正在做全局消息功能，邮件通知，消息通知等。  
7/11：基本的功能已经差不多了，目前在做上线准备，这次打算用国内的服务器，所以需要备案，服务器已经买好了，就等备案通过了就可以上线。  
7/14：备案完成，正在部署。 √  
7/15：目前已经初步部署完成了，虽然未必是最佳实践，后续就是打磨功能了。  
7/16: 开发后端管理系统的用户模块和权限校验模块 √  
7/18-19: 优化用户模块操作流程，封装 db 操作，添加权限校验模块,都是为了初步上线做的准备，虽然很多功能不完善，甚至有些功能还没有，但是已经达到了一个里程碑了。一边运行一边添加功能我觉得比闭门造车好很多，加油，加油。  
8/3：这段时间更新还是比较频繁，目的是为了解决 nuxt 搭配 vuetify 导致界面上显示出现的各种问题，比如代码高亮错乱，markdown 语法解析失效等，好在最后还是解决了，还修复了若干 bug。
