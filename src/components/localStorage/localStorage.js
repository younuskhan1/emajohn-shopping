
const getItemsFromLocalStorage = ()=>{
    return localStorage.getItem("Items") ?     
    JSON.parse(localStorage.getItem("Items")) : [];
}

const setItemsToLocalStorage =(product)=>{
    const ItemsOfLS = getItemsFromLocalStorage();
    ItemsOfLS.push(product.id);
    localStorage.setItem("Items", JSON.stringify(ItemsOfLS));
}

const deleteSingleItem = (deletedId)=>{
    const getExistedItems = getItemsFromLocalStorage();
    const matchedItem = getExistedItems.filter(item => item !== deletedId);
    localStorage.setItem("Items", JSON.stringify(matchedItem));
}

const clearLocalStorage = ()=>{
    // const getDataFromLS = getItemsFromLocalStorage();
    localStorage.clear("Items");
    location.reload();
}

export{
     setItemsToLocalStorage,
     getItemsFromLocalStorage,
     clearLocalStorage,
     deleteSingleItem,
    };