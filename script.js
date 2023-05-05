console.log("is it working?");
let cardContainer = document.getElementById("card-container");
let myLibrary = [];

// Testing appending a card

// let card = document.createElement("div");
// card.className = "testCard";
// card.innerHTML = "fs;ae";

// cardContainer.appendChild(card);
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

addBookToLibrary("Dracula", "Bram Stoker", 418, "Read");
addBookToLibrary("Dune", "Frank Herbert", 896, "Not Read");

console.log("myLibrary", myLibrary);

function showBooks() {
  myLibrary.forEach((book) => {
    const singleBook = document.createElement("div");
    singleBook.className = "card";
    singleBook.innerHTML = `
      <img src='./images/bookIcon.png' alt='Book icon' />
      <h2>${book.title}</h2>
      <h4>${book.author}</h4>
      <h4>${book.pages}</h4>
      <h4>${book.read}</h4>
`;
    console.log(singleBook);
    cardContainer.appendChild(singleBook);
  });
}

showBooks();
