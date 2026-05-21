import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function SuccessfulRegistrationPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-800 rounded-2xl p-10 border border-slate-700 shadow-2xl text-center relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-[100px] opacity-10"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-green-500/10 p-4 rounded-full mb-6">
            <CheckCircle className="h-16 w-16 text-green-400" />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">¡Registro Exitoso!</h1>
          
          <p className="text-slate-300 mb-8 leading-relaxed">
            Tu cuenta ha sido creada correctamente. Hemos activado automáticamente tu 
            <strong className="text-green-400"> Prueba Gratis de 14 días</strong>.
          </p>

          <Link 
            href="/dashboard"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-green-500/25"
          >
            Ir a mi Panel de Control
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
