function fetchBooks() {
  // Fetch data from the Game of Thrones API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json()) // Convert the response to JSON
    .then(data => renderBooks(data)) // Pass the JSON data to renderBooks function
    .catch(error => console.error('Error fetching books:', error)); // Handle any errors
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name; // Display the book name
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
