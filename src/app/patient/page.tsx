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
      <div className="flex w-full flex-col items-center justify-center gap-4 px-10 md:flex-row md:justify-between md:gap-10">
        <Link href={'/patient/medicine'}>
          <Button variant={'default'} size={'lg'}>
            <Clock className="mr-2 h-5 w-5" /> Seus Tratamentos
          </Button>
        </Link>
        <Link href={'/patient/services'}>
          <Button variant={'default'} size={'lg'}>
            <Briefcase className="mr-2 h-5 w-5" /> Suas Consultas
          </Button>
        </Link>
        <Link href={'/patient/prescriptions'}>
          <Button variant={'default'} size={'lg'}>
            <Pill className="mr-2 h-5 w-5" /> Suas Receitas
          </Button>
        </Link>
        <Link href={'/patient/nps'}>
          <Button variant={'default'} size={'lg'}>
            <ClipboardPlus className="mr-2 h-5 w-5" /> Avalie suas Consultas
          </Button>
        </Link>
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
