let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');


fetch('https://jsonplaceholder.typicode.com/albums')
  .then(response => response.json())
  .then(json => {
    let dados = json;
    let headers = ['UserId', 'Id', 'Title'];

    btnGet.addEventListener('click', () => {
      let table = document.createElement('table');
      let headerRow = document.createElement('tr');

      headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
      });

      table.appendChild(headerRow);

      dados.forEach(emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
          let cell = document.createElement('td');
          let textNode = document.createTextNode(text);
          cell.appendChild(textNode);
          row.appendChild(cell);
        })

        table.appendChild(row);
      });
      myTable.appendChild(table);
    });

  });


