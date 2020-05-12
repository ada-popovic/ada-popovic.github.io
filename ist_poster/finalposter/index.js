window.onload = choosePic;

var myPix = new Array("movies/movie1.jpg","movies/movie2.jpg","movies/movie3.jpg","movies/movie4.png","movies/movie5.jpg","movies/movie6.jpg","movies/movie7.jpg","movies/movie8.jpg","movies/movie9.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
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
  "Having knowledge is taking and keeping possession of available knowledge (information); knowing is functional and serves only as a means in the process of productive thinking",
  "In the having mode, one's happiness lies in one's superiority over others, in one's power, and in the last analysis, in one's capacity to conquer, rob, kill. In the being mode it lied in loving, sharing, giving. ",
  "A thing is not beautiful because it is beautiful, as the he-frog said to the she-frog, it is beautiful because one likes it.",
  "Books must be read as deliberately and reservedly as they were written",
  "The cost of a thing is the amount of what I will call life which is required to be exchanged for it, immediately or in the long run"
];

var randomItem2 = movieQuotes[Math.floor(Math.random()*movieQuotes.length)];

document.getElementById('moviequote').innerHTML = randomItem2;
