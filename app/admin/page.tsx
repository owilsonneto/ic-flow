
import StatCard from '@/components/table/StatCard'
import { DataTable } from '@/components/table/DataTable'
import { Payment, columns } from '@/components/table/columns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
        id: "223129",
        nome: "Educativo Monet à beira d'água",
        rp: 52,
        analise: 493,
        aguarda: 63,
        lancar: 37,
        ok: 0,
        total: 642
      },
      {
        id: "235622",
        nome: "Plano anual Gaia+",
        rp: 0,
        analise: 1,
        aguarda: 69,
        lancar: 0,
        ok: 42,
        total: 112
      },
      {
        id: "210274",
        nome: "Tarsila, a brasileira",
        rp: 363,
        analise: 302,
        aguarda: 1,
        lancar: 1,
        ok: 131,
        total: 798
      },
      {
        id: "183500",
        nome: "Um grande encontro",
        rp: 107,
        analise: 112,
        aguarda: 0,
        lancar: 0,
        ok: 0,
        total: 219
      },
      {
        id: "232226",
        nome: "Varanda cultural de Nazaré",
        rp: 69,
        analise: 8,
        aguarda: 1,
        lancar: 40,
        ok: 0,
        total: 118
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
            <h1 className='header'>Bem-vinde 🫶</h1>
            <p className='text-dark-700'>Acompanhe o resumo das planilhas.</p>
        </section>
        

        <DataTable columns={columns} data={data} />
      </main>
    </div>
  )
}

export default Admin
