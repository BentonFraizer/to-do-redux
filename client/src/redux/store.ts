import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';

export const store = createStore(rootReducer, composeWithDevTools());
export type RootState = ReturnType<typeof store.getState>;
