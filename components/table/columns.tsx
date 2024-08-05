"use client"

import { ColumnDef } from "@tanstack/react-table"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


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
    cell: ({ row }) => <p className="text-14-medium truncate">{row.original.nome}</p>
  },
  {
    accessorKey: 'lanrp',
    header: 'Lançar RP',
    cell: ({ row }) => <div className="min-w-[64px]">
                          <div className="status-badge bg-light-200 cursor-pointer">
                            <HoverCard>
                              <HoverCardTrigger>
                                <div className="flex justify-center items-center gap-1">
                                <p className="text-14-medium text-purple-1">
                                  {row.original.lanrp}
                                    
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth={1.0} stroke="currentColor" className="size-6 text-green-700">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                                </svg>
                                </div>
                                
                                
                              </HoverCardTrigger>
                              <HoverCardContent className="bg-light-200 text-purple-1">
                                <p className="text-14-medium">Aumento de: 34 itens.</p>
                              </HoverCardContent>
                            </HoverCard>
                          </div>
                        </div>
  },
  {
    accessorKey: 'analisar',
    header: 'Analisar',
    cell: ({ row }) => <div className="min-w-[72px]">
                          <div className="status-badge bg-light-200 cursor-pointer">
                            <HoverCard>
                              <HoverCardTrigger>
                                <div className="flex justify-center items-center gap-1">
                                <p className="text-14-medium text-purple-1">
                                  {row.original.analisar}
                                    
                                </p>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth={0.8} stroke="currentColor" className="size-6 text-red-800">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                                </svg>

                                </div>
                                
                                
                              </HoverCardTrigger>
                              <HoverCardContent className="bg-light-200 text-purple-1">
                                <p className="text-14-medium">Diminuição de: 34 itens.</p>
                              </HoverCardContent>
                            </HoverCard>
                          </div>
                       </div>
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
