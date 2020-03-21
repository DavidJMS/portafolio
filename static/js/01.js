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
	var nav=$("nav");
	dark.click(function(){
		theme.attr("href","static/css/dark.css");
		nav.attr("class","navbar navbar-expand-lg navbar-dark bg-dark");
		dark.hide();
		light.show();
	});
	light.click(function(){
		theme.attr("href","static/css/light.css");
		nav.attr("class","navbar navbar-expand-lg navbar-light bg-light");
		dark.hide();
		light.hide();
		dark.show();
	});
	linkbiagrafia.click(function(){
		sectionhabilidades.hide();
		sectionportafolio.hide();
		sectionbiografia.show();
	});
	linkportafolio.click(function(){
		sectionhabilidades.hide();
		sectionbiografia.hide();
		sectionportafolio.show();
	});
	linkhabilidades.click(function(){
		sectionbiografia.hide();
		sectionportafolio.hide();
		sectionhabilidades.show();
	});
});