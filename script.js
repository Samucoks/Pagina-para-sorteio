let botao = document.getElementById('botao')

let participantes = ['Pedro', 'Lucas', 'Marta', 'Letícia', 'Maria', 'Luana', 'Vitória', 'Augusto', 'Leandro', 'Marcelo', 'Lucas']
botao.onclick = ()=>{
    let Mnumber = Math.round(document.getElementById('Mnumber').value)
    let result= document.getElementById('result')
    let winner = document.getElementById('winner')
    let sorteio = Math.round(Math.random() * Mnumber)
    result.innerHTML = 'O número sorteado foi: ' + sorteio
    result.style.color ='blue'
    result.style.fontSize = '20px'
    if(sorteio < participantes.length){
    winner.innerHTML = "O nome do(a) Vencedor(a) é: "+participantes[sorteio]
    }
    else{
        winner.innerHTML = null
    }
}
