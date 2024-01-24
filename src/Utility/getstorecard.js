// find the card 
const localStorage = () => {
    const getCard = localStorage.getItem('card');
    if (getCard) {
        return JSON.parse(getCard)
    }
    return []
}