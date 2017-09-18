$(function() {
  $("#all-button").css("background-color","#ffc082");
  $("#cat-button").click(function(){
    console.log("Cat");
    $("#all-button").removeClass("is-active");
    $("#cat-button").addClass("is-active");
    $("#dog-button").removeClass("is-active");
    $("#giraffe-button").removeClass("is-active");
    $("#all-button").css("background-color","");
    $("#cat-button").css("background-color","#ffc082");
    $("#dog-button").css("background-color","");
    $("#giraffe-button").css("background-color","");
    $( ".columns" ).find(".has-dog").hide();
    $( ".columns" ).find(".has-giraffe").hide();
    $( ".columns" ).find(".has-cat").show();
  })

  $("#dog-button").click(function(){
    console.log("Dog");
    $("#all-button").removeClass("is-active");
    $("#cat-button").removeClass("is-active");
    $("#dog-button").addClass("is-active");
    $("#giraffe-button").removeClass("is-active");
    $("#all-button").css("background-color","");
    $("#cat-button").css("background-color","");
    $("#dog-button").css("background-color","#ffc082");
    $("#giraffe-button").css("background-color","");
    $( ".columns" ).find(".has-cat").hide();
    $( ".columns" ).find(".has-giraffe").hide();
    $( ".columns" ).find(".has-dog").show();
  })

  $("#giraffe-button").click(function(){
    console.log("Giraffe");
    $("#all-button").removeClass("is-active");
    $("#cat-button").removeClass("is-active");
    $("#dog-button").removeClass("is-active");
    $("#giraffe-button").addClass("is-active");
    $("#all-button").css("background-color","");
    $("#cat-button").css("background-color","");
    $("#dog-button").css("background-color","");
    $("#giraffe-button").css("background-color","#ffc082");
    $( ".columns" ).find(".has-cat").hide();
    $( ".columns" ).find(".has-dog").hide();
    $( ".columns" ).find(".has-giraffe").show();
  })

  $("#all-button").click(function(){
    console.log("All");
    $("#all-button").addClass("is-active");
    $("#cat-button").removeClass("is-active");
    $("#dog-button").removeClass("is-active");
    $("#giraffe-button").removeClass("is-active");
    $("#all-button").css("background-color","#ffc082");
    $("#cat-button").css("background-color","");
    $("#dog-button").css("background-color","");
    $("#giraffe-button").css("background-color","");
    $(".columns").find(".column").show();
  })
});
