import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function About() {
  const loadedusers = useLoaderData();
  const [users, setusers] = useState(loadedusers);
  // console.log(userData);
  const handleDeletUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = users.filter((user) => user._id !== id);
        setusers(remaining);
      });
  };
  return (
    <div className="min-h-screen">
      <h2>i have user : {users.length}</h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email}
            <Link to={`/update/${user._id}`}>
              <button className="mx-4 btn btn-info">Update</button>
            </Link>
            <button onClick={() => handleDeletUser(user._id)} className="btn">
              X
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default About;
