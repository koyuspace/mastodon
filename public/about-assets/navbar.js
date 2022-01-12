//Translations
$.get("https://koyu.space/navbar.html", function(data) {
    $("#navbar").html(data);
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.split("-")[0] === "de") {
        $("#home").html("Startseite");
        $("#apps").html("Apps");
        $("#services").html("Dienste");
        $("#donate").html("Spenden");
        $("#login").html("Anmelden");
        $("#register").html("Registrieren");
        $("#services").html("Dienste");
    }
});
