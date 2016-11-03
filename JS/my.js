/**
 * Created by super创创 on 2016/8/17.
 */
window.onload = function(){
    var images  = document.getElementsByTagName('img');
    var lunbotu = document.getElementById('lunbotu');
    var lunbotufather = document.getElementById('lunbotufather');
    for(var i = 0; i < images.length; i++){
        var current = images[i];
        current.style.width = Math.floor((lunbotu.offsetWidth-80)/2) + "px";
        current.style.height = lunbotu.offsetHeight + "px";
    }
    lunbotufather.style.width = current.offsetWidth*6 + "px";
    lunbotufather.style.left = Math.ceil(-1*current.offsetWidth/2) + "px";
    var index = 1;
    var currentImgWidth = images[index].offsetWidth;
    //复制节点
    //var array = [];
    //for(var i = 0; i < 2; i++){
    //}
    var time = setInterval(function(){
        var curIndex = index % 5;
        CGGMove(lunbotufather,"left",-1*curIndex*currentImgWidth-Math.ceil(currentImgWidth/2),function(){
            if(index == 4){
                index = 1;
                lunbotufather.style.left = -1 * currentImgWidth/2 + "px";
            }
        });
        index++;
    },3000)
}