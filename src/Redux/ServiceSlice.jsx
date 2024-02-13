import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  serviceDetails: [{}],
  oneServiceDetails: [{}],
  trainerDetail: [{}],
  testimonialData: [{}],
  bookinglistdata: [{}],
  status: "",
};

export const services = createAsyncThunk("/getservice", async (formData) => {
  let res = await axiosInstance.get(`/getservice`, formData);
  let resData = res?.data;
  return resData;
});
export const serviceDetails = createAsyncThunk(
  "/getservicedetails",
  async (id) => {
    let res = await axiosInstance.get(`/getservicedetails/${id}`);
    let resData = res?.data;
    return resData;
  }
);

export const trainer = createAsyncThunk("/gettrainer", async (formData) => {
  let res = await axiosInstance.get(`/gettrainer`, formData);
  let resData = res?.data;
  return resData;
});

export const testimonial = createAsyncThunk(
  "/gettestimonial",
  async (formData) => {
    let res = await axiosInstance.get(`/gettestimonial`, formData);
    let resData = res?.data;
    return resData;
  }
);
export const bookinglist = createAsyncThunk("/viewBooking", async (id) => {
  let res = await axiosInstance.get(`/viewBooking/${id}`);
  let resData = res?.data;
  return resData;
});
export const booking = createAsyncThunk("/booking", async (formData) => {
  let res = await axiosInstance.post(`/booking`, formData, {
    headers: {
      "Content-Type": "application/json", // adjust this based on your server expectations
    },
  });
  let resData = res?.data;
  return resData;
});

export const ServiceSlice = createSlice({
  name: "Service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(services.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(services.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if ((payload.status = "true")) {
          state.serviceDetails = payload.data;
        }
      })
      .addCase(services.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(serviceDetails.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(serviceDetails.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if ((payload.success = "true")) {
          state.oneServiceDetails = payload.data;
        }
      })
      .addCase(serviceDetails.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(trainer.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(trainer.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if ((payload.success = "true")) {
          state.trainerDetail = payload.data;
        }
      })
      .addCase(trainer.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(testimonial.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(testimonial.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if ((payload.status = "true")) {
          state.testimonialData = payload.data;
        }
      })
      .addCase(testimonial.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(booking.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(booking.fulfilled, (state, { payload }) => {
        state.status = "idle";
      })
      .addCase(booking.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(bookinglist.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(bookinglist.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if (payload.status === 200) {
          state.bookinglistdata = payload.result;
        }
      })
      .addCase(bookinglist.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});
