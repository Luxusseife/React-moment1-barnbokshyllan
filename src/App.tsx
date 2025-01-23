// Importerar child-komponenter samt CSS för huvudfilen.
import Header from './components/Header'
import BookCard from './components/BookCard'
import Footer from './components/Footer'
import './App.css'

// Central komponenten som returnerar renderade komponenter. 
function App() {

  // Props för webbplats-namn. Skickas till header-komponenten.
  const appname = "BARNBOKSHYLLAN"
  
  return (
    <>
    <Header webtitle={appname} />
    <BookCard/>
    <Footer />
    </>
  )
}

// Exporterar den centrala komponenten.
export default App
