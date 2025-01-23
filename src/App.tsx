// Importerar child-komponenter samt CSS för huvudfilen.
import Header from './components/Header'
import BookCard from './components/BookCard'
import Footer from './components/Footer'
import './App.css'

// Central komponenten som returnerar renderade komponenter. 
function App() {

  // Props för webbplats-namn. Skickas till header-komponenten.
  const appname = "BARNBOKSHYLLAN"

  // Array med bok-objekt.
  const booksArray = [
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
    {
      title: "Viktor Rydbergs Tomten",
      author: "Viktor Rydberg",
      illustrator: "Ingrid Elf",
      publisher: "Tukan Förlag",
      publicationYear: 2014,
      read: false
    },
    {
      title: "Pelles ficklampa",
      author: "Jan Lööf",
      illustrator: "Jan Lööf",
      publisher: "Bonnier Carlsen",
      publicationYear: 1978,
      read: true
    },
    {
      title: "När dinosaurierna kom tillbaka",
      author: "David Henson",
      illustrator: "David Henson",
      publisher: "Opal",
      publicationYear: 2024,
      read: true
    },
  ]

  // Komponenten returnerar ett React-fragment som innehåller komponenterna för header, footer och BookCard.
  // BookCard-komponenten renderas inom li-element. De skapas dynamiskt från arrayen booksArray.
  return (
    <>
      <Header webtitle={appname} />

      <ul
        style={{
          listStyle: "none"
        }}
      >
        {booksArray.map((book, index) => (
          <li
            key={index}
            style={{
              margin: "3rem 0"
            }}
          >
            <BookCard
              title={book.title}
              author={book.author}
              illustrator={book.illustrator}
              publisher={book.publisher}
              publicationYear={book.publicationYear}
              read={book.read}
            />
          </li>
        ))}
      </ul>

      <Footer />
    </>
  )
}

// Exporterar den centrala komponenten.
export default App
