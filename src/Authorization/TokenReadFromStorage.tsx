import { MobileUserLoginResultModel } from "../Model/Login/MobileUserLoginResultModel";




const TokenReadFromStorage = (): string => {

    const obj = JSON.parse(localStorage.getItem("userInfo") || "") as MobileUserLoginResultModel;
    const readToken = "Bearer " + obj?.token;
    return readToken;
}


export default TokenReadFromStorage