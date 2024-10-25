// JavaScript for the search functionality
document.getElementById('searchButton').addEventListener('click', performSearch);
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    if (query) {
        // Redirect to search results page or process search
        window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a search term.');
    }
}
