function calculateResult(operation) {
    // Form elemanlarına erişim
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var resultElement = document.getElementById('result');

    // İşlemi gerçekleştirme
    var result;
    switch (operation) {
      case 'add':
        result = number1 + number2;
        break;
      case 'subtract':
        result = number1 - number2;
        break;
      case 'multiply':
        result = number1 * number2;
        break;
      case 'divide':
        // Bölme işlemi sırasında sıfıra bölünme durumunu kontrol etme
        result = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
        break;
      default:
        result = 'Invalid operation';
    }

    // Sonucu gösterme
    resultElement.textContent = 'Result is: ' + result;
  }