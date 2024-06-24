'use client'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export type Professional = {
  id: string
  email: string | null
  registration_number: number | null
  name: string | null
  role: 'medico' | 'enfermeiro' | 'nutricionista' | 'fisioterapeuta' | null
  service_quality: number | null
  knowledge_rating: number | null
  system_quality: number | null
  patient_adherence: number | null
  score: number | null
  recommendation: 'reeduca' | 'recontrata' | 'desliga' | null
}

export const columns: ColumnDef<Professional>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'role',
    header: 'Cargo',
  },
  {
    accessorKey: 'service_quality',
    header: 'Qualidade de Atendimento',
  },
  {
    accessorKey: 'knowledge_rating',
    header: 'Qualidade da Informação',
  },
  {
    accessorKey: 'system_quality',
    header: 'Qualidade do Sistema',
  },
  {
    accessorKey: 'patient_adherence',
    header: 'Adesão do Paciente',
  },
  {
    accessorKey: 'score',
    header: 'Score',
  },
  {
    accessorKey: 'recommendation',
    header: 'Recomendação',
  },
  // {
  //   accessorKey: 'amount',
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue('amount'))
  //     const formatted = new Intl.NumberFormat('en-US', {
  //       style: 'currency',
  //       currency: 'USD',
  //     }).format(amount)

  //     return <div className="text-right font-medium">{formatted}</div>
  //   },
  // },
  {
    id: 'actions',
    cell: ({ row }) => {
      const professional = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(professional.email || '')
              }
            >
              Copiar Email do Profissional
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver Profissional</DropdownMenuItem>
            <DropdownMenuItem>Ver Detalhes de Atendimentos</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
