import { store } from '@/store';
import { useDispatch } from 'react-redux';

type AppDispatch = typeof store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch;
export default useAppDispatch;
