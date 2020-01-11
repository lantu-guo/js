let liList=document.getElementsByTagName('li');
let emCount=document.querySelectorAll('.info em');
    console.log(emCount);
//console.log(liList);

for(var i=0;i<liList.length;i++){
    //代表每一个li
    addClick(liList[i]);
}
function addClick(){
    let addNum=liList[i].getElementsByTagName('i');
    let em=liList[i].getElementsByTagName('em')[0];
    let strongs=liList[i].getElementsByTagName('strong');
    console.log(addNum,em,strongs);
    addNum[0].onclick=function (){
        //console.log('-');
        if(em.innerHTML<=0){
            em.innerHTML=0;
        }
        else{
            em.innerHTML=Number(em.innerHTML)-1;
        }    
        strongs[1].innerHTML=parseFloat(strongs[0].innerHTML)*em.innerHTML+'元';
        count();
    }
    addNum[1].onclick=function (){
        console.log('+');
        em.innerHTML=Number(em.innerHTML)+1;
        strongs[1].innerHTML=em.innerHTML*parseFloat(strongs[0].innerHTML)+'元';
        count();
    }

}

function count(){
    let tatol=null;
    let 
}