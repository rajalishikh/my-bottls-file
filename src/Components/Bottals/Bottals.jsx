import { useEffect, useState } from "react";

import Bottal from "../Bottal/Bottal";
import './Bottals.css';

const Bottals = () => {
    const [bottals, setBottals] = useState([]);
    const [parches1, setPurches] = useState([]);
    useEffect(() => {
        fetch('Bottale.json')
            .then(res => res.json())
            .then(data => setBottals(data))
        
    }, [])
    const handlePurches = (purches) => {
       
        const newPurches = [...parches1, purches];
        console.log("add my purches section",purches);
        setPurches(newPurches);
        //  save local storage 
        

       
    }
    //  load cart from local storage 
    
    return (
        <div>
            <h1>The number of my Bottales:{bottals.length}</h1>
            <p>The number of my total bottals{ parches1.length}</p>
            <div className="grid ">
            {
                    bottals.map(item => <Bottal
                    handlePurches={handlePurches}
                    key={item.id}
                    item={item}
                ></Bottal>)
            }
            </div>
        </div>
    );
};

export default Bottals;