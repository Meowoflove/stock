// 声明 变量  =  父级。文章。中的 iframe 节点
// var parentIframe = parent.document.querySelector("iframe");
// window.onload = function(){
//     //设置 父节点。高度 = 文档。根元素。的高度
//      parentIframe.height = document.documentElement.scrollHeight;
//  };

 const lis = document.querySelectorAll(".wzul li")
 // mouse enter  鼠标移入     mouse leave 鼠标移出      
 for(let i=0;i<lis.length;i++){
     lis[i].onmouseenter = ()=>{
         lis[i].style.animation= "suojin .5s"
         lis[i].style.paddingLeft= "30px"
     }

     lis[i].onmouseleave = function(){
         lis[i].style.animation= "hl .5s"
         lis[i].style.paddingLeft= "0px"
     }
 }