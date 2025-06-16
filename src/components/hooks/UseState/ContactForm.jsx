import { useState } from "react";
import "./index.css";
export const ContactForm = () => {
//   const [username, setusername] = useState("");
//   const [password, setpassword] = useState("");
//   const [message, setmessage] = useState("");
  const [Contacts, setContacts] = useState("");


  const handleFormSubmit = (e) =>{
    e.preventDefault()
    // localStorage.setItem("username", JSON.stringify(username))
    // localStorage.setItem("password", JSON.stringify(password))
    // localStorage.setItem("message", JSON.stringify(message))
    const Contacts = {
        username : "", 
        password : "", 
        message : "", 
    }
    localStorage.setItem("ContactData", JSON.stringify(Contacts))
  }

  return (
    <div className="container" style={{ width: "500px" }}>
      <div className="card">
        <h1 className="text-4xl mb-4">Contact Form</h1>

        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={Contacts.username}
            onChange={(e) => setusername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            value={Contacts.password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            required
            autoComplete="off"
            rows={"6"}
            value={Contacts.message}
            onChange={(e) => setmessage(e.target.value)}
          />

          <button
            type="submi"
            className="bg-blue-400 p-6 mt-2 text-white text-2xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
