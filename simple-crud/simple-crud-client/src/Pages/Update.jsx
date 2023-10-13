import { useLoaderData } from "react-router-dom";

function Update() {
  const lodedUser = useLoaderData();
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const uodatedUser = { name, email };
    fetch(`http://localhost:5000/users/${lodedUser._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uodatedUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h2>
        update user name <strong>{lodedUser.name} </strong>{" "}
      </h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            defaultValue={lodedUser?.name}
            type="text"
            id="name"
            name="name"
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
            defaultValue={lodedUser?.email}
            type="text"
            id="email"
            name="email"
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
  );
}

export default Update;
