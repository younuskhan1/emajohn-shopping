// import { clearLocalStorage } from '../localStorage/localStorage';
import './Calculations.css';

const Calculations = ({totalPrice, numberOfItems,
    totalShippingCharge,totalTax,
    totalGrandTotal, productForTitleAndId,
    deletedItem, clearLocalStorage}) => {

    return (
        <div className="calculation-container">
            <h2 style={{paddingTop:"20px", paddingBottom:"20px", color:"red", borderBottom:"3px solid white"}}>Order Summary</h2>
            <div className='text-summary-order'>
                <p>Selected Items : $ {numberOfItems.length} </p>
                <p>Total Price : $ {totalPrice} </p>
                <p>Total Shipping Charges : $ {totalShippingCharge} </p>
                <p>Total Tax : $ {totalTax} </p>
                <p style={{fontSize:"22px", paddingTop:"20px"}}>Grand Total : $ {totalGrandTotal} </p>
                <ol style={{paddingTop: "15px", fontSize: "16px", paddingRight: "10px"}}>
                    {
                        productForTitleAndId.map((product, idx) =>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}
                             key={idx}>{idx+1}. {product.name} <i onClick={() => deletedItem(product.id)} 
                             className="dust-bin fa-solid fa-trash-can"></i></div>)
                    }
                </ol>
            </div>
            <p className='clear-cart-button' style={{backgroundColor:"#FF3030", margin: "20px 0px"}} onClick={clearLocalStorage}>Clear Cart <i className="fa-solid fa-trash-can"></i></p>
            <p className='review-order-button' style={{backgroundColor:"#FF9900"}}>Review Order <i className="fa-solid fa-arrow-right"></i></p>
        </div>
    );
};

export default Calculations;