var main = function() {
	// sub menu for 'stats' and 'share' toggle:
	$('.more-btn').on('click', (event)=>{
		$(event.currentTarget).siblings().toggle();
	});
	// highlight for bell alarm click:
	$('.bell').on('click', (event)=>{
		$(event.currentTarget).toggleClass('active');
	})
	// submenus 'share' submenu:
	$('.share').on('click', (e)=>{
		$(e.currentTarget).next().toggle();
	})
};

$(document).ready(main);