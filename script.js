function abrirModal() {
  const voltar = document.querySelector('.voltar i');
  const setup = document.querySelector('.setup');
  const modalButton = document.querySelector('.modal-button');

  modalButton.addEventListener('click', function (event) {
    event.preventDefault();
    setup.classList.add('abrir');
    setup.classList.remove('none');
  });

  voltar.addEventListener('click', function (event) {
    event.preventDefault();
    setup.classList.remove('abrir');
    setup.classList.add('none');
  });
}
abrirModal();
