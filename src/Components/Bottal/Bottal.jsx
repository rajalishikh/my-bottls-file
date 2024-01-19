

const Bottal = ({ item }) => {
    const { name, price, img } = item;

    return (
        <div>
            <h1>My Bottals name is {name}</h1>
            <p>My bottals price is {price}</p>
            <img src={img} alt="" srcSet="" />
            
        </div>
    );
};

export default Bottal;