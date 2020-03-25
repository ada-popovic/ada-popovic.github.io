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

// var img = new Image();
//      img.src = "images/egggif4.gif"
//     for (var i = 0; i < 10; i++) {
//         document.body.appendChild(img)




//     }


$('.egg7').click(function() {
    $('.egggif1').css({
        'margin-left': '1280px',
    });
});




document.getElementById("egg6").addEventListener("click", myFunction);

function myFunction() {




$(document).ready(function(){

      for (var i = 0; i < 50; i++) {

          var div = $("<div>");
          div.addClass("egggif4");

          var img = "<img src ='images/egggif4.gif' id='egggif4"+i+"'/>";
          div.append(img);

          var bodyWidth = document.body.clientWidth;
          var bodyHeight = document.body.clientHeight;
          var randPosX = Math.floor((Math.random()*bodyWidth*0.8));
          var randPosY = Math.floor((Math.random()*bodyHeight*-0.9));

          div.css('left', randPosX);
          div.css('top', randPosY);

          $("body").append(div);
      }

})

$(document).ready(function(){

      for (var i = 0; i < 50; i++) {

          var div = $("<div>");
          div.addClass("egggif4");

          var img = "<img src ='images/egggif4.gif' id='egggif4"+i+"'/>";
          div.append(img);

          var bodyWidth = document.body.clientWidth;
          var bodyHeight = document.body.clientHeight;
          var randPosX = Math.floor((Math.random()*bodyWidth*0.8));
          var randPosY = Math.floor((Math.random()*bodyHeight*-0.5));

          div.css('left', randPosX);
          div.css('top', randPosY);

          $("body").append(div);
      }

})

$(document).ready(function(){

      for (var i = 0; i < 50; i++) {

          var div = $("<div>");
          div.addClass("egggif4");

          var img = "<img src ='images/egggif4.gif' id='egggif4"+i+"'/>";
          div.append(img);

          var bodyWidth = document.body.clientWidth;
          var bodyHeight = document.body.clientHeight;
          var randPosX = Math.floor((Math.random()*bodyWidth*0.8));
          var randPosY = Math.floor((Math.random()*bodyHeight));

          div.css('left', randPosX);
          div.css('top', randPosY);

          $("body").append(div);
      }

})

}
