// import { createServerClient } from '@/utils/supabase'
// import { cookies } from 'next/headers'

// export default async function Page() {
//   const cookieStore = cookies()
//   const supabase = createServerClient(cookieStore)
//   const { data: professionals } = await supabase.from('professionals').select()

//   return (
//     <pre>
//       <div>
//         Ícone
//       </div>
//       <div>
//         SRAM Título
//       </div>
//       <div>
//         Tabelão pica
//       </div>
//       {JSON.stringify(professionals, null, 2)}
//     </pre>
//   )
// }

// const object = [
//   {
//     "id": 1,
//     "registration_number": 1234,
//     "name": "Adolfo José da Silva",
//     "role": "medico",
//     "service_quality": 300,
//     "knowledge_rating": 100,
//     "system_quality": 320,
//     "patient_adherence": 150,
//     "score": 700,
//     "recommendation": "reeduca"
//   },
//   {
//     "id": 2,
//     "registration_number": 5678,
//     "name": "Astolfo Antonio Keller",
//     "role": "medico",
//     "service_quality": 300,
//     "knowledge_rating": 50,
//     "system_quality": 320,
//     "patient_adherence": 100,
//     "score": 770,
//     "recommendation": "recontrata"
//   }
// ]

import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'

import { Professional, columns } from './columns'
import { DataTable } from './data-table'
//   const cookieStore = cookies()
//   const supabase = createServerClient(cookieStore)
//   const { data: professionals } = await supabase.from('professionals').select()

async function getData(): Promise<Professional[]> {
  return [
    {
      id: '728ed52f',
      email: 'm@example.com',
      registration_number: 5678,
      name: 'Astolfo Antonio Keller',
      role: 'medico',
      service_quality: 300,
      knowledge_rating: 50,
      system_quality: 320,
      patient_adherence: 100,
      score: 770,
      recommendation: 'recontrata',
    },
    // ...
  ]
}

export default async function Professionals() {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data: professionals } = await supabase.from('professionals').select()
  // const data = await getData()
  const data: Professional[] = professionals ?? []

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
