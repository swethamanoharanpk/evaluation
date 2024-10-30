import {configureStore} from '@reduxjs/toolkit'
import productList from './productSlice'
export default configureStore({
    reducer:{
        showProduct:productList
    }
}
    
)
