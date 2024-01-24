// find the data 
const localStorage = () => {
    const findTheData = localStorage.getItem('card');
    if (findTheData) {
      return JSON.parse(findTheData);
    }
    return[]
}
// add the data 
