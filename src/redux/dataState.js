import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'dataState',
  initialState: {
    value: {
      app: {
        loader: true,
      },
      mainMenu: [],
      products: []
    }
  },
  reducers: {
    // increment: state => {
    //   state.value += 1
    // },
    // decrement: state => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value = action.payload
    // },
    
    loaderSwitch: (state, action) => {
      state.value.app.loader = action.payload
    },

    reloadMenu: (state, action) => {
      state.value.mainMenu = action.payload
    },

    reloadProducts: (state, action) => {
      //при первом получении какое количество продуктов нужно получать?
      state.value.products = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reloadMenu, loaderSwitch, reloadProducts } = dataSlice.actions

export default dataSlice.reducer