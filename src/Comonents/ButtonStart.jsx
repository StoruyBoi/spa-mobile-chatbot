import React, { useState } from 'react'
import "../App.css"
export default function ButtonStart(props) {
  const[isButtonDisabled,setButtonDisabled]=useState()
    const handleCLick=()=>{
      setButtonDisabled(true);
     
props.actions.startingBtn()
    }
  return (
<>

<div className="start_bnt">
<button
disabled={isButtonDisabled}
onClick={()=> 
handleCLick()
}
>Got It!</button>
</div>

</>
  )
}
