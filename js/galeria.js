window.addEventListener("scroll", function() {
    var footer = document.getElementById("invisible-footer");
    // Verifica se o usuário rolou até o final da página
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        footer.style.display = "block"; // Mostra o footer
        footer.style.transform = "translateY(0)"; // Move o footer para a posição visível
        footer.style.transition = "transform 0.3s ease"; // Adiciona uma transição suave
    } else {
        footer.style.transform = "translateY(100%)"; // Move o footer para fora da tela
        setTimeout(function() {
            footer.style.display = "block"; // Esconde o footer
        }); // Ajusta o tempo para corresponder à duração da transição
    }
});

let isLightTheme = true; 
document.getElementById('icone').addEventListener('click', function() {
    if (isLightTheme) {
        // Muda para tema escuro
        document.documentElement.style.setProperty('--bg-color', '#333333'); 
        document.documentElement.style.setProperty('--text-color', '#ffffff'); 
        document.getElementById('moon-icon').src = '/img/sun.png'; 
    } else {
        // Muda para tema claro
        document.documentElement.style.setProperty('--bg-color', '#ffffff'); 
        document.documentElement.style.setProperty('--text-color', '#000000'); 
        document.getElementById('moon-icon').src = '/img/moon.png'; 
    }
    isLightTheme = !isLightTheme; // Inverte o estado do tema
});