document.addEventListener("DOMContentLoaded", function() {
    // Função para redirecionar para a página de alunos
    function irParaAlunos() {
        window.location.href = "/pages/alunos.html";
    }

    // Função para redirecionar para a página de conversas com alunos
    function irParaConversas() {
        window.location.href = "/pages/chats.html";
    }

    // Adicionar evento de clique aos botões do menu principal
    document.querySelectorAll('main button').forEach(function(botao) {
        botao.addEventListener('click', function() {
            if (this.textContent === 'Alunos') {
                irParaAlunos();
            } else if (this.textContent === 'Conversas com alunos') {
                irParaConversas();
            }
        });
    });

    // Adicionar evento de clique ao botão "Sair"
    document.querySelector('footer button').addEventListener('click', function() {
        // Lógica para sair da sessão (pode ser redirecionamento para a página de login)
        alert("Você saiu da sessão.");
        window.location.href = "/pages/index.html"; // Redireciona para a página de login
    });

    // Adicionar evento de clique ao link "Dúvidas"
    document.querySelector('footer a').addEventListener('click', function() {
        // Lógica para abrir uma página de suporte ou FAQ
        alert("Em breve teremos uma seção de dúvidas!");
    });
});