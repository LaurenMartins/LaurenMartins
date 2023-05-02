let nomes = [];

		function adicionarNome() {
			let nome = document.getElementById("nome").value;
			nomes.push(nome);
			document.getElementById("nomesDigitados").innerHTML += "<li>" + nome + "</li>";
			document.getElementById("nome").value = "";
		}

		function inverterNomes() {
			document.getElementById("nomesInvertidos").innerHTML = "";
			for (let i = 0; i < nomes.length; i++) {
				let nomeInvertido = "";
				for (let j = nomes[i].length - 1; j >= 0; j--) {
					nomeInvertido += nomes[i][j];
				}
				document.getElementById("nomesInvertidos").innerHTML += "<li>" + nomeInvertido + "</li>";
			}
		}