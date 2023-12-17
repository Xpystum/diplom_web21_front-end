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
      },
      user: {
        loader: true,
        data: [],
        favorites: []
      },

      select_user: {
        loader: true,
        data: []
      },

      filter:{
        data: {
          dataList: [],
          dataListImg: [],
          dataListImgSvg: [],
          dataListColor: [],
          dataListNumber: [],
          dataListRadioButton: [],
          dataListCheckButton: [],
          dataListFilterInput: [],
        }
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
    reloadUser: (state, action) => {
      state.value.user.data = action.payload
    },
    loaderUser: (state, action) => {
      state.value.user.loader = action.payload
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
    },
    addFavorite: (state, action) => {
      state.value.user.favorites = action.payload
    },

    // filtr component

    //CustomDataList
    addFilterData: (state, action) => {
      state.value.filter.data.dataList = action.payload;
    },
    // CustomDataListImg
    addFilterDataImg: (state, action) => {
      state.value.filter.data.dataListImg = action.payload;
    },
    // CustomDataListImg
    addFilterDataImgSvg: (state, action) => {
      state.value.filter.data.dataListImgSvg = action.payload;
    },

    // ButtonMultiButton
    addFilterDataColor: (state, action) => {
      state.value.filter.data.dataListColor = action.payload;
    },

    // CustomDataListNumber
    addFilterNumber: (state, action) => {
      state.value.filter.data.dataListNumber = action.payload;
    },
    
    // RadioButtonBootstrap
     addFilterRadioButton: (state, action) => {
      state.value.filter.data.dataListRadioButton = action.payload;
    },

    // CheckButtonBootsrap
     addFilterCheckButton: (state, action) => {
      state.value.filter.data.dataListCheckButton = action.payload;
    },
    
    // InputFormBootstrap
     addFilterFilterInput: (state, action) => {
      state.value.filter.data.dataListFilterInput = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
export const { 
                reloadMenu, 
                loaderSwitch, 
                reloadProducts, 
                loaderSwitchProducts,
                reloadBrands,
                loaderSwitchBrands,
                authToken,
                removeToken,
                loadSelectProduct,
                reloadSelectProduct,
                reloadUser,
                loaderUser,
                addFavorite,
                addFilterData,
                addFilterDataImg,
                addFilterDataImgSvg,
                addFilterDataColor,
                addFilterNumber,
                addFilterRadioButton,
                addFilterCheckButton,
                addFilterFilterInput,
              } = dataSlice.actions

export default dataSlice.reducer