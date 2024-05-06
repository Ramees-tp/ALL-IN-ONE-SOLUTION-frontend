import{r as c,j as e}from"./index-VtKBlMu3.js";const y=({formData:s,setFormData:r})=>{const[i,n]=c.useState(""),[d,m]=c.useState([]),[b,x]=c.useState(null),u=i.split(",");u.length>=2&&u[0].trim();const j=o=>{const t=o.target.value;n(t),clearTimeout(b);let l=setTimeout(()=>{v(t)},2e3);x(l)},v=o=>{fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(o)}`).then(t=>t.json()).then(t=>{const l=t.map(a=>a.display_name);m(l)}).catch(t=>console.error("Error:",t))},f=o=>{n(o),m([]),fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(o)}`).then(t=>t.json()).then(t=>{if(t.length>0){const{lat:l,lon:a}=t[0],h=t[0].display_name,p=h.split(","),g=p.length>=2?p[0].trim():"";n(h),r({...s,coordinates:[parseFloat(a),parseFloat(l)],workArea:g})}}).catch(t=>console.error("Error:",t))};return e.jsxs("div",{className:"w-full mx-auto flex flex-col self-end",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-white text-sm font-semibold mb-2",htmlFor:"jobType",children:"Job Type"}),e.jsxs("select",{id:"jobType",name:"jobType",value:s.jobType,onChange:o=>r({...s,jobType:o.target.value}),className:"w-full p-2 border rounded-md focus:outline-none focus:border-blue-500",children:[e.jsx("option",{value:"",children:"Select Job Type"}),e.jsx("option",{value:"Plumber",children:"Plumber"}),e.jsx("option",{value:"Electrician",children:"Electrician"}),e.jsx("option",{value:"Carpenter",children:"Carpenter"}),e.jsx("option",{value:"Woodcutter",children:"Woodcutter"}),e.jsx("option",{value:"Gardene",children:"Gardene"}),e.jsx("option",{value:"Plasterer",children:"Plasterer"}),e.jsx("option",{value:"Masons",children:"Masons"})]})]}),e.jsxs("div",{className:"mb-4 w-full",children:[e.jsx("label",{className:"block text-white text-sm font-semibold mb-2",htmlFor:"workArea",children:"Work Area"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:"w-full tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500",type:"text",value:i,onChange:j,placeholder:"Enter Area For Work"}),d.length>0&&e.jsx("div",{className:"bg-white border rounded-md absolute w-full",style:{top:"100%"},children:d.map((o,t)=>e.jsxs("div",{className:"p-1 border-b-gray-500 border-b-2 text-sm",onClick:()=>f(o),children:[o," "]},t))})]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-white text-sm font-semibold mb-2",htmlFor:"adharNumber",children:"Aadhaar Number"}),e.jsx("input",{type:"number",placeholder:"Please Enter Adhar Number",id:"adharNumber",name:"adharNumber",value:s.adharNumber,onChange:o=>r({...s,adharNumber:o.target.value}),className:"w-full tm:p-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"})]})]})};export{y as default};
