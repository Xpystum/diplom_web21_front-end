import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'dataState',
  initialState: {
    value: true
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },

    loaderSwitch: (state, action) => {
      state.value = action.payload
    },

    reloadMenu: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reloadMenu, loaderSwitch } = dataSlice.actions

export default dataSlice.reducer