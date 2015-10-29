var outerDivOpen = "<div class='row'>";
var divClose = "</div>";
var innerDiv = "<div class='cell'></div>";
var containerOpen = "<div id='container'>";
var size = 8; 

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
	var newsize = parseInt(entered_size);

	//plus 2 to account for borderpx
	var gridlength = 2 * size * (parseInt($('.cell').css('padding-right').replace("px","")) + 1);
	console.log(gridlength);

        $('.cell').remove();
        $('.row').remove();
        	
	var $row = $('<div />', {class:'row'});
	var $cell = $('<div />', {class:'cell'});
	var newpadding = gridlength/(2*newsize)-1;
	console.log(newpadding);
	$cell.css({'padding': newpadding+"px"});

	for(var i = 0; i < newsize; i++){
	    $row.append($cell.clone());
	}
	for(var i = 0; i < newsize; i++){
	    $('#container').append($row.clone());
	}
	$('.cell').on('mouseenter', function(){
		$(this).css({'background-color':'red'});
	});
    });
    $(".cell").on('mouseenter', function(){
        $(this).css({'background-color': 'red'});
    });
});
