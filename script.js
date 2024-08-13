function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value / 100; 
    const peso = +document.getElementById('peso').value;
    if (peso <= 0 || altura <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    const valorIMC = (peso / (altura * altura)).toFixed(1);
    let classificaçao = "";

    if (valorIMC <= 16.9) {
        classificaçao = "Muito abaixo do peso";
    } else if (valorIMC >= 17 && valorIMC <= 18.4) {
        classificaçao = "Abaixo do peso";
    } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
        classificaçao = "Peso normal";
    } else if (valorIMC >= 25 && valorIMC <= 29.9) {
        classificaçao = "Acima do peso";
    } else if (valorIMC >= 30 && valorIMC <= 34.9) {
        classificaçao = "Obesidade grau I";
    } else if (valorIMC >= 35 && valorIMC <= 40) {
        classificaçao = "Obesidade grau II";
    } else if (valorIMC > 40) {
        classificaçao = "Obesidade grau III";
    }

    document.getElementById('resultado').innerText = `${nome}, seu IMC é ${valorIMC} (${classificaçao})`;
}