//Add Item

function addListItem(){
	var text = $("#new-text").val();
	$("#todolist").prepend('<li><div class="box"></div><span>'+text+'</span> <button class="delete hvr-wobble-skew"> X</button></li>');
	$("#new-text").val('');
};
//Delete Item
function deleteItem(){
	$(this).parent().toggle('fade');
};

function finishItem(){
	if ( $(this).next('span').css('text-decoration') == 'line-through'){
		$(this).next('span').css('text-decoration', 'none');
	} else {
		$(this).next('span').css('text-decoration', 'line-through');
	}
}

function changeBox(){
	$(this).toggleClass('checked')
}

function onEnter(){
	$('#new-text').keyup(function(event){
		var text = $("#new-text").val();
		if(event.keyCode == 13) {
			$("#todolist").prepend('<li><div class="box"></div><span>'+text+'</span> <button class="delete hvr-wobble-skew"> X</button></li>');
			$("#new-text").val('');
		};	
 	});
}


$(document).ready(function() {
	onEnter();
	$('#todolist').sortable();
	$("#add").on('click', addListItem);
	//animations
	$('#list').hide();
	$("#tobottom").on('click', function(){
		$('#content').fadeOut('slow'),
		$('#list').slideUp('slow', function(){
			$('#list').show();
		});
	});
	$("#totop").on('click', function(){
		$('#content').fadeIn('slow');
		$('#list').fadeOut('slow');
	});
	// end add function	
	$(document).on('click','#flip', flipCard);
	$(document).on('click','#flipback2', flipCard);
	$(document).on('click', '.delete', deleteItem);
	$(document).on('click', '.box', changeBox);
	$(document).on('click', '.box', finishItem);
});