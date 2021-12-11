import { configureStore } from '@reduxjs/toolkit'
import dashReducer from '../Dashboard/dashSlice'


export default configureStore({
    reducer: {
        dash: dashReducer
    },
})