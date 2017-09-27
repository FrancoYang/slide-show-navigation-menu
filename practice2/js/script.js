var index=0;
var index2=0;
var timer=null;
var pic=document.getElementById("banner").getElementsByTagName("div");
var len=pic.length;
var dot=document.getElementById("dots").getElementsByTagName("span");
var prev=document.getElementById("prev");
var nextt=document.getElementById("next");


function slideImg(){
	var main=document.getElementById("main");
	//鼠标滑过时清除定时器
	main.onmouseover=function(){
		clearInterval(timer);
	}

	//鼠标离开后继续定时器
	main.onmouseout=function(){
		timer=setInterval(function(){
			index++;
			index%=len; //此处等价于if(index>=len){index=0;}
			changeImg();

		}, 5000)
	}

main.onmouseout(); //使用户一进浏览器就自动触发轮播定时器

// 给各圆点绑定切换图片的功能
for(var j=0;j<len;j++){
	dot[j].index2=j; //或者用id来代替index2就可以少声明一个变量
	dot[j].onclick=function(){
		index=this.index2;
		changeImg();
	}
	
}

//给上一张和下一张按钮添加功能
next.onclick=function(){
	index++;
	index%=len;
	changeImg();
}

prev.onclick=function(){
	index--;
	if(index<0){
		index=len-1;
	}
	changeImg();
}


}



//封装切换图片的方法
function changeImg(){
	for(var i=0;i<len;i++){
		pic[i].style.display="none";
		dot[i].className="";

	}
	pic[index].style.display="block";
	//先把所有div隐藏，再把当前div显示

	dot[index].className="active";
	//先把所有点的填充取消，再使当前的点增加active的class使点变色
}



slideImg();
