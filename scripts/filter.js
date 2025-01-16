// Function to hide elements that do not match the given type
function hideByType(type) {
    document.querySelectorAll('.col').forEach(el => {
        if (el.getAttribute('data-tipo') !== type) {
            el.classList.add('hidden');
        } else {
            el.classList.remove('hidden');
        }
    });
}

// Function to show all elements
function showAll() {
    document.querySelectorAll('.col').forEach(el => {
        el.classList.remove('hidden');
    });
}

// Event listener for 'Frascos' link
document.querySelector('.tipos a:contains("Frascos")').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default action of the link
    hideByType('frasco');
});

// Event listener for 'Potes' link
document.querySelector('.tipos a:contains("Potes")').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default action of the link
    hideByType('pote');
});

// Event listener for 'Bombonas' link
document.querySelector('.tipos a:contains("Bombonas")').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default action of the link
    hideByType('bombona');
});

// If you have a button or element to show all elements again, use this:
document.getElementById('showAllButton').addEventListener('click', showAll);