import { createSlice } from '@reduxjs/toolkit'

export const sliceChat = createSlice({
    name: 'sliceChat',

    initialState: {
        value: {
            chat: {
                messages: [],
            },
        },
    },

    reducers: {
        loadMessages: (state, action) => {
            state.value.chat.messages = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    loadMessages,
} = sliceChat.actions

export default sliceChat.reducer