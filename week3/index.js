
$(document).ready(function() {
  var $art = $("#art");
  var $art = $("#art2");
  var $blocks = $("#block");
  var $blocks2 = $("#block2");
  var $lis = $("#block li");
  var $lis2 = $("#block2 li");
  var $control = $("#control1");
  var $control2 = $("#control2");
  var $inputs = $(".control input");
  // var $inputs = $(".control input");
  var $output = $("output");
  var $output2 = $("output2");

  $control.on("keyup", ".text-data", updateText)
  $control2.on("keyup", ".text-data2", updateText2)


  function updateText(){
    var val = $(this).val();
    if (val == "") {
      val = "YOUR TEXT HERE";
    }
    val = val.split(" ").join("&nbsp;&nbsp;");
    $lis.html(val);
  }


  function updateText2(){
    var val = $(this).val();
    if (val == "") {
      val = "HELLLO";
    }
    val = val.split(" ").join("&nbsp;&nbsp;");
    $lis2.html(val);
  }


});
