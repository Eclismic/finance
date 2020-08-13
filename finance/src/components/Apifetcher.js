import React, {useState} from 'react'
import FinanceChart from './Financechart';

const Apifetcher = () => {

    const [data, setData] = useState([]);

    const axios = require('axios');

    const [isLoading, setLoading] = useState(true);

    let counter = 0;



    const fetchData = () =>{
        axios.get('https://financialmodelingprep.com/api/v3/historical-chart/1hour/RDSA.AS?from=2020-08-13&to=2020-08-13&apikey=1114e5e63302cf8f97cd86e9025eeeba')
        .then((response)=>{
            response.data.map(x => {
            
            let arrayElement = [];
            arrayElement.push(counter, x.close)
            setData(data => [...data, arrayElement])
            counter += 1;
            console.log(counter);
            })
        })
        .then(() => {
            console.log('set loading is false');
            setLoading(false)
        })
    }

    const test = () => {
        setLoading(false);
    }

    return (
        <div>
            <button onClick={fetchData}>Ophalen data</button>
        
            {isLoading? null : (<FinanceChart data={data}/> )}
        </div>
    )
    
}

export default Apifetcher;
