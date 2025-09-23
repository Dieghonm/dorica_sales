import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './styles/Global.css'
import './styles/APP.css'

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}