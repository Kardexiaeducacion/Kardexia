import Link from 'next/link'
import { signup } from '../login/actions'
import { UserPlus, BookOpen } from 'lucide-react'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 py-12">
      <div className="max-w-2xl w-full bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-10"></div>

        <div className="relative z-10 text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity">
            <div className="bg-purple-600 p-2 rounded-lg">
              <BookOpen className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Kardexia</span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Crea tu cuenta</h1>
          <p className="text-slate-400">Únete a la nueva era de la educación</p>
        </div>

        <form action={signup} className="relative z-10 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Nombre(s)</label>
              <input name="nombre" type="text" required className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition-all" placeholder="Juan" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Apellido Paterno</label>
              <input name="apellido_paterno" type="text" required className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition-all" placeholder="Pérez" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Apellido Materno</label>
              <input name="apellido_materno" type="text" required className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition-all" placeholder="García" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Edad</label>
              <input name="edad" type="number" min="5" max="100" required className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition-all" placeholder="Ej: 25" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Cumpleaños</label>
              <input name="cumpleanos" type="date" required className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition-all" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Rol</label>
              <select name="rol" required defaultValue="" className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition-all">
                <option value="" disabled>Selecciona tu rol...</option>
                <option value="Estudiante">Estudiante</option>
                <option value="Maestro">Maestro</option>
                <option value="Director">Director</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Escuela</label>
              <input name="escuela" type="text" required className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition-all" placeholder="Nombre de tu institución" />
            </div>
          </div>

          <hr className="border-slate-700 my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Correo Electrónico</label>
              <input name="email" type="email" required className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition-all" placeholder="tu@correo.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Contraseña</label>
              <input name="password" type="password" required className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition-all" placeholder="Mínimo 6 caracteres" minLength={6} />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-4 px-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] shadow-lg shadow-purple-500/25 mt-8"
          >
            Completar Registro
            <UserPlus className="h-5 w-5" />
          </button>
        </form>

        <div className="mt-8 text-center text-slate-400 text-sm relative z-10">
          ¿Ya tienes una cuenta?{' '}
          <Link href="/login" className="text-purple-400 hover:text-purple-300 font-medium hover:underline">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  )
}
