var urlServer = 'http://localhost:3000/';

$(document).ready(function() {

	$('#serviceStartHtml').click(function(){
		$.ajax({
			url: urlServer + 'html',
			type: 'GET',
			success: function(response) {
				$('.serviceHtml').html(response);
			}
		});
	});

	$('#serviceStartHtmlVariable').click(function(){
		$.ajax({
			url: urlServer + 'html/infoExtra',
			type: 'GET',
			success: function(response) {
				$('.serviceHtmlVariable').html(response);
			}
		});
	});

	$('#serviceStartHtmlJson').click(function(){
		$.ajax({
			url: urlServer + 'json',
			type: 'GET',
			success: function(response) {
				$('.serviceHtmlJson').html(response.data.title);
			}
		});
	});

	$('#serviceStartPost').click(function(){
		$.ajax({
			url: urlServer + 'post',
			type: 'POST',
			data: {
				name: 'Name',
				email: 'Email',
				password: 'Password'
			},
			success: function(response) {
				$('.servicePost').html(response.name + ' ' + response.email + ' ' + response.password);
			}
		});
	});

	$('#serviceStartPostGet').click(function(){
		$.ajax({
			url: urlServer + 'postGet/var1/var2',
			type: 'POST',
			data: {
				name: 'Name'
			},
			success: function(response) {
				console.log(response);
				$('.serviceHtmlPostGet').html(response);
			}
		});
	});

});