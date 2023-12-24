import './Card.css';
const Card = ({product, cardHandleButton}) => {
    // console.log(product);
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='card-container' >
            <div className="card-img-text-container">
                {img ? <img className="card-image" src= {img}  alt="" /> : "image in not available"}
                <div style={{marginTop:"20px", lineHeight: "1.8em"}}>
                    <h3 style={{textAlign:"left"}}>{name}</h3>
                    <p style={{textAlign:"left",fontSize:"18px", fontWeight:"bolder"}}> Price : <span>$</span> {price}</p>
                    <p style={{textAlign:"left",fontSize:"18px", fontWeight:"bolder"}}> Manufacturer : {seller}</p>
                    <p style={{textAlign:"left",fontSize:"18px", fontWeight:"bolder"}}> Ratings : {ratings} stars </p>
                </div>   
            </div>
            <p className='card-button' onClick = {()=>cardHandleButton(product)}>Add To Cart <i className="fa-solid fa-cart-plus"></i></p>
        </div>
    );
};

export default Card;