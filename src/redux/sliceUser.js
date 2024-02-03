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
            state.value.user.data = action.payload;
        },
        removeUser: (state, action) => {
            state.value.user.data = [];
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    loadUser,
    removeUser,
} = sliceUser.actions

export default sliceUser.reducer