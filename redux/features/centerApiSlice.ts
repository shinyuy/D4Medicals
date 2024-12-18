import { apiSlice } from '../services/apiSlice';

const centerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveCentersByLocation: builder.query({
      query: (location) => ({
          url: `/center/location/get/?location=${location}`,
          method: 'GET',
      }),
  }),
    retrieveCenterLocations: builder.query({
      query: () => ({
          url: `/center/locations/get/`,
          method: 'GET',
      }),
  }),
    retrieveCenters: builder.query({
      query: () => ({
          url: '/center/get/',
          method: 'GET',
      }),
  }),
    createCenterSession: builder.mutation({
      query: ({ centerName, location, earliestDate,fullAddress, openFrom,closesAt }) => { 
        return ({
        url: '/center/create/',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ center_name: centerName, location, earliest_date: earliestDate, full_address: fullAddress, open_from: openFrom, closes_at: closesAt }),
      })},
    }),
  }),
});

export const { useRetrieveCentersQuery, useCreateCenterSessionMutation, useRetrieveCentersByLocationQuery, useRetrieveCenterLocationsQuery } = centerApiSlice;

