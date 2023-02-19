import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { userSlice } from './features/user';

const makeStore = () =>
	configureStore({
		reducer: {
			[userSlice.name]: userSlice.reducer,
		},
	});

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

const wrapper = createWrapper(makeStore);

export default wrapper;
