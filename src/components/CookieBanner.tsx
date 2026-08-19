import React, { useState, useEffect } from "react";
import { CookieIcon, ShieldCheckIcon, X } from "@lucide/astro";

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Verifica se o usuário já respondeu ao aviso de cookies anteriormente
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie_consent", "accepted_all");
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("cookie_consent", "accepted_essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-gray-950/95 backdrop-blur-md border-t border-[#0894B0]/30 text-white shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        {/* Conteúdo do Aviso */}
        <div className="flex items-start gap-3 text-left">
          <div className="w-10 h-10 rounded-xl bg-[#0894B0]/20 border border-[#0894B0]/40 flex items-center justify-center text-[#0894B0] flex-shrink-0 mt-0.5">
            <CookieIcon className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold text-white flex items-center gap-2">
              <span>Valorizamos sua privacidade</span>
              <ShieldCheckIcon className="w-4 h-4 text-[#0894B0]" />
            </p>
            <p className="text-xs text-gray-300 leading-relaxed max-w-3xl">
              Utilizamos cookies para otimizar a sua experiência de navegação,
              analisar o tráfego da plataforma e personalizar conteúdos para a
              sua pré-campanha. Ao clicar em "Aceitar Todos", você concorda com
              o uso de cookies conforme detalhado em nossa{" "}
              <a
                href="/privacidade"
                className="text-[#70C0D8] underline hover:text-white transition-colors font-medium"
              >
                Política de Privacidade
              </a>
              .
            </p>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex items-center gap-3 w-full md:w-auto flex-shrink-0">
          <button
            onClick={handleAcceptEssential}
            className="flex-1 md:flex-none px-4 py-2.5 text-xs font-semibold text-gray-300 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl transition-all uppercase tracking-wider"
          >
            Apenas Essenciais
          </button>

          <button
            onClick={handleAcceptAll}
            className="flex-1 md:flex-none px-6 py-2.5 text-xs font-extrabold text-white bg-[#0894B0] hover:bg-[#067a92] rounded-xl shadow-lg transition-all uppercase tracking-wider transform hover:-translate-y-0.5"
          >
            Aceitar Todos
          </button>

          <button
            onClick={handleAcceptEssential}
            className="p-2 text-gray-400 hover:text-white transition-colors md:hidden"
            aria-label="Fechar aviso de cookies"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
