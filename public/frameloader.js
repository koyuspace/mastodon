$(document).ready(function() {
	$.get("https://web.koyu.space/motd.html", function(data) {
		$("#motd").html(data);
	});
/*	window.setInterval(function() {
		$.get("https://web.koyu.space/motd.html", function(data) {
			$("#motd").html(data);
		});
	}, 3000);*/
});
