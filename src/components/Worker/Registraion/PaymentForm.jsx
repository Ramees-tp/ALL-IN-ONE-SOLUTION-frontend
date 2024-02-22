import PropTypes from "prop-types";

const PaymentForm = ({ formData, setFormData }) => {
  // const [formData, setFormData] = useState({
  //   IFC: "",
  //   accountNumber: "",
  //   panCardNumber: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  return (
    <div className="w-full mx-auto flex flex-col  " >
      <div className="mb-4">
        <label
          className="block text-white text-sm font-semibold mb-2"
          htmlFor="IFC"
        >
          IFC Code
        </label>
        <input
          type="number"
          id="IFC"
          name="IFC"
          value={formData.IFC}
          onChange={(event) =>
            setFormData({ ...formData, IFC: event.target.value })
          }
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-white text-sm font-semibold mb-2"
          htmlFor="accountNumber"
        >
          Account Number
        </label>
        <input
          type="number"
          id="accountNumber"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={(event) =>
            setFormData({ ...formData, accountNumber: event.target.value })
          }
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-white text-sm font-semibold mb-2"
          htmlFor="panCardNumber"
        >
          Pan card Number
        </label>
        <input
          type="text"
          id="panCardNumber"
          name="panCardNumber"
          value={formData.panCardNumber}
          onChange={(event) =>
            setFormData({ ...formData, panCardNumber: event.target.value })
          }
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <hr className="" />

      <div className="mb-4 sm:w-[50%]">
        <label
          className="block text-white text-sm font-semibold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="text"
          id="password"
          name="password"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-white text-sm font-semibold mb-2"
          htmlFor="confirmPass"
        >
          Confirm Password
        </label>
        <div className="flex sm:flex-row flex-col self-end">
          <input
            type="text"
            id="confirmPass"
            name="confirmPass"
            value={formData.confirmPass}
            onChange={(event) =>
              setFormData({ ...formData, confirmPass: event.target.value })
            }
            className="sm:mb-0 mb-4 p-2 border rounded-md focus:outline-none focus:border-blue-500 sm:w-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
