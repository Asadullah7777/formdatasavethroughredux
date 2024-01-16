import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [""],
};

export const formSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        save: (state = { ...initialState }, action) => {
            console.log("kjfashjkaf", action.payload);
            state.user.push(action.payload);
            // let { data } = State;
            // console.log("12sdcsdcs3", state)
            // const ddd = state.data;
            // ddd.push(action.payload);
            // console.log("123", ddd)
            // state.data.push(action.payload);
            // state.data = ddd;
            // console.log("action.payload: ", action.payload)
            // state.data = state.data.concat([{
            //     id: "",
            //     name: "",
            //     email: "",
            //     age: "",
            //     address: "",

            // }]);
        },
        update: (state, action) => {
            console.log("swchskcj")
            const allUser = [...state.user];
            const newData = allUser?.filter(
                (record) => record.id !== action.payload.id
            );
            state.user = [...newData, action.payload];
        },
        deleted: (state, action) => {
            // state.data = state.data.filter(
            //     (user) => user.id !== action.payload.id
            // );
            console.log(`action.payload = ${action.payload}`); // returns correct id

            state.user = state.user.filter((record) => record.id !== action.payload);
        },
    },
});

export const { save, update, deleted } = formSlice.actions;
export default formSlice.reducer;
