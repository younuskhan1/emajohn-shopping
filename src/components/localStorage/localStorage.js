
const getItemsFromLocalStorage = ()=>{
    return localStorage.getItem("Items") ?
    JSON.parse(localStorage.getItem("Items")) : [];
}

const setItemsToLocalStorage =(product)=>{
    const ItemsOfLS = getItemsFromLocalStorage();
    // console.log(product);
    const {id, price, shipping} = product;
    // console.log(id, price, shipping);
   
    ItemsOfLS.push({ "id":id,"price": price,"shipping": shipping });
    localStorage.setItem("Items", JSON.stringify(ItemsOfLS));
}


export{setItemsToLocalStorage, getItemsFromLocalStorage};