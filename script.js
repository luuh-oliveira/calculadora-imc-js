function camposValidos() {
    const nome = document.getElementById("nome").value
    const altura = parseFloat(document.getElementById("altura").value) 
    const peso = parseFloat(document.getElementById("peso").value)

    return (nome.trim() !== '' && !isNaN(altura) && !isNaN(peso))
}

function calcularImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(1)
}

function classificarImc(imc) {
    let classificacao = ""

    if (imc < 18.5) {
        classificacao = "abaixo do peso."
    } else if (imc < 25) {
        classificacao = "com peso ideal. Parabéns!"
    } else if (imc < 30) {
        classificacao = "levemente acima do peso."
    } else if (imc < 35) {
        classificacao = "com obesidade grau I."
    } else if (imc < 40) {
        classificacao = "com obesidade grau II."
    } else {
        classificacao = "com obesidade grau III."
    }

    return classificacao
}

function exibirImc() {

    const nome = document.getElementById("nome").value
    const altura = parseFloat(document.getElementById("altura").value) 
    const peso = parseFloat(document.getElementById("peso").value) 
    const resultado = document.getElementById("resultado")

    if (camposValidos()) {
        
        const imc = calcularImc(peso, altura)
        const classificacao = classificarImc(imc)

        resultado.textContent = `${nome}, seu IMC é ${imc} e você está ${classificacao}` 
    } else {
        resultado.textContent = "Preencha todos os campos!"
    }


}

document.getElementById("buttonCalcular")
    .addEventListener("click", exibirImc)