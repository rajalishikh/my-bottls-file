import { useEffect, useState } from "react";
import Bottal from "../Bottal/Bottal";
import './Bottals.css';

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
            <div className="grid ">
            {
                bottals.map(item => <Bottal
                    key={item.id}
                    item={item}
                ></Bottal>)
            }
            </div>
        </div>
    );
};

export default Bottals;