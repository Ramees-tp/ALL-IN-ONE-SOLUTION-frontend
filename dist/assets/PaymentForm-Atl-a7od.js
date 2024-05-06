import{r as m,j as e}from"./index-VtKBlMu3.js";const i=({formData:s,setFormData:n})=>{const[t,l]=m.useState({IFC:!1,accountNumber:!1,panCardNumber:!1,password:!1,confirmPass:!1}),a=r=>/^[A-Z]{4}[0][A-Z0-9]{6}$/.test(r),d=r=>/^\d{9,18}$/.test(r),u=r=>/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(r),o=r=>r.length>=8;return e.jsxs("div",{className:"w-full mx-auto flex flex-col  ",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-white text-sm font-semibold mb-2",htmlFor:"IFC",children:"IFC Code"}),e.jsx("input",{type:"text",id:"IFC",name:"IFC",value:s.IFC,onChange:r=>n({...s,IFC:r.target.value}),onBlur:()=>l({...t,IFC:!0}),className:`w-full tm:p-2 p-2 border rounded-md focus:outline-none ${t.IFC&&a(s.IFC)?"border-blue-500":"border-red-500"}`}),t.IFC&&!a(s.IFC)&&e.jsx("p",{className:"text-red-500 text-sm",children:"Invalid IFC code"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-white text-sm font-semibold mb-2",htmlFor:"accountNumber",children:"Account Number"}),e.jsx("input",{type:"number",id:"accountNumber",name:"accountNumber",value:s.accountNumber,onChange:r=>n({...s,accountNumber:r.target.value}),onBlur:()=>l({...t,accountNumber:!0}),className:`w-full tm:p-2 p-2 border rounded-md focus:outline-none ${t.accountNumber&&d(s.accountNumber)?"border-blue-500":"border-red-500"}`}),t.accountNumber&&!d(s.accountNumber)&&e.jsx("p",{className:"text-red-500 text-sm",children:"Invalid account number"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-white text-sm font-semibold mb-2",htmlFor:"panCardNumber",children:"Pan card Number"}),e.jsx("input",{type:"text",id:"panCardNumber",name:"panCardNumber",value:s.panCardNumber,onChange:r=>n({...s,panCardNumber:r.target.value}),onBlur:()=>l({...t,panCardNumber:!0}),className:`w-full tm:p-2 p-2 border rounded-md focus:outline-none ${t.panCardNumber&&u(s.panCardNumber)?"border-blue-500":"border-red-500"}`}),t.panCardNumber&&!u(s.panCardNumber)&&e.jsx("p",{className:"text-red-500 text-sm",children:"Invalid PAN card number"})]}),e.jsx("hr",{className:""}),e.jsxs("div",{className:"mb-4 ",children:[e.jsx("label",{className:"block text-white text-sm font-semibold mb-2",htmlFor:"password",children:"Password"}),e.jsx("input",{type:"text",id:"password",name:"password",value:s.password,onChange:r=>n({...s,password:r.target.value}),onBlur:()=>l({...t,password:!0}),className:" tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500 sm:w-[50%] tm:w-[50%] w-[80%]"}),t.password&&!o(s.password)&&e.jsx("p",{className:"text-red-500 text-sm",children:"Password must be at least 8 characters long"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-white text-sm font-semibold mb-2",htmlFor:"confirmPass",children:"Confirm Password"}),e.jsx("div",{className:"flex sm:flex-row flex-col self-end",children:e.jsx("input",{type:"text",id:"confirmPass",name:"confirmPass",value:s.confirmPass,onChange:r=>n({...s,confirmPass:r.target.value}),className:"sm:mb-0 mb-4 tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500 sm:w-[50%] tm:w-[50%] w-[80%]"})})]})]})};export{i as default};
