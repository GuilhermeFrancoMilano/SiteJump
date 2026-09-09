import { Wordmark } from "@/components/ui/Wordmark";

const footerLinks = [
  ["Pacotes", "#pacotes"],
  ["Projetos", "#projetos"],
  ["Método", "#metodo"],
  ["Contato", "#contato"],
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner shell">
        <div className="footer__brand">
          <a href="#inicio" aria-label="Voltar ao início">
            <Wordmark />
          </a>
          <p>Estratégia que move.<br />Performance que escala.</p>
        </div>

        <nav aria-label="Navegação do rodapé">
          {footerLinks.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <div className="footer__system">
          <span>DATA</span>
          <span>ESTRATÉGIA</span>
          <span>OTIMIZAÇÃO</span>
        </div>

        <div className="footer__signal" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>

        <div className="footer__legal">
          <span>© {new Date().getFullYear()} Jump Performance.</span>
          <span>Todos os direitos reservados.</span>
          <span>DATA SIGNAL / END</span>
        </div>
      </div>
    </footer>
  );
}
