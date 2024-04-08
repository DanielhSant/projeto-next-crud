export default class Client {
    idBase: string
    nomeBase: string
    idadeBase: number

    constructor(nome: string, idade:number, id: any = null){
        this.nomeBase = nome
        this.idadeBase = idade
        this.idBase = id
    }
    
    static vazio(){
        return new Client('',0)
    }
    
    get id(){
        return this.idBase
    }
    
    get nome(){
        return this.nomeBase
    }
    
    get idade(){
        return this.idadeBase
    }

}    
