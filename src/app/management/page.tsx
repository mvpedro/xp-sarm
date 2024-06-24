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
  ClipboardPlus,
  HospitalIcon,
  LineChart,
  Stethoscope,
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
          Bem vindo, gestor!
        </h1>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 px-10 md:flex-row md:justify-between md:gap-10">
        <DisabledTooltipWrapper>
          <Link href={'/management/organizations'}>
            <Button variant={'default'} size={'lg'} disabled>
              <HospitalIcon className="mr-2 h-5 w-5" /> Hospitais
            </Button>
          </Link>
        </DisabledTooltipWrapper>
        <DisabledTooltipWrapper>
          <Link href={'/management/services'}>
            <Button variant={'default'} size={'lg'} disabled>
              <ClipboardPlus className="mr-2 h-5 w-5" /> Atendimentos
            </Button>
          </Link>
        </DisabledTooltipWrapper>
        <Link href={'/management/professionals'}>
          <Button variant={'default'} size={'lg'}>
            <Stethoscope className="mr-2 h-5 w-5" /> Profissionais
          </Button>
        </Link>
        <DisabledTooltipWrapper>
          <Link href={'/management/analytics'}>
            <Button variant={'default'} disabled size={'lg'}>
              <LineChart className="mr-2 h-5 w-5" /> Analytics
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
