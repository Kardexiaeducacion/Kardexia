"use client";

import { Check, Sparkles, ShieldCheck, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Hay algún costo de instalación o cargos ocultos?",
    answer: "No, en absoluto. Los $99 MXN mensuales cubren el uso completo de la plataforma, todas las actualizaciones y soporte técnico. No cobramos por instalación ni por número de alumnos."
  },
  {
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer: "Sí, puedes cancelar tu suscripción en cualquier momento desde tu panel de administrador sin penalizaciones. Tu información seguirá disponible para su exportación."
  },
  {
    question: "¿Qué pasa si mi escuela crece y tengo más alumnos?",
    answer: "El precio de $99 MXN al mes incluye grupos y alumnos ilimitados. Queremos que tu escuela crezca sin preocuparte por los costos de software."
  },
  {
    question: "¿Cómo funciona el pago anual?",
    answer: "Si eliges la facturación anual, pagas $990 MXN por adelantado, lo que te regala dos meses gratis. Obtendrás un año completo de acceso ininterrumpido."
  }
];

export default function SuscripcionPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center pt-32 pb-24 px-6 max-w-7xl mx-auto w-full min-h-screen bg-white">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800">
          Todo el poder, un solo precio
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Escala la gestión de tu escuela sin preocuparte por costos ocultos o límites de alumnos. Todas las funciones incluidas.
        </p>
        
        {/* Toggle Switch */}
        <div className="inline-flex items-center p-1.5 bg-slate-50 rounded-full border border-slate-200">
          <button
            onClick={() => setIsAnnual(false)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-bold transition-all",
              !isAnnual ? "bg-white text-slate-800 shadow-sm border border-slate-200" : "text-slate-500 hover:text-slate-700"
            )}
          >
            Facturación Mensual
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2",
              isAnnual ? "bg-white text-slate-800 shadow-sm border border-slate-200" : "text-slate-500 hover:text-slate-700"
            )}
          >
            Facturación Anual <span className="text-[10px] uppercase tracking-wider bg-[#85d3c8]/25 text-[#5bbdae] px-2 py-0.5 rounded-full font-bold">2 meses gratis</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full animate-fade-in-up delay-200 mb-20">
        {/* Free Trial Plan */}
        <div className="bg-white border-2 border-slate-100 rounded-2xl p-10 flex flex-col hover:border-slate-200 transition-colors shadow-sm">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Prueba Gratuita</h3>
          <p className="text-slate-500 mb-6">Prueba Kardexia sin compromiso.</p>
          <div className="mb-8">
            <span className="text-5xl font-extrabold text-slate-800">$0</span>
            <span className="text-slate-500 font-medium"> / 14 días</span>
          </div>
          
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              "Acceso a todas las funciones",
              "Sin necesidad de tarjeta de crédito",
              "Soporte por correo electrónico",
              "Asistencia en configuración inicial"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600">
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <span className="font-medium mt-0.5">{feature}</span>
              </li>
            ))}
          </ul>
          
          <button className="w-full py-4 rounded-md border-2 border-slate-200 text-slate-800 font-bold hover:bg-slate-50 transition-colors">
            Comenzar Prueba Gratis
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white border-2 border-[#b19cd9] rounded-2xl p-10 flex flex-col relative shadow-2xl shadow-[#b19cd9]/15">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-[#b19cd9] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Suscripción Total
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Licencia Profesional</h3>
          <p className="text-slate-500 mb-6">Poder ilimitado para toda la institución.</p>
          <div className="mb-8">
            <span className="text-5xl font-extrabold text-slate-800">${isAnnual ? "990" : "99"}</span>
            <span className="text-slate-500 font-medium"> / {isAnnual ? "año" : "mes"} MXN</span>
          </div>
          
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              "Alumnos y grupos ilimitados",
              "Gestión académica y kárdex completo",
              "Módulo financiero y reportes PDF",
              "Horarios interactivos",
              "Sincronización segura y respaldos",
              "Soporte Técnico Prioritario"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700">
                <div className="w-6 h-6 rounded-full bg-[#85d3c8]/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#5bbdae]" />
                </div>
                <span className="font-bold mt-0.5">{feature}</span>
              </li>
            ))}
          </ul>
          
          <button className="w-full py-4 rounded-md bg-[#b19cd9] hover:bg-[#9b84c8] text-white font-bold text-lg transition-all shadow-[0_8px_20px_-6px_rgba(177,156,217,0.6)] hover:scale-[1.01]">
            Adquirir Licencia
          </button>
          <p className="text-center text-xs text-slate-400 mt-4 font-medium flex items-center justify-center gap-1">
            <ShieldCheck className="w-4 h-4" /> Pago procesado de forma segura
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-3xl mx-auto animate-fade-in-up delay-300">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={cn(
                "border rounded-xl transition-all duration-300 overflow-hidden",
                openFaq === i ? "border-[#b19cd9] bg-[#b19cd9]/5" : "border-slate-200 bg-white hover:border-slate-300"
              )}
            >
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-800 focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-slate-400 transition-transform duration-300",
                    openFaq === i && "transform rotate-180 text-[#b19cd9]"
                  )} 
                />
              </button>
              <div 
                className={cn(
                  "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                  openFaq === i ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-slate-600 font-medium leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
