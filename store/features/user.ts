import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface UserState {
	user: User | null;
}

const initialState: UserState = {
	user: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		updateUserDetails: (state, action: PayloadAction<Partial<User>>) => {
			state.user = { ...state?.user, ...action.payload };
		},
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.user,
			};
		},
	},
});

export const { updateUserDetails } = userSlice.actions;

export default userSlice.reducer;
