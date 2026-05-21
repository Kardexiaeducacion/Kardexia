import { Download, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Descargar Kardexia | Aplicación de Escritorio",
  description: "Descarga la última versión de Kardexia para Windows.",
};

export default function DescargaPage() {
  const downloadUrl = "#"; 

  return (
    <div className="relative flex flex-col items-center pt-32 pb-24 px-6 max-w-6xl mx-auto w-full min-h-screen bg-white overflow-hidden">
      {/* Background Floating Orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#b19cd9]/10 rounded-full blur-[80px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#85d3c8]/10 rounded-full blur-[100px] animate-float pointer-events-none delay-300" />

      <div className="text-center mb-16 animate-fade-in-up relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800">
          Descargar Kardexia
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
          Instalador nativo optimizado. Ligero, seguro y sin dependencias externas.
        </p>
      </div>

      <div className="w-full grid md:grid-cols-2 gap-12 animate-fade-in-up delay-200 relative z-10">
        
        {/* Download Box */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-10 flex flex-col justify-center relative overflow-hidden shadow-xl shadow-slate-100">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#b19cd9]/10 rounded-full blur-[60px]" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#85d3c8]/10 rounded-full blur-[60px]" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-bold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#85d3c8]" />
              ESTABLE (v1.0.0)
            </div>
            
            <h2 className="text-3xl font-bold mb-2 text-slate-800">Windows 10 / 11</h2>
            <p className="text-slate-500 mb-8 font-medium">
              kardexia-setup-1.0.0.exe • 125 MB • 64-bit
            </p>
            
            <a
              href={downloadUrl}
              className="inline-flex justify-center items-center gap-3 px-8 py-4 rounded-md bg-[#b19cd9] hover:bg-[#9b84c8] text-white font-bold text-lg transition-all shadow-[0_8px_20px_-6px_rgba(177,156,217,0.6)] hover:scale-[1.02] w-full sm:w-auto"
            >
              <Download className="w-5 h-5" />
              Descargar Instalador
            </a>
          </div>
        </div>
        
        {/* System Requirements */}
        <div className="flex flex-col justify-center px-4">
          <h3 className="font-bold text-slate-800 mb-8 text-2xl">
            Requisitos del Sistema
          </h3>
          
          <ul className="space-y-6">
            <li className="flex items-center gap-4 border-b border-slate-100 pb-4">
              <CheckCircle2 className="w-6 h-6 text-[#85d3c8]" />
              <div>
                <span className="text-slate-800 block font-bold">Procesador</span>
                <span className="text-sm text-slate-500">2.0 GHz Dual Core o superior</span>
              </div>
            </li>
            <li className="flex items-center gap-4 border-b border-slate-100 pb-4">
              <CheckCircle2 className="w-6 h-6 text-[#85d3c8]" />
              <div>
                <span className="text-slate-800 block font-bold">Memoria RAM</span>
                <span className="text-sm text-slate-500">4 GB (8 GB recomendados)</span>
              </div>
            </li>
            <li className="flex items-center gap-4 border-b border-slate-100 pb-4">
              <CheckCircle2 className="w-6 h-6 text-[#85d3c8]" />
              <div>
                <span className="text-slate-800 block font-bold">Almacenamiento</span>
                <span className="text-sm text-slate-500">500 MB de espacio en disco (SSD recomendado)</span>
              </div>
            </li>
          </ul>
          
          <a href="/tutoriales" className="mt-8 text-[#b19cd9] font-bold flex items-center gap-1 hover:text-[#9b84c8] transition-colors">
            Ver guía de instalación paso a paso <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
