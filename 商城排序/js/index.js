//console.log(utils);
//验证是否引进成功，如果输出对象，就引入对了

//请求数据
// 利用AJAX请求数据
//创建一个AJAX实例
//打开一个请求，利用get请求基于同步完成请求
//监听服务器的返回（请求）状态，如果状态码是4并且请求状态是200（以2开头的正则），那就说明请求成功
//发送这个请求

let cardBox=document.getElementById('cardBox');
let navList=document.getElementsByTagName('a');

let data = null;    //接受请求来的数据
let xhr = new XMLHttpRequest    //创建AJAX实例
xhr.open('get', './json/product.json', false);
//打开一个请求链接，第一个是get请求，第二个是路径，第三个false是同步状态
xhr.onreadystatechange = function () {
    //监听服务请求状态
    if (xhr.status === 200 && xhr.readyState === 4) {
        //接受请求数据
        data = xhr.responseText;
    }
}
xhr.send();   //发送请求
//console.log(data);
data=JSON.parse(data);   //获取到的数据是字符串类型，要用json转成对象
//console.log(data);

// 把数据渲染到页面中
renderHtml();
function renderHtml(){
    let htmlStr=``;
    data.forEach((item)=>{
        //用模版字符串拼接
        //将li下的时间、热度、价格放在行内，相当于setAttribute，下边获取要用getAttribute
        htmlStr+=`
    <li data-time="${item.time}" data-hot="${item.hot}" data-price="${item.price}">
        <img src="${item.img}" alt="">
        <span>标题：${item.title}</span>
        <span>上架时间：${item.time}</span>
        <span>热度：${item.hot}</span>
        <span>价格：${item.price}</span>
    </li>`

    })
    console.log(htmlStr);
    //将数据插入到页面中
    cardBox.innerHTML=htmlStr;
}

let cardList=document.getElementsByTagName('li');
console.log(cardList);
cardList=utils.toArray(cardList);   //转数组
console.log(cardList);
//获取页面中所有的li
for(var i=0;i<navList.length;i++){
    //给页面的3个a标签绑定点击事件
    //给每个li一个自定义属性i
    navList[i].index=i;
    navList[i].flag=-1;
    navList[i].onclick=function(){
        //点击进行排序，call里的this指向当前元素
        sortList.call(this);
        clearArrow.call(this);
        addArrow.call(this);
    }
}
function sortList(){
    //this-->当前的元素，点谁就是谁
    this.flag*=-1;     //将标识定义在每一个a身上
    let dataAry=['data-time','data-hot','data-price'];
    cardList.sort((a,b)=>{
        //this-->当前的元素，当前的a标签(因为箭头函数没有this，去上一级作用域找)
        //在sort里，a和b代表每一个li，不能直接运算，把元素放在数组里边，获取元素属性
        a=a.getAttribute(dataAry[this.index]);
        b=b.getAttribute(dataAry[this.index]);
        //将dataAry数组里的第一项（上架时间）进行判断，如果点击的是索引是0，说明是点击的是商家时间，将时间里的-替换成空字符串在进行运算
        if(this.index===0){
            a=a.replace(/-/g,'');
            b=b.replace(/-/g,'');
        }
        return (a-b)*this.flag;    //用标识改变排序的顺序
    })
    for(var i=0;i<cardList.length;i++){
        //把排序后的样式插入到页面中
        cardBox.appendChild(cardList[i]);
    }
}
function clearArrow(){
    console.log(navList[0].children)
    for(var i=0;i<navList.length;i++){
        if(this!==navList[i]){
            navList[i].children[0].classList.remove('bj');
            navList[i].children[1].classList.remove('bj');
            navList[i].flag=-1;
        }
    }
}
function addArrow(){
    let up=this.children[0];
    let down=this.children[1];
    if(this.flag>0){
        up.classList.add('bj');
        down.classList.remove('bj');
    }
    else{
        up.classList.remove('bj');
        down.classList.add('bj');
    }
}