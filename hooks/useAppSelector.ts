import { RootState } from '@/store';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useAppSelector;
