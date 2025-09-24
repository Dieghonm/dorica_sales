import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Produtos() {
  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        const module = await import(`../assets/Produtos/${id}.json`)
        setProducts(module.default || module)
      } catch (err) {
        setError('Erro ao carregar produtos')
        console.error('Erro ao carregar produtos:', err)
      } finally {
        setLoading(false)
      }
    }
    if (id) loadProducts()
  }, [id])

  const getImageUrl = (imgurLink) => {
    const id = imgurLink.split('/').pop()
    return `https://i.imgur.com/${id}.png`
  }

  if (loading) {
    return (
      <main className="main">
        <div className="container">
          <h2 className="section-title">Carregando produtos...</h2>
          <div className="products-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="product-card">
                <div className="product-image-container">
                  <div className="product-image skeleton" />
                </div>
                <div className="product-info">
                  <div className="product-name">Carregando...</div>
                  <div className="product-price">--</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="main">
        <div className="container">
          <h2 className="section-title">Erro</h2>
          <div className="text-center">
            <p>{error}</p>
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
              Voltar para Fábricas
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="main">
      <div className="container">
        <h2 className="section-title">
          {Object.keys(products).length} Produtos Disponíveis
        </h2>

        <div className="products-grid">
          {Object.entries(products).map(([key, produto]) => (
            <div key={key} className="product-card">
              <div className="product-image-container">
                <img
                  src={getImageUrl(produto.img)}
                  alt={produto.descricao}
                  className="product-image"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>

              <div className="product-info">
                <h3 className="product-name">{key.replace(/_/g, ' ')}</h3>
                <p className="product-price">{produto.valor}</p>

                {produto.descricao && (
                  <p className="product-description">{produto.descricao}</p>
                )}

                {produto.tamanho && (
                  <p className="product-size">
                    <strong>Tamanho:</strong> {produto.tamanho}
                  </p>
                )}

                {produto.minimo && (
                  <p className="product-minimo">
                    <strong>Mínimo:</strong> {produto.minimo} un.
                  </p>
                )}

                <button className="product-btn">Adicionar ao carrinho</button>
              </div>
            </div>
          ))}
        </div>

        {Object.keys(products).length === 0 && (
          <div className="text-center">
            <p>Nenhum produto encontrado.</p>
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
              Voltar para Fábricas
            </button>
          </div>
        )}
      </div>
    </main>
  )
}

export default Produtos

