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
    <h2 className="booktitle">{title}</h2>
    <p>Författare: {author}</p>
    <p>Illustratör: {illustrator}</p>
    <p>Förlag: {publisher}</p>
    <p>Utgivningsår: {publicationYear}</p>
    <p>Läst: {read}</p>
  </section>
)
}

// Exporterar komponenten.
export default Book