import { Play } from "lucide-react";

export const metadata = {
  title: "Funciones y Tutoriales | Kardexia",
  description: "Aprende a sacar el máximo provecho de Kardexia con nuestros videos tutoriales.",
};

const tutorials = [
  { id: 1, title: "Primeros Pasos y Configuración Inicial", duration: "05:20" },
  { id: 2, title: "Gestión de Maestros y Expedientes", duration: "08:15" },
  { id: 3, title: "Cómo crear el Horario Interactivo", duration: "12:40" },
  { id: 4, title: "Módulo de Finanzas y Pagos", duration: "06:55" },
  { id: 5, title: "Generación de Reportes en PDF", duration: "04:30" },
  { id: 6, title: "Respaldos Locales y en la Nube", duration: "03:45" },
];

export default function TutorialesPage() {
  return (
    <div className="relative flex flex-col pt-32 pb-24 px-6 max-w-7xl mx-auto w-full min-h-screen bg-white overflow-hidden">
      {/* Background Floating Orbs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#b19cd9]/10 rounded-full blur-[80px] animate-float pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#85d3c8]/10 rounded-full blur-[100px] animate-float-slow pointer-events-none delay-300" />

      <div className="text-center mb-16 animate-fade-in-up relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-800">
          Explora Kardexia
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
          Conoce todas las funciones de la plataforma a través de videos cortos y precisos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-200 relative z-10">
        {tutorials.map((video) => (
          <div key={video.id} className="group cursor-pointer">
            <div className="relative w-full aspect-video bg-[#f8fafc] rounded-xl border border-slate-200/80 overflow-hidden mb-4 hover:border-[#b19cd9] transition-all hover:shadow-md">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/5 group-hover:bg-slate-900/10 transition-colors">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-[#b19cd9] ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-white px-2 py-1 rounded text-xs font-bold text-slate-700 shadow-sm border border-slate-100">
                {video.duration}
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#b19cd9] transition-colors px-1">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
