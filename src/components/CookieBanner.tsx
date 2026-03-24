import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("lk-cookies-accepted");
    if (!accepted) {
      // Pequeno delay para não travar o LCP
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("lk-cookies-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-[200] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl bg-white border border-slate-200 shadow-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <span className="material-symbols-outlined text-3xl text-[#0066cc] shrink-0">cookie</span>
        <div className="flex-1">
          <p className="text-sm text-text-muted leading-relaxed">
            Usamos cookies para melhorar sua experiência e analisar o tráfego do site (Google Analytics). Ao continuar navegando, você concorda com nossa{" "}
            <Link to="/politica-de-privacidade" className="text-[#0066cc] font-semibold underline hover:no-underline">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={accept}
            className="h-10 px-6 rounded-full bg-[#0066cc] text-white text-sm font-bold hover:bg-[#0052a3] transition-colors"
          >
            Aceitar
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="h-10 px-5 rounded-full border border-slate-200 text-sm font-semibold text-text-muted hover:bg-slate-50 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
