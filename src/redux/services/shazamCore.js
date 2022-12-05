import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", "e2f457c9a7msh5b63fa19d174e4fp1b200bjsn3e6324500b12");
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => "/charts/world" }),
    })
})

export const { useGetTopChartsQuery } = shazamCoreApi;