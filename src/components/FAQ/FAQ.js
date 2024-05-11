import React, { useState } from 'react'
import style from "./faq.module.css";
const FAQ = ({id,title,desc}) => {
    const [toggle, setToggle] = useState(false);
  return (
    <article className={style.faq}>
        <div>
            <h3>Q : {title}</h3>
            {toggle && (
                <p>Ans : {desc}</p>
            )}
            <button onClick={() => {setToggle(!toggle)}}>{toggle ? "-" : "+"}</button>   
        </div>
    </article>
  )
}

export default FAQ