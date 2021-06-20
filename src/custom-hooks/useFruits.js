//Custom hook goes here
import {useState, useEffect} from 'react';

const BASEURL = "http://localhost:8000/api/fruits/"


export const useFruits = ()=>{
    const [error, setError] = useState(null);
    const [loading, setLoading]= useState(true);
    const [data, setData]= useState([]);   
    useEffect(()=>{
        async function init()
        {
            try
            {
                const res = await  fetch(BASEURL);
                const response = await res.json();
                setData(response);
            }
            catch (error)
            {
                setError(error);

            }finally
            {
                setLoading(false);
            }       
        }
        init();
    }, []);


    return {data, loading, error}
}