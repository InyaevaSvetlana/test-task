//Выполняется прорисовка таблицы. Создаются строки в tbody и добавляются в них данные
import {getData} from './getData.js';

  function renderTable(){
    const tableData = document.querySelector('.main-data')
    const aboutTable = document.querySelector('.about')
    const aboutThLength = aboutTable.clientWidth
    tableData.innerHTML = '';

    const printAddress = async () => {
        const a = await getData();
        
        a.JSON.forEach((element) => {
                  const rowTable = document.createElement('tr');
              
                  rowTable.setAttribute('id', element.id);
                  rowTable.className = 'data-row';
                  rowTable.innerHTML = `
                      <td class='first-name render-data'>${element.name.firstName}</td>
                      <td class='last-name render-data'>${element.name.lastName}</td>
                      <td class='about render-data'>${element.about.slice(0, (aboutThLength / 2 )) + '...'}</td>
                      <td class='eye-color render-data'>${element.eyeColor}</td>
                  `;
                  tableData.append(rowTable);
                });
      };
      printAddress();
  }
  
  export {renderTable};