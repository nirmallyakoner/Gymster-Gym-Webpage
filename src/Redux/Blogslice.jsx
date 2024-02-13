import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
const initialState = {
  blogs: [{}],
  oneBlogDetails: [{}],
  bannerData: [{}]
};
export const banner = createAsyncThunk("/getbanner", async (formData) => {
  let res = await axiosInstance.get(`/getbanner`, formData);
  let resData = res?.data;
  return resData;
});
export const blog = createAsyncThunk("/getblog", async (formData) => {
  let res = await axiosInstance.get(`/getblog`, formData);
  let resData = res?.data;
  return resData;
});

export const getblogdetails = createAsyncThunk(
  "/getblogdetails",
  async (id) => {
    let res = await axiosInstance.get(`/getblogdetails/${id}`);
    let resData = res?.data;
    console.log(resData);
    return resData;
  }
);

export const BlogSlice = createSlice({
  name: "Blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(banner.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(banner.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if (payload.success === true) {
          state.bannerData = payload.data;
        }
      })
      .addCase(banner.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(blog.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(blog.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if (payload.success === true) {
          state.blogs = payload.data;
        }
      })
      .addCase(blog.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(getblogdetails.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getblogdetails.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if ((payload.success = "true")) {
          console.log("fullfilled");
          state.oneBlogDetails = payload.data;
          console.log(state.oneBlogDetails);
        }
      })
      .addCase(getblogdetails.rejected, (state, action) => {
        state.status = "idle";
      });
  },
});
