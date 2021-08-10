var nome = document.getElementById("nome")
const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
const resultado = document.getElementById("resultado")
const buttonCalcular = document.getElementById("buttonCalcular")

function calcularImc() {
    if (nome.value !== '' && altura.value !== '' && peso.value !== '') {
        const imc = parseFloat(peso.value) / (parseFloat(altura.value) ** 2)
        if (imc < 18.5) {
            resultado.textContent = nome + ", seu IMC é " + imc + " e você está abaixo do peso."
        } 
    } else {
        alert("Preencha todos os campos!")
    }
}

buttonCalcular.addEventListener("click", calcularImc)