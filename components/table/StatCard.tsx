"use client"

import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface StatCardProps {
  nome: string
  rp: number
  analise: number
  aguarda: number
  lancar: number 
  ok: number 
  total: number
}

const StatCard = ({ nome, rp, analise, aguarda, lancar, ok, total }: StatCardProps) => {
  return (
    <div className='stat-card bg-cancelled'>
      <div className='flex items-center gap-4'>
        <h2 className='text-32-bold text-white'>
            {nome}
        </h2>
      </div>
      <p className='text-14-regular'>
        {nome}
      </p>
    </div>
  )
}

export default StatCard
