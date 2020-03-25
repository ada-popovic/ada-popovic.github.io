// $(".fotel1").click(function(event) {
//     $("fotel1").css('width', '300px');
// });

// $(".fotel1").onclick="changeImage('fotel3.png')"


// function changeImage(".fotel1") {
//      image = document.getElementById('imgfotel1');
//      image.src = ".fotel3";
//   }

// $(".fotel1").on("click", function(e) {
//   $(".fotel1").css("margin-left", "700px");
//   });

$(".fotel4").on("click", function(e) {
    $(".ufo").css("display", "inline-block");
    });

$(function() {
    $('#fotel1').click(function(){
        $('#imgfotel1').attr('src', 'images/fotel3.png');
    });
});

var xStart, yStart = 0;
