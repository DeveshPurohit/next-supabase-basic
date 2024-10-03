import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { logout } from './(auth)/actions'


const HomePage = async() => {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return<div className='flex flex-col justify-center items-center space-y-5 h-screen'>
  <p className='text-5xl font-semibold text-slate-800'>Hello! <span className='font-bold'>{data.user.email}</span></p>
  <form action={logout}>
    <button className='btn'>Logout</button>
  </form>
  </div>
}

export default HomePage