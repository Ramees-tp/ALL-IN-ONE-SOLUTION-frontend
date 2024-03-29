/* eslint-disable react/prop-types */
import { useState } from "react";
import axiosInstance from "../../api/axios";
import { useNavigate } from "react-router-dom";


const UserUpdateProfile = () => {

  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  console.log(location);

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion);
    setSuggestions([]);
  

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(suggestion)}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          const placeName = data[0].display_name;
          console.log(placeName);
  
          const part = placeName.split(',');
          const exactLocation = part.length >= 2 ? part[0].trim() : '';
          
          setLocation(exactLocation || '');
          setCoordinates ([parseFloat(lon), parseFloat(lat)]),
          // setCoordinates ([parseFloat(lon), parseFloat(lat)].map(Number)),
          console.log("Nominatim:", lat, lon);
          
        }
      })
      .catch(error => console.error('Error:', error));
      setSuggestions([]);
  };
  

const handleLocationChange = (event) => {
  const value = event.target.value;
  setLocation(value);

  
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(value)}`)
    .then(response => response.json())
    .then(data => {
      const suggestions = data.map(item => item.display_name);
      setSuggestions(suggestions);
    })
    .catch(error => console.error('Error:', error));
};


  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    DOB: "",
    phoneNumber: "",
    district: "",
    pinCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setFormData((prevData) => ({
      ...prevData,
      userImage: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const updatedFormData = {
        ...formData,
        coordinates: coordinates,
        city: location
      };
      console.log(updatedFormData);

    const formDataToSend = new FormData();
      Object.keys(updatedFormData).forEach((key) => {
      formDataToSend.append(key, updatedFormData[key]);
    });

      const response = await axiosInstance.put("/user/addDetails", formDataToSend);
      if (response.status === 200) {
        navigate("/user/userProfiles");
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        console.log("An error occured :", err);
        setError("An error occured.please try again.");
      }
    }


    setFormData({
      firstName: "",
      lastName: "",
      DOB: "",
      phoneNumber: "",
      address: {
        district: "",
        pinCode: "",
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-3">
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
          htmlFor="city"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          city
        </label>

        <div className="relative">
          <input className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="text" value={location} onChange={handleLocationChange} />
           {suggestions.length > 0 && (
             <div className="bg-white border rounded-md absolute w-full" style={{ top: '100%' }}>
               {suggestions.map((suggestion, index) => (
                 <div className="p-1 border-b-gray-500 border-b-2 text-sm" key={index} onClick={() => handleSuggestionClick(suggestion)}>{suggestion} </div>
               ))}
             </div>
           )}
          </div>

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
        <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor="profileImage"
          >
            image
          </label>
          <input
            type="file"
            id="userImage"
            name="userImage"
            // value={formData.profileImage}
            onChange={handleImageChange}           
            className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
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
