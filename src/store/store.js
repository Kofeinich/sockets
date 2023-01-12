import { configureStore } from '@reduxjs/toolkit';
import blocksReducer from '../slices/blocksSlice'

export default configureStore({
    reducer: {
        blocks: blocksReducer,
    },
    devTools: true,
})