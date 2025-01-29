// Importerar CSS för komponenten.
import '../Footer.css'

// Komponenten returnerar en div-container innehållandes en <p>-tagg med brödtext.
function Footer() {  
  return (
    <div className="footer">
      <p>Bannerbild hämtad från <a href="https://pixabay.com/sv/">Pixabay</a> | &copy; Jenny Lind 2025</p>
    </div>
  )
}

// Exporterar komponenten.
export default Footer
