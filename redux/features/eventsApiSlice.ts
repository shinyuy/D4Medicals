import { apiSlice } from '../services/apiSlice';

const eventsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // createEventsSession: builder.mutation({
    //   query: ({ timeMin, timeMax, location, centerId }) => {   
    //     return ({
    //     url: '/calendar/filtered-events/',
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ timeMin, timeMax, location, centerId }),
    //   })},
    // }),
    createEventsSession: builder.mutation({
      query: ({ timeMin, timeMax, location, centerId }) => {   
        return ({
        url: '/calendar/free-slots/',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timeMin, timeMax, location, centerId }),
      })},
    }),
    createEventSession: builder.mutation({
      query: ({ start, end, eventName, eventDescription, location, centerId }) => {   
        console.log(location)
        return ({
        url: '/calendar/create-event/',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ start, end, eventName, eventDescription, location, center_id: centerId }),
      })},
    }),
  }),
});

export const { useCreateEventsSessionMutation, useCreateEventSessionMutation } = eventsApiSlice;

