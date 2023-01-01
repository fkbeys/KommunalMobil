import { MobileUserLoginResultModel } from "../Model/Login/MobileUserLoginResultModel";


const ReadUserFromLocal = (): MobileUserLoginResultModel => {

    const obj = JSON.parse(localStorage.getItem("userInfo") || "") as MobileUserLoginResultModel;

    return obj;
}


export default ReadUserFromLocal