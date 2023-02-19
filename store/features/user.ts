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
			const data = Object.entries(action.payload);
			data.forEach((entry) => {
				const [key, value] = entry;
				// @ts-ignore
				state.user = { [key]: value ?? '' };
			});
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
