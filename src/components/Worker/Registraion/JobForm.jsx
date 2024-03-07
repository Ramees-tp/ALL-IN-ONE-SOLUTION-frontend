import { useState } from "react";
import PropTypes from "prop-types";

// const cageAPI = 'd2830f7b3655486382ad0349c864e4be'

const JobForm = ({ formData, setFormData }) => {
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  console.log("location:", location);

  const parts = location.split(',');
const exactLocation = parts.length >= 2 ? parts[0].trim() : '';
console.log(exactLocation);



const handleLocationChange = (event) => {
  const value = event.target.value;
  setLocation(value);

  // Fetch place suggestions from Nominatim API
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(value)}`)
    .then(response => response.json())
    .then(data => {
      const suggestions = data.map(item => item.display_name);
      setSuggestions(suggestions);
    })
    .catch(error => console.error('Error:', error));
};


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
          setLocation(placeName);
          console.log("Nominatim:", lat, lon);
  
          setFormData({
            ...formData,
            coordinates: [parseFloat(lon), parseFloat(lat)],
            workArea: exactLocation
          });
        }
      })
      .catch(error => console.error('Error:', error));
  };
  


  return (
    <div className="w-full mx-auto flex flex-col self-end">
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
          onChange={(event) =>
            setFormData({ ...formData, jobType: event.target.value })
          }
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Job Type</option>
          <option value="Plumber">Plumber</option>
          <option value="Electrician">Electrician</option>
          <option value="Carpenter">Carpenter</option>
        </select>
      </div>

      <div className="mb-4 w-full">
      <label
        className="block text-white text-sm font-semibold mb-2"
         htmlFor="workArea"
      >
      Work Area
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
          className="block text-white text-sm font-semibold mb-2"
          htmlFor="adharNumber"
        >
          Aadhaar Number
        </label>
        <input
          type="number"
          id="adharNumber"
          name="adharNumber"
          value={formData.adharNumber}
          onChange={(event) =>
            setFormData({ ...formData, adharNumber: event.target.value })
          }
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

JobForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default JobForm;
