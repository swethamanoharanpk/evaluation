import {createSlice} from '@reduxjs/toolkit'
const productList = createSlice({
    name:"showProduct",
    initialState:{
        data:[],
        cartone:[] 
    },
    reducers:{
        addItem:(state,action)=>{
            console.log("333333",action.payload)
            state.data.push(action.payload)

        },
        addToCart:(state,action)=>{
            console.log("8888",action.payload)
            const one = action.payload
            const exsistingitem = state.cartone.find((cartonefind)=>cartonefind.id==one.id)
            if(exsistingitem){

            }else{
                state.cartone.push(one)
            }
            
        },
        removeItem:(state,action)=>{
            state.cartone = state.cartone.filter((cartlist)=>cartlist.id!==action.payload)

            //state.cartone.push(action.payload)
        }
    }
})
export const {addItem,addToCart,removeItem} = productList.actions
export default productList.reducer