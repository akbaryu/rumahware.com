/*
 * 	Easy Zoom 1.0 - jQuery plugin
 *	written by Alen Grakalic	
 *	http://cssglobe.com/post/9711/jquery-plugin-easy-image-zoom
 *
 *	Copyright (c) 2011 Alen Grakalic (http://cssglobe.com)
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *	and GPL (GPL-LICENSE.txt) licenses.
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */
  
(function($){$.fn.easyZoom=function(_1){var _2={id:"easy_zoom",parent:"body",append:true,preload:"Loading...",error:"There has been a problem with loading the image."};var _3;var _4=new Image();var _5=false;var _6=true;var _7;var w1,w2,h1,h2,rw,rh;var _8=false;var _1=$.extend(_2,_1);this.each(function(){_3=this;var _9=this.tagName.toLowerCase();if(_9=="a"){var _a=$(this).attr("href");_4.src=_a+"?"+(new Date()).getTime()+" ="+(new Date()).getTime();$(_4).error(function(){_6=false;});_4.onload=function(){_5=true;_4.onload=function(){};};$(this).css("cursor","pointer").click(function(e){e.preventDefault();}).mouseover(function(e){_c(e);}).mouseout(function(){_d();}).mousemove(function(e){_b(e);});}});function _c(e){_d();var _e=$("<div id=\""+_1.id+"\">"+_1.preload+"</div>");if(_1.append){_e.appendTo(_1.parent);}else{_e.prependTo(_1.parent);}if(!_6){_f();}else{if(_5){_10(e);}else{_11(e);}}};function _11(e){if(_5){_10(e);clearTimeout(_7);}else{_7=setTimeout(function(){_11(e);},200);}};function _10(e){_8=true;$(_4).css({"position":"absolute","top":"0","left":"0"});$("#"+_1.id).html("").append(_4);w1=$("img",_3).width();h1=$("img",_3).height();w2=$("#"+_1.id).width();h2=$("#"+_1.id).height();w3=$(_4).width();h3=$(_4).height();w4=$(_4).width()-w2;h4=$(_4).height()-h2;rw=w4/w1;rh=h4/h1;_b(e);};function _d(){_8=false;$("#"+_1.id).remove();};function _f(){$("#"+_1.id).html(_1.error);};function _b(e){if(_8){var p=$("img",_3).offset();var pl=e.pageX-p.left;var pt=e.pageY-p.top;var xl=pl*rw;var xt=pt*rh;xl=(xl>w4)?w4:xl;xt=(xt>h4)?h4:xt;$("#"+_1.id+" img").css({"left":xl*(-1),"top":xt*(-1)});}};};})(jQuery);
