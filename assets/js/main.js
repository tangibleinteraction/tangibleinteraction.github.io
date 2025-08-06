/*
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	// Clear local storage after an update (e.g., when new data is available)
	//localStorage.clear();

	var pagesBloodhound = new Bloodhound({
		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('terms'),
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		prefetch: baseurl + '/search.json'
	});

	$('#query').typeahead({
		hint: true,
		highlight: true,
		minLength: 1
	}, {
		name: 'pages',
		display: 'title',
		source: pagesBloodhound
	});

	$('#query').bind('typeahead:select', function(ev, suggestion) {
		window.location.href = suggestion.url;
	});

})(jQuery);