// == Import: npm 
import React from 'react';

// == Import: local
// Datas
// Composant
import Header from '../Header';
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
    // On créer notre State
    this.state = {
      isOpen: false,
      baseAmount: 1,
      currency: 'United State Dollar',
      search: '',
    };
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
    return (
      <div className='converter'>
        <Header baseAmount={baseAmount} />
        <p>Hello World</p>
      </div>
    );
  }
}

// == Export
export default Converter;