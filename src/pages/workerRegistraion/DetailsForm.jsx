// InputForm.js

import React, { useState } from "react";
import UploadImage from "../../components/uploadImage/uploadImage";
import { Link } from "react-router-dom";

const DetailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    address: {
      district: "",
      city: "",
      pinCode: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <div className="sm:px-28 p-3 sm:py-10 bg-[#fbffc3] ">
      <form
        className="flex flex-col self-end space-y-3  bg-gradient-to-b from-[#252e53] to-[#4d1438] p-5 rounded"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl sm:text-4xl font-bold mb-2  border-b-2 border-white p-2 text-white">
          Personal Details
        </h2>
        <div className="md:flex gap-x-10">
          <div className="md:w-[50%]">
            <div className="mb-2">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="md:w-[50%]">
            <div className="mb-2">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="district"
              >
                District
              </label>
              <input
                type="text"
                id="district"
                name="address.district"
                value={formData.address.district}
                onChange={handleChange}
                className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="dateOfBirth"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="address.city"
                value={formData.address.city}
                onChange={handleChange}
                className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="pinCode"
              >
                Pin Code
              </label>
              <input
                type="text"
                id="pinCode"
                name="address.pinCode"
                value={formData.address.pinCode}
                onChange={handleChange}
                className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <UploadImage handleChange={handleChange} />
            </div>
          </div>
        </div>
        <Link to={"/worker/jobDetailsForm"}>
          <button
            type="submit"
            className="ml-auto  bg-green-700 text-white p-2 px-10 rounded-md font-semibold hover:bg-green-800"
          >
            Next
          </button>
        </Link>
      </form>
    </div>
  );
};

export default DetailsForm;
