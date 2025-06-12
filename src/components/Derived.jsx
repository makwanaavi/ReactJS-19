import { useState } from "react";

// const users = [
//   {
//     name: "Avi Makwana",
//     age: 20,
//   },
//   {
//     name: "Riya Shah",
//     age: 24,
//   },
//   {
//     name: "Karan Patel",
//     age: 27,
//   },
//   {
//     name: "Sneha Desai",
//     age: 21,
//   },
// ];

function Derived() {
    const [users] = useState([
    {name: "Avi Makwana", age: 20},
    {name: "Riya Shah",age: 24},
    {name: "Karan Patel",age: 27},
    {name: "Sneha Desai",age: 21},
{name: "Aditya",age: 23},
{name: "Chetan Chudashma",age: 23}]);

    const usersLength = users.length
    console.log(usersLength)
  return (
    <div className="flex flex-col text-start justify-center items-center h-screen">
        <h1>User List : </h1>
        <ul>
            {users.map((item, index) =>{
                return (
                    <>  
                    <li key={index}>{item.name} is {item.age} Year&apos;s old </li>
                    
                    </>
                )
            })}
        </ul>
        <h2>Totla Users : {usersLength}</h2>
    </div>
   

    // <div>
    //   {users.map((item, index) => (
    //     <ul key={index}>
    //       <li>{item.name}</li>
    //       <li>{item.age}</li>
    //     </ul>
    //   ))}
    // </div>
  );
}

export default Derived;
