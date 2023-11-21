import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'dataState',
  initialState: {
    value: {
      app: {
        loader: true,
        auth:{
          token: '',
        },
      },
      mainMenu: [],
      products: {
        loader: true,
        data: []
      },
      select_product:{
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

    authToken: (state, action) => {
      state.value.app.auth.token = action.payload
    },

    removeToken: (state, action) => {
      localStorage.removeItem('my_token');
      state.value.app.auth.token = ''
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
    reloadSelectProduct: (state, action) => {
      state.value.select_product.data = action.payload
    },
    loadSelectProduct: (state, action) => {
      state.value.select_product.loader = false
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
                authToken,
                removeToken,
                loadSelectProduct,
                reloadSelectProduct
              } = dataSlice.actions

export default dataSlice.reducer