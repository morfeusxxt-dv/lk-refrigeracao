import { useEffect, useState } from "react";

type LightboxImage = { src: string; alt: string };

export default function Home() {
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  return (
    <>
      <section
        className="relative py-10 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-[#e6f2ff]"
        id="inicio"
      >
        <div className="relative mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
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
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                      <img
                        alt="User"
                        className="object-cover h-full w-full"
                        src="/images/logo.png"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                      <img
                        alt="User"
                        className="object-cover h-full w-full"
                        src="/images/logo.png"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                      <img
                        alt="User"
                        className="object-cover h-full w-full"
                        src="/images/logo.png"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex text-yellow-400 text-xs mb-0.5">
                      <span className="material-symbols-outlined text-[16px] leading-none fill-current">star</span>
                      <span className="material-symbols-outlined text-[16px] leading-none fill-current">star</span>
                      <span className="material-symbols-outlined text-[16px] leading-none fill-current">star</span>
                      <span className="material-symbols-outlined text-[16px] leading-none fill-current">star</span>
                      <span className="material-symbols-outlined text-[16px] leading-none fill-current">star</span>
                    </div>
                    <span className="font-bold text-text-heading">+500 famílias</span> felizes
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-[#0066cc]/10 blur-3xl" aria-hidden="true" />
                <img
                  alt="LK Refrigeração"
                  src="/images/logo.png"
                  decoding="async"
                  fetchPriority="high"
                  className="relative w-[16rem] sm:w-[18rem] md:w-[20rem] lg:w-[22rem] xl:w-[28rem] 2xl:w-[38rem] h-auto object-contain drop-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 md:py-10 border-y border-slate-100">
        <div className="mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left opacity-80">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-[#0066cc]">verified_user</span>
              <span className="text-lg font-bold text-text-heading">Garantia de Serviço</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-[#0066cc]">schedule</span>
              <span className="text-lg font-bold text-text-heading">Pontualidade</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-[#0066cc]">savings</span>
              <span className="text-lg font-bold text-text-heading">Preço Justo</span>
            </div>
          </div>
        </div>
      </section>

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
            <div className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-hover transition-all duration-300 border border-slate-100">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0066cc] group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl">handyman</span>
              </div>
              <h3 className="mb-3 text-2xl font-display font-bold text-text-heading">Instalação</h3>
              <p className="text-text-muted leading-relaxed mb-4">
                Instalamos seu aparelho novo com todo cuidado, sem sujeira e no local ideal para refrescar sua casa inteira.
              </p>
              <a
                className="inline-flex items-center font-bold text-[#0066cc] hover:text-[#0052a3] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0066cc]/20 rounded"
                href="/servicos/instalacao"
              >
                Saiba mais <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </a>
            </div>
            <div className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-hover transition-all duration-300 border border-slate-100">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0066cc] group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl">build_circle</span>
              </div>
              <h3 className="mb-3 text-2xl font-display font-bold text-text-heading">Manutenção</h3>
              <p className="text-text-muted leading-relaxed mb-4">
                Seu ar parou de gelar? Fazemos o conserto rápido para devolver o conforto da sua família.
              </p>
              <a
                className="inline-flex items-center font-bold text-[#0066cc] hover:text-[#0052a3] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0066cc]/20 rounded"
                href="/servicos/manutencao"
              >
                Saiba mais <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </a>
            </div>
            <div className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-hover transition-all duration-300 border border-slate-100">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0066cc] group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl">cleaning_services</span>
              </div>
              <h3 className="mb-3 text-2xl font-display font-bold text-text-heading">Limpeza Profunda</h3>
              <p className="text-text-muted leading-relaxed mb-4">
                Removemos fungos e bactérias para proteger a saúde respiratória de quem você ama. Ar puro de verdade.
              </p>
              <a
                className="inline-flex items-center font-bold text-[#0066cc] hover:text-[#0052a3] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0066cc]/20 rounded"
                href="/servicos/limpeza-profunda"
              >
                Saiba mais <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white" id="galeria">
        <div className="mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center lg:items-start lg:text-left mb-16">
            <span className="text-[#0066cc] font-bold tracking-wider uppercase text-sm bg-blue-100 px-3 py-1 rounded-full">Nosso Trabalho</span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl 2xl:text-6xl text-text-heading">Instalação e Manutenção</h2>
            <p className="max-w-[700px] text-text-muted md:text-lg text-center lg:text-justify">
              Confira alguns dos nossos serviços realizados com qualidade e profissionalismo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <button
              type="button"
              aria-label="Abrir foto: Ambiente Super Agradável"
              className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 text-left"
              onClick={() =>
                setLightbox({
                  src: "/images/ambiente-agradavel.jpg",
                  alt: "Ambiente super agradável com ar condicionado",
                })
              }
            >
              <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                <img
                  alt="Ambiente super agradável com ar condicionado"
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  src="/images/ambiente-agradavel.jpg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-white font-bold text-lg">Ambiente Super Agradável</p>
                  <p className="text-blue-100 text-sm">Conforto e bem-estar</p>
                </div>
              </div>
            </button>
            <button
              type="button"
              aria-label="Abrir foto: Instalação Split"
              className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 text-left"
              onClick={() =>
                setLightbox({
                  src: "/images/instalacao-split.jpg",
                  alt: "Instalação de ar condicionado split",
                })
              }
            >
              <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                <img
                  alt="Instalação de ar condicionado split"
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  src="/images/instalacao-split.jpg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-white font-bold text-lg">Instalação Split</p>
                  <p className="text-blue-100 text-sm">Instalação profissional</p>
                </div>
              </div>
            </button>
            <button
              type="button"
              aria-label="Abrir foto: Preventiva"
              className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 text-left"
              onClick={() =>
                setLightbox({
                  src: "/images/preventiva.jpg",
                  alt: "Manutenção preventiva de ar condicionado",
                })
              }
            >
              <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                <img
                  alt="Manutenção preventiva de ar condicionado"
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  src="/images/preventiva.jpg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-white font-bold text-lg">Preventiva</p>
                  <p className="text-blue-100 text-sm">Manutenção preventiva</p>
                </div>
              </div>
            </button>
            <button
              type="button"
              aria-label="Abrir foto: Limpeza Profunda"
              className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 text-left"
              onClick={() =>
                setLightbox({
                  src: "/images/limpeza-profunda.jpg",
                  alt: "Limpeza profunda de ar condicionado",
                })
              }
            >
              <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                <img
                  alt="Limpeza profunda de ar condicionado"
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  src="/images/limpeza-profunda.jpg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-white font-bold text-lg">Limpeza Profunda</p>
                  <p className="text-blue-100 text-sm">Higienização completa</p>
                </div>
              </div>
            </button>
            <button
              type="button"
              aria-label="Abrir foto: Unidade Externa"
              className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 text-left"
              onClick={() =>
                setLightbox({
                  src: "/images/unidade-externa.jpg",
                  alt: "Unidade externa de ar condicionado",
                })
              }
            >
              <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                <img
                  alt="Unidade externa de ar condicionado"
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  src="/images/unidade-externa.jpg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-white font-bold text-lg">Unidade Externa</p>
                  <p className="text-blue-100 text-sm">Instalação e manutenção</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

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
              <div className="space-y-4">
                <div className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-soft border border-sky-100 hover:bg-sky-100 transition-colors cursor-default">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0066cc] text-white shadow-md">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-text-heading">São Luís</h3>
                    <p className="text-sm text-text-muted">Atendimento em todos os bairros</p>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/5598982106557"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-14 px-8 rounded-full bg-[#0066cc] text-white font-bold text-lg flex items-center justify-center transition-all hover:bg-[#0052a3] shadow-lg shadow-[#0066cc]/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0066cc]/30"
              >
                <span className="material-symbols-outlined mr-2">calendar_month</span>
                Agendar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gradient-to-t from-[#e6f2ff] to-white">
        <div className="mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="mb-3 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-bold text-[#0066cc] uppercase tracking-wide">Depoimentos</span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-text-heading">Famílias Satisfeitas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col rounded-3xl bg-white p-6 sm:p-8 shadow-soft border border-slate-100">
              <div className="flex text-yellow-400 mb-4">
                <span className="material-symbols-outlined fill-current">star</span>
                <span className="material-symbols-outlined fill-current">star</span>
                <span className="material-symbols-outlined fill-current">star</span>
                <span className="material-symbols-outlined fill-current">star</span>
                <span className="material-symbols-outlined fill-current">star</span>
              </div>
              <p className="text-text-muted text-lg mb-6 flex-grow">
                "O técnico foi muito educado, explicou tudo e deixou tudo limpinho. O ar ficou gelando como novo!"
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                <div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden">
                  <img
                    alt="Avatar"
                    className="h-full w-full object-cover"
                    src="/images/logo.png"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <p className="text-base font-bold text-text-heading">Carlos Silva</p>
                  <p className="text-sm text-text-muted">São Luís</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-3xl bg-white p-6 sm:p-8 shadow-soft border border-slate-100">
              <div className="flex text-yellow-400 mb-4">
                <span className="material-symbols-outlined fill-current">star</span>
                <span className="material-symbols-outlined fill-current">star</span>
                <span className="material-symbols-outlined fill-current">star</span>
                <span className="material-symbols-outlined fill-current">star</span>
                <span className="material-symbols-outlined fill-current">star</span>
              </div>
              <p className="text-text-muted text-lg mb-6 flex-grow">
                "Adorei o atendimento. Chegaram no horário combinado e resolveram o problema que outra empresa não conseguiu."
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                <div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden">
                  <img
                    alt="Avatar"
                    className="h-full w-full object-cover"
                    src="/images/logo.png"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <p className="text-base font-bold text-text-heading">Mariana Oliveira</p>
                  <p className="text-sm text-text-muted">São Luís</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-3xl bg-white p-6 sm:p-8 shadow-soft border border-slate-100">
              <div className="flex text-yellow-400 mb-4">
                <span className="material-symbols-outlined fill-current">star</span>
                <span className="material-symbols-outlined fill-current">star</span>
                <span className="material-symbols-outlined fill-current">star</span>
                <span className="material-symbols-outlined fill-current">star</span>
                <span className="material-symbols-outlined fill-current">star</span>
              </div>
              <p className="text-text-muted text-lg mb-6 flex-grow">
                "Recomendo de olhos fechados. Preço justo e serviço impecável. Minha casa está muito mais confortável."
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                <div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden">
                  <img
                    alt="Avatar"
                    className="h-full w-full object-cover"
                    src="/images/logo.png"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <p className="text-base font-bold text-text-heading">Ricardo Santos</p>
                  <p className="text-sm text-text-muted">São Luís</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white relative border-t border-slate-100" id="contato">
        <div className="mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[#0066cc] to-[#0052a3] p-6 sm:p-8 md:p-16 text-center shadow-xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6 relative z-10">
              Sua casa merece esse conforto
            </h2>
            <p className="mx-auto max-w-[600px] text-blue-50 text-lg sm:text-xl mb-10 font-medium relative z-10">
              Fale conosco agora mesmo. Respondemos rapidinho no WhatsApp para agendar sua visita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center relative z-10">
              <a
                href="https://wa.me/5598982106557"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 w-full sm:w-auto px-10 rounded-full bg-white text-[#0066cc] font-bold text-xl flex items-center justify-center transition-transform hover:scale-105 shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                <span className="material-symbols-outlined mr-3 text-3xl text-[#25D366]">chat</span>
                Falar no WhatsApp
              </a>
              <a
                href="tel:+5598982106557"
                className="h-16 w-full sm:w-auto px-10 rounded-full bg-black/10 border-2 border-white/30 text-white font-bold text-xl flex items-center justify-center hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                <span className="material-symbols-outlined mr-3">call</span>
                (98) 98210-6557
              </a>
            </div>
          </div>
        </div>
      </section>

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
