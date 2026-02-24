import { Link } from "react-router-dom";

export default function Instalacao() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto w-full max-w-[110rem] 2xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="mb-6">
          <Link
            to="/#servicos"
            className="inline-flex items-center font-bold text-[#0066cc] hover:text-[#0052a3] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0066cc]/20 rounded"
          >
            <span className="material-symbols-outlined mr-1 text-base">arrow_back</span>
            Voltar
          </Link>
        </div>

        <div className="rounded-[2rem] bg-white border border-slate-100 shadow-soft overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-[#0066cc]">
              Serviço
            </span>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-heading">
              Instalação
            </h1>
            <div className="mt-8 grid gap-8 lg:grid-cols-5 lg:items-center">
              <div className="lg:col-span-3">
                <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                  Realizamos a instalação completa do seu ar-condicionado com avaliação do melhor ponto para conforto, boa
                  circulação de ar e acabamento limpo. A equipe organiza o ambiente, protege paredes e móveis e finaliza
                  com testes para garantir o funcionamento correto e seguro.
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm">
                  <img
                    src="/images/farda1.jpeg"
                    alt="Instalação de ar-condicionado"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5598982106557"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-full sm:w-auto px-8 rounded-full bg-[#25D366] text-white font-bold text-lg flex items-center justify-center transition-transform hover:scale-105 shadow-md shadow-green-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
              >
                <span className="material-symbols-outlined mr-2">chat</span>
                Pedir orçamento no WhatsApp
              </a>
              <Link
                to="/#contato"
                className="h-14 w-full sm:w-auto px-8 rounded-full bg-white border-2 border-sky-100 hover:border-[#0066cc] hover:text-[#0066cc] text-text-muted font-bold flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0066cc]/20"
              >
                Ir para contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
