//document.write("Hello, World from javascript");

var outerDivOpen = "<div class='outer'>";
//var div = document.createElement("div");
var divClose = "</div>";
var innerDiv = "<div class='inner'></div>";
var containerOpen = "<div id='container'>";

    //scaling
    var scale = document.getElementById('scale');

    var rows = 4;
    var cols = 4;
function generateGrid(rows, cols){    
    //rows = $('#rows').val();
    document.write(containerOpen);
    for(i = 0; i < cols; i++){
        document.write(outerDivOpen);
        for(j = 0; j < rows; j++){
            document.write(innerDiv);
        }
        document.write(divClose);
    }
    document.write(divClose);
}

generateGrid(rows, cols);

    document.write("<div id='clear' class='button'>Clear!</div>");
    document.write("<div id='scale' class='button'>Scale!</div>");
$(document).ready(function(){
    $('.inner').on('mouseenter', function(){
 	$(this).css({'background-color':'red'});
    });
    $('#clear').on('click', function(){
	$('.inner').css({'background-color':'white'});
    });
    $('#scale').on('click', function(){
        $('.inner').remove();
        $('.outer').remove();
        var numrows = document.getElementById('numrows');
	$('p').val();
    });
});

