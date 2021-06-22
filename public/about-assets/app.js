$(document).ready(function() {

    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.split("-")[0] === "de") {
        $("#home").html("Startseite");
        $("#apps").html("Apps");
        $("#services").html("Dienste");
        $("#donate").html("Spenden");
        $("#login").html("Anmelden");
        $("#register").html("Registrieren");
        $("#tagline").html("Wir sind koyu.space");
        $("#bottom-text").html("...und erstellen Internetdienste für dich und deine Freunde");
    }

    var ctrlPressed = false;
    $(document).keydown(function(e) {
      if (e.ctrlKey) {
        ctrlPressed = true;
      }
    }).keyup(function(e) {
      if (e.ctrlKey) {
        ctrlPressed = false;
      }
    });
    
    $(document).keydown(function(e) {
      if (e.which == 32) {
        if(ctrlPressed == true){
          $("#logo").attr("src", "/about-assets/kakashi.png");
          const audio = new Audio("/about-assets/kakashi.mp3");
            audio.play();
          ctrlPressed = false;
        }
      }
    });
});