import '../styles/componentes/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-contact">
            <h4>Contato</h4>
            <p>Email: contato@doricasales.com</p>
            <p>WhatsApp: (21) 99999-9999</p>
          </div>
          
          <div className="footer-social">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">WhatsApp</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Dórica Sales. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}