function calcularCombustivel() {
    const precoCombustivel = 7.00;
    const consumoCarro = 20;

    let dinheiroUsuario = parseFloat(document.getElementById("dinheiroUsuario").value); 
    let litrosCombustivel = dinheiroUsuario / precoCombustivel; 
    let kmPossiveis = litrosCombustivel * consumoCarro;

    document.getElementById("resultado").innerHTML = `é possível comprar ${litrosCombustivel.toFixed()} litros de combustível. O carro conseguirá andar ${kmPossiveis.toFixed()} km`;
      
    };
  