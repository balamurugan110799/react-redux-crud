import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", name: "Bala", },
    { id: "2", name: "Joy", },
];

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userAdd: (state, action) => {
            console.log(action.payload)

        
            state.push(action.payload)
        },
        userUpdate: (state, action) => {
            // console.log(action.payload)
            const { id, name } = action.payload;
            state.forEach((el) => {
                if (el.id === id) {
                    el.name = name
                }
            })
        },
        userDelete: (state, action) => {
            const { id, name } = action.payload;
            console.log(action.payload)

            // state.forEach((el) => {
            //     return el.id !== id
            // })
            const deleted = state.find((user) => user.id === id)
            if(deleted){
                return state.filter((user) => user.id !== id)
            }
        }
    },
})

export const { userAdd, userUpdate, userDelete } = userSlice.actions

export default userSlice.reducer

