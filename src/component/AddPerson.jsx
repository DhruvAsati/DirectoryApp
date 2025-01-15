import React, { useState, useEffect } from "react";

const AddPersonScreen = () => {
  const [showForm, setShowForm] = useState(false);
  const [people, setPeople] = useState(() => {
    const storedPeople = localStorage.getItem("people");
    return storedPeople ? JSON.parse(storedPeople) : [];
  });

  const [newPerson, setNewPerson] = useState({
    name: "",
    dob: "",
    aadhar: "",
    mobile: "",
    age: "",
  });

  // Synchronize people with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPerson((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPerson = () => {
    if (
      newPerson.name &&
      newPerson.dob &&
      newPerson.aadhar.length === 12 &&
      newPerson.mobile.length === 10 &&
      newPerson.age
    ) {
      setPeople((prevPeople) => [...prevPeople, newPerson]);
      setNewPerson({ name: "", dob: "", aadhar: "", mobile: "", age: "" });
      setShowForm(false);
    } else {
      alert("Please fill out all fields correctly.");
    }
  };

  const handleDeletePerson = (index) => {
    const updatedPeople = people.filter((_, i) => i !== index);
    setPeople(updatedPeople);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Person</h2>
      {people.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Date of Birth</th>
                <th className="border border-gray-300 px-4 py-2">Aadhar</th>
                <th className="border border-gray-300 px-4 py-2">Mobile</th>
                <th className="border border-gray-300 px-4 py-2">Age</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-50 transition-all`}
                >
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{person.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{person.dob}</td>
                  <td className="border border-gray-300 px-4 py-2">{person.aadhar}</td>
                  <td className="border border-gray-300 px-4 py-2">{person.mobile}</td>
                  <td className="border border-gray-300 px-4 py-2">{person.age}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleDeletePerson(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-all"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <button
        onClick={() => setShowForm(!showForm)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition-all"
      >
        Add Person
      </button>
      {showForm && (
        <div className="mt-4 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newPerson.name}
            onChange={handleInputChange}
            className="border border-gray-300 px-4 py-2 rounded w-full"
          />
          <input
            type="date"
            name="dob"
            value={newPerson.dob}
            onChange={handleInputChange}
            className="border border-gray-300 px-4 py-2 rounded w-full"
          />
          <input
            type="text"
            name="aadhar"
            placeholder="Aadhar"
            maxLength={12}
            value={newPerson.aadhar}
            onChange={handleInputChange}
            className="border border-gray-300 px-4 py-2 rounded w-full"
          />
          <input
            type="text"
            name="mobile"
            maxLength={10}
            placeholder="Mobile"
            value={newPerson.mobile}
            onChange={handleInputChange}
            className="border border-gray-300 px-4 py-2 rounded w-full"
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={newPerson.age}
            onChange={handleInputChange}
            className="border border-gray-300 px-4 py-2 rounded w-full"
          />
          <button
            onClick={handleAddPerson}
            className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition-all"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPersonScreen;
