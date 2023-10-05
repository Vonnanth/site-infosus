const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var typed = new Typed('#word-type', {
    strings: ['Monitoramento.', 'Gerenciamento.', 'Acompanhamento.', 'Supervisão.'],
    typeSpeed: 100,
    loop: true,
    startDelay: 1000, // Atraso de 1 segundo antes de começar
    backSpeed: 50 // 50 milissegundos por caractere excluído
});