/**
 * Created by super´´´´ on 2016/8/17.
 */
window.onload = function(){
    var ul1 = document.getElementById("ul1");
    var div1 = document.getElementById("sectiondiv");
    var img = document.getElementsByTagName("img");
    for(var i = 0; i < img.length; i++){
        var current = img[i];
        current.style.width = Math.floor((div1.offsetWidth-80)/2) + "px";
        current.style.height = div1.offsetHeight + "px";
    }
    ul1.style.width = current.offsetWidth*7 + "px";
    ul1.style.left = Math.ceil(-1*current.offsetWidth/2) + "px";

    var index = 1;
    var currentImgWidth = img[index].offsetWidth;
    var time = setInterval(function(){
        var currentImg = index % 5;
        CGGMove(ul1,"left",-currentImgWidth*currentImg-(currentImgWidth/2));
        index++;
    },3000)
}