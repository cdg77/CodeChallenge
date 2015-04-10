// function Book(author, title, category, status, callNumber){
//   this.author = author;
//   this.title = title;
//   this.category = category;
//   this.status = status;
//   this.callNumber = callNumber;
//   this.checkThisOut = function() {
//     this.status = "loaned";
//     console.log(this.title + " " + this.status);
//     bookStatus(books);
//   };
//   this.checkThisIn = function() {
//     this.status = "shelved";
//     console.log(this.title + " " + this.status);
//     bookStatus(books);
//   };
// }

// var cha1 = new Book('Chabon, Michael', '"The Amazing Adventures of Kavalier & Clay"', 'fiction', 'loaned', 'cha1');

function shelf(books) {
  fictionBooks = [];
  nonFicBooks = [];
  fantasyBooks = [];

  _.forEach(books, function(books) {
    if (books.category === "fiction" && books.status === "shelved") {
      fictionBooks.push('<input type="button" value="Check Out" onclick="' + books.callNumber + '.checkThisOut()"> ' + books.title + ' by ' + books.author + '<br>');
    }
    else if (books.category === "non-fiction" && book.status === 'shelved') {
      nonFicBooks.push('<input type="button" value="Check Out" onclick="' + books.callNumber + '.checkThisOut()"> ' + books.title + ' by ' + books.author + '<br>');
    }
    else if (books.category === "fantasy" && books.status === "shelved") {
      fantasyBooks.push('<input type="button" value="Check Out" onclick="' + books.callNumber + '.checkThisOut()"> ' + books.title + ' by ' + books.author + '<br>');
    }
  });
  $("#fiction").html(fictionBooks);
  $('#nonFic').html(nonFicBooks);
  $("#fantasy").html(fantasyBooks);
}

var shelfFiction = new shelf();
var shelfNonFiction = new shelf();
var shelfFantasy = new shelf();


