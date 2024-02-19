let books = [];

function addBook() { 
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    //! El código comprueba si se han rellenado todos los campos
    //! Y asegura que 'pagesNumber' es un número válido utilizando "(!isNaN(pagesNumber))"
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        //! Se crea un objeto llamado book que contiene las propiedades name, authorName, bookDescription y pagesNumber.
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showBooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showBooks() {
    const booksDiv = books.map((book, index) => `<h1>Book Number: ${index + 1}</h1>
    <p><strong>Book Name: </strong>${book.name}</p>
    <p><strong>Author Name:</strong> ${book.authorName}</p>
    <p><strong>Book Description:</strong> ${book.bookDescription}</p>
    <p><strong>No. of Pages:</strong> ${book.pagesNumber} mins</p>
    <button onclick="deleteBook(${index})">Delete</button>
    </div>`);

    document.getElementById('books').innerHTML = booksDiv.join('');
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

function deleteBook(index) {
    books.splice(index, 1);
    showBooks();
}



