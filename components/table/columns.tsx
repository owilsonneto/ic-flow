"use client"

import { ColumnDef } from "@tanstack/react-table"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import StatusBadge from "../StatusBadge"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  nome: string
  rp: number
  analise: number
  aguarda: number
  lancar: number 
  ok: number 
  total: number
}

export const columns: ColumnDef<Payment>[] = [
  {
    header: "Código",
    cell: ({ row }) => <p className="text-14-medium">{row.original.id}</p>
  },
  {
    accessorKey: 'projeto',
    header: 'Projeto',
    cell: ({ row }) => <p className="text-14-medium">{row.original.nome}</p>
  },
  {
    accessorKey: 'rp',
    header: 'Lançar RP',
    cell: ({ row }) => <div className="min-w-[64px]"><div className="status-badge bg-light-200"><p className="text-14-medium text-purple-1">{row.original.rp}</p></div></div>
  },
  {
    accessorKey: 'analise',
    header: 'Analisar',
    cell: ({ row }) => <div className="min-w-[64px]"><div className="status-badge bg-light-200"><p className="text-14-medium text-purple-1">{row.original.analise}</p></div></div>
  },
  {
    accessorKey: 'aguarda',
    header: 'Aguardando doc',
    cell: ({ row }) => <div className="min-w-[64px]"><div className="status-badge bg-light-200"><p className="text-14-medium text-purple-1">{row.original.aguarda}</p></div></div>
  },
  {
    accessorKey: 'lancar',
    header: 'Lançar no Salic',
    cell: ({ row }) => <div className="min-w-[64px]"><div className="status-badge bg-light-200"><p className="text-14-medium text-purple-1">{row.original.lancar}</p></div></div>
  },
  {
    accessorKey: 'ok',
    header: 'Lançados',
    cell: ({ row }) => <div className="min-w-[64px]"><div className="status-badge bg-light-200"><p className="text-14-medium text-purple-1">{row.original.ok}</p></div></div>
  },
  {
    accessorKey: 'total',
    header: 'Total de linhas',
    cell: ({ row }) => <div className="min-w-[64px]"><div className="status-badge bg-light-200"><p className="text-14-medium text-purple-1">{row.original.total}</p></div></div>
  },
  
]
