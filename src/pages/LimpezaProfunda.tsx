import { Link } from "react-router-dom";

const BENEFITS = [
  { icon: "check_circle", text: "Remoção de fungos, bactérias e ácaros" },
  { icon: "check_circle", text: "Higienização completa do evaporador e filtros" },
  { icon: "check_circle", text: "Eliminação de odores e impurezas" },
  { icon: "check_circle", text: "Melhora da qualidade do ar respirado" },
  { icon: "check_circle", text: "Aumento da eficiência e vida útil do aparelho" },
  { icon: "check_circle", text: "Produto bactericida de qualidade hospitalar" },
];

const FAQS = [
  {
    q: "Qual a diferença entre limpeza simples e limpeza profunda?",
    a: "A limpeza simples limpa apenas os filtros externos. A limpeza profunda desmonta o aparelho e higieniza todas as peças internas, incluindo evaporador, bandeja e serpentina.",
  },
  {
    q: "Com que frequência devo fazer a limpeza profunda?",
    a: "Recomendamos a cada 12 meses em uso normal. Em ambientes com animais de estimação ou muita poeira, a cada 6 meses.",
  },
  {
    q: "O aparelho fica sujo após a limpeza?",
    a: "Não. Trabalhamos com lona de proteção no piso e paredes, e deixamos o ambiente limpo ao finalizar o serviço.",
  },
  {
    q: "Preciso esvaziar o quarto antes?",
    a: "Não é necessário esvaziar, mas é bom proteger objetos eletrônicos próximos ao aparelho. Nossa equipe auxilia no processo.",
  },
];

export default function LimpezaProfunda() {
  return (
    <div className="py-12 md:py-16 bg-[#f8fafc]">
      <div className="mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#0066cc] transition-colors">Início</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <Link to="/#servicos" className="hover:text-[#0066cc] transition-colors">Serviços</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-text-heading font-semibold">Limpeza Profunda</span>
        </nav>

        {/* Schema.org Service */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Limpeza Profunda de Ar-Condicionado",
          "description": "Higienização completa de ar-condicionado com remoção de fungos e bactérias em São Luís - MA.",
          "provider": { "@type": "LocalBusiness", "name": "LK Refrigeração", "telephone": "+55 98 98210-6557" },
          "areaServed": "São Luís - MA",
          "serviceType": "Limpeza Profunda de Ar-Condicionado",
        })}} />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-10">
            <div className="rounded-[2rem] bg-white border border-slate-100 shadow-soft overflow-hidden">
              <div className="p-6 sm:p-8 md:p-10">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-[#0066cc]">Serviço</span>
                <h1 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-heading">
                  Limpeza Profunda de Ar-Condicionado
                </h1>
                <p className="mt-4 text-text-muted text-base sm:text-lg leading-relaxed">
                  A higienização profunda remove sujeira acumulada, fungos e odores, ajudando na qualidade do ar e no
                  desempenho do aparelho. Fazemos a limpeza completa de componentes internos e testes para garantir ar
                  mais puro e funcionamento eficiente.
                </p>

                <ul className="mt-6 space-y-3">
                  {BENEFITS.map((b) => (
                    <li key={b.text} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-500 mt-0.5 shrink-0">{b.icon}</span>
                      <span className="text-text-muted">{b.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/5598982106557?text=${encodeURIComponent("Olá! Gostaria de um orçamento para Limpeza Profunda do meu ar-condicionado.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-14 w-full sm:w-auto px-8 rounded-full bg-[#25D366] text-white font-bold text-lg flex items-center justify-center transition-transform hover:scale-105 shadow-md shadow-green-200"
                  >
                    <span className="material-symbols-outlined mr-2">chat</span>
                    Pedir orçamento no WhatsApp
                  </a>
                  <Link
                    to="/#contato"
                    className="h-14 w-full sm:w-auto px-8 rounded-full bg-white border-2 border-sky-100 hover:border-[#0066cc] hover:text-[#0066cc] text-text-muted font-bold flex items-center justify-center transition-colors"
                  >
                    Ir para contato
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="rounded-[2rem] bg-white border border-slate-100 shadow-soft overflow-hidden">
              <div className="p-6 sm:p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold text-text-heading mb-6">Perguntas Frequentes</h2>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }) => (
                    <details key={q} className="group rounded-2xl border border-slate-100 overflow-hidden">
                      <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-text-heading hover:bg-slate-50 transition-colors list-none">
                        {q}
                        <span className="material-symbols-outlined text-[#0066cc] group-open:rotate-180 transition-transform">expand_more</span>
                      </summary>
                      <p className="px-4 pb-4 text-text-muted leading-relaxed">{a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 sticky top-24">
            <div className="rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-soft">
              <img
                src="/images/farda3.png"
                alt="Técnico realizando limpeza profunda de ar-condicionado"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6 space-y-3 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0066cc]">air</span>
                  <span className="font-semibold text-text-heading">Ar mais puro e saudável</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0066cc]">cleaning_services</span>
                  <span className="font-semibold text-text-heading">Produto bactericida profissional</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0066cc]">payments</span>
                  <span className="font-semibold text-text-heading">Preço justo e transparente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
