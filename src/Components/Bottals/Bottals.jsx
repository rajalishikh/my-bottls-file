import { useEffect, useState } from "react";
import Bottal from "../Bottal/Bottal";

const Bottals = () => {
    const [bottals, setBottals] = useState([]);
    useEffect(() => {
        fetch('Bottale.json')
            .then(res => res.json())
            .then(data => setBottals(data))
        
    },[])
    return (
        <div>
            <h1>The number of my Bottales:{bottals.length}</h1>
            {
                bottals.map(item => <Bottal
                    key={item.id}
                    item={item}
                ></Bottal>)
            }
        </div>
    );
};

export default Bottals;