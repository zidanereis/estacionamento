import * as rl from 'readline-sync'
import { veiculo } from './types'
import * as inquirer from '@inquirer/prompts'
import * as Fs from 'fs'
import { criarArquivo, lerArquivo, gravarArquivo,} from '../db/database'
import * as chalk from 'chalk'


export function cadastrarVeiculo() {
    criarArquivo();


    let veiculos: veiculo[] = lerArquivo();


    const placa = rl.question('Digite a placa do veiculo: ');
    const modelo = rl.question('Digite o modelo do veiculo: ');
    const cor = rl.question('Digite a cor do veiculo: ');

    const veiculo: veiculo = {
        placa,
        modelo,
        cor,
        horarioEntrada: new Date().toLocaleTimeString(),
        horarioSaida: null 
    };
    veiculos.push(veiculo);
    gravarArquivo(veiculos);
    console.log('Veiculo cadastrado com sucesso!');
}


export function listarVeiculos() {
    const veiculos = lerArquivo();
    console.log(veiculos);
  }

export function salvarSaida(placa: string) {
    const veiculos: veiculo[] = lerArquivo();
    for (let i = 0; i < veiculos.length; i++) {
        if (veiculos[i].placa === placa) {
            veiculos[i].horarioSaida = new Date().toLocaleTimeString();
            gravarArquivo(veiculos);
            console.log('Horario de saida registrado');
            break;
        }
    }
}

export function buscarVeiculo(placa: string) {
    const veiculos: veiculo[] = lerArquivo();
    const veiculo = veiculos.find((veiculo) => veiculo.placa === placa);
    if (veiculo) {
        console.log(veiculo);
    } else {
        console.log('Veiculo nao encontrado');
    }
}

export function excluirVeiculo(placa: string) {
    const veiculos: veiculo[] = lerArquivo();
    const veiculo = veiculos.find((veiculo) => veiculo.placa === placa);
    if (veiculo) {
        veiculos.splice(veiculos.indexOf(veiculo), 1);
        gravarArquivo(veiculos);
        console.log('Veiculo excluido com sucesso');
    } else {
        console.log('Veiculo nao encontrado');
    }
}

export function alterarVeiculo(placa: string) {
    const veiculos: veiculo[] = lerArquivo();
    const veiculo = veiculos.find((veiculo) => veiculo.placa === placa);
    if (veiculo) {
        const novaPlaca = rl.question('Digite a nova placa do veiculo: ');
        const novaModelo = rl.question('Digite o novo modelo do veiculo: ');
        const novaCor = rl.question('Digite a nova cor do veiculo: ');
        veiculo.placa = novaPlaca;
        veiculo.modelo = novaModelo;
        veiculo.cor = novaCor;
        gravarArquivo(veiculos);
        console.log('Veiculo alterado com sucesso');
    } else {
        console.log('Veiculo nao encontrado');
    }
}



