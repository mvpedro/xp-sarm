// import { createServerClient } from '@/utils/supabase'
// import { cookies } from 'next/headers'

// export default async function Page() {
//   const cookieStore = cookies()
//   const supabase = createServerClient(cookieStore)
//   const { data: notes } = await supabase.from('notes').select()

//   return <pre>{JSON.stringify(notes, null, 2)}</pre>
// }

'use client'

import { createBrowserClient } from '@/utils/supabase'
import { useEffect, useState } from 'react'

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const supabase = createBrowserClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('notes').select()
      setNotes(data)
    }
    getData()
  }, [])

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
