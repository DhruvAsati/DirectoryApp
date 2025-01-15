import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddPersonScreen from "./component/AddPerson";
import RetrieveScreen from "./component/Retrieve";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white shadow-lg py-4 mb-2">
          <h1 className="text-center text-3xl font-bold">Directory App</h1>
        </header>
        <nav className="flex justify-center space-x-8 py-4 bg-blue-500 shadow-md">
          <Link
            to="/"
            className="text-lg font-semibold text-white hover:text-blue-200 transition duration-300"
          >
            Add New Person
          </Link>
          <Link
            to="/retrieve"
            className="text-lg font-semibold text-white hover:text-blue-200 transition duration-300"
          >
            Retrieve Information
          </Link>
        </nav>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<AddPersonScreen />} />
            <Route path="/retrieve" element={<RetrieveScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
