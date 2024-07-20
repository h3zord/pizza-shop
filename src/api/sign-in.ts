import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
}

export async function signIn({ email }: SignInBody) {
  const authUrl = await api.post('/authenticate', { email })

  return authUrl.data
}
