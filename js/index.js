$(function(){
	var icon_a  = $("#icon-a"),
		cehua_a = $(".cehua-a"),
		a       = true,
		footer  = $(".footer"),
		font    = $(".font"),
		aaa     = $(".aaa"),
		outsite = $(".outsite"),
		lunbo   = $(".lunbo")
//	首页右拉框 
	$(document).on('touchend',function(){
		icon_a.css('color','#fff')
		cehua_a.css({"transform":"translateX(2rem)","opacity":"0"});
	})
	icon_a.on("touchend",function(){
		
		if(a){
			icon_a.css('color','#FFCB0A')
			cehua_a.css({"transform":"translateX(0)","opacity":"1"});
			a = !a
		}else{
			a = !a;
			icon_a.css('color','#fff')
			cehua_a.css({"transform":"translateX(2rem)","opacity":"0"});
		}
		return false;
	})
//	底部选项卡
	$(".footer").on("touchend",function(){
		$(".aaa").css("display","block");
//		lunbo.css('opacity','0')
		$(".font").css("display","none");
		$(this).find(".aaa").css("display","none");
//		$(this).find('.lunbo').css('opacity','1')
		$(this).find(".font").css("display","block")
	})
	$(".footer").eq(0).on('touchend',function(){
		$('.lunbo-d').css('opacity','1')
	})
	$(".footer").eq(1).on('touchend',function(){
		$('.lunbo-a').css('opacity','1')
	})
	$(".footer").eq(2).on('touchend',function(){
		$('.lunbo-c').css('opacity','1')
	})
	$(".footer").eq(3).on('touchend',function(){
		$('.lunbo-c').css('opacity','1')
	})
//	滑动
		var flag=true;
		var down;
		$(document).on("touchstart",lunbo,function(e){
			down=e.originalEvent.changedTouches[0].clientX;
		})
		var n=0;
		var next=0;
	$(document).on("touchmove",lunbo,function(e){
			var up=e.originalEvent.changedTouches[0].clientX;
			if(up-down>30){
//				if(flag==false){
//					return;
//				}
//				flag=false
				next=n+1;
				if(next>=lunbo.length){
					next=0;
				}
				lunbo.eq(next).css('opacity','0')
//				$(this).addClass("done");
				lunbo.eq(n).css("opacity","0").end().eq(next).css("opacity","1");
			}
			if(up-down<-30){
//				if(flag==false){
//					return;
//				}
//				flag=false;
				next=n-1;
				if(next<0){
					next=lunbo.length-1;
				}
				lunbo.eq(next).css('opacity','0')
				lunbo.eq(n).css("opacity","0").end().eq(next).css("opacity","1");
//				todos[$(this).index()].state=0;
//				$(this).removeClass("done");
//				flag=true;
			}
			n=next;
//			localStorage.todos=JSON.stringify(todos);
		})
	
})
