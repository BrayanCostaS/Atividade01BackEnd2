import Cliente from "../modelo/cliente";

export default interface IRepositorioCliente {
    listarTodos():Array<Cliente>;
    buscarPorId(codigo:number): Cliente;
    salvar(cliente:Cliente): void;
    atualizar(codigo:number, cliente:Cliente): void;
    excluir(codigo:number): void;
}