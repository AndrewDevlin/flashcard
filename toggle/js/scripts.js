$(document).ready (function(){

  $(".container").fadeIn(2000);

  $("p").click(function(){
    $("p").toggleClass("q");
  });

  $(".clickable").click(function(){
    $(".walrus-showing").slideToggle(2000);
    $(".walrus-hidden").slideToggle(2000);
  });

  $("button#green").click(function(){
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function(){
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-scheme");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-scheme");
  });

  $("button#menuid").click(function() {
    $("ul").slideToggle("ul");
  })

});
