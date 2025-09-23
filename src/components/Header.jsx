import '../styles/componentes/Header.css'

export default function Header({ onBack, currentView, factoryName }) {
  const getTitle = () => {
    if (currentView === 'products' && factoryName) {
      const factoryNames = {
        bonecos: 'Bonecos Colecionáveis',
        canecas: 'Canecas Personalizadas', 
        pelucias: 'Pelúcias Fofas'
      }
      return factoryNames[factoryName] || 'Produtos'
    }
    return 'Dórica Sales'
  }

  const getSubtitle = () => {
    if (currentView === 'products') {
      return 'Confira nossa seleção de produtos'
    }
    return 'Sua loja de produtos personalizados'
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div>
            <h1 className="logo" onClick={onBack}>
              {getTitle()}
            </h1>
            <p className="subtitle">{getSubtitle()}</p>
          </div>
          
          {onBack && (
            <button 
              className="nav-button"
              onClick={onBack}
              aria-label="Voltar para fábricas"
            >
              ← Voltar
            </button>
          )}
        </div>
      </div>
    </header>
  )
}