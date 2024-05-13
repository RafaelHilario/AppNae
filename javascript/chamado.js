document.addEventListener("DOMContentLoaded", function() {
    // Função para alternar a visibilidade do conteúdo do tópico
    function alternarConteudo(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        var topico = event.target.closest(".topicos");
        topico.classList.toggle("aberto");
    }

    // Adiciona evento de clique aos links dos tópicos
    document.querySelectorAll('.topicos a').forEach(function(link) {
        link.addEventListener('click', alternarConteudo);
    });
});