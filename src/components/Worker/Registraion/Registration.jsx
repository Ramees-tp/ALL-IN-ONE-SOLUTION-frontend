import { useState } from "react";
import DetailsForm from "./DetailsForm";
import JobForm from "./JobForm";
import PaymentForm from "./PaymentForm";
import axiosInstance from "../../../api/axios";
import { useNavigate } from "react-router-dom";


const Registration = () => {
  const navigate = useNavigate(); 
 


  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "@gmail.com",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    district: "",
    city: "",
    pinCode: "",
    jobType: "",
    workArea: "",
    coordinates: [ null, null ],
    adharNumber: "56567656756",
    IFC: "766575757",
    accountNumber: "643654637825",
    panCardNumber: "HWOPP155Q",
    password: "StrongP@ssword1",
    confirmPass: "StrongP@ssword1",
  });

  console.log(formData)

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const formTitles = ["Personal Details", "Work Details", "Payment Details"];

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return <DetailsForm formData={formData} setFormData={setFormData} />;
      case 1:
        return <JobForm formData={formData} setFormData={setFormData} />;
      case 2:
        return <PaymentForm formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  const handleSignup = async () => {
    const response = await axiosInstance.post("/worker/registration", formData,{
        withCredentials: true
    });
    if (response.status === 200) {
      const Token = response.data.Token;
      console.log(Token);
      localStorage.setItem("wjwt", Token);

      navigate("/worker/whome");

      // setError(response.data.message);
    }
  };

  return (
    <div className="sm:px-64 p-3 sm:py-10 bg-[#fbffc3]">
      <div className="form">
        <div className="w-full">
          <div
            style={{
              width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
            }}
            className="progressBar bg-red-500 h-3 mb-5 rounded"
          ></div>
        </div>
        <div className="formContainer  flex flex-col self-end space-y-3  bg-gradient-to-b from-[#252e53] to-[#4d1438] p-5 rounded">
          <div className="header text-2xl sm:text-4xl font-bold mb-2  border-b-2 border-white p-2 text-white">
            {formTitles[page]}
          </div>
          <div className="body">{pageDisplay()}</div>
          <div className="footer flex">
            <button
              className="  bg-gray-500 text-white p-2 px-10 rounded-md font-semibold hover:bg-gray-700"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              className="ml-auto  bg-green-700 text-white p-2 px-10 rounded-md font-semibold hover:bg-green-800 cursor-pointer"
            //   disabled={page === formTitles.length - 1}
              onClick={() => {
                if (page === formTitles.length - 1) {
                  handleSignup();
                  
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
              
            >
              {page === formTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

