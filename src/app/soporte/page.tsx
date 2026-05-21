"use client";

import { Send, MessageSquare, Mail, ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const quickHelp = [
  {
    q: "¿Cómo recupero la contraseña de un docente?",
    a: "Ve al panel de Administración > Usuarios > Docentes. Selecciona al docente y haz clic en 'Restablecer Contraseña'. Se le enviará un correo con un enlace seguro."
  },
  {
    q: "¿Dónde encuentro la base de datos local para hacer un respaldo manual?",
    a: "Por defecto, Kardexia guarda la base de datos local en C:\\KardexiaData\\. Puedes cambiar esta ruta en Ajustes > Sistema > Almacenamiento."
  },
  {
    q: "¿Cómo configuro la sincronización en la nube?",
    a: "Necesitas tener una licencia profesional activa. Dirígete a Ajustes > Sincronización, inicia sesión con tu cuenta de administrador y activa el botón 'Sincronizar automáticamente'."
  },
  {
    q: "El formato PDF del Kárdex se ve cortado. ¿Cómo lo soluciono?",
    a: "Asegúrate de tener seleccionado el tamaño de papel A4 o Carta en los ajustes de la impresora. También puedes ajustar los márgenes globales desde el panel de Configuración de Reportes."
  }
];

export default function SoportePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openHelp, setOpenHelp] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const toggleHelp = (index: number) => {
    setOpenHelp(openHelp === index ? null : index);
  };

  return (
    <div className="flex flex-col pt-32 pb-24 px-6 max-w-6xl mx-auto w-full min-h-screen bg-white">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800">
          Soporte Técnico
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
          Estamos aquí para ayudarte. Contáctanos y nuestro equipo de ingenieros te responderá a la brevedad.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 animate-fade-in-up delay-200">
        {/* Contact Info */}
        <div className="md:col-span-1 space-y-8">
          <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-8">Contacto Directo</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#85d3c8]/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#5bbdae]" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold mb-1">Correo Electrónico</p>
                  <p className="text-slate-800 font-medium">soporte@kardexia.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#b19cd9]/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#9b84c8]" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold mb-1">Atención por WhatsApp</p>
                  <p className="text-slate-800 font-medium">+52 123 456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 animate-fade-in-up">
                <div className="w-20 h-20 bg-[#85d3c8]/20 text-[#5bbdae] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Mensaje Enviado</h3>
                <p className="text-slate-600 font-medium max-w-md mx-auto">
                  Hemos recibido tu mensaje. Nos pondremos en contacto contigo lo antes posible para solucionar tu inconveniente.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-8 py-3 rounded-md border-2 border-slate-200 text-slate-800 font-bold hover:bg-slate-50 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nombre Completo</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:border-[#b19cd9] focus:ring-1 focus:ring-[#b19cd9] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Correo Electrónico</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:border-[#b19cd9] focus:ring-1 focus:ring-[#b19cd9] transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Asunto</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:border-[#b19cd9] focus:ring-1 focus:ring-[#b19cd9] transition-all">
                    <option value="tecnico">Asistencia Técnica</option>
                    <option value="facturacion">Dudas de Facturación</option>
                    <option value="ventas">Ventas</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Mensaje</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:border-[#b19cd9] focus:ring-1 focus:ring-[#b19cd9] transition-all resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-md bg-[#b19cd9] hover:bg-[#9b84c8] text-white font-bold text-lg transition-all shadow-[0_8px_20px_-6px_rgba(177,156,217,0.6)] hover:scale-[1.01] flex justify-center items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Quick Help Accordion */}
      <div className="mt-24 max-w-4xl mx-auto w-full animate-fade-in-up delay-300">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <HelpCircle className="w-8 h-8 text-[#85d3c8]" />
          <h2 className="text-3xl font-bold text-slate-800">Ayuda Rápida</h2>
        </div>
        
        <div className="space-y-4">
          {quickHelp.map((item, i) => (
            <div 
              key={i} 
              className={cn(
                "border rounded-xl transition-all duration-300 overflow-hidden",
                openHelp === i ? "border-[#85d3c8] bg-[#85d3c8]/5" : "border-slate-200 bg-white hover:border-slate-300"
              )}
            >
              <button 
                onClick={() => toggleHelp(i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-800 focus:outline-none"
              >
                <span>{item.q}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-slate-400 transition-transform duration-300",
                    openHelp === i && "transform rotate-180 text-[#85d3c8]"
                  )} 
                />
              </button>
              <div 
                className={cn(
                  "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                  openHelp === i ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-slate-600 font-medium leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
