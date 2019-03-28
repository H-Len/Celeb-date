$(document).ready(function(){
  // $('#gate-keeper').modal({backdrop: 'static', keyboard: false});
  $("#user-data").submit(function(event){
    event.preventDefault();
    var hats = $('#form-hats').is(":checked");
    var poetInput = $("#form-poet").is(":checked");
    var litpref = $('#form-cats input:radio:checked').val();


    console.log("The cats box is " + litpref);
    // var ageChecker = $('#age-varification').is(":checked");
    //
    // if(ageChecker === true) {
    //   $("#gate-keeper").modal('hide');
    // } else {
    //   $("#gate-keeper").effect("shake");
    // }








  });
});
