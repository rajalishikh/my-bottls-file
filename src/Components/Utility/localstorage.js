const setLocalStorage = () => {
    const setString = localStorage.getItem('cart');
    if (setString) {
        return JSON.parse(setString)
    }
    return[]
}

// set  the data 
const saveData = cart => {
    const saveDataLs = JSON.stringify(cart);
    localStorage.setItem('cart', saveDataLs);

}

// add the data 
const addLs = id => {
    const cart = setLocalStorage();
    cart.push(id);
    // save the data 
    saveData(cart);



}
export { addLs };

