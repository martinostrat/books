// event elements
const form = document.querySelector('form');
const booksList = document.querySelector('#books-list');

// events
form.addEventListener('submit', addBook);
booksList.addEventListener('click', deleteBook);
document.addEventListener('DOMContentLoaded', getBooksFromLocalStorage);

function getBooksFromLocalStorage(){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    for(let i = 0; i < books.length; i++){
        let book = books[i];
        // create <tr> element
        const tr = document.createElement('tr');
        for(let i = 0; i < book.length; i++){
            // create <td> element
            let td = document.createElement('td');
            // create text element
            let text = document.createTextNode(book[i]);
            // add text to <td>
            td.appendChild(text);
            // add td to tr
            tr.appendChild(td);// add td to tr
            tr.appendChild(td);
        }
        // X link
        // create <td> element
        td = document.createElement('td');
        // create <a> element
        const link = document.createElement('a');
        // set href atribute to <a>
        link.setAttribute('href', '#');
        // add text content to <a>
        link.appendChild(document.createTextNode('X'));
        // add <a> to <li>
        td.appendChild(link);
        // add td to tr
        tr.appendChild(td);
        // add tr to tbody
        booksList.appendChild(tr);
    }
}

function deleteBook(event){
    if(event.target.textContent === 'X'){
        if(confirm('Do you want to delete this book?')){
            event.target.parentElement.parentElement.remove();
            //let bookTitle = event.target.parentElement.parentElement.firstChild.textContent;
            let bookISBN = event.target.parentElement.previousElementSibling.textContent;
            deleteBookFromLocalStorage(bookISBN);
        }
    }
}

function deleteBookFromLocalStorage(bookISBN){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    /*
    for(let i = 0; i < books.length; i++){
        let book = books[i];
        if(book[2] === bookISBN){
            books.splice(i, 1);
        }
    }
    */

    books.forEach(function (book, index){
        if(book[2] === bookISBN){
            books.splice(index, 1);
        }
    });

    localStorage.setItem('books', JSON.stringify(books));
}

function addBook(event){
    // get form input data
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    // create book
    const book = [title, author, isbn]
    // create <tr> element
    const tr = document.createElement('tr');
    for(let i = 0; i < book.length; i++){
        // create <td> element
        let td = document.createElement('td');
        // create text element
        let text = document.createTextNode(book[i]);
        // add text to <td>
        td.appendChild(text);
        // add td to tr
        tr.appendChild(td);// add td to tr
        tr.appendChild(td);
    }
    // X link
    // create <td> element
    td = document.createElement('td');
    // create <a> element
    const link = document.createElement('a');
    // set href atribute to <a>
    link.setAttribute('href', '#');
    // add text content to <a>
    link.appendChild(document.createTextNode('X'));
    // add <a> to <li>
    td.appendChild(link);
    // add td to tr
    tr.appendChild(td);
    // add tr to tbody
    booksList.appendChild(tr);
    // save book
    addBookToLocalStorage(book);
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
    event.preventDefault();
}

function addBookToLocalStorage(book){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}


