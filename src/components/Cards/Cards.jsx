import Card from '../Card/Card';
import './Cards.css'

const Cards = ({products}) => {
    return (
        <div className="cards-container">
            {
               products.map((product, idx) =><Card key={idx} product={product}></Card>)
            }
        </div>
    );
};

export default Cards;