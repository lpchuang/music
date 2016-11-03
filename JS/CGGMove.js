function CGGMove(obj,attr,target,cFn){
	clearInterval(obj.CGGTimer);
	obj.CGGTimer = setInterval(function(){
		var currentValue = getStyle(obj , attr) || 0;
		var speed = (target - currentValue) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(attr == "opacity" || attr == "filter"){
			if(target < 1 && target > 0){
				target * 100;
			}
			speed = (target - currentValue) / 8;
			obj.style[attr] = (currentValue + speed) / 100;
			obj.style[attr] = "alpha(opacity = "+(currentValue + speed)+")";
			if(currentValue == target){
				clearInterval(obj.CGGTimer);
				if(cFn){
					cFn();
				}
			}
		}else{
			if(speed < 0){
				if(currentValue <= target){
					clearInterval(obj.CGGTimer);
					if(cFn){
						cFn();
					}
				}else{
					obj.style[attr] = currentValue + speed + "px";
				}
			}else{
				if(currentValue >= target){
					clearInterval(obj.CGGTimer);
					if(cFn){
						cFn();
					}
				}else{
					obj.style[attr] = currentValue + speed + "px";
				}
			}
		}
	},30)
}

function getStyle(obj,attr){
	var a = "";
	if(obj.currentStyle){
		a = obj.currentStyle(attr);
	}else{
		a = window.getComputedStyle(obj,null)[attr];
	}
	if(attr == "opacity" || attr == "filter"){
		a *= 100;
	}
	return parseInt(a);
}