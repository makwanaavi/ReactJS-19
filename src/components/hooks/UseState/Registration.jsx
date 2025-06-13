import "./index.css";
import { useState } from "react";

export const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;

      case "lastName":
        setLastName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "phone":
        setPhoneNumber(value);
        break;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };

    console.log(formData);
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

          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>

          <input
            type="phone"
            name="phone"
            placeholder="9876543211"
            required
            value={phoneNumber}
            onChange={handleInputChange}
          />

          <p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>

          <div className="clearfix">
            <button type="submit" className="btn">
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

// import { useState } from 'react';

// function Registration() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
//           Registration
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Username
//             </label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//               placeholder="Enter your username"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//               placeholder="Confirm your password"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
//           >
//             Register
//           </button>
//         </form>

//         <p className="mt-6 text-center text-gray-600">
//           Already have an account?{' '}
//           <a href="#" className="text-blue-600 hover:underline">
//             Login here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Registration;
