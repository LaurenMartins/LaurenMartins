function simular() {
    let lancamentos = 1000000;
    let ocorrencias = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < lancamentos; i++) {
      let resultado = Math.floor(Math.random() * 6) + 1;
      ocorrencias[resultado - 1]++;
    }

    for (let i = 0; i < ocorrencias.length; i++) {
      let frequencia = (ocorrencias[i] / lancamentos) * 100;
      document.getElementById("face" + (i + 1)).innerHTML = ocorrencias[i];
      document.getElementById(
        "freq" + (i + 1)
      ).innerHTML = `${frequencia.toFixed(2)}%`;
    }
  }