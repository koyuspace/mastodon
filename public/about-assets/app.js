$(document).ready(function() {

  //Random integer generator
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  //Translations
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

  //Easter egg
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

  //Background randomizer
  //only on desktop
  var isMobile = false; //initiate as false
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
      isMobile = true;
  }
  if (!isMobile) {
    $.getJSON("/about-assets/pictures.json", function(data) {
      var background = data[getRandomInt(data.length)];
      $("body").attr("style", "background-image: url("+background["url"]+") !important;");
      $("#author").attr("href", background["author_url"]);
      $("#author").html(background["author"]);
    });
  } else {
    $("#author").hide();
  }
});
