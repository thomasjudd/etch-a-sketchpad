//document.write("Hello, World from javascript");

var outerDivOpen = "<div class='outer'>";
//var div = document.createElement("div");
var divClose = "</div>";
var innerDiv = "<div class='inner'></div>";
var containerOpen = "<div id='container'>";

document.write(containerOpen);
for(i = 0; i < 16; i++){
    document.write(outerDivOpen);
    for(j = 0; j < 16; j++){
        document.write(innerDiv);
    }
    document.write(divClose);
}
document.write(divClose);

document.write("<div id='clear'>Clear!</div>");

$(document).ready(function(){
	$('.inner').on('mouseenter', function(){
		$(this).css({'background-color':'red'});
	});
	$('#clear').on('click', function(){
		$('.inner').css({'background-color':'white'});
	});
});
