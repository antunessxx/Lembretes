const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let lembretes =[]
exibirMenu()

function exibirMenu() {
	console.log(`
Menu:
1. Adicionar lembretes
2. Listar lembretes
3. Editar lembrete
4. Marcar lembrete como concluído
5. Sair`)

rl.question('Escolha uma opção: ', (opcao) => {
switch (opcao) {
	case '1':
 AdicionarLembretes()
	break
    case '2':
    listarLembretes()
                    break
            case '3':
	editarLembrete()
				break
			case '4':
				marcarComoConcluido()
				break
			case '5':
				rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function AdicionarLembretes() {

    rl.question('Digite o nome do lembrete: ', (lembrete) => {
    rl.question('Digite o dia: ', (dia) => {
    rl.question('Digite se foi concluido: ', (concluido) =>{
  
        lembretes.push({ nome: nome, cantor: cantor, genero: genero})
    
    console.log('Lembretes cadastrada com sucesso!')
 
     exibirMenu()

    })
    })
    })
}

function listarLembretes() {

    rl.question('Digite o nome do lembrete: ', (lembrete) => {
    rl.question('Digite o dia : ', (dia) => {
    rl.question('Digite se foi concluido: ', (concluido) =>{
  
        lembretes.push({ lembrete: lembrete, dia: dia, concluido: concluido})
    
    console.log('lembrete cadastrado com sucesso!')
 
     exibirMenu()

    })
    })
    })
}
