function addBook() {
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const bookIsbn = document.getElementById('isbn').value;
    const bookTable = document.getElementById('bTable');

    let row = bookTable.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    let btn = document.createElement('button');
    btn.innerHTML = 'X';
    btn.addEventListener('click', function() {
        cell1.parentElement.remove();
    }, false);

    cell1.innerHTML = bookTitle;
    cell2.innerHTML = bookAuthor;
    cell3.innerHTML = bookIsbn;
    cell4.appendChild(btn);

    let books = {};

    for (let i = 0; i < (bookTable.rows.length) - 1; i++) {
        books[i] = {title: bookTable.rows[i+1].cells[0].innerHTML, author: bookTable.rows[i+1].cells[1].innerHTML, isbn: bookTable.rows[i+1].cells[2].innerHTML};
    }

    // console.log(books[0]);
    // console.log(JSON.stringify(books[0]));
    // nr of elements in obj -> books
    // console.log(Object.keys(books).length);


    // Add books to LS
    localStorage.setItem('booksObj', JSON.stringify(books));

    let booksFromLs = JSON.parse(localStorage.getItem('booksObj'));
    // console.log(booksFromLs[0]);
    // console.log(booksFromLs[0].title);

    // console.log(booksFromLs);
    // console.log(Object.keys(booksFromLs).length);

    function test() {
        for(let i = 0; i < Object.keys(booksFromLs).length; i++) {
            console.log(booksFromLs[i]);
        }
    }

    test();
    

    // Read from LS
    
    // for(let j = 0; j < Object.keys(books).length; j++) {
    //     let booksFromLs = JSON.parse(localStorage.getItem('booksObj'+j));    
    //     // console.log(booksFromLs.title);
    //     // console.log(booksFromLs.author);
    //     // console.log(booksFromLs.isbn);
    // }

    // // Insert data from LS into Table

    // for(let k = 0; k < Object.keys(books).length; k++) {

    // }


}
