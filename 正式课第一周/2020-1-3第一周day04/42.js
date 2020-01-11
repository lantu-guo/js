/* 
url 参数截取
var str="http://www.zhufengpeixun.cn?name=lili&id=18#123";

search: "?name=lili&id=18"
hash: "#123"
*/

var str="http://www.zhufengpeixun.cn?name=lili&id=18#123";

function urlParams(str){
   var a=document.createElement("a");
   var obj={};
   a.href=str;
   //search: "?name=lili&id=18"===>name=lili&id=18
   var search=a.search.substring(1);
   //hash: "#123"===>123
   var hash=a.hash.substring(1);
   obj.hash=hash?hash:"";    //obj{hash:123}
   if(search){
        //[name=lili,id=18]
        var searchAry=search.split("&");
        for(var i=0;i<searchAry.length;i++){
            //name=lili
            var item=searchAry[i];
            //[name,lili]
           var key=item.split("=")[0];
           var value=item.split("=")[1];
           obj[key]=value;
        }
   }
   return obj;
}
var res=urlParams(str);
// var res=urlParams(str);
// console.log(res.name);
// console.log(res.id);
// console.log(res.hash);