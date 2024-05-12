import React, { useEffect, useState } from 'react'

const LoadingMessage = <p>Data is Coming</p>
const DataFetch = () => {

  const [todos,setTodos] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);
  useEffect(()=>{
    setTimeout(()=>{
      fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
      if(!res.ok){
        throw Error("data fetching is not successfully")
      }else{
        return res.json()
      }
    })
    .then((data)=>{
      setTodos(data);
      setIsLoading(false);
      setError(null);
    })
    .catch((error) =>{
      setError(error.message);
      setIsLoading(false);
    });
    },2000);
  },[])
  return (
    <div>
      <h1>Todos Data</h1>
      {error && <p>{error}</p>}
      {isLoading && LoadingMessage}
      {todos && todos.map((todo)=>{
        return <p key={todo.id} style={{textAlign: 'left' , color:'white', paddingLeft: '100px',margin:'10px', background:'gray', borderRadius:'10px',padding:'10px'}}>
          ID : {todo.id} <br /> 
          User ID : {todo.userId} <br />
          Title : {todo.title}</p>
      })}
    </div>
  )
}

export default DataFetch