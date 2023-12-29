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
      users: {
        data: [],
        favorites: []
      },
      select_user: {
        loader: true,
        data: []
      },
      reviews: {
        loader: true,
        data: []
      },
      select_review:{
        loader: true,
        data: []
      },
      user_review:[]
      ,
    }
  },
  reducers: {

    authToken: (state, action) => {
      state.value.app.auth.token = action.payload
    },

    removeToken: (state, action) => {
      localStorage.removeItem('my_token');
      state.value.app.auth.token = '';
    },
    
    loaderSwitch: (state, action) => {
      state.value.app.loader = action.payload
    },
    reloadUsers: (state, action) => {
      state.value.users.data = action.payload
    },
    reloadSelectUser: (state, action) => {
      state.value.select_user.data = action.payload
    },
    loaderSelectUser: (state, action) => {
      state.value.select_user.loader = action.payload
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
      state.value.users.favorites = action.payload
    },
    //reviews
    reloadReviews: (state, action) => {
      state.value.reviews.data = action.payload
    },
    reloadSelectReview: (state, action) => {
      state.value.select_review.data = action.payload
    },
    loadSelectReview: (state, action) => {
      state.value.select_review.loader = false
    },
    loaderSwitchReviews: (state, action) => {
      state.value.reviews.loader = action.payload
    },
    reloadUserReview: (state, action) => {
      state.value.user_review = action.payload
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
                reloadSelectUser,
                reloadUsers,
                loaderSelectUser,
                addFavorite,
                reloadReviews,
                reloadSelectReview,
                loadSelectReview,
                loaderSwitchReviews,
                reloadUserReview,
              } = dataSlice.actions

export default dataSlice.reducer