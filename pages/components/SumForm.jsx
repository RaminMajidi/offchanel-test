import React, { useState } from "react"

const SumForm = ()=>{
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [sum, setSum] = useState(0)


    function restHandeler(){
        setNum1(0)
        setNum2(0)
        setSum(0)
    }

    return(
        <div style={{maxWidth:"450px",border:"2px solid black",display:"flex",flexDirection:"column",padding:"10px"}}>
            <input value={num1} onChange={(e)=>setNum1(e.target.value)} style={{margin:"10px auto",width:"90%"}} type="number" />
            <input value={num2} onChange={(e)=>setNum2(e.target.value)} style={{margin:"10px auto",width:"90%"}} type="number" />
            <button onClick={()=>setSum((+num1)+(+num2))} style={{width:"max-content",margin:"2px auto",padding:"2px 10px"}}>نتیجه</button>
            <p style={{textAlign:"center"}}>{sum}</p>
            <button onClick={restHandeler}  style={{width:"max-content",margin:"2px auto",padding:"2px 10px"}}>ریست</button>
        </div>
    )
}

export default SumForm