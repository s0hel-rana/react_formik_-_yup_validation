import React,{useState,useEffect} from 'react'

const useFetch = (url) => {

    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
      setTimeout(()=>{
        fetch(url)
      .then((res)=>{
        if(!res.ok){
          throw Error("data fetching is not successfully")
        }else{
          return res.json()
        }
      })
      .then((data)=>{
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) =>{
        setError(error.message);
        setIsLoading(false);
      });
      },2000);
    },[url])

    return {data,isLoading,error}
}

export default useFetch