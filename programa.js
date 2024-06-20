const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let Lembretes =[]
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
