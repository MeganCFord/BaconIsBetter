


$("#submitButton").click(function(){

  var worseThing = $("#anything").val();
  var worseSentence = `Bacon is better than ${worseThing}.`

  //displays the refresh button after the 'yes' displays. 
  $("#answer").slideDown("400", "swing", function(){

    $("#sentence").text(worseSentence);
    $("#sentence").slideDown("400", "swing", function(){

      $("#refreshButton").slideDown();
    });
  });
});


//runs the same code as if the 'submit' button was pressed, for pressing enter. 
$("#anything").on("keyup", function(event){
  if (event.keyCode === 13){
    $("#submitButton").click();
  }
});


//action to occur when refresh button is clicked. 
$("#refreshButton").on("click", function(){

  $("#refreshButton").slideUp();
  $("#sentence").slideUp();
  $("#answer").slideUp();
  $("#anything").val("");
  $("#anything").focus();
})
