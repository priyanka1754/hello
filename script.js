
//import * as XLSX from 'xlsx';
// const XLSX = window.XLSX;
// async function processFile(file) {
//   const jsonData = await readExcel(file);
//   console.log(jsonData);
// }
// const file = new File([""], "example.xlsx", { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
// processFile(file);
// function processFile(file) {
//   const jsonData = readExcel(file);
//   jsonData.then((data) => {
//     console.log(data);
//   });
// }
// const file = new File([""], "data.xlsx", { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
// processFile(file);

async function processFile() {
  const response = await fetch('data.xlsx');
  const data = await response.arrayBuffer();
  const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const file = new File([blob], 'data.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const jsonData = await readExcel(file);
  console.log(jsonData);
}

document.addEventListener('DOMContentLoaded', function () {
    // Function to read and display Excel content
    function readExcel() {
      // Replace 'your-excel-file.xlsx' with your actual Excel file name
      const excelFile = 'data.xlsx';
      
      // Read Excel file
      const workbook = XLSX.readFile(excelFile);
  
      // Assume the first sheet is the target
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
  
      // Convert sheet to JSON
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  
      // Display data in the table
      const table = document.getElementById('excelTable');
      jsonData.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cellData => {
          const td = document.createElement('td');
          td.textContent = cellData;
          tr.appendChild(td);
        });
        table.appendChild(tr);
      });
    }
  
    // Call the function to read and display Excel content
    readExcel();
  });
  