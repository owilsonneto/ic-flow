
import StatCard from '@/components/table/StatCard'
import { DataTable } from '@/components/table/DataTable'
import { Payment, columns } from '@/components/table/columns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData(): Promise<Payment[]> {
    const { MongoClient } = require("mongodb");
    // Replace the uri string with your MongoDB deployment's connection string.
    const { MONGODB_URI } = process.env;
    const uri = MONGODB_URI;
    const client = new MongoClient(uri);
    async function run() {
      try {
        await client.connect();
        const db = client.db("icflow");
        const coll = db.collection("projects");
        const cursor = coll.find();
        await cursor.forEach(console.log);
        

      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
    run().catch(console.dir);
  
    return [
      {
        codigo: "",
        nome: "Educativo Monet à beira d'água",
        lanrp: 52,
        analisar: 493,
        aguarde: 63,
        lanselic: 37,
        feito: 0,
        total: 642
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
