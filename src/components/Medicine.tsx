import { Button } from '@/components/ui/button'

export default function Medicine() {
  return (
    <div className="w-full max-w-md rounded-lg bg-background p-6 text-foreground shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Seus Medicamentos</h2>
      <div className="grid gap-4">
        <div className="rounded-md bg-card p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-medium">Ibuprofeno</h3>
            <span className="text-muted-foreground">9:00</span>
          </div>
          <Button variant={true ? 'primary' : 'outline'} className="w-full">
            {true ? 'Tomou' : 'Tomar Agora'}
          </Button>
        </div>
        <div className="rounded-md bg-card p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-medium">Vitamina C</h3>
            <span className="text-muted-foreground">12:00</span>
          </div>
          <Button variant={false ? 'primary' : 'outline'} className="w-full">
            {false ? 'Tomou' : 'Tomar Agora'}
          </Button>
        </div>
        <div className="rounded-md bg-card p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-medium">Metformina</h3>
            <span className="text-muted-foreground">18:00</span>
          </div>
          <Button variant={false ? 'primary' : 'outline'} className="w-full">
            {false ? 'Tomou' : 'Tomar Agora'}
          </Button>
        </div>
      </div>
    </div>
  )
}
