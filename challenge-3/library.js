//library.js
//Completed this with Dr. Hamm's pages

var loanedBooks = [];

function bookStatus(books) {
  loanedBooks = [];
  _.forEach(books, function(books) {
    if (books.status === "loaned") {
      loanedBooks.push('<input type="button" value="Check In" onclick="' + books.callNumber + '.checkThisIn()"> ' + books.title + ' by ' + books.author + " (" + books.category + ")" + '<br>');
    }
  });
  shelf1(books);
  shelf2(books);
  shelf3(books);
  $(function() {
    $("#checked-out").html(loanedBooks);
  });
}

bookStatus(books);

function listAllByAuthor(books) {
    allAuthors = [];
    books.sort(function(a, b){
    if(a.author < b.author) return -1;
    if(a.author > b.author) return 1;
    return 0;
  });
  _.forEach(books, function(books) {
    allAuthors.push(books.author + ": " + books.title + "<br>");
  });
  $("#all-books").html(allAuthors);
}

function listAllByTitle(books) {
  allTitles = [];
  books.sort(function(a, b){
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
  });
  _.forEach(books, function(books) {
    allTitles.push(books.title + " by " + books.author + "<br>");
  });
  $("#all-books").html(allTitles);
}

// ACTIONS

  // DISPLAY HOLDINGS LIST

    $("#booksByAuthor").click(function() {
      $("#all-books").html(listAllByAuthor(books));
    });

    $("#booksByTitle").click(function() {
      $("#all-books").html(listAllByTitle(books));
    });

    $("#concealContentsList").click(function() {
      $("#all-books").html("");
    });

    // SHELF 1 - DISPLAY BOOKS

    $("#hideShelf1").click(function() {
      $("#fiction").html("");
    });

    $("#showShelf1").click(function() {
      $("#fiction").html(shelf1(books));
    });

    // SHELF 2 - DISPLAY BOOKS

    $("#hideShelf2").click(function() {
      $("#nonFic").html("");
    });

    $("#showShelf2").click(function() {
      $("#nonFic").html(shelf2(books));
    });

    //SHELF 3 - DISPLAY BOOKS

    $("#hideShelf3").click(function() {
      $("#fantasy").html("");
    });

    $("#showShelf3").click(function() {
      $("#fantasy").html(shelf3(books));
    });

  // LIBRARIAN ACTIONS

    $("#removeShelf1").click(function() {
      $("#shelf1").hide();
    });

    $("#returnShelf1").click(function() {
      $("#shelf1").show();
    });

    $("#removeShelf2").click(function() {
      $("#shelf2").hide();
    });

    $("#returnShelf2").click(function() {
      $("#shelf2").show();
    });

    $("#removeShelf3").click(function() {
      $("#shelf3").hide();
    });

    $("#returnShelf3").click(function() {
      $("#shelf3").show();
    });