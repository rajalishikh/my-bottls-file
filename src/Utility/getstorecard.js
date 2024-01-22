const getItem = () => {
    const storeCardString = localStorage.getItem('card');
    if (storeCardString) {
        return JSON.parse(storeCardString)
    }
    return [];




}
// convert the data into strigfy 
const saveCardTols = card => {
    const cardStringField = JSON.stringify(card);
    localStorage.setItem('card',cardStringField)
}
// add the data 
const addLS = id => {
    const card = getItem();
    card.push(id);
    // save the data 
    saveCardTols(card);



}
export { addLS };
