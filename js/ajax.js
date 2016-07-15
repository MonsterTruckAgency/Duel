$.ajax({
  url: "header.html",
  cache: false
})
  .done(function( html ) {
    $( "#results" ).append( html );
  });