$(document).ready(function(){
	$('input, select').styler();  

	$('.photo-list a').click(function(){
		var photo = $(this).data('photo');

		$('.photo-list li ,.photo-tabs').removeClass('active');
		$(this).parent().addClass('active');
		$(photo).addClass('active');
	});
});
