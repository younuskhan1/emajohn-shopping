import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './Cards.css'

const Cards = ({products}) => {
console.log(products.length);

    return (
        <div className="cards-container">

            <Card></Card>
        </div>
    );
};

Cards.propTypes = {
    products: PropTypes.array.isRequired,
}
export default Cards;