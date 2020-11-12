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
  $("#select_genre").val("Genre");
  // appena entro nella pagina mostro gli album della select di default
  var genreAlbum = "all";
  $.ajax({
    "url": "https://flynn.boolean.careers/exercises/api/array/music",
    "method": "GET",
    "success": function(data, stato) {
      var infoAlbum = data.response;
      selectAlbum(infoAlbum, genreAlbum);
    },
    "error": function(richiesta, stato, errori) {
      alery("Attenzione errore");
    }
  });



  // al click richiedi all'API solo gli album che hanno il genere selezionato
  $("#select_genre option").click(function() {
    // rimuovi i template della selezione precedente
    $(".cds-container .cd").remove();
    // salvo il valore genere selzionato in una variabile
    var genreAlbum = $(this).val();

  	$.ajax({
      "url": "https://flynn.boolean.careers/exercises/api/array/music",
      "method": "GET",
      "success": function(data, stato) {
        var infoAlbum = data.response;
        selectAlbum(infoAlbum, genreAlbum);
      },
      "error": function(richiesta, stato, errori) {
        alery("Attenzione errore");
      }
    });
  });

// end ready document
});

function selectAlbum(details, genreSelected) {
  // copia il template
  var source = $("#cd-template").html();
  var template = Handlebars.compile(source);
  // ottieni le info contenute nella API e inseriscile nel template
  for (var i = 0; i < details.length; i++) {
    var genre = details[i].genre.toLowerCase();
    if (genreSelected == genre || genreSelected == "all") {
      var context = details[i];
      var html = template(context);
      $(".cds-container").append(html);
    }

  }

}
