$(document).ready(function(){
	$('input, select').styler();  

	$('.photo-list a').click(function(){
		var photo = $(this).data('photo');

		$('.photo-list li ,.photo-tabs').removeClass('active');
		$(this).parent().addClass('active');
		$(photo).addClass('active');
	});

	$('.contacts a').click(function(){
		var contacts = $(this).data('contacts');

		$('.contacts-tab, .contacts a').removeClass('active');

		$(this).addClass('active');
		$(contacts).addClass('active');
	});

	cashless_payment();
	
	$('.payment-block input[type="radio"]').change(function(){
		cashless_payment()
	});

	$('.photo-gallery-list li').mouseenter(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	$('.price-block table a').click(function(){
		$(this).siblings('.slide-block').slideToggle(function(){
			$(this).parents('tr').toggleClass('active');
		});
	});

	/*-- num --*/

	$('.num-block  a.up').click(function(){
		var num = $(this).siblings('input[type="text"]').val();

		$(this).siblings('input[type="text"]').val(parseInt(num)+1);
	});

	$('.num-block  a.down').click(function(){
		var num = $(this).siblings('input[type="text"]').val();

		if(num >1) {
			$(this).siblings('input[type="text"]').val(parseInt(num)-1);
		}else {
			$(this).siblings('input[type="text"]').val(1);
		}
	});
});

function cashless_payment() {
	if($('#cashless-payment').is(":checked")) {
		$('.cashless-payment').slideDown();
	}else {
		$('.cashless-payment').slideUp();
	}
}
