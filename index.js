const botoes = document.querySelectorAll('[data-abre-modal]');
for (let botao of botoes) {
    botao.addEventListener('click', abreModal);
};

function abreModal(e) {
    const botaoClicado = e.currentTarget;
    const seletorDoModal = botaoClicado.dataset.abreModal;
    const modal = document.querySelector(seletorDoModal);
    modal.classList.add('visivel');
};

const botoesDeFechar = document.querySelectorAll('.fechar-modal')
botoesDeFechar.forEach(fechar1 => fechar1.addEventListener('click', fecharModal));

function fecharModal(e) {
    const fecharModal = e.currentTarget;
    const modal = fecharModal.closest('.modal')
    modal.classList.remove('visivel');
};

const mascara = document.querySelector('#mascara');
mascara.addEventListener('click', fecharModalAberto);

function fecharModalAberto() {
    document.querySelector('.modal.visivel').classList.remove('visivel');
};