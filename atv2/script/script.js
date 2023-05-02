function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let imc = peso / (altura * altura);

    let interpretacao = "";
    if (imc < 18.5) {
      interpretacao = "abaixo do peso";
    } else if (imc < 25) {
      interpretacao = "com peso normal";
    } else if (imc < 30) {
      interpretacao = "levemente acima do peso";
    } else if (imc < 35) {
      interpretacao = "com obesidade grau I";
    } else if (imc < 40) {
      interpretacao = "com obesidade grau II (severa)";
    } else {
      interpretacao = "com obesidade grau III (mórbida)";
    }

    document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed()}. Você está ${interpretacao}.`;}