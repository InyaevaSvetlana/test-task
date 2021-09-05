//Функция скрытия колонок
function hiddenAllTable() {
    const hiddenBtn = document.querySelector('.btn-hidden-columns'),
          tableData = document.querySelector('.main-data');
  
          hiddenBtn.addEventListener('click', () => {
      if (!tableData.dataset.hidden || tableData.dataset.hidden === 'off') {
        tableData.setAttribute('data-hidden', 'on');
        hiddenBtn.innerHTML = 'Показать все колонки';
        tableData.style.display = 'none';
      } else if (tableData.dataset.hidden === 'on') {
        tableData.setAttribute('data-hidden', 'off');
        hiddenBtn.innerHTML = 'Скрыть все колонки';
        tableData.style.display = '';
      }
    });
  }
  
  export {hiddenAllTable}