import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import './styles/Global.css'
import './styles/APP.css'

export default function App() {
  const [currentView, setCurrentView] = useState('factories')
  const [selectedFactory, setSelectedFactory] = useState(null)

  const handleFactorySelect = (factoryKey) => {
    setSelectedFactory(factoryKey)
    setCurrentView('products')
  }

  const handleBackToFactories = () => {
    setCurrentView('factories')
    setSelectedFactory(null)
  }

  return (
    <div className="app-container">
      <Header 
        onBack={currentView === 'products' ? handleBackToFactories : null}
        currentView={currentView}
        factoryName={selectedFactory}
      />
      
      {currentView === 'factories' ? (
        <Main onFactorySelect={handleFactorySelect} />
      ) : (
        <ProductList 
          factoryKey={selectedFactory} 
          onBack={handleBackToFactories}
        />
      )}
      
      <Footer />
    </div>
  )
}