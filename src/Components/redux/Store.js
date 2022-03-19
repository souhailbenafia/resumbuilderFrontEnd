import {createStore , applyMiddleware} from 'redux'
import {composeWithDevTools}from 'redux-devtools-extension'
import ThunkMiddleware from 'redux-thunk'
import Reducers from './reducers'

const initialState={}
const store = createStore(
    Reducers,
    initialState ,
    composeWithDevTools(applyMiddleware(ThunkMiddleware))
)
export default  store;