# 『书摘。』好句

『书摘。』是（Github：fly6022）于2019年8月29日基于JavaScript开发的书籍好句摘录插件，收录了古今中外名著/影视/动漫中的好句。

## 特性

- 随时更新
- 可调用
- 使用JavaScript开发
- 自适应
- 体积小（仅60KB）

[插件源代码](https://book.fly6022.fun/note/haoju.js)
[官方网站](https://book.fly6022.fun/)
[开发者博客](https://fly6022.fun/)

## 调用

- 使用html代码直接引用。
```html
  <script src="https://book.fly6022.fun/note/haoju.js"></script>
```

## 贡献

1. 将『书摘。』[Down](https://book.fly6022.fun/note/haoju.js)下来，之后打开任意代码编辑器编辑。**建议编辑前备份！**

2. 确保书摘好句段落及文字格式与原插件一致。<br>**段落及文字格式：（注意：下面代码中，破折号与 #作者# 及 #作者# 与 #作品名称# 之间有空格！）**
```javascript
   txt[#好句编号#]="“#好句内容（不包括作者/作品名称）#”<br>—— #作者# #作品名（注意加书名号）#";
```


- **标准编辑格式：**
```javascript
   txt[0]="“怕什么？一切要来的都得来，不必怕。”<br> —— 沈从文 《边城》";
```

3. 编辑完毕后记得修改“最后一次更新时间”及“书摘数量”参数！（大概在插件源代码第2、3行）<br>
```javascript
   /*最后一次更新时间:2020-1-4 16:58:14*/
   var len=337;//书摘数量
```
4. 测试。将插件在本地试运行，检查是否可正常运行，如果不能，则是语法错误。

5. 提交。将编辑后的插件连同你的联系方式发至 `fly6022@qq.com` 。

## 开源许可

MIT

## 其它

[查看原文](https://github.com/Book-Excerpts/haoju/blob/master/README.md)
