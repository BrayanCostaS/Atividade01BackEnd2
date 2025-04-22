export default class Cliente{
    codigo: number;
    descricao: string;
    marca: string;
    valor:number;

    constructor(codigo: number, descricao: string, 
        marca:string, valor:number){

        this.codigo = codigo;
        this.descricao = descricao;
        this.marca = marca;
        this.valor = valor;
    }
}
// export default permite que a classe possa ser usada outras vezes no projeto
// essa pagina é a conversão de JSON para objeto
