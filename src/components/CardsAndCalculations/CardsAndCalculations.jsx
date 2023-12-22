
import { useState } from "react";
import Calculations from "../Calculations/Calculations";
import Cards from "../Cards/Cards";
import './CardsAndCalculations.css';
import { useEffect } from "react";
import swal from "sweetalert";

const CardsAndCalculations = () => {
    const [products, setProducts] = useState([]);
    const [numberOfItems, setNumberOfItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalShippingCharge, setTotalShippingCharge] = useState(0);
    const [totalTax, setTotalTax] = useState(0);
    const [totalGrandTotal, setTotalGrandTotal]= useState(0);

    useEffect(() => {
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, []);

    const cardHandleButton = (product)=>{
    // console.log(product);
        if (numberOfItems.includes(product.id)){
            return swal("Sorry!", "You will not be able to add a product for twice simultaneously.", "error");
        }
    const numberOfProducts = [...numberOfItems, product.id];
    setNumberOfItems(numberOfProducts);
    const price = totalPrice + product.price;
    setTotalPrice(price);
    const shippingCharge = totalShippingCharge + product.shipping;
    setTotalShippingCharge(shippingCharge);
    const tax = price * .15;
    const fixedTax = tax.toFixed(2);
    // const taxInNumber = parseFloat(fixedTax);
    setTotalTax(fixedTax);
    const grandTotal = price + shippingCharge + tax;
    const fixedGrandTotal = grandTotal.toFixed(2);
    setTotalGrandTotal(fixedGrandTotal);
    }

    return (
        <div className="cards-and-calculations">
            <Cards cardHandleButton={cardHandleButton} products={products}></Cards>
                <Calculations 
                totalPrice={totalPrice} 
                numberOfItems={numberOfItems}
                totalShippingCharge={totalShippingCharge}
                totalTax={totalTax}
                totalGrandTotal ={totalGrandTotal}
                ></Calculations>
        </div>
    );
};

export default CardsAndCalculations;