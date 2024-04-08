import Client from "@/core/Clients"
import { IconDelete, IconEdit } from "./Icons"

interface TableProps{
    clients: Client[]
    ClientSelection?:(client: Client) => void
    ClientDelete?:(client: Client) => void

}


export default function Table (props: TableProps){


    const showAction = props.ClientSelection || props.ClientDelete

    function renderHeader(){
        return(
            <tr>
                <th className="p-4 text-left">Código</th>
                <th className="p-4 text-left">Nome</th>
                <th className="p-4 text-left">Idade</th>
                {showAction? (<th className="p-4 text-center">Ações</th>):false}

            </tr>
        )
    }


    function renderData(){
        return props.clients?.map((Client, i) => {
            return(
                <tr key={Client.id}
                className={`${i % 2 === 0 ? 'bg-purple-200': 'bg-purple-100'}`}>
                    <td className="text-left p-4">{Client.id}</td>
                    <td className="text-left p-4">{Client.nome}</td>
                    <td className="text-left p-4">{Client.idade}</td>
                    {showAction? (renderActions(Client)):false}
                </tr>
            )
        })
    }



    function renderActions(client: Client){
        return (
            <td className="flex justify-center">
                {props.ClientSelection? (
                    <button onClick={(e)=> props.ClientSelection?.(client)} className= {` 
                    flex justify-center items-center
                    text-green-500 rounded-full p-2 m-1
                    hover:bg-purple-50
                    `}>
                        {IconEdit}
                    </button>
                ): false}
                {props.ClientDelete? (
                    <button onClick= {(e) => props.ClientDelete?.(client)} className={`
                    flex justify-center items-center
                    text-red-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                    
                    `}>
                        {IconDelete}
                    </button>
                ):false}
            </td>
        )
    }

    return(
        <table className={`
            w-full
            border-2 rounded-xl overflow-hidden
        `}>
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-100
                rounded-m
                
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}