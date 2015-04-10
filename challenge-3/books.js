//books.js

function Book(author, title, category, status, callNumber){
  this.author = author;
  this.title = title;
  this.category = category;
  this.status = status;
  this.callNumber = callNumber;
  this.checkThisOut = function() {
    this.status = "loaned";
    console.log(this.title + " " + this.status);
    bookStatus(books);
  };
  this.checkThisIn = function() {
    this.status = "shelved";
    console.log(this.title + " " + this.status);
    bookStatus(books);
  };
}

var cha1 = new Book('Chabon, Michael', '"The Amazing Adventures of Kavalier & Clay"', 'fiction', 'loaned', 'cha1');
var von1 = new Book('Vonnegut, Kurt', '"Cats Cradle"', 'fiction', 'shelved', 'von1');
var dic1 = new Book('Dickens, Charles', '"David Copperfield"', 'fiction', 'loaned', 'dic1');
var pal1 = new Book('Palahniuk, Chuck', '"Fight Club"', 'fiction', 'loaned', 'pal1');
// console.log(pal1);

var sta1 = new Book('Starrett, Kelly', '"Becomming a Supple Leopard"', 'non-fiction', 'shelved', 'sta1');
var ron1 = new Book('Ronson, Jon', '"The Psychopath Test"', 'non-ficton', 'shelved', 'ron1');
var dwe1 = new Book('Dweck, Carol', '"Mindset: The New Psychology of Success"', 'non-fiction', 'shelved', 'dwe1');

var gai1 = new Book('Gaiman, Neil', '"American Gods"', 'fantasy', 'shelved', 'gai1');
var row1 = new Book('Rowling, J.K.', '"Harry Potter And The Philosophers Stone"', 'fantasy', 'shelved', 'row1');
var hom1 = new Book('Homer', '"Odyssey"', 'fantasy', 'shelved', 'hom1');
var tol1 = new Book('Tolkien, J.R.R.', '"The Lord Of The Rings"', 'fantasy', 'shelved', 'tol1');
var whi1 = new Book('White, T.H.', '"The Once And Future King"', 'fantasy', 'shelved', 'whi1');

var books = [cha1, dic1, dwe1, gai1, hom1, pal1, ron1, row1, sta1, tol1, von1, whi1];
console.log(books);

