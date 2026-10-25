import type {cliente} from "./types.ts"

const clientes : cliente[] = [];

function cadastrarCliente(cliente:cliente):void{
    clientes.push(cliente);
}

function listarClientes() : cliente[] {
    return clientes;
}

export {cadastrarCliente,listarClientes}