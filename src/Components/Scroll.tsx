import React from 'react'

const Scroll = (props:any) => {
   return (
     <div style={{overflowY:'scroll' ,border:'3px solid black', height:'700px', marginTop:'20px'}}>
     {props.children}
     </div>
   )  
}

export default Scroll
