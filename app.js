//document.write("Hello, World from javascript");

var outerDivOpen = "<div class='row'>";
var divClose = "</div>";
var innerDiv = "<div class='cell'></div>";
var containerOpen = "<div id='container'>";

    var size = 4;
function generateGrid(size){    
    document.write(containerOpen);
    for(i = 0; i < size; i++){
        document.write(outerDivOpen);
        for(j = 0; j < size; j++){
            document.write(innerDiv);
        }
        document.write(divClose);
    }
    document.write(divClose);
}

generateGrid(size);

$(document).ready(function(){
    $('#clear').on('click', function(){
	$('.cell').css({'background-color':'white'});
    });
    $('#scale').on('click', function(){
	var entered_size = prompt('enter a new size');
	newsize = parseInt(entered_size);
        $('.cell').remove();
        $('.row').remove();
	var $row = $('<div />', {class:'row'});
	var $cell = $('<div />', {class:'cell'});
	
	for(var i = 0; i < newsize; i++){
	    $row.append($cell.clone());
	}
	for(var i = 0; i < newsize; i++){
	    $('#container').append($row.clone());
	}
    });
    $('.cell').on('mouseenter', function(){
        $(this).css({'background-color': 'red'});
    });
});
