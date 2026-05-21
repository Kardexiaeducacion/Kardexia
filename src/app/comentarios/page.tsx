"use client";

import { Star, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const initialReviews = [
  {
    id: 1,
    name: "A. García",
    role: "Director General",
    content: "La gestión del kárdex de los alumnos nunca había sido tan sencilla. La interfaz es intuitiva y rápida.",
    rating: 5,
    date: "Hace 2 semanas",
  },
  {
    id: 2,
    name: "C. López",
    role: "Coordinación Académica",
    content: "Poder tener todo localmente pero con sincronización nos da mucha tranquilidad. Excelente software.",
    rating: 5,
    date: "Hace 1 mes",
  },
  {
    id: 3,
    name: "R. Martínez",
    role: "IT Ops",
    content: "Instalación sin problemas en todas las máquinas administrativas. Un producto muy bien hecho.",
    rating: 4,
    date: "Hace 2 meses",
  },
];

export default function ComentariosPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({ name: "", role: "", content: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.content) return;

    const newReview = {
      id: Date.now(),
      name: formData.name,
      role: formData.role || "Usuario Verificado",
      content: formData.content,
      rating,
      date: "Justo ahora",
    };

    setReviews([newReview, ...reviews]);
    setIsModalOpen(false);
    setFormData({ name: "", role: "", content: "" });
    setRating(5);
  };

  return (
    <div className="relative flex flex-col pt-32 pb-24 px-6 max-w-6xl mx-auto w-full min-h-screen bg-white overflow-hidden">
      {/* Background Floating Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#b19cd9]/10 rounded-full blur-[80px] animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#85d3c8]/10 rounded-full blur-[100px] animate-float-slow pointer-events-none delay-300" />

      <div className="text-center mb-16 animate-fade-in-up relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-800">
          Lo que dicen nuestros clientes
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
          Descubre por qué Kardexia es la elección número uno para instituciones educativas.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in-up delay-200 relative z-10">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col h-full">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#b19cd9]/5 rounded-full blur-xl group-hover:bg-[#b19cd9]/10 transition-colors" />
            
            <div className="flex gap-1 mb-4 relative z-10">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={cn("w-5 h-5", i < review.rating ? "text-amber-400 fill-amber-400" : "text-slate-200")} 
                />
              ))}
            </div>
            <p className="text-slate-700 mb-8 italic relative z-10 flex-grow">&quot;{review.content}&quot;</p>
            <div className="flex items-center gap-4 border-t border-slate-100 pt-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#b19cd9] to-[#85d3c8] flex items-center justify-center text-white font-extrabold shadow-sm shrink-0">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="text-slate-800 font-bold text-sm leading-tight">{review.name}</p>
                <div className="flex items-center justify-between gap-2 w-full mt-0.5">
                  <span className="text-slate-500 text-xs font-medium">{review.role}</span>
                  <span className="text-slate-400 text-[10px]">{review.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left animate-fade-in-up delay-300 relative z-10 shadow-lg shadow-slate-100">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Ayúdanos a mejorar</h3>
          <p className="text-slate-600 font-medium">Tu opinión es vital para el desarrollo de nuevas funciones.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 rounded-md bg-white border border-slate-200 hover:border-[#b19cd9] hover:text-[#b19cd9] text-slate-800 font-bold transition-all hover:shadow-[0_4px_12px_rgba(177,156,217,0.15)] flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Dejar un Comentario
        </button>
      </div>

      {/* Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-800">Escribe tu reseña</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="flex flex-col items-center mb-4">
                <p className="text-sm font-bold text-slate-700 mb-2">Tu calificación</p>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => {
                    const starValue = i + 1;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setRating(starValue)}
                        onMouseEnter={() => setHoveredRating(starValue)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="focus:outline-none transform hover:scale-110 transition-transform"
                      >
                        <Star 
                          className={cn(
                            "w-8 h-8 transition-colors", 
                            (hoveredRating || rating) >= starValue ? "text-amber-400 fill-amber-400" : "text-slate-200"
                          )} 
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nombre</label>
                  <input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    type="text" 
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-2.5 text-slate-900 focus:outline-none focus:border-[#b19cd9] focus:ring-1 focus:ring-[#b19cd9] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Cargo (Opcional)</label>
                  <input 
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    type="text" 
                    placeholder="Ej. Profesor"
                    className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-2.5 text-slate-900 focus:outline-none focus:border-[#b19cd9] focus:ring-1 focus:ring-[#b19cd9] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Comentario</label>
                <textarea 
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  rows={4}
                  placeholder="¿Qué te parece Kardexia?"
                  className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:border-[#b19cd9] focus:ring-1 focus:ring-[#b19cd9] transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 rounded-md bg-[#b19cd9] hover:bg-[#9b84c8] text-white font-bold text-lg transition-all shadow-[0_8px_20px_-6px_rgba(177,156,217,0.6)]"
              >
                Publicar Reseña
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
