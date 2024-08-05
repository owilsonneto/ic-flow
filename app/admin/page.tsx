
import { DataTable } from '@/components/table/DataTable'
import { Payment, columns } from '@/components/table/columns'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData(): Promise<Payment[]> {
      
    return [
      {
        codigo: "183969",
        nome: "Brasilis - Um espetáculo circo Turma da Mônica",
        lanrp: 72,
        analisar: 4,
        aguarde: 12,
        lanselic: 12,
        feito: 24,
        total: 662
      },
      {
        codigo: "220077",
        nome: "Clara Nunes, a tal guerreira",
        lanrp: 0,
        analisar: 0,
        aguarde: 0,
        lanselic: 0,
        feito: 0,
        total: 0
      },
      {
        codigo: "230205",
        nome: "Conserto para dois",
        lanrp: 12,
        analisar: 22,
        aguarde: 38,
        lanselic: 9,
        feito: 22,
        total: 678
      },
      {
        codigo: "233909",
        nome: "Exposição Voice of the Oceans",
        lanrp: 0,
        analisar: 0,
        aguarde: 0,
        lanselic: 0,
        feito: 0,
        total: 0
      },
      {
        codigo: "235622",
        nome: "Plano anual Gaia+",
        lanrp: 0,
        analisar: 1,
        aguarde: 69,
        lanselic: 0,
        feito: 42,
        total: 112
      },
      {
        codigo: "234585",
        nome: "Plano de atividades Mis",
        lanrp: 0,
        analisar: 0,
        aguarde: 0,
        lanselic: 0,
        feito: 0,
        total: 0
      },
      {
        codigo: "223129",
        nome: "Programa interativo e intinerante Monet: à beira d'água",
        lanrp: 52,
        analisar: 493,
        aguarde: 63,
        lanselic: 37,
        feito: 0,
        total: 642
      },
      {
        codigo: "200477",
        nome: "Sinfonia dos dois mundos",
        lanrp: 11,
        analisar: 8,
        aguarde: 5,
        lanselic: 9,
        feito: 11,
        total: 444
      },
      {
        codigo: "210274",
        nome: "Tarsila, a brasileira",
        lanrp: 0,
        analisar: 22,
        aguarde: 33,
        lanselic: 21,
        feito: 11,
        total: 222
      },
      {
        codigo: "181300",
        nome: "Turma da Mônica em...",
        lanrp: 55,
        analisar: 12,
        aguarde: 33,
        lanselic: 72,
        feito: 12,
        total: 888
      },
      {
        codigo: "183500",
        nome: "Um grande encontro, o musical",
        lanrp: 32,
        analisar: 43,
        aguarde: 12,
        lanselic: 22,
        feito: 6,
        total: 322
      },
      {
        codigo: "232226",
        nome: "Varanda cultural de Nazaré",
        lanrp: 28,
        analisar: 12,
        aguarde: 5,
        lanselic: 7,
        feito: 15,
        total: 512
      },
      // ...
    ]
  }


const Admin = async () => {
  const data = await getData()
  
  return (
    <div className='mx-auto flex max-w-7xl flex-col space-y-14'>
      <header className='admin-header'>
        <Link href="/" className='cursor-pointer'>
            <Image 
                src="/icons/iclogobranca.png"
                height={32}
                width={162}
                alt='Logo'
                className='h-8 w-fit'
            />
        </Link>
        <p className='text-16-semibold'>
            Controle planilhas
        </p>
      </header>
      <main className='admin-main'>
        <section className='w-full space-y-4'>
          <div className='flex justify-between'>
            <h1 className='header'>Bem-vinde, wil 🫶</h1>
            <Button className='status-badge bg-light-200 text-purple-1'>
              Atualizar
            </Button>
          </div>
          <div className='flex justify-between'>
            
            <p className='text-dark-700'>Acompanhe o resumo das planilhas.</p>
            
            <p className='text-dark-700 italic'>última atualização:...</p>
          </div>
        </section>
        

        <DataTable columns={columns} data={data} />
      </main>
    </div>
  )
}

export default Admin
