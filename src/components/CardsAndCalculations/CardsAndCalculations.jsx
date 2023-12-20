
import { useState } from "react";
import Calculations from "../Calculations/Calculations";
import Cards from "../Cards/Cards";
import './CardsAndCalculations.css';
import { useEffect } from "react";

const CardsAndCalculations = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, []);

    return (
        <div className="cards-and-calculations">
            <Cards products={products}></Cards>
            <Calculations></Calculations>
        </div>
    );
};

export default CardsAndCalculations;