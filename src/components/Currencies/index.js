// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
// Composant
import Currency from './Currency';
// Srtyle
import './currencies.scss';

// == Composant
function Currencies({
  currencies,
  handleClick,
  searchValue,
  setSearch,
}) {
  // {...currency} : Spread Opérator
  // => Permet de dévérser le contenu de la variable dans le composant
  // Revient à écrire
  // <Currency name={currency.name} rate={currency.rate} />

  // Le composant Currencies ne sert finalement que de passe plat.
  // Il est l'intermediaire entre Converter et Currency.
  // On a donc pas besoin de faire la validation des props inutilisées
  // (mais utilisées dans Currency) dans ce composant.

  // React a besoin de pouvoir identifier les éléments d'une liste.
  // Pour ça, il il faut qu'on renseigne un attribut "key" avec une valeur unique
  // On verra par la suite pourquoi React en a besoin ;)

  // Les champs de formuaire (input, textarea et select) gèrent / stockent leur valeurs dans le DOM
  // (attribut value). C'est pas bon pour la programmation déclarative.
  // On va avoir besoin de recup la valeur dans le state
  // => Pour ça on va mettre en place un champ contrôlé :
  // C'est la valeur du state qui pilote la valeur affiché dans l'input.
  // Et on interdit à l'input de gérer sa valeur tout seul !
  // https://fr.reactjs.org/docs/forms.html

  // Mise en place d'un champ contrôlé :
  // - Avoir une case dans le state qui va contenir la valeur de l'input
  // - Controle en lecture : Afficher la valeur du state dans l'input
  // - Controle en ecriture : Modifier la valeur dans le state

  /*
  key : identifiant unique pour des éléments qui sont du même type (balises
  ou composants React) et qui sont frères.
  C'est une prop spéciale en React, utilisée pour la phase de réconciliation.
  https://fr.acervolima.com/reconciliation-reactjs/

  => Faire la diff entre DOM virtuel pre-update & DOM virtuel updated
  Pour appliquer les modif seulement aux elements de composants qu'il faut.
  En terme de perf, on est au max !

  Il faut pour key une information unique et stable dans le temps : le top
  c'est un id, sinon un nom peut convenir (à condition qu'il soit unique).
  Ne pas utiliser d'index pour les key, ce n'est pas stable dans le temps
  */
  return (
    <div className="currencies">
      <input
        type="text"
        className="currencies-search"
        placeholder="Rechercher"
        value={searchValue}
        onChange={(event) => {
          // console.log(`onChange : ${event.currentTarget.value}`);
          setSearch(event.currentTarget.value);
        }}
      />
      <ul>
        {currencies.map((currency) => (
          <Currency {...currency} click={handleClick} key={currency.name} />
        ))}
      </ul>
    </div>
  );
}

Currencies.propTypes = {
  // Tableau qui contient des objets. Chaque objet contient des propriétés
  // Nom de la prop : type de la prop
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      // On ne valide que les donnée qu'on va utiliser dans le composant
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

// == Export
export default Currencies;
