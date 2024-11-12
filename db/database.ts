import * as Fs from 'fs'
import { veiculo } from '../src/types'

export function criarArquivo(): void {
   if (!Fs.existsSync('./veiculos.json')) {
       Fs.writeFileSync('./veiculos.json', '[]'); // Cria um arquivo com um array vazio
   }
}

export function lerArquivo():veiculo[] {
      const data = Fs.readFileSync('./veiculos.json', 'utf-8');
      return JSON.parse(data) as veiculo[];
  }

export function gravarArquivo(data: veiculo[]): void {
   Fs.writeFileSync('./veiculos.json', JSON.stringify(data, null, 2));
}

