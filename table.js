const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = Array.from(tbody.rows);

thead.onclick = handleSort;

function handleSort(e) {
  const header = e.target;
  const i = header.cellIndex;
  const comparator = makeComparator(i);
  const sortedRows = rows.sort(comparator);

  tbody.append(...sortedRows);
  
  for (const th of thead.rows[0].cells) {
    th.classList.toggle('sorted', th == header);
  }
}

function makeComparator(i) {
  return i == 2 ?
    function comparator(row1, row2) {
      const val1 = row1.cells[i].textContent.slice(1);
      const val2 = row2.cells[i].textContent.slice(1);
      return val1 - val2;
    }
    :
    function comparator(row1, row2) {
      const val1 = row1.cells[i].textContent;
      const val2 = row2.cells[i].textContent;
      if (val1 > val2) return 1;
      if (val1 < val2) return -1;
      return 0;
    }
}