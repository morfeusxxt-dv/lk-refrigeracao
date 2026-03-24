import { Link } from "react-router-dom";

export default function PoliticaDePrivacidade() {
  return (
    <div className="py-12 md:py-16 bg-[#f8fafc]">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-text-muted mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#0066cc] transition-colors">Início</Link>
          <span className="material-symbols-outlined text-base">chevron_right</span>
          <span className="text-text-heading font-semibold">Política de Privacidade</span>
        </nav>

        <div className="rounded-[2rem] bg-white border border-slate-100 shadow-soft p-6 sm:p-8 md:p-12 prose prose-slate max-w-none">
          <h1 className="font-display text-3xl font-bold text-text-heading mb-2">Política de Privacidade</h1>
          <p className="text-sm text-text-muted mb-8">Última atualização: março de 2026</p>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-text-heading mb-3">1. Quem somos</h2>
            <p className="text-text-muted leading-relaxed">
              A <strong>LK Refrigeração</strong> é uma empresa especializada em instalação, manutenção e limpeza profunda de
              ar-condicionado, atuante em São Luís – MA. Nosso site é <strong>lkrefrigeracao.com</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-text-heading mb-3">2. Dados coletados</h2>
            <p className="text-text-muted leading-relaxed mb-3">
              Coletamos os seguintes dados quando você utiliza nosso site:
            </p>
            <ul className="space-y-2 text-text-muted">
              <li><strong>Dados de navegação:</strong> endereço IP, páginas visitadas, tempo de permanência e origem do acesso, via Google Analytics (gtag.js).</li>
              <li><strong>Dados do formulário de contato:</strong> nome, serviço desejado e bairro, inseridos voluntariamente pelo usuário ao enviar mensagem pelo WhatsApp.</li>
              <li><strong>Cookies de sessão:</strong> usados para medir desempenho e tráfego do site.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-text-heading mb-3">3. Finalidade do uso</h2>
            <ul className="space-y-2 text-text-muted">
              <li>Analisar o desempenho e tráfego do site para melhorar a experiência do usuário.</li>
              <li>Veicular anúncios relevantes via Google Ads.</li>
              <li>Responder solicitações de orçamento e agendamento enviadas pelo formulário.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-text-heading mb-3">4. Compartilhamento de dados</h2>
            <p className="text-text-muted leading-relaxed">
              Não vendemos nem compartilhamos seus dados pessoais com terceiros, exceto com o Google (Analytics e Ads), conforme os{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#0066cc] underline">
                termos de privacidade do Google
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-text-heading mb-3">5. Cookies</h2>
            <p className="text-text-muted leading-relaxed">
              Utilizamos cookies de mensuração de audiência (Google Analytics). Você pode desabilitar cookies nas configurações do seu
              navegador a qualquer momento, mas algumas funcionalidades do site podem ser afetadas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold text-text-heading mb-3">6. Seus direitos (LGPD)</h2>
            <p className="text-text-muted leading-relaxed mb-3">
              De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito de:
            </p>
            <ul className="space-y-2 text-text-muted">
              <li>Confirmar a existência de tratamento dos seus dados.</li>
              <li>Acessar, corrigir ou excluir seus dados pessoais.</li>
              <li>Revogar o consentimento a qualquer momento.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-text-heading mb-3">7. Contato</h2>
            <p className="text-text-muted leading-relaxed">
              Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato:
              <br />
              📧 <a href="mailto:contato@lkrefrigeracao.com" className="text-[#0066cc] underline">contato@lkrefrigeracao.com</a>
              <br />
              📱 <a href="https://wa.me/5598982106557" className="text-[#0066cc] underline">(98) 98210-6557</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
