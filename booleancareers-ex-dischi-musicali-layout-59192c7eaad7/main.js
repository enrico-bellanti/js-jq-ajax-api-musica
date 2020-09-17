// Descrizione:
// Facciamo una chiamata ajax all'api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L'api ci restituirà decina di dischi musicali che dovremo stampare
// a schermo con Handlebars.
// Concentratevi sulla parte JS per la grafica potrete utilizzare il layout
// che troverete al seguente link
// https://bitbucket.org/booleancareers/ex-dischi-musicali-layout/downloads/
// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.


$(document).ready(function() {
  // copia il template
  var source = $("#cd-template").html();
  var template = Handlebars.compile(source);

	$.ajax({
    "url": "https://flynn.boolean.careers/exercises/api/array/music",
    "method": "GET",
    "success": function(data, stato) {
      var infoCd = data.response;
      for (var i = 0; i < infoCd.length; i++) {
        var context = infoCd[i];
        var html = template(context);
        $(".cds-container").append(html);
      }
    },
    "error": function(richiesta, stato, errori) {
      alery("Attenzione errore");
    }
  });

// end ready document
});

// {
//     "poster": "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
//     "title": "New Jersey",
//     "author": "Bon Jovi",
//     "genre": "Rock",
//     "year": "1988"
// },

// function getCdDetails() {
//
// }
