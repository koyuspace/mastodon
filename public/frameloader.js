$(document).ready(function() {
    $.get("https://web.koyu.space/motd.html", function(data) {
        $("#motd").html(data);
    });
});