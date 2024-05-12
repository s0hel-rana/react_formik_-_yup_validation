import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';

const DataFetch = () => {

    const {data,isLoading,error} = useFetch("https://jsonplaceholder.typicode.com/todos");

    const LoadingMessage = <p>Data is Coming</p>
    const errorMessage = <p>{error}</p>
  return (
    <div>
      <h1>Todos Data</h1>
      {error && errorMessage}
      {isLoading && LoadingMessage}
      {data && data.map((todo)=>{
        return <p key={todo.id} style={{textAlign: 'left' , color:'white', paddingLeft: '100px',margin:'10px', background:'gray', borderRadius:'10px',padding:'10px'}}>
          ID : {todo.id} <br /> 
          User ID : {todo.userId} <br />
          Title : {todo.title}</p>
      })}
    </div>
  )
}

export default DataFetch