import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./Authslice";
import { BlogSlice } from "./Blogslice";
import { ServiceSlice } from "./ServiceSlice";

export const store = configureStore({
    reducer: {
        Auth: AuthSlice.reducer,
        Blog: BlogSlice.reducer,
        Service: ServiceSlice.reducer
    }
})