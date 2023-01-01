import axios from 'axios';
import Url from '../Const/Url';
import { ApiResultModelSingle } from '../Model/Generic/ApiResultModel';
import { MobileUserLoginRequestModel } from '../Model/Login/MobileUserLoginRequestModel';
import { MobileUserLoginResultModel } from '../Model/Login/MobileUserLoginResultModel';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function LoginManager(model: MobileUserLoginRequestModel) {

    const url = Url.LoginUrl;

    let result = await (await axios.post<ApiResultModelSingle>(url, model));

    var data = result.data.data as MobileUserLoginResultModel;

    if (result.status === 200) {

        // localStorage.setItem("userInfo", JSON.stringify(result.data));
        await AsyncStorage.setItem('userInfo', JSON.stringify(data));
    }



    return data;

}
export default LoginManager;