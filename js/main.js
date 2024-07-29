const calcular = document.getElementById('calcular')

function img() {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        const imc = (peso / (altura * altura)).toFixed(2)
        resultado.textContent = imc

        let classificacao = ''

        if(imc < 18.5){
            classificacao = "Abaixo do peso"
        }else if(imc < 24.9){
            classificacao = "Peso ideal"
        }else if(imc < 29.9){
            classificacao = "Sobrepeso"
        }else if(imc >= 30){
            classificacao = "Obesidade"
        }

        resultado.textContent = `${nome} seu IMC é de ${imc} e você está ${classificacao}`
    }else{
        resultado.textContent = 'Preencha todos os campos'
    }
}

calcular.addEventListener('click', img)