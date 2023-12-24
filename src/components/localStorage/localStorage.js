
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
    // console.log(deletedId);
    const getExistedItems = getItemsFromLocalStorage();
    // console.log(getExistedItems);
    const matchedItem = getExistedItems.filter(item => item !== deletedId);
    // console.log(matchedItem);
    localStorage.setItem("Items", JSON.stringify(matchedItem));
    location.reload();
    // console.log(getDeletedItem);
    // localStorage.removeItem(getDeletedItem);
    // location.reload();
}

const clearLocalStorage = ()=>{
    const getDataFromLS = getItemsFromLocalStorage();
    localStorage.clear(getDataFromLS);
    location.reload();
}

export{setItemsToLocalStorage,
     getItemsFromLocalStorage,
     clearLocalStorage,
     deleteSingleItem};