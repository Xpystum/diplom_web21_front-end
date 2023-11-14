import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'dataState',
  initialState: {
    value: {
      app: {
        loader: true,
        auth:{
          token: ''
        },
      },
      mainMenu: [],
      products: {
        loader: true,
        data: []
      },
      brands: {
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

    authToken: (state, action) => {
      state.value.app.auth.token = action.payload
    },
    
    loaderSwitch: (state, action) => {
      state.value.app.loader = action.payload
    },

    reloadMenu: (state, action) => {
      state.value.mainMenu = action.payload
    },
    reloadBrands: (state, action) => {
      state.value.brands.data = action.payload
    },
    loaderSwitchBrands: (state, action) => {
      state.value.brands.loader = action.payload
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
                loaderSwitchProducts,
                reloadBrands,
                loaderSwitchBrands,
                authToken
              } = dataSlice.actions

export default dataSlice.reducer