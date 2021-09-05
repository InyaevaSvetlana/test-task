//Функция работы формы редактирования. Получает строку, для которой открывается форма.
function editForm() {
  const table = document.querySelector('.table-data');
  const editForm = document.querySelector('.form-hidden');
  const inputs = editForm.querySelectorAll('input');
  const textarea = editForm.querySelector('textarea');
  const btnClose = editForm.querySelector('.btn-close');
  const btnEdit = editForm.querySelector('.btn-edit')

  table.addEventListener('click', function(event) {
    const row = event.target.closest('.data-row'); 
    
    if (!row) return; 
    if (!table.contains(row)) return; 

    editForm.style.cssText = `display: block;  top: ${row.offsetTop}px; left: ${row.offsetWidth + 50}px;`;

    inputs[0].value = row.cells[0].innerHTML;
    inputs[1].value = row.cells[1].innerHTML;
    textarea.value = row.cells[2].innerHTML.slice(0, row.cells[2].innerHTML.length - 3);
    inputs[2].value = row.cells[3].innerHTML;
  });
  btnClose.addEventListener('click', () => editForm.style='');
  btnEdit.addEventListener('click', () => editForm.style='');
}

export {editForm}