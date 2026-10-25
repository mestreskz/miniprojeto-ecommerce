import promptsync = require("prompt-sync");
import { cadastrarCliente, listarClientes } from "./clientes";
import type { cliente } from "./types";

const prompt = promptsync({sigint:true});

const nomeInput: string = prompt('Digite o nome do cliente: ');
const idadeInput: number = Number(prompt('Digite o idade do cliente: '));

const novoCliente: cliente = {
    nome: nomeInput,
    idade: idadeInput
} 

cadastrarCliente(novoCliente);

console.log(listarClientes());