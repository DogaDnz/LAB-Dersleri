function generateMultiplicationTable() {
    
    const number = document.getElementById('number').value;
    const table = document.getElementById('multiplicationTable');

    table.innerHTML = '';

    
    for (let i = 1; i <= 10; i++) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        
        cell1.textContent = `${number} x ${i}`;
        cell2.textContent = number * i;
    }
}