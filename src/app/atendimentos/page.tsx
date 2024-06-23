import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data: atendimentos } = await supabase.from('atendimentos').select()

  return <pre>{JSON.stringify(atendimentos, null, 2)}</pre>
}
