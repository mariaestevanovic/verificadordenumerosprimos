function isPrime(number) {
    if (number <= 1) {
      return false;
    }

    if (number === 2) {
      return true;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

  function checkPrime() {
    const numberInput = document.getElementById('numberInput');
    const result = document.getElementById('result');
    const number = parseInt(numberInput.value);

    if (isPrime(number)) {
      result.textContent = `${number} é um número primo.`;
    } else {
      result.textContent = `${number} não é um número primo.`;
    }
  }
