// // sintaxe
// function primeiraFuncao(){

//     return new Promise((resolve) => {

//         setTimeout(() => {
//             console.log('Esperou isso aqui')
//             resolve()//Resolvo a promise pra realizar o fluxo dela corretamente
//         }, 1000)

//     })

// }

// async function segundaFuncao() {

//     console.log('Iniciou')

//     await primeiraFuncao()

//     console.log('Terminou')
    
// } 

// segundaFuncao()

//Prático 
function getUser(id) {

    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then(data => data.json())
        .catch(erro => console.log(erro))

}

async function showUserName(id) {
    // try e catch para tratamento de erros
    try {
        const user = await getUser(id)

        console.log(`O nome do usuário é: ${user.data.first_name}`)
    
    } catch(erro) {
            console.log(`Erro: ${erro}`)
    }

}

showUserName(3)