import {getData} from './getData.js';
import {renderTable} from './renderTable.js';
import {sortTable} from './sortTable.js';
import{hiddenAllTable} from './heddenAllTable.js';
import{editForm} from './editForm.js'


getData().then(() => {
renderTable()
sortTable()
hiddenAllTable()
editForm()}
)