import Client from "@/core/Clients";
import Entry from "./Entry";
import { useState } from "react";
import Button from "./Button";

interface FormularioProps {
    client: Client
    cancel?: ()=>void
    clientChange?: (client: Client) => void

}

export default function Formulario(props :FormularioProps){
    const id = props.client?.id ?? null

    const [name, SetName] = useState(props.client?.nome ?? '')

    const [idade, setIdade] = useState(props.client?.idade ?? 0)

    return(
        <div>
            {id ?(
                <Entry 
                readonly
                text="Código" 
                value= {id} 
                className="mb-4"
                />
                
            ):false}
            <Entry 
            text="Nome" 
            value={name}
            valorMudou = {SetName}
            className="mb-4"
            />
           
       
            
            <Entry 
            text="Idade" 
            value={idade} 
            type='number'
            valorMudou ={setIdade}
            />
            <div className="flex justify-end mt-7">
                <Button 
                cor="blue" 
                className="mr-2"
                onClick={()=> props.clientChange?.(new Client(name, +idade,id))}
                >
                    {id ? 'Alterar': 'Salvar'}
                </Button>
                <Button 
                onClick={props.cancel}
                >
                    Cancelar
                </Button>
            </div>
        </div>
    )
}