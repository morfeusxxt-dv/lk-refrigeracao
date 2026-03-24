import { Link } from "react-router-dom";

const BENEFITS = [
  { icon: "check_circle", text: "Diagnóstico completo do equipamento" },
  { icon: "check_circle", text: "Limpeza dos filtros, evaporador e condensador" },
  { icon: "check_circle", text: "Verificação de vazamento de gás e pressão" },
  { icon: "check_circle", text: "Lubrificação de componentes rotativos" },
  { icon: "check_circle", text: "Testes de temperatura e eficiência" },
  { icon: "check_circle", text: "Redução de consumo de energia após manutenção" },
];

const FAQS = [
  {
    q: "Com que frequência devo fazer manutenção?",
    a: "Recomendamos manutenção preventiva a cada 6 meses. Em ambientes com muito pó ou uso intenso, a cada 3 meses.",
  },
  {
    q: "O ar parou de gelar. Precisa de gás?",
    a: "Nem sempre. Muitas vezes o filtro entupido ou um componente elétrico resolve o problema sem precisar recarregar o gás. Fazemos o diagnóstico correto antes de qualquer serviço.",
  },
  {
    q: "Atendem em emergência?",
    a: "Sim! Entre em contato pelo WhatsApp e tentamos encaixar o mais rápido possível, inclusive em finais de semana.",
  },
  {
    q: "A manutenção tem garantia?",
    a: "Sim. Oferecemos 60 dias de garantia em todos os serviços de manutenção.",
  },
];

export default function Manutencao() {
  return (
    <div className="py-12 md:py-16 bg-[#f8fafc]">
      <div className="mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#0066cc] transition-colors">Início</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <Link to="/#servicos" className="hover:text-[#0066cc] transition-colors">Serviços</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-text-heading font-semibold">Manutenção</span>
        </nav>

        {/* Schema.org Service */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Manutenção de Ar-Condicionado",
          "description": "Manutenção preventiva e corretiva de ar-condicionado em São Luís - MA.",
          "provider": { "@type": "LocalBusiness", "name": "LK Refrigeração", "telephone": "+55 98 98210-6557" },
          "areaServed": "São Luís - MA",
          "serviceType": "Manutenção de Ar-Condicionado",
        })}} />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-10">
            <div className="rounded-[2rem] bg-white border border-slate-100 shadow-soft overflow-hidden">
              <div className="p-6 sm:p-8 md:p-10">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-[#0066cc]">Serviço</span>
                <h1 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-heading">
                  Manutenção de Ar-Condicionado
                </h1>
                <p className="mt-4 text-text-muted text-base sm:text-lg leading-relaxed">
                  Fazemos manutenção preventiva e corretiva para seu equipamento voltar a gelar com eficiência. Realizamos
                  diagnóstico, limpeza dos componentes essenciais, verificação de vazamentos e testes de funcionamento para
                  reduzir consumo e evitar paradas inesperadas.
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
                    href={`https://wa.me/5598982106557?text=${encodeURIComponent("Olá! Gostaria de um orçamento para Manutenção do meu ar-condicionado.")}`}
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
                src="/images/farda2.png"
                alt="Técnico realizando manutenção de ar-condicionado"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6 space-y-3 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0066cc]">verified_user</span>
                  <span className="font-semibold text-text-heading">60 dias de garantia</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0066cc]">schedule</span>
                  <span className="font-semibold text-text-heading">Atendimento emergencial</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0066cc]">payments</span>
                  <span className="font-semibold text-text-heading">Diagnóstico sem compromisso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
