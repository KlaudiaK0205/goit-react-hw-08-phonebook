import {createApi,fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

export const contacts = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://63a623adf8f3f6d4ab071286.mockapi.io/' }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
        contacts: builder.query({
        query: () => '/contacts',
        providesTags: ['Contacts']
        }),
        addContact: builder.mutation({
        query: (contact) => ({
            url: '/contacts',
            method: 'POST',
            body: contact
        }),
        invalidatesTags: ['Contacts']
        }),
        
        deleteContact: builder.mutation({
        query: (id) => ({
            url: `/contacts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Contacts']
        })
    })
    });

    export const {
    useContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation
} = contacts;