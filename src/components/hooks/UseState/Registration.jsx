//* Registration Form Using Multiple State Variables

//todo  Tasks:

//? Set up a functional component in React.
//? Create five separate state variables (firstName, lastName, email, password, phoneNumber).
//? Create input fields for each piece of information.
//? Implement onChange handlers to update state variables.
//? Discuss the benefits and drawbacks of this approach.

import "./index.css";
import { useState, useEffect } from "react";

export const RegistrationForm = () => {
  // Initialize state with data from localStorage if it exists
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("registrationData");
    return savedData
      ? JSON.parse(savedData)
      : {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phoneNumber: "",
        };
  });

  const { firstName, lastName, email, password, phoneNumber } = formData;

  // Save to localStorage whenever form data changes
  useEffect(() => {
    localStorage.setItem("registrationData", JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Phone number validation
    if (name === "phone") {
      // Only allow numbers and limit to 10 digits
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prevData) => ({
        ...prevData,
        phoneNumber: numericValue,
      }));
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    // Optional: Clear form after submission
    // setFormData({
    //   firstName: "", lastName: "", email: "", password: "", phoneNumber: ""
    // });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter firstName"
            required
            value={firstName}
            onChange={handleInputChange}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter lastName"
            required
            value={lastName}
            onChange={handleInputChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            value={password}
            onChange={handleInputChange}
          />

          <label htmlFor="phonenumber">
            <b>Phone Number</b>
          </label>
           <input
            type="phone"
             placeholder="Enter 10 digit number"
            maxLength="10"
            pattern="[0-9]{10}"
            required
            value={phoneNumber}
            onChange={handleInputChange}
          />
          {/* <input
            type="tel"
            name="phone"
            placeholder="Enter 10 digit number"
            maxLength="10"
            pattern="[0-9]{10}"
            required
            value={phoneNumber}
            onChange={handleInputChange}
          /> */}

          <p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>

          <div className="clearfix">
            <button type="submit" className="button">
              Sign Up
            </button>
          </div>
        </div>
      </form>

      <section
        className="summary"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        <p>
          Hello, my name is
          <span>
            {firstName} {lastName}
          </span>
          . My email address is <span>{email}</span> and my phone number is
          <span>{phoneNumber}</span>.
        </p>
      </section>
    </>
  );
};
