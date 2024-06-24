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
      Selecione seu perfil:
      <div className="flex w-full flex-col items-center justify-center gap-4 px-10 md:flex-row md:justify-between md:gap-10">
        <Link href={'/professional'}>
          <Button variant={'default'} size={'lg'} className="px-10 py-5">
            Médico
          </Button>
        </Link>
        <Link href={'/patient'}>
          <Button variant={'secondary'} size={'lg'} className="px-10 py-5">
            Paciente
          </Button>
        </Link>
        <Link href={'/management'}>
          <Button variant={'outline'} size={'lg'} className="px-10 py-5">
            Gestão
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
