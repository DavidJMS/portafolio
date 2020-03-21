$(document).ready(function(){
	var theme=$("#theme");
	var dark=$("#dark");
	var light=$("#light");
	var style=$("#style");
	var linkbiagrafia=$("#link3");
	var linkportafolio=$("#link1");
	var linkhabilidades=$("#link2");
	var sectionportafolio=$("#portafolio");
	var sectionhabilidades=$("#habilidades");
	var sectionbiografia=$("#biografia");
	var carouseldark=$("#carouseldark");	
	var carousellight=$("#carousellight");
	var nav=$("nav");
	var li1=$("#li1");
	var li2=$("#li2");
	var li3=$("#li3");
	var footer=$("footer");
	var div = $(".movetoleft");
	var contador=1;
	div.attr("class","movetoright");
	dark.click(function(){
		theme.attr("href","static/css/dark.css");
		nav.attr("class","navbar navbar-expand-lg navbar-dark bg-dark");
		footer.attr("class","bg-dark fixed-bottom");
		dark.hide();
		carouseldark.show();
		light.show();
		carousellight.hide();
	});
	light.click(function(){
		theme.attr("href","static/css/light.css");
		nav.attr("class","navbar navbar-expand-lg navbar-light bg-light");
		footer.attr("class","bg-light fixed-bottom");
		dark.hide();
		carouseldark.hide();
		light.hide();
		carousellight.show();
		dark.show();
	});
	linkbiagrafia.click(function(){
		li3.attr("class","nav-item active");
		li1.attr("class","nav-item");
		li2.attr("class","nav-item");	
		sectionhabilidades.hide();
		sectionportafolio.hide();
		sectionbiografia.show();
	});
	linkportafolio.click(function(){
		li3.attr("class","nav-item");
		li1.attr("class","nav-item active");
		li2.attr("class","nav-item");	
		sectionhabilidades.hide();
		sectionbiografia.hide();
		sectionportafolio.show();
	});
	linkhabilidades.click(function(){
		li3.attr("class","nav-item");
		li1.attr("class","nav-item");
		li2.attr("class","nav-item active");	
		sectionbiografia.hide();
		sectionportafolio.hide();
		sectionhabilidades.show();
	});
	setInterval( function updateTransition(){
  		if (contador==0) {
    		div.attr("class","movetoright");
    		contador=1;
		}else {
    		div.attr("class","movetoleft");
    		contador=0;
    	}
  		return el;
	},5000);
});