$(document).ready(function(){
  $('#gate-keeper').modal({backdrop: 'static', keyboard: false});
  $("#age-submit").click(function(){
    var ageChecker = $('#age-varification').is(":checked");

    if(ageChecker === true) {
      $("#gate-keeper").modal('hide');
    } else {
      $("#gate-keeper").effect("shake");
    }









  });
});
