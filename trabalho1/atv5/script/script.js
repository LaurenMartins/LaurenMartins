function verificarPalindromo() {
    const palavra = document.getElementById("palavra").value;
    const palavraInvertida = palavra.split("").reverse().join("");
    if (palavra === palavraInvertida) {
      document.getElementById("resultado").innerText = `${palavra} é um palíndromo`;
    } else {
      document.getElementById("resultado").innerText = `${palavra} não é um palíndromo.`;
    }
  }