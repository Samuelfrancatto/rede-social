const searchBar = document.getElementById('search-bar');
const searchIcon = document.getElementById('search-icon');

// Função para esconder o ícone quando a search bar estiver ativa ou tiver texto
function hideShowSearchIcon() {
    const iconPath = searchIcon.querySelector('path'); // Seleciona o <path> dentro do SVG
    
    if (searchBar.value.trim() !== "" || document.activeElement === searchBar) {
        // Se houver texto ou a search bar estiver em foco, esconde o ícone
        if (iconPath) {
            iconPath.classList.add('hidden');
        }
    } else {
        // Se não houver texto e a search bar não estiver em foco, mostra o ícone
        if (iconPath) {
            iconPath.classList.remove('hidden');
        }
    }
}

// Evento de focus na barra de pesquisa
searchBar.addEventListener('focus', () => {
    hideShowSearchIcon();
});

// Evento de blur na barra de pesquisa
searchBar.addEventListener('blur', () => {
    hideShowSearchIcon();
});

// Evento para detectar quando o conteúdo da barra de pesquisa mudar
searchBar.addEventListener('input', () => {
    hideShowSearchIcon();
});
