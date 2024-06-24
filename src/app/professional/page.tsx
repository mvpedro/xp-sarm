import AuthButton from '@/components/AuthButton'
import ConnectSupabaseSteps from '@/components/ConnectSupabaseSteps'
import SignUpUserSteps from '@/components/SignUpUserSteps'
import Header from '@/components/Header'
import { cookies } from 'next/headers'
import { createServerClient } from '@/utils/supabase'
import ThemeToggle from '@/components/ThemeToggle'
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Briefcase,
  ClipboardPlus,
  Clock,
  HospitalIcon,
  LineChart,
  Pill,
  Stethoscope,
  Users,
} from 'lucide-react'
import DisabledTooltipWrapper from '@/components/DisabledTooltipWrapper'

export default async function Index() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createServerClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className="flex flex-1 flex-col items-center gap-20">
      <div className="mx-auto mt-5 max-w-xl text-center">
        <h1 className="block text-4xl font-bold text-gray-800 dark:text-neutral-200 md:text-5xl lg:text-6xl">
          Bem vindo!
        </h1>
      </div>

      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-2 gap-6 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 sm:text-xl">
              Seu NPS
            </h4>
            <p className="mt-2 text-4xl font-bold text-green-600 sm:mt-3 sm:text-6xl">
              80.0
            </p>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              Seus pacientes estão
            </p>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              lhe recomendando!
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 sm:text-xl">
              Atendimentos
            </h4>
            <p className="mt-2 text-4xl font-bold text-green-600 sm:mt-3 sm:text-6xl">
              37
            </p>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              Nos últimos 7 dias
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 sm:text-xl">
              Aderência de Tratamento
            </h4>
            <p className="mt-2 text-4xl font-bold text-green-600 sm:mt-3 sm:text-6xl">
              85%
            </p>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              de seus pacientes estão
            </p>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              aderindo ao tratamento
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4 px-10 md:flex-row md:justify-between md:gap-10">
        <Link href={'/professional/clock-in'}>
          <Button variant={'default'} size={'lg'}>
            <Clock className="mr-2 h-5 w-5" /> Registrar Entrada
          </Button>
        </Link>
        <DisabledTooltipWrapper>
          <Link href={'/professional/services'}>
            <Button variant={'default'} size={'lg'} disabled>
              <Briefcase className="mr-2 h-5 w-5" /> Registrar Atendimento
            </Button>
          </Link>
        </DisabledTooltipWrapper>
        <DisabledTooltipWrapper>
          <Link href={'/professional/prescriptions'}>
            <Button variant={'default'} size={'lg'} disabled>
              <Pill className="mr-2 h-5 w-5" /> Minhas Receitas
            </Button>
          </Link>
        </DisabledTooltipWrapper>
        <DisabledTooltipWrapper>
          <Link href={'/professional/history'}>
            <Button variant={'default'} size={'lg'} disabled>
              <ClipboardPlus className="mr-2 h-5 w-5" /> Meus Atendimentos
            </Button>
          </Link>
        </DisabledTooltipWrapper>
        <DisabledTooltipWrapper>
          <Link href={'/professional/patients'}>
            <Button variant={'default'} size={'lg'} disabled>
              <Users className="mr-2 h-5 w-5" /> Meus Pacientes
            </Button>
          </Link>
        </DisabledTooltipWrapper>
      </div>
      <footer className="justify-center border-t border-t-foreground/10 p-8 text-center text-xs">
        <p className="mb-6">
          Powered by
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="ml-1 cursor-pointer underline">X&P</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Ximira & Peixola Advogados Associados</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </p>
        {/* <ThemeToggle /> */}
      </footer>
    </div>
  )
}
