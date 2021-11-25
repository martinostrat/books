const bookTable = document.getElementById('bTable');
const submitBtn = document.getElementById('subBtn');

// events

submitBtn.addEventListener('click', addBook);
document.addEventListener('DOMContentLoaded', getBooksFromLocalStorage);

// Add book to table
function addBook() {
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const bookIsbn = document.getElementById('isbn').value;
    let row = bookTable.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    const btn = document.createElement('button');
    btn.innerHTML = 'X';

    btn.addEventListener('click', removeBook);

    const book = [bookTitle, bookAuthor, bookIsbn];
    console.log(book);

    cell1.innerHTML = bookTitle;
    cell2.innerHTML = bookAuthor;
    cell3.innerHTML = bookIsbn;
    cell4.appendChild(btn);
    addBookToLs(book);

}

// Remove book from table
function removeBook(event) {
    event.target.parentElement.parentElement.remove();
    let bookISBN = event.target.parentElement.previousElementSibling.textContent;
    removeBookFromLs(bookISBN);
}

// Add book to LS
function addBookToLs(book) {
    let books = [];
    if (localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

}

// Delete book from LS
function removeBookFromLs(bookISBN) {
    let books;
    if (localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }

    books.forEach(function (book, index) {
        if (book[2] === bookISBN) {
            books.splice(index, 1);
        }
    });

    localStorage.setItem('books', JSON.stringify(books));
}

// Load books from LS
function getBooksFromLocalStorage() {
    let books;
    if (localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        // create <tr> element
        const tr = document.createElement('tr');
        for (let i = 0; i < book.length; i++) {
            let row = bookTable.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            const btn = document.createElement('button');
            btn.innerHTML = 'X';

            btn.addEventListener('click', removeBook);

            cell1.innerHTML = books[i][0];
            cell2.innerHTML = books[i][1];
            cell3.innerHTML = books[i][2];
            cell4.appendChild(btn);
        }
    }
}