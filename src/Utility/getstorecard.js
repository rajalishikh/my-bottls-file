// find the data 
const localStorage = () => {
    const findTheData = localStorage.getItem('card');
    if (findTheData) {
      return JSON.parse(findTheData);
    }
    return[]
}

// convert the data
const convertData = card => {
    const convertDataS = JSON.stringify(card);
    localStorage.setItem('card', convertDataS);
}
// add the data 
const addData = id => {
    const addDataLs = localStorage();
    addDataLs.push(id);
    // save the data 
    convertData(addData);


}
export { addData };
