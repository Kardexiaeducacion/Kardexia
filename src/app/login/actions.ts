'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: 'Correo o contraseña incorrectos. Por favor, verifica tus datos.' }
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  // Recoger todos los campos personalizados del formulario
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const nombre = formData.get('nombre') as string
  const apellido_paterno = formData.get('apellido_paterno') as string
  const apellido_materno = formData.get('apellido_materno') as string
  const edad = formData.get('edad') as string
  const cumpleanos = formData.get('cumpleanos') as string
  const rol = formData.get('rol') as string
  const escuela = formData.get('escuela') as string

  // Validación básica
  if (!email || !password || !nombre || !rol) {
    return { error: 'Por favor, llena todos los campos obligatorios.' }
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nombre,
        apellido_paterno,
        apellido_materno,
        edad,
        cumpleanos,
        rol,
        escuela,
      }
    }
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/registro-exitoso')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/')
}
