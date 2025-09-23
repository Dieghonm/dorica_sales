export default function Main() {
  // Função para converter link do Imgur para imagem direta
  const getImageUrl = (imgurLink) => {
    const id = imgurLink.split('/').pop();
    return `https://i.imgur.com/${id}.png`;
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {Object.entries(produtos).map(([key, produto]) => (
        <div key={key} style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '15px',
          width: '200px',
          textAlign: 'center',
          backgroundColor: '#f9f9f9'
        }}>
          <img 
            src={getImageUrl(produto.img)} 
            alt={produto.nome}
            style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
          />
          <h3 style={{ margin: '10px 0 5px 0', color: '#333' }}>
            {produto.nome}
          </h3>
          <p style={{ margin: '0', fontSize: '18px', fontWeight: 'bold', color: '#007bff' }}>
            {produto.minimo}
          </p>
        </div>
      ))}
    </div>
  )
}