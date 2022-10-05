// == Import: npm
import PropTypes from 'prop-types';
// == Import: local
import './header.scss'

// == Composant
function Header ({ baseAmount }) {
  return(
    <header className='header'>
      <h1 className='header-title'>Convertisseur</h1>
      <p className='header-amount'>{baseAmount} euro</p>
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};

// == Export
export default Header;