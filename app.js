function addBook() {
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const bookIsbn = document.getElementById('isbn').value;
    let btn = document.createElement('button');
    btn.innerHTML = 'X';
    btn.addEventListener('click', function() {
        console.log('del');
    }, false);


    const bookTable = document.getElementById('bTable');
    let row = bookTable.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);


    cell1.innerHTML = bookTitle;
    cell2.innerHTML = bookAuthor;
    cell3.innerHTML = bookIsbn;
    cell4.appendChild(btn);
    
}
