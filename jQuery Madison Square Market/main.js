$(document).ready(()=>{
	const $cart = $('#cart');
	const $cartMenu = $('#cartMenu');
	const $account = $('#account');
	const $accountMenu = $('#accountMenu');
	const $help = $('#help');
	const $helpMenu = $('#helpMenu');

	$cart.on('click',()=>{
		$cartMenu.show();
	})
	$account.on('click',()=>{
		$accountMenu.show();
	})
	$help.on('click',()=>{
		$helpMenu.show();
	})

	$('.dropdown-menu').on('mouseleave',()=>{
		$('.dropdown-menu').hide();
	});
})