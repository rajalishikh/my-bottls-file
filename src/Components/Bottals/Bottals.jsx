import { useEffect, useState } from "react";

const Bottals = () => {
    const [bottals, setBottals] = useState([]);
    useEffect(() => {
        fetch('Bottale.json')
            .then(res => res.json())
            .then(data => setBottals(data))
        
    },[])
    return (
        <div>
            <h1>The number of my Bottales:{ bottals.length}</h1>
        </div>
    );
};

export default Bottals;