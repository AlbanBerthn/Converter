// == Import: npm
// == Import: local
import './header.scss'

// == Composant
function Header () {
  return(
    <header className='header'>
      <h1 className='header-title'>Convertisseur</h1>
      <p className='header-amount'>1 euro</p>
    </header>
  );
}
// == Export
export default Header;