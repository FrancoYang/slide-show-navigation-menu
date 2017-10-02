//设置全局变量
var index=0;
var index2=0;
var timer=null;
var pic=document.getElementById("banner").getElementsByTagName("div");
var len=pic.length;
var dot=document.getElementById("dots").getElementsByTagName("span");
var prev=document.getElementById("prev");
var nextt=document.getElementById("next");
var menu=document.getElementById("menu-content");
var menuItems=menu.getElementsByClassName("menu-item");//IE8及以下浏览器不支持
var subMenu=document.getElementById("sub-menu");
var innerBox=subMenu.getElementsByClassName("inner-box");


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

	//制作导航菜单
	for(var m=0;m<menuItems.length;m++){
	menuItems[m].setAttribute("data-index",m);//这样更规范，直接用index等自定义属性会有兼容性问题

	menuItems[m].onmouseover=function(){
		subMenu.className="sub-menu";
		var idx=this.getAttribute("data-index");
		for(var j=0;j<innerBox.length;j++){
			innerBox[j].style.display="none";
			menuItems[j].style.background="none";
		}
		menuItems[idx].style.background="rgba(0,0,0,0.1)";
		innerBox[idx].style.display="block";

		}
	}

	menu.onmouseout=function(){
		subMenu.className="sub-menu hide";
	}

	subMenu.onmouseover=function(){
		this.className="sub-menu";
	}
	subMenu.onmouseout=function(){
		this.className="sub-menu hide";
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
