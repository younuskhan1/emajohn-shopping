import './Calculations.css';

const Calculations = ({totalPrice, numberOfItems, totalShippingCharge,totalTax,totalGrandTotal}) => {
    // console.log(totalPrice);
    return (
        <div className="calculation-container">
            <h2 style={{paddingTop:"20px", paddingBottom:"20px", color:"red", borderBottom:"3px solid white"}}>Order Summary</h2>
            <div className='text-summary-order'>
                <p>Selected Items : $ {numberOfItems} </p>
                <p>Total Price : $ {totalPrice} </p>
                <p>Total Shipping Charges : $ {totalShippingCharge} </p>
                <p>Total Tax : $ {totalTax} </p>
                <p style={{fontSize:"22px", paddingTop:"20px"}}>Grand Total : $ {totalGrandTotal} </p>
            </div>
            <p className='clear-cart-button' style={{backgroundColor:"#FF3030", margin: "20px 0px"}}>Clear Cart <i className="fa-solid fa-trash-can"></i></p>
            <p className='review-order-button' style={{backgroundColor:"#FF9900"}}>Review Order <i className="fa-solid fa-arrow-right"></i></p>
        </div>
    );
};

export default Calculations;