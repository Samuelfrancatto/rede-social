const searchBar = document.getElementById('search-bar');
const searchIcon = document.getElementById('search-icon');

// Função para esconder o ícone quando a search bar estiver ativa
searchBar.addEventListener('focus', () => {
    const iconPath = searchIcon.querySelector('path'); // Seleciona o <path> dentro do SVG
    if (iconPath) {
        iconPath.classList.add('hidden');  // Adiciona a classe para esconder o ícone com a animação
    }
});

// Função para mostrar o ícone quando a search bar perder o foco
searchBar.addEventListener('blur', () => {
    const iconPath = searchIcon.querySelector('path'); // Seleciona o <path> dentro do SVG
    if (iconPath) {
        iconPath.classList.remove('hidden');  // Remove a classe para mostrar o ícone com a animação
    }
});
