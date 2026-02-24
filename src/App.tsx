import { useState } from "react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-text-main font-body antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <a href="#inicio" className="flex items-center">
              <img alt="LK Refrigeração" className="h-12 w-auto" src="/images/logo.png" />
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-base font-semibold text-text-muted hover:text-[#0066cc] transition-colors" href="#inicio">Início</a>
              <a className="text-base font-semibold text-text-muted hover:text-[#0066cc] transition-colors" href="#servicos">Serviços</a>
              <a className="text-base font-semibold text-text-muted hover:text-[#0066cc] transition-colors" href="#galeria">Galeria</a>
              <a className="text-base font-semibold text-text-muted hover:text-[#0066cc] transition-colors" href="#areas">Áreas</a>
              <a className="text-base font-semibold text-text-muted hover:text-[#0066cc] transition-colors" href="#contato">Contato</a>
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <a href="https://wa.me/5598982106557" target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center rounded-full bg-[#25D366] px-6 text-base font-bold text-white transition-transform hover:scale-105 shadow-md shadow-green-200">
                <span className="material-symbols-outlined mr-2">chat</span>
                WhatsApp
              </a>
            </div>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-text-main hover:bg-slate-200"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              <span className="material-symbols-outlined">{mobileMenuOpen ? "close" : "menu"}</span>
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden pb-4">
              <div className="flex flex-col gap-2 rounded-2xl bg-white p-3 border border-slate-100 shadow-sm">
                <a className="rounded-xl px-4 py-3 font-bold text-text-heading hover:bg-slate-50" href="#inicio" onClick={() => setMobileMenuOpen(false)}>Início</a>
                <a className="rounded-xl px-4 py-3 font-bold text-text-heading hover:bg-slate-50" href="#servicos" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
                <a className="rounded-xl px-4 py-3 font-bold text-text-heading hover:bg-slate-50" href="#galeria" onClick={() => setMobileMenuOpen(false)}>Galeria</a>
                <a className="rounded-xl px-4 py-3 font-bold text-text-heading hover:bg-slate-50" href="#areas" onClick={() => setMobileMenuOpen(false)}>Áreas</a>
                <a className="rounded-xl px-4 py-3 font-bold text-text-heading hover:bg-slate-50" href="#contato" onClick={() => setMobileMenuOpen(false)}>Contato</a>
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
        <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white to-[#e6f2ff]" id="inicio">
          <div className="relative mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex w-full flex-col justify-center space-y-8 max-w-3xl">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full border border-sky-100 bg-white px-4 py-1.5 text-sm font-bold text-[#0066cc] shadow-sm">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                    Atendimento rápido em São Luís
                  </div>
                  <h1 className="font-display text-4xl font-bold tracking-tight text-text-heading sm:text-5xl xl:text-6xl leading-[1.1]">
                    <span className="inline-flex flex-row flex-wrap items-center justify-center gap-x-5 gap-y-3 lg:justify-start">
                      <img alt="LK Refrigeração" className="h-16 w-auto sm:h-20 md:h-24 shrink-0 object-contain" src="/images/logo.png" />
                      <span className="text-balance">Conforto e frescor para o seu lar</span>
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-text-muted text-lg md:text-xl leading-relaxed font-medium">
                    Deixe sua casa na temperatura ideal. Técnicos de confiança para instalação e manutenção do seu ar-condicionado, com carinho e eficiência.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a href="#contato" className="h-14 px-8 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-lg flex items-center justify-center transition-all shadow-lg shadow-[#0066cc]/20 hover:shadow-[#0066cc]/30">
                    <span className="material-symbols-outlined mr-2">calendar_month</span>
                    Agendar Visita
                  </a>
                  <a href="#servicos" className="h-14 px-8 rounded-full border-2 border-sky-100 bg-white hover:border-[#0066cc] hover:text-[#0066cc] text-text-muted font-bold flex items-center justify-center transition-colors">
                    Conhecer Serviços
                  </a>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-text-muted pt-4">
                  <div className="flex -space-x-3">
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                      <img alt="User" className="object-cover h-full w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfrxwo10QJM7oUm84_tCJlcGpH7yh1FPcZ1f7CZRODBXCJDWHYJ3tAaWYY4L3szuehFTX3V1EsNR5EPopS16G9RuVr3ZrFOJ-ZVIVtpLFgtaewsRc8K5JIfto2BUSCrLB4YOvb_hzZwgXZ94e27W-t5otoB56ivDuBCWurOmBcJJsr_tWhLbfae5ZIT_3YRRFHed55xPgz-mT0-YP2HNsYUcGxwg1i8s9A0bb87R8Gxnp-P29kt7xNasxdoixZKKjQX2a29bqQUQ" referrerPolicy="no-referrer" />
                    </div>
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                      <img alt="User" className="object-cover h-full w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfAoiP-33zve4NVg0bKzJTM777fEQA8GjXoE2tXkFZFgUnJ7n0PfOueyeswtMYwZpxu1X-RqDVDKG3aHBEqTg_bmfsrwVvl97Kxl_MtMi8cOLLZsjPOap_QaiuKo_ae47QoSGV6idgHsllUjxRV5rDPqd85-YzvKlJjjuh6nsL1upvfBFWadCI4sf1hMXM2egPu0nwlnfhXwNPH_9MlQJ04x8z4aPL24KaBJs4IRwVuPeJw9USwQUWU9a0JWW6VkAwJNKphdInZA" referrerPolicy="no-referrer" />
                    </div>
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                      <img alt="User" className="object-cover h-full w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1-AbM65UjIURRfAtMDOia9O_LozOO524GiEHKyYavOdashcyZYcyIg7NWaF9RUKThC5tbmVFRrftHfakI3nJVHJgQL8ZusKRzT9zhNZKAqsq1x5OLvMDE48WsFuCEhVLG9sAFNN3wT86x22NySQOgp6DIBtjNV9nLk3jT9qKcW-D_o-ajlcdnjHuJVwBRkj7E8lVVyjZpz6PlzHLRKCP76_LK3Y-Bx7zVPlPwqnWvxEdc6orKiWFWoJVuVS7Iyji7coikBsMXqg" referrerPolicy="no-referrer" />
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
          </div>
        </section>
        <section className="bg-white py-10 border-y border-slate-100">
          <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
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
        <section className="py-16 md:py-24 bg-[#e6f2ff]" id="servicos">
          <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center lg:items-start lg:text-left mb-16">
              <span className="text-[#0066cc] font-bold tracking-wider uppercase text-sm bg-blue-100 px-3 py-1 rounded-full">O que fazemos</span>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-text-heading">Cuidamos do seu conforto</h2>
              <p className="max-w-[700px] text-text-muted md:text-lg">
                Soluções completas para você não se preocupar com o calor. Tudo feito com limpeza e organização.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 border border-slate-100">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0066cc] group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-4xl">handyman</span>
                </div>
                <h3 className="mb-3 text-2xl font-display font-bold text-text-heading">Instalação</h3>
                <p className="text-text-muted leading-relaxed mb-4">
                  Instalamos seu aparelho novo com todo cuidado, sem sujeira e no local ideal para refrescar sua casa inteira.
                </p>
                <a className="inline-flex items-center font-bold text-[#0066cc] hover:text-[#0052a3]" href="/servicos/instalacao.html" target="_blank" rel="noopener noreferrer">
                  Saiba mais <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </a>
              </div>
              <div className="group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 border border-slate-100">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0066cc] group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-4xl">build_circle</span>
                </div>
                <h3 className="mb-3 text-2xl font-display font-bold text-text-heading">Manutenção</h3>
                <p className="text-text-muted leading-relaxed mb-4">
                  Seu ar parou de gelar? Fazemos o conserto rápido para devolver o conforto da sua família.
                </p>
                <a className="inline-flex items-center font-bold text-[#0066cc] hover:text-[#0052a3]" href="/servicos/manutencao.html" target="_blank" rel="noopener noreferrer">
                  Saiba mais <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </a>
              </div>
              <div className="group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 border border-slate-100">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0066cc] group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-4xl">cleaning_services</span>
                </div>
                <h3 className="mb-3 text-2xl font-display font-bold text-text-heading">Limpeza Profunda</h3>
                <p className="text-text-muted leading-relaxed mb-4">
                  Removemos fungos e bactérias para proteger a saúde respiratória de quem você ama. Ar puro de verdade.
                </p>
                <a className="inline-flex items-center font-bold text-[#0066cc] hover:text-[#0052a3]" href="/servicos/limpeza-profunda.html" target="_blank" rel="noopener noreferrer">
                  Saiba mais <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Galeria de Imagens */}
        <section className="py-16 md:py-24 bg-white" id="galeria">
          <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center lg:items-start lg:text-left mb-16">
              <span className="text-[#0066cc] font-bold tracking-wider uppercase text-sm bg-blue-100 px-3 py-1 rounded-full">Nosso Trabalho</span>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-text-heading">Instalação e Manutenção</h2>
              <p className="max-w-[700px] text-text-muted md:text-lg">
                Confira alguns dos nossos serviços realizados com qualidade e profissionalismo.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              <div className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden">
                  <img alt="Ambiente super agradável com ar condicionado" className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110" src="/images/ambiente-agradavel.png" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-bold text-lg">Ambiente Super Agradável</p>
                    <p className="text-blue-100 text-sm">Conforto e bem-estar</p>
                  </div>
                </div>
              </div>
              <div className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden">
                  <img alt="Instalação de ar condicionado split" className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110" src="/images/instalacao-split.png" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-bold text-lg">Instalação Split</p>
                    <p className="text-blue-100 text-sm">Instalação profissional</p>
                  </div>
                </div>
              </div>
              <div className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden">
                  <img alt="Manutenção preventiva de ar condicionado" className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110" src="/images/preventiva.png" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-bold text-lg">Preventiva</p>
                    <p className="text-blue-100 text-sm">Manutenção preventiva</p>
                  </div>
                </div>
              </div>
              <div className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden">
                  <img alt="Limpeza profunda de ar condicionado" className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110" src="/images/limpeza-profunda.png" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-bold text-lg">Limpeza Profunda</p>
                    <p className="text-blue-100 text-sm">Higienização completa</p>
                  </div>
                </div>
              </div>
              <div className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden">
                  <img alt="Unidade externa de ar condicionado" className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110" src="/images/unidade-externa.png" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-bold text-lg">Unidade Externa</p>
                    <p className="text-blue-100 text-sm">Instalação e manutenção</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-[#e6f2ff] relative overflow-hidden" id="areas">
          <div className="relative mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative h-[320px] sm:h-[400px] lg:h-[450px] w-full overflow-hidden rounded-[2.5rem] shadow-xl border-4 border-white">
                <img alt="Técnico sorrindo em atendimento" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2MiWjgGFxDdRIZDqGMqTHAae6La2gy2DsMJ-P6nEs-F3-mMMTGpvtxn-1VOf4wBZYStCdgZpBwKnVGy6pJee3EKGiiGcEmx9phs2wSorKwtSG9e7bZgkv9Db3jH0ylqUusDVZv2upQsjGhK_onI8xTvdgPR32ILvGMzGX-76yFT6iqlnTXLSol3zIO_xSdKyUdCiYKvLFAs264UBb31tFwhqesjwG-Cb36Jg7pTdmulf_SAzbBpcXQIFgSRsYBqAWAYrsX-puHA" referrerPolicy="no-referrer" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg">
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
                  <p className="text-text-muted text-lg">
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
                <a href="https://wa.me/5598982106557" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto h-14 px-8 rounded-full bg-[#0066cc] text-white font-bold text-lg flex items-center justify-center transition-all hover:bg-[#0052a3] shadow-lg shadow-[#0066cc]/20">
                  <span className="material-symbols-outlined mr-2">calendar_month</span>
                  Agendar Agora
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-gradient-to-t from-[#e6f2ff] to-white">
          <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col items-center text-center">
              <span className="mb-3 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-bold text-[#0066cc] uppercase tracking-wide">Depoimentos</span>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-text-heading">Famílias Satisfeitas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col rounded-3xl bg-white p-8 shadow-soft border border-slate-100">
                <div className="flex text-yellow-400 mb-4">
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                </div>
                <p className="text-text-muted text-lg mb-6 flex-grow">"O técnico foi muito educado, explicou tudo e deixou tudo limpinho. O ar ficou gelando como novo!"</p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                  <div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden">
                    <img alt="Avatar" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpboHXwJvvEJLPogWMIU_7nesL6V25_Tw3l7bWjZdY0lljxObslInT5AFhgYmULDfFIafA90hFCEVMi_9NNBsIglcJlb9WQnLQafh0hG3JHonkVs14KfN5rAvO4oTUA-xwhucdHFa6CtyfwQEQoMVeU2ZEzNAngbBqkQexdzTzdOpu0CRJfKdVWsBVORL3rQ2kLhuqe-7OKez9kjEz895blL-BjSvnyNsXzZ7sk79CoTQCcKrcRstVLdF9t1OEcasNapH1qVmZJw" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-text-heading">Carlos Silva</p>
                    <p className="text-sm text-text-muted">São Luís</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-3xl bg-white p-8 shadow-soft border border-slate-100">
                <div className="flex text-yellow-400 mb-4">
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                </div>
                <p className="text-text-muted text-lg mb-6 flex-grow">"Adorei o atendimento. Chegaram no horário combinado e resolveram o problema que outra empresa não conseguiu."</p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                  <div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden">
                    <img alt="Avatar" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDdkWH8bRgLc0b5b8v2glzU4AlNtO5Bsy8JrNMshzEGm2rNrSvudsfp3bNnn0tKGEaMLEfgbfYsu9WpyUXyPGjEOJQfrImeGxH71QV_iag-Fg3cEFE2puwEJQ1N_PhBAoyYG_jbXlxBHObfg9rVBt88W4iUR7JdNXo7mLNCRPBq1UfYYo5rLl8j_uxgwBKQLO9K-m-cnV_MDZNhksTNwoKBaRtd3r_p7TrmIW0TDOMxQFpXPupmGbfQ603pXtLyboDAB2Uf-nUBw" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-text-heading">Mariana Oliveira</p>
                    <p className="text-sm text-text-muted">São Luís</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-3xl bg-white p-8 shadow-soft border border-slate-100">
                <div className="flex text-yellow-400 mb-4">
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                </div>
                <p className="text-text-muted text-lg mb-6 flex-grow">"Recomendo de olhos fechados. Preço justo e serviço impecável. Minha casa está muito mais confortável."</p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                  <div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden">
                    <img alt="Avatar" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHm8hNqgBKrGDnojyQuZLCV-0FyP1LSP6mn4TbKTzoC-E6kvY8FRTgV9vZzxHj7xXbIFw7wqEuh8b0DG2_9qH9Q7dMs3iKnfVdqdYLkGiGB2Q7fU_ivmiIBv3ix6_16gfoxF7EL5yHdt4CcVXGNG44BXtIOZ8w_rv-z5OkxUA5_76tto5HXFMLW3RHqbKbZl9uCVK2wQw5JWjVZ2Z9tH4GFjts3dQ_f4jhSt79wfj17mjpJR9hhHGm4bBn4JyKiMcVxbQu9-QHEg" referrerPolicy="no-referrer" />
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
        <section className="py-16 bg-white relative border-t border-slate-100" id="contato">
          <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="rounded-[2.5rem] bg-gradient-to-br from-[#0066cc] to-[#0052a3] p-8 md:p-16 text-center shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6 relative z-10">Sua casa merece esse conforto</h2>
              <p className="mx-auto max-w-[600px] text-blue-50 text-lg sm:text-xl mb-10 font-medium relative z-10">
                Fale conosco agora mesmo. Respondemos rapidinho no WhatsApp para agendar sua visita.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                <a href="https://wa.me/5598982106557" target="_blank" rel="noopener noreferrer" className="h-16 px-10 rounded-full bg-white text-[#0066cc] font-bold text-xl flex items-center justify-center transition-transform hover:scale-105 shadow-lg">
                  <span className="material-symbols-outlined mr-3 text-3xl text-[#25D366]">chat</span>
                  Falar no WhatsApp
                </a>
                <a href="tel:+5598982106557" className="h-16 px-10 rounded-full bg-black/10 border-2 border-white/30 text-white font-bold text-xl flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined mr-3">call</span>
                  (98) 98210-6557
                </a>
              </div>
            </div>
            <footer className="mt-20 border-t border-slate-100 pt-12">
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
                    <li><a className="hover:text-[#0066cc] transition-colors hover:translate-x-1 inline-block" href="#servicos">Instalação</a></li>
                    <li><a className="hover:text-[#0066cc] transition-colors hover:translate-x-1 inline-block" href="#servicos">Manutenção</a></li>
                    <li><a className="hover:text-[#0066cc] transition-colors hover:translate-x-1 inline-block" href="#servicos">Limpeza</a></li>
                    <li><a className="hover:text-[#0066cc] transition-colors hover:translate-x-1 inline-block" href="#contato">Contratos</a></li>
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
                    <a className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-text-muted hover:bg-[#0066cc] hover:text-white transition-all duration-300" href="https://wa.me/5598982106557" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg>
                    </a>
                    <a className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-text-muted hover:bg-[#0066cc] hover:text-white transition-all duration-300" href="https://wa.me/5598982106557" target="_blank" rel="noopener noreferrer">
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363.416 2.427-.465 1.067-.047 1.407-.06 3.808-.06zm0 1.838a2.536 2.536 0 00-2.529 2.536v.005c0 1.396 1.134 2.529 2.53 2.529a2.536 2.536 0 002.529-2.53v-.005a2.536 2.536 0 00-2.53-2.529zm4.333-.312a1.507 1.507 0 10-1.507 1.507 1.507 1.507 0 001.507-1.507z" fillRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-12 border-t border-slate-100 pt-8 text-center text-sm text-text-muted">
                © 2026 LK Refrigeração. Feito com carinho para você.
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
