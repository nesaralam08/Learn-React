import { useState } from "react"

function App()
{
    const [color,setColor] = useState("white");
    return(
        <div className="container" style={{backgroundColor:color}}>
            <div className="menu">
                <button className="btn bg-red-600" onClick={()=>setColor("red")}>Red</button>
                <button className="btn bg-blue-600" onClick={()=>setColor("blue")}>Blue</button>
                <button className="btn bg-pink-600" onClick={()=>setColor("pink")}>Black</button>
                <button className="btn bg-yellow-600" onClick={()=>setColor("yellow")}>Yellow</button>
                <button className="btn bg-green-600" onClick={()=>setColor("green")}>Green</button>
                <button className="btn bg-cyan-600" onClick={()=>setColor("cyan")}>Cyan</button>
                <button className="btn bg-orange-600" onClick={()=>setColor("orange")}>Orange</button>
                <button className="btn bg-purple-600" onClick={()=>setColor("purple")}>Purple</button>
            </div>
        </div>
    )
}
export default App