console.log("is it working?");
let cardContainer = document.getElementById("card-container");
let myLibrary = [];
// const oneCard = document.createElement("div");
// oneCard.innerHTML = "div <br> 5";
card = document.createElement("div");
card.className = "testCard";
card.innerHTML = "fs;ae";

cardContainer.appendChild(card);
console.log("cardContainer:", cardContainer);

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("fsea", "pfoisae", 321, "fwas");
addBookToLibrary("waga", "aaaaa", 52, "abt");

console.log("myLibrary", myLibrary);

function showBooks() {
  myLibrary.forEach((book) => {
    const singleBook = document.createElement("div");
    singleBook.className = "card";
    singleBook.innerHTML = `${book.title}`;
    console.log(singleBook);
    cardContainer.appendChild(BookTitle);
  });
}

showBooks();
