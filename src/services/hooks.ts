import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import type { RootStore, AppDispatch } from 'src/services/store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector
