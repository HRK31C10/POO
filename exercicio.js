class Jogador{
    constructor(posição,nome,idade,nacionalidade){
        this.posição = posição
        this.nome = nome
        this.idade = idade
        this.nacionalidade = nacionalidade
    }
    campo(){
        console.log(`${this.nome} joga na posição de ${this.posição}`)
    }
    nação(){
        console.log(`${this.nome} é ${this.nacionalidade}`)
    }
}
let xuxa = new Jogador('Meio campista','Xuxa',27,'Brasileiro')
console.log(xuxa)
xuxa.campo()
xuxa.nação()