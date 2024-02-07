// JobDetailsForm.js

import React, { useState } from "react";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    IFC: "",
    accountNumber: "",
    panCardNumber: "",
    password: "",
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
    <div className="sm:px-12 md:px-28 p-3 py-10 bg-[#fbffc3] rounded-md shadow-md flex flex-col justify-center h-screen">
      <div className="rounded bg-gray-400 md:p-20 sm:p-10 p-4 bg-gradient-to-b from-[#252e53] to-[#4d1438]">
        <h1 className="text-3xl font-bold mb-2  border-b-2 border-white p-2 text-white">
          Payment Details
        </h1>
        <form
          className="w-full mx-auto flex flex-col  "
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="jobType"
            >
              IFC Code
            </label>
            <input
              type="text"
              id="workArea"
              name="workArea"
              value={formData.IFC}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="workArea"
            >
              Account Number
            </label>
            <input
              type="text"
              id="workArea"
              name="workArea"
              value={formData.accountNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="adharNumber"
            >
              Pan card Number
            </label>
            <input
              type="text"
              id="adharNumber"
              name="adharNumber"
              value={formData.panCardNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <hr className="" />

          <div className="mb-4 sm:w-[50%]">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="adharNumber"
            >
              Password
            </label>
            <input
              type="text"
              id="adharNumber"
              name="adharNumber"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="adharNumber"
            >
              Confirm Password
            </label>
            <div className="flex sm:flex-row flex-col self-end">
              <input
                type="text"
                id="adharNumber"
                name="adharNumber"
                value={formData.password}
                onChange={handleChange}
                className="sm:mb-0 mb-4 p-2 border rounded-md focus:outline-none focus:border-blue-500 sm:w-[50%]"
              />
              <button
                type="submit"
                className="ml-auto bg-green-700 text-white p-2 px-10 rounded-md font-semibold hover:bg-green-800"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
