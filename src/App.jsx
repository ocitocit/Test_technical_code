import React, { useState } from "react";

function App() {
  const [inputNumber, setInputNumber] = useState("");
  const [triangle, setTriangle] = useState("");
  const [oddNumbers, setOddNumbers] = useState("");
  const [primeNumbers, setPrimeNumbers] = useState("");

  // Fungsi untuk menghasilkan segitiga piramida
  const generateTriangle = () => {
    const num = parseInt(inputNumber);
    let triangleStr = "";

    for (let i = 1; i <= num.toString().length; i++) {
      let line = "";
      for (let j = 1; j <= num.toString().length; j++) {
        if (j > num.toString().length - i) {
          line += `${num.toString()[j - 1]}`;
        } else {
          line += " ";
        }
      }
      triangleStr += `${line}\n`;
    }

    setTriangle(triangleStr);
  };

  // Fungsi untuk menghasilkan bilangan ganjil
  const generateOddNumbers = () => {
    const num = parseInt(inputNumber);
    let oddNumbersStr = "";

    for (let i = 1; i <= num; i++) {
      if (i % 2 !== 0) {
        oddNumbersStr += `${i}, `;
      }
    }

    setOddNumbers(oddNumbersStr.slice(0, -2));
  };

  // Fungsi untuk memeriksa apakah suatu angka prima
  const isPrime = (number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  };

  // Fungsi untuk menghasilkan bilangan prima
  const generatePrimeNumbers = () => {
    const num = parseInt(inputNumber);
    let primeNumbersStr = "";

    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) {
        primeNumbersStr += `${i}, `;
      }
    }

    setPrimeNumbers(primeNumbersStr.slice(0, -2));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Input Angka"
        id="inputNumber"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
      />
      <br />
      <button onClick={generateTriangle}>Generate Segitiga</button>
      <button onClick={generateOddNumbers}>Generate Bilangan Ganjil</button>
      <button onClick={generatePrimeNumbers}>Generate Bilangan Prima</button>
      <br />
      <h2>Hasil:</h2>
      {triangle && <pre>{triangle}</pre>}
      {oddNumbers && <p>{oddNumbers}</p>}
      {primeNumbers && <p>{primeNumbers}</p>}
    </div>
  );
}

export default App;
