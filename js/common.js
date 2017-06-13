 
//文本提示
jQuery(document).ready(function(){

			jQuery("#serch .txt,#demand .txt").each(function(){
					var thisVal=jQuery(this).val();
				
					if(thisVal!=""){
							jQuery(this).siblings("span").hide();
						}else{
							jQuery(this).siblings("span").show();
						}
			
					jQuery(this).focus(function(){
							jQuery(this).siblings("span").hide();
						}).blur(function(){
								var val=jQuery(this).val();
								if(val!=""){
									jQuery(this).siblings("span").hide();
								}else{
									jQuery(this).siblings("span").show();
								}	
						});
				})


 })
 

//下拉
$(document).ready(function(){

$("#jq_topmenu li").hover(function(){$(this).addClass("hover").find("div.jq_hidebox").show();},function(){$(this).removeClass("hover").find("div.jq_hidebox").hide();});

$("#jq_car li").hover(function(){$(this).addClass("hover").find("div.jq_hidebox").show();},function(){$(this).removeClass("hover").find("div.jq_hidebox").hide();});

$(".con_list .top span").hover(function(){$(this).addClass("hover").find(".hidebox").show();},function(){$(this).removeClass("hover").find("hidebox").hide();});
 
 
 
}); 


/*function getTop(){
	var top = $(document).scrollTop();
	if($(document).scrollTop()>280){
	 
	 $("#top-nav").css('display','none');
	 } else {
	  $("#top-nav").fadeIn();	   
	}
	setTimeout(getTop);
}
 
getTop();*/

//tab切换
;(function($){
	
$.fn.tabso=function( options ){

	var opts=$.extend({},$.fn.tabso.defaults,options );
	
	return this.each(function(i){
		var _this=$(this);
		var $menus=_this.children( opts.menuChildSel );
		var $container=$( opts.cntSelect ).eq(i);
		
		if( !$container) return;
		
		if( opts.tabStyle=="move"||opts.tabStyle=="move-fade"||opts.tabStyle=="move-animate" ){
			var step=0;
			if( opts.direction=="left"){
				step=$container.children().children( opts.cntChildSel ).outerWidth(true);
			}else{
				step=$container.children().children( opts.cntChildSel ).outerHeight(true);
			}
		}
		
		if( opts.tabStyle=="move-animate" ){ var animateArgu=new Object();	}
			
		$menus[ opts.tabEvent]( function(){
			var index=$menus.index( $(this) );
			$( this).addClass( opts.onStyle )
				.siblings().removeClass( opts.onStyle );
			switch( opts.tabStyle ){
				case "fade":
					if( !($container.children( opts.cntChildSel ).eq( index ).is(":animated")) ){
						$container.children( opts.cntChildSel ).eq( index ).siblings().css( "display", "none")
							.end().stop( true, true ).fadeIn( opts.aniSpeed );
					}
					break;
				case "move":
					$container.children( opts.cntChildSel ).css(opts.direction,-step*index+"px");
					break;
				case "move-fade":
					if( $container.children( opts.cntChildSel ).css(opts.direction)==-step*index+"px" ) break;
					$container.children( opts.cntChildSel ).stop(true).css("opacity",0).css(opts.direction,-step*index+"px").animate( {"opacity":1},opts.aniSpeed );
					break;
				case "move-animate":
					animateArgu[opts.direction]=-step*index+"px";
					$container.children( opts.cntChildSel ).stop(true).animate( animateArgu,opts.aniSpeed,opts.aniMethod );
					break;
				default:
					$container.children( opts.cntChildSel ).eq( index ).css( "display", "block")
						.siblings().css( "display","none" );
			}
	
		});
		
		$menus.eq(0)[ opts.tabEvent ]();
		
	});
};	

$.fn.tabso.defaults={
	cntSelect : ".content_wrap",
	tabEvent : "mouseover",
	tabStyle : "normal",
	direction : "top",
	aniMethod : "swing",
	aniSpeed : "fast",
	onStyle : "current",
	menuChildSel : "*",
	cntChildSel : "*"
};

})(jQuery);

 

 