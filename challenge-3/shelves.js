// shelves.js

var allTitles = [];
var allAuthors = [];
var fictionBooks = [];
var nonFicBooks = [];
var fantasyBooks = [];

function shelf1(books) {
  fictionBooks = [];
  _.forEach(books, function(books) {
    if (books.category === "fiction" && books.status === "shelved") {
      fictionBooks.push('<input type="button" value="Check Out" onclick="' + books.callNumber + '.checkThisOut()"> ' + books.title + ' by ' + books.author + '<br>');
    }
  });
  $("#fiction").html(fictionBooks);
}

function shelf2(books) {
  nonFicBooks = [];
  _.forEach(books, function(books) {
    if (books.category === "non-fiction" && books.status === "shelved") {
      nonFicBooks.push('<input type="button" value="Check Out" onclick="' + books.callNumber + '.checkThisOut()"> ' + books.title + ' by ' + books.author + '<br>');
    }
  });
  $("#nonFic").html(nonFicBooks);
}

function shelf3(books) {
  fantasyBooks = [];
  _.forEach(books, function(books) {
    if (books.category === "fantasy" && books.status === "shelved") {
      fantasyBooks.push('<input type="button" value="Check Out" onclick="' + books.callNumber + '.checkThisOut()"> ' + books.title + ' by ' + books.author + '<br>');
    }
  });
  $("#fantasy").html(fantasyBooks);
}