import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/contactsReducer';


const store = configureStore({
    reducer: {
        contacts: reducer
    }
});

export default store;