// == Import: npm 
import React from 'react';

// == Import: local
// Datas
import currenciesList from '../../data/currencies';
// Composant
import Header from '../Header';
import Currencies from '../Currencies';
import Amount from '../Amount';
import Toggle from '../Toggle';
// Style
import './converter.scss';

// == Composant

class Converter extends React.Component {
  // Afin de mettre en place un state il faut:
  // 1 = Convertir un composant en classe qui etend React.Component
  // Ne pas oublier l'import de React pour faire ceci
  // 2 = Mettre en place un constructeur dans lequel on initialise les props du composant et surtout : LE STATE
  // => Le state est un objet qui va contenir des propriétés représentants l'etat de notre UI
  constructor(props){
    // On execute le constructeur de notre classe parent afin de profiter de ses fonctionnalités
    // On initialise nos props a ce moment la (si on en a)
    super(props);
    // On vient améliorer notre handler en forcant le context du this
    // Ainsi, on s'assure que même en dehors de son context de base (le nouvel objet Converter),
    // le mot clé this y fera quand même reference
    this.handleClick = this.handleClick.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    // On créer notre State
    this.state = {
      isOpen: false,
      baseAmount: 1,
      currency: 'United States Dollar',
      search: '',
    };
  }
    /* méthodes du cycle de vie : permet de caser des traitements à des
    moments bien précis de la vie d'un composant.
    Attention, pour pouvoir utiliser ces fonctions dans un composant,
    Il faut que le composant soit déclarer en classe
    */
    // appelé juste après le premier rendu (affichage) du composant
    componentDidMount() {
      // console.log('componentDidMount : Execution lors du premier rendu');
      const { currency } = this.state;
      document.title = currency;

      // Cette ecouteur d'evenement permet de fermer le Toogle en appuyant 
      // sur la touche Echap du clavier
      document.addEventListener('keyup', (evt) => {
        if (evt.key === 'Escape') {
          this.setState({
            isOpen: false,
          });
        }
      });
    }

  // appelé juste après chaque rendu du composant, sauf le premier
  componentDidUpdate() {
    console.log('componentDidUpdate : Execution à chaque re-rendu');
    const { currency } = this.state;
    document.title = currency;
  }

  handleCurrencyClick(name) {
    // Le but ici est de venir modifier la valeur de la propriété currency du state
    // Pour ça on va avoir besoin de la valeur de la devise clické par l'utilisateur
    // Et pour la modification du state, on doit OBLIGATOIREMENT passer par la fonction setState
    // La fonction setState permet :
    // - De mofidier le state
    // - De déclencher la modification du DOM par rapport à ce nouveau state

    this.setState({
      currency: name,
    });
  }

  handleChangeSearch(value) {
    // Le but de ce handler est de modifier la donnée dans le state
    this.setState({
      search: value,
    });
  }

  // Fonction qui retourne la liste des devises par rapport au critère de recherche
  // Critère de recherche : le state
  getFilteredCurrencies() {
    // Pour filter les devises, on a besoin de critère de recherhe de l'utilisateur
    // C'est à dire la valeur de le propriété search du state
    const { search } = this.state;

    // Si l'utilisateur ne renseigne aucun critère de recherche,
    // De base, la liste de devises qu'on renvoie est complète
    let filteredCurrencies = currenciesList;

    // Si l'utilisateur commence à renseigner un critère de recherche
    if (search.length > 0) {
      // Alors on filtre en fonction du critère de recherche
      // pour renvoyer une liste de devises qui correspond au critère de recherche
      filteredCurrencies = currenciesList.filter((item) => {
        // On fait en sorte de régler les soucis de casse : les majuscules vs minuscules
        // On force les chaines de caractères en minuscule pour pouvoir faire la comparaison
        const nameLowerCase = item.name.toLowerCase();
        const inputSearchLowerCase = search.toLowerCase();

        // On fait la comparaison avec la fonction includes
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
        // On regarde si l'entrée utilisateur est contenue dans le nom de la devise courante
        return nameLowerCase.includes(inputSearchLowerCase);
      });
    }

    return filteredCurrencies;
  }

  // Fonction qui retourne le resultat de conversion
  makeConversion() {
    // On recup les données depuis notre state
    const { baseAmount, currency } = this.state;
    // On recup les infos de la devise choisie
    const currencyData = currenciesList.find((item) => item.name === currency);
    // On extrait le taux de conversion
    console.log(currencyData);
    // console.log(currenciesList);
    const { rate } = currencyData;
    // On fait la conversion
    const result = baseAmount * rate;
    // On limite à 2 décimales
    const formattedResult = Math.round(result * 100) / 100;

    return formattedResult;
  }

  handleClick() {
    const { isOpen } = this.state;

    // On fournit un objet qui décrit les modification à appliquer au state
    this.setState({
      isOpen: !isOpen,
    });
  }

  // Pour lire une propriété du State il faut faire :
  // this.state.isOpen (par exemple)
  // => on adapte donc l'affichage conditionnel en ce basant sur notre State
  render() {
    // ESLint nous qu'il fait faire du destructuring pour utiliser une propriété du State
    // Cela equivaut à: const isOpen = this.state.isOpen
    const {
      isOpen,
      baseAmount,
      currency,
      search,
    } = this.state;

    // On recup le resultat de conversion
    // Pour l'envoyer au composant qui doit l'afficher
    const result = this.makeConversion();

    // On recup la liste des devises filtrées par raport à l'entrée utilisateur
    // contenu dans le state
    // Maintenant, on va envoyer cette liste filtrée au composant <Currencies />
    const filteredCurrencies = this.getFilteredCurrencies();
    return (
      <div className='converter'>
        <Header baseAmount={baseAmount} />
        <Toggle open={isOpen} manageClick={this.handleClick} />
        {isOpen && (
           <Currencies
           currencies= {filteredCurrencies}
           handleClick={this.handleCurrencyClick}
           searchValue={search}
           setSearch={this.handleChangeSearch}
           />
        )}
       
        <Amount currency={currency} value={result} />
        <p>Hello World</p>
      </div>
    );
  }
}

// == Export
export default Converter;