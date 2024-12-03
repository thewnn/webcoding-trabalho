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

let isLightTheme = true; //significa que o tema atual eh o branco
document.getElementById('icone').addEventListener('click', function() { //quando clicar no elemento ( que no caso eh o icone ) sera executado o que esta no eventlistener
    if (isLightTheme) { //verifica se esta no tema claro
        //muda para o tema escuro 
        document.documentElement.style.setProperty('--bg-color', '#333333'); 
        document.documentElement.style.setProperty('--text-color', '#ffffff'); 
        document.getElementById('moon-icon').src = '/img/sun.png'; // Muda para o ícone do sol
    } else { //muda para o tema claro 
        document.documentElement.style.setProperty('--bg-color', '#ffffff'); 
        document.documentElement.style.setProperty('--text-color', '#000000'); 
        document.getElementById('moon-icon').src = '/img/moon.png'; // Muda para o ícone da lua
    }
    isLightTheme = !isLightTheme; // Inverte o estado do tema
});