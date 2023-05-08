let cardContainer = document.getElementById("card-container");
let addBtn = document.querySelector("#addBtn");
let removeBtn = document.querySelector("#removeBtn");

let bookTitle = "";
titleField = document.querySelector("#title");
authorField = document.querySelector("#author");
pageNumField = document.querySelector("#pageNum");
readField = document.querySelector("#checkBox");
removeField = document.querySelector("#remove");
let myLibrary = [];
let newTitle = "";
let newAuthor = "";
let pageNums = null;
let read = null;
let bookId = -1;
let bookTitleToDelete = "";

removeField.addEventListener("input", (e) => {
  // e.preventDefault();
  bookTitleToDelete = e.target.value;
  console.log(bookTitleToDelete);
});

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
  if (readField.checked === true) {
    read = "Read";
  } else {
    read = "Not Read";
  }
  addBookToLibrary(newTitle, newAuthor, pageNums, read);

  showBooks();
  let formById = document.getElementById("formId");

  formById.reset();
});

removeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  removeBook(bookTitleToDelete);
});

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

let singleBook;

function showBooks() {
  myLibrary.forEach((book) => {
    bookId += 1;
    const singleBook = document.createElement("div");
    const deleteBtn = document.createElement("button");

    singleBook.appendChild(deleteBtn);
    singleBook.className = "card";
    singleBookId = bookId;

    singleBook.innerHTML = `

      <img src='./images/bookIcon.png' alt='Book icon' />
      <h2>${book.title}</h2>
      <h4>${book.author}</h4>
      <h4>${book.pages}</h4>
      <h4>${book.read}</h4>
      <button>Delete</button>
      <h4>${singleBookId}</h4>
`;
    // singleBook.addEventListener("click", () => {
    //   const element = document.getElementById(singleBookId);
    //   element.remove();
    // });
    singleBook.setAttribute("id", bookId);
    // singleBook.addEventListener("click", myFunction(bookId));
    // console.log("SINGLEBOOKID", singleBookId);
    // console.log(myLibrary);
    // console.log(singleBook);
    cardContainer.appendChild(singleBook);
  });
}

// THIS MIGHT BE KIND OF WORKING???

function removeBook(bookTitleToDelete) {
  for (let i = 0; i < myLibrary.length; i++) {
    let currentBook = myLibrary[i];
    console.log("book.title", currentBook.title);
    console.log("param", bookTitleToDelete);
    console.log(myLibrary.indexOf(currentBook));
    // working up to this point - loop and variable seems to be okay

    if (currentBook.title === bookTitleToDelete) {
      const deletedBookArr = myLibrary.splice(
        myLibrary.indexOf(currentBook),
        1
      );
      console.log("deletedBOOKARR: ", deletedBookArr);
    }
  }

  // console.log(myLibrary);
  // return myLibrary;
}
// removeBook("Dune");

// function deleteBook(toDelete) {
//   const filtered = myLibrary.filter((book) => {
//     book.title !== toDelete;
//   });
//   return filtered;
// }
// removeBook("Dune");

// Try calling removeBook with more / different entries
// Maybe an issue with how the for loop is set up? myLibrary.length + 1???
// removeBook("Dune");
