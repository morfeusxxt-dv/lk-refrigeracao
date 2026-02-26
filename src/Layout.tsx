import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToHash = useCallback((hash: string) => {
    const id = hash.replace(/^#/, "");
    if (!id) return;

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const navigateToSection = useCallback(
    (hash: string) => {
      if (location.pathname !== "/") {
        navigate(`/${hash}`);
        return;
      }

      if (location.hash !== hash) {
        navigate({ pathname: "/", hash });
      }

      scrollToHash(hash);
    },
    [location.hash, location.pathname, navigate, scrollToHash]
  );

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (location.pathname !== "/") return;
    if (!location.hash) return;

    const t = window.setTimeout(() => scrollToHash(location.hash), 0);
    return () => window.clearTimeout(t);
  }, [location.hash, location.pathname, scrollToHash]);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-text-main font-body antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
        <div className="mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex items-center justify-between py-3 sm:py-4">
            <Link to="/" onClick={() => navigateToSection("#inicio")} className="flex items-center">
              <img
                alt="LK Refrigeração"
                className="h-10 sm:h-12 w-auto"
                src="/images/logo.png"
                decoding="async"
                fetchPriority="high"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <button type="button" className="text-base font-semibold text-text-muted hover:text-[#0066cc] transition-colors" onClick={() => navigateToSection("#inicio")}>Início</button>
              <button type="button" className="text-base font-semibold text-text-muted hover:text-[#0066cc] transition-colors" onClick={() => navigateToSection("#servicos")}>Serviços</button>
              <button type="button" className="text-base font-semibold text-text-muted hover:text-[#0066cc] transition-colors" onClick={() => navigateToSection("#galeria")}>Galeria</button>
              <button type="button" className="text-base font-semibold text-text-muted hover:text-[#0066cc] transition-colors" onClick={() => navigateToSection("#areas")}>Áreas</button>
              <button type="button" className="text-base font-semibold text-text-muted hover:text-[#0066cc] transition-colors" onClick={() => navigateToSection("#contato")}>Contato</button>
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://wa.me/5598982106557"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center rounded-full bg-[#25D366] px-6 text-base font-bold text-white transition-transform hover:scale-105 shadow-md shadow-green-200"
              >
                <span className="material-symbols-outlined mr-2">chat</span>
                WhatsApp
              </a>
            </div>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              className="md:hidden flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-text-main hover:bg-slate-200"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              <span className="material-symbols-outlined">{mobileMenuOpen ? "close" : "menu"}</span>
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden pb-4" id="mobile-nav">
              <div
                className="fixed inset-0 z-40 bg-black/30"
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
              />
              <div className="relative z-50 flex flex-col gap-2 rounded-2xl bg-white p-3 border border-slate-100 shadow-sm">
                <button
                  type="button"
                  className="rounded-xl px-4 py-3 font-bold text-text-heading hover:bg-slate-50"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigateToSection("#inicio");
                  }}
                >
                  Início
                </button>
                <button
                  type="button"
                  className="rounded-xl px-4 py-3 font-bold text-text-heading hover:bg-slate-50"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigateToSection("#servicos");
                  }}
                >
                  Serviços
                </button>
                <button
                  type="button"
                  className="rounded-xl px-4 py-3 font-bold text-text-heading hover:bg-slate-50"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigateToSection("#galeria");
                  }}
                >
                  Galeria
                </button>
                <button
                  type="button"
                  className="rounded-xl px-4 py-3 font-bold text-text-heading hover:bg-slate-50"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigateToSection("#areas");
                  }}
                >
                  Áreas
                </button>
                <button
                  type="button"
                  className="rounded-xl px-4 py-3 font-bold text-text-heading hover:bg-slate-50"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigateToSection("#contato");
                  }}
                >
                  Contato
                </button>
                <a
                  href="https://wa.me/5598982106557"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex h-12 items-center justify-center rounded-full bg-[#25D366] px-6 text-base font-bold text-white shadow-md shadow-green-200"
                >
                  <span className="material-symbols-outlined mr-2">chat</span>
                  WhatsApp
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-slate-100">
        <div className="mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <img alt="LK Refrigeração" className="h-10 w-auto" src="/images/logo.png" />
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  Trazendo conforto e qualidade de vida para lares em São Luís e região com serviços de excelência.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-text-heading text-lg mb-6">Serviços</h3>
                <ul className="space-y-3 text-text-muted">
                  <li>
                    <a className="hover:text-[#0066cc] transition-colors hover:translate-x-1 inline-block" href="/#servicos">
                      Instalação
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-[#0066cc] transition-colors hover:translate-x-1 inline-block" href="/#servicos">
                      Manutenção
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-[#0066cc] transition-colors hover:translate-x-1 inline-block" href="/#servicos">
                      Limpeza
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-[#0066cc] transition-colors hover:translate-x-1 inline-block" href="/#contato">
                      Contratos
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-display font-bold text-text-heading text-lg mb-6">Contato</h3>
                <ul className="space-y-4 text-text-muted">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#0066cc] mt-0.5">mail</span>
                    contato@lkrefrigeracao.com
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#0066cc] mt-0.5">phone</span>
                    (98) 98210-6557
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#0066cc] mt-0.5">location_on</span>
                    São Luís - MA
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-display font-bold text-text-heading text-lg mb-6">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a
                    className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-text-muted hover:bg-[#0066cc] hover:text-white transition-all duration-300"
                    href="https://wa.me/5598982106557"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        clipRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-text-muted hover:bg-[#0066cc] hover:text-white transition-all duration-300"
                    href="https://wa.me/5598982106557"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        clipRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363.416 2.427-.465 1.067-.047 1.407-.06 3.808-.06zm0 1.838a2.536 2.536 0 00-2.529 2.536v.005c0 1.396 1.134 2.529 2.53 2.529a2.536 2.536 0 002.529-2.53v-.005a2.536 2.536 0 00-2.53-2.529zm4.333-.312a1.507 1.507 0 10-1.507 1.507 1.507 1.507 0 001.507-1.507z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-slate-100 pt-8 text-center text-sm text-text-muted">
              © 2026 LK Refrigeração. Feito com carinho para você.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
