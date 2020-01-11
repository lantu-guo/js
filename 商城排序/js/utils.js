// let utils = {
//     toArray: function (likeAry) {
//         let ary = [];
//         try {
//             ary = Array.prototype.slice.call(likeAry);
//         } catch (e) {
//             for (var i = 0; i < likeAry.length; i++) {
//                 ary.push(likeAry[i])
//             }
//         }
//         return ary;
//     }
// }

// 高级单例模式
let utils = (function () {
    function toArray(likeAry) {   //将类数组转数组
        let ary = [];
        try {
            ary = Array.prototype.slice.call(likeAry);   //不传参就是克隆数组
        } catch (e) {
            //console.log(e);    //输出报错信息error，console.dir(e);查看报错的详细信息
            for (var i = 0; i < likeAry.length; i++) {
                ary.push(likeAry[i]);
            }
        }
        return ary;
    }

    function mean() {    //求数组的平均数
        console.log(toArray)
        let ary = toArray(arguments)
        ary.sort((a, b) => a - b);
        ary.pop();
        ary.shift();
        return (eval(ary.join('+')) / ary.length).toFixed(2)
    }

    function getMax(ary){      //求数组中的最大值
        try{
            console.log(Math.max.apply(null,ary)); 
        }
        catch(e){
            console.log(e);
            for (var i = 0; i < ary.length - 1; i++) {
                if (ary[i] > ary[i + 1]) {
                    let temp = ary[i];
                    ary[i] = ary[i + 1];
                    ary[i + 1] = temp;
                }
            }
            console.log(ary[ary.length - 1]);
        }
    }


    return {
        toArray: toArray,    //属性名和属性值如果一样，属性值可以省略ES6的语法
        mean: mean,
        getMax:getMax
    }
})()
