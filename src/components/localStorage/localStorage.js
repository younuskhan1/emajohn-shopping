
const getItemsFromLocalStorage = ()=>{
    return localStorage.getItem("Items") ?
    JSON.parse(localStorage.getItem("Items")) : [];
}

const setItemsToLocalStorage =(product)=>{
    const ItemsOfLS = getItemsFromLocalStorage();
    ItemsOfLS.push(product.id);
    localStorage.setItem("Items", JSON.stringify(ItemsOfLS));
}


export{setItemsToLocalStorage, getItemsFromLocalStorage};