import {configureStore, createSlice} from '@reduxjs/toolkit';

const user = createSlice({
    name : 'user',
    initialState : {name:'홍길동', memberYear:1},

    reducers:{
        
    changeName(state){
        state.name = state.name + ' : green'
    },
    changeYear(state,action){
        state.memberYear += action.payload
    }
    }
})
export const { changeName, changeYear } = user.actions
export default configureStore({
    reducer : {
        user: user.reducer
    }

})


