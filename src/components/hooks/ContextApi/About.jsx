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
import { useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

export default function About() {
    const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setUser(data);
      console.log(data);
    }

    getUser();
  }, []);

  return (
    <div>
      <h1>React 18+ API Fetch Example</h1>

      <h2>Use Data : </h2>
      {user ? (
        user.map((u) => (
          <div key={u.id}>
            <img src="./images/tw.webp" className="rounded-full h-24 w-24" alt="" />
            <p>Name: {u.name}</p>
            <p>Email: {u.email}</p>
            <p>Contact : {u.phone}</p>
             <p>Address(city): {u.address.city}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
