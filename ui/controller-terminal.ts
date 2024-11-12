import * as inquirer from '@inquirer/prompts'
import * as rl from 'readline-sync'
import { gravarArquivo,} from '../db/database';
import { veiculo } from '../src/types';
import * as chalk from 'chalk'
import { cadastrarVeiculo, excluirVeiculo, alterarVeiculo, buscarVeiculo, salvarSaida, listarVeiculos} from '../src/service';



export async function menutipo(){
    let tipo = await inquirer.select({
        message: '',
        choices:[
            {name: 'carro', value: 'Carro'},
            {name: 'moto', value: 'Moto'},
        ] 
    }) 
}

export function menu() {
    
    const opcao = {
        CADASTRARVEICULO: 1,
        LISTARVEICULOS: 2,
        DELETAR: 3,
        EDITAR: 4,
        BUSCARVEICULO: 5,
        SALVARSAIDA: 6,
    };
    
    
    
    
    while (true) {
        console.log(chalk.blueBright('1') + ' - Cadastrar Veiculo');
        console.log(chalk.blueBright('2') + ' - Listar veiculo');
        console.log(chalk.blueBright('3') + ' - Deletar veiculo');
        console.log(chalk.blueBright('4') + ' - Editar veiculo');
        console.log(chalk.blueBright('5') + ' - Buscar veiculo');
        console.log(chalk.blueBright('6') + ' - Saida veiculo');
    
            const escolha: number = rl.questionInt('Digite a operacao: ');
    
            switch (escolha) {
                case opcao.CADASTRARVEICULO:
                    cadastrarVeiculo();
                    break;
                    
                case opcao.LISTARVEICULOS:
                    listarVeiculos();  
                    break;
                    
                case opcao.BUSCARVEICULO:{
                    const placa = rl.question('Digite a placa do veiculo: ');
                    buscarVeiculo(placa);
                    break;
                };
                    
                case opcao.DELETAR:{
                    const placa = rl.question('Digite a placa do veiculo: ');
                    excluirVeiculo(placa);
                    break;
                };
                
                case opcao.EDITAR:{
                    const placa = rl.question('Digite a placa do veiculo: ');
                    alterarVeiculo(placa);
                    break;
                };
                case opcao.SALVARSAIDA:{
                    const placa = rl.question('Digite a placa do veiculo: ');
                    salvarSaida(placa);
                    break;
                };

                default:
                    console.log(chalk.red('Opção inválida. Por favor, tente novamente.'));
            }
        }
    }
