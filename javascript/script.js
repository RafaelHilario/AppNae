//index.html
document.addEventListener("DOMContentLoaded", function() {
    // Função para validar o formulário de login
    function validarLogin() {
        // Obtém os valores dos campos de entrada
        var matricula = document.querySelector('input[type="text"]').value;
        var senha = document.querySelector('input[type="password"]').value;

        // Verifica se os campos estão preenchidos
        if (matricula.trim() === "" || senha.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return false;
        }

        // Se tudo estiver correto, redireciona para a página do portal
        window.location.href = "/pages/portal.html";
        return true;
    }

    // Adiciona o evento de clique ao botão de login
    document.querySelector('button a').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        validarLogin(); // Chama a função de validação do login
    });

    // Função para alternar a visibilidade da senha
    document.querySelector('#checkbox').addEventListener('change', function() {
        var senhaInput = document.querySelector('input[type="password"]');
        senhaInput.type = this.checked ? "text" : "password";
    });

    // Adiciona a funcionalidade ao botão "Sou responsável"
    document.querySelector('.botoes .maior').addEventListener('click', function() {
        alert("Função de responsável não implementada ainda.");
    });
});
