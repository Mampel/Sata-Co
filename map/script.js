$(function(){
	var pics = $('div.pixel'),
		itop = 0, 
		ileft = 0, 
		n = 35,
		iwidth = pics.width(),
		iheight = pics.height();

	position = function() {
		if(ileft == (n*iwidth)) {ileft=0;  itop += iheight; }
		$(this).css({top:itop, left:ileft});
		ileft += iwidth;
	}
 	pics.each(position);

	var toggle = function(elm){
		var status = elm.attr("status");
		if(status == "noselect"){
			elm.css({'background-color': 'rgba(0, 0, 92, 0.58)'});
			elm.append('<input type="hidden" name="section[]" />');
			elm.attr("status","select");
		}
		else if(status == "select"){
			elm.css({'background-color': 'rgba(0, 0, 0, 0.1)'});
			elm.empty();
			elm.attr("status","noselect");
		}
	}
	
	// for select pixel with right click 
	$('div.pixel').bind("contextmenu",function(e){
		toggle($(this));
		return false;
	}).mouseover(function(e){ // for multi select pixels with ctrl key 
		if(e.ctrlKey) toggle($(this));
	}); 
	
	// for cancel zooming with Esc key
	document.onkeydown = function(e) {
		e = e || window.event;
		if(e.keyCode == 27) $('div.map').css({'-webkit-transform': 'translate(0px, 0px) rotate(0rad) skewX(0rad) scale(1, 1)'});
	};
	
});



