import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


//login - // content save by post method
export const loginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody,"")
}


//all complaints 

export const getAllcomplaintApi = async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/allcomplaints`,"",reqHeader)
}
