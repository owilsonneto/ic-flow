"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  codigo: string
  nome: string
  lanrp: number
  analisar: number
  aguarde: number
  lanselic: number 
  feito: number 
  total: number
}

export const columns: ColumnDef<Payment>[] = [
  {
    header: "Código",
    cell: ({ row }) => <p className="text-14-medium">{row.original.codigo}</p>
  },
  {
    accessorKey: 'projeto',
    header: 'Projeto',
    cell: ({ row }) => <p className="text-14-medium">{row.original.nome}</p>
  },
  {
    accessorKey: 'lanrp',
    header: 'Lançar RP',
    cell: ({ row }) => <div className="min-w-[64px]"><div className="status-badge bg-light-200"><p className="text-14-medium text-purple-1">{row.original.lanrp}</p></div></div>
  },
  {
    accessorKey: 'analisar',
    header: 'Analisar',
    cell: ({ row }) => <div className="min-w-[64px]"><div className="status-badge bg-light-200"><p className="text-14-medium text-purple-1">{row.original.analisar}</p></div></div>
  },
  {
    accessorKey: 'aguarde',
    header: 'Aguardando doc',
    cell: ({ row }) => <div className="min-w-[64px]"><div className="status-badge bg-light-200"><p className="text-14-medium text-purple-1">{row.original.aguarde}</p></div></div>
  },
  {
    accessorKey: 'lanselic',
    header: 'Lançar no Salic',
    cell: ({ row }) => <div className="min-w-[64px]"><div className="status-badge bg-light-200"><p className="text-14-medium text-purple-1">{row.original.lanselic}</p></div></div>
  },
  {
    accessorKey: 'feito',
    header: 'Lançados',
    cell: ({ row }) => <div className="min-w-[64px]"><div className="status-badge bg-light-200"><p className="text-14-medium text-purple-1">{row.original.feito}</p></div></div>
  },
  {
    accessorKey: 'total',
    header: 'Total de linhas',
    cell: ({ row }) => <div className="min-w-[64px]"><div className="status-badge bg-light-200"><p className="text-14-medium text-purple-1">{row.original.total}</p></div></div>
  },
  
]
