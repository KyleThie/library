console.log("is it working?");
let cardContainer = document.getElementById("card-container");
let addBtn = document.querySelector("#addBtn");
titleField = document.querySelector("#title");
authorField = document.querySelector("#author");
pageNumField = document.querySelector("#pageNum");
readField = document.querySelector("#checkBox");

let newTitle = "";
let newAuthor = "";
let pageNums = null;
let read = null;

titleField.addEventListener("input", (e) => {
  newTitle = e.target.value;
});

authorField.addEventListener("input", (e) => {
  newAuthor = e.target.value;
});

pageNumField.addEventListener("input", (e) => {
  pageNums = e.target.value;
});

readField.addEventListener("input", (e) => {
  read = e.target.value;
});

addBtn.addEventListener("click", () => {
  event.preventDefault();

  addBookToLibrary(newTitle, newAuthor, pageNums, read);
  console.log(myLibrary);
  showBooks();
  let formById = document.getElementById("formId");
  formById.reset();
  console.log(formById);
});
let myLibrary = [];

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

console.log(titleField);
