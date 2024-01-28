import { createSlice } from '@reduxjs/toolkit'

export const sliceUser = createSlice({
    name: 'sliceUser',

    initialState: {
        value: {
            user: {
                data: [],
            },
        },
    },

    reducers: {
        loadUser: (state, action) => {
         state.value.user.data = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    loadUser,
} = sliceUser.actions

export default sliceUser.reducer