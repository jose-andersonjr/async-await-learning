// sintaxe
function primeiraFuncao(){

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log('Esperou isso aqui')
            resolve()//Resolvo a promise pra realizar o fluxo dela corretamente
        }, 1000)

    })

}

async function segundaFuncao() {

    console.log('Iniciou')

    primeiraFuncao()

    console.log('Terminou')
    
} 

segundaFuncao()
