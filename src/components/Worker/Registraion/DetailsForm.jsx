// InputForm.js
import UploadImage from "../../uploadImage/uploadImage";
import PropTypes from 'prop-types';

const DetailsForm = ({ formData, setFormData }) => {
  
  
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


  return (
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
            onChange={(event) => setFormData({ ...formData, firstName:event.target.value})}
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
            onChange={(event) => setFormData({ ...formData, lastName:event.target.value})}            className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
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
            onChange={(event) => setFormData({ ...formData, email:event.target.value})}            className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
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
            onChange={(event) => setFormData({ ...formData, phoneNumber:event.target.value})}            className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
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
            onChange={(event) => setFormData({ ...formData, gender:event.target.value})}            className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
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
            value={formData.district}
            onChange={(event) => setFormData({ ...formData, district:event.target.value})}            className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
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
            onChange={(event) => setFormData({ ...formData, dateOfBirth:event.target.value})}            className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
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
            value={formData.city}
            onChange={(event) => setFormData({ ...formData, city:event.target.value})}            className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
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
            value={formData.pinCode}
            onChange={(event) => setFormData({ ...formData, pinCode:event.target.value})}            className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <UploadImage handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

DetailsForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData:PropTypes.object.isRequired,
};

export default DetailsForm;
