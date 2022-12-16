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
        getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
        getSongDetails: builder.query({ query: (songid) => `/tracks/details?track_id=${songid}` }),
        getRelatedSongs: builder.query({ query: (songid) => `/tracks/related?track_id=${songid}` }),
        // getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}`}) review the new endpoint v2
        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` })
    })
})

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetRelatedSongsQuery,
    // useGetArtistDetailsQuery
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery
} = shazamCoreApi;