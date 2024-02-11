import { useState } from "react";

function Page1()
{
    let [counter,setCounter] = useState(10);
    const Add = ()=>{
        if(counter<20)
        {
            setCounter(counter+1);
            console.log(counter);
        }
    }
    const Remove = ()=>{
        if(counter>0)
        {
            setCounter(counter-1);
            console.log(counter);
        }
    }
    return(
        <>
        <h1>The Counter is {counter}</h1>
        <br/>
        <button onClick={Add}>Increase</button><br/>
        <button onClick={Remove}>Decrease</button>
        {/* <button onClick={CountDown}>Start</button> */}
        </>
    )
}
export default Page1