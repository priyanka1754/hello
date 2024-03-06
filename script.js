document.addEventListener('DOMContentLoaded', function () {
    // Function to read and display Excel content
    function readExcel() {
      // Replace 'your-excel-file.xlsx' with your actual Excel file name
      const excelFile = 'product.xlsx';
      
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
  