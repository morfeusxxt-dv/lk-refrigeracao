import { Link } from "react-router-dom";

const BENEFITS = [
  { icon: "check_circle", text: "Instalação no ponto ideal para máxima circulação de ar" },
  { icon: "check_circle", text: "Proteção de paredes, móveis e pisos durante a obra" },
  { icon: "check_circle", text: "Acabamento limpo e organizado ao finalizar" },
  { icon: "check_circle", text: "Teste completo de funcionamento antes de sair" },
  { icon: "check_circle", text: "Aparelhos split, multi-split e portáteis" },
  { icon: "check_circle", text: "Garantia no serviço prestado" },
];

const FAQS = [
  {
    q: "Quanto tempo leva a instalação?",
    a: "Em média 2 a 4 horas, dependendo do tipo de aparelho e do ambiente. Aparelhos split padrão são os mais rápidos.",
  },
  {
    q: "Vocês fornecem o suporte e tubulação?",
    a: "Sim! Fornecemos todos os materiais necessários para a instalação. O orçamento já inclui tudo.",
  },
  {
    q: "Qual a garantia do serviço?",
    a: "Garantimos 90 dias em mão de obra. Qualquer problema no período, voltamos sem custo adicional.",
  },
  {
    q: "Atendem fins de semana?",
    a: "Sim, atendemos sábados. Entre em contato para verificar disponibilidade.",
  },
];

export default function Instalacao() {
  return (
    <div className="py-12 md:py-16 bg-[#f8fafc]">
      <div className="mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#0066cc] transition-colors">Início</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <Link to="/#servicos" className="hover:text-[#0066cc] transition-colors">Serviços</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-text-heading font-semibold">Instalação</span>
        </nav>

        {/* Schema.org Service */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Instalação de Ar-Condicionado",
          "description": "Instalação profissional de ar-condicionado em São Luís - MA com garantia de serviço.",
          "provider": { "@type": "LocalBusiness", "name": "LK Refrigeração", "telephone": "+55 98 98210-6557" },
          "areaServed": "São Luís - MA",
          "serviceType": "Instalação de Ar-Condicionado",
        })}} />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-10">
            <div className="rounded-[2rem] bg-white border border-slate-100 shadow-soft overflow-hidden">
              <div className="p-6 sm:p-8 md:p-10">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-[#0066cc]">Serviço</span>
                <h1 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-heading">
                  Instalação de Ar-Condicionado
                </h1>
                <p className="mt-4 text-text-muted text-base sm:text-lg leading-relaxed">
                  Realizamos a instalação completa do seu ar-condicionado com avaliação do melhor ponto para conforto, boa
                  circulação de ar e acabamento limpo. A equipe organiza o ambiente, protege paredes e móveis e finaliza
                  com testes para garantir o funcionamento correto e seguro.
                </p>

                {/* Benefits */}
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
                    href={`https://wa.me/5598982106557?text=${encodeURIComponent("Olá! Gostaria de um orçamento para Instalação de ar-condicionado.")}`}
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

          {/* Sidebar image */}
          <div className="lg:col-span-2 sticky top-24">
            <div className="rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-soft">
              <img
                src="/images/farda1.jpeg"
                alt="Técnico realizando instalação de ar-condicionado"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6 space-y-3 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0066cc]">verified_user</span>
                  <span className="font-semibold text-text-heading">90 dias de garantia</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0066cc]">schedule</span>
                  <span className="font-semibold text-text-heading">Atendimento rápido</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0066cc]">payments</span>
                  <span className="font-semibold text-text-heading">Orçamento sem compromisso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
