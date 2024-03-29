import axios from "axios";

const commonRequest=async(methods,url,body,header)=>{
    let config={
        method:methods,
        url,
        headers:header?header:{
            "Content-Type":"application/json"
        },
        data:body
    }
    return axios(config).then((data)=>{
        return data
    }).catch((err)=>{
      return err  
    })
}

module.exports=commonRequest