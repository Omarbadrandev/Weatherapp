import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// definitions are written here because I learned Redux through the task ;) 
// Redux: A container where you can store whole application data,
//it is called to state management
// Redux is most useful in cases when:

// You have large amounts of application state that are needed in many places in the app
// The app state is updated frequently
// The logic to update that state may be complex
// The app has a medium or large-sized codebase, and might be worked on by many people
// You need to see how that state is being updated over time

// thats why maybe redux is not a good choice to use for a small application like this one, 
// but in this case the state will be updated frequently and should be saved in the persistStore to solve the problem of persisting state when page reload.

//ways to Persist state between pages reload:
// https://blog.bitsrc.io/5-methods-to-persisting-state-between-page-reloads-in-react-8fc9abd3fa2f
//1. Using LocalStorage
//2. Using URL Params
//3. Using Redux Persist 'which am using here'

interface CityLocationState{
    type:string,
    value:Array<number> | undefined
}
//reducer is a function that takes current state and and action
const initialState: CityLocationState = {
    type:'initalValue',
    value:[]
}

function reducer(state=initialState, action:{type:string, value:Array<number>  | undefined}){
    if(action.type === 'setNewCityLocationState'){
        return action
    }else {
        return state
    }
}

const persistConfig = {
    key: 'location',
    storage,
};

const pReducer = persistReducer(persistConfig, reducer);

const store = createStore(pReducer)
// Using persistor to save the city state when Page reload
export const persistor = persistStore(store);
export default store