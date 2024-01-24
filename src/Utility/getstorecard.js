// find the card 
const localStorage = () => {
    const getCard = localStorage.getItem('card');
    if (getCard) {
        return JSON.parse(getCard)
    }
    return []
}
// convert the data 
const cardConvert = card => {
    const convertString = JSON.stringify(card);
    localStorage.setItem('card', convertString);
}


// add the data 
const card = id => {
    const addData = localStorage();
    addData.push(id)
    // save the data
    cardConvert(addData);

}
export { card };
