import { useState } from "react";

export const Controlled = ()=> {

    const handleChange =(event)=>{
        setname(event.target.value)
    }

    const [name, setname] = useState();
    const handleSubmit =  (event) =>{
        event.preventDefault()

        const datavalue = document.querySelector("#inputname").value ;
        
        console.log(datavalue)
    }
    return(
        <section className="flex flex-col justify-center items-center h-screen">  
            
            <h1 className="text-start">Controlled Components</h1>

            <form onSubmit={handleSubmit}>
                <label>Name :  <input className="border-2 border-solid" type="text" name="name" id="inputname" value={name} onChange={handleChange}/></label>

                <br />
                <button className="bg-pink-400 p-2 text-white rounded-xl text-center" type="submit">Submit</button>
            </form>
        </section>
    )
}