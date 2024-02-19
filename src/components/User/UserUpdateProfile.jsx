import React, { useState } from "react";
import axiosInstance from "../../api/axios";
import { useNavigate } from "react-router-dom";

const UserUpdateProfile = ({ updateUser }) => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "ramees",
    lastName: "muhammad",
    DOB: "",
    phoneNumber: "57576557767",
    street: "kpr",
    district: "uhkj",
    pinCode: "765767",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.patch("/user/addDetails", formData);
      console.log(formData);
      if (response.status === 200) {
        navigate("/user/userProfile");
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        console.log("An error occured :", err);
        setError("An error occured.please try again.");
      }
    }

    // Pass formData to the updateUser function for further processing
    updateUser(formData);
    // Clear the form after submission
    setFormData({
      firstName: "",
      lastName: "",
      DOB: "",
      phoneNumber: "",
      address: {
        street: "",
        district: "",
        pinCode: "",
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
          className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
          className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="DOB"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Date of Birth
        </label>
        <input
          type="date"
          id="DOB"
          name="DOB"
          value={formData.DOB}
          onChange={handleChange}
          placeholder="Date of Birth"
          required
          className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="street"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Street
        </label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          placeholder="Street"
          required
          className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="district"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          District
        </label>
        <input
          type="text"
          id="district"
          name="district"
          value={formData.district}
          onChange={handleChange}
          placeholder="District"
          required
          className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="pinCode"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          PIN Code
        </label>
        <input
          type="text"
          id="pinCode"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          placeholder="PIN Code"
          required
          className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
      </div>
      <button
        type="submit"
        className="block w-full px-4 py-2 mt-4 text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600"
      >
        Update Details
      </button>
    </form>
  );
};

export default UserUpdateProfile;
