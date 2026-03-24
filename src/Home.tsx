import { useEffect, useState, type FormEvent } from "react";

type LightboxImage = { src: string; alt: string };
type GalleryFilter = "todos" | "instalacao" | "manutencao" | "limpeza";

declare function gtag(...args: unknown[]): void;

function trackWhatsApp() {
  if (typeof gtag !== "undefined") {
    gtag("event", "conversion", { send_to: "AW-17974208277" });
  }
}

const GALLERY_ITEMS = [
  { src: "/images/ambiente-agradavel.png", alt: "Ambiente super agradável com ar condicionado", label: "Ambiente Super Agradável", sub: "Conforto e bem-estar", tag: "instalacao" as GalleryFilter },
  { src: "/images/instalacao-split.jpg", alt: "Instalação de ar condicionado split", label: "Instalação Split", sub: "Instalação profissional", tag: "instalacao" as GalleryFilter },
  { src: "/images/preventiva.jpg", alt: "Manutenção preventiva de ar condicionado", label: "Preventiva", sub: "Manutenção preventiva", tag: "manutencao" as GalleryFilter },
  { src: "/images/limpeza-profunda.jpg", alt: "Limpeza profunda de ar condicionado", label: "Limpeza Profunda", sub: "Higienização completa", tag: "limpeza" as GalleryFilter },
  { src: "/images/unidade-externa.jpg", alt: "Unidade externa de ar condicionado", label: "Unidade Externa", sub: "Instalação e manutenção", tag: "instalacao" as GalleryFilter },
];

const TESTIMONIALS = [
  { initials: "CS", name: "Carlos Silva", color: "bg-blue-100 text-blue-700", text: "\"O técnico foi muito educado, explicou tudo e deixou tudo limpinho. O ar ficou gelando como novo!\"" },
  { initials: "MO", name: "Mariana Oliveira", color: "bg-purple-100 text-purple-700", text: "\"Adorei o atendimento. Chegaram no horário combinado e resolveram o problema que outra empresa não conseguiu.\"" },
  { initials: "RS", name: "Ricardo Santos", color: "bg-green-100 text-green-700", text: "\"Recomendo de olhos fechados. Preço justo e serviço impecável. Minha casa está muito mais confortável.\"" },
];

const BAIRROS = [
  "Cohama", "Calhau", "Renascença", "Jardim Renascença", "São Francisco",
  "Olho D'Água", "Cidade Operária", "Itaqui-Bacanga", "Centro",
  "Turu", "Coheb", "Anil", "Vinhais", "São Cristóvão",
];

export default function Home() {
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<GalleryFilter>("todos");
  const [formData, setFormData] = useState({ nome: "", servico: "instalacao", bairro: "" });

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  const filteredGallery = galleryFilter === "todos"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.tag === galleryFilter);

  const handleWhatsAppSchedule = (e: FormEvent) => {
    e.preventDefault();
    const servicoLabel = { instalacao: "Instalação", manutencao: "Manutenção", "limpeza-profunda": "Limpeza Profunda" }[formData.servico] ?? formData.servico;
    const msg = encodeURIComponent(`Olá! Meu nome é ${formData.nome} e gostaria de agendar uma ${servicoLabel} no bairro ${formData.bairro}. Pode me ajudar?`);
    trackWhatsApp();
    window.open(`https://wa.me/5598982106557?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative py-10 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-[#e6f2ff]"
        id="inicio"
      >
        <div className="relative mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left animate-fade-in-up">
              <div className="flex w-full flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full border border-sky-100 bg-white px-4 py-1.5 text-sm font-bold text-[#0066cc] shadow-sm">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                    Atendimento rápido em São Luís
                  </div>
                  <h1 className="font-display text-4xl font-bold tracking-tight text-text-heading sm:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.1]">
                    <span className="text-balance">Conforto e frescor para o seu lar</span>
                  </h1>
                  <p className="max-w-[44rem] text-text-muted text-lg md:text-xl 2xl:text-2xl leading-relaxed font-medium text-center lg:text-justify">
                    Deixe sua casa na temperatura ideal. Técnicos de confiança para instalação e manutenção do seu
                    ar-condicionado, com carinho e eficiência.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/#contato"
                    className="h-14 w-full sm:w-auto px-8 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-lg flex items-center justify-center transition-all shadow-lg shadow-[#0066cc]/20 hover:shadow-[#0066cc]/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0066cc]/30"
                  >
                    <span className="material-symbols-outlined mr-2">calendar_month</span>
                    Agendar Visita
                  </a>
                  <a
                    href="/#servicos"
                    className="h-14 w-full sm:w-auto px-8 rounded-full border-2 border-sky-100 bg-white hover:border-[#0066cc] hover:text-[#0066cc] text-text-muted font-bold flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0066cc]/20"
                  >
                    Conhecer Serviços
                  </a>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-text-muted pt-4">
                  <div className="flex -space-x-3">
                    {["AM", "JP", "LF"].map((ini, i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700 shadow-sm">
                        {ini}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex text-yellow-400 text-xs mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[16px] leading-none fill-current">star</span>
                      ))}
                    </div>
                    <span className="font-bold text-text-heading">+500 famílias</span> felizes
                  </div>
                </div>
              </div>
            </div>

            {/* Hero image — técnico real */}
            <div className="flex items-center justify-center animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-[#0066cc]/10 blur-3xl" aria-hidden="true" />
                <img
                  alt="Técnico LK Refrigeração"
                  src="/images/farda1.jpeg"
                  decoding="async"
                  fetchPriority="high"
                  className="relative w-[16rem] sm:w-[18rem] md:w-[20rem] lg:w-[22rem] xl:w-[28rem] 2xl:w-[38rem] h-auto object-contain drop-shadow-xl rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS COM NÚMEROS ── */}
      <section className="bg-white py-8 md:py-10 border-y border-slate-100">
        <div className="mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
            {[
              { icon: "verified_user", num: "100%", label: "Garantia de Serviço" },
              { icon: "schedule",      num: "< 1h",  label: "Resposta Rápida" },
              { icon: "savings",       num: "Preço", label: "Justo e Transparente" },
              { icon: "groups",        num: "+500",  label: "Clientes Atendidos" },
            ].map(({ icon, num, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl text-[#0066cc]">{icon}</span>
                <span className="text-2xl font-bold text-text-heading">{num}</span>
                <span className="text-sm font-semibold text-text-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section className="py-12 md:py-24 bg-[#e6f2ff]" id="servicos">
        <div className="mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center lg:items-start lg:text-left mb-16">
            <span className="text-[#0066cc] font-bold tracking-wider uppercase text-sm bg-blue-100 px-3 py-1 rounded-full">O que fazemos</span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl 2xl:text-6xl text-text-heading">Cuidamos do seu conforto</h2>
            <p className="max-w-[700px] text-text-muted md:text-lg text-center lg:text-justify">
              Soluções completas para você não se preocupar com o calor. Tudo feito com limpeza e organização.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: "handyman", title: "Instalação", desc: "Instalamos seu aparelho novo com todo cuidado, sem sujeira e no local ideal para refrescar sua casa inteira.", href: "/servicos/instalacao" },
              { icon: "build_circle", title: "Manutenção", desc: "Seu ar parou de gelar? Fazemos o conserto rápido para devolver o conforto da sua família.", href: "/servicos/manutencao" },
              { icon: "cleaning_services", title: "Limpeza Profunda", desc: "Removemos fungos e bactérias para proteger a saúde respiratória de quem você ama. Ar puro de verdade.", href: "/servicos/limpeza-profunda" },
            ].map(({ icon, title, desc, href }) => (
              <div key={title} className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-hover transition-all duration-300 border border-slate-100">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0066cc] group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-4xl">{icon}</span>
                </div>
                <h3 className="mb-3 text-2xl font-display font-bold text-text-heading">{title}</h3>
                <p className="text-text-muted leading-relaxed mb-4">{desc}</p>
                <a className="inline-flex items-center font-bold text-[#0066cc] hover:text-[#0052a3] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0066cc]/20 rounded" href={href}>
                  Saiba mais <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERIA COM FILTROS ── */}
      <section className="py-12 md:py-24 bg-white" id="galeria">
        <div className="mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center lg:items-start lg:text-left mb-10">
            <span className="text-[#0066cc] font-bold tracking-wider uppercase text-sm bg-blue-100 px-3 py-1 rounded-full">Nosso Trabalho</span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl 2xl:text-6xl text-text-heading">Instalação e Manutenção</h2>
            <p className="max-w-[700px] text-text-muted md:text-lg text-center lg:text-justify">
              Confira alguns dos nossos serviços realizados com qualidade e profissionalismo.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
            {([
              { value: "todos", label: "Todos" },
              { value: "instalacao", label: "Instalação" },
              { value: "manutencao", label: "Manutenção" },
              { value: "limpeza", label: "Limpeza" },
            ] as { value: GalleryFilter; label: string }[]).map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setGalleryFilter(value)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  galleryFilter === value
                    ? "bg-[#0066cc] text-white shadow-md"
                    : "bg-slate-100 text-text-muted hover:bg-blue-50 hover:text-[#0066cc]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {filteredGallery.map((item) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Abrir foto: ${item.label}`}
                className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 text-left"
                onClick={() => setLightbox({ src: item.src, alt: item.alt })}
              >
                <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                  <img
                    alt={item.alt}
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                    src={item.src}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <p className="text-white font-bold text-lg">{item.label}</p>
                    <p className="text-blue-100 text-sm">{item.sub}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÁREAS ATENDIDAS ── */}
      <section className="py-12 md:py-24 bg-[#e6f2ff] relative overflow-hidden" id="areas">
        <div className="relative mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-[260px] sm:h-[380px] lg:h-[450px] w-full overflow-hidden rounded-[2.5rem] shadow-xl border-4 border-white">
              <img
                alt="Técnico sorrindo em atendimento"
                className="object-cover w-full h-full"
                src="/images/familia.png"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined">local_shipping</span>
                  </div>
                  <div>
                    <p className="font-bold text-text-heading text-lg">Chegamos rápido até você</p>
                    <p className="text-sm text-text-muted">Equipes prontas em toda a região</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8 pl-0 lg:pl-10">
              <div className="space-y-4">
                <span className="text-[#0066cc] font-bold tracking-wider uppercase text-sm bg-blue-100 px-3 py-1 rounded-full">Onde Atendemos</span>
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-text-heading">Atendimento Local de Confiança</h2>
                <p className="text-text-muted text-lg text-center lg:text-justify">
                  Nossa equipe é da região e conhece bem as necessidades de quem mora aqui. Atendemos com agilidade e cordialidade.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0066cc] text-white shadow-md shrink-0">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                  </div>
                  <h3 className="font-bold text-xl text-text-heading">São Luís — todos os bairros</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {BAIRROS.map((b) => (
                    <span key={b} className="px-3 py-1 rounded-full bg-white border border-sky-100 text-sm font-semibold text-text-muted shadow-sm">
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/5598982106557"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsApp}
                className="w-full sm:w-auto h-14 px-8 rounded-full bg-[#0066cc] text-white font-bold text-lg flex items-center justify-center transition-all hover:bg-[#0052a3] shadow-lg shadow-[#0066cc]/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0066cc]/30"
              >
                <span className="material-symbols-outlined mr-2">calendar_month</span>
                Agendar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section className="py-12 md:py-24 bg-gradient-to-t from-[#e6f2ff] to-white">
        <div className="mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="mb-3 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-bold text-[#0066cc] uppercase tracking-wide">Depoimentos</span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-text-heading">Famílias Satisfeitas</h2>
          </div>
          {/* Scroll-snap carrossel em mobile, grid em md+ */}
          <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:overflow-visible scrollbar-hide">
            {TESTIMONIALS.map(({ initials, name, color, text }) => (
              <div key={name} className="flex flex-col rounded-3xl bg-white p-6 sm:p-8 shadow-soft border border-slate-100 min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-start">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill-current">star</span>
                  ))}
                </div>
                <p className="text-text-muted text-lg mb-6 flex-grow">{text}</p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${color}`}>
                    {initials}
                  </div>
                  <div>
                    <p className="text-base font-bold text-text-heading">{name}</p>
                    <p className="text-sm text-text-muted">São Luís</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATO / FORMULÁRIO PRÉ-PREENCHIDO ── */}
      <section className="py-12 bg-white relative border-t border-slate-100" id="contato">
        <div className="mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[#0066cc] to-[#0052a3] p-6 sm:p-8 md:p-16 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div className="text-center lg:text-left">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                  Sua casa merece esse conforto
                </h2>
                <p className="text-blue-50 text-lg sm:text-xl mb-8 font-medium">
                  Preencha seu nome, serviço e bairro para já começarmos a conversa no WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="https://wa.me/5598982106557"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackWhatsApp}
                    className="h-14 w-full sm:w-auto px-8 rounded-full bg-white/10 border-2 border-white/30 text-white font-bold text-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <span className="material-symbols-outlined mr-2">chat</span>
                    Chat direto
                  </a>
                  <a
                    href="tel:+5598982106557"
                    className="h-14 w-full sm:w-auto px-8 rounded-full bg-black/10 border-2 border-white/30 text-white font-bold text-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <span className="material-symbols-outlined mr-2">call</span>
                    (98) 98210-6557
                  </a>
                </div>
              </div>

              {/* Right — formulário */}
              <form onSubmit={handleWhatsAppSchedule} className="bg-white rounded-3xl p-6 sm:p-8 space-y-4">
                <h3 className="font-display font-bold text-xl text-text-heading">Agendar pelo WhatsApp</h3>
                <div>
                  <label className="block text-sm font-semibold text-text-muted mb-1" htmlFor="nome">Seu nome</label>
                  <input
                    id="nome"
                    type="text"
                    required
                    placeholder="Ex: Maria Silva"
                    value={formData.nome}
                    onChange={(e) => setFormData((p) => ({ ...p, nome: e.target.value }))}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-text-heading focus:outline-none focus:ring-2 focus:ring-[#0066cc]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-muted mb-1" htmlFor="servico">Serviço</label>
                  <select
                    id="servico"
                    value={formData.servico}
                    onChange={(e) => setFormData((p) => ({ ...p, servico: e.target.value }))}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-text-heading focus:outline-none focus:ring-2 focus:ring-[#0066cc] bg-white"
                  >
                    <option value="instalacao">Instalação</option>
                    <option value="manutencao">Manutenção</option>
                    <option value="limpeza-profunda">Limpeza Profunda</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-muted mb-1" htmlFor="bairro">Bairro</label>
                  <input
                    id="bairro"
                    type="text"
                    required
                    placeholder="Ex: Calhau"
                    value={formData.bairro}
                    onChange={(e) => setFormData((p) => ({ ...p, bairro: e.target.value }))}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-text-heading focus:outline-none focus:ring-2 focus:ring-[#0066cc]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-14 rounded-full bg-[#25D366] text-white font-bold text-lg flex items-center justify-center hover:bg-green-600 transition-colors shadow-md"
                >
                  <span className="material-symbols-outlined mr-2">chat</span>
                  Enviar pelo WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Fechar"
              className="absolute -top-3 -right-3 h-11 w-11 rounded-full bg-white text-text-heading shadow-soft flex items-center justify-center"
              onClick={() => setLightbox(null)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="h-full max-h-[85vh] w-full rounded-3xl object-contain bg-white"
              decoding="async"
            />
          </div>
        </div>
      )}
    </>
  );
}
