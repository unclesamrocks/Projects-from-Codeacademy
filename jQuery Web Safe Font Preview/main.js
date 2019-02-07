$(document).ready(() => {

  $('#text').keyup((event)=>{
  	$('.preview').html($(event.currentTarget).val());
  });

  // using .change() method to act then user picks a value inside option.

  //changing font:
  $('#font').change(()=>{
  	$('.preview').css('font-family', $('#font').val());
  });

  //changing font-weight:
  $('#weight').change(()=>{
  	$('.preview').css('font-weight', $('#weight').val());
  });

  //changing the size of the font:
  $('#size').on('keyup keypress blur', (event)=>{
  	/*
		here we take $(event.currentTarget).val( x )
			and replace x with:
				$(event.currentTarget).val() current .val()
					and
						.replace(/[^\d].+/, "")
							with numeric values only.
  	*/
	$(event.currentTarget).val($(event.currentTarget).val().replace(/[^\d].+/, ""));
		// with jQ .which If statement preventing all input except numbers
		if ((event.which < 48 || event.which > 57)) {
			// default action of the event will not be triggered
			event.preventDefault();
		}
	//then giving the input inside .preview new CSS values:
	let fontSizeVal = $(event.currentTarget).val()+'px';
	$('.preview').css('font-size', fontSizeVal);
  });

})