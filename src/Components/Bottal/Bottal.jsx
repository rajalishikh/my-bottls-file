import './Bottal.css';
const Bottal = ({ item }) => {
    const { name, price, img } = item;

    return (
        <div className='border'>
            <h1>My Bottals name is {name}</h1>
            <p>My bottals price is {price}</p>
            <img src={img} alt="it is a bottals pic " srcSet="" width='200px' />
            
        </div>
    );
};

export default Bottal;