class Animal {
    //Criar os atributos
    constructor(tipo,nome,som,idade){
        this.tipo = tipo 
        this.nome = nome
        this.som = som
        this.idade = idade
    }
    //Criar o método latir
    latir(){
        console.log(`${this.nome} disse ${this.som}`)
    }
    fazerNiver(novaIdade){
        this.idade += 1
        console.log(`O ${this.nome} fez aniversário de ${this.idade} anos`)
    }
}
//instacindo a classe
let zeca = new Animal('cachorro','Zeca','auau',12)
console.log(zeca)
zeca.latir()
zeca.fazerNiver(1)