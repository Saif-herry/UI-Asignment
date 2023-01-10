import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
// import "./Main.css"
// GiHamburgerMenu
import { useEffect } from 'react'
import axios from "axios"
const Main = () => {
 const [data, setdata] = useState([])
 const [toggle, settoggle] = useState(false)
    function dataFe(){
        axios.get("http://localhost:8080/posts").then(r=>setdata(r.data)).catch(e=>console.log(e))
    }
 useEffect(() => {
 dataFe()
 }, [])
 console.log(data);
  return (
    <div className='Container'>
        <div>
            <GiHamburgerMenu onClick={()=>settoggle(!toggle)}/>
        </div>
        {
           toggle && <>
           {
            data.map(function(ele){
                return(
                    <div>
                        <div className='card'>
                        <div><img style={{width:"80px"}} src={ele.icon} alt="" /></div>
                        
                        <div>{ele.title}</div>
                        
                        </div>
                    </div>
                )
            })
           }
           </> 
        }
        <div className='dash'>

        </div>
    </div>
  )
}

export default Main