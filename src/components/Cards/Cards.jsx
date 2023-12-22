import Card from '../Card/Card';
import './Cards.css'

const Cards = ({products, cardHandleButton}) => {
    return (
        <div className="cards-container">
            {
               products.map((product, idx) =><Card key={idx} cardHandleButton={cardHandleButton} product={product}></Card>)
            }
        </div>
    );
};

export default Cards;