
function calcularImc() {

    const nome = document.getElementById("nome").value
    const altura = parseFloat(document.getElementById("altura").value) 
    const peso = parseFloat(document.getElementById("peso").value) 
    const resultado = document.getElementById("resultado")

    if (nome.trim() !== '' && !isNaN(altura) && !isNaN(peso)) {
        
        const imc = (peso / (altura * altura)).toFixed(1)

        let classificação = ""

        if (imc < 18.5) {
            classificação = "abaixo do peso."
        } else if (imc <25) {
            classificação = "com peso ideal. Parabéns!"
        } else if (imc < 30) {
            classificação = "levemente acima do peso."
        } else if (imc < 35) {
            classificação = "com obesidade grau I."
        } else if (imc < 40) {
            classificação = "com obesidade grau II."
        } else {
            classificação = "com obesidade grau III."
        }

        resultado.textContent = `${nome}, seu IMC é ${imc} e você está ${classificação}` 

    } else {
        resultado.textContent = "Preencha todos os campos!"
    }


}

document.getElementById("buttonCalcular")
    .addEventListener("click", calcularImc)