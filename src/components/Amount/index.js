// == Import :  npm
import PropTypes from 'prop-types';

// == Import : local
import './amount.scss';

// == Composant
function Amount({ currency, value }) {
  return (
    <div className="amount">
      <p className="amount-value">{value}</p>
      <p className="amount-currency">{currency}</p>
    </div>
  );
}

Amount.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

// == Export
export default Amount;