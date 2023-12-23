
const getItemsFromLocalStorage = ()=>{
    return localStorage.getItem("Items") ?
    JSON.parse(localStorage.getItem("Items")) : [];
}

const setItemsToLocalStorage =(product)=>{
    const ItemsOfLS = getItemsFromLocalStorage();
    ItemsOfLS.push(product.id);
    localStorage.setItem("Items", JSON.stringify(ItemsOfLS));
}

const clearLocalStorage = ()=>{
    const getDataFromLS = getItemsFromLocalStorage();
    localStorage.clear(getDataFromLS);
    location.reload();
}

export{setItemsToLocalStorage, getItemsFromLocalStorage,clearLocalStorage};