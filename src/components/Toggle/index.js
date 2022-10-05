// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './toggle.scss';

// == Composant
function Toggle({ open, manageClick }) {
  // On calcul la classe CSS a appliquer selon la valeur de notre state
  let cssClass;
  if (open) {
    cssClass = 'toggle toggle--open';
  }
  else {
    cssClass = 'toggle';
  }

  // On recoit en prop le handler du click
  // On peut donc l'executer d'ici afin de modifier la valeur de isOpen
  // Le code de cette modification est définit dans le composant racine (Converter)
  return (
    <button
      className={cssClass}
      type="button"
      onClick={manageClick}
    >
      +
    </button>
  );
}

Toggle.propTypes = {
  open: PropTypes.bool.isRequired,
  manageClick: PropTypes.func.isRequired, // Type : fonction
};

// == Export
export default Toggle;