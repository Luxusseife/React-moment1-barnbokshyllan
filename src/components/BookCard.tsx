// Importerar CSS för komponenten.
import '../BookCard.css'

// Interface som definerar props för bok-objekt.
interface BookInfo {
  title: string,
  author: string,
  illustrator: string,
  publisher: string,
  publicationYear: number,
  read: boolean
}

// Komponenten tar emot props. Specificerar typerna enligt interfacet.
function Book({title, author, illustrator, publisher, publicationYear, read} : BookInfo) {
  // Returnerar en sektion, ett "kort" innehållandes bokinformation.
return (
  <section className="bookcard">
    <h2>{title}</h2>
    <p><strong>Författare:</strong> {author}</p>
    <p><strong>Illustratör:</strong> {illustrator}</p>
    <p><strong>Förlag:</strong> {publisher}</p>
    <p><strong>Utgivningsår:</strong> {publicationYear}</p>
    <p><strong>Läst:</strong> {read ? "Ja" : "Nej"}</p>
  </section>
)
}

// Exporterar komponenten.
export default Book