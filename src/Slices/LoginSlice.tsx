import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import LoginManager from "../Managers/LoginManager";
import { ApiResultModelSingle } from "../Model/Generic/ApiResultModel";
import { ApiResultPaginationModel } from "../Model/Generic/ApiResultPaginationModel";
import { MobileUserLoginRequestModel } from "../Model/Login/MobileUserLoginRequestModel";
import { MobileUserLoginResultModel } from "../Model/Login/MobileUserLoginResultModel";

interface LoginSliceModel {
    LoginList: MobileUserLoginResultModel,
    totalPages: number
    currentPage: number
    itemsCount: number
    isBusy: boolean
    errorMessage: string
}
export const AsyncGetLogin = createAsyncThunk("LoginSlice/AsyncGetLogin", async (model: MobileUserLoginRequestModel) => {
    try {
        const apiResult = await LoginManager(model);
        return apiResult;

    } catch (error) {
        return error;
    }
});

const LoginSlice = createSlice({
    name: "LoginSlice",
    initialState: {} as LoginSliceModel,

    reducers: {

        bos: (state, action) => {

        },
    },
    extraReducers: (builder) => (

        builder.addCase(AsyncGetLogin.pending, (state, action) => {
            state.isBusy = true;
        }).addCase(AsyncGetLogin.fulfilled, (state, action) => {
            state.isBusy = false;
            const data = action.payload as MobileUserLoginResultModel;
            state.LoginList = data;
            state.errorMessage = "";
        }).addCase(AsyncGetLogin.rejected, (state, action) => {
            state.isBusy = false;
            console.log('Login slicerin icinde hata var!!!');
            state.errorMessage = "Login slicer hata verdi";
        })
    ),
});


export const { bos } = LoginSlice.actions;
export default LoginSlice;  