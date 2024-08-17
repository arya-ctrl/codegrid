const books = [
    { title: "Engineering Physics", author: "S.Chand", image: "./books/41vgA1RS08L._SY445_SX342_.jpg", available: true },
    { title: "Programming in c", author: "Serway & Jewett", image: "./books/download (1).jpeg", available: true },
    { title: "Mechanics of solid", author: "Thomas H. Cormen", image: "./books/download (2).jpeg", available: true }
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('profilePage').style.display = 'block';
    loadProfile();
});

function loadProfile() {
    document.getElementById('dueDate').textContent = "2024-09-01"; // Example due date
}

function toggleMenu() {
    const dropdown = document.getElementById('menuDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function goToIssueBooks() {
    document.getElementById('profilePage').style.display = 'none';
    document.getElementById('issueBooksPage').style.display = 'block';
    loadBooks();
}

function loadBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach(book => {
        bookList.innerHTML += `
            <div class="book" onclick="issueBook('${book.title}')">
                <img src="${book.image}" alt="${book.title}">
                <h2>${book.title}</h2>
                <p>Author: ${book.author}</p>
                <p>Status: ${book.available ? 'Available' : 'Issued'}</p>
            </div>
        `;
    });
}

function issueBook(title) {
    const book = books.find(book => book.title === title);
    if (book && book.available) {
        book.available = false;
        alert(`You have successfully issued "${book.title}".`);
        loadBooks();
        document.getElementById('dueDate').textContent = "2024-09-10"; // Example new due date
    } else {
        alert('This book is not available.');
    }
}

function goToProfile() {
    document.getElementById('issueBooksPage').style.display = 'none';
    document.getElementById('profilePage').style.display = 'block';
}
