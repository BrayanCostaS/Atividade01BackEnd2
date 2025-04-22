import Produto from './modelo/produto';
import RepositorioClienteImpl from './repositorio/impl/repositorio-cliente-impl';

const repositorio = new RepositorioClienteImpl();
/*
//Lista todos os registros existentes
console.log("-------- Listar dados ------");
console.log(repositorio.listarTodos());

//Cria um novo produto
 const incluirCliente = new Produto(
    repositorio.obterProximoCodigo(), 
    "macarrao",
    "XXX",
    3.29
);

//Salva o registo
console.log("-------- Salvar Cliente ------");
repositorio.salvar(incluirCliente);
console.log(repositorio.listarTodos());*/

//Busca pelo codigo
console.log("-------- Buscar por Codigo ------");
const buscaPesso = repositorio.buscarPorCodigo(2);
console.log(buscaPesso);

//Atualizar registro
console.log("-------- Atualizar Registro ------");
buscaPesso.marca = "NOVAMARCAATUALIZADA";
buscaPesso.valor = 1.99;
repositorio.atualizar(buscaPesso.codigo, buscaPesso);
console.log(repositorio.listarTodos());

//Excluir registro
console.log("-------- Excluir Registro ------");
repositorio.excluir(1);
console.log(repositorio.listarTodos());

