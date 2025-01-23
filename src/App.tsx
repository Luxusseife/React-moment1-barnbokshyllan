import Header from './components/Header'
import BookCard from './components/BookCard'
import Footer from './components/Footer'
import './App.css'

function App() {

  const bookArray = [
    {
      title: "Vem spökar, Alfons Åberg?",
      author: "Gunilla Bergström",
      illustrator: "Gunilla Bergström",
      publisher: "Rabén & Sjögren",
      publicationYear: 1983,
      read: false
    },
    {
      title: "Apor bananer storm och orkaner",
      author: "Grethe Rollböll",
      illustrator: "Anna-Karin Garhamn",
      publisher: "Rabén & Sjögren",
      publicationYear: 2021,
      read: true
    },
    {
      title: "Hästfesten",
      author: "Grethe Rottböll",
      illustrator: "Lisen Adbåge",
      publisher: "Rabén & Sjögren",
      publicationYear: 2013,
      read: true
    },
  ]
  
  return (
    <>
    <Header />
    <BookCard />
    <Footer />
    </>
  )
}

export default App
