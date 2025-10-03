let myLibrary = [];

function Book(title, author, pages, readStatus) {
  if (!new.target) {
    throw new Error("Use the new operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
  this.readStatus = readStatus;
}

Book.prototype.info = function () {
  let status;

  if (this.readStatus === true) {
    status = "fully read";
  } else {
    status = "not read yet";
  }

  return `${this.title} by ${this.author}, ${this.pages} pages, ${status}`;
};

function addBookToLibrary(title, author, pages, readStatus) {
  const newBook = new Book(title, author, pages, readStatus);

  myLibrary.push(newBook);

  return newBook;
}

const libraryContainer = document.getElementById("library");

function removeLibraryContent() {
  libraryContainer.innerHTML = "";
}

function removeBook(event) {
  const bookId = event.target.dataset.id;

  myLibrary = myLibrary.filter((book) => book.id !== bookId);

  displayBooks();
}

function toggleStatus(event) {
  const bookId = event.target.dataset.id;

  const bookToChange = myLibrary.find((book) => book.id === bookId);

  if (bookToChange.readStatus === true) {
    bookToChange.readStatus = false;
  } else {
    bookToChange.readStatus = true;
  }

  displayBooks();
}

function displayBooks() {
  removeLibraryContent();

  for (const book of myLibrary) {
    const bookCard = document.createElement("div");

    bookCard.classList.add("card");

    bookCard.id = book.id;

    // Card Title

    const cardTitle = document.createElement("h2");

    cardTitle.innerHTML = book.title;

    bookCard.appendChild(cardTitle);

    // Card Author

    const cardAuthor = document.createElement("p");

    cardAuthor.innerHTML = `Author: ${book.author}`;

    bookCard.appendChild(cardAuthor);

    // Card pages

    const cardPages = document.createElement("p");

    cardPages.innerHTML = `Pages: ${book.pages}`;

    bookCard.appendChild(cardPages);

    // Card status

    const cardStatus = document.createElement("p");

    const cardWrittenStatus = book.readStatus ? "Fully read" : "Not read yet";

    cardStatus.innerHTML = `Status: ${cardWrittenStatus}`;

    bookCard.appendChild(cardStatus);

    // Card buttons container

    const buttonsDiv = document.createElement("div");

    buttonsDiv.classList.add("button-container");

    // Card buttons

    // Toggle button

    const toggleButton = document.createElement("button");

    toggleButton.innerHTML = "Toggle status";

    toggleButton.setAttribute("data-id", book.id);

    toggleButton.addEventListener("click", toggleStatus);

    buttonsDiv.appendChild(toggleButton);

    // Remove button

    const removeButton = document.createElement("button");

    removeButton.innerHTML = "Remove";

    removeButton.setAttribute("data-id", book.id);

    removeButton.addEventListener("click", removeBook);

    buttonsDiv.appendChild(removeButton);

    // Add buttons container to card

    bookCard.appendChild(buttonsDiv);

    // Add card to container

    libraryContainer.appendChild(bookCard);
  }
}

// Create book form

const newBookButton = document.getElementById("openDialog");

const bookDialog = document.getElementById("bookDialog");

// Open book dialog

function openForm() {
  bookDialog.showModal();
}

newBookButton.addEventListener("click", openForm);

// Retrieving info from form and adding a new book

const form = document.getElementById("newBookForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const title = formData.get("title");

  const author = formData.get("author");

  const pages = formData.get("pages");

  const readStatus = formData.get("readStatus") === "on" ? true : false;

  addBookToLibrary(title, author, pages, readStatus);

  displayBooks();

  bookDialog.close();

  form.reset();
});

// Close form

const cancelButton = document.getElementById("cancelButton");

cancelButton.addEventListener("click", function () {
  bookDialog.close();

  form.reset();
});
