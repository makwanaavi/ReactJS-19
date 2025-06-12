import { useState } from "react";
import "../EV.css"

export const State = () =>{
    console.log("Hello Parent")
    const [add, setadd] = useState(0);

    const handleClickButton = () =>{
        setadd(add + 1)
    }
    return (
        <section className="flex justify-center items-center h-screen">
         <h1 className="pr-6 text-2xl">{add}</h1>
        <button onClick={handleClickButton} className="bg-green-400 p-3 font-semibold rounded-lg ">Increment</button>         
        <button onClick={() =>{setadd(add - 1)}} className="bg-red-400 p-3 font-semibold rounded-lg ">Decrement</button>         

        </section>
    )
}