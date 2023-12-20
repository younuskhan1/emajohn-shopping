import './Card.css';
const Card = ({product}) => {
    const {img, name, price} = product;
    return (
        <div className="card-container">
            <img className="card-image" src={img} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
           
        </div>
    );
};

export default Card;