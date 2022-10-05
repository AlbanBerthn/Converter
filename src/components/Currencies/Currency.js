// == Import : nmp
import PropTypes from 'prop-types';

// == Composant
function Currency({ name, click }) {
  // Si on passe un argument à notre fonction click
  // On l'execute au moment du montage du composant => PAS BIEN
  // Il faut faire en sorte de déléguer cette execution.
  // => Pour on passe une fonction au onClick (qui va donc être executé au bon moment)
  // QUI ELLE MEME va se charger d'executer la fonction click (en passant le nom en argument)
  return (
    <li
      className="currency"
      onClick={() => {
        click(name);
      }}
    >
      {name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

// == Export
export default Currency;
