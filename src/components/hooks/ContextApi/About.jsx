// import { useContext } from "react"
// import { UserContext } from "."

// export const About = () =>{
//     const {Name1, Name2, Age} = useContext(UserContext)
//    const UserData =   {Name1, Name2, Age}

//     localStorage.setItem("UserData", JSON.stringify(UserData))
//     return(
//         <div className="w-full h-screen bg-pink-300">
//             Hey There My name {Name1}{Name2} and i am {Age} Old . 
//         </div>
//     )
// }

// app/page.jsx
import { use } from "react";

// A function that returns a Promise (async data)
async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return res.json(); // This returns a promise
}

export default function About() {
  const user = use(getUser()); // 🆕 Use the `use()` hook

  return (
    <div>
      <h1>React 19 `use()` Example</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
