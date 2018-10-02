
// Book Constructor
function Book(title, author, isbn) {

    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {}

UI.prototype.addBookToList = book => {

    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='delete'>X<a></td>
    `;
    list.appendChild(row);
}
UI.prototype.clearFields = () => {

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listeners
const bookForm = document.getElementById('book-form');
bookForm.addEventListener('submit', e => {

    e.preventDefault();
    // form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    // Instantiate Book object
    const book = new Book(title, author, isbn);
    // Instantiate UI
    const ui = new UI();
    // Add book to list
    ui.addBookToList(book);
    ui.clearFields();
});