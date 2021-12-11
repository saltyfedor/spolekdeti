import { createSlice } from '@reduxjs/toolkit'

export const dashSlice = createSlice({
  name: 'dash',
  initialState: {      
    token: '',   
  },
    reducers: {
        setToken: (state, props) => {
          state.token = props.payload
          
      }
  },
  
})

export const { setToken } = dashSlice.actions


export default dashSlice.reducer