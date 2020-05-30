window.onload = choosePic;
window.onload = choosePic2;

var movies = new Array("movies/movie1.jpg","movies/movie2.jpg","movies/movie3.jpg","movies/movie4.jpg","movies/movie5.jpg","movies/movie6.jpg","movies/movie7.jpg","movies/movie8.jpg");

var art = new Array("art/art1.jpg","art/art2.jpg","art/art3.jpg","art/art4.jpg",);

function choosePic() {
     var randomNum = Math.floor(Math.random() * movies.length);
     document.getElementById("movie-image-img").src = movies[randomNum];
}

function choosePic2() {
     var randomNum2 = Math.floor(Math.random() * art.length);
     document.getElementById("art-image-img").src = art[randomNum2];
}


var bookQuotes = [
  "Having knowledge is taking and keeping possession of available knowledge (information); knowing is functional and serves only as a means in the process of productive thinking",
  "In the having mode, one's happiness lies in one's superiority over others, in one's power, and in the last analysis, in one's capacity to conquer, rob, kill. In the being mode it lied in loving, sharing, giving. ",
  "A thing is not beautiful because it is beautiful, as the he-frog said to the she-frog, it is beautiful because one likes it.",
  "Books must be read as deliberately and reservedly as they were written",
  "The cost of a thing is the amount of what I will call life which is required to be exchanged for it, immediately or in the long run"
];

var randomItem1 = bookQuotes[Math.floor(Math.random()*bookQuotes.length)];

document.getElementById('bookquote').innerHTML = randomItem1;

var movieQuotes = [
  "Poems are made by fools like me, </br> But only God can make a tree. </br></br>Joyce Kilmer, Trees",
  "Instructions for living a life: </br> Pay attention.</br> Be astonished.</br>Tell about it.</br></br>Mary Oliver",
  "Five words in a line.</br></br> Gertrude Stein, Five words in a line.",
  "We seek new edges of ourselves, because we hope it’s the next center"
];

var randomItem2 = movieQuotes[Math.floor(Math.random()*movieQuotes.length)];

document.getElementById('moviequote').innerHTML = randomItem2;

var randomWord = [
  "B. sacrosanct ",
  "B. impromptu",
  "B. parapraxis",
  "B. plethora",
  "B. haecceity"
];

var randomItem3 = randomWord[Math.floor(Math.random()*randomWord.length)];

document.getElementById('randomword').innerHTML = randomItem3;


setTimeout(function(){
   window.location.reload(1);
}, 1000);
//
//
// $(document).ready(function show(){
// setInterval(function(){
//       $("#allboxes").load(window.location.href + " #allboxes" );
// }, 1000);
// });
//
// $(document).ready(function notshow(){
// setInterval(function(){
//       $("#allboxes").load(window.location.href + " #allboxes" );
// }, 15000);
// });

function show() {
     document.getElementById("folding").style.visibility = "visible";
}
