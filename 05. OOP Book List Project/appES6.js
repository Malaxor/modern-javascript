
class Book {

    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {

    addBookToList(book) {

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
    showAlert(message, className) {

        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
    
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
    
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    deleteBook(target) {

        if(target.className === 'delete') {

            target.parentElement.parentElement.remove();
        }
    }
    clearFields() {

        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}
// Event Listener for add book
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
    // validate
    if(!title || !author || !isbn) {

        // Error message
        ui.showAlert('Please fill in all fields.', 'error');
    } 
    else {
        
        ui.addBookToList(book);
        ui.clearFields();
        ui.showAlert('Book added', 'success');
    }
});

// Event Listener to delete book
document.getElementById('book-list').addEventListener('click', e => {

    e.preventDefault();

    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert(`Book removed`, 'success');
});