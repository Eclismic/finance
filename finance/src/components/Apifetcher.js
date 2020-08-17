import React, {useState, useEffect} from 'react'
import FinanceChart from './Financechart';

const Apifetcher = () => {

    const [data, setData] = useState([]);
    const axios = require('axios');

    const [isLoadingCompany, setLoadingCompany] = useState(true);

    useEffect(() =>{
        //fetchCompanies();
    })
    

    const fetchCompanyData = () =>{
        axios.get('https://financialmodelingprep.com/api/v3/historical-chart/1hour/RDSA.AS?from=2020-08-17&to=2020-08-17&apikey=1114e5e63302cf8f97cd86e9025eeeba')
        .then((response)=>{
            console.log(response)
            response.data.map((x) => {
            let time = splitDate(x);
            

            let arrayElement = [];
            arrayElement.push(time,x.close);

            console.log(arrayElement[0] + "  |  " +arrayElement[1]);

            setData(data => [...data, arrayElement])
            })
        })
        .then(() => {
            console.log('set loading is false');
            setLoadingCompany(false)
        })
        .catch((err) => 
        console.log(err))
    }

    const splitDate = (date) => {
        const arraySplit = date.date.split(" ");
        const dayYearMonth = arraySplit[0];
        const time = arraySplit[1];

         
        const year = dayYearMonth.split("-")[0];
        const month = dayYearMonth.split("-")[1];
        const day = dayYearMonth.split("-")[2];


        const hour = time.split(":")[0];
        const minutes = time.split(":")[1];

        return new Date(year, month - 1, day, hour, minutes);
    }

    const fetchCompanies = () => {
        axios.get('https://financialmodelingprep.com/api/v3/stock/list?apikey=1114e5e63302cf8f97cd86e9025eeeba')
        .then((response) => {
            console.log(response)
        })
        .catch(err => console.log(err))
    }

    const test = () => {
        setLoadingCompany(false);
    }

    return (
        <div>
            <button onClick={fetchCompanyData}>Ophalen data</button>
            
            {isLoadingCompany? null : (<FinanceChart data={data}/> )}
        </div>
    )
    
}

export default Apifetcher;
