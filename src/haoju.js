﻿/*『书摘。』好句插件 by fly6022*/
/* 本插件开源遵循 MIT 协议 https://book.fly6022.fun/ */

function getdata () {
    var url = ["/src/haoju/1.json"]; // 数据库
    var request = new XMLHttpRequest();
        request.open("GET", url); // 采用GET方式
        request.send(null);
        request.onload = function() {
            if (request.status == 200) {
                hdata = eval(JSON.parse(request.responseText));
                }
            else {
                console.error("ERROR!请求书摘数据库时发生错误！")
                }
            }
    }

window.onload = getdata();
setTimeout("getdata()","0");

function dealdata () {
    var len=538;// 好句数量（小于等于数据库数据总量）
    var rnd=Math.floor(Math.random()*len);// 根据好句数量生成随机值
    document.getElementById("haoju").innerHTML = "<center>" + "“" + hdata.haoju_1[rnd].haoju + "”" + "<br>——" + hdata.haoju_1[rnd].author + "&nbsp;" + hdata.haoju_1[rnd].from + "</center>";
}

setTimeout("dealdata()","50");
setInterval("dealdata()","15000"); // 调用数据源