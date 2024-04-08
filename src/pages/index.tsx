import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Clients";
import Button from "@/components/Button";
import Formulario from "@/components/Formulario";
import { useEffect, useState } from "react";
import ColecaoCliente from "@/backend/db/ClientColection";
import ClientRepositorio from "@/core/ClientRepositorie";
import initFirebase from "@/backend/config";


const inter = Inter({ subsets: ["latin"] });

initFirebase()

export default function Home() {


  const repo: ClientRepositorio = new ColecaoCliente()

  const [client, setClient] = useState<Client>(Client.vazio())
  const [clients, setClients] = useState<Client[]>([])
  const [visivel, setVisivel] = useState<'table'| 'form'>('table')

  useEffect(() => {
    obterTodos()}, [])

  async function obterTodos(){
    const clients = await repo.obterTodos()
      setClients(clients)
      setVisivel('table')
  }


  function ClientSelection(client: Client){
    setClient(client)
    setVisivel('form')
  }

  function ClientDelete(client: Client){
    console.log(`Excluir o cliente ${client.nome}`)
  }


async function saveClient(client: Client){
  console.log('save cliente')
  await repo.salvar(client)
  obterTodos()

}

function newClient(){
  setClient(Client.vazio)
  setVisivel('form')
}

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'table' ?(

        <>
          <div className="flex justify-end">
            <Button 
            className="mb-4" cor = 'green'
            onClick = {newClient}
            > 
              Novo Cliente
            </Button>
          </div>
          
          <Table clients={clients}
          ClientSelection={ClientSelection}
          ClientDelete={ClientDelete}
          ></Table>
        </>
       ) : (
       <Formulario 
       client={client} 
       clientChange={saveClient}
       cancel={() => setVisivel('table')}
       />
       )}
        </Layout>
      
    </div>

  );
}
