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
  render() {
    return (
      <div className='converter'>
        <Header />
        <p>Hello World</p>
      </div>
    );
  }
}

// == Export
export default Converter;