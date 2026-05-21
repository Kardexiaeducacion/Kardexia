import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { logout } from '../login/actions'
import { User, LogOut, Settings, Download } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()

  // Obtener el usuario actual
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Obtener los datos del perfil (que se crearon automáticamente con el trigger)
  const { data: perfil } = await supabase
    .from('perfiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="text-2xl font-bold text-white tracking-tight">Kardexia</Link>
          
          <form action={logout}>
            <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <LogOut className="h-5 w-5" />
              Cerrar Sesión
            </button>
          </form>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tarjeta de Perfil */}
          <div className="md:col-span-2 bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate-700 p-4 rounded-full">
                <User className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{perfil?.nombre} {perfil?.apellido_paterno}</h2>
                <p className="text-slate-400">{user.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                <p className="text-sm text-slate-400 mb-1">Rol</p>
                <p className="font-semibold">{perfil?.rol || 'No especificado'}</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                <p className="text-sm text-slate-400 mb-1">Institución</p>
                <p className="font-semibold">{perfil?.escuela || 'No especificada'}</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                <p className="text-sm text-slate-400 mb-1">Edad</p>
                <p className="font-semibold">{perfil?.edad ? `${perfil.edad} años` : 'No especificada'}</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                <p className="text-sm text-slate-400 mb-1">Fecha de Cumpleaños</p>
                <p className="font-semibold">{perfil?.cumpleanos || 'No especificada'}</p>
              </div>
            </div>
          </div>

          {/* Tarjeta de Suscripción */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl flex flex-col">
            <div className="mb-auto">
              <div className="flex items-center gap-2 mb-4">
                <Settings className="h-5 w-5 text-purple-400" />
                <h3 className="text-lg font-semibold">Suscripción</h3>
              </div>
              
              <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
                {perfil?.estado_suscripcion === 'prueba' ? 'Prueba Gratis' : 'Suscripción'}
              </div>
              
              <p className="text-sm text-slate-400 mb-6">
                Tu acceso termina el: <br/>
                <span className="text-white font-medium">
                  {perfil?.fecha_fin_prueba ? new Date(perfil.fecha_fin_prueba).toLocaleDateString() : 'N/A'}
                </span>
              </p>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <Download className="h-4 w-4" />
              Descargar App
            </button>
          </div>

        </main>
      </div>
    </div>
  )
}
