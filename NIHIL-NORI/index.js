var rellax = new Rellax('.rellax');

// $( '.block' ).draggable( {
//       containment: 'window',
//       scroll: false,
//        drag: function( ) {
//          dragging = true;
//        },
//        stop: function( ) {
//          dragging = false;
//        }
//     } );


$(document).ready(function() {
  var $blocks = $(".block");
  var $lis = $(".block li");
  var $blocks2 = $(".block2");
  var $lis2 = $(".block2 li");
  var $blocks3 = $(".block3");
  var $lis3 = $(".block3 li");
  var $control = $(".control");
  var $inputs = $(".control input");
  var $output = $("output");

  $control.on("keyup", ".text-data", updateText)
    .on("blur", ".image-data", updateImage);

  $blocks.on("click", function() {
    highlight($(".text-data"));
  });

  function updateText(){
    var val = $(this).val();
    if (val == "") {
      val = "stay at home!";
    }
    val = val.split(" ").join("&nbsp;&nbsp;");
    $lis.html(val);
    $lis2.html(val);
    $lis3.html(val);
  }

});
