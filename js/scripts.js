$(document).ready(function() {
  $("ol").on("click", "li", function() {
    console.log(this);
    $(this).next().slideToggle();
  });

  // $(".col").click(function() {
  //   console.log(this);
  //   $(this).next().slideToggle();
  // });

  // $(".click1").click(function(){
  //   $("#op").slideToggle();

  // })

  // $(".click2").click(function(){
  //   $("#var").slideToggle();
  // })

  // $(".click3").click(function(){
  //   $("#var-name").slideToggle();
  // })

  // $(".click4").click(function(){
  //   $("#function").slideToggle();
  // })

  // $(".click5").click(function(){
  //   $("#method").slideToggle();
  // })

  // $(".click6").click(function(){
  //   $("#argument").slideToggle();
  // })

  // $(".click7").click(function(){
  //   $("#parameter").slideToggle();
  // })

  // $(".click8").click(function(){
  //   $("#return").slideToggle();
  // })

  // $(".click9").click(function(){
  //   $("#chain").slideToggle();
  // })

  // $(".click10").click(function(){
  //   $("#string").slideToggle();
  // })

  // $(".click11").click(function(){
  //   $("#boolean").slideToggle();
  // })

  // $(".click12").click(function(){
  //   $("#undef").slideToggle();
  // })

  // $(".click13").click(function(){
  //   $("#nan").slideToggle();
  // })

  // $(".click14").click(function(){
  //   $("#escape").slideToggle();
  // })

  // $(".click15").click(function(){
  //   $("#alert").slideToggle();
  // })

  // $(".click16").click(function(){
  //   $("#comment").slideToggle();
  // })

  // $(".click17").click(function(){
  //   $("#jquery").slideToggle();
  // })

  // $(".click18").click(function(){
  //   $("#att").slideToggle();
  // })

});