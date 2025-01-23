// Importerar CSS för komponenten samt bild från src/assets.
import '../Header.css'
import bannerImg from '../assets/banner.webp';

// Komponenten tar emot webtitel som props. Specificerar typ som string.
function Header({ webtitle }: { webtitle: string }) {
  // Returnerar webtitel som en h1, en div-container och en importerad bannerbild.
  return (
    <>
      <h1>{webtitle}</h1>
      <div className="banner-container">
        <img src={bannerImg} alt="bokstäver i färgglada färger" />
      </div>
    </>
  )
}

// Exporterar komponenten.
export default Header
