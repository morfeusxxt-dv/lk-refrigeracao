import { Link } from "react-router-dom";

export default function Manutencao() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto w-full max-w-[110rem] px-4 sm:px-6 lg:px-8">
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
          <div className="p-8 md:p-10">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-[#0066cc]">
              Serviço
            </span>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-heading">
              Manutenção
            </h1>
            <p className="mt-4 text-text-muted text-base sm:text-lg leading-relaxed">
              Explique aqui como funciona o diagnóstico, manutenção preventiva/corretiva, troca de peças e cuidados com limpeza.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-100 overflow-hidden">
                <div className="aspect-[16/9] bg-sky-100">
                  <img
                    src="/images/preventiva.png"
                    alt="Exemplo de manutenção"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <p className="text-text-muted">Adicione aqui a descrição da foto 1.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-100 overflow-hidden">
                <div className="aspect-[16/9] bg-sky-100">
                  <img
                    src="/images/ambiente-agradavel.png"
                    alt="Exemplo de manutenção"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <p className="text-text-muted">Adicione aqui a descrição da foto 2.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5598982106557"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 px-8 rounded-full bg-[#25D366] text-white font-bold text-lg flex items-center justify-center transition-transform hover:scale-105 shadow-md shadow-green-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
              >
                <span className="material-symbols-outlined mr-2">chat</span>
                Pedir orçamento no WhatsApp
              </a>
              <Link
                to="/#contato"
                className="h-14 px-8 rounded-full bg-white border-2 border-sky-100 hover:border-[#0066cc] hover:text-[#0066cc] text-text-muted font-bold flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0066cc]/20"
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
