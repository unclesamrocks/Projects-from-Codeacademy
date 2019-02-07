$(document).ready(() => {
	$('.menu').on('mouseover',()=>{
		$('.nav-menu').slideDown(400);
	});
	$('.nav-menu').on('mouseleave',()=>{
		$('.nav-menu').slideUp(200);
	});

	$('.btn').on('mouseover',event=>{
		$(event.currentTarget).addClass('btn-hover');
	}).on('mouseleave',event=>{
		$(event.currentTarget).removeClass('btn-hover');
	});

	

	//console.log(charCount.text());
	const charMax = 140; // max num of characters in the box
	const postText = $('.characters'); // link to ".characters" element
	$('.postText').focus(()=>{}); 
	// this will cause the <textarea> to expect typed text as soon as the page loads
	$('.postText').keyup(event=>{ 
	//shoots then textfield is focused on keyup
		// event.currentTarget - is alternative to - $('.postText')
		$(event.currentTarget).val($(event.currentTarget).val().substring(0,charMax));
		/*
			$( '.postText' ).val() - getting the current text inside textarea element;
				..( $( '.postText' ).val().  ...) - putting inside the textarea element the value of textarea element and..
					.. substring(0,charMax) - ..reducing it with .substring method to (from 0 to charMax) characters
		*/
		let charCount = $(event.currentTarget).val().length; 
		//after .substing func we are counting current amount of chars in element with ".length"
		let charRemaining = charMax - charCount; 
		//getting the remaining amount of chars
		postText.text(charRemaining); 
		//putting the remaining amount of chars inside <span class='characters'>
		//console.log(charCount); 
		if(charRemaining === 0){
			postText.addClass('red');
		} else {
			postText.removeClass('red');
		};
	});
}); 
