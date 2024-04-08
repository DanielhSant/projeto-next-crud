import Client from "./Clients"

export default interface ClientRepositorio {
    salvar(Client: Client):Promise<Client>
    excluir(Client: Client):Promise<void>
    obterTodos():Promise<Client[]>
}