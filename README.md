# 『书摘。』好句

『书摘。』是（Github：fly6022）于2019年8月29日基于JavaScript开发的书籍好句摘录插件，收录了古今中外名著/影视/动漫中的好句。

## 特性

- 随时更新
- 可随处调用
- 使用JavaScript开发
- 体积小（仅74KB）
- 开放源代码

[插件源代码](https://book.fly6022.fun/note/haoju.js)
[官方网站](https://book.fly6022.fun/)
[开发者博客](https://fly6022.fun/)

## 调用

- 使用html代码直接引用。

```html
  <!-- html -->
  <div id="haoju" class="shuzhai"></div>
                  
  <!-- Javascript -->
  <script src="https://book.fly6022.fun/note/haoju.js"></script>
                  
  <!-- CSS -->
  <link rel="stylesheet" type="text/css" href="https://book.fly6022.fun/note/css/shuzhai.css">
```

## 使用者

- [幻空盒子 - HK Box](http://www.hkbox.club/):幻空盒子是一款提供给MC玩家但不限于MC玩家的多功能盒子，是SRF技术部旗下品牌之一，由幻空Hub技术团队开发。我们的宣传词：“创你所想，造你之梦”。

## 贡献

1. 将『书摘。』好句插件源码[Down](https://github.com/Book-Excerpts/haoju.git)下来，之后打开任意代码编辑器编辑。**强烈建议编辑前备份！**

2. 确保书摘好句段落及文字格式与原插件一致。<br>**段落及文字格式：（注意：下面代码中，破折号与 #作者# 及 #作者# 与 #作品名称# 之间有空格！）**

```javascript
   haoju[#好句编号#]="“#好句内容（不包括作者/作品名称）#”<br>—— #作者# #作品名（注意加书名号）#";
```


- **标准编辑格式：**

```javascript
   haoju[0]="“怕什么？一切要来的都得来，不必怕。”<br> —— 沈从文 《边城》";
```

3. 编辑完毕后记得修改“最后编辑者”、“最后更新时间”以及“书摘数量”参数！（大概在插件源代码第2、3行）

```javascript
/* 最后编辑者：fly6022 */
/*最后更新时间:2020-1-9 15:49:23*/
var len=397;//书摘数量
```
4. 测试。点击根目录的“test.html”将插件在本地运行，检查是否可正常运行，如果不能，则是语法错误，需要再次修改。

5. 提交。将编辑后的插件连同你的昵称和联系方式发至我的邮箱： `fly6022@qq.com`，由我检查无误之后，我会将编辑者的昵称放置到『书摘。』官方网站的贡献者名单中 。

## 开源协议

『书摘。』好句插件开源遵循 MIT 协议。

## 其它

[查看原文](https://github.com/Book-Excerpts/haoju/blob/master/README.md)