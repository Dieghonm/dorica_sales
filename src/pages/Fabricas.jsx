// src/pages/Fabricas.jsx
import { useNavigate } from "react-router-dom";
import fabricasData from "../assets/fabricas.json";

function Fabricas() {
  const navigate = useNavigate();

  const getImageUrl = (imgurLink) => {
    const id = imgurLink.split("/").pop();
    return `https://i.imgur.com/${id}.png`;
  };

  return (
    <main className="main">
      <div className="container">
        <h2 className="section-title">Nossas Fábricas</h2>

        <div className="products-grid">
          {Object.entries(fabricasData).map(([key, fabrica]) => (
            <div key={key} className="product-card">
              <div className="product-image-container">
                <img
                  src={getImageUrl(fabrica.img)}
                  alt={fabrica.nome}
                  className="product-image"
                />
              </div>

              <div className="product-info">
                <h3 className="product-name">{fabrica.nome}</h3>
                <p className="product-price">Pedido mínimo: {fabrica.minimo}</p>
                <button
                  className="product-btn"
                  onClick={() => navigate(`/produtos/${key}`)}
                >
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

export default Fabricas;
