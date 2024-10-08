import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const scoreApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        getScores: builder.query({
            query: () => 'api/scores',
        }),

        addScore: builder.mutation({
            query: (newScore) => ({
                url: 'api/scores',
                method: 'POST',
                body: newScore,
            }),
        }),
    }),
});

export const { useGetScoresQuery, useAddScoreMutation } = scoreApi;