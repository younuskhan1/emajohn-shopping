import Card from '../Card/Card';
import './Cards.css'

const Cards = ({products}) => {
    return (
        <div className="cards-container">
            {
               products.map(product=><Card product={product}></Card>)
            }
        </div>
    );
};

export default Cards;