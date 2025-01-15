import React, { useState, useEffect } from "react";

const RetrieveScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const storedPeople = JSON.parse(localStorage.getItem("people"));
    if (storedPeople) {
      setPeople(storedPeople);
    }
  }, []);

  const filteredPeople = people.filter(
    (person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.mobile.includes(searchTerm)
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Retrieve Information</h2>
      <input
        type="text"
        placeholder="Search by Name or Mobile"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded w-full mb-4"
      />
      {filteredPeople.length > 0 ? (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Date of Birth</th>
              <th className="border border-gray-300 px-4 py-2">Aadhar</th>
              <th className="border border-gray-300 px-4 py-2">Mobile</th>
              <th className="border border-gray-300 px-4 py-2">Age</th>
            </tr>
          </thead>
          <tbody>
            {filteredPeople.map((person, index) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No data found</p>
      )}
    </div>
  );
};

export default RetrieveScreen;
