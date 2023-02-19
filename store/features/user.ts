import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
	user: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.user,
			};
		},
	},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
