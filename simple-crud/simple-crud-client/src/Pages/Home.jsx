import React, { useState } from "react";
import { json } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("user added");
          setEmail("");
          setName("");
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Simpul CRUD</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="p-2 text-white transition-colors bg-indigo-500 rounded-md hover:bg-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
