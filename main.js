


$("#submitButton").click(function(){

  var worseThing = $("#anything").val();

  var worseSentence = `Bacon is better than ${worseThing}.`

  if (worseThing.toUpperCase() === "BACON") {

    $("#answer").text("BACON.");
    $("#sentence").text("Bacon bacon, bacon bacon bacon bacon bacon.");
    $(".title").text("Bacon Bacon Bacon?")
    $("#submitButton").text("Bacon");
    $("#refreshButton").text("Bacon Bacon Bacon ^")
    $("label").html(`Bacon Bacon Bacon Bacon: <input id= 'anything' class='form-control' type='text' name='anything' value="${worseThing}">`);

  } else {
    
    $("#sentence").text(worseSentence);
    
  };

  //displays the refresh button after the 'yes' displays. 
  $("#answer").slideDown("400", "swing", function(){

    $("#sentence").slideDown("400", "swing", function(){

      $("#refreshButton").slideDown();
    });
  });
  $("#submitButton").attr("disabled", "disabled")
  
});


//runs the same code as if the 'submit' button was pressed, for pressing enter. 
$("#anything").on("keyup", function(event){
  if (event.keyCode === 13){
    $("#submitButton").click();
  }
});


//action to occur when refresh button is clicked. 
$("#refreshButton").on("click", function(){

  $(".title").text("Is Bacon Better?");
  $("#submitButton").text("Submit");
  $("#refreshButton").text("try Something Else")
  $("#answer").text("Yes.");
  $("label").html(`Is Bacon Better Than: <input id='anything' class='form-control' type='text' name='anything'>`)

  $("#refreshButton").slideUp();
  $("#sentence").slideUp();
  $("#answer").slideUp();
  $("#anything").val("");
  $("#anything").focus();
  $("#submitButton").prop("disabled", false)
})
