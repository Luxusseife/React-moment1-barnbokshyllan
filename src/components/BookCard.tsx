interface BookInfo {
  title: string,
  author: string,
  illustrator: string,
  publisher: string,
  publicationYear: number,
  read: boolean
}

function Book({title, author, illustrator, publisher, publicationYear, read} : BookInfo) {
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

export default Book