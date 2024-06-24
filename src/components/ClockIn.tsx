/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jI2kj4hR2YN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from '@/components/ui/card'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'

export default function ClockIn() {
  return (
    <Card className="mx-auto max-w-md space-y-6 p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Registrar Entrada</h2>
        <p className="text-muted-foreground">
          Selecione a Data e Horário que você gostaria de registrar para o seu
          turno atual
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="h-auto w-full flex-col items-start"
              >
                <span className="text-[0.65rem] font-semibold uppercase">
                  Data
                </span>
                <span className="font-normal">
                  {new Date().toLocaleDateString()}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-[276px] p-0">
              <Calendar />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="h-auto w-full flex-col items-start"
              >
                <span className="text-[0.65rem] font-semibold uppercase">
                  Horário
                </span>
                <span className="font-normal">
                  {new Date().toLocaleTimeString()}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-[276px] p-0">
              <div />
            </PopoverContent>
          </Popover>
        </div>
        <Button size="lg" className="w-full">
          Registrar
        </Button>
      </div>
    </Card>
  )
}
