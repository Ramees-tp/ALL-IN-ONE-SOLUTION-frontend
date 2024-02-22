import PropTypes from "prop-types";

const JobForm = ({ formData, setFormData }) => {
  return (
    <div className="w-full mx-auto flex flex-col self-end ">
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
          onChange={(event) =>
            setFormData({ ...formData, workArea: event.target.value })
          }
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

export default JobForm;
