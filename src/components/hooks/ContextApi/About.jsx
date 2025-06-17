import { useContext } from "react"
import { UserContext } from "."

export const About = () =>{
    const {Name1, Name2, Age} = useContext(UserContext)
   const UserData =   {Name1, Name2, Age}

    localStorage.setItem("UserData", JSON.stringify(UserData))
    return(
        <div className="w-full h-screen bg-pink-300">
            Hey There My name {Name1}{Name2} and i am {Age} Old . 
        </div>
    )
}