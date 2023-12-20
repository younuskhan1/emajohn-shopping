import './Calculations.css';

const Calculations = () => {
    return (
        <div className="calculation-container">
            <h2 style={{paddingTop:"20px", paddingBottom:"20px", color:"red", borderBottom:"3px solid white"}}>Order Summary</h2>
            <div className='text-summary-order'>
                <p>Selected Items : $ </p>
                <p>Total Price : $ </p>
                <p>Total Shipping Charges : $ </p>
                <p>Total Tax : $ </p>
                <p style={{fontSize:"22px", paddingTop:"20px"}}>Grand Total : $ </p>
            </div>
            <p className='clear-cart-button' style={{backgroundColor:"#FF3030", margin: "20px 0px"}}>Clear Cart <i class="fa-solid fa-trash-can"></i></p>
            <p className='review-order-button' style={{backgroundColor:"#FF9900"}}>Review Order <i class="fa-solid fa-arrow-right"></i></p>
        </div>
    );
};

export default Calculations;