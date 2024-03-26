
document.addEventListener('DOMContentLoaded', (event) => {
    const headerElement = document.getElementById('main-header');
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            headerElement.innerHTML = data;
        })
        .catch(error => console.error('Error loading the header:', error));
});
