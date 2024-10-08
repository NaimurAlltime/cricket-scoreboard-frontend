
import { configureStore } from '@reduxjs/toolkit';
import { scoreApi } from './features/scoreApi';


const store = configureStore({
    reducer: {
        [scoreApi.reducerPath]: scoreApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(scoreApi.middleware),
});

export default store;