import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { typeRootState } from '@/store/store';

export const useTypedSelector: TypedUseSelectorHook<typeRootState> =
	useSelector;
