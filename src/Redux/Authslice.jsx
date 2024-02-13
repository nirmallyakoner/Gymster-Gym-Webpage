import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "./Helper";

const initialState = {
  isToggle: localStorage.getItem("token") ? true : false,
  loginId: "",
  status: "",
};

export const register = createAsyncThunk("/register", async (formData) => {
  let res = await axiosInstance.post(`/register`, formData);
  let resData = res?.data;
  console.log(resData);
  return resData;
});

export const login = createAsyncThunk("/login", async (formData) => {
  let res = await axiosInstance.post(`/login`, formData, {
    headers: {
      "Content-Type": "application/json", // adjust this based on your server expectations
    },
  });
  let resData = res?.data;
  return resData;
});

export const logout = createAsyncThunk("/logout", async () => {
  // Perform logout actions
});

export const AuthSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    Token_remove: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("_id");
      state.isToggle = false;
      state.user = null;
      toast("You are Logged Out");
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(register.pending, (state, action) => {
      state.status = "loading";
    })
    .addCase(register.fulfilled, (state, { payload }) => {
      state.status = "idle";
      toast(payload.message)
    })
    .addCase(register.rejected, (state, action) => {
      state.status = "idle";
    })
    .addCase(login.pending, (state, action) => {
      state.status = "loading";
    })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if (payload.status === 200) {
          localStorage.setItem("token", payload.token);
          localStorage.setItem("name", payload.data.name);
          localStorage.setItem("email", payload.data.email);
          localStorage.setItem("_id", payload.data._id);
          state.isToggle = true;
          state.loginId = payload.data._id;
          toast(payload.message);
        } else {
          toast(payload.message);
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(logout.fulfilled, (state, action) => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("_id");
        state.isToggle = false;
        state.loginId = "";
        toast("You are Logged Out");
      });
  },
});

export const { Token_remove } = AuthSlice.actions;
