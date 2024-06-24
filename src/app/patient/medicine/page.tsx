import { cookies } from 'next/headers'
import { createServerClient } from '@/utils/supabase'
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import Medicine from '@/components/Medicine'

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
      <Medicine />
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
