document.addEventListener("DOMContentLoaded", function() {
    // Função para alternar o status do aluno
    function alterarStatus(status) {
        var statusElement = document.querySelector('.footer .status p');
        var statusIcon = document.querySelector('.footer .status img');

        switch (status) {
            case 'offline':
                statusElement.textContent = 'Offline';
                statusIcon.src = '/assets/noMessage.svg';
                break;
            case 'ocupado':
                statusElement.textContent = 'Ocupado';
                statusIcon.src = '/assets/redCircle.svg';
                break;
            case 'online':
                statusElement.textContent = 'Online';
                statusIcon.src = '/assets/message.svg';
                break;
            default:
                statusElement.textContent = 'Offline';
                statusIcon.src = '/assets/noMessage.svg';
        }
    }

    // Adiciona eventos de clique aos status
    document.querySelectorAll('.footer .status').forEach(function(element) {
        element.addEventListener('click', function() {
            var status = this.dataset.status;
            alterarStatus(status);
        });
    });
});