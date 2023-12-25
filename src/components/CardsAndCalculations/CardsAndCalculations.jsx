
import { useState } from "react";
import Calculations from "../Calculations/Calculations";
import Cards from "../Cards/Cards";
import './CardsAndCalculations.css';
import { useEffect } from "react";
import swal from "sweetalert";
import {deleteSingleItem, getItemsFromLocalStorage, setItemsToLocalStorage } from "../localStorage/localStorage";

const CardsAndCalculations = () => {
    const [products, setProducts] = useState([]);
    const [numberOfItems, setNumberOfItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalShippingCharge, setTotalShippingCharge] = useState(0);
    const [totalTax, setTotalTax] = useState(0);
    const [totalGrandTotal, setTotalGrandTotal]= useState(0);
    const [productForTitleAndId, setProductForTitleAndId] = useState([]);
    

    useEffect(() => {
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, []);

    useEffect(()=>{
        // console.log("called the useEffects", products.length);
       
        if(products.length > 0){
            const getItemsOfLS = getItemsFromLocalStorage();
            let productOfLS = [];
            for (let id of getItemsOfLS){
                // console.log(id);
                const itemsLS = products.find(item=> item.id === id);
                // console.log(itemsLS);
                if(itemsLS){
                    productOfLS.push(itemsLS);
                }
            }
            // console.log(productOfLS);
            // setNumberOfItems(productOfLS);
            setProductForTitleAndId([...productOfLS]);
            cartCalculationTask(productOfLS);
            

            // let lsTotalPrice = 0;
            // let lsTotalShippingCharges = 0; 
            // // let lsCardTitleAndId = [];
            // for (let item of productOfLS){
            //     lsTotalPrice = lsTotalPrice + item.price;
            //     setTotalPrice(lsTotalPrice);
            //     lsTotalShippingCharges = lsTotalShippingCharges + item.shipping;
            //     setTotalShippingCharge(lsTotalShippingCharges);
            //     const lsTotalTax = lsTotalPrice * .15;
            //     const lsTotalTaxFixed = lsTotalTax.toFixed(2);
            //     setTotalTax(lsTotalTaxFixed);
            //     const lsGrandTotal = lsTotalPrice + lsTotalShippingCharges + lsTotalTax;
            //     const lsGrandTotalFixed = lsGrandTotal.toFixed(2);
            //     setTotalGrandTotal(lsGrandTotalFixed);
            //     // console.log(productOfLS);
            //     setProductForTitleAndId([...productOfLS]);

            // }
            // setTotalPrice(productOfLS.price)
        } 
        
   
        
    },[products])

    const cardHandleButton = (product)=>{
    // console.log(product);
    // console.log(numberOfItems);
    for (let items of numberOfItems){
       if (items.id === product.id){
        return swal("Sorry!", "You will not be able to add a product for twice simultaneously.", "info");
       }
    }
       
    const numberOfProducts = [ ...numberOfItems, product];
    // console.log(numberOfItems);
    // console.log(numberOfProducts);
  
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
    const productTitle = [...productForTitleAndId, product];
    setProductForTitleAndId(productTitle);
    setItemsToLocalStorage(product);
    // console.log(cardTitle);

    }

const deletedItem =(deletedId)=>{
    // console.log(deletedId);
const unDeletedItem = productForTitleAndId.filter(Item => Item.id !== deletedId);
//  console.log(unDeletedItem);
deleteSingleItem(deletedId);
setProductForTitleAndId(unDeletedItem);
cartCalculationTask (unDeletedItem);

}

const cartCalculationTask = (productForTitleAndId) => {
    let totalPrice = 0;
    let totalShippingPrice = 0;
    let totalTaxFixed = 0;
    let grandTotalFixed = 0;
  for (let item of productForTitleAndId){
    totalPrice = totalPrice + item.price;
    totalShippingPrice = totalShippingPrice + item.shipping;
    const totalTax = totalPrice * .15;
    totalTaxFixed = totalTax.toFixed(2);
   
    const grandTotal = totalPrice + totalShippingPrice + totalTax;
    grandTotalFixed = grandTotal.toFixed(2);
    

  }
  setNumberOfItems(productForTitleAndId);
  setTotalPrice(totalPrice);
  setTotalShippingCharge(totalShippingPrice);
  setTotalTax(totalTaxFixed);
  setTotalGrandTotal(grandTotalFixed);

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
                productForTitleAndId = {productForTitleAndId}
                deletedItem = {deletedItem}
                ></Calculations>
        </div>
    );
};

export default CardsAndCalculations;