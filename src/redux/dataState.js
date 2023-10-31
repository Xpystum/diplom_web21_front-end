import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'dataState',
  initialState: {
    value: {
      app: {
        loader: true,
      },
      mainMenu: [],
      products: {
        loader: true,
        data: []
      }
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
      state.value.products.data = action.payload
    },

    loaderSwitchProducts: (state, action) => {
      state.value.products.loader = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, 
                decrement, 
                incrementByAmount, 
                reloadMenu, 
                loaderSwitch, 
                reloadProducts, 
                loaderSwitchProducts 
              } = dataSlice.actions

export default dataSlice.reducer