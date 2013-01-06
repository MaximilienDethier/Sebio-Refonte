(function ($) {

	var menuButton = $('nav>ul>li>a');
	var inputSearch = $('#search input:first-child');

	var show = function(e){
		e.preventDefault();
		menuButton.next().children().filter('li').hide();
		$(this).next().children().filter('li').fadeIn();
	};
	
	//Search
	
	inputSearch.focus(function(){
		inputSearch.attr('placeholder', '');
	});

	inputSearch.focusout(function(){
		inputSearch.attr("placeholder", "Entrez l'objet que vous recherchez");
	});
	
	//Menu
	
	if(window.innerWidth<=320)
	{
		menuButton.next().children().filter('li').hide();
		
		menuButton.on('click', show);
			
	}
	else
	{
		menuButton.show();
	}
	
})(jQuery);