// JobForm.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

const JobForm = () => {
  const [formData, setFormData] = useState({
    jobType: "",
    workArea: "",
    adharNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <div className="sm:px-28 p-3 sm:py-10 bg-[#fbffc3] rounded-md shadow-md h-screen flex flex-col justify-center ">
      <div className=" bg-gray-400 sm:p-20 p-4 bg-gradient-to-b from-[#252e53] to-[#4d1438] rounded">
        <h1 className="text-3xl font-bold mb-2  border-b-2 border-white p-2 text-white">
          Work details
        </h1>
        <form
          className="w-full mx-auto flex flex-col self-end "
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="jobType"
            >
              Job Type
            </label>
            <select
              id="jobType"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Job Type</option>
              <option value="Plumber">Plumber</option>
              <option value="Electrician">Electrician</option>
              <option value="Carpenter">Carpenter</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="workArea"
            >
              Work Area
            </label>
            <input
              type="text"
              id="workArea"
              name="workArea"
              value={formData.workArea}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="adharNumber"
            >
              Aadhaar Number
            </label>
            <input
              type="text"
              id="adharNumber"
              name="adharNumber"
              value={formData.adharNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <Link to={"/worker/paymentForm"}>
            {" "}
            <button
              type="submit"
              className="ml-auto bg-green-700 text-white p-2 px-10 rounded-md font-semibold hover:bg-green-800"
            >
              Next
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
