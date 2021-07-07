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
        $("#privacy").html("Datenschutz");
        $("#more").html("Communityrichtlinien");
        $("#attribution").html("Foto von");
        $("#submission").html("Du kannst dein eigenes Foto <a href=\"mailto:support@koyu.space?subject=Frontpage%20photo%20submission&body=Hi%2C%0A%0AI%20want%20to%20submit%20the%20photo%20I%20made%20for%20the%20front%20page.%20You%20can%20find%20it%20in%20the%20attachments.%20For%20attribution%20my%20website%20is%20here%3A%20%5Byour%20website%20here%5D.%0A%0AThanks!\">hier</a> einreichen.");
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
