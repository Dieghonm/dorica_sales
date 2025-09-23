import fabricasData from '../assets/fabricas.json';

export default function Main() {
  const getImageUrl = (imgurLink) => {
    const id = imgurLink.split('/').pop();
    return `https://i.imgur.com/${id}.png`;
  };

  return (
    <main className="main">
      <div className="container">
        
        <div className="products-grid">
          {Object.entries(fabricasData).map(([key, produto]) => (
            <div key={key} className="product-card">
              <div className="product-image-container">
                <img 
                  src={getImageUrl(produto.img)} 
                  alt={produto.nome}
                  className="product-image"
                />
              </div>
              
              <div className="product-info">
                <h3 className="product-name">
                  {produto.nome}
                </h3>
                <p className="product-price">
                  Mínimo: {produto.minimo}
                </p>
                <button className="product-btn">
                  Ver Produtos
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}